(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LoginModule-login-module"],{

/***/ "./src/app/LoginModule/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/LoginModule/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/LoginModule/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        pathMatch: 'full'
    },
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/LoginModule/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/LoginModule/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/LoginModule/login-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/esm5/ngx-mat-select-search.js");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var amazing_time_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! amazing-time-picker */ "./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/esm5/web-storage.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/LoginModule/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// material import


//Components
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_1__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_6__["Ng2TelInputModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                angular_web_storage__WEBPACK_IMPORTED_MODULE_10__["AngularWebStorageModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                amazing_time_picker__WEBPACK_IMPORTED_MODULE_9__["AmazingTimePickerModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_5__["NgxMatSelectSearchModule"],
                angular2_notifications__WEBPACK_IMPORTED_MODULE_8__["SimpleNotificationsModule"].forRoot(),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesModule"].forRoot()
            ],
            providers: [],
            bootstrap: []
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/LoginModule/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/LoginModule/login/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbutton {\r\n    background-color: rgb(249,25,66);\r\n    color: white;\r\n  }\r\n  \r\n  .nav .open>a, .nav .open>a:focus, .nav .open>a:hover {\r\n    background-color: #f8f8f8;\r\n  }\r\n  \r\n  .navbar-default{\r\n    background-color:  rgb(249,25,66);\r\n    border-color:lightgray;\r\n    padding-bottom: 20px;\r\n  }\r\n  \r\n  #shift{\r\n    margin-left: 1.5%;\r\n  }\r\n  \r\n  #inbox {\r\n    margin-left: 50px;\r\n  }\r\n  \r\n  #admin{\r\n    margin-left: 50px;\r\n  }\r\n  \r\n  #Menu{\r\n    color:white;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  #Menu:hover{\r\n    background-color: rgb(250, 57, 93);\r\n    color: white;\r\n    transition: 0.6s;\r\n  /*   \r\n    -webkit-transform: scale(1.03);\r\n    -ms-transform: scale(1.03);\r\n    transform: scale(1.03); */\r\n  }\r\n  \r\n  .navbar-default{\r\n    background-color:  rgb(249,25,66);\r\n    border-color:lightgray;\r\n    padding-bottom: 10px;\r\n  }\r\n  \r\n  #img{\r\n    margin-top: -5px;\r\n  }\r\n  \r\n  #user_pre_img{\r\n    margin-left: -50px;\r\n  }\r\n  \r\n  .image{\r\n    margin-top: 5px;\r\n  }\r\n  \r\n  a{\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .nav .open>a, .nav .open>a:focus, .nav .open>a:hover\r\n  .navbar-brand{\r\n    color: rgb(250, 57, 93);\r\n    background-color: rgb(249,25,66); \r\n    transition: 0.9s;\r\n  }\r\n  \r\n  #right_navbar_items{\r\n    margin-top: 25px;\r\n    margin-left: -20px;\r\n  }\r\n  \r\n  .navbar-right{\r\n    margin-left: -100px;\r\n  }\r\n  \r\n  .active{\r\n     color: white !important;\r\n     background-color: rgb(250, 57, 93) !important;\r\n   }\r\n  \r\n  .active:hover{\r\n    transition: 0.9s;    \r\n  }\r\n  \r\n  .show-toggle{\r\n    display: block !important;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/LoginModule/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/LoginModule/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"image\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n\n      <a href=\"#\" class=\"navbar-brand\"></a>\n      <a id=\"img\" routerLink=\"/signin\" class=\"navbar-brand\"><img src=\"../../../assets/imgs/48x48.png\"></a>\n      <!-- <a id=\"img\" routerLink=\"/signin\" class=\"navbar-brand\"><b>Ping</b></a> -->\n      <div class=\"container\">\n          <div class=\"navbar-header\">\n              <button (click)=\"toggleCollapse()\" id=\"nav-button\" type=\"button\" class=\"navbar-toggle collapsed\"\n                  data-toggle=\"collapse\" data-target=\"#example\">\n                  <span class=\"sr-only\">Ping Alerting System</span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n              </button>\n          </div>\n\n          <div class=\"collapse navbar-collapse\" [class.show]=\"show\" id=\"example\">\n              <ul class=\"nav navbar-nav\">\n              </ul>\n              <div id=\"myDiv\">\n                  \n              </div>\n          </div>\n      </div>\n      <!-- <ul class=\"nav navbar-nav navbar-right\">\n\n      </ul> -->\n\n\n\n  </nav>\n\n</div>\n<br><br><br><br>\n<div class=\"col-md-4\"></div>\n          <div class=\"col-md-3 \"id=\"shift\">\n          <mat-card>   \n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onFormSubmit(loginForm.value)\" autocomplete=\"off\">\n                   \n                  <p>Please login to continue</p>          \n                    <mat-form-field  >\n                        <mat-label>User Name </mat-label>\n\n                        <input  matInput placeholder=\"Enter User ID\" formControlName=\"PingUserName\"\n                               [errorStateMatcher]='matcher'>\n                               \n                               \n                               <mat-icon  matSuffix class=\"material-icons\" >perm_identity</mat-icon>\n                               \n                        <mat-error>\n                          <span *ngIf=\"!loginForm.get('PingUserName').valid && loginForm.get('PingUserName').touched\">Please enter User ID</span>\n                        </mat-error>\n                      </mat-form-field>\n                  <mat-form-field >\n                      <mat-label>Password </mat-label>\n                      <input  matInput type=\"password\" placeholder=\"Enter User ID\" formControlName=\"password\"\n                             [errorStateMatcher]='matcher'>\n\n                             <mat-icon  matSuffix>vpn_key</mat-icon>\n                             \n                      <mat-error>\n                        <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">Please enter Password</span>\n                      </mat-error>\n                    </mat-form-field>\n      \n                      <br><br>  \n                  <div class=\"row\">\n                    <div class=\"col-md-2\">\n                        <button type=\"submit\" [disabled]=\"!loginForm.valid\" mat-raised-button >Login</button>\n                    </div>\n                  </div>            \n                   <!-- </div> -->        \n          </form>\n        </mat-card>  \n        </div>"

/***/ }),

