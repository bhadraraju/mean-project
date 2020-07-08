 var mongoose = require('mongoose');
 var schema = mongoose.schema;
 var bcrypt = require('bcrypt');

 var schema = new schema({
     email:{type:String,require:true},
     username:{type:String,require:true},
     password:{type:String,require:true},
     creation_dt:{type:Date,require:true}
 });

 schema.statics.hashpassword = function hashpassword(password){
     return bcrypt.hashSync(password,10);    

 }
 schema.methods.isValid = function(hashpassword){
     return bcrypt.compareSync(hashpassword, this.password);


 }
 module.exports = mongoose.model('User',schema);