(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addbooks/addbooks.component.css":
/*!*************************************************!*\
  !*** ./src/app/addbooks/addbooks.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myrow{\r\n    margin-top:3%;\r\n}\r\n#myform{\r\n    width:100%\r\n}\r\n#header{\r\nmargin-bottom:1%;\r\n}\r\n#bottom{\r\n    margin-bottom: 1%;\r\n}\r\n#content{\r\n    padding-bottom: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/addbooks/addbooks.component.html":
/*!**************************************************!*\
  !*** ./src/app/addbooks/addbooks.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"myrow\"></div>\n    <div class=\"row\" id=\"myform\">\n\t<div class=\"col \"></div>\n    <div class=\"col-5 border border-dark rounded\" id=\"content\">\n        <div class=\"row bg-dark text-white\" id=\"header\">\n\t\t<div class=\"col text-center\"><h2>ADD BOOK</h2></div>\n\t\t</div>\n    <form (ngSubmit)=\"onSubmit()\" #LoginForm=\"ngForm\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-3 col-form-label\" for=\"bookname\">BOOKNAME:</label>\n\t\t\t\t\t\t<div class=\"col-sm-9\">\n                        <input required class=\"form-control\" type=\"text\"  id=\"bookname\" [(ngModel)]=\"newbook.name\" name=\"bookname\" >\n\t\t\t\t\t\t</div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-3 col-form-label\" for=\"author\">AUTHOR:</label>\n\t\t\t\t\t\t<div class=\"col-sm-9\">\n                        <input required class=\"form-control\" name=\"author\" type=\"text\" id=\"author\" [(ngModel)]=\"newbook.author\">\n\t\t\t\t\t\t</div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\" for=\"price\">PRICE:</label>\n          <div class=\"col-sm-9\">\n                      <input class=\"form-control\" required name=\"price\" type=\"number\" step='0.01' id=\"price\" [(ngModel)]=\"newbook.price\">\n          </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"condition\">CONDITION:</label>\n        <div class=\"col-sm-9\">\n            <select class=\"custom-select\" name=\"condition\" id=\"condition\" [(ngModel)]=\"newbook.condition\">\n                <option selected>Choose Condition</option>\n                <option value=\"New\">New</option>\n                <option value=\"Almost New\">Almost New</option>\n                <option value=\"Slight Damaged\">Slight Damaged</option>\n                <option value=\"Worn\">Worn</option>\n              </select>\n        </div>\n                </div>\n            <div class=\"row\">\n            <div class=\"col text-center\">\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!LoginForm.form.valid\">Submit</button>\n            </div>\n            </div>\n        </form>\n\t\t</div>\n         <div class=\"col\"></div>\n    </div>"

/***/ }),

/***/ "./src/app/addbooks/addbooks.component.ts":
/*!************************************************!*\
  !*** ./src/app/addbooks/addbooks.component.ts ***!
  \************************************************/
/*! exports provided: AddbooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbooksComponent", function() { return AddbooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bookservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bookservice.service */ "./src/app/bookservice.service.ts");
/* harmony import */ var _userservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userservice.service */ "./src/app/userservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddbooksComponent = /** @class */ (function () {
    function AddbooksComponent(route, bookservice, userservice) {
        this.route = route;
        this.bookservice = bookservice;
        this.userservice = userservice;
        this.newbook = {
            sellerId: null,
            name: '',
            author: '',
            price: null,
            condition: ''
        };
    }
    AddbooksComponent.prototype.ngOnInit = function () {
    };
    AddbooksComponent.prototype.onSubmit = function () {
        if (this.userservice.getActiveUser()) {
            this.newbook.sellerId = this.userservice.getActiveUser().id;
            this.bookservice.addbook(this.newbook);
            alert('Book Added');
            this.route.navigate(['listings']);
        }
        else {
            alert("Please Login");
            this.route.navigate(['login']);
        }
    };
    AddbooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addbooks',
            template: __webpack_require__(/*! ./addbooks.component.html */ "./src/app/addbooks/addbooks.component.html"),
            styles: [__webpack_require__(/*! ./addbooks.component.css */ "./src/app/addbooks/addbooks.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _bookservice_service__WEBPACK_IMPORTED_MODULE_1__["BookserviceService"], _userservice_service__WEBPACK_IMPORTED_MODULE_2__["UserserviceService"]])
    ], AddbooksComponent);
    return AddbooksComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _userservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./userservice.service */ "./src/app/userservice.service.ts");