/***/ "./src/app/LoginModule/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/LoginModule/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _LoginModule_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../LoginModule/login.service */ "./src/app/LoginModule/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var src_app_SuperAdmin_super_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/SuperAdmin/super-admin.service */ "./src/app/SuperAdmin/super-admin.service.ts");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var states = {
    NotApplicable: 0,
    Active: 1,
    Expired: 2,
    Abort: 3,
    LicenseExpired: 3,
    KeyCreated: 5,
    Keynotexits: 6,
    KeyExits: 7,
    KeyAdded: 8,
    CounterExeed: 9
};
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, api, formBuilder, snackbar, superAdminService, commanAPI, PingAdminFlag, _flashMessagesService) {
        this.fb = fb;
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.superAdminService = superAdminService;
        this.commanAPI = commanAPI;
        this.PingAdminFlag = PingAdminFlag;
        this._flashMessagesService = _flashMessagesService;
        this.PingUserName = '';
        this.PingRole = '';
        this.EmailID = '';
        this.password = '';
        this.loginFlag = false;
        this.show = false;
        this.puserRole = '';
        this.userRole = false;
        this.roleStr = 'Administrat';
        this.loop1 = true;
        this.AAccess = [
            { id: 1, name: 'Use Qlik Security' },
            { id: 2, name: 'Manage in Ping' }
        ];
        this.RRole = [
            { id: 2, name: 'Administrator' },
            { id: 3, name: 'Connnection Manager' },
            { id: 4, name: 'User' }
        ];
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.CheckDateLocker().subscribe(function (res) {
            console.log("DateLocker Status", res);
            if (res.LicenceStatus == states.Expired) {
                console.log("License Expired");
                _this.router.navigate(['/SuperAdmin/LicenseExpired']);
            }
            else if (res.LicenceStatus == states.NotApplicable) {
                console.log("Key Not Added In to Registry");
                _this.api.AddRegKey().subscribe(function (res) {
                    console.log("Licence Setup  " + res);
                });
            }
            else if (res.LicenceStatus == states.KeyExits) {
                console.log("Key Exist");
            }
            else if (res.LicenceStatus == states.CounterExeed) {
                console.log("counter Exeed");
                _this.router.navigate(['/SuperAdmin/LicenseExpired']);
            }
            else if (res.LicenceStatus == states.Active) {
                _this.PingAdminFlag.LicenseCount = res.CounterValue;
                console.log("License Active");
                _this.commanAPI.getLoggeddUser().subscribe(function (res) {
                    if (res != null) {
                        _this.router.navigate(['/pingAlert/alertInbox']);
                    }
                    else {
                        _this.api.getPingUsersCount().subscribe(function (res) {
                            console.log(res);
                            if (res.body > 0) {
                            }
                            else {
                                console.log("In Login Form");
                                _this.router.navigate(['/SuperAdmin/createSuperUser']);
                            }
                        });
                    }
                }, function (err) {
                    console.log("err");
                    console.log(err);
                    _this.api.getPingUsersCount().subscribe(function (res) {
                        console.log(res);
                        if (res.body > 0) {
                            _this.router.navigate(['/login']);
                        }
                        else {
                            console.log("In Login Form");
                            _this.router.navigate(['/SuperAdmin/createSuperUser']);
                        }
                    });
                });
            }
        });
        this.loginForm = this.formBuilder.group({
            // id: '',
            // PingUserID:[this.uID,Validators.required],
            PingUserName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            PingUserDirectory: [null],
            PingUserAccess: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.AAccess),
            EmailID: [null],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    LoginComponent.prototype.toggleCollapse = function () {
    };
    LoginComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        console.log('on submit');
        var redirectURL = "";
        this.api.postPingUserLogin(form)
            .subscribe(function (res) {
            // if(res.UserRole=='SuperAdmin')
            // {
            //   console.log("In Super USer");
            //   if(res.redirect === "/login"){
            //     redirectURL="/login";
            //     this.router.navigate(["/login"]); 
            //     this.snackbar.open('User name or password is wrong..!!', 'Close', {
            //       duration: 3000,
            //     });
            //   } else if (res.redirect === "/pingAlert/alertInbox") {
            //     redirectURL="/SuperAdmin/supDashboard";
            //     this.router.navigate(["/SuperAdmin"]); 
            //     this.snackbar.open('Succesfully Logged In', 'Close', {
            //       duration: 3000,
            //     });
            //   } else {
            //     this.snackbar.open('Network Error', 'Close', {
            //       duration: 3000,
            //     });
            //   } 
            // }
            if (res.UserRole == "SuperAdmin") {
                _this.PingAdminFlag.pingAdminFlag = true;
                console.log("SuperUser");
                //this.router.navigate(['/admin/sAdminHome'])
                if (res.redirect === "/login") {
                    redirectURL = "/login";
                    _this.router.navigate(["/login"]);
                    _this.snackbar.open('User name or password is wrong..!!', 'Close', {
                        duration: 3000,
                    });
                }
                else if (res.redirect === "/pingAlert/alertInbox") {
                    _this.PingAdminFlag.pingAdminFlag = true;
                    redirectURL = "/admin/sAdminHome";
                    _this.router.navigate(["/admin/sAdminHome"]);
                    _this.snackbar.open('Succesfully Logged In', 'Close', {
                        duration: 3000,
                    });
                    console.log("111" + _this.PingAdminFlag.pingAdminFlag);
                }
                else {
                    _this.snackbar.open('Network Error', 'Close', {
                        duration: 3000,
                    });
                }
            }
            else if (res.UserRole == "Administrator") {
                _this.PingAdminFlag.pingAdminFlag = true;
                console.log("Normal Admin");
                if (res.redirect === "/login") {
                    redirectURL = "/login";
                    _this.router.navigate(["/login"]);
                    _this.snackbar.open('User name or password is wrong..!!', 'Close', {
                        duration: 3000,
                    });
                }
                else if (res.redirect === "/pingAlert/alertInbox") {
                    redirectURL = "/pingAlert/alertInbox";
                    _this.router.navigate(["/pingAlert/alertInbox"]);
                    _this.snackbar.open('Succesfully Logged In', 'Close', {
                        duration: 3000,
                    });
                }
                else {
                    _this.snackbar.open('Network Error', 'Close', {
                        duration: 3000,
                    });
                }
            }
            else {
                _this.PingAdminFlag.pingAdminFlag = false;
                console.log("User");
                if (res.redirect === "/login") {
                    redirectURL = "/login";
                    _this.router.navigate(["/login"]);
                    _this.snackbar.open('User name or password is wrong..!!', 'Close', {
                        duration: 3000,
                    });
                }
                else if (res.redirect === "/pingAlert/alertInbox") {
                    redirectURL = "/pingAlert/alertInbox";
                    _this.router.navigate(["/pingAlert/alertInbox"]);
                    _this.snackbar.open('Succesfully Logged In', 'Close', {
                        duration: 3000,
                    });
                }
                else {
                    _this.snackbar.open('Network Error', 'Close', {
                        duration: 3000,
                    });
                }
            }
            // if(res.redirect === "/login"){
            //   redirectURL="/login";
            //   this.router.navigate(["/login"]); 
            //   this.snackbar.open('User name or password is wrong..!!', 'Close', {
            //     duration: 3000,
            //   });
            // } else if (res.redirect === "/pingAlert/alertInbox") {
            //   redirectURL="/pingAlert/alertInbox";   
            //   this.router.navigate(["/pingAlert/alertInbox"]);       
            //   this.snackbar.open('Succesfully Logged In', 'Close', {
            //     duration: 3000,
            //   });
            // } else {
            //   this.snackbar.open('Network Error', 'Close', {
            //     duration: 3000,
            //   });
            // } 
        }, function (err) {
            _this.snackbar.open('User name or password is wrong..!!', 'Close', {
                duration: 3000,
            });
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/LoginModule/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/LoginModule/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _LoginModule_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            src_app_SuperAdmin_super_admin_service__WEBPACK_IMPORTED_MODULE_5__["SuperAdminService"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"],
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/SuperAdmin/super-admin.service.ts":
/*!***************************************************!*\
  !*** ./src/app/SuperAdmin/super-admin.service.ts ***!
  \***************************************************/
/*! exports provided: SuperAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminService", function() { return SuperAdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
//globle variable 
var PingUserRole = "/user";
var BulkUseradd = "/AddLocation";
var SuperAdminService = /** @class */ (function () {
    function SuperAdminService(http) {
        this.http = http;
    }
    SuperAdminService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    };
    ;
    SuperAdminService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    //methods 
    SuperAdminService.prototype.postPingUserDetails = function (data) {
        console.log('i m in', data);
        var url = '/user/register';
        return this.http.post(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    SuperAdminService.prototype.getPingUsers = function () {
        return this.http.get(PingUserRole, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    SuperAdminService.prototype.getPingUsersCount = function () {
        console.log("in Login ts USers Count");
        var loginURL = "/user/pingCount";
        return this.http.get(loginURL, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    //Bulk User Add Api
    SuperAdminService.prototype.postFileUpload = function (data) {
        console.log("#####Post File upload", data);
        return this.http.post(BulkUseradd, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    SuperAdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SuperAdminService);
    return SuperAdminService;
}());



/***/ })

}]);
//# sourceMappingURL=LoginModule-login-module.js.map