const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('./server/config/mongoose.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist')));

// ROUTES
var routes = require('./server/config/routes.js')(app);


app.listen(8000, function () {
    console.log('listening on port 8000');
})