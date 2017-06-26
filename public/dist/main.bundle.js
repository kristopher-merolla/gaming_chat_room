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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_topic_component__ = __webpack_require__("../../../../../src/app/topic/topic.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'topic/:id', component: __WEBPACK_IMPORTED_MODULE_4__topic_topic_component__["a" /* TopicComponent */] },
    // catch all goes at the bottom!
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
exports.push([module.i, "#big_wrapper {\n    border: 5px solid purple;\n    padding: 15px;\n    margin: 0px auto;\n    border-radius: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"big_wrapper\">\n\n<h1>MEAN Belt Exam - by Kristopher Merolla (6/23/17)</h1>\n\n<!--this is where the components will show up-->\n<router-outlet></router-outlet> \n\n    \n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__topic_topic_component__ = __webpack_require__("../../../../../src/app/topic/topic.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_10__topic_topic_component__["a" /* TopicComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__["CookieService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#big_wrapper {\n    border: 2px solid red;\n    padding: 5px;\n    border-radius: 5px;\n}\n\n.red {\n    color: red;\n}\n\n#newTopicSpace {\n    border: 1px dotted black;\n    padding: 2px;\n    width: 200px;\n}\n\ntable {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}\n\n.right {\n    text-align: right;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"big_wrapper\">\n\n  <h3>Welcome: {{activeUser}}</h3>\n\n  <!--logout button-->\n  <div class=\"right\">\n    <a (click)=\"logoutUser()\">logout</a>\n  </div>\n\n  <h5>Current Polls:</h5>\n\n  <div *ngIf=\"topics\">\n    <!--Check out the topics: {{ topics | json}}-->\n    <table>\n      <tr>\n        <th>Name</th>\n        <th>Survey Question</th>\n        <th>Date Posted</th>\n        <th>Action</th>\n      </tr>\n      <tr *ngFor=\"let topic of topics\">\n        <td>{{topic.user}}</td>\n        <td><a href=\"/topic/{{topic._id}}\">{{topic.title}}</a></td>\n        <td>{{topic.createdAt | date}}</td>\n        <td *ngIf=\"topic.user==activeUser\"><a (click)=\"deleteTopic(topic._id)\">Delete</a></td>\n        <td *ngIf=\"topic.user!=activeUser\"></td>\n      </tr>\n    </table>\n  </div>\n\n  <!--<div *ngIf=\"errors\">\n    Look, errors: {{ errors }}\n  </div>-->\n\n  <br>\n\n  <h5>Create new Poll:</h5>\n\n  <div id=\"newTopicSpace\">\n      <!--simple form with validations:-->\n    <form #topicForm='ngForm' (submit)=\"addTopic(topicForm)\">\n      <label for=\"title\">Question:</label>\n      <input type=\"text\" name=\"title\" required minlength=\"8\" [(ngModel)]=\"topic.title\" #title=\"ngModel\">\n      <br>\n      <label for=\"option_1\">Option 1:</label>\n      <input type=\"text\" name=\"option_1\" required minlength=\"3\" [(ngModel)]=\"topic.option_1\" #option_1=\"ngModel\">\n      <br>\n      <br>\n      <label for=\"option_2\">Option 2:</label>\n      <input type=\"text\" name=\"option_2\" required minlength=\"3\" [(ngModel)]=\"topic.option_2\" #option_2=\"ngModel\">\n      <br>\n      <br>\n      <label for=\"option_3\">Option 3:</label>\n      <input type=\"text\" name=\"option_3\" required minlength=\"3\" [(ngModel)]=\"topic.option_3\" #option_3=\"ngModel\">\n      <br>\n      <br>\n      <label for=\"option_4\">Option 4:</label>\n      <input type=\"text\" name=\"option_4\" required minlength=\"3\" [(ngModel)]=\"topic.option_4\" #option_4=\"ngModel\">\n      <br><br>\n      <button type=\"submit\" [disabled]=\"!topicForm.valid\">Create Poll</button>\n    </form>\n\n    <!--Errors to display if form not filled in right-->\n    <div *ngIf=\"!title.valid && (title.touched || topicForm.submitted)\">\n        <p class=\"red\">Question required, min 8 char</p>\n    </div>\n    <div *ngIf=\"!option_1.valid && (option_1.touched || topicForm.submitted)\">\n        <p class=\"red\">Option 1 required, min 3 char</p>\n    </div>\n    <div *ngIf=\"!option_2.valid && (option_2.touched || topicForm.submitted)\">\n        <p class=\"red\">Option 2 required, min 3 char</p>\n    </div>\n    <div *ngIf=\"!option_3.valid && (option_3.touched || topicForm.submitted)\">\n        <p class=\"red\">Option 3 required, min 3 char</p>\n    </div>\n    <div *ngIf=\"!option_4.valid && (option_4.touched || topicForm.submitted)\">\n        <p class=\"red\">Option 4 required, min 3 char</p>\n    </div>\n\n   <!--{{ topic | json}}-->\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
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
    function DashboardComponent(_httpService, _router, _cookieService) {
        this._httpService = _httpService;
        this._router = _router;
        this._cookieService = _cookieService;
        this.aTaskEventEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); // emit from the form up to the parent
        this.activeUser = ""; // null as default
        this.topic = {
            title: "",
            option_1: "",
            option_2: "",
            option_3: "",
            option_4: ""
            // user_id: "",
            // user: ""
        };
        this.topic_for_db = {
            title: "",
            option_1: ["", 0],
            option_2: ["", 0],
            option_3: ["", 0],
            option_4: ["", 0],
            user_id: "",
            user: ""
        };
        this.errors = null;
        this.topics = null;
    }
    DashboardComponent.prototype.logoutUser = function () {
        this.activeUser = "";
        this._cookieService.removeAll();
        this._router.navigateByUrl("/login");
    };
    DashboardComponent.prototype.addTopic = function (form) {
        var _this = this;
        console.log("inside dash.comp.ts addTopic function", this.activeUser);
        this.topic_for_db.user = this.activeUser; // set active user as user in topic_for_db
        this.topic_for_db.option_1[0] = this.topic.option_1; // set option
        this.topic_for_db.option_2[0] = this.topic.option_2; // set option
        this.topic_for_db.option_3[0] = this.topic.option_3; // set option
        this.topic_for_db.option_4[0] = this.topic.option_4; // set option
        this.topic_for_db.title = this.topic.title; // set title
        // step 1 (get user_id of active user)
        this._httpService.getUserId(this.activeUser)
            .then(function (user) {
            // THEN - add user_id to this.topic.user_id
            console.log("look what we have:", user.user._id); // now user.user._id is the id of the active user
            _this.topic_for_db.user_id = user.user._id; // set user_id for our topic
            // THEN - create the topic in the database
            _this._httpService.newTopic(_this.topic_for_db)
                .then(function (data) {
                console.log("working on the newTopic function in dashboard comp", data);
                form.resetForm(); // reset the form and "topic" object after the topic was created
                _this.topic.title = "";
                _this.topic.option_1 = "";
                _this.topic.option_2 = "";
                _this.topic.option_3 = "";
                _this.topic.option_4 = "";
                _this.topic_for_db.title = "";
                _this.topic_for_db.option_1 = ["", 0];
                _this.topic_for_db.option_2 = ["", 0];
                _this.topic_for_db.option_3 = ["", 0];
                _this.topic_for_db.option_4 = ["", 0];
                _this.topic_for_db.title = "";
                _this.topic_for_db.title = "";
                _this.getTopics();
            })
                .catch();
        })
            .catch();
    };
    DashboardComponent.prototype.ngOnInit = function () {
        if (!this._cookieService.get('username')) {
            this._router.navigateByUrl("/login");
        }
        else {
            this.getTopics();
            this.activeUser = this._cookieService.get('username');
            console.log("cookie:", this._cookieService.get('username'));
        }
    };
    // define a function to get all comments (to display on dashboard)
    DashboardComponent.prototype.getTopics = function () {
        var _this = this;
        this._httpService.getTopics()
            .then(function (data) {
            console.log("got topics from getTopics", data);
            if (data.message == "Success") {
                _this.topics = data.topics;
            }
            else {
                _this.errors = "There was a problem fetching the topics from the DB";
            }
        })
            .catch(function (err) {
            console.log("error doing getTopics:", err);
        });
    };
    DashboardComponent.prototype.deleteTopic = function (topicId) {
        var _this = this;
        console.log("inside delete topic");
        this._httpService.deleteTopic(topicId)
            .then(function (data) {
            if (data.message == "Success") {
                _this.getTopics();
            }
            else {
                _this.errors = "There was a problem fetching the topics from the DB";
            }
        })
            .catch(function (err) {
            console.log("error doing getTopics:", err);
        });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

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
    // get all the topics from the database, deliver a promise back
    HttpService.prototype.getTopics = function () {
        return this._http.get("/topics").map(function (response) { return response.json(); }).toPromise();
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
        console.log("inside HTTP.service.ts getUserId function", activeUser);
        return this._http.post('/getUserId', activeUser).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.newTopic = function (topic) {
        console.log("inside HTTP.service.ts newTOPIC", topic);
        return this._http.post('/newTopic', topic).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.vote1 = function (topicId) {
        var topId = {
            id: topicId
        };
        console.log("inside HTTP service vote()", topId);
        return this._http.post('/vote1', topId).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.vote2 = function (topicId) {
        var topId = {
            id: topicId
        };
        console.log("inside HTTP service vote()", topId);
        return this._http.post('/vote2', topId).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.vote3 = function (topicId) {
        var topId = {
            id: topicId
        };
        console.log("inside HTTP service vote()", topId);
        return this._http.post('/vote3', topId).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.vote4 = function (topicId) {
        var topId = {
            id: topicId
        };
        console.log("inside HTTP service vote()", topId);
        return this._http.post('/vote4', topId).map(function (data) { return data.json(); }).toPromise();
    };
    HttpService.prototype.deleteTopic = function (topicId) {
        var topId = {
            id: topicId
        };
        console.log("inside http", topId);
        return this._http.post('/delete', topId).map(function (data) { return data.json(); }).toPromise();
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
exports.push([module.i, ".red {\n    color: red;\n}\n\n#big_wrapper {\n    border: 1px solid green;\n    padding: 10px;\n    border-radius: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"big_wrapper\">\n\n  <h3>Login Component</h3>\n\n  <!--simple form with validations:-->\n  <form #loginForm='ngForm' (submit)=\"login(loginForm)\">\n    <label for=\"username\">Username:</label>\n    <input type=\"text\" name=\"username\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"user.name\" #name=\"ngModel\">\n    <button type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\n  </form>\n\n  <div *ngIf=\"!name.valid && (name.touched || loginForm.submitted)\">\n      <p class=\"red\">Name required, min 4 char, max 24 char</p>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
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




var LoginComponent = (function () {
    function LoginComponent(_httpService, _router, _cookieService) {
        this._httpService = _httpService;
        this._router = _router;
        this._cookieService = _cookieService;
        this.aTaskEventEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); // emit from the form up to the parent
        this.user = {
            name: ""
        };
    }
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        console.log("login function hit");
        // function to check user exists
        this._httpService.checkUser(this.user)
            .then(function (user) {
            if (user.user != null) {
                // have user in db, update cookie, then redirect
                console.log("user found in DB", user.user.name);
                _this._cookieService.put('username', user.user.name);
                console.log("cookie:", _this._cookieService.get('username'));
                form.resetForm();
                _this._router.navigateByUrl("/dashboard");
            }
            else {
                // dont have user, need to create, update cookie
                _this._httpService.createUser(_this.user)
                    .then(function (user) {
                    console.log("createnew User", user.user.name);
                    _this._cookieService.put('username', user.user.name);
                    console.log("cookie:", _this._cookieService.get('username'));
                    form.resetForm();
                    _this._router.navigateByUrl("/dashboard");
                })
                    .catch();
            }
        })
            .catch();
    };
    LoginComponent.prototype.ngOnInit = function () {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#big_wrapper {\n    border: 1px solid green;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n.right {\n    text-align: right;\n}\n\ntable {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}\n\n#vote_box {\n    width: 400px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"big_wrapper\">\n  <div class=\"right\">\n    <a href=\"/dashboard\">Go to Polls</a>\n  </div>\n\n  <!--{{topic_id}}\n  <br><br>\n  {{topics | json}}-->\n\n  <div *ngFor=\"let topic of topics\">\n    <h1 *ngIf=\"topic_id==topic._id\">{{topic.title}}</h1>\n    <h5 *ngIf=\"topic_id==topic._id\">Click the Vote button to choose one.</h5>\n    <br>\n    <div *ngIf=\"topic_id==topic._id\">\n      <table id=\"vote_box\">\n        <tr>\n          <th>Option</th>\n          <th>Current Count of Votes</th>\n          <th>Action</th>\n        </tr>\n        <tr>\n          <td>{{topic.option_1[0]}}</td>\n          <td>{{topic.option_1[1]}}</td>\n          <td><button (click)=\"vote(1,topic_id)\">Vote</button></td>\n        </tr>\n        <tr>\n          <td>{{topic.option_2[0]}}</td>\n          <td>{{topic.option_2[1]}}</td>\n          <td><button (click)=\"vote(2,topic_id)\">Vote</button></td>\n        </tr>\n        <tr>\n          <td>{{topic.option_3[0]}}</td>\n          <td>{{topic.option_3[1]}}</td>\n          <td><button (click)=\"vote(3,topic_id)\">Vote</button></td>\n        </tr>\n        <tr>\n          <td>{{topic.option_4[0]}}</td>\n          <td>{{topic.option_4[1]}}</td>\n          <td><button (click)=\"vote(4,topic_id)\">Vote</button></td>\n        </tr>\n      </table>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicComponent = (function () {
    function TopicComponent(_httpService, route, _router, _cookieService) {
        this._httpService = _httpService;
        this.route = route;
        this._router = _router;
        this._cookieService = _cookieService;
        this.activeUser = ""; // null as default
        this.topic_id = ""; // topic id for this page! (comes from param in router link)
        this.errors = null;
        this.topics = null;
    }
    TopicComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this._cookieService.get('username')) {
            this._router.navigateByUrl("/login");
        }
        else {
            this.sub = this.route.params.subscribe(function (params) {
                _this.topic_id = params['id']; // set topic_id to the params[id]
            });
            this.getTopics();
            this.activeUser = this._cookieService.get('username');
            console.log("cookie:", this._cookieService.get('username'));
        }
    };
    // define a function to get all comments (to display on dashboard)
    TopicComponent.prototype.getTopics = function () {
        var _this = this;
        this._httpService.getTopics()
            .then(function (data) {
            console.log("got topics from getTopics", data);
            if (data.message == "Success") {
                _this.topics = data.topics;
            }
            else {
                _this.errors = "There was a problem fetching the topics from the DB";
            }
        })
            .catch(function (err) {
            console.log("error doing getTopics:", err);
        });
    };
    TopicComponent.prototype.vote = function (optNum, topicId) {
        var _this = this;
        console.log(optNum);
        console.log(topicId);
        if (optNum == 1) {
            console.log("option 1 hit");
            this._httpService.vote1(topicId)
                .then(function (data) {
                console.log("came back from HTTP successfully vote1");
                _this.getTopics();
            })
                .catch(function (err) {
                console.log("error doing getTopics:", err);
            });
        }
        else if (optNum == 2) {
            this._httpService.vote2(topicId)
                .then(function (data) {
                console.log("came back from HTTP successfully vote2");
                _this.getTopics();
            })
                .catch(function (err) {
                console.log("error doing getTopics:", err);
            });
        }
        else if (optNum == 3) {
            this._httpService.vote3(topicId)
                .then(function (data) {
                console.log("came back from HTTP successfully vote3");
                _this.getTopics();
            })
                .catch(function (err) {
                console.log("error doing getTopics:", err);
            });
        }
        else if (optNum == 4) {
            this._httpService.vote4(topicId)
                .then(function (data) {
                console.log("came back from HTTP successfully vote4");
                _this.getTopics();
            })
                .catch(function (err) {
                console.log("error doing getTopics:", err);
            });
        }
        else {
            console.log("error somewhere in option select");
        }
    };
    return TopicComponent;
}());
TopicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-topic',
        template: __webpack_require__("../../../../../src/app/topic/topic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topic/topic.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _d || Object])
], TopicComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=topic.component.js.map

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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map