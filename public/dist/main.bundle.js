webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
            { path: 'pong', component: __WEBPACK_IMPORTED_MODULE_4__game_game_component__["a" /* GameComponent */] },
            { path: 'golf', component: __WEBPACK_IMPORTED_MODULE_4__game_game_component__["a" /* GameComponent */] }
        ] },
    { path: '**', redirectTo: '/dashboard' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#big_wrapper {\n    margin: 0px auto;\n    vertical-align: middle;\n    width: auto;\n    min-height: 100vh;\n    background-color: darkslategray;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"big_wrapper\">\n\n\n<router-outlet></router-outlet> \n\n    \n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent.prototype.login = function (user) {
        console.log("hit parent login function", user);
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__game_game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_11__game_game_component__["a" /* GameComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_12__chat_service__["a" /* ChatService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });


var ChatService = (function () {
    function ChatService() {
        this.url = 'http://localhost:8000';
    }
    ChatService.prototype.sendMessage = function (message) {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(this.url);
        console.log(message);
        this.socket.emit('add-message', message);
    };
    ChatService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(_this.url);
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ChatService.prototype.getSocketID = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(_this.url);
            _this.socket.on('user_logout', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return ChatService;
}());

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  chat works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChatComponent);

//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n    padding: 0px;\n    margin: 0px;\n}\ndiv#big_wrapper {\n    height: 100vh;\n    background-color: #0e0e0e;\n}\ndiv#topBar {\n    background-color: #ff6c60;\n    height: 60px;\n}\ndiv#innerTop {\n    /*width: 1200px;*/\n    height: 60px;\n    padding-top: 15px;\n    margin-left: 20px;\n    margin-right: 20px;\n}\n#title{\n    color: #333;\n}\nh3 {\n    display: inline-block;\n    font-size: 24pt;\n    margin-right: 20px;\n}\nbutton {\n    background-color: #ff7a5a;\n    margin-bottom: 15px;\n    margin-right: 15px;\n    width: 50px;\n    height: 25px;\n    border: none;\n    color: white;\n    font-weight: 200;\n}\n#logout_button{\n    float: right;\n}\ndiv#body {\n    background-color: #323232;\n    /*width: 1200px;*/\n    margin: auto;\n    /*margin-top: 30px;*/\n    /*height: 650px;*/\n}\ndiv#onlinePlayers {\n    display: inline-block;\n    width: 230px;\n    height: 720px;\n    padding: 5px;\n    vertical-align: top;\n    color: #ff8f00;\n    background-color: #282828;\n}\ndiv#playerList {\n    background-color: #404040;\n    overflow: scroll;\n    border-radius: 5px;\n    height: 400px;\n    padding-left: 10px;\n    padding-top: 10px;\n}\n#online_header {\n    color: darkslategray;\n    margin-bottom: 10px;\n}\ndiv#middle {\n    vertical-align: top;\n    background-color: #484848;\n    width: 1010px;\n    height: 720px;\n    display: inline-block;\n    padding: 10px;\n}\ndiv#chatSpace {\n    vertical-align: top;\n    display: inline-block;\n    background-color: #282828;\n    width: 352px;\n    height: 720px;\n    padding: 10px;\n}\ndiv#msgSpace {\n    overflow: scroll;\n    background-color: #404040;\n    height: 660px;\n    border-radius: 5px;\n    padding: 5px;\n}\n.msg_user {\n    color: #f78f00;\n}\n.msg_msg {\n    color: white;\n}\n#msg_input {\n    width: 272px;\n    height: 25px;\n    margin-top: 5px;\n    border: none;\n    border-radius: 5px 0 0 5px;\n}\n#submitMsg {\n    height: 25px;\n    width: 55px;\n    background-color: #ff6c60;\n    color: white;\n    border-radius: 0 5px 5px 0;\n    border: none;\n}\ndiv#gameSpace {\n    display: inline-block;\n}\n.red {\n    color: red;\n}\n/*#activeUser {\n    display: inline-block;\n    width: 95%;\n    padding-left: 10px;\n    color: darkslategray;\n}*/\n\n#optionBar {\n    display: inline-block;\n    text-align: right;\n    margin-bottom: 10px;\n}\n\n/*#rightSpace {\n    display: inline-block;\n    width: 1060px;\n    height: 661px;\n    margin-left: -4px;\n}*/\n\n/*#onlinePlayers {\n    display: inline-block;\n    vertical-align: top;\n    border-right: 2px solid darkslategray;\n    width: 220px;\n}*/\n\n/*#gameSpace {\n    width: 1052px;\n    height: 461px;\n    padding: 10px;\n    display: inline-block;\n}*/\n\n/*#game_selector {\n    display: inline-block;\n}*/\n\n/*#msg_input{\n    width: 965px;\n    border-radius: 5px;\n    border: 2px solid silver;\n}*/\n/*\n#messageSpace {\n    width: 1060px;\n    height: 160px;\n    overflow: scroll;\n    padding: 10px;\n    border-bottom-right-radius: 10px;\n}*/\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"big_wrapper\">\n  <div id=\"topBar\">\n    <div id=\"innerTop\">\n      <a id=\"title\" (click)=\"toDashboard()\"><h3>Gaming Hub</h3></a>\n      <button (click)=\"pong()\" type=\"button\" class=\"btn btn-default\">Pong</button>\n      <button (click)=\"golf()\" type=\"button\" class=\"btn btn-default\">Golf</button>\n      <button id=\"logout_button\" (click)=\"logoutUser()\" class=\"btn btn-default\">logout</button>\n    </div> <!--innerTop-->\n  </div> <!--topBar-->\n  <div id=\"body\">\n    <div id=\"onlinePlayers\">\n      <h3 id=\"online_header\">Players</h3>\n      <div id=\"playerList\">\n        <div *ngFor=\"let player of players\">\n          {{player.name}}\n        </div> <!--player names-->\n      </div> <!--playerList-->\n    </div> <!--onlinePlayers-->\n\n    <div id=\"middle\">\n      <h1>Game will load here. What to put here while game is not loaded?</h1>\n      <h1>Options...</h1>\n      - Panning game images <br>\n      - One image with short game description <br>\n      - Clickable game images that will load game <br>\n      <div id=\"gameSpace\" *ngIf=\"game_profile\">\n        <router-outlet></router-outlet>\n      </div>\n    </div> <!--middle-->\n\n    <div id=\"chatSpace\">\n      <div id=\"msgSpace\">\n        <div *ngFor='let message of messages'>\n          ({{ message.createdAt | date: 'shortTime' }})\n          <span class=\"msg_user\">{{ message.name }}</span>\n          <span class=\"msg_msg\">{{ message.message }}</span>\n        </div>\n      </div>\n      <form #msgForm='ngForm' (submit)=onSubmit(msgForm)>\n        <input id=\"msg_input\" type=\"text\" name=\"message\"\n        [(ngModel)]='message_obj.message'\n        #message='ngModel'\n        required>\n        <input id=\"submitMsg\" type=\"submit\" value=\"Send\">\n      </form>\n      <div *ngIf='message.errors && (msgForm.submitted )' class='red'>\n        <li *ngIf='message.errors.required'>Message is required</li>\n      </div>\n    </div>\n    \n  </div> <!--body-->\n</div> <!--big_wrapper-->"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(_httpService, _router, _cookieService, _chatService) {
        var _this = this;
        this._httpService = _httpService;
        this._router = _router;
        this._cookieService = _cookieService;
        this._chatService = _chatService;
        this.messages = [];
        this.message_obj = {
            message: '',
            name: '',
        };
        this.aTaskEventEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); // emit from the form up to the parent
        // sendMessage() {
        // this._chatService.sendMessage(this._cookieService.get('username') + ' has logged on');
        // this.message='';
        // }
        // local (component) variables 
        this.game_profile = false; // false as default
        this.activeUser = ""; // null as default
        this.user_for_db = {
            name: "",
            logStatus: false
        };
        this.errors = null;
        this.players = null;
        // this.sendMessage();
        this._httpService.getMessage()
            .then(function (obj) {
            _this.messages = obj.reverse();
        })
            .catch(function (err) { console.log(err); });
    }
    DashboardComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.message_obj.name = this._cookieService.get('username');
        this._chatService.sendMessage(this.message_obj);
        this._httpService.createMessage(this.message_obj)
            .then(function (obj) {
            // form.resetForm();
            _this._httpService.getMessage()
                .then(function (data) {
                _this.messages = data.reverse();
                form.resetForm();
            })
                .catch(function (err) { console.log(err); });
        })
            .catch(function (err) { console.log(err); });
    };
    DashboardComponent.prototype.toDashboard = function () {
        this.game_profile = false;
        this._router.navigate(['dashboard']);
    };
    DashboardComponent.prototype.logoutUser = function () {
        var _this = this;
        // get user id
        this._httpService.getUserId(this.activeUser)
            .then(function (user) {
            // change logStatus of user to FALSE
            _this._httpService.logStatusFalse(user.user)
                .then(function (data) {
                // reset active user and remove cookie, reroute to login page
                _this.activeUser = "";
                _this._cookieService.removeAll();
                _this._router.navigate(['']);
            })
                .catch();
        })
            .catch();
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this._cookieService.get('username')) {
            this._router.navigateByUrl("/");
        }
        else {
            this.connection = this._chatService.getMessages().subscribe(function (message) {
                _this._httpService.getMessage()
                    .then(function (data) {
                    _this.messages = data.reverse();
                })
                    .catch(function (err) { console.log(err); });
            });
            // this.connection = this._chatService.getSocketID().subscribe(id => {
            //   console.log(id + ' disconnected');
            // })
            this.game_profile = false;
            this.activeUser = this._cookieService.get('username');
            this._httpService.getUserId(this.activeUser)
                .then(function (user) {
                _this._httpService.logStatusTrue(user.user)
                    .then(function (user) {
                    _this.getPlayers();
                })
                    .catch();
            })
                .catch(function (err) {
                console.log(err);
            });
        }
    };
    // define a function to get all active players
    DashboardComponent.prototype.getPlayers = function () {
        var _this = this;
        this._httpService.getPlayers()
            .then(function (data) {
            if (data.message == "Success") {
                _this.players = data.user;
            }
            else {
                _this.errors = "There was a problem fetching the topics from the DB";
            }
        })
            .catch(function (err) {
            console.log("error doing getTopics:", err);
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    // GAMES
    DashboardComponent.prototype.pong = function () {
        this.game_profile = true;
        this._router.navigateByUrl("/dashboard/pong");
    };
    DashboardComponent.prototype.golf = function () {
        this.game_profile = true;
        this._router.navigateByUrl("/dashboard/golf");
    };
    DashboardComponent.prototype.snake = function () {
        this.game_profile = true;
        this._router.navigateByUrl("/dashboard/snake");
    };
    return DashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "aTaskEventEmitter", void 0);
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_core__["CookieService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#canvas {\n    margin-top: -20px;\n}\n\n/*#pong_space {\n    border: 1px dotted red;\n    margin-top: -20px;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"big_wrapper\">\n\n  <!--<h1>{{game_profile}}</h1>-->\n\n\n\n<!--Game canvas div-->\n<div id=\"canvas\"></div>\n<!--Need to give credit for pong game-->\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameComponent = (function () {
    function GameComponent(_httpService, _router, _cookieService) {
        this._httpService = _httpService;
        this._router = _router;
        this._cookieService = _cookieService;
    }
    GameComponent.prototype.loadPong = function () {
        console.log("inside of loadPong");
        new startPong(this.game_profile);
        new playGame(this.game_profile);
        //new pong(); // starts the pong game
    };
    GameComponent.prototype.loadGolf = function () {
        console.log("inside loadGolf");
        new playGame(this.game_profile);
        new startPong(this.game_profile);
        //new golf(); // starts the pong game
    };
    GameComponent.prototype.ngOnInit = function () {
        var url = this._router.url; // we know this will contain "/dashboard/" and then the game
        // console.log(url.substring(11));
        this.game_profile = url.substring(11); // so grab the substring
        if (this.game_profile == "pong") {
            console.log("starting pong...");
            this.loadPong();
        }
        if (this.game_profile == "golf") {
            console.log("starting golf...");
            this.loadGolf();
        }
    };
    return GameComponent;
}());
GameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-game',
        template: __webpack_require__("../../../../../src/app/game/game.component.html"),
        styles: [__webpack_require__("../../../../../src/app/game/game.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _c || Object])
], GameComponent);

var _a, _b, _c;
//# sourceMappingURL=game.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // to use map
var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    // get all the active players from the database, deliver a promise back
    HttpService.prototype.getPlayers = function () {
        return this._http.get("/players").map(function (response) { return response.json(); }).toPromise();
    };
    // check if an existig user is already created in the DB
    HttpService.prototype.checkUser = function (user) {
        return this._http.post('/userlogin', user).map(function (data) { return data.json(); }).toPromise();
    };
    // create a new user (should run checkUser(user) first!!)
    HttpService.prototype.createUser = function (user) {
        return this._http.post('/usercreate', user).map(function (data) { return data.json(); }).toPromise();
    };
    // get the user_id of the active user from the database
    HttpService.prototype.getUserId = function (user) {
        // need to setup an object to pass the _http.post(__)
        var activeUser = {
            name: user
        };
        return this._http.post('/getUserId', activeUser).map(function (data) { return data.json(); }).toPromise();
    };
    // for user logout to change logStatus to FALSE
    HttpService.prototype.logStatusFalse = function (user) {
        return this._http.post('/logStatusFalse', user).map(function (data) { return data.json(); }).toPromise();
    };
    // for user login to change logStatus to TRUE
    HttpService.prototype.logStatusTrue = function (user) {
        return this._http.post('/logStatusTrue', user).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.createMessage = function (message) {
        return this._http.post('/message', message).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.getMessage = function () {
        return this._http.get('/messages').map(function (data) { return data.json(); }).toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n    padding: 0px;\n    margin: 0px;\n}\ndiv#big_wrapper {\n    margin: 0px auto;\n    border-radius: 5px;\n    text-align: center;\n    width: auto;\n    height: 100vh;\n    background-color: #141414;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\ndiv#login-box {\n    background-color: #4f4f4f;\n    width: 350px;\n    height: 250px;\n    margin: auto;\n    border-radius: 5px 5px 0 0;\n}\nh3 {\n    background-color: #ea5849;\n    border-radius: 5px 5px 0 0;\n    padding: 10px;\n}\n.red {\n    color: whitesmoke;\n}\n.form-control{\n    width: 300px;\n    margin: auto;\n    margin-top: 30px;\n    padding: 5px;\n}\n.btn-default {\n    margin-top: 30px;\n    width: 300px;\n    height: 35px;\n    background-color: #ec8e40;\n    border: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"big_wrapper\">\n  <div id=\"login-box\">\n    <h3>Login</h3>\n    <form #loginForm='ngForm' (submit)=\"login(loginForm)\">\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" name=\"username\" placeholder=\"Username\"\n        required\n        minlength=\"2\"\n        maxlength=\"24\"\n        [(ngModel)]=\"user.name\"\n        #name=\"ngModel\">\n        <button id=\"loginButton\" class=\"btn btn-default\" type=\"submit\"\n        [disabled]=\"!loginForm.valid\">Enter</button>\n      </div>\n    </form>\n    <div *ngIf=\"!name.valid && (name.touched || loginForm.submitted)\">\n      <p class=\"red\">Name must be at least 2 characters</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// declare var $:any;
var LoginComponent = (function () {
    function LoginComponent(_httpService, _router, _cookieService, _chatService) {
        this._httpService = _httpService;
        this._router = _router;
        this._cookieService = _cookieService;
        this._chatService = _chatService;
        this.aTaskEventEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); // emit from the form up to the parent
        this.user = {
            name: ""
        };
        if (this._cookieService.get('username')) {
            this._router.navigate(['dashboard']);
        }
    }
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        // function to check user exists
        this._httpService.checkUser(this.user)
            .then(function (user) {
            if (user.user != null) {
                // have user in db, update cookie, then redirect
                _this._cookieService.put('username', user.user.name);
                // emit event 'user_logged_on'
                form.resetForm();
                _this._router.navigateByUrl("/dashboard");
            }
            else {
                // dont have user, need to create, update cookie
                _this._httpService.createUser(_this.user)
                    .then(function (user) {
                    _this._cookieService.put('username', user.user.name);
                    form.resetForm();
                    _this._router.navigateByUrl("/dashboard");
                })
                    .catch();
            }
        })
            .catch();
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "aTaskEventEmitter", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map