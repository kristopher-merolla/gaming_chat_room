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
    update_logStatus_false: function(req, res) {
        User.update({ _id: req.body._id }, { $set: {logStatus: false}}, function(err, output){
            if (err) {
                res.json({message: "Error", error: err})
            }
            else {
                res.json({message:"Success", user: output})
            }
        })
    },
    update_logStatus_true: function(req, res) {
        User.update({ _id: req.body._id }, { $set: {logStatus: true}}, function(err, output){
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
        User.findOne({name: req.body.name}) // name 
        .then((friend)=>{
            res.json({message: "Success", user: friend})
        })
        .catch((err)=>{
            res.json({message: "Error", error: err})
        })
    },
    // pulls ONLY the logStatus: true names
    show_active: function(req, res) {
        User.find({logStatus: true})
        .then((friend)=>{
            res.json({message: "Success", user: friend})
        })
        .catch((err)=>{
            res.json({message: "Error", error: err})
        })
    }
};