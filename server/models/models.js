var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
	name        :{type: String, required: true, minlength: 4}, // server side validation
}, {timestamps: true})

var topicSchema = mongoose.Schema({
	title       :{type: String, required: true, minlength: 8}, // title of the survey / question
	option_1		:{type: Array, required: true, minlength: 3}, // [option 1,vote count]
	option_2		:{type: Array, required: true, minlength: 3}, // [option 2,vote count]
	option_3		:{type: Array, required: true, minlength: 3}, // [option 3,vote count]
	option_4		:{type: Array, required: true, minlength: 3}, // [option 4,vote count]
	user		:String, // name of user who posted the survey
	user_id     :String, // user_id of user who posted survey (for delete option)
}, {timestamps: true})

mongoose.model("Users", userSchema);
mongoose.model("Topics", topicSchema);