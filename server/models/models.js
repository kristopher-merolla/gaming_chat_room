var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
	name        :{type: String, required: true, minlength: 4}, // server side validation
	logStatus   :{type: Boolean, default: true}, // log in status, defaults to true
}, {timestamps: true})


mongoose.model("Users", userSchema);