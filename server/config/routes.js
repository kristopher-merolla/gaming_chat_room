var user = require('../controllers/user.js');
var message = require('../controllers/message.js');
const path = require('path');

module.exports = function (app) {

    app.get('/players', user.show_active)

    app.post('/logStatusFalse', user.update_logStatus_false)
    app.post('/logStatusTrue', user.update_logStatus_true)

    app.post('/userlogin', user.show);

    app.post('/usercreate', user.create);

    app.post('/getUserId', user.show);
    app.post('/message', message.create);
    app.get('/messages', message.get);
    
    // "Catch All" route, put at bottom of other routes
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    })
}