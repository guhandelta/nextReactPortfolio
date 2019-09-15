const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = routes.getRequestHandler(app);

app.prepare()
.then(() => {
    const server = express();
    
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

    server.use(handle).listen(4000, (err) =>{
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})
    