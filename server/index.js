const express = require('express');
const next = require('next');
const routes = require('../routes');

const authService = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = routes.getRequestHandler(app);

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

app.prepare()
.then(() => {
    const server = express();

    server.get('/api/v1/secret', authService.checkJWT, (req,res) => {

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