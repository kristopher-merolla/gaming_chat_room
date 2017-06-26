const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('./server/config/mongoose.js');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist')));

// ROUTES
var routes = require('./server/config/routes.js')(app);

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('disconnect', function(){
        // need to fix bug where if someone closes tab, they're still considered online
        console.log('user disconnected');
    })
    // socket.on('add-message', (message) => {
    //     io.emit('message', {type: 'new-message', text: message});
    // })
})

http.listen(8000, function () {
    console.log('listening on port 8000');
})