/* harmony import */ var _listings_listings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./listings/listings.component */ "./src/app/listings/listings.component.ts");
/* harmony import */ var _addbooks_addbooks_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./addbooks/addbooks.component */ "./src/app/addbooks/addbooks.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _bookdetails_bookdetails_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bookdetails/bookdetails.component */ "./src/app/bookdetails/bookdetails.component.ts");
/* harmony import */ var _bookservice_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bookservice.service */ "./src/app/bookservice.service.ts");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wishlist.service */ "./src/app/wishlist.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'listings', component: _listings_listings_component__WEBPACK_IMPORTED_MODULE_11__["ListingsComponent"] },
    { path: 'listings/add', component: _addbooks_addbooks_component__WEBPACK_IMPORTED_MODULE_12__["AddbooksComponent"] },
    { path: 'wishlist', component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_13__["WishlistComponent"] },
    { path: 'message', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_14__["MessagesComponent"] },
    { path: 'listings/:id', component: _bookdetails_bookdetails_component__WEBPACK_IMPORTED_MODULE_15__["BookdetailsComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _listings_listings_component__WEBPACK_IMPORTED_MODULE_11__["ListingsComponent"],
                _addbooks_addbooks_component__WEBPACK_IMPORTED_MODULE_12__["AddbooksComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_13__["WishlistComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_14__["MessagesComponent"],
                _bookdetails_bookdetails_component__WEBPACK_IMPORTED_MODULE_15__["BookdetailsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
            ],
            providers: [_userservice_service__WEBPACK_IMPORTED_MODULE_10__["UserserviceService"], _bookservice_service__WEBPACK_IMPORTED_MODULE_16__["BookserviceService"], _wishlist_service__WEBPACK_IMPORTED_MODULE_17__["WishlistService"], _message_service__WEBPACK_IMPORTED_MODULE_18__["MessageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bookdetails/bookdetails.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bookdetails/bookdetails.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin:30px\r\n}"

/***/ }),

/***/ "./src/app/bookdetails/bookdetails.component.html":
/*!********************************************************!*\
  !*** ./src/app/bookdetails/bookdetails.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h5 class=\"card-header\">Book Details</h5>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">About Book</h5>\n    <ul type=\"none\">\n      <li>BOOK NAME : {{selectedbook.name}}</li>\n      <li>BOOK AUTHOR : {{selectedbook.author}}</li>\n      <li>BOOK PRICE : {{selectedbook.price}}</li>\n      <li>BOOK CONDITION : {{selectedbook.condition}}</li>\n    </ul>\n    <button class=\"btn btn-primary\" (click)=\"addwishlist(selectedbook.id)\">ADD TO WISHLIST</button>\n  </div>\n</div>\n<div class=\"card\">\n  <h5 class=\"card-header\">Seller Details</h5>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">About Seller</h5>\n    <ul type=\"none\">\n      <li>NAME : {{sellerdetails.name}}</li>\n      <li>EMAIL : {{sellerdetails.email}}</li>\n      <li>COLLEGE : {{sellerdetails.college}}</li>\n      <li>ADDRESS : {{sellerdetails.address}}</li>\n      <li>MOBILE : {{sellerdetails.mobile}}</li>\n    </ul>\n    <div class=\"form-group\">\n      <label for=\"comment\">Contact Seller:</label>\n      <textarea [(ngModel)]='text' class=\"form-control\" rows=\"5\" placeholder=\"Send a message to the seller\"></textarea>\n    </div>\n    <button class=\"btn btn-primary\" (click)=\"sendmessage()\">SEND</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bookdetails/bookdetails.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bookdetails/bookdetails.component.ts ***!
  \******************************************************/
/*! exports provided: BookdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookdetailsComponent", function() { return BookdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userservice.service */ "./src/app/userservice.service.ts");
/* harmony import */ var _bookservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bookservice.service */ "./src/app/bookservice.service.ts");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wishlist.service */ "./src/app/wishlist.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookdetailsComponent = /** @class */ (function () {
    function BookdetailsComponent(route, wishlist, router, bookservice, userservice, message) {
        this.route = route;
        this.wishlist = wishlist;
        this.router = router;
        this.bookservice = bookservice;
        this.userservice = userservice;
        this.message = message;
        this.selectedbook = {
            sellerId: null,
            name: '',
            author: '',
            price: null,
            condition: ''
        };
        this.sellerdetails = {
            name: '',
            email: '',
            password: '',
            college: '',
            address: '',
            mobile: null
        };
        this.text = '';
    }
    BookdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.paramMap.subscribe(function (params) {
            _this.bookid = +(params.get('id'));
            _this.bookservice.getfilteredbook({ id: _this.bookid }).subscribe(function (data) {
                _this.selectedbook = data[0];
                _this.userservice.getuser({ id: _this.selectedbook.sellerId }).subscribe(function (data2) {
                    _this.sellerdetails = data2;
                });
            });
        });
    };
    BookdetailsComponent.prototype.addwishlist = function (id) {
        if (this.userservice.getActiveUser()) {
            this.wishlist.addtowishlist({ userid: this.userservice.getActiveUser().id,
                bookid: id });
        }
        else {
            alert("Please Login to Continue");
            this.route.navigate(['login']);
        }
    };
    BookdetailsComponent.prototype.sendmessage = function () {
        if (this.userservice.getActiveUser()) {
            this.message.addmessage({ message: this.text, reciever: this.sellerdetails.id, book: this.selectedbook.id, sender: this.userservice.getActiveUser().id });
        }
        else {
            alert("Please Login to Continue");
            this.route.navigate(['login']);
        }
    };
    BookdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookdetails',
            template: __webpack_require__(/*! ./bookdetails.component.html */ "./src/app/bookdetails/bookdetails.component.html"),
            styles: [__webpack_require__(/*! ./bookdetails.component.css */ "./src/app/bookdetails/bookdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _bookservice_service__WEBPACK_IMPORTED_MODULE_3__["BookserviceService"],
            _userservice_service__WEBPACK_IMPORTED_MODULE_2__["UserserviceService"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
    ], BookdetailsComponent);
    return BookdetailsComponent;
}());



