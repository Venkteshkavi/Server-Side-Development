const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','plain/text');
    next();
})
.get((req,res,next) =>{
    res.end('Fetching all Leaders');
})
.post((req,res,next) =>{
    res.write('Posting a New Leader' + '\n');
    res.end('Adding new leader with name: '+ req.body.name + ' with description: ' + req.body.description);
})
.put((req,res,next) =>{
    res.end('PUT operation not supported for /leader');
})
.delete((req,res,next) =>{
    res.end('Deleting the requested ')
});

leaderRouter.route('/:leaderId')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Sending the details of the leader requested ' + req.params.leaderId);
})
.post((req,res,next) =>{
    res.statusCode = 403;
    res.end('Post operation not supported for leaderId')
})

.put((req,res,next)=>{
    
    res.write('Updating the leader your requested ' + req.params.leaderId + '\n');
    
    res.end('Updating the leader: ' + req.body.name + ' with details :' + req.body.description);
})
.delete((req, res, next)=>{
    res.end('Deleting leader: ' + req.params.leaderId);
});

module.exports = leaderRouter;