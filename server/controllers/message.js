var mongoose = require('mongoose');
var Message = mongoose.model('Messages');

module.exports = {
  create: function(req, res){
    Message.create(req.body, function(err, data){
      if(err) {console.log(err);}
      if(data) {res.json(data);}
    })
  },
  get: function(req, res){
    Message.find(function(err, data){
      if(err) {console.log(err);}
      if(data) {res.json(data);}
    }).sort({'createdAt': -1}).limit(40);
  },
};