var mongoose = require('mongoose');
var User = mongoose.model('Users');

module.exports = {
    // basic CRUD operations (boilerplate)
    create: function(req, res) {
        User.create(req.body, function(err, output){
            if (err) {
                res.json({message: "Error", error: err})
            }
            else {
                res.json({message:"Success", user: output})
            }
        })
    },
    update: function(req, res) {
        User.update({ _id: req.body._id }, req.body, function(err, output){
            if (err) {
                res.json({message: "Error", error: err})
            }
            else {
                res.json({message:"Success", user: output})
            }
        })
    },
    delete: function(req, res) {
        User.remove({ _id: req.body._id })
        .then((data)=>{
            res.json({message: "Success"})
        })
        .catch((err)=>{
            res.json({message: "Error", error: err})
        })
    },
    show: function(req, res) {
        console.log("body name:",req.body.name); // look in server
        User.findOne({name: req.body.name}) // name 
        .then((friend)=>{
            console.log("hit the THEN");
            res.json({message: "Success", user: friend})
        })
        .catch((err)=>{
            console.log("hit the Catch");
            res.json({message: "Error", error: err})
        })
    }
};