/***/ }),

/***/ "./src/app/bookservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/bookservice.service.ts ***!
  \****************************************/
/*! exports provided: BookserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookserviceService", function() { return BookserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookserviceService = /** @class */ (function () {
    function BookserviceService(http) {
        this.http = http;
    }
    BookserviceService.prototype.addbook = function (value) {
        this.http.post('/api/books', value).subscribe(function (data) {
        });
    };
    BookserviceService.prototype.getbooks = function () {
        return this.http.get('/api/books');
    };
    BookserviceService.prototype.getfilteredbook = function (value) {
        return this.http.post('/api/books/filter', value);
    };
    BookserviceService.prototype.getpricefilteredbook = function (value) {
        return this.http.post('/api/books/pricefilter', value);
    };
    BookserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookserviceService);
    return BookserviceService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-4 { \r\n    width:100%;\r\n    bottom:0;\r\n    position: fixed;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid bg-4 text-center bg-dark text-white\">\n  <p>Made By Pratyush</p> \n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#heading{\r\n    margin:0;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row bg-dark text-white\" id=\"heading\">\n  <div class=\"col-4\"></div>\n  <h1 class=\"col-3\">MyBookStore</h1>\n  <div class=\"col-5\" *ngIf=\"display=='notmember'\">    \n    <button class=\"btn btn-dark\" (click)=\"home1()\"><i class=\"fas fa-home\"></i>HOME</button>\n    <button class=\"btn btn-dark\" (click)=\"signup()\"><i class=\"fas fa-user-plus\"></i>SIGN UP</button>\n    <button class=\"btn btn-dark\" (click)=\"login()\"><i class=\"fas fa-sign-in-alt\"></i>LOGIN</button>\n    </div>\n    <div class=\"col-5\" *ngIf=\"display=='member'\">\n      <button class=\"btn btn-dark\" (click)=\"home()\"><i class=\"fas fa-home\"></i>HOME</button>\n    <button class=\"btn btn-dark\" (click)=\"wishlist()\"><i class=\"fas fa-heart\"></i>WISHLIST</button>\n    <button class=\"btn btn-dark\" (click)=\"messages()\"><i class=\"fas fa-envelope\"></i>MESSAGES</button>\n    <button class=\"btn btn-dark\" (click)=\"logout()\"><i class=\"fas fa-sign-out-alt\"></i>LOGOUT</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userservice.service */ "./src/app/userservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(user, router, route) {
        var _this = this;
        this.user = user;
        this.router = router;
        this.route = route;
        this.display = "notmember";
        this.subscription = user.nav$.subscribe(function (mission) {
            _this.display = mission;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.login = function () {
        this.route.navigate(['login'], { relativeTo: this.router });
    };
    HeaderComponent.prototype.signup = function () {
        this.route.navigate(['signup'], { relativeTo: this.router });
    };
    HeaderComponent.prototype.wishlist = function () {
        this.route.navigate(['wishlist'], { relativeTo: this.router });
    };
    HeaderComponent.prototype.messages = function () {
        this.route.navigate(['message'], { relativeTo: this.router });
    };
    HeaderComponent.prototype.home = function () {
        this.route.navigate(['listings'], { relativeTo: this.router });
    };
    HeaderComponent.prototype.home1 = function () {
        this.route.navigate(['home'], { relativeTo: this.router });
    };
    HeaderComponent.prototype.logout = function () {
        this.route.navigate(['login'], { relativeTo: this.router });
        this.display = "notmember";
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_userservice_service__WEBPACK_IMPORTED_MODULE_2__["UserserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bg{\r\n    height:100%;\r\n    margin-bottom:30px;\r\n    background-image: url(\"http://server.myspace-shack.com/d23/7f6663b7-d098-46da-88fa-89614f7c0256.jpg\");\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\nA PLACE \n</h1>\n<h1>\n    TO\n</h1>\n<h1>\n        EXCHANGE BOOKS \n</h1>\n<h4>\n  start now by signing up\n</h4>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/listings/listings.component.css":
/*!*************************************************!*\
  !*** ./src/app/listings/listings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myrow{\r\n    width:100%;\r\n    height: 100%;\r\n\r\n}\r\n.card{\r\n    height:400;\r\n    width:18rem;\r\n}\r\n.card-body\r\n{\r\n    height:200px;\r\n}\r\n#content{\r\n    padding-bottom: 50px;\r\n}\r\n.mycard{\r\n    margin:20px;\r\n    padding:0;\r\n}\r\n#mybutton{\r\n    height:487px;\r\n}\r\n#filter{\r\n    margin:30px;\r\n    padding:10px;\r\n}\r\n#btntexts{\r\n    text-align:center;\r\n    margin-top:100px;\r\n}"

/***/ }),

/***/ "./src/app/listings/listings.component.html":
/*!**************************************************!*\
  !*** ./src/app/listings/listings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n<div class='border border-rounded'id=\"filter\">\n    <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <label class=\"input-group-text\" for=\"inputGroupSelect01\">Filter by</label>\n        </div>\n        <select class=\"custom-select\" [(ngModel)]=\"displayfilter\">\n          <option selected>Choose...</option>\n          <option value=\"Title\">Title</option>\n          <option value=\"Author\">Author</option>\n          <option value=\"Condition\">Condition</option>\n          <option value=\"Price\">Price</option>\n        </select>\n      </div>\n\n    <div class=\"input-group mb-3\" *ngIf=\"displayfilter=='Title'\">\n        <input [(ngModel)]=\"filter.name\" type=\"text\" class=\"form-control\" placeholder=\"Search By Title\" aria-label=\"Recipient's username\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-outline-secondary\"  (click)=\"namefilter()\" type=\"button\">Go</button>\n        </div>\n      </div>\n      <div class=\"input-group mb-3\" *ngIf=\"displayfilter=='Author'\">\n          <input [(ngModel)]=\"filter.author\" type=\"text\" class=\"form-control\" placeholder=\"Search By Title\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary\" (click)=\"authorfilter()\" type=\"button\">Go</button>\n          </div>\n        </div>\n        <div class=\"input-group mb-3\" *ngIf=\"displayfilter=='Price'\">\n          <input [(ngModel)]=\"filter.pricemin\" type=\"number\" class=\"form-control\" placeholder=\"Min Price\">\n          <input [(ngModel)]=\"filter.pricemax\" type=\"number\" class=\"form-control\" placeholder=\"Max Price\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary\" (click)=\"pricefilter()\" type=\"button\">Go</button>\n          </div>\n        </div>\n        <div class=\"input-group mb-3\" *ngIf=\"displayfilter=='Condition'\">\n          <select class=\"custom-select\"  [(ngModel)]=\"filter.condition\">\n            <option selected>Choose Condition</option>\n            <option value=\"New\">New</option>\n            <option value=\"Almost New\">Almost New</option>\n            <option value=\"Slight Damaged\">Slight Damaged</option>\n            <option value=\"Worn\">Worn</option>\n          </select>\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary\" (click)=\"conditionfilter()\" type=\"button\">Go</button>\n          </div>\n        </div>\n       \n<button (click)=\"showall()\">SHOW ALL</button>\n</div>\n<div class=\"row\" id=\"myrow\">\n<div *ngFor=\"let data of displaylist\" class=\"col-3 mycard\">\n<div class=\"card\">\n    <img class=\"card-img-top\" src=\"http://server.myspace-shack.com/d23/d9a5f044-331d-49fb-99ec-95fedfe904db.png\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">{{data.name}}</h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">{{data.author}}</h6>\n        <h6 class=\"card-subtitle mb-2 text-muted\">price:{{data.price}}</h6>\n        <button class=\"btn btn-primary\" (click)= \"details(data.id)\">DETAILS</button>\n        <button class=\"btn btn-primary\" (click)= \"addwishlist(data.id)\">ADD</button>\n      </div>\n  </div>\n</div>\n<div class=\"col-3 mycard\">\n<button class=\"card\" id=\"mybutton\" (click)=\"add()\">\n  <p id=\"btntexts\">\n  <h2>CLICK HERE</h2>\n   <h2>TO ADD </h2>\n   <h2>NEW BOOK</h2>\n</button>\n</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/listings/listings.component.ts":
/*!************************************************!*\
  !*** ./src/app/listings/listings.component.ts ***!
  \************************************************/
/*! exports provided: ListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsComponent", function() { return ListingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userservice.service */ "./src/app/userservice.service.ts");
/* harmony import */ var _bookservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bookservice.service */ "./src/app/bookservice.service.ts");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wishlist.service */ "./src/app/wishlist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListingsComponent = /** @class */ (function () {
    function ListingsComponent(bookservice, userservice, router, route, wishlist) {
        this.bookservice = bookservice;
        this.userservice = userservice;
        this.router = router;
        this.route = route;
        this.wishlist = wishlist;
        this.displayfilter = '';
        this.filter = {
            name: '',
            author: '',
            pricemin: null,
            pricemax: null,
            condition: ''
        };
    }
    ListingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookservice.getbooks().subscribe(function (res) {
            _this.displaylist = res;
        });
    };
    ListingsComponent.prototype.add = function () {
        if (this.userservice.getActiveUser()) {
            this.route.navigate(['add'], { relativeTo: this.router });
        }
        else {
            alert("Please Login to Continue");
            this.route.navigate(['login']);
        }
    };
    ListingsComponent.prototype.addwishlist = function (id) {
        if (this.userservice.getActiveUser()) {
            this.wishlist.addtowishlist({ userid: this.userservice.getActiveUser().id,
                bookid: id });
        }
        else {
            alert("Please Login to Continue");
            this.route.navigate(['login']);
        }
    };
    ListingsComponent.prototype.details = function (id) {
        this.route.navigate([id], { relativeTo: this.router });
    };
    ListingsComponent.prototype.authorfilter = function () {
        var _this = this;
        this.bookservice.getfilteredbook({ author: this.filter.author }).subscribe(function (res) {
            _this.displaylist = res;
        });
    };
    ListingsComponent.prototype.conditionfilter = function () {
        var _this = this;
        this.bookservice.getfilteredbook({ condition: this.filter.condition }).subscribe(function (res) {
            _this.displaylist = res;
        });
    };
    ListingsComponent.prototype.namefilter = function () {
        var _this = this;
        this.bookservice.getfilteredbook({ name: this.filter.name }).subscribe(function (res) {
            _this.displaylist = res;
        });
    };
    ListingsComponent.prototype.showall = function () {
        var _this = this;
        this.bookservice.getbooks().subscribe(function (res) {
            _this.displaylist = res;
        });
    };
    ListingsComponent.prototype.pricefilter = function () {
        var _this = this;
        this.bookservice.getpricefilteredbook({ min: this.filter.pricemin, max: this.filter.pricemax }).subscribe(function (res) {
            _this.displaylist = res;
        });
    };
    ListingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listings',
            template: __webpack_require__(/*! ./listings.component.html */ "./src/app/listings/listings.component.html"),
            styles: [__webpack_require__(/*! ./listings.component.css */ "./src/app/listings/listings.component.css")]
        }),
        __metadata("design:paramtypes", [_bookservice_service__WEBPACK_IMPORTED_MODULE_3__["BookserviceService"],
            _userservice_service__WEBPACK_IMPORTED_MODULE_2__["UserserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"]])
    ], ListingsComponent);
    return ListingsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myrow{\r\n    margin-top:3%;\r\n}\r\n\r\n#myform{\r\n    width:100%\r\n}\r\n\r\n#header{\r\nmargin-bottom:1%;\r\n}\r\n\r\n#bottom{\r\n    margin-bottom: 1%;\r\n}\r\n\r\n#content{\r\n    padding-bottom: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"myrow\"></div>\n    <div class=\"row\" id=\"myform\">\n\t<div class=\"col\"></div>\n    <div class=\"col-6 border border-dark rounded\" id=\"content\">\n        <div class=\"row bg-dark text-white\" id=\"header\">\n\t\t<div class=\"col \"></div>\n\t\t<div class=\"col text-center\"><h2>LOGIN</h2></div>\n\t\t<div class=\"col\"></div>\n        </div>\n        <form (ngSubmit)=\"onSubmit()\" #inputform=\"ngForm\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-3 col-form-label\" for=\"username\">USERNAME:</label>\n              <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\" id=\"username\"\n                     required\n                     [(ngModel)]=\"newuser.email\" name=\"username\">\n                </div>\n            </div>\n       \n            <div class=\"form-group row\">\n              <label class=\"col-sm-3 col-form-label\" for=\"password\">PASSWORD</label>\n              <div class=\"col-sm-9\">\n              <input required type=\"password\" class=\"form-control\" id=\"password\"\n                     [(ngModel)]=\"newuser.password\" name=\"password\"></div>\n            </div>\n            <div class=\"row\">\n            <div class=\"col text-center\">\n            <button type=\"submit\" class=\"btn btn-success\" id=\"submit\" [disabled]=\"!inputform.form.valid\">Login</button>\n            </div>\n            </div>\n            </form>\n\t\t</div>\n         <div class=\"col\"></div>\n    </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _userservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../userservice.service */ "./src/app/userservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userservice, router, route) {
        this.userservice = userservice;
        this.router = router;
        this.route = route;
        this.newuser = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userservice.getuser(this.newuser).subscribe(function (prod) {
            if (prod) {
                _this.route.navigate(['listings']);
                _this.userservice.setActiveUser(prod);
            }
            else
                alert("invalid user");
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_userservice_service__WEBPACK_IMPORTED_MODULE_1__["UserserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.addmessage = function (value) {
        this.http.post('/api/messages', value).subscribe(function (data) {
            console.log(data);
        });
    };
    MessageService.prototype.getmessage = function (value) {
        return this.http.post('/api/messages/getmessages', value);
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin:30px;\r\n}"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngFor=\"let data of displaymessage\">\n  <div class=\"card-header\">\n    From: {{data.Sender.name}}\n  </div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{data.Book.name}}</h5>\n    <p class=\"card-text\">{{data.text}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _userservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userservice.service */ "./src/app/userservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(userservice, message) {
        this.userservice = userservice;
        this.message = message;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userservice.getActiveUser()) {
            this.message.getmessage({ id: this.userservice.getActiveUser().id })
                .subscribe(function (res) {
                console.log(res);
                _this.displaymessage = res;
            });
        }
        else
            alert("Please Login to Continue");
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_userservice_service__WEBPACK_IMPORTED_MODULE_2__["UserserviceService"], _message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myrow{\r\n    margin-top:3%;\r\n}\r\n#myform{\r\n    width:100%\r\n}\r\n#header{\r\nmargin-bottom:1%;\r\n}\r\n#bottom{\r\n    margin-bottom: 1%;\r\n}\r\n#content{\r\n    padding-bottom: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"myrow\"></div>\n    <div class=\"row\" id=\"myform\">\n\t<div class=\"col \"></div>\n    <div class=\"col-5 border border-dark rounded\" id=\"content\">\n        <div class=\"row bg-dark text-white\" id=\"header\">\n\t\t<div class=\"col \"></div>\n\t\t<div class=\"col text-center\"><h2>SIGNUP</h2></div>\n\t\t<div class=\"col\"></div>\n\t\t</div>\n    <form (ngSubmit)=\"onSubmit()\" #signupform=\"ngForm\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-3 col-form-label\" for=\"name\">NAME:</label>\n\t\t\t\t\t\t<div class=\"col-sm-9\">\n                        <input required class=\"form-control\" type=\"text\"  id=\"name\" [(ngModel)]=\"newuser.name\" name=\"name\" >\n\t\t\t\t\t\t</div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label class=\"col-sm-3 col-form-label\" for=\"email\">EMAIL ID:</label>\n\t\t\t\t\t\t<div class=\"col-sm-9\">\n                        <input required class=\"form-control\" name=\"email\" type=\"email\" id=\"email\" [(ngModel)]=\"newuser.email\">\n\t\t\t\t\t\t</div>\n                    </div>\n\n                    <div class=\"form-group row\">\n                      <label class=\"col-sm-3 col-form-label\" for=\"password\">PASSWORD:</label>\n          <div class=\"col-sm-9\">\n                      <input class=\"form-control\" required name=\"password\" type=\"password\" id=\"password\" [(ngModel)]=\"newuser.password\">\n          </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <label class=\"col-sm-3 col-form-label\" for=\"college\">COLLEGE:</label>\n        <div class=\"col-sm-9\">\n                    <input class=\"form-control\" required name=\"college\" type=\"text\" id=\"college\" [(ngModel)]=\"newuser.college\">\n        </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-sm-3 col-form-label\" for=\"address\">ADDRESS:</label>\n      <div class=\"col-sm-9\">\n                  <input class=\"form-control\" required name=\"address\" type=\"text\" id=\"address\" [(ngModel)]=\"newuser.address\">\n      </div>\n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-sm-3 col-form-label\" for=\"mobile\">MOBILE:</label>\n    <div class=\"col-sm-9\">\n                <input class=\"form-control\" required type=\"number\" name=\"mobile\" id=\"mobile\" [(ngModel)]=\"newuser.mobile\">\n    </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"col text-center\">\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!signupform.form.valid\">Submit</button>\n            </div>\n            </div>\n        </form>\n\t\t</div>\n         <div class=\"col\"></div>\n    </div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _userservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../userservice.service */ "./src/app/userservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(route, userservice) {
        this.route = route;
        this.userservice = userservice;
        this.newuser = {
            name: '',
            email: '',
            password: '',
            college: '',
            address: '',
            mobile: null
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function () {
        this.userservice.adduser(this.newuser);
        alert("congrats new user created");
        this.route.navigate(['login']);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _userservice_service__WEBPACK_IMPORTED_MODULE_1__["UserserviceService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/userservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/userservice.service.ts ***!
  \****************************************/
/*! exports provided: UserserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserserviceService", function() { return UserserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserserviceService = /** @class */ (function () {
    function UserserviceService(http) {
        this.http = http;
        this.navbarSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.nav$ = this.navbarSource.asObservable();
    }
    UserserviceService.prototype.adduser = function (value) {
        this.http.post('/api/users', value).subscribe(function (data) {
            console.log(data);
        });
    };
    UserserviceService.prototype.getuser = function (newuser) {
        return this.http.post("/api/users/getuser", newuser);
    };
    UserserviceService.prototype.setActiveUser = function (value) {
        this.activeuser = value;
        if (value != null)
            this.navbarSource.next('member');
    };
    UserserviceService.prototype.getActiveUser = function () {
        return this.activeuser;
    };
    UserserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserserviceService);
    return UserserviceService;
}());



/***/ }),

/***/ "./src/app/wishlist.service.ts":
/*!*************************************!*\
  !*** ./src/app/wishlist.service.ts ***!
  \*************************************/
/*! exports provided: WishlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistService", function() { return WishlistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WishlistService = /** @class */ (function () {
    function WishlistService(http) {
        this.http = http;
    }
    WishlistService.prototype.addtowishlist = function (value) {
        this.http.post('/api/wishlist', value).subscribe(function (data) {
            if (!data[1]) {
                alert("Book already in wishlist");
            }
        });
    };
    WishlistService.prototype.getwishlist = function (value) {
        return this.http.post('/api/wishlist/getwishlist', value);
    };
    WishlistService.prototype.remove = function (value) {
        this.http.post('/api/wishlist/remove', value).subscribe(function (data) {
            console.log(data);
        });
    };
    WishlistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WishlistService);
    return WishlistService;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-borderless\">\n  <thead>\n    <tr class=\"table-active\">\n      <th scope=\"col\"></th>\n      <th scope=\"col\">Book Name</th>\n      <th scope=\"col\">Author</th>\n      <th scope=\"col\">Price</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of mywishlist;let i = index\">\n      <th scope=\"row\"><button class=\"btn btn-outline-danger\" (click)=\"remove(i)\"><i class=\"fas fa-trash-alt\"></i></button></th>\n      <td>{{data.book.name}}</td>\n      <td>{{data.book.author}}</td>\n      <td>{{data.book.price}}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wishlist.service */ "./src/app/wishlist.service.ts");
/* harmony import */ var _userservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userservice.service */ "./src/app/userservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(userservice, wishlist) {
        this.userservice = userservice;
        this.wishlist = wishlist;
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.userservice.getActiveUser()) {
            this.wishlist.getwishlist({ userid: this.userservice.getActiveUser().id })
                .subscribe(function (res) {
                _this.mywishlist = res;
            });
        }
        else
            alert("Please Login to Continue");
    };
    WishlistComponent.prototype.remove = function (index) {
        this.wishlist.remove({ userid: this.mywishlist[index].userId, bookid: this.mywishlist[index].bookId });
        this.mywishlist.splice(index, 1);
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_userservice_service__WEBPACK_IMPORTED_MODULE_2__["UserserviceService"],
            _wishlist_service__WEBPACK_IMPORTED_MODULE_1__["WishlistService"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Pratyush\Desktop\PROJECT\mybookstore\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map