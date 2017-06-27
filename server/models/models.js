var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
	name        :{type: String, required: true, minlength: 4}, // server side validation
	logStatus   :{type: Boolean, default: true}, // log in status, defaults to true
	socket_id: { type: String }
}, {timestamps: true})
mongoose.model("Users", userSchema);

var messageSchema = mongoose.Schema({
	message: { type: String, required: true, minlength: 1 },
	sever_msg: { type: String },
	name: { type: String }
}, { timestamps: true })
mongoose.model('Messages', messageSchema);