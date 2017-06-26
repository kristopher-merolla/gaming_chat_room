var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

// // put in global promise
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/beltExamPrep'); // database

var models_path = path.join(__dirname,'./../models');

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(models_path + '/' + file);
    }
})