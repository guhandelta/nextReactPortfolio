const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('../routes');
const authService = require('./services/auth');
const config = require('./config');

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

mongoose.connect(config.DB_URI,{ useCreateIndex: true ,useNewUrlParser: true, useUnifiedTopology: true })
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
    
    server.post('/api/v1/books', (req,res) => {   
        const bookData = req.body;
        console.log(bookData);
        const book = new Book(bookData);

        book.save((err, createdBook) =>{
            if(err){
                return res.status(422).send(err);
            }
            return res.json(createdBook);
        });
    });

    server.get('/api/v1/books',(req,res) => {
        Book.find({}, (err, allBooks) => {
            if(err){
                return res.status(422).send(err);
            }

            return res.json(allBooks);
        })
    });

    server.patch('/api/v1/books/:id', (req,res) => {
        const bookId = req.params.id;
        const bookData = req.body;
        Book.findById(bookId, (err, foundBook) => {
            if(err){
                return res.status(422).send(err);
            }
            
            foundBook.set(bookData);
            foundBook.save((err, savedBook) => {
                if(err){
                    return res.status(422).send(err);
                }
                return res.json(foundBook);
            });
        })
    })
    
    server.delete('/api/v1/books/:id', (req,res) =>{
        const bookId = req.params.id;
        
        Book.deleteOne({_id: bookId}, (err, deletedBook) =>{
            if(err){
                return res.status(422).send(err);
            }
            
            return res.json({ status: 'DELETED' });
        })

    });

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
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})   