var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
//router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
//});

router.post('/register',function(req,res,next){
  addToDB(req,res)


});


async function addToDB(req,res){

  var user = new user({
    email:req.body.email,
    username:req.body.username,
    password:User.hashpassword(req,body,password),
    creation_dt:Date.now()

  });

  try{
    doc = user.save();
    return res.status(201).json(doc);
  }
  catch(err){
       return res.status(501).json(err);
  }

}

module.exports = router;
