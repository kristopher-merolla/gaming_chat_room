var mongoose = require('mongoose');
var Topic = mongoose.model('Topics');

module.exports = (function() {
	return {
        index: function(req,res){ // pull ALL topics
            Topic.find({}, function(err, data){
                if(err){
                    res.json({message:"Error", error: err})
                }
                else {
                    res.json({message: "Success", topics: data})
                }
            })
        },
		// basic CRUD operations (boilerplate)
        create: function(req, res) {
            Topic.create(req.body, function(err, output){
                if (err) {
                    console.log("new topic NOT added ERR");
                    res.json({message: "Error", error: err})
                }
                else {
                    console.log("new topic added ELSE");
                    res.json({message:"Success", topic: output})
                }
            })
        },
        update: function(req, res) {
            Topic.update({ _id: req.body._id }, req.body, function(err, output){
                if (err) {
                    res.json({message: "Error", error: err})
                }
                else {
                    res.json({message:"Success", topic: output})
                }
            })
        },
        // function for voting on option 1 of element
        vote1: function(req, res) {
            // console.log(req.body.id)
            Topic.update({ _id: req.body.id }, {$inc: {"option_1.1": 1}}, function(err, output){
                if (err) {
                    res.json({message: "Error", error: err})
                }
                else {
                    res.json({message:"Success", topic: output})
                }
            })
        },
        // function for voting on option 2 of element
        vote2: function(req, res) {
            // console.log(req.body.id)
            Topic.update({ _id: req.body.id }, {$inc: {"option_2.1": 1}}, function(err, output){
                if (err) {
                    res.json({message: "Error", error: err})
                }
                else {
                    res.json({message:"Success", topic: output})
                }
            })
        },
        // function for voting on option 3 of element
        vote3: function(req, res) {
            // console.log(req.body.id)
            Topic.update({ _id: req.body.id }, {$inc: {"option_3.1": 1}}, function(err, output){
                if (err) {
                    res.json({message: "Error", error: err})
                }
                else {
                    res.json({message:"Success", topic: output})
                }
            })
        },
        // function for voting on option 4 of element
        vote4: function(req, res) {
            // console.log(req.body.id)
            Topic.update({ _id: req.body.id }, {$inc: {"option_4.1": 1}}, function(err, output){
                if (err) {
                    res.json({message: "Error", error: err})
                }
                else {
                    res.json({message:"Success", topic: output})
                }
            })
        },
        delete: function(req, res) {
            console.log("inside topic conttroller",req.body.id);
            Topic.remove({ _id: req.body.id })
            .then((data)=>{
                res.json({message: "Success"})
            })
            .catch((err)=>{
                res.json({message: "Error", error: err})
            })
        },
        show: function(req, res) {
            Topic.findOne({_id: req.params.id})
            .then((friend)=>{
                res.json({message: "Success", topic: topic})
            })
            .catch((err)=>{
                res.json({message: "Error", error: err})
            })
        }
	}
})();