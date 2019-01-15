const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Sending all the dishes to your request');
})

.post((req,res,next) => {
    res.end('Adding dish: ' + req.body.name + 'with deatils: ' + req.body.description);   
})

.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported for /dishes');
})

.delete((req,res,next) => {
    res.end('Deleting the requested dishes');
});

dishRouter.route('/:dishId')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Sending the details of the dish requested ' + req.params.dishId);
})
.post((req,res,next) =>{
    res.statusCode = 403;
    res.end('Post operation not supported for dishId')
})

.put((req,res,next)=>{
    
    res.write('Updating the dish your requested ' + req.params.dishId + '\n');
    
    res.end('Updating the dish: ' + req.body.name + ' with details :' + req.body.description);
})
.delete((req, res, next)=>{
    res.end('Deleting dish: ' + req.params.dishId);
});

module.exports = dishRouter;
