const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('../routes');
const authService = require('./services/auth');
const config = require('./config');

const bookRoutes = require('./routes/book');
const portfolioRoutes = require('./routes/portfolio');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = routes.getRequestHandler(app);

const Book = require('./models/book');

const secretData = [
    {
        title:'secretData1',
        description: 'Plans to build a spaceship'
    },
    {
        title:'secretData2',
        description: 'Nuke Codes'
    }
    
]

mongoose.connect(config.DB_URI,{ useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log('Database Connection Successful!!'))
    .catch(err => console.error(err));

// async () => (await mongoose.connect(config.DB_URI),{ useCreateIndex: true ,useNewUrlParser: true, useUnifiedTopology: true })();
app.prepare()
.then(() => {
    const server = express();
    server.use(bodyParser.json());
    // This like is to inform the server that the bodyParser middleware will be/is used  
    // body-parser is same the route handler => authService.checkJWT, but this provides additional funcitonality-
    //- like the data will be available in the request body

    server.use('/api/v1/books', bookRoutes);
    // since the route is provided here, it shall be removed in the routes/book.js file
    server.use('/api/v1/portfolios', portfolioRoutes);
    
    server.get('/api/v1/secret', authService.checkJWT, (req,res) => {
        return res.json(secretData);
    })

    server.get('/api/v1/onlysiteowner', authService.checkJWT,authService.checkRole('siteOwner'), (req,res) => {
        return res.json(secretData);
    })
    
    // This block handles specific requests, and is placed before server.get('*',(req,res) =>{-
    // -as the control never crosses that block, to enter this block, and this block never gets executed
    // * is the wild card here
    // server.get('/portfolio/:id', (req, res) => {
    //     const actualPage = '/portfolio'
    //     const queryParams = { id: req.params.id }
    //     app.render(req, res, actualPage, queryParams)
    // }) ==> This block is not required anymore as this functionality is taken care by next/routes

    server.get('*', (req,res) => {
        return handle(req,res)
    })


    server.use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
          res.status(401).send({title:'Unauthorized',detail:'Unauthorized Access!!.... Invalid token'});
        }
    });

    server.use(handle).listen(4000, (err) =>{
        if (err) throw err
        console.log('===> Server Running on http://localhost:4000')
    })
})
.catch((ex) => { 1
    console.error(ex.stack)
    process.exit(1)
})   