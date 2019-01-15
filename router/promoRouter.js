const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Getting your desired promo!!');
})
.post((req,res,next) =>{
    res.end('Adding promotion ' + req.body.name + ' with description ' + req.body.description );
})
.put((req,res,next) =>{
    res.stausCode = 403;
    res.end('PUT operation not supported for /promotions');
})
.delete((req,res,next) =>{
    res.end('Deleting all the promos!!');
});

promoRouter.route('/:promoId')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Getting your desired promo : ' + req.params.promoId);
})
.post((req,res,next) =>{
    res.end('POST opeartion is not supported for promoId');
})
.put((req,res,next) =>{
    res.stausCode = 403;
    res.write('Requested PromoId : '+ req.params.promoId + '\n');
    res.end('Updating promoId with name: ' + req.body.name + ' and description: ' + req.body.description);
})
.delete((req,res,next) =>{
    res.end('Deleting all the promo with id : ' + req.params.promoId);
});


module.exports = promoRouter;
