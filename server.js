const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('./server/config/mongoose.js');
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist')));

// ROUTES
var routes = require('./server/config/routes.js')(app);

io.on('connection', (socket) => {
    console.log('user connected', socket.id);
    socket.on('disconnect', function(){
        console.log('user disconnected', socket.id);
        io.emit('user_logout', socket.id);
    })
    socket.on('add-message',(message) => {
        console.log('Server:', message);
        socket.broadcast.emit('message', message);
    })
})

http.listen(8000, function () {
    console.log('listening on port 8000');
})

