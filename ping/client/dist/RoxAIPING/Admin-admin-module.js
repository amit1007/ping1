(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Admin-admin-module"],{

/***/ "./src/app/Admin/Datasource/create-datasource/create-datasource.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/Admin/Datasource/create-datasource/create-datasource.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ninput[type=\"file\"] {\r\n    display: none;\r\n  }\r\n  .custom-file-upload {\r\n    border: 1px solid #ccc;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n  }\r\n  #container{\r\n    border: 1px dotted rgb(173, 170, 170);\r\n  }\r\n  .example-full-width {\r\n  width: 100%;\r\n  }\r\n  .mat-form-field{\r\n  width: 80%;\r\n  }\r\n  #btn-default{\r\n    background-color: rgb(249, 25, 66);\r\n    color: rgb(255, 255, 255);\r\n  }\r\n  #google{\r\n  \r\n    opacity: 5px;\r\n    color: lightgray;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/Admin/Datasource/create-datasource/create-datasource.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/Admin/Datasource/create-datasource/create-datasource.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n\n<!-- \n<div class=\"row\">\n        <div class=\"col-lg-4 col-lg-offset-1\">\n            <p class=\"pingText\">Please enter the details of the DataSource for Ping:</p>\n        </div>\n      </div> -->\n        <div class=\"container\" id=\"container\"><br>\n       <div class=\"row\">\n              <form  id=\"form_width\" [formGroup]=\"userForm\" (ngSubmit)=\"onFormSubmit(userForm.value)\" >\n                      <div class=\"form-group \">\n                       <div class=\"col-md-6\">\n           \n                \n                    <div class=\"row\">\n                      <div class=\"col-md-9 col-lg-offset-1\">\n                        <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                          <input matInput placeholder=\"Source Name\" formControlName=\"sourcename\">\n                        </mat-form-field>\n                      </div>\n                    </div>\n                    <br>\n                     <div class=\"row\">\n                        <div class=\"col-md-9 col-lg-offset-1\">\n                        <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                            <mat-select  placeholder=\"Source Type\" formControlName = \"type\">\n                                <mat-option *ngFor='let type of food' [value]=\"type.value\">\n                                  {{type.viewValue}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                        \n                        </div>\n                    </div> \n                    <br>\n                    <div class=\"row\">\n                        <div class=\"col-md-9 col-lg-offset-1\">\n                              <!-- <input  class=\"form-control\" formControlName=\"hostname\">  -->\n                                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                                  <input matInput placeholder=\"Host Name\" formControlName=\"hostname\">\n                                </mat-form-field>\n                                <p id=\"google\">eg. qlikserver.domain.com </p>\n                        </div>\n                        </div>\n                      <div class=\"row\">\n                      <div class=\"col-md-9 col-lg-offset-1\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"Connect as Username\" formControlName=\"connect\">\n                      </mat-form-field>\n                      </div>\n                      </div>\n                      \n                    <br>\n                   \n               \n            \n         </div>\n         <div class=\"col-md-6\" >\n             <div *ngIf=\"UploadCertificateFlag\">\n                  <div class=\"row\">\n                          <div class=\"col-md-3\">\n                            <label>Certificates</label><br>\n                          </div>\n                        </div>\n                            <label matTooltip=\"Upload .pfx or .pem\" for=\"file-upload\" class=\"custom-file-upload\">\n                              <i class=\"glyphicon glyphicon-upload\"></i> Upload File\n                          </label>\n                          <input  id=\"file-upload\" type=\"file\" \n                          class=\"upload\" \n                          ng2FileSelect\n                          accept=\"*.csv\" \n                          />\n                        <br>\n                        <table class=\"table\" >\n                            <thead>\n                            <tr>\n                                <th>Name</th>\n                                <th>Size</th>\n                                <th>Progress</th>\n                                <th>Status</th>\n                                <th>Actions</th>\n                            </tr>\n                            </thead>\n                         <tbody>\n                            <tr *ngFor=\"let item of uploader.queue\">\n                                <td><strong>{{ item?.file?.name }}</strong></td>\n                                <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                                <td *ngIf=\"uploader.isHTML5\">\n                                    <div class=\"progress\" style=\"margin-bottom: 0;\">\n                                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                                    </div>\n                                </td>\n                                <td class=\"text-center\">\n                                    <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                                    <!-- <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span> -->\n                                    <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                                </td>\n                                <td nowrap>\n                                    <button type=\"button\" class=\"btn btn-success btn-xs\"\n                                            (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                                        <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                                    </button>\n                                   \n                                    <!-- <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                                            (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                                        <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                                    </button> -->\n                                    <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                                            (click)=\"item.remove()\">\n                                        <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                                    </button>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n             </div>\n             <!-- <div class=\"form-group\"> -->\n                  <div class=\"row\">\n                  <div class=\"col-md-9\">\n                  <mat-form-field appearance=\"fill\">\n                    <input matInput placeholder=\"Directory\" formControlName=\"userdirectory\">\n                  </mat-form-field>\n                  </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-md-9\">\n                      <mat-form-field appearance=\"fill\">\n                        <input matInput placeholder=\"Certificate Password\" formControlName=\"certPassword\">\n                      </mat-form-field>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                          <div class=\"col-md-9\">\n                          <mat-form-field appearance=\"fill\">\n                            <input matInput placeholder=\"MonogoDB Port\" formControlName=\"mongoDbPort\">\n                          </mat-form-field>\n                          </div>\n                  </div>\n             <!-- </div> -->\n            \n                  \n         </div>\n         <div class=\"row\">\n              <div class=\"col-md-2\">\n                  <button  type=\"submit\"\n                   id=\"btn-default\"     \n                   mat-raised-button>Test Connection</button> \n              </div>\n            </div>\n      </div>\n      </form>\n       </div>\n       \n          \n        <br>\n      </div>\n"

/***/ }),

/***/ "./src/app/Admin/Datasource/create-datasource/create-datasource.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Admin/Datasource/create-datasource/create-datasource.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CreateDatasourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDatasourceComponent", function() { return CreateDatasourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin.service */ "./src/app/Admin/admin.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var URL = '../upload/';
var CreateDatasourceComponent = /** @class */ (function () {
    //  Next Version 
    // color = 'accent';
    // checked = false;
    // disabled = false;
    // device = true;
    // devic = false;
    // stream = false;
    // Sales = false ;
    // Inventory = false;
    // Operations = false;
    // Finance = false;
    // Processing = false;
    // Archive = false;
    // Application = false;
    // Good = false;
    // Stock =false;
    // Human= false;
    // HR = false ;
    // Consumer = false;
    function CreateDatasourceComponent(router, commanApi, api, formBuilder, snackbar) {
        this.router = router;
        this.commanApi = commanApi;
        this.api = api;
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({ url: URL });
        this.food = [
            { value: 'None', viewValue: 'None' },
            { value: 'QlikSense Server', viewValue: 'Qlik-Sense Server' },
            { value: 'Power BI', viewValue: 'Power BI' },
            { value: 'Oracle DB', viewValue: 'Oracle DB' }
        ];
        this.UploadCertificateFlag = false;
        this.sourcename = '';
        this.userdirectory = '';
        this.hostname = '';
        this.connect = '';
        this.type = '';
    }
    CreateDatasourceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commanApi.getLoggeddUser().subscribe(function (res) {
            console.log("int " + res.InsertBy + " res.PingUserID" + res.PingUserID);
            _this.userForm.get('InsertBy').setValue(res.InsertBy);
            _this.userForm.get('LoggedID').setValue(res.PingUserID);
        }, function (err) {
            console.log("session Expires in datasource details" + err);
            _this.router.navigate(['/login']);
        });
        // console.log(this.foods)
        this.userForm = this.formBuilder.group({
            "dataSourceId": "01",
            'sourcename': '',
            'userdirectory': 'qlik-sense',
            'hostname': '',
            'connect': '',
            'InsertBy': '',
            'LoggedID': '',
            'type': 'qlik-sense',
            'certPassword': '',
            'mongoDbPort': ''
        });
    };
    CreateDatasourceComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        console.log("Hi........");
        console.log("form:", form);
        // this.router.navigate(['/data-source']);
        // this.snackbar.open('wait connection in process Check DataBase', 'Close', {
        // duration: 4000,});
        this.api.DataSourceEdit(form)
            .subscribe(function (res) {
            //  console.log(res);         
            _this.snackbar.open(res.request, 'Close', {
                duration: 6000,
            });
            if (res.status === 200) {
                _this.router.navigate(['/admin/dataSourceDetails']);
            }
        }, function (err) {
            _this.snackbar.open('Something Went Wrong...', 'Close', {
                duration: 3000,
            });
        });
    };
    CreateDatasourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-datasource',
            template: __webpack_require__(/*! ./create-datasource.component.html */ "./src/app/Admin/Datasource/create-datasource/create-datasource.component.html"),
            styles: [__webpack_require__(/*! ./create-datasource.component.css */ "./src/app/Admin/Datasource/create-datasource/create-datasource.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"],
            _admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], CreateDatasourceComponent);
    return CreateDatasourceComponent;
}());



/***/ }),

/***/ "./src/app/Admin/Datasource/datasource-details/datasource-details.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/Admin/Datasource/datasource-details/datasource-details.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*  REal*/\r\n\r\ntable {\r\n    width: 100%;\r\n    transition: none !important;\r\n    box-shadow: none !important;\r\n    margin-top: -30px;\r\n  }\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 70%;\r\n  }\r\n\r\n#row2{\r\n    \r\n    padding-top: 8px;\r\n    padding-bottom: 10px;\r\n  }\r\n\r\n.table-responsive{\r\n    margin-top: -15px;\r\n    padding-top: 40px;\r\n  }\r\n\r\ntr.mat-header-row{\r\n    height: 37px;\r\n  }\r\n\r\n.table-bordered>thead>tr>th{\r\n    border: 1px solid  rgb(249, 25, 66);\r\n  }\r\n\r\ntd{\r\n    color: rgb(127, 127, 127)\r\n  }\r\n\r\n.mat-header-cell {\r\n    color: rgb(102,102,102);\r\n  }\r\n\r\nth{\r\n    padding-top: -100px;\r\n    font-size: 14px;\r\n    background-color: rgb(238, 238, 238);\r\n  }\r\n\r\n#th_allign{\r\n    text-align: center;\r\n  }\r\n\r\n#button{\r\n    background-color: rgb(249, 25, 66);\r\n    color: rgb(255, 255, 255);\r\n    text-decoration: none;\r\n  }\r\n\r\n#height{\r\n    height: 10px;\r\n  }\r\n\r\n* {\r\n    font-family: 'Nunito', 'Glyphicons Halflings';\r\n  } \r\n  "

/***/ }),

/***/ "./src/app/Admin/Datasource/datasource-details/datasource-details.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/Admin/Datasource/datasource-details/datasource-details.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <br><br><br><br>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                  <div class=\"btn-group btn-breadcrumb \">\n                      <a routerLink=\"/home\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-home\"></i></a>\n                      <a  class=\"btn btn-default\">Admin</a>\n                      <a routerLink=\"/admin/dataSourceDetails\" class=\"btn btn-default active\">Data Source</a>\n              </div>\n            </div>\n          </div>\n    </div>\n\n<!-- Main Data Code -->\n \n  <div class=\"container\">\n         <div class=\"col-md-8\"></div>\n         <div class=\"col-md-4\">\n            <div class=\"input-group\" style=\"float:right\">\n                <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"txtSearch\"/> -->\n                <input class=\"form-control\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\" >\n                    <div class=\"input-group-btn\">\n                        <button class=\"btn btn-default\" type=\"submit\">\n                            <span class=\"glyphicon glyphicon-search\"></span>\n                        </button>\n                </div>\n            </div>\n         </div>\n       </div>\n\n\n\n<br>\n<div class=\"container\">\n<div class=\"table-responsive\" >\n<table mat-table [dataSource]=\"dataSource\" matSort class=\" mat-elevation-z8 table-bordered table-striped\"> \n\n <ng-container matColumnDef=\"sourcename\" >\n    <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\" >Data Source Name </th>\n   <td mat-cell *matCellDef=\"let element\">  &nbsp; {{element.sourcename}} </td>\n  </ng-container>\n\n  \n  <ng-container matColumnDef=\"type\" >\n    <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\" >Data Source Type</th>\n   <td mat-cell *matCellDef=\"let element\">  &nbsp;{{element.type}} </td>\n  </ng-container> \n\n\n <ng-container matColumnDef=\"hostname\">\n      <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\" >Data Source Host </th>\n     <td mat-cell *matCellDef=\"let element\">  &nbsp;{{element.hostname}} </td>\n    </ng-container>    \n\n\n\n  <!-- Colum Edit/ Delete --> \n  <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef class=\"text-center\" id=\"th_allign\" >Edit / Delete  </th>\n     <td mat-cell *matCellDef=\"let element\">\n       <div class=\"row col-md-offset-3\">\n          &nbsp; &nbsp;\n         <div class=\"col-md-2\">\n             <a style=\"cursor: pointer;\" [routerLink]=\"['/admin/editDataSource',element._id]\" ><i matTooltip=\"Edit\" class=\"glyphicon glyphicon-pencil\" ></i></a>\n         </div>\n         &nbsp; \n <div class=\"col-md-2\">\n              <a matTooltip=\"Delete\" style=\"cursor: pointer;\" (click)=\"deleteAlert(element._id)\"> <i class=\"glyphicon glyphicon-trash\"></i></a>\n             <!-- <a mat-raised-button color=\"warn\" (click)=\"deleteAlert(element._id)\"><mat-icon>delete</mat-icon></a> -->\n          </div>\n      </div>\n     </td>\n  </ng-container>\n\n\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n</div>\n\n<br>  \n\n\n<div class=\"row\">\n<div class=\"col-md-3\">\n<a id=\"button\" mat-raised-button [routerLink]=\"['/admin/createDataSource']\">Create New</a>\n</div>\n\n<div class=\"col-md-9\">\n<mat-paginator [pageSizeOptions]=\"[10,20,50,100,150,200,250]\" showFirstLastButtons></mat-paginator>\n</div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Admin/Datasource/datasource-details/datasource-details.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/Admin/Datasource/datasource-details/datasource-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DatasourceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasourceDetailsComponent", function() { return DatasourceDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../admin.service */ "./src/app/Admin/admin.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DatasourceDetailsComponent = /** @class */ (function () {
    function DatasourceDetailsComponent(api, commonApi, router, snackbar) {
        this.api = api;
        this.commonApi = commonApi;
        this.router = router;
        this.snackbar = snackbar;
        this.displayedColumns = ['sourcename', 'type', 'hostname', 'edit'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    DatasourceDetailsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    // applyFilter(filterValue: string) {
    //     filterValue = filterValue.trim(); // Remove whitespace
    //     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    //     this.dataSource.filter = filterValue;
    //   }
    DatasourceDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonApi.getLoggeddUser().subscribe(function (res) {
            _this.api.DataSourceDetails()
                .subscribe(function (res) {
                console.log('DataSourceDetails:', res);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }, function (err) {
                console.log(err);
            });
            // this.api.DataSourceDetails()
            // .subscribe(res => {
            //   console.log('res:',res);
            //   this.Intents = res;
            //   console.log('this.Intents:',this.Intents)
            // }, err => {
            //   console.log(err);
            // });
        }, function (err) {
            console.log("Session expire in Create Delivery channel" + err);
            _this.router.navigate(['/login']);
        });
    };
    // delete User
    DatasourceDetailsComponent.prototype.deleteAlert = function (id) {
        var _this = this;
        console.log('In Delete User');
        console.log(id);
        this.api.deleteDataSourceNew(id)
            .subscribe(function (res) {
            console.log('user new DataSource');
            _this.api.getDataSourceNew()
                .subscribe(function (res) {
                // this.sankbar.open('Succesfully deleted user', 'Close', {
                //   duration: 3000,
                // });
                console.log(res);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DatasourceDetailsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], DatasourceDetailsComponent.prototype, "sort", void 0);
    DatasourceDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datasource-details',
            template: __webpack_require__(/*! ./datasource-details.component.html */ "./src/app/Admin/Datasource/datasource-details/datasource-details.component.html"),
            styles: [__webpack_require__(/*! ./datasource-details.component.css */ "./src/app/Admin/Datasource/datasource-details/datasource-details.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], DatasourceDetailsComponent);
    return DatasourceDetailsComponent;
}());

// export class AlertDataSource extends DataSource<any> {
// constructor(private api: ApiService) {
//   super();
// }
// connect() {
//   return this.api.DataSourceDetails();
// }
// disconnect() {
// }
// }


/***/ }),

/***/ "./src/app/Admin/Datasource/edit-datasource/edit-datasource.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/Admin/Datasource/edit-datasource/edit-datasource.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n#container{\r\n    border: 1px dotted rgb(173, 170, 170);\r\n  \r\n  }\r\n  \r\n  \r\n  /* .btn-default{\r\n  margin-left: 120px;\r\n  margin-top:-75px;\r\n  } */\r\n  \r\n  \r\n  /* .example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  } */\r\n  \r\n  \r\n  .example-full-width {\r\n  width: 100%;\r\n  }\r\n  \r\n  \r\n  .mat-form-field{\r\n  width: 80%;\r\n  }"

/***/ }),

/***/ "./src/app/Admin/Datasource/edit-datasource/edit-datasource.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/Admin/Datasource/edit-datasource/edit-datasource.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-lg-6\">\n            <div class=\"btn-group btn-breadcrumb \">\n                <a routerLink=\"/home\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-home\"></i></a>\n                <a  class=\"btn btn-default\">Admin</a>\n                <a routerLink=\"/admin/dataSourceDetails\" class=\"btn btn-default\">Data Source</a>\n                <a routerLink=\"/admin/createDataSource\" class=\"btn btn-default active\">Create/Edit Data Sources</a>\n        </div>\n      </div>\n    </div>\n</div>\n\n  <div class=\"row\">\n      <div class=\"col-md-5\"></div>\n      <div class=\" col-md-4\" ></div>\n      <div class=\"col-md-3\"></div>\n  </div>\n  <br><br>\n\n  <div id=\"shift\">\n  <div class=\"container\" id=\"container\"><br>\n \n    <div class=\"form-group \">\n        <form   [formGroup]=\"userForm\" (ngSubmit)=\"onFormSubmit(userForm.value)\" >\n            <div class=\"row\">\n                <div class=\"col-md-1\"></div>\n              <!-- <div class=\"col-md-2\">\n                <div>Source Name</div>\n              </div> -->\n              <div class=\"col-md-5\">\n                <!-- <input class=\"form-control\" formControlName=\"sourcename\"> -->\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Source Name\" formControlName=\"sourcename\">\n                </mat-form-field>\n              </div>\n            </div>\n            <br>\n            <br>\n            <div class=\"row\">\n                <div class=\"col-md-1\"></div>\n                <!-- <div class=\"col-md-2\">\n                  <div>User Directory</div>\n                </div> -->\n                <div class=\"col-md-5\">\n                  <!-- <input class=\"form-control\" formControlName=\"userdirectory\"> -->\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput  placeholder=\"User Directory\" formControlName=\"userdirectory\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <br>\n              <br>\n              <div class=\"row\">\n              <div class=\"col-md-1\"></div>\n              <div class=\"col-md-5\">\n              <!-- <div class=\"col-md-1\"></div> -->\n               <mat-form-field>\n              <mat-select  placeholder=\"Connect as\" formControlName = \"connect\">\n                <mat-option *ngFor='let food of foods' [value]=\"food.value\">\n                  {{food.viewValue}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n              </div>\n            </div>\n      \n             <br>\n             <br>\n             <div class=\"row\">\n              <div class=\"col-md-1\"></div>\n              <div class=\"col-md-8\">\n              <mat-form-field>\n                <input matInput placeholder=\"MonogoDB Port\" formControlName=\"mongoDbPort\">\n              </mat-form-field>\n              </div>\n              </div>\n            <div class=\"row\">\n              <div class=\"col-md-1\"></div>\n              <div class=\"col-md-8\">\n              <mat-form-field>\n                <input matInput placeholder=\"Certificate Password\" formControlName=\"certPassword\">\n              </mat-form-field>\n              </div>\n              </div>\n            <div class=\"row\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-5\">\n                   \n                    <!-- <input  class=\"form-control\" formControlName=\"hostname\">  -->\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput   placeholder=\"Host Name\" formControlName=\"hostname\">\n                    </mat-form-field>\n\n\n                  </div> \n                  <div class=\"col-md-6\">\n                    <div class=\"row\">\n                      <div class=\"col-md-10\">\n\n                      <!-- <input class=\"form-control\" formControlName=\"connect\">  -->\n                      <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"Source Type\"   formControlName=\"type\">\n                      </mat-form-field>\n                      </div>\n                      <!-- <div class=\"col-md-7\"></div><br> -->\n                      \n                    </div>\n                    <div class=\"row\">\n                    <div class=\"col-md-8\">\n                        <button type=\"submit\" id=\"btn-default\" class=\"btn btn-default form-control\">Test Connection</button>\n                        <!-- <button type=\"submit\" class=\"btn btn-default\">Test Connection</button> -->\n                      </div>\n                    </div>\n      \n                  </div>\n             \n            </div>\n           \n        </form>\n    </div>\n \n  <br><br>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/Admin/Datasource/edit-datasource/edit-datasource.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Admin/Datasource/edit-datasource/edit-datasource.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditDatasourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDatasourceComponent", function() { return EditDatasourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../admin.service */ "./src/app/Admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditDatasourceComponent = /** @class */ (function () {
    // constructor(private router: Router, 
    //             private api: ApiService, 
    //             private formBuilder: FormBuilder,
    //             public snackbar: MatSnackBar,) { }
    function EditDatasourceComponent(route, api, router, formBuilder, snackbar) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.foods = [
            { value: 'None', viewValue: 'None' },
            { value: 'Server', viewValue: 'Server' },
            { value: 'qsadmin', viewValue: 'qsadmin' },
            { value: 'administrator', viewValue: 'administrator' }
        ];
        this.sourcename = '';
        this.userdirectory = '';
        this.hostname = '';
        this.connect = '';
        this.type = '';
        this.mongoDbPort = '';
    }
    EditDatasourceComponent.prototype.ngOnInit = function () {
        console.log('route succesfully');
        console.log(this.route.snapshot.params['id']);
        this.onEdit(this.route.snapshot.params['id']);
        console.log('test route succesfully');
        console.log(this.route.snapshot.params['id']);
        this.onEdit(this.route.snapshot.params['id']);
        this.userForm = this.formBuilder.group({
            'sourcename': '',
            'userdirectory': '',
            'hostname': '',
            'connect': '',
            'type': '',
            'mongoDbPort': '',
            'certPassword': '',
        });
    };
    EditDatasourceComponent.prototype.onEdit = function (id) {
        var _this = this;
        console.log('In Edit  datasourse');
        console.log(id);
        this.api.getDataSourceCahnnel(id).subscribe(function (res) {
            console.log('Get Edit Data');
            console.log(res);
            var id8 = res._id;
            console.log(id8);
            _this.userForm.get('sourcename').setValue(res.sourcename);
            _this.userForm.get('userdirectory').setValue(res.userdirectory);
            _this.userForm.get('hostname').setValue(res.hostname);
            _this.userForm.get('connect').setValue(res.connect);
            _this.userForm.get('type').setValue(res.type);
            _this.userForm.get('mongoDbPort').setValue(res.mongoDbPort);
            _this.userForm.get('certPassword').setValue(res.certPassword);
        });
    };
    // onFormSubmit(form:NgForm) {
    //   console.log("Hi..")
    //   console.log("form:",form)
    //   this.api.DataSourceEdit(form)
    //    .subscribe(res => {
    //      console.log('res',res)
    //       }, (err) => {
    //         this.snackbar.open('Enter Valid Field', 'Close', {
    //           duration: 3000,
    //       });
    //     });
    // }}
    EditDatasourceComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        console.log(this.route.snapshot.params['id']);
        this.api.DataSourceEditDetails(this.route.snapshot.params['id'], form)
            .subscribe(function (res) {
            res['_id'] = _this.route.snapshot.params['id'];
            var id = res['_id'];
            _this.snackbar.open('Added DataSource Details.. ', 'Close', {
                duration: 3000,
            });
            _this.router.navigate(['admin/dataSourceDetails']);
        }, function (err) {
            _this.snackbar.open('Something went wrong...!!', 'Close', {
                duration: 3000,
            });
            console.log(err);
        });
    };
    EditDatasourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-datasource',
            template: __webpack_require__(/*! ./edit-datasource.component.html */ "./src/app/Admin/Datasource/edit-datasource/edit-datasource.component.html"),
            styles: [__webpack_require__(/*! ./edit-datasource.component.css */ "./src/app/Admin/Datasource/edit-datasource/edit-datasource.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], EditDatasourceComponent);
    return EditDatasourceComponent;
}());



/***/ }),

/***/ "./src/app/Admin/DeliveryChannel/create-delivery-channel/create-delivery-channel.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/Admin/DeliveryChannel/create-delivery-channel/create-delivery-channel.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#edit{\r\n    background-color:rgb(231, 76, 60);\r\n    padding-top: 14px;\r\n}\r\n\r\n.btn-primary{\r\n    margin-left: 40%;\r\n}\r\n\r\n#container1{\r\n    border: 1px solid rgb(236, 235, 235);\r\n    margin-left:20%\r\n}\r\n\r\n/* #margin{\r\n    margin-left: 10% ;\r\n} */\r\n\r\n.btn-primary {\r\n  background-color:rgb(231, 76, 60);\r\n  border: rgb(231, 76, 60);\r\n}\r\n\r\n.example-form {\r\n    min-width: 80px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n.example-full-width:nth-last-child() {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n.button-row {\r\n    margin: 10px 0;\r\n  }\r\n\r\n.text-ping{\r\n    color: red\r\n}\r\n\r\n.text-white{\r\n    color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Admin/DeliveryChannel/create-delivery-channel/create-delivery-channel.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/Admin/DeliveryChannel/create-delivery-channel/create-delivery-channel.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n          <div class=\"btn-group btn-breadcrumb \">\n              <a routerLink=\"/pingAlert/alertInbox\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-home\"></i></a>\n              <a class=\"btn btn-default\">Admin</a>\n              <a routerLink=\"/admin/deliveryChannelDetails\" class=\"btn btn-default\">Delivery Channel Details</a>\n              <a class=\"btn btn-default active\">Create/Edit Delivery Channel</a>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<br>\n<div class=\"container\">\n    <form [formGroup]=\"frmCreateDeliveryChannel\" (ngSubmit)=\"onFormSubmit(frmCreateDeliveryChannel.value)\">\n        <mat-card>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                    <mat-label>Channel Name </mat-label>\n                  <!-- <mat-select placeholder=\"Channel Name\" formControlName=\"DeliveryChannelName\" name=\"ChannelName1\" required>\n                      <mat-option>--  Select Channel Name --</mat-option>\n                    <mat-option *ngFor=\"let chName of ChannelNameArr\" [value]=\"chName.CahnnelName\">\n                      {{chName.CahnnelName}}\n                    </mat-option>\n                  </mat-select> -->\n                  <input type=\"text\" matInput placeholder=\"Channel Name\" formControlName=\"DeliveryChannelName\"\n                    [errorStateMatcher]=\"matcher\" required>\n                  <mat-error>\n                      <span *ngIf=\"!frmCreateDeliveryChannel.get('DeliveryChannelName').valid && frmCreateDeliveryChannel.get('DeliveryChannelName').touched\">Please select user access</span>\n                    </mat-error>\n                  <!-- <mat-icon class=\"text-ping\" matSuffix>how_to_reg</mat-icon> -->\n                  <!-- [selected]=\"car.color.id == qlikSenseApps.Appid\" -->\n                </mat-form-field>\n                </div>\n                </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                        <mat-label>Channel Type</mat-label>\n                      <mat-select required placeholder=\"Channel Type\" formControlName=\"DeliveryChannelType\" name=\"userRole\" (selectionChange)=\"ChannelTypeChanged($event.value)\" required >\n                          <mat-option>-- Select Channel TYpe --</mat-option>\n                        <mat-option *ngFor=\"let CType of ChannelType\" [value]=\"CType.CahnnelTypeName\">\n                          {{CType.CahnnelTypeName}}\n                        </mat-option>\n                      </mat-select>\n                      <mat-error>\n                          <span *ngIf=\"!frmCreateDeliveryChannel.get('DeliveryChannelType').valid && frmCreateDeliveryChannel.get('DeliveryChannelType').touched\">Please select user role</span>\n                        </mat-error>\n                    </mat-form-field>\n                    </div>\n                    </div>\n                </div>\n        </mat-card>\n        <br><br>\n      <ng-container *ngIf=\"ShowEmail\">\n          <mat-panel-title>\n              Email Connection Details:\n          </mat-panel-title>\n   <mat-card>\n   <div class=\"container\">\n           <div class=\"from-group\">\n               <div class=\"row\">\n                  \n                   <div class=\"col-md-5\">\n                     \n                     <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                       <mat-label>Address </mat-label>\n                       \n                       <input required matInput placeholder=\"Enter Delivery Channel Name\" formControlName=\"Address\"\n                              [errorStateMatcher]=\"matcher\">\n                       <mat-error>\n                         <span *ngIf=\"!frmCreateDeliveryChannel.get('Address').valid && frmCreateDeliveryChannel.get('Address').touched\">Please enter specific Address</span>\n                       </mat-error>\n                       \n                     </mat-form-field>\n                   </div>\n                   <div class=\"col-md-4\">\n                     <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n                       <mat-label>PortNo </mat-label>\n                       \n                       <input required  matInput placeholder=\"Select Channel\" formControlName=\"PortNo\"\n                              [errorStateMatcher]=\"matcher\">\n                              <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n\n                              <!-- <mat-icon class=\"text-ping\" matSuffix>perm_identity</mat-icon> -->\n                       <mat-error>\n                         <span *ngIf=\"!frmCreateDeliveryChannel.get('PortNo').valid && frmCreateDeliveryChannel.get('PortNo').touched\">Please enter Port No.</span>\n                       </mat-error>\n                     </mat-form-field>\n                   </div>\n                   \n               </div>\n           <br>\n           <div class=\"row\">\n               <div class=\"col-md-5\">\n                   <mat-radio-group formControlName=\"SecurityLayerID\">\n                       <mat-radio-button class=\"example-margin\" color =\"warn\" value=\"TLS Security\" (click)=\"show = 'false' \">Use TLS(Transport Layer Security)</mat-radio-button>\n                        <br>\n                       <mat-radio-button class=\"example-margin\" color =\"warn\" value=\"SSL Security\" (click)=\"show = 'true' \">Use SSL(Secure Socet Layer)</mat-radio-button>\n                   </mat-radio-group>\n               </div>\n           </div>\n           <br>\n           <div class=\"row\">\n               <div class=\"col-md-5\">\n                 <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                   <mat-label>User Email </mat-label>\n                   <!-- <span matPrefix>+1 &nbsp;</span> -->\n                   <input required matInput email placeholder=\"Enter User Email\" formControlName=\"EmailUserName\"\n                          [errorStateMatcher]=\"matcher\">\n                   <mat-error>\n                     <span *ngIf=\"!frmCreateDeliveryChannel.get('EmailUserName').valid && frmCreateDeliveryChannel.get('EmailUserName').touched\">Please enter User Email</span>\n                   </mat-error>\n                   <!-- <mat-icon class=\"text-ping\" matSuffix>folder_shared</mat-icon> -->\n                 </mat-form-field>\n               </div>\n             <div class=\"col-md-6\">\n                 <div class=\"row\">\n                     <div class=\"col-md-5\">\n                       <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n                         <mat-label>Password </mat-label>\n                         <!-- <span matPrefix><mat-icon matPrefix>edit_attributes</mat-icon>&nbsp;</span> -->\n                         <input required type=\"password\" matInput placeholder=\"Enter Password\" formControlName=\"Password\"\n                                [errorStateMatcher]=\"matcher\" >\n                                <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n\n                                <!-- <mat-icon class=\"text-ping\" matSuffix>perm_identity</mat-icon> -->\n\n                         <mat-error>\n                           <span *ngIf=\"!frmCreateDeliveryChannel.get('Password').valid && frmCreateDeliveryChannel.get('Password').touched\">Please enter password</span>\n                         </mat-error>\n                       </mat-form-field>\n                     </div>\n                   <div class=\"col-md-2\">\n                       <button type=\"button\" (click)=\"MailConfirmation(frmCreateDeliveryChannel.value)\"  class=\"btn btn-primary\">Test Connection</button>\n                   </div>\n                 </div>\n             </div>\n           </div><br>\n           <div class=\"row\">\n               <div class=\"col-md-5\">\n                 <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n                   <mat-label>Default Sender Email ID </mat-label>\n                   <!-- <span matPrefix><mat-icon matPrefix>edit_attributes</mat-icon>&nbsp;</span> -->\n                   <input required matInput placeholder=\"Enter Default Sennder Email Id\" formControlName=\"DefaultSenderEmail\"\n                          [errorStateMatcher]=\"matcher\">\n                          <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n\n                          <!-- <mat-icon class=\"text-ping\" matSuffix>perm_identity</mat-icon> -->\n\n                   <mat-error>\n                     <span *ngIf=\"!frmCreateDeliveryChannel.get('DefaultSenderEmail').valid && frmCreateDeliveryChannel.get('DefaultSenderEmail').touched\">Please enter User Email ID</span>\n                   </mat-error>\n                 </mat-form-field>\n               </div>\n             </div>\n            \n         </div>\n         <br><br><br>\n       <!-- <div class=\"row\">\n         <div class=\"col-md-5\"></div>\n         <div>\n           <button class=\" col-md-2\" class=\"btn btn-danger\" (click)=\"onAddValues(email, app)\" type=\"submit\">Save</button>\n           &nbsp;&nbsp;&nbsp;&nbsp;\n           <button class=\" col-md-2\" class=\"btn btn-default\" >Cancel</button>\n         </div>\n\n\n       </div> -->\n   </div>\n\n   </mat-card>\n      </ng-container> \n      <br>       \n\n<!-- Mobile Channel Details -->\n<!-- *********************************************** -->\n<ng-container *ngIf=\"ShowMobileApp\">\n<mat-panel-title>\n  Mobile App Connection Details:\n</mat-panel-title>\n<mat-card>\n<div class=\"container\">\n<div class=\"from-group\">\n  <div class=\"row\">\n      \n      <div class=\"col-md-5\">\n        <!-- <input type=\"text\" class=\"form-control\"> -->\n        <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n          <mat-label>Device Name </mat-label>\n        <mat-select required placeholder=\"Device Name\" formControlName=\"DeviceName\" name=\"DeviceName\" required>\n            <mat-option>--  Select Device Name --</mat-option>\n          <mat-option *ngFor=\"let chName of MobileChannels\" [value]=\"chName.name\">\n            {{chName.name}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n            <span *ngIf=\"!frmCreateDeliveryChannel.get('DeliveryChannelName').valid && frmCreateDeliveryChannel.get('DeliveryChannelName').touched\">Please select user access</span>\n          </mat-error>\n        <!-- <mat-icon class=\"text-ping\" matSuffix>how_to_reg</mat-icon> -->\n        <!-- [selected]=\"car.color.id == qlikSenseApps.Appid\" -->\n      </mat-form-field>\n      </div>\n      <!-- <div class=\"col-md-1\"></div> -->      \n      \n  </div>\n<br>\n\n<!-- API KEY Contol -->\n<div class=\"row\">\n  \n  <div class=\"col-md-5\">\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n      <mat-label>API Key</mat-label>\n      <!-- <span matPrefix><mat-icon matPrefix>edit_attributes</mat-icon>&nbsp;</span> -->\n      <input required matInput placeholder=\"Enter API Key\" formControlName=\"APIKey\"\n              [errorStateMatcher]=\"matcher\">\n              <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n\n              <!-- <mat-icon class=\"text-ping\" matSuffix>perm_identity</mat-icon> -->\n\n      <mat-error>\n        <span *ngIf=\"!frmCreateDeliveryChannel.get('APIKey').valid && frmCreateDeliveryChannel.get('APIKey').touched\">Please Enter API Key</span>\n      </mat-error>\n    </mat-form-field>\n  </div>\n</div>\n\n<!-- Sender Key Controls -->\n<div class=\"row\">\n  \n  <div class=\"col-md-5\">\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n      <mat-label>Sender Key</mat-label>\n      <!-- <span matPrefix><mat-icon matPrefix>edit_attributes</mat-icon>&nbsp;</span> -->\n      <input matInput placeholder=\"Enter Sender Key\" formControlName=\"SenderKey\"\n            [errorStateMatcher]=\"matcher\">\n            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n\n            <!-- <mat-icon class=\"text-ping\" matSuffix>perm_identity</mat-icon> -->\n\n      <mat-error>\n        <span *ngIf=\"!frmCreateDeliveryChannel.get('SenderKey').valid && frmCreateDeliveryChannel.get('SenderKey').touched\">Please Enter Sender Key</span>\n      </mat-error>\n    </mat-form-field>\n  </div>\n</div>\n\n<!-- Server controls -->\n<div class=\"row\">\n  \n  <div class=\"col-md-5\">\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n      <mat-label>Server</mat-label>\n      <!-- <span matPrefix><mat-icon matPrefix>edit_attributes</mat-icon>&nbsp;</span> -->\n      <input matInput placeholder=\"Enter Server\" formControlName=\"Server\"\n            [errorStateMatcher]=\"matcher\">\n            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n\n            <!-- <mat-icon class=\"text-ping\" matSuffix>perm_identity</mat-icon> -->\n\n      <mat-error>\n        <span *ngIf=\"!frmCreateDeliveryChannel.get('Server').valid && frmCreateDeliveryChannel.get('Server').touched\">Please Enter Server Details</span>\n      </mat-error>\n    </mat-form-field>\n  </div>\n</div>\n\n\n</div>\n<br><br><br>\n<!-- <div class=\"row\">\n<div class=\"col-md-5\"></div>\n<div>\n<button class=\" col-md-2\" class=\"btn btn-danger\" (click)=\"onAddValues(email, app)\" type=\"submit\">Save</button>\n&nbsp;&nbsp;&nbsp;&nbsp;\n<button class=\" col-md-2\" class=\"btn btn-default\" >Cancel</button>\n</div>\n\n\n</div> -->\n</div>\n\n</mat-card>\n</ng-container>\n<br>\n<div class=\"row\">\n<div class=\"col-md-5\"></div>\n<button style=\"margin-left: 10px;\" class=\"col-md-1\" [disabled]=\"!frmCreateDeliveryChannel.valid\" mat-raised-button id=\"btn-danger\" (click)=\"onAddValues(email, app)\" type=\"submit\">Save</button>\n<button style=\"margin-left: 10px;\" class=\" col-md-1\" mat-raised-button id=\"btn-default\" >Cancel</button>\n</div>\n  </form>\n</div>\n      \n  \n\n   \n\n    \n    <!-- <p>Form value: {{ frmCreateDeliveryChannel.value | json }}</p> -->\n"

/***/ }),

/***/ "./src/app/Admin/DeliveryChannel/create-delivery-channel/create-delivery-channel.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/Admin/DeliveryChannel/create-delivery-channel/create-delivery-channel.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CreateDeliveryChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDeliveryChannelComponent", function() { return CreateDeliveryChannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../admin.service */ "./src/app/Admin/admin.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateDeliveryChannelComponent = /** @class */ (function () {
    function CreateDeliveryChannelComponent(router, CommApi, api, formBuilder, snackbar) {
        this.router = router;
        this.CommApi = CommApi;
        this.api = api;
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.ChannelNameArr = [];
        this.ChannelType = [];
        this.ShowMobileApp = false;
        this.ShowEmail = false;
        this.ShowEmailDetails = true;
        this.DeliveryChannelID = '';
        this.DeliveryChannelName = '';
        this.DeliveryChannelType = '';
        this.Address = '';
        this.PortNo = '';
        this.SecurityLayerID = '';
        this.EmailUserName = '';
        this.Password = '';
        this.DefaultSenderEmail = '';
        this.InsertBy = '';
        this.usercount = '';
        this.count = 0;
        this.LoginUserID = '';
        this.APIKey = '';
        this.SenderKey = '';
        this.Server = '';
        this.userID = '';
        this.uID = '';
        this.selectedChannelValue = '';
        this.MobileChannels = [
            { id: 1, name: 'IOS' },
            { id: 2, name: 'Android' }
        ];
        this.RRole = [
            { id: 2, name: 'Administrator' },
            { id: 3, name: 'Connnection Manager' },
            { id: 4, name: 'User' }
        ];
    }
    CreateDeliveryChannelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CommApi.getLoggeddUser().subscribe(function (res) {
            _this.frmCreateDeliveryChannel.get('InsertBy').setValue(res.PingUserName);
            _this.frmCreateDeliveryChannel.get('LoginUserID').setValue(res.PingUserID);
            _this.api.getDeliveryCahnnels()
                .subscribe(function (res) {
                console.log(" count Channel res");
                console.log(res);
                _this.count = res.length;
                _this.count = _this.count + 1;
                _this.userID = 'DC-' + _this.count;
                _this.uID = _this.frmCreateDeliveryChannel.get('DeliveryChannelID').setValue(_this.userID);
            }, function (err) {
                console.log(err);
                _this.usercount = '0';
            });
            //  this.api.getAllDeliveryCahnnels()
            //  .subscribe(res => {
            //    console.log("********* New Method"+res);
            //    this.count=res.length;
            //    this.count=this.count+1;
            //    this.userID = 'DC-' + this.count ;
            //    this.uID = this.frmCreateDeliveryChannel.get('DeliveryChannelID').setValue(this.userID);
            //   console.log("******????"+this.userID)
            //  }, err => {
            //    console.log(err);
            //    this.usercount='0';
            //  });
            _this.api.getChannelNames()
                .subscribe(function (res) {
                console.log(res);
                for (var i = 0; i < res.length; i++) {
                    var ChannelID;
                    var ChannelName;
                    ChannelID = res[i].ChannelID;
                    ChannelName = res[i].ChannelName;
                    console.log('-------', ChannelID, '-----', ChannelName);
                    // console.log('Applist data -----',JSON.stringify(res[i],null,4));
                    _this.ChannelNameArr.push({
                        "ChannelID": ChannelID,
                        "CahnnelName": ChannelName
                    });
                }
                var chnName = JSON.stringify(_this.ChannelNameArr, null, 4);
                console.log("New Channel Name" + chnName);
                console.log("----------------------------");
                // console.log(this.QlikSenseMeasures);
                // console.log("--------------------------------")
                // console.log(this.QlikSenseDiamentions);
                // this.visibleProgressBar=false;
            }, function (err) {
                console.log(err);
                //  this.visibleProgressBar=false;
            });
            // this.usercount=usersCnt
            //Get Channel Type
            _this.api.getChannelTypes()
                .subscribe(function (res) {
                console.log('Cahnnel Types*****' + res);
                for (var i = 0; i < res.length; i++) {
                    var ChannelTypeID;
                    var ChannelTypeName;
                    ChannelTypeID = res[i].ChannelTypeID;
                    ChannelTypeName = res[i].ChannelTypeName;
                    console.log('-------', ChannelTypeID, '-----', ChannelTypeName);
                    // console.log('Applist data -----',JSON.stringify(res[i],null,4));
                    _this.ChannelType.push({
                        "ChannelTypeID": ChannelTypeID,
                        "CahnnelTypeName": ChannelTypeName
                    });
                }
                var chnName1 = JSON.stringify(_this.ChannelType, null, 4);
                console.log("New Channel Type  Name" + chnName1);
                console.log("----------------------------");
                // console.log(this.QlikSenseMeasures);
                // console.log("--------------------------------")
                // console.log(this.QlikSenseDiamentions);
                // this.visibleProgressBar=false;    
            }, function (err) {
                console.log(err);
                //  this.visibleProgressBar=false;
            });
        }, function (err) {
            console.log("err");
            console.log(err);
            _this.router.navigate(['/login']);
        });
        this.frmCreateDeliveryChannel = this.formBuilder.group({
            // id: '',
            DeliveryChannelID: [this.uID, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            DeliveryChannelName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.ChannelNameArr, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            DeliveryChannelType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.ChannelType, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PortNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SecurityLayerID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            EmailUserName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            DefaultSenderEmail: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            InsertBy: '',
            LoginUserID: '',
            APIKey: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SenderKey: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Server: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            DeviceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.MobileChannels, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    CreateDeliveryChannelComponent.prototype.onAddValues = function (email, app) { };
    CreateDeliveryChannelComponent.prototype.ChannelTypeChanged = function (event) {
        //update the ui
        this.selectedChannelValue = event;
        console.log("Selected Value is" + this.selectedChannelValue);
        if (event == "Email") {
            console.log("In email select value" + this.selectedChannelValue);
            this.ShowEmail = true;
            this.ShowMobileApp = false;
            // this.frmCreateDeliveryChannel = this.formBuilder.group({
            //    id: '',
            //   // DeliveryChannelID:[this.uID,Validators.required],
            //   // DeliveryChannelName: new FormControl(this.ChannelNameArr, Validators.required),
            //   // DeliveryChannelType : new FormControl(this.ChannelType,Validators.required),
            //   Address :[null,Validators.required],
            //   PortNo :[null,Validators.required],
            //   SecurityLayerID :[null,Validators.required],
            //   EmailUserName :[null,Validators.required],
            //   Password:[null,Validators.required],
            //   DefaultSenderEmail:[null,Validators.required],
            //   InsertBy : AuthService.loggedUserName,
            //   LoginUserID:AuthService.loggedUserTableID,
            //   APIKey:[null],
            //   SenderKey:[null],
            //   Server:[null],
            //   DeviceName: new FormControl(this.MobileChannels),
            // })
        }
        else if (event == "Mobile App") {
            console.log("In Mobile App select value" + this.selectedChannelValue);
            this.ShowMobileApp = true;
            this.ShowEmail = false;
            // this.frmCreateDeliveryChannel = this.formBuilder.group({
            //    id: '',
            //   // DeliveryChannelID:[this.uID,Validators.required],
            //   // DeliveryChannelName: new FormControl(this.ChannelNameArr, Validators.required),
            //   // DeliveryChannelType : new FormControl(this.ChannelType,Validators.required),
            //   Address :[null],
            //   PortNo :[null],
            //   SecurityLayerID :[null],
            //   EmailUserName :[null],
            //   Password:[null],
            //   DefaultSenderEmail:[null],
            //   InsertBy : AuthService.loggedUserName,
            //   LoginUserID:AuthService.loggedUserTableID,
            //   APIKey:[null,Validators.required],
            //   SenderKey:[null,Validators.required],
            //   Server:[null,Validators.required],
            //   DeviceName: new FormControl(this.MobileChannels, Validators.required),
            // })
        }
        else if (event == "Email,Mobile App") {
            console.log("In Email,Mobile App select value" + this.selectedChannelValue);
            this.ShowMobileApp = true;
            this.ShowEmail = true;
            // this.frmCreateDeliveryChannel = this.formBuilder.group({
            //    id: '',
            //   // DeliveryChannelID:[this.uID,Validators.required],
            //   // DeliveryChannelName: new FormControl(this.ChannelNameArr, Validators.required),
            //   // DeliveryChannelType : new FormControl(this.ChannelType,Validators.required),
            //   Address :[null],
            //   PortNo :[null],
            //   SecurityLayerID :[null],
            //   EmailUserName :[null],
            //   Password:[null],
            //   DefaultSenderEmail:[null],
            //   InsertBy : AuthService.loggedUserName,
            //   LoginUserID:AuthService.loggedUserTableID,
            //   APIKey:[null,Validators.required],
            //   SenderKey:[null,Validators.required],
            //   Server:[null,Validators.required],
            //   DeviceName: new FormControl(this.MobileChannels, Validators.required),
            // })
        }
        else {
            this.ShowMobileApp = false;
            this.ShowEmail = false;
        }
    };
    CreateDeliveryChannelComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postDeliveryChannel(form)
            .subscribe(function (res) {
            _this.snackbar.open('Succesfully submitted Delivery Channel details', 'Close', {
                duration: 3000,
            });
            _this.router.navigate(['/admin/deliveryChannelDetails']);
            console.log("Successfully Record Saved....");
        }, function (err) {
            _this.snackbar.open('Something went wrong..!!', 'Close', {
                duration: 3000,
            });
            console.log(err);
        });
    };
    CreateDeliveryChannelComponent.prototype.MailConfirmation = function (form) {
        // Send Create Alert Mail....
        this.api.ValidateEmailID(form).subscribe(function (res) {
            console.log('Mail Sent');
            console.log('*****' + JSON.stringify(res, null, 4));
        });
    };
    CreateDeliveryChannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-delivery-channel',
            template: __webpack_require__(/*! ./create-delivery-channel.component.html */ "./src/app/Admin/DeliveryChannel/create-delivery-channel/create-delivery-channel.component.html"),
            styles: [__webpack_require__(/*! ./create-delivery-channel.component.css */ "./src/app/Admin/DeliveryChannel/create-delivery-channel/create-delivery-channel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], CreateDeliveryChannelComponent);
    return CreateDeliveryChannelComponent;
}());



/***/ }),

/***/ "./src/app/Admin/DeliveryChannel/delivery-channel-details/delivery-channel-details.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/Admin/DeliveryChannel/delivery-channel-details/delivery-channel-details.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\ntable {\r\n    width: 100%;\r\n    transition: none !important;\r\n    box-shadow: none !important;\r\n    margin-top: -30px;\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 70%;\r\n  }\r\n#table-responsive{\r\n    margin-top: 5px;\r\n  }\r\n#row2{\r\n    margin-top: -2px;\r\n    padding-top: 8px;\r\n    padding-bottom: 10px;\r\n  }\r\n.table-responsive{\r\n    margin-top: -15px;\r\n    padding-top: 40px;\r\n  }\r\ntr.mat-header-row{\r\n    height: 37px;\r\n  }\r\n.table-bordered>thead>tr>th{\r\n    border: 1px solid rgb(231, 76, 60);\r\n  }\r\n/* Switch Button */\r\ntd{\r\n    color: rgb(127, 127, 127)\r\n  }\r\n.mat-header-cell {\r\n    color: rgb(102,102,102);\r\n  }\r\nth{\r\n    padding-top: -100px;\r\n    font-size: 14px;\r\n    background-color: rgb(238, 238, 238);\r\n  }\r\n#btn{\r\n    background-color: rgb(249, 25, 66);\r\n    color: rgb(255, 255, 255)\r\n  }\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 24px;\r\n  }\r\n/* Hide default HTML checkbox */\r\n.switch input {display:none;}\r\n/* The slider */\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgb(216, 50, 50);\r\n    transition: .4s;\r\n  }\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 16px;\r\n    width: 16px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\ninput:checked + .slider {\r\n    background-color:rgb(64, 143, 64);\r\n  }\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px rgb(64, 143, 64);\r\n  }\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    transform: translateX(36px);\r\n  }\r\n/* Rounded sliders */\r\n.slider.round {\r\n    border-radius: 34px;\r\n  }\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/Admin/DeliveryChannel/delivery-channel-details/delivery-channel-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/Admin/DeliveryChannel/delivery-channel-details/delivery-channel-details.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n            <div class=\"btn-group btn-breadcrumb \">\n                <a routerLink=\"/pingAlert/alertInbox\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-home\"></i></a>\n                <a class=\"btn btn-default\">Admin</a>\n                <a routerLink=\"/admin/deliveryChannelDetails\" class=\"btn btn-default\">Delivery Channel Details</a>\n\n        </div>\n      </div>\n\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form [formGroup]=\"editPingUser\" (ngSubmit)=\"onFormSubmit(QlikServer.value)\">\n        <div class=\"row\">\n      \n            <div class=\"col-md-5\">\n                <!-- <input type=\"text\" class=\"form-control\"> -->\n                <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                  <mat-label>Channel Type *</mat-label>\n                <mat-select placeholder=\"Device Name\" formControlName=\"DeviceName\" (selectionChange)=\"ChannelTypeChanged($event.value)\" name=\"DeviceName\" required>\n                    <mat-option>--  Select Device Name --</mat-option>\n                  <mat-option *ngFor=\"let chName of ChannelType\" [value]=\"chName.CahnnelTypeName\">\n                    {{chName.CahnnelTypeName}}\n                  </mat-option>\n                </mat-select>\n                <mat-error>\n                    <span *ngIf=\"!editPingUser.get('DeviceName').valid && editPingUser.get('DeviceName').touched\">Please select user access</span>\n                  </mat-error>\n                <!-- <mat-icon class=\"text-ping\" matSuffix>how_to_reg</mat-icon> -->\n                <!-- [selected]=\"car.color.id == qlikSenseApps.Appid\" -->\n              </mat-form-field>\n              </div>\n            <!-- <div class=\"col-md-1\"></div> -->      \n            <div class=\"input-group col-md-4\" style=\"float:right\">\n              <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"txtSearch\"/> -->\n              <input class=\"form-control\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\" >\n                  <div class=\"input-group-btn\">\n                      <button class=\"btn btn-default\" type=\"submit\">\n                          <span class=\"glyphicon glyphicon-search\"></span>\n                      </button>\n                  </div>\n              </div>\n        </div>\n     \n      </form>\n     </div>\n    </div>\n</div>\n<ng-container *ngIf=\"ShowEmailDetails\">\n    <div class=\"container\" id=\"table-responsive\">\n      <h3>Show Email Details</h3>\n        <div class=\"table-responsive\" >\n            <table name=\"EmailDetails\" mat-table [dataSource]=\"dataSource\" matSort class=\" mat-elevation-z8 table-bordered table-striped\">\n\n              <!-- USerID Column -->\n              <ng-container matColumnDef=\"DeliveryChannelID\">\n              <th  mat-header-cell *matHeaderCellDef style=\"margin-left: 100px;\">Delivery Channel ID</th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.DeliveryChannelID}} </td>\n              </ng-container>\n\n              <!-- USerNAme Column -->\n              <ng-container matColumnDef=\"DeliveryChannelName\">\n              <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp;Channel Name </th>\n              <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.DeliveryChannelName}} </td>\n              </ng-container>\n\n              <!-- Directory Column -->\n              <ng-container matColumnDef=\"DeliveryChannelType\">\n                <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp;Channel Type </th>\n                <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.DeliveryChannelType}} </td>\n                </ng-container>\n\n                  <!-- Access Column -->\n              <ng-container matColumnDef=\"Address\">\n                <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp;Address </th>\n                <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.Address}} </td>\n                </ng-container>\n\n                  <!-- Role Column -->\n              <ng-container matColumnDef=\"PortNo\">\n                <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp;Port No </th>\n                <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.PortNo}} </td>\n                </ng-container>\n\n                  <!-- EmailId Column -->\n              <ng-container matColumnDef=\"SecurityLayerID\">\n                <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp;Security Layer</th>\n                <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.SecurityLayerID}} </td>\n                </ng-container>\n\n                   <!-- Email User Column -->\n              <ng-container matColumnDef=\"EmailUserName\">\n                <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp;User Email</th>\n                <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.EmailUserName}} </td>\n                </ng-container>\n\n                   <!-- Default User Email Column -->\n                   <ng-container matColumnDef=\"DefaultSenderEmail\">\n                    <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp;Default User Email</th>\n                    <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.DefaultSenderEmail}} </td>\n                    </ng-container>\n  \n\n              <!-- alertsetTime Column -->\n              <!-- <ng-container matColumnDef=\"Setdate\">\n              <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp; Set date </th>\n              <td mat-cell  *matCellDef=\"let element\">  &nbsp;{{element.alertsetTime | date}} </td>\n              </ng-container> -->\n\n\n                 <!-- alertsetTime Column -->\n             <!-- <ng-container matColumnDef=\"SetTime\">\n                <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp; Set Time </th>\n                <td mat-cell name=\"SetTime\" *matCellDef=\"let element\">  &nbsp;{{element.alertsetTime | date:\"HH:MM\"}} </td>\n              </ng-container> -->\n\n    <!-- Trigger -->\n\n              <!-- <ng-container matColumnDef=\"trigger\">\n                <th mat-header-cell *matHeaderCellDef>&nbsp;&nbsp;Trigger  </th> -->\n               <!-- <td mat-cell *matCellDef=\"let element\"> {{element.trigger}} </td> -->\n               <!-- <td mat-cell *matCellDef=\"let element\">\n                    <mat-slide-toggle\n                          class=\"example-margin\"\n                          name=\"trigger\"\n                          [color]=\"color\"\n                          [checked]=\"checked\"\n                          [disabled]=\"disabled\"\n                          [(ngModel)]=\"element.trigger\"> {{element.trigger}}\n                    </mat-slide-toggle>\n                 </td>\n              </ng-container> -->\n\n              <!-- Colum Edit/ Delete -->\n              <ng-container matColumnDef=\"edit\">\n                  <th mat-header-cell *matHeaderCellDef>&nbsp;&nbsp;Edit / Delete  </th>\n\n                 <td mat-cell *matCellDef=\"let element\">\n                   <div class=\"row col-md-offset-3\">\n                     <div class=\"col-md-2\">\n                        <!-- <a routerLink=\"/edit_alert\" style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a> -->\n                        <!-- <a type='submit' [routerLink]=\"['/edit_new',element.id]\" (click)=\"onEdit(element._id)\" style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a> -->\n                        <a type='submit' [routerLink]=\"['/admin/editDeliveryChannel/',element._id]\"  style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a>\n\n                      </div>\n                     &nbsp;\n                     <div class=\"col-md-2\">\n                          <a style=\"cursor: pointer;\" (click)=\"deleteUser(element._id)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\n                         <!-- <a mat-raised-button color=\"warn\" (click)=\"deleteAlert(element._id)\"><mat-icon>delete</mat-icon></a> -->\n                      </div>\n                   </div>\n                 </td>\n               </ng-container>\n              <!-- <ng-container matColumnDef=\"Edit/Delete\">\n                  <th mat-header-cell *matHeaderCellDef>&nbsp;&nbsp;<strong>Edit / Delete</strong>  </th>\n                 <td>\n                   <div class=\"row\">\n                     <div class=\"col-md-2\">\n                      <button class=\"btn btn-primary\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\n                     </div>\n                     <div class=\"col-md-2\">\n                        <button class=\"btn btn-primary\"> <i class=\"glyphicon glyphicon-trash\"></i></button>\n                      </div>\n                   </div>\n                 </td>\n\n              </ng-container> -->\n\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n\n        </div>\n\n\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n            <!-- <a class=\"btn btn-danger\" [routerLink]=\"['/TestDelivery']\">Create User</a> -->\n            <button mat-raised-button id=\"btn\" [routerLink]=\"['/admin/createDeliveryChannel']\">Create Channel</button>\n        </div>\n        <div class=\"col-md-9\">\n          <mat-paginator  [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20, 30, 50, 100]\" showFirstLastButtons></mat-paginator>\n      </div>\n      </div>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"ShowMobileApp\">\n    <div class=\"container\" id=\"table-responsive\">\n      <h3>Show Mobile App Details</h3>\n      <div class=\"table-responsive\" >\n          <table name=\"MobileDetails\" mat-table [dataSource]=\"dataSource2\" matSort class=\" mat-elevation-z8 table-bordered table-striped\">\n\n            <!-- USerID Column -->\n            <ng-container matColumnDef=\"DeliveryChannelID\">\n            <th  mat-header-cell *matHeaderCellDef style=\"margin-left: 100px;\">Delivery Channel ID</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.DeliveryChannelID}} </td>\n            </ng-container>\n\n            <!-- USerNAme Column -->\n            <ng-container matColumnDef=\"DeliveryChannelName\">\n            <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp;Channel Name </th>\n            <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.DeliveryChannelName}} </td>\n            </ng-container>\n\n            <!-- Directory Column -->\n            <ng-container matColumnDef=\"DeliveryChannelType\">\n              <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp;Channel Type </th>\n              <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.DeliveryChannelType}} </td>\n              </ng-container>\n\n                <!-- APIKey Column -->\n            <ng-container matColumnDef=\"APIKey\">\n              <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp;API Key </th>\n              <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.APIKey}} </td>\n              </ng-container>\n\n                <!-- Role Column -->\n            <!-- <ng-container matColumnDef=\"PortNo\">\n              <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp;Port No </th>\n              <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.PortNo}} </td>\n              </ng-container> -->\n\n                <!-- SenderKey Column -->\n            <ng-container matColumnDef=\"SenderKey\">\n              <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp;Sender Key</th>\n              <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.SenderKey}} </td>\n              </ng-container>\n\n                 <!-- Server Column -->\n            <ng-container matColumnDef=\"Server\">\n              <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp;Server</th>\n              <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.Server}} </td>\n              </ng-container>\n\n                 <!-- DeviceName Column -->\n                 <ng-container matColumnDef=\"DeviceName\">\n                  <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp;Device Name</th>\n                  <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.DeviceName}} </td>\n                  </ng-container>\n\n            <!-- Colum Edit/ Delete -->\n            <ng-container matColumnDef=\"edit\">\n                <th mat-header-cell *matHeaderCellDef>&nbsp;&nbsp;Edit / Delete  </th>\n\n               <td mat-cell *matCellDef=\"let element\">\n                 <div class=\"row\">\n                   <div class=\"col-md-2\">\n                      <!-- <a routerLink=\"/edit_alert\" style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a> -->\n                      <!-- <a type='submit' [routerLink]=\"['/edit_new',element.id]\" (click)=\"onEdit(element._id)\" style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a> -->\n                      <a type='submit' [routerLink]=\"['/admin/editDeliveryChannel/',element._id]\"  style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a>\n\n                    </div>\n                   &nbsp;\n                   <div class=\"col-md-2\">\n                        <a style=\"cursor: pointer;\" (click)=\"deleteUser(element._id)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\n                       <!-- <a mat-raised-button color=\"warn\" (click)=\"deleteAlert(element._id)\"><mat-icon>delete</mat-icon></a> -->\n                    </div>\n                 </div>\n               </td>\n             </ng-container>\n            <!-- <ng-container matColumnDef=\"Edit/Delete\">\n                <th mat-header-cell *matHeaderCellDef>&nbsp;&nbsp;<strong>Edit / Delete</strong>  </th>\n               <td>\n                 <div class=\"row\">\n                   <div class=\"col-md-2\">\n                    <button class=\"btn btn-primary\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\n                   </div>\n                   <div class=\"col-md-2\">\n                      <button class=\"btn btn-primary\"> <i class=\"glyphicon glyphicon-trash\"></i></button>\n                    </div>\n                 </div>\n               </td>\n\n            </ng-container> -->\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns2;\"></tr>\n          </table>\n\n      </div>\n\n\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n            <!-- <a class=\"btn btn-danger\" [routerLink]=\"['/TestDelivery']\">Create User</a> -->\n            <a class=\"btn btn-danger\" [routerLink]=\"['/admin/createDeliveryChannel']\">Create Channel</a>\n        </div>\n        <div class=\"col-md-4\"></div>\n        <div class=\"col-md-5\">\n          <mat-paginator  [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20, 30, 50, 100]\" showFirstLastButtons></mat-paginator>\n      </div>\n      </div>\n    </div>\n</ng-container>\n\n   \n"

/***/ }),

/***/ "./src/app/Admin/DeliveryChannel/delivery-channel-details/delivery-channel-details.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/Admin/DeliveryChannel/delivery-channel-details/delivery-channel-details.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DeliveryChannelDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryChannelDetailsComponent", function() { return DeliveryChannelDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../admin.service */ "./src/app/Admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DeliveryChannelDetailsComponent = /** @class */ (function () {
    function DeliveryChannelDetailsComponent(api, router, location, route, snackbar, formBuilder) {
        this.api = api;
        this.router = router;
        this.location = location;
        this.route = route;
        this.snackbar = snackbar;
        this.formBuilder = formBuilder;
        this.APIKey = '';
        this.SenderKey = '';
        this.Server = '';
        this.MobileChannels = [
            { id: 1, name: 'IOS' },
            { id: 2, name: 'Android' }
        ];
        this.ChannelType = [];
        this.ShowMobileApp = false;
        this.ShowEmailDetails = true;
        this.selectedChannelValue = '';
        this.displayedColumns = ['DeliveryChannelID', 'DeliveryChannelName', 'DeliveryChannelType', 'Address', 'PortNo', 'SecurityLayerID', 'EmailUserName', 'DefaultSenderEmail', 'edit'];
        this.displayedColumns2 = ['DeliveryChannelID', 'DeliveryChannelName', 'DeliveryChannelType', 'APIKey', 'SenderKey', 'Server', 'DeviceName', 'edit'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    DeliveryChannelDetailsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DeliveryChannelDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.onEdit(this.route.snapshot.params['id']);
        this.api.getChannelTypes()
            .subscribe(function (res) {
            //console.log('Cahnnel Types*****'+res);
            for (var i = 0; i < res.length; i++) {
                var ChannelTypeID;
                var ChannelTypeName;
                ChannelTypeID = res[i].ChannelTypeID;
                ChannelTypeName = res[i].ChannelTypeName;
                //console.log('-------',ChannelTypeID,'-----',ChannelTypeName);
                // console.log('Applist data -----',JSON.stringify(res[i],null,4));
                _this.ChannelType.push({
                    "ChannelTypeID": ChannelTypeID,
                    "CahnnelTypeName": ChannelTypeName
                });
            }
            var chnName1 = JSON.stringify(_this.ChannelType, null, 4);
            //console.log("New Channel Type  Name"+chnName1) ;
            // console.log("----------------------------");
            // console.log(this.QlikSenseMeasures);
            // console.log("--------------------------------")
            // console.log(this.QlikSenseDiamentions);
            // this.visibleProgressBar=false;    
        }, function (err) {
            console.log(err);
            //  this.visibleProgressBar=false;
        });
        this.api.getDeliveryCahnnels()
            .subscribe(function (res) {
            // if(res.code == 200){
            console.log("Delivery channel : ", JSON.stringify(res, null, 4));
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res);
            _this.dataSource2.paginator = _this.paginator;
            _this.dataSource2.sort = _this.sort;
            // }
        }, function (err) {
            console.log(err);
        });
        this.editPingUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            DeliveryChannelID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            DeliveryChannelName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            DeliveryChannelType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            Address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            PortNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            SecurityLayerID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            EmailUserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            DefaultSenderEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            DeviceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.MobileChannels),
            InsertBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](localStorage.getItem('User')),
        });
        this.editPingUser = this.formBuilder.group({
            // id: '',
            // DeliveryChannelID:[this.uID,Validators.required],
            // DeliveryChannelName: new FormControl(this.ChannelNameArr, Validators.required),
            // DeliveryChannelType : new FormControl(this.ChannelType,Validators.required),
            Address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PortNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            SecurityLayerID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            EmailUserName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            DefaultSenderEmail: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            InsertBy: '',
            LoginUserID: '',
            APIKey: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            SenderKey: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Server: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            DeviceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.ChannelType, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    };
    DeliveryChannelDetailsComponent.prototype.onFormSubmit = function (form) { };
    DeliveryChannelDetailsComponent.prototype.ChannelTypeChanged = function (event) {
        var _this = this;
        //update the ui
        this.selectedChannelValue = event;
        //console.log("Selected Value is"+this.selectedChannelValue)  
        if (event == "Email") {
            // console.log("In email select value"+this.selectedChannelValue);
            this.ShowEmailDetails = true;
            this.ShowMobileApp = false;
            this.api.getAllDeliveryEmailChannel()
                .subscribe(function (res) {
                // if(res.code == 200){
                // console.log(res);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
                // }
            }, function (err) {
                console.log(err);
            });
        }
        else if (event == "Mobile App") {
            //console.log("In Mobile App select value"+this.selectedChannelValue);
            this.ShowMobileApp = true;
            this.ShowEmailDetails = false;
            this.api.getMobileAppDeliveryCahnnels()
                .subscribe(function (res) {
                // if(res.code == 200){
                //console.log(res);
                _this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res);
                _this.dataSource2.paginator = _this.paginator;
                _this.dataSource2.sort = _this.sort;
                // }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.ShowMobileApp = false;
            this.ShowEmailDetails = false;
        }
    };
    // Edit User
    DeliveryChannelDetailsComponent.prototype.onEdit = function (id) {
        var _this = this;
        console.log('In Edit User');
        console.log(id);
        this.api.getDeliveryCahnnel(id)
            .subscribe(function (res) {
            console.log(res);
            _this.DeliveryChannelID = id;
        });
    };
    // delete User
    DeliveryChannelDetailsComponent.prototype.deleteUser = function (id) {
        var _this = this;
        console.log('In Delete User');
        console.log(id);
        this.api.deleteDeliveryChannel(id)
            .subscribe(function (res) {
            console.log('ping user new Data');
            _this.api.getDeliveryCahnnels()
                .subscribe(function (res) {
                _this.snackbar.open('Succesfully deleted user', 'Close', {
                    duration: 3000,
                });
                console.log(res);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }, function (err) {
                console.log(err);
            });
            // this.api.getPingUsersNew()
            // .subscribe( res => {
            //   console.log('ping user new Data');
            //   console.log(res);
            //   this.snackbar.open('Succesfully deleted user', 'Close', {
            //     duration: 3000,
            //   });
            //   this.dataSource = new MatTableDataSource(res);
            //   this.dataSource.sort = this.sort;
            //   this.dataSource.paginator = this.paginator;
            // }, err => {
            //   console.log(err);
            // });
            // this.router.navigateByUrl("/alert_Inbox");
            // this.router.navigate(['/alert_examples']);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DeliveryChannelDetailsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DeliveryChannelDetailsComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DeliveryChannelDetailsComponent.prototype, "paginator1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DeliveryChannelDetailsComponent.prototype, "sort1", void 0);
    DeliveryChannelDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delivery-channel-details',
            template: __webpack_require__(/*! ./delivery-channel-details.component.html */ "./src/app/Admin/DeliveryChannel/delivery-channel-details/delivery-channel-details.component.html"),
            styles: [__webpack_require__(/*! ./delivery-channel-details.component.css */ "./src/app/Admin/DeliveryChannel/delivery-channel-details/delivery-channel-details.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], DeliveryChannelDetailsComponent);
    return DeliveryChannelDetailsComponent;
}());

// export class DeliveryDataSource extends DataSource<any> {
//   constructor(private api: ApiService) {
//     super();
//   }
//   connect() {
//     return  this.api.getDeliveryCahnnels()
//   }
//   disconnect() {
//   }
// }
// export class DeliveryDataSourceMobileApp extends DataSource<any> {
//   constructor(private api: ApiService) {
//     super();
//   }
//   connect() {
//     return  this.api.getDeliveryCahnnels()
//   }
//   disconnect() {
//   }
// }


/***/ }),

/***/ "./src/app/Admin/DeliveryChannel/edit-delivery-channel/edit-delivery-channel.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/Admin/DeliveryChannel/edit-delivery-channel/edit-delivery-channel.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#edit{\r\n    background-color:rgb(231, 76, 60);\r\n    padding-top: 14px;\r\n}\r\n\r\n.btn-primary{\r\n    margin-left: 40%;\r\n}\r\n\r\n#container1{\r\n    border: 1px solid rgb(236, 235, 235);\r\n    margin-left:20%\r\n}\r\n\r\n/* #margin{\r\n    margin-left: 10% ;\r\n} */\r\n\r\n.btn-primary {\r\n  background-color:rgb(231, 76, 60);\r\n  border: rgb(231, 76, 60);\r\n}\r\n\r\n.example-form {\r\n    min-width: 80px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n.example-full-width:nth-last-child() {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n.button-row {\r\n    margin: 10px 0;\r\n  }\r\n\r\n.text-ping{\r\n    color: red\r\n}\r\n\r\n.text-white{\r\n    color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/Admin/DeliveryChannel/edit-delivery-channel/edit-delivery-channel.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/Admin/DeliveryChannel/edit-delivery-channel/edit-delivery-channel.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n          <div class=\"btn-group btn-breadcrumb \">\n              <a routerLink=\"/pingAlert/alertInbox\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-home\"></i></a>\n              <a class=\"btn btn-default\">Admin</a>\n              <a routerLink=\"/admin/deliveryChannelDetails\" class=\"btn btn-default\">Delivery Channel Details</a>\n              <a class=\"btn btn-default active\">Create/Edit Delivery Channel</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n    <br>\n    <form [formGroup]=\"frmEditDeliveryChannel\" (ngSubmit)=\"onFormSubmit(frmEditDeliveryChannel.value)\">\n      <div class=\"col-lg-9 col-lg-offset-1\">\n          <mat-card>\n              <div class=\"row\">\n                <!-- <div class=\"col-md-1\"></div> -->\n                <!-- <div class=\" col-md-3\">\n                  Delievery Channel Name:\n                </div> -->\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                      <mat-label>channel Name </mat-label>\n                    <!-- <mat-select placeholder=\"Channel Name\" formControlName=\"DeliveryChannelName\" name=\"ChannelName1\" required>\n                        <mat-option>--  Select Cahnnel Name --</mat-option>\n                      <mat-option *ngFor=\"let chName of ChannelNameArr\" [value]=\"chName.ChannelName\">\n                        {{chName.ChannelName}}\n                      </mat-option>\n                    </mat-select> -->\n                    <input type=\"text\" matInput placeholder=\"Channel Name\" formControlName=\"DeliveryChannelName\"\n                    [errorStateMatcher]=\"matcher\" required>\n                    <mat-error>\n                        <span *ngIf=\"!frmEditDeliveryChannel.get('DeliveryChannelName').valid && frmEditDeliveryChannel.get('DeliveryChannelName').touched\">Please select user access</span>\n                      </mat-error>\n                    <!-- <mat-icon class=\"text-ping\" matSuffix>how_to_reg</mat-icon> -->\n                    <!-- [selected]=\"car.color.id == qlikSenseApps.Appid\" -->\n                  </mat-form-field>\n                  </div>\n                  </div>\n                  <!-- <div class=\"col-md-1\"></div> -->\n                  <!-- <div class=\" col-md-3\">\n                      Channel Type:\n                    </div> -->\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                          <mat-label>Channel Type</mat-label>\n                        <mat-select placeholder=\"Channel Type\" formControlName=\"DeliveryChannelType\" name=\"DeliveryChannelType\" (selectionChange)=\"ChannelTypeChanged($event.value)\" required >\n                            <mat-option>-- Select Channel TYpe --</mat-option>\n                          <mat-option *ngFor=\"let CType of ChannelType\" [value]=\"CType.CahnnelTypeName\">\n                            {{CType.CahnnelTypeName}}\n                          </mat-option>\n                        </mat-select>\n                        <mat-error>\n                            <span *ngIf=\"!frmEditDeliveryChannel.get('DeliveryChannelType').valid && frmEditDeliveryChannel.get('DeliveryChannelType').touched\">Please select user role</span>\n                          </mat-error>\n                        <!-- <mat-icon class=\"text-ping\" matSuffix>beenhere</mat-icon> -->\n                        <!-- [selected]=\"car.color.id == qlikSenseApps.Appid\" -->\n                      </mat-form-field>\n                      </div>\n                      </div>\n                  </div>\n          </mat-card>\n        <ng-container *ngIf=\"ShowEmail\">\n            <mat-panel-title>\n                Email Connection Details:\n            </mat-panel-title>\n     <mat-card>\n     <div class=\"container\">\n             <div class=\"from-group\">\n                 <div class=\"row\">\n                    \n                     <div class=\"col-md-5\">\n                       <!-- <input type=\"text\" class=\"form-control\"> -->\n                       <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                         <mat-label>Address *</mat-label>\n                         <!-- <span matPrefix><mat-icon matPrefix>edit</mat-icon> &nbsp;</span> -->\n                         <input matInput placeholder=\"Enter Delivery Channel Name\" formControlName=\"Address\"\n                                [errorStateMatcher]=\"matcher\">\n                         <mat-error>\n                           <span *ngIf=\"!frmEditDeliveryChannel.get('Address').valid && frmEditDeliveryChannel.get('Address').touched\">Please enter User Name</span>\n                         </mat-error>\n                         <!-- <mat-icon class=\"text-ping\" matSuffix>supervised_user_circle</mat-icon> -->\n                       </mat-form-field>\n                     </div>\n                     <!-- <div class=\"col-md-1\"></div> -->\n                     \n                     <div class=\"col-md-4\">\n                       <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n                         <mat-label>PortNo *</mat-label>\n                         <!-- <span matPrefix><mat-icon matPrefix>edit_attributes</mat-icon>&nbsp;</span> -->\n                         <input  matInput placeholder=\"Select Cahnnel\" formControlName=\"PortNo\"\n                                [errorStateMatcher]=\"matcher\">\n                                <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n\n                                <!-- <mat-icon class=\"text-ping\" matSuffix>perm_identity</mat-icon> -->\n\n                         <mat-error>\n                           <span *ngIf=\"!frmEditDeliveryChannel.get('PortNo').valid && frmEditDeliveryChannel.get('PortNo').touched\">Please enter User ID</span>\n                         </mat-error>\n                       </mat-form-field>\n                     </div>\n                     \n                 </div>\n             <br>\n             <div class=\"row\">\n                 \n                 <div class=\"col-md-5\">\n                     <mat-radio-group formControlName=\"SecurityLayerID\">\n                         <mat-radio-button class=\"example-margin\" color =\"warn\" value=\"TLS Security\" (click)=\"show = 'false' \">Use TLS(Transport Layer Security)</mat-radio-button>\n                         <mat-radio-button class=\"example-margin\" color =\"warn\" value=\"SSL Security\" (click)=\"show = 'true' \">Use SSL(Secure Socet Layer)</mat-radio-button>\n                     </mat-radio-group>\n                 </div>\n             </div>\n             <br>\n             <div class=\"row\">\n                \n                 <div class=\"col-md-5\">\n                   <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                     <mat-label>User Email *</mat-label>\n                     <!-- <span matPrefix>+1 &nbsp;</span> -->\n                     <input matInput placeholder=\"Enter User Email\" formControlName=\"EmailUserName\"\n                            [errorStateMatcher]=\"matcher\">\n                     <mat-error>\n                       <span *ngIf=\"!frmEditDeliveryChannel.get('EmailUserName').valid && frmEditDeliveryChannel.get('EmailUserName').touched\">Please enter User Directory</span>\n                     </mat-error>\n                     <!-- <mat-icon class=\"text-ping\" matSuffix>folder_shared</mat-icon> -->\n                   </mat-form-field>\n                 </div>\n               <div class=\"col-md-6\">\n                   <div class=\"row\">\n                       \n                       <div class=\"col-md-5\">\n                         <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n                           <mat-label>Password *</mat-label>\n                           <!-- <span matPrefix><mat-icon matPrefix>edit_attributes</mat-icon>&nbsp;</span> -->\n                           <input type=\"password\" matInput placeholder=\"Enter Password\" formControlName=\"Password\"\n                                  [errorStateMatcher]=\"matcher\">\n                                  <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n \n                                  <!-- <mat-icon class=\"text-ping\" matSuffix>perm_identity</mat-icon> -->\n \n                           <mat-error>\n                             <span *ngIf=\"!frmEditDeliveryChannel.get('Password').valid && frmEditDeliveryChannel.get('Password').touched\">Please enter password</span>\n                           </mat-error>\n                         </mat-form-field>\n                       </div>\n                     <div class=\"col-md-2\">\n                         <button class=\"btn btn-primary\">Test Connection</button>\n                     </div>\n                   </div>\n               </div>\n             </div><br>\n             <div class=\"row\">\n                \n                 <div class=\"col-md-5\">\n                   <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n                     <mat-label>Default Sender Email ID *</mat-label>\n                     <!-- <span matPrefix><mat-icon matPrefix>edit_attributes</mat-icon>&nbsp;</span> -->\n                     <input matInput placeholder=\"Enter Default Sennder Email Id\" formControlName=\"DefaultSenderEmail\"\n                            [errorStateMatcher]=\"matcher\">\n                            <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n\n                            <!-- <mat-icon class=\"text-ping\" matSuffix>perm_identity</mat-icon> -->\n\n                     <mat-error>\n                       <span *ngIf=\"!frmEditDeliveryChannel.get('DefaultSenderEmail').valid && frmEditDeliveryChannel.get('DefaultSenderEmail').touched\">Please enter User ID</span>\n                     </mat-error>\n                   </mat-form-field>\n                 </div>\n               </div>\n              \n           </div>\n           <br><br><br>\n         <!-- <div class=\"row\">\n           <div class=\"col-md-5\"></div>\n           <div>\n             <button class=\" col-md-2\" class=\"btn btn-danger\" (click)=\"onAddValues(email, app)\" type=\"submit\">Save</button>\n             &nbsp;&nbsp;&nbsp;&nbsp;\n             <button class=\" col-md-2\" class=\"btn btn-default\" >Cancel</button>\n           </div>\n\n\n         </div> -->\n     </div>\n\n     </mat-card>\n        </ng-container>        \n         \n\n<!-- Mobile Channel Details -->\n<!-- *********************************************** -->\n<ng-container *ngIf=\"ShowMobileApp\">\n  <mat-panel-title>\n    Mobile App Connection Details:\n  </mat-panel-title>\n  <mat-card>\n  <div class=\"container\">\n  <div class=\"from-group\">\n    <div class=\"row\">\n        \n        <div class=\"col-md-5\">\n          <!-- <input type=\"text\" class=\"form-control\"> -->\n          <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n            <mat-label>Device Name *</mat-label>\n          <mat-select placeholder=\"Device Name\" formControlName=\"DeviceName\" name=\"DeviceName\" required>\n              <mat-option>--  Select Device Name --</mat-option>\n            <mat-option *ngFor=\"let chName of MobileChannels\" [value]=\"chName.name\">\n              {{chName.name}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n              <span *ngIf=\"!frmEditDeliveryChannel.get('DeviceName').valid && frmEditDeliveryChannel.get('DeviceName').touched\">Please Select Device Name</span>\n            </mat-error>\n          <!-- <mat-icon class=\"text-ping\" matSuffix>how_to_reg</mat-icon> -->\n          <!-- [selected]=\"car.color.id == qlikSenseApps.Appid\" -->\n        </mat-form-field>\n        </div>\n        <!-- <div class=\"col-md-1\"></div> -->      \n        \n    </div>\n  <br>\n\n  <!-- API KEY Contol -->\n  <div class=\"row\">\n    \n    <div class=\"col-md-5\">\n      <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n        <mat-label>API Key *</mat-label>\n        <!-- <span matPrefix><mat-icon matPrefix>edit_attributes</mat-icon>&nbsp;</span> -->\n        <input matInput placeholder=\"Enter API Key\" formControlName=\"APIKey\"\n                [errorStateMatcher]=\"matcher\">\n                <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n\n                <!-- <mat-icon class=\"text-ping\" matSuffix>perm_identity</mat-icon> -->\n\n        <mat-error>\n          <span *ngIf=\"!frmEditDeliveryChannel.get('APIKey').valid && frmEditDeliveryChannel.get('APIKey').touched\">Please Enter API Key</span>\n        </mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n\n  <!-- Sender Key Controls -->\n  <div class=\"row\">\n    \n    <div class=\"col-md-5\">\n      <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n        <mat-label>Sender Key *</mat-label>\n        <!-- <span matPrefix><mat-icon matPrefix>edit_attributes</mat-icon>&nbsp;</span> -->\n        <input matInput placeholder=\"Enter Sender Key\" formControlName=\"SenderKey\"\n              [errorStateMatcher]=\"matcher\">\n              <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n\n              <!-- <mat-icon class=\"text-ping\" matSuffix>perm_identity</mat-icon> -->\n\n        <mat-error>\n          <span *ngIf=\"!frmEditDeliveryChannel.get('SenderKey').valid && frmEditDeliveryChannel.get('SenderKey').touched\">Please Enter Sender Key</span>\n        </mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n\n  <!-- Server controls -->\n  <div class=\"row\">\n    \n    <div class=\"col-md-5\">\n      <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n        <mat-label>Server *</mat-label>\n        <!-- <span matPrefix><mat-icon matPrefix>edit_attributes</mat-icon>&nbsp;</span> -->\n        <input matInput placeholder=\"Enter Server\" formControlName=\"Server\"\n              [errorStateMatcher]=\"matcher\">\n              <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n\n              <!-- <mat-icon class=\"text-ping\" matSuffix>perm_identity</mat-icon> -->\n\n        <mat-error>\n          <span *ngIf=\"!frmEditDeliveryChannel.get('Server').valid && frmEditDeliveryChannel.get('Server').touched\">Please Enter Server Details</span>\n        </mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n\n\n  </div>\n  <br><br><br>\n  <!-- <div class=\"row\">\n  <div class=\"col-md-5\"></div>\n  <div>\n  <button class=\" col-md-2\" class=\"btn btn-danger\" (click)=\"onAddValues(email, app)\" type=\"submit\">Save</button>\n  &nbsp;&nbsp;&nbsp;&nbsp;\n  <button class=\" col-md-2\" class=\"btn btn-default\" >Cancel</button>\n  </div>\n\n\n  </div> -->\n  </div>\n\n  </mat-card>\n</ng-container>\n<div class=\"row\">\n  <div class=\"col-md-5\"></div>\n  <div>\n  <button class=\"col-md-2\" [disabled]=\"!frmEditDeliveryChannel.valid\"  class=\"btn btn-danger\"  type=\"submit\">Update</button>\n  &nbsp;&nbsp;&nbsp;&nbsp;\n  <button class=\" col-md-2\" [routerLink]=\"['/admin/deliveryChannelDetails']\" class=\"btn btn-default\" >Cancel</button>\n  </div>\n\n\n  </div>\n      </div>\n    </form>\n    <!-- <p>Form value: {{ frmEditDeliveryChannel.value | json }}</p> -->\n</div>"

/***/ }),

/***/ "./src/app/Admin/DeliveryChannel/edit-delivery-channel/edit-delivery-channel.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/Admin/DeliveryChannel/edit-delivery-channel/edit-delivery-channel.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EditDeliveryChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDeliveryChannelComponent", function() { return EditDeliveryChannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_web_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/angular-web-storage */ "./node_modules/angular-web-storage/esm5/web-storage.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin.service */ "./src/app/Admin/admin.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditDeliveryChannelComponent = /** @class */ (function () {
    function EditDeliveryChannelComponent(route, commanApi, api, router, formBuilder, snackbar, local, session) {
        this.route = route;
        this.commanApi = commanApi;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.local = local;
        this.session = session;
        this.ChannelNameArr = [];
        this.ChannelType = [];
        this.ShowMobileApp = true;
        this.ShowEmail = true;
        this.selectedChannelValue = '';
        this.DeliveryChannelID = '';
        this.DeliveryChannelName = '';
        this.DeliveryChannelType = '';
        this.Address = '';
        this.PortNo = '';
        this.SecurityLayerID = '';
        this.EmailUserName = '';
        this.Password = '';
        this.DefaultSenderEmail = '';
        this.InsertBy = '';
        this.usercount = '';
        this.count = 0;
        this.LoginUserID = '';
        this.userID = '';
        this.uID = '';
        this.DeviceName = '';
        this.APIKey = '';
        this.SenderKey = '';
        this.Server = '';
        // DeviceName: new FormControl(this.MobileChannels, Validators.required),
        this.AAccess = [
            { id: 1, name: 'Use Qlik Security' },
            { id: 2, name: 'Manage in Ping' }
        ];
        this.RRole = [
            { id: 2, name: 'Administrator' },
            { id: 3, name: 'Connnection Manager' },
            { id: 4, name: 'User' }
        ];
        this.MobileChannels = [
            { id: 1, name: 'IOS' },
            { id: 2, name: 'Android' }
        ];
    }
    EditDeliveryChannelComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('route succesfully');
        console.log(this.route.snapshot.params['id']);
        this.onEdit(this.route.snapshot.params['id']);
        console.log('test route succesfully');
        console.log(this.route.snapshot.params['id']);
        this.onEdit(this.route.snapshot.params['id']);
        this.commanApi.getLoggeddUser().subscribe(function (res) {
            console.log("Pinguser details Id check ", res);
            _this.frmEditDeliveryChannel.get('InsertBy').setValue(res.PingUserName);
            _this.frmEditDeliveryChannel.get('LoginUserID').setValue(res.PingUserID);
            _this.api.getDeliveryCahnnels()
                .subscribe(function (res) {
                // console.log(res);
                _this.count = res.length;
                _this.count = _this.count + 1;
                _this.userID = 'DC-' + _this.count;
                _this.uID = _this.frmEditDeliveryChannel.get('DeliveryChannelID').setValue(_this.userID);
            }, function (err) {
                console.log(err);
                _this.usercount = '0';
            });
            //Get channel Name
            _this.api.getChannelNames()
                .subscribe(function (res) {
                console.log(res);
                for (var i = 0; i < res.length; i++) {
                    var ChannelID;
                    var ChannelName;
                    ChannelID = res[i].ChannelID;
                    ChannelName = res[i].ChannelName;
                    //console.log('-------',ChannelID,'-----',ChannelName);
                    // console.log('Applist data -----',JSON.stringify(res[i],null,4));
                    _this.ChannelNameArr.push({
                        "ChannelID": ChannelID,
                        "ChannelName": ChannelName
                    });
                }
                var chnName = JSON.stringify(_this.ChannelNameArr, null, 4);
                // console.log("New Channel Name"+chnName) ;
                console.log("----------------------------");
                // console.log(this.QlikSenseMeasures);
                // console.log("--------------------------------")
                // console.log(this.QlikSenseDiamentions);
                // this.visibleProgressBar=false;    
            }, function (err) {
                console.log(err);
                //  this.visibleProgressBar=false;
            });
            //Get Channel Type
            _this.api.getChannelTypes()
                .subscribe(function (res) {
                console.log('Cahnnel Types*****' + res);
                for (var i = 0; i < res.length; i++) {
                    var ChannelTypeID;
                    var ChannelTypeName;
                    ChannelTypeID = res[i].ChannelTypeID;
                    ChannelTypeName = res[i].ChannelTypeName;
                    console.log('-------', ChannelTypeID, '-----', ChannelTypeName);
                    // console.log('Applist data -----',JSON.stringify(res[i],null,4));
                    _this.ChannelType.push({
                        "ChannelTypeID": ChannelTypeID,
                        "CahnnelTypeName": ChannelTypeName
                    });
                }
                var chnName1 = JSON.stringify(_this.ChannelType, null, 4);
                console.log("New Channel Type  Name" + chnName1);
                console.log("----------------------------");
                // console.log(this.QlikSenseMeasures);
                // console.log("--------------------------------")
                // console.log(this.QlikSenseDiamentions);
                // this.visibleProgressBar=false;    
            }, function (err) {
                console.log(err);
                //  this.visibleProgressBar=false;
            });
        }, function (err) {
            console.log("err");
            console.log(err);
            _this.router.navigate(['/login']);
        });
        this.frmEditDeliveryChannel = this.formBuilder.group({
            // PingUserID:[null,Validators.required],
            // PingUserName:[null,Validators.required],
            // PingUserDirectory :[null,Validators.required],
            // PingUserAccess : [null,Validators.required],
            // PingMemberID :'',
            // PingGroupID : '',
            // PingRole : [null,Validators.required],
            // InsertBy : '',
            // EmailID:[null,Validators.required],
            // password:[null,Validators.required],
            DeliveryChannelID: '',
            DeliveryChannelName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.ChannelNameArr, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            DeliveryChannelType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.ChannelType, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Address: '',
            PortNo: '',
            SecurityLayerID: '',
            EmailUserName: '',
            Password: '',
            DefaultSenderEmail: '',
            APIKey: '',
            SenderKey: '',
            Server: '',
            InsertBy: '',
            usercount: '',
            count: '',
            DeviceName: '',
            LoginUserID: '',
        });
    };
    EditDeliveryChannelComponent.prototype.onEdit = function (id) {
        var _this = this;
        console.log('In Edit alert');
        console.log(id);
        this.api.getDeliveryCahnnel(id).subscribe(function (res) {
            console.log('Get Edit Data');
            console.log(res);
            var id8 = res._id;
            console.log(id8);
            console.log(res.DeliveryChannelID);
            console.log("Cahnnel Name " + res);
            // console.log(res.PingUserDirectory);
            // console.log("Deliverto"+res.PingUserID);
            // console.log("Data Sourse"+res.PingUserName);
            _this.frmEditDeliveryChannel.get('DeliveryChannelID').setValue(res.DeliveryChannelID);
            _this.frmEditDeliveryChannel.get('DeliveryChannelName').setValue(res.DeliveryChannelName);
            _this.frmEditDeliveryChannel.get('DeliveryChannelType').setValue(res.DeliveryChannelType);
            _this.frmEditDeliveryChannel.get('Address').setValue(res.Address);
            _this.frmEditDeliveryChannel.get('EmailUserName').setValue(res.EmailUserName);
            _this.frmEditDeliveryChannel.get('Password').setValue(res.Password);
            _this.frmEditDeliveryChannel.get('PortNo').setValue(res.PortNo);
            _this.frmEditDeliveryChannel.get('SecurityLayerID').setValue(res.SecurityLayerID);
            _this.frmEditDeliveryChannel.get('DefaultSenderEmail').setValue(res.DefaultSenderEmail);
            _this.frmEditDeliveryChannel.get('DeviceName').setValue(res.DeviceName);
            _this.frmEditDeliveryChannel.get('APIKey').setValue(res.APIKey);
            _this.frmEditDeliveryChannel.get('SenderKey').setValue(res.SenderKey);
            _this.frmEditDeliveryChannel.get('Server').setValue(res.Server);
            // this.frmAlert.setValue(res.frmCntDataSource);
            //  this.frmAlert.setValue(res.frmCntMeasures.pingMeasuresqLabel);
            //  this.frmAlert.setValue(res.frmCntApplication.AppName);
            //  this.frmAlert.setValue({
            //   frmCntAlertID: res.frmCntAlertID,
            //   frmCntAlertName: res.frmCntAlertName,
            //   frmCntRecipient: res.frmCntRecipient,  
            //   frmCntDeliverTo: res.frmCntDeliverTo,
            //   frmCntDataSource: res.frmCntDataSource,
            //   frmCntMeasures: res.frmCntMeasures,
            //   frmCntApplication: res.frmCntApplication,
            // });
        });
    };
    EditDeliveryChannelComponent.prototype.ChannelTypeChanged = function (event) {
        //update the ui
        this.selectedChannelValue = event;
        console.log("Selected Value is" + this.selectedChannelValue);
        if (event == "Email") {
            console.log("In email select value" + this.selectedChannelValue);
            this.ShowEmail = true;
            this.ShowMobileApp = false;
            // this.QlikServer = this.formBuilder.group({
            //    id: '',
            //   // DeliveryChannelID:[this.uID,Validators.required],
            //   // DeliveryChannelName: new FormControl(this.ChannelNameArr, Validators.required),
            //   // DeliveryChannelType : new FormControl(this.ChannelType,Validators.required),
            //   Address :[null,Validators.required],
            //   PortNo :[null,Validators.required],
            //   SecurityLayerID :[null,Validators.required],
            //   EmailUserName :[null,Validators.required],
            //   Password:[null,Validators.required],
            //   DefaultSenderEmail:[null,Validators.required],
            //   InsertBy : AuthService.loggedUserName,
            //   LoginUserID:AuthService.loggedUserTableID,
            //   APIKey:[null],
            //   SenderKey:[null],
            //   Server:[null],
            //   DeviceName: new FormControl(this.MobileChannels),
            // })
        }
        else if (event == "Mobile App") {
            console.log("In Mobile App select value" + this.selectedChannelValue);
            this.ShowMobileApp = true;
            this.ShowEmail = false;
            // this.frmEditDeliveryChannel = this.formBuilder.group({
            //    id: '',
            //   // DeliveryChannelID:[this.uID,Validators.required],
            //   // DeliveryChannelName: new FormControl(this.ChannelNameArr, Validators.required),
            //   // DeliveryChannelType : new FormControl(this.ChannelType,Validators.required),
            //   Address :[null],
            //   PortNo :[null],
            //   SecurityLayerID :[null],
            //   EmailUserName :[null],
            //   Password:[null],
            //   DefaultSenderEmail:[null],
            //   InsertBy : AuthService.loggedUserName,
            //   LoginUserID:AuthService.loggedUserTableID,
            //   APIKey:[null,Validators.required],
            //   SenderKey:[null,Validators.required],
            //   Server:[null,Validators.required],
            //   DeviceName: new FormControl(this.MobileChannels, Validators.required),
            // })
        }
        else {
            this.ShowMobileApp = false;
            this.ShowEmail = false;
        }
    };
    EditDeliveryChannelComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        console.log(this.route.snapshot.params['id']);
        this.api.UpdateDeliveryChannel(this.route.snapshot.params['id'], form)
            .subscribe(function (res) {
            res['_id'] = _this.route.snapshot.params['id'];
            var id = res['_id'];
            _this.snackbar.open('Succesfully updated Delivery Channel Details', 'Close', {
                duration: 3000,
            });
            _this.router.navigate(['/admin/deliveryChannelDetails']);
        }, function (err) {
            _this.snackbar.open('Something went wrong...!!', 'Close', {
                duration: 3000,
            });
            console.log(err);
        });
    };
    EditDeliveryChannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-delivery-channel',
            template: __webpack_require__(/*! ./edit-delivery-channel.component.html */ "./src/app/Admin/DeliveryChannel/edit-delivery-channel/edit-delivery-channel.component.html"),
            styles: [__webpack_require__(/*! ./edit-delivery-channel.component.css */ "./src/app/Admin/DeliveryChannel/edit-delivery-channel/edit-delivery-channel.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"], _admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _node_modules_angular_web_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], _node_modules_angular_web_storage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]])
    ], EditDeliveryChannelComponent);
    return EditDeliveryChannelComponent;
}());



/***/ }),

/***/ "./src/app/Admin/LicenseDetails/license-details/license-details.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/Admin/LicenseDetails/license-details/license-details.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerMargin{\r\n    padding-top: 10%;\r\n    }\r\n    .PaddingTop{\r\n        padding-top: \"100px\";\r\n        }\r\n    .PaddingHeader\r\n    {\r\n        padding-left: 50px;padding-top: 30px\r\n    }\r\n    .footer {\r\n        position: fixed;\r\n        background-color: darkgray;\r\n        color: black;\r\n        text-align: center;\r\n    }"

/***/ }),

/***/ "./src/app/Admin/LicenseDetails/license-details/license-details.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/Admin/LicenseDetails/license-details/license-details.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row headerMargin\">\n  <div class=\"col-lg-4 col-lg-offset-4\">\n    <mat-card>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <h4 class=\"text-success\"><b>Ping License Details</b></h4>\n        </div>\n      </div>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-lg-3\">\n            <img src=\"../../../../assets/imgs/LicenseImg.png\" height=\"100\" width=\"100\">\n        </div>\n        <div class=\"col-lg-9\">\n          <div class=\"row\">\n            <div class=\"col-lg-5\">\n                <p>User ID :</p>\n            </div>\n            <div class=\"col-lg-7\">\n                <p>  {{userID}}</p>\n                \n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-lg-5\">\n                  <p>User Name :</p>\n              </div>\n              <div class=\"col-lg-7\">\n                  <p>  {{UserName}}</p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-5\">\n                    <p>User Role :</p>\n                </div>\n                <div class=\"col-lg-7\">\n                    <p>  {{UserRole}}</p>\n                  </div>\n            </div>\n              <div class=\"row\">\n                  <div class=\"col-lg-5\">\n                      <p>License :</p>\n                  </div>\n                  <div class=\"col-lg-7\">\n                      <p>  Trail Version</p>\n                  </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"col-lg-5\">\n                      <p>Key Status :</p>\n                  </div>\n                  <div class=\"col-lg-7\">\n                      <p>  {{KeyStatus}}</p>\n                    </div>\n              </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-5\">\n                        <p>Activation Date :</p>\n                    </div>\n                    <div class=\"col-lg-7\">\n                        <p>  {{ActivationDate}}</p>\n                      </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-5\">\n                        <p>Expiration Date :</p>\n                    </div>\n                    <div class=\"col-lg-7\">\n                        <p>  {{ExpirationDate}}</p>\n                      </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-5\">\n                        <p>Days Remaining :</p>\n                    </div>\n                    <div class=\"col-lg-7\">\n                        <p>  {{DaysRemainig}}</p>\n                      </div>\n                </div>\n        </div>\n      </div>\n<br>\n<div class=\"row text-center\">\n        <div class=\"col-lg-4 col-lg-offset-2\">\n          <input type=\"button\" [disabled]=\"RenewStatus\" (click)=\"renewKey()\" class=\"btn btn-success\" value=\"Renew License\"/>\n        </div>\n        <div class=\"col-lg-4\">\n            <input type=\"button\"  class=\"btn btn-info\" value=\"More Info\" style=\"padding-left: 20px\"/>\n          </div>\n      </div>\n\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Admin/LicenseDetails/license-details/license-details.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Admin/LicenseDetails/license-details/license-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LicenseDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseDetailsComponent", function() { return LicenseDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _LoginModule_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../LoginModule/login.service */ "./src/app/LoginModule/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var src_app_SuperAdmin_super_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/SuperAdmin/super-admin.service */ "./src/app/SuperAdmin/super-admin.service.ts");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
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









var LicenseDetailsComponent = /** @class */ (function () {
    function LicenseDetailsComponent(fb, router, api, formBuilder, snackbar, superAdminService, commanAPI, PingAdminFlag, _flashMessagesService) {
        this.fb = fb;
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.superAdminService = superAdminService;
        this.commanAPI = commanAPI;
        this.PingAdminFlag = PingAdminFlag;
        this._flashMessagesService = _flashMessagesService;
        this.RenewStatus = false;
    }
    LicenseDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commanAPI.getLoggeddUser().subscribe(function (res) {
            _this.userID = res.PingUserID;
            _this.UserName = res.PingUserName;
            _this.UserRole = res.PingRole;
            _this.api.CheckDateLocker().subscribe(function (resLic) {
                console.log("License Data", resLic);
                _this.KeyStatus = resLic.LicenceStatus;
                _this.ActivationDate = resLic.InstallationDate;
                _this.ExpirationDate = resLic.ExpiryDate;
                _this.DaysCounter = resLic.DayCounter;
                _this.DaysRemainig = resLic.DaysRemaining;
                if (_this.KeyStatus != "active") {
                    _this.RenewStatus = false;
                }
                else {
                    _this.RenewStatus = true;
                }
            });
        }, function (err) {
            console.log(err);
        });
    };
    LicenseDetailsComponent.prototype.renewKey = function () {
        var _this = this;
        console.log("Create New Registery Key");
        this.api.RenewLicense().subscribe(function (res) {
            console.log("New RegisteryKey In Registery", res);
            _this.router.navigate(['/login']);
        });
    };
    LicenseDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-license-details',
            template: __webpack_require__(/*! ./license-details.component.html */ "./src/app/Admin/LicenseDetails/license-details/license-details.component.html"),
            styles: [__webpack_require__(/*! ./license-details.component.css */ "./src/app/Admin/LicenseDetails/license-details/license-details.component.css")]
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
    ], LicenseDetailsComponent);
    return LicenseDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Admin/MasterForms/ChannelMaster/ChannelType/channel-type-details/channel-type-details.component.css":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/Admin/MasterForms/ChannelMaster/ChannelType/channel-type-details/channel-type-details.component.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\ntable {\r\n    width: 100%;\r\n    transition: none !important;\r\n    box-shadow: none !important;\r\n    margin-top: -30px;\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 70%;\r\n  }\r\n#table-responsive{\r\n    margin-top: 5px;\r\n  }\r\n#row2{\r\n    margin-top: -2px;\r\n    padding-top: 8px;\r\n    padding-bottom: 10px;\r\n  }\r\n.table-responsive{\r\n    margin-top: -15px;\r\n    padding-top: 40px;\r\n  }\r\ntr.mat-header-row{\r\n    height: 37px;\r\n  }\r\n.table-bordered>thead>tr>th{\r\n    border: 1px solid rgb(231, 76, 60);\r\n  }\r\ntd{\r\n    color: rgb(127, 127, 127)\r\n  }\r\n.mat-header-cell {\r\n    color: rgb(102,102,102);\r\n  }\r\nth{\r\n    padding-top: -100px;\r\n    font-size: 14px;\r\n    background-color: rgb(238, 238, 238);\r\n  }\r\n#btn{\r\n    background-color: rgb(249, 25, 66);\r\n    color: rgb(255, 255, 255)\r\n  }\r\n#th_allign{\r\n    text-align: center;\r\n  }"

/***/ }),

/***/ "./src/app/Admin/MasterForms/ChannelMaster/ChannelType/channel-type-details/channel-type-details.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/Admin/MasterForms/ChannelMaster/ChannelType/channel-type-details/channel-type-details.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n            <div class=\"btn-group btn-breadcrumb \">\n                <a routerLink=\"/pingAlert/alertInbox\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-home\"></i></a>\n                <a routerLink=\"/UserRoleCreate\" class=\"btn btn-default\">Users</a>\n                <a routerLink=\"/UserRoleDetails\" class=\"btn btn-default\">Channel Type Details</a>\n\n        </div>\n      </div>\n      <div class=\"col-md-4 pull-right\">\n        <div class=\"input-group\" style=\"float:right\">\n          <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"txtSearch\"/> -->\n          <input class=\"form-control\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\" >\n              <div class=\"input-group-btn\">\n                  <button class=\"btn btn-default\" type=\"submit\">\n                      <span class=\"glyphicon glyphicon-search\"></span>\n                  </button>\n              </div>\n          </div>\n       </div>\n\n\n    </div>\n</div>\n\n<!--\n<div class=\"row\">\n  <div class=\"col-xs-3\"></div>\n  <div class=\"col-xs-4\">\n\n  </div>\n</div> -->\n<br>\n\n\n    <div class=\"container\" id=\"table-responsive\">\n          <div class=\"table-responsive\" >\n              <table mat-table [dataSource]=\"dataSource\" matSort class=\" mat-elevation-z8 table-bordered table-striped\">\n\n                <!-- Channel Type Id Column -->\n                <ng-container matColumnDef=\"ChannelTypeID\">\n                <th class=\"text-center\" id=\"th_allign\" mat-header-cell *matHeaderCellDef >Channel Type ID</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.ChannelTypeID}} </td>\n                </ng-container>\n\n                <!-- Channel Type name Column -->\n                <ng-container matColumnDef=\"ChannelTypeName\">\n                  <th mat-header-cell id=\"th_allign\" class=\"text-center\" *matHeaderCellDef> Channel Type Name </th>\n                  <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.ChannelTypeName}} </td>\n                  </ng-container>\n\n                <!-- Insert By Column -->\n                <ng-container matColumnDef=\"InsertBy\">\n                <th mat-header-cell id=\"th_allign\" class=\"text-center\" *matHeaderCellDef> Insert By </th>\n                <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.InsertBy}} </td>\n                </ng-container>\n\n                <!-- Is aCtive Column -->\n                <ng-container matColumnDef=\"IsActive\">\n                  <th mat-header-cell id=\"th_allign\" class=\"text-center\"  *matHeaderCellDef>Is Active </th>\n                  <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.IsActive}} </td>\n                  </ng-container> \n                \n                <!-- Colum Edit/ Delete -->\n                <ng-container matColumnDef=\"edit\">\n                    <th mat-header-cell id=\"th_allign\" class=\"text-center\" *matHeaderCellDef>Edit / Delete  </th>\n\n                   <td mat-cell *matCellDef=\"let element\">\n                     <div class=\"row col-md-offset-3\">\n                       <div class=\"col-md-2\">\n                          <!-- <a routerLink=\"/edit_alert\" style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a> -->\n                          <!-- <a type='submit' [routerLink]=\"['/edit_new',element.id]\" (click)=\"onEdit(element._id)\" style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a> -->\n                          <a type='submit' [routerLink]=\"['/UserRoleEdit/',element._id]\"  style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a>\n\n                        </div>\n                       &nbsp;\n                       <div class=\"col-md-2\">\n                            <a style=\"cursor: pointer;\" (click)=\"deleteUser(element._id)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\n                           <!-- <a mat-raised-button color=\"warn\" (click)=\"deleteAlert(element._id)\"><mat-icon>delete</mat-icon></a> -->\n                        </div>\n                     </div>\n                   </td>\n                 </ng-container>\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n\n          </div>\n\n\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n              <button mat-raised-button id=\"btn\" [routerLink]=\"['/admin/createChannelType']\">Create Channel Type</button>\n          </div>\n          <div class=\"col-md-4\"></div>\n          <div class=\"col-md-5\">\n            <mat-paginator  [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20, 30, 50, 100]\" showFirstLastButtons></mat-paginator>\n        </div>\n        </div>\n      </div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/Admin/MasterForms/ChannelMaster/ChannelType/channel-type-details/channel-type-details.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/Admin/MasterForms/ChannelMaster/ChannelType/channel-type-details/channel-type-details.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ChannelTypeDetailsComponent, AlertDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelTypeDetailsComponent", function() { return ChannelTypeDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDataSource", function() { return AlertDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../admin.service */ "./src/app/Admin/admin.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChannelTypeDetailsComponent = /** @class */ (function () {
    function ChannelTypeDetailsComponent(api, router, location, route, snackbar) {
        this.api = api;
        this.router = router;
        this.location = location;
        this.route = route;
        this.snackbar = snackbar;
        this.displayedColumns = ['ChannelTypeID', 'ChannelTypeName', 'InsertBy', 'edit'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ChannelTypeDetailsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ChannelTypeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("in channel Type Init");
        //this.onEdit(this.route.snapshot.params['id']);
        this.api.getChannelTypes()
            .subscribe(function (res) {
            // if(res.code == 200){
            // console.log("Got oit"+res);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            // }   
        }, function (err) {
            console.log(err);
        });
        this.frmChannelType = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            ChannelID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            ChannelName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            //IsActive:new FormControl(),
            InsertBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](localStorage.getItem('User')),
        });
    };
    // Edit User
    ChannelTypeDetailsComponent.prototype.onEdit = function (id) {
        var _this = this;
        console.log('In Edit User');
        console.log(id);
        this.api.getCahnnelType(id)
            .subscribe(function (res) {
            console.log(res);
            _this.ChannelTypeID = id;
        });
    };
    // delete User
    ChannelTypeDetailsComponent.prototype.deleteUser = function (id) {
        var _this = this;
        console.log('In Delete User');
        console.log(id);
        this.api.deleteCahnnelType(id)
            .subscribe(function (res) {
            console.log('ping user new Data');
            _this.api.getChannelNames()
                .subscribe(function (res) {
                console.log(res);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
                _this.snackbar.open('Succesfully deleted user', 'Close', {
                    duration: 3000,
                });
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ChannelTypeDetailsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ChannelTypeDetailsComponent.prototype, "sort", void 0);
    ChannelTypeDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel-type-details',
            template: __webpack_require__(/*! ./channel-type-details.component.html */ "./src/app/Admin/MasterForms/ChannelMaster/ChannelType/channel-type-details/channel-type-details.component.html"),
            styles: [__webpack_require__(/*! ./channel-type-details.component.css */ "./src/app/Admin/MasterForms/ChannelMaster/ChannelType/channel-type-details/channel-type-details.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], ChannelTypeDetailsComponent);
    return ChannelTypeDetailsComponent;
}());

var AlertDataSource = /** @class */ (function (_super) {
    __extends(AlertDataSource, _super);
    function AlertDataSource(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    AlertDataSource.prototype.connect = function () {
        return this.api.getChannelTypes();
    };
    AlertDataSource.prototype.disconnect = function () {
    };
    return AlertDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/Admin/MasterForms/ChannelMaster/ChannelType/create-channel-type/create-channel-type.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/Admin/MasterForms/ChannelMaster/ChannelType/create-channel-type/create-channel-type.component.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\ntable {\r\n    width: 100%;\r\n    transition: none !important;\r\n    box-shadow: none !important;\r\n    margin-top: -30px;\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 70%;\r\n  }\r\n#table-responsive{\r\n    margin-top: 5px;\r\n  }\r\n#row2{\r\n    margin-top: -2px;\r\n    padding-top: 8px;\r\n    padding-bottom: 10px;\r\n  }\r\n.table-responsive{\r\n    margin-top: -15px;\r\n    padding-top: 40px;\r\n  }\r\ntr.mat-header-row{\r\n    height: 37px;\r\n  }\r\n.table-bordered>thead>tr>th{\r\n    border: 1px solid rgb(231, 76, 60);\r\n  }\r\n/* Switch Button */\r\nth{\r\n    padding-top: -100px;\r\n  }\r\ntd{\r\n    color: rgb(127, 127, 127)\r\n  }\r\n.mat-header-cell {\r\n    color: rgb(255, 255, 255);\r\n  }\r\nth{\r\n    font-size: 14px;\r\n    background-color: rgb(249, 55, 66);\r\n  \r\n  }\r\n.btn-danger{\r\n    background-color: rgb(249, 55, 66);\r\n    color: rgb(255, 255, 255)\r\n  }\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 24px;\r\n  }\r\n/* Hide default HTML checkbox */\r\n.switch input {display:none;}\r\n/* The slider */\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgb(216, 50, 50);\r\n    transition: .4s;\r\n  }\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 16px;\r\n    width: 16px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\ninput:checked + .slider {\r\n    background-color:rgb(64, 143, 64);\r\n  }\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px rgb(64, 143, 64);\r\n  }\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    transform: translateX(36px);\r\n  }\r\n/* Rounded sliders */\r\n.slider.round {\r\n    border-radius: 34px;\r\n  }\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/Admin/MasterForms/ChannelMaster/ChannelType/create-channel-type/create-channel-type.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/Admin/MasterForms/ChannelMaster/ChannelType/create-channel-type/create-channel-type.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n\n<br><br><br><br>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n          <div class=\"btn-group btn-breadcrumb \">\n              <a routerLink=\"/pingAlert/alertInbox\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-home\"></i></a>\n              <a class=\"btn btn-default\">Admin</a>\n              <a routerLink=\"/UserRoleDetails\" class=\"btn btn-default\">User Preferences</a>\n              <a class=\"btn btn-default active\">Add User Preference</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\"> \n    <br>\n    <form [formGroup]=\"ChannelType\" (ngSubmit)=\"onFormSubmit(ChannelType.value)\">\n      <div class=\"col-lg-9 col-lg-offset-1\">\n          <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <div class=\"row\">\n                  <div class=\"col-lg-3\">Channel Type</div>\n                  <div class=\"col-lg-2\"></div>\n                  <div class=\"col-lg-3\"></div>\n                  <div class=\"col-lg-4\"><button mat-stroked-button class=\"text-ping pull-right\" [routerLink]=\"['/UserRoleDetails']\" ><mat-icon class=\"text-ping\" matSuffix>format_list_numbered</mat-icon>View User</button></div>\n                </div>\n               \n                  \n              </div>\n              <div class=\"panel-body\">                \n              <div class=\"col-lg-6\">\n                  <div class=\"row\">\n                      <div class=\"col-lg-9\">\n                        <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                          <mat-label>Channel Type ID *</mat-label>\n                          <!-- <span matPrefix><mat-icon matPrefix>edit</mat-icon> &nbsp;</span> -->\n                          <input matInput placeholder=\"Enter Channel Type\" formControlName=\"ChannelTypeID\"\n                                 [errorStateMatcher]=\"matcher\">\n                          <mat-error>\n                            <span *ngIf=\"!ChannelType.get('ChannelTypeID').valid && ChannelType.get('ChannelTypeID').touched\">Please enter Cahnnel Type ID</span>\n                          </mat-error>\n                          <mat-icon class=\"text-ping\" matSuffix>supervised_user_circle</mat-icon>\n                        </mat-form-field>\n                \n                        </div>\n                  </div>\n                  \n                <div class=\"row\">\n                    <div class=\"col-lg-9\">\n                      <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                        <mat-label>Channel Name *</mat-label>\n                        <!-- <span matPrefix><mat-icon matPrefix>edit</mat-icon> &nbsp;</span> -->\n                        <input matInput placeholder=\"Enter Channel Type\" formControlName=\"ChannelTypeName\"\n                               [errorStateMatcher]=\"matcher\">\n                        <mat-error>\n                          <span *ngIf=\"!ChannelType.get('ChannelTypeName').valid && ChannelType.get('ChannelTypeName').touched\">Please enter Channel Type</span>\n                        </mat-error>\n                        <mat-icon class=\"text-ping\" matSuffix>supervised_user_circle</mat-icon>\n                      </mat-form-field>\n              \n                      </div>\n                </div>\n               \n                \n                 \n                  <!-- <div class=\"row\"> \n                    <div class=\"col-lg-4\">\n                      <button mat-stroked-button class=\"text-ping\" [routerLink]=\"['/UserRoleDetails']\" ><mat-icon class=\"text-ping\" matSuffix>format_list_numbered</mat-icon>View User</button>                    </div>\n                    <div class=\"col-lg-4\">\n                      <button mat-stroked-button class=\"text-ping\"><mat-icon class=\"text-ping\" matSuffix>group</mat-icon>Group Details</button>\n                    </div>\n                  \n                  </div> -->\n                  <div class=\"row\">\n                    <div class=\"col-lg-9\">\n                          \n                      <button type=\"submit\" [disabled]=\"!ChannelType.valid\" mat-raised-button class=\"text-ping\"><mat-icon>save</mat-icon></button>\n                  \n              </div>\n                    <!-- <div class=\"col-lg-offset-3\">\n                        <button mat-fab class=\"text-ping\">{{usercount}}</button>\n                    </div> -->\n                    \n                  </div>\n                  \n                    \n              </div></div>\n            </div>\n      </div>\n      \n        \n    </form>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/Admin/MasterForms/ChannelMaster/ChannelType/create-channel-type/create-channel-type.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/Admin/MasterForms/ChannelMaster/ChannelType/create-channel-type/create-channel-type.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CreateChannelTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateChannelTypeComponent", function() { return CreateChannelTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../admin.service */ "./src/app/Admin/admin.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateChannelTypeComponent = /** @class */ (function () {
    function CreateChannelTypeComponent(router, commanApi, api, formBuilder, snackbar) {
        this.router = router;
        this.commanApi = commanApi;
        this.api = api;
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.InsertBy = 'QlikAdmin';
        this.count = 0;
        this.LoginUserID = 'User101';
        this.userID = '';
        this.uID = '';
        this.LoggedUserName = '';
        this.LoggedUSerID = '';
        this.usercount = '';
    }
    CreateChannelTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commanApi.getLoggeddUser().subscribe(function (res) {
            _this.LoggedUserName = res.PingUserName;
            _this.LoggedUSerID = res.PingUserID;
            _this.ChannelType.get('InsertBy').setValue(res.PingUserName);
            _this.ChannelType.get('LoginUserID').setValue(res.PingUserID);
            // console.log("USr Name"+this.LoggedUserName+"  Id"+this.LoggedUSerID) 
            _this.api.getChannelTypes()
                .subscribe(function (res) {
                _this.count = res.length;
                _this.count = _this.count + 1;
                _this.userID = 'ChannelType-' + _this.count;
                _this.uID = _this.ChannelType.get('ChannelTypeID').setValue(_this.userID);
            }, function (err) {
                console.log(err);
                _this.usercount = '0';
            });
        }, function (err) {
            console.log("err");
            console.log(err);
            _this.router.navigate(['/login']);
        });
        this.ChannelType = this.formBuilder.group({
            // id: '',
            ChannelTypeID: [this.uID, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ChannelTypeName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            InsertBy: '',
            LoginUserID: '',
        });
    };
    CreateChannelTypeComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        console.log('Form Submited ', form);
        this.api.postChannelType(form)
            .subscribe(function (res) {
            //let id = res['_id'];
            _this.snackbar.open('Succesfully Submitted Channel Type Details', 'Close', {
                duration: 3000,
            });
            _this.router.navigate(['/admin/channelTypeDetails']);
            console.log("Channel Type Record Successfully  Saved....");
        }, function (err) {
            _this.snackbar.open('Something went wrong..!!', 'Close', {
                duration: 3000,
            });
            console.log(err);
        });
    };
    CreateChannelTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-channel-type',
            template: __webpack_require__(/*! ./create-channel-type.component.html */ "./src/app/Admin/MasterForms/ChannelMaster/ChannelType/create-channel-type/create-channel-type.component.html"),
            styles: [__webpack_require__(/*! ./create-channel-type.component.css */ "./src/app/Admin/MasterForms/ChannelMaster/ChannelType/create-channel-type/create-channel-type.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], CreateChannelTypeComponent);
    return CreateChannelTypeComponent;
}());



/***/ }),

/***/ "./src/app/Admin/MasterForms/ChannelName/channel-name-details/channel-name-details.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/Admin/MasterForms/ChannelName/channel-name-details/channel-name-details.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\ntable {\r\n    width: 100%;\r\n    transition: none !important;\r\n    box-shadow: none !important;\r\n    margin-top: -30px;\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 70%;\r\n  }\r\n#table-responsive{\r\n    margin-top: 5px;\r\n  }\r\n#row2{\r\n    margin-top: -2px;\r\n    padding-top: 8px;\r\n    padding-bottom: 10px;\r\n  }\r\n.table-responsive{\r\n    margin-top: -15px;\r\n    padding-top: 40px;\r\n  }\r\ntr.mat-header-row{\r\n    height: 37px;\r\n  }\r\n.table-bordered>thead>tr>th{\r\n    border: 1px solid rgb(231, 76, 60);\r\n  }\r\n/* Switch Button */\r\nth{\r\n    padding-top: -100px;\r\n  }\r\ntd{\r\n    color: rgb(127, 127, 127)\r\n  }\r\n.mat-header-cell {\r\n    color: rgb(102,102,102);\r\n  }\r\nth{\r\n    padding-top: -100px;\r\n    font-size: 14px;\r\n    background-color: rgb(238, 238, 238);\r\n  }\r\n#btn{\r\n    background-color: rgb(249, 25, 66);\r\n    color: rgb(255, 255, 255)\r\n  }\r\n#th-align{\r\n    text-align: center;\r\n  }\r\n            "

/***/ }),

/***/ "./src/app/Admin/MasterForms/ChannelName/channel-name-details/channel-name-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/Admin/MasterForms/ChannelName/channel-name-details/channel-name-details.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n            <div class=\"btn-group btn-breadcrumb \">\n                <a routerLink=\"/pingAlert/alertInbox\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-home\"></i></a>\n                <a class=\"btn btn-default\">Admin</a>\n                <a routerLink=\"/admin/channelNameDetails\" class=\"btn btn-default\">Channel Details</a>\n\n        </div>\n      </div>\n      <div class=\"col-md-4 pull-right\">\n        <div class=\"input-group\" style=\"float:right\">\n          <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"txtSearch\"/> -->\n          <input class=\"form-control\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\" >\n              <div class=\"input-group-btn\">\n                  <button class=\"btn btn-default\" type=\"submit\">\n                      <span class=\"glyphicon glyphicon-search\"></span>\n                  </button>\n              </div>\n          </div>\n       </div>\n    </div>\n</div>\n\n<br>\n\n\n    <div class=\"container\" id=\"table-responsive\">\n          <div class=\"table-responsive\" >\n              <table mat-table [dataSource]=\"dataSource\" matSort class=\" mat-elevation-z8 table-bordered table-striped\">\n\n                <!-- Channel name id Column -->\n                <ng-container matColumnDef=\"ChannelID\">\n                <th  mat-header-cell id=\"th-align\" class=\"text-center\" *matHeaderCellDef style=\"margin-left: 100px;\">Channel ID</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.ChannelID}} </td>\n                </ng-container>\n\n                <!-- channel name  Column -->\n                <ng-container matColumnDef=\"ChannelName\">\n                  <th mat-header-cell id=\"th-align\" class=\"text-center\"  *matHeaderCellDef> Channel Name </th>\n                  <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.ChannelName}} </td>\n                  </ng-container>\n\n                <!-- Insert By Column -->\n                <ng-container matColumnDef=\"InsertBy\">\n                <th mat-header-cell id=\"th-align\" class=\"text-center\"  *matHeaderCellDef> Insert By </th>\n                <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.InsertBy}} </td>\n                </ng-container>\n\n                <!-- Is active Column -->\n                <ng-container matColumnDef=\"IsActive\">\n                  <th mat-header-cell id=\"th-align\" class=\"text-center\"  *matHeaderCellDef>&nbsp;&nbsp;Is Active </th>\n                  <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.IsActive}} </td>\n                  </ng-container> \n                  \n                   \n                <!-- Colum Edit/ Delete -->\n                <ng-container matColumnDef=\"edit\">\n                    <th mat-header-cell id=\"th-align\" class=\"text-center\" *matHeaderCellDef>Edit / Delete  </th>\n\n                   <td mat-cell *matCellDef=\"let element\">\n                     <div class=\"row col-md-offset-3\">\n                       <div class=\"col-md-2\">\n                          <!-- <a routerLink=\"/edit_alert\" style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a> -->\n                          <!-- <a type='submit' [routerLink]=\"['/edit_new',element.id]\" (click)=\"onEdit(element._id)\" style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a> -->\n                          <!-- <a type='submit' [routerLink]=\"['/UserRoleEdit/',element._id]\"  style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a> -->\n\n                        </div>\n                       &nbsp;\n                       <div class=\"col-md-2\">\n                            <a style=\"cursor: pointer;\" (click)=\"deleteUser(element._id)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\n                           <!-- <a mat-raised-button color=\"warn\" (click)=\"deleteAlert(element._id)\"><mat-icon>delete</mat-icon></a> -->\n                        </div>\n                     </div>\n                   </td>\n                 </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n          </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n              <button mat-raised-button id=\"btn\" [routerLink]=\"['/admin/createChannelName']\">Create Channel</button>\n          </div>\n          <div class=\"col-md-4\"></div>\n          <div class=\"col-md-5\">\n            <mat-paginator  [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20, 30, 50, 100]\" showFirstLastButtons></mat-paginator>\n        </div>\n        </div>\n      </div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/Admin/MasterForms/ChannelName/channel-name-details/channel-name-details.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/Admin/MasterForms/ChannelName/channel-name-details/channel-name-details.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ChannelNameDetailsComponent, AlertDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelNameDetailsComponent", function() { return ChannelNameDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDataSource", function() { return AlertDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../admin.service */ "./src/app/Admin/admin.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../app.service */ "./src/app/app.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ChannelNameDetailsComponent = /** @class */ (function () {
    function ChannelNameDetailsComponent(api, commanApi, router, location, route, snackbar) {
        this.api = api;
        this.commanApi = commanApi;
        this.router = router;
        this.location = location;
        this.route = route;
        this.snackbar = snackbar;
        this.displayedColumns = ['ChannelID', 'ChannelName', 'InsertBy', 'edit'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ChannelNameDetailsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ChannelNameDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commanApi.getLoggeddUser()
            .subscribe(function (res) {
            _this.api.getChannelNames()
                .subscribe(function (res) {
                // if(res.code == 200){
                //console.log("Got oit"+res);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }, function (err) {
                console.log(err);
                _this.router.navigate(['/login']);
            });
        }, function (err) {
            console.log("err");
            console.log(err);
            _this.router.navigate(['/login']);
        });
        this.frmChannelName = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            ChannelID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            ChannelName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            //IsActive:new FormControl(),
            InsertBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](localStorage.getItem('User'))
        });
    };
    // Edit User
    ChannelNameDetailsComponent.prototype.onEdit = function (id) {
        var _this = this;
        //console.log('In Edit Channel Name');
        //console.log(id);
        this.api.getCahnnelName(id)
            .subscribe(function (res) {
            //console.log(res);
            _this.ChannelID = id;
        });
    };
    // delete User
    ChannelNameDetailsComponent.prototype.deleteUser = function (id) {
        var _this = this;
        // console.log('In Delete Channel Name ');
        //console.log(id);
        this.api.deleteCahnnelName(id)
            .subscribe(function (res) {
            //console.log('ping user new Data');
            _this.api.getChannelNames()
                .subscribe(function (res) {
                _this.snackbar.open('Succesfully deleted Channel Name', 'Close', {
                    duration: 3000,
                });
                //console.log(res);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }, function (err) {
                console.log(err);
            });
            // this.api.getPingUsersNew()
            // .subscribe( res => {
            //   console.log('ping user new Data');
            //   console.log(res);
            //   this.snackbar.open('Succesfully deleted user', 'Close', {
            //     duration: 3000,
            //   });
            //   this.dataSource = new MatTableDataSource(res);
            //   this.dataSource.sort = this.sort;
            //   this.dataSource.paginator = this.paginator;
            // }, err => {
            //   console.log(err);
            // });
            // this.router.navigateByUrl("/alert_Inbox");
            // this.router.navigate(['/alert_examples']);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ChannelNameDetailsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ChannelNameDetailsComponent.prototype, "sort", void 0);
    ChannelNameDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel-name-details',
            template: __webpack_require__(/*! ./channel-name-details.component.html */ "./src/app/Admin/MasterForms/ChannelName/channel-name-details/channel-name-details.component.html"),
            styles: [__webpack_require__(/*! ./channel-name-details.component.css */ "./src/app/Admin/MasterForms/ChannelName/channel-name-details/channel-name-details.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"], _app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], ChannelNameDetailsComponent);
    return ChannelNameDetailsComponent;
}());

var AlertDataSource = /** @class */ (function (_super) {
    __extends(AlertDataSource, _super);
    function AlertDataSource(api, commanApi) {
        var _this = _super.call(this) || this;
        _this.api = api;
        _this.commanApi = commanApi;
        return _this;
    }
    AlertDataSource.prototype.connect = function () {
        return this.api.getChannelNames();
    };
    AlertDataSource.prototype.disconnect = function () {
    };
    return AlertDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/Admin/MasterForms/ChannelName/create-channel-name/create-channel-name.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/Admin/MasterForms/ChannelName/create-channel-name/create-channel-name.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#edit{\r\n    background-color:rgb(231, 76, 60);\r\n    padding-top: 14px;\r\n  }\r\n  \r\n  .btn-primary{\r\n    margin-left: 40%;\r\n  }\r\n  \r\n  #container1{\r\n    border: 1px solid rgb(236, 235, 235);\r\n    margin-left:13%\r\n  }\r\n  \r\n  /* #margin{\r\n    margin-left: 10% ;\r\n  } */\r\n  \r\n  .btn-primary {\r\n  background-color:rgb(231, 76, 60);\r\n  border: rgb(231, 76, 60);\r\n  }\r\n  \r\n  #btn{\r\n    background-color: rgb(249, 25, 66);\r\n    color: rgb(255, 255, 255)\r\n  }\r\n  \r\n  .example-form {\r\n    min-width: 80px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width:nth-last-child() {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .button-row {\r\n    margin: 10px 0;\r\n  }\r\n  \r\n  .text-ping{\r\n    color: red\r\n  }\r\n  \r\n  .text-white{\r\n    color: white;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/Admin/MasterForms/ChannelName/create-channel-name/create-channel-name.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/Admin/MasterForms/ChannelName/create-channel-name/create-channel-name.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n          <div class=\"btn-group btn-breadcrumb \">\n              <a routerLink=\"/pingAlert/alertInbox\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-home\"></i></a>\n              <a class=\"btn btn-default\">Admin</a>\n              <a routerLink=\"/admin/channelNameDetails\" class=\"btn btn-default\">Channel Details</a>\n              <a class=\"btn btn-default active\">Add Channel Name</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\"> \n    <br>\n    <form [formGroup]=\"frmChannelName\" (ngSubmit)=\"onFormSubmit(frmChannelName.value)\">\n      <div class=\"col-lg-9 col-lg-offset-1\">\n          <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <div class=\"row\">\n                  <div class=\"col-lg-3\">Channel Name</div>\n                  <div class=\"col-lg-2\"></div>\n                  <div class=\"col-lg-3\"></div>\n                  <div class=\"col-lg-4\"><button mat-stroked-button class=\"text-ping pull-right\" [routerLink]=\"['/admin/channelNameDetails']\" ><mat-icon class=\"text-ping\" matSuffix>format_list_numbered</mat-icon>View Channels</button></div>\n                </div>\n               \n                  \n              </div>\n              <div class=\"panel-body\">                \n              <div class=\"col-lg-6\">\n\n                  <div class=\"row\">\n                      <div class=\"col-lg-9\">\n                        <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                          <mat-label>Channel ID *</mat-label>\n                          <!-- <span matPrefix><mat-icon matPrefix>edit</mat-icon> &nbsp;</span> -->\n                          <input matInput placeholder=\"Enter Channel Name\" formControlName=\"ChannelID\"\n                                 [errorStateMatcher]=\"matcher\">\n                          <mat-error>\n                            <span *ngIf=\"!frmChannelName.get('ChannelID').valid && frmChannelName.get('ChannelID').touched\">Please enter User Name</span>\n                          </mat-error>\n                          <mat-icon class=\"text-ping\" matSuffix>supervised_user_circle</mat-icon>\n                        </mat-form-field>\n                \n                        </div>\n                  </div>\n                  \n                <div class=\"row\">\n                    <div class=\"col-lg-9\">\n                      <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                        <mat-label>Channel Name *</mat-label>\n                        <!-- <span matPrefix><mat-icon matPrefix>edit</mat-icon> &nbsp;</span> -->\n                        <input matInput placeholder=\"Enter Channel Name\" formControlName=\"ChannelName\"\n                               [errorStateMatcher]=\"matcher\">\n                        <mat-error>\n                          <span *ngIf=\"!frmChannelName.get('ChannelName').valid && frmChannelName.get('ChannelName').touched\">Please enter User Name</span>\n                        </mat-error>\n                        <mat-icon class=\"text-ping\" matSuffix>supervised_user_circle</mat-icon>\n                      </mat-form-field>\n              \n                      </div>\n                </div>\n               \n                \n                 \n                  <!-- <div class=\"row\"> \n                    <div class=\"col-lg-4\">\n                      <button mat-stroked-button class=\"text-ping\" [routerLink]=\"['/UserRoleDetails']\" ><mat-icon class=\"text-ping\" matSuffix>format_list_numbered</mat-icon>View User</button>                    </div>\n                    <div class=\"col-lg-4\">\n                      <button mat-stroked-button class=\"text-ping\"><mat-icon class=\"text-ping\" matSuffix>group</mat-icon>Group Details</button>\n                    </div>\n                  \n                  </div> -->\n                  <div class=\"row\">\n                    <div class=\"col-lg-9\">\n                          \n                      <button type=\"submit\" mat-raised-button id=\"btn\" [disabled]=\"!frmChannelName.valid\" mat-raised-button class=\"text-ping\">Save</button>\n                  \n              </div>\n                    <!-- <div class=\"col-lg-offset-3\">\n                        <button mat-fab class=\"text-ping\">{{usercount}}</button>\n                    </div> -->\n                    \n                  </div>\n                  \n                    \n              </div></div>\n            </div>\n      </div>\n      \n        \n    </form>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/Admin/MasterForms/ChannelName/create-channel-name/create-channel-name.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/Admin/MasterForms/ChannelName/create-channel-name/create-channel-name.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CreateChannelNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateChannelNameComponent", function() { return CreateChannelNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../admin.service */ "./src/app/Admin/admin.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateChannelNameComponent = /** @class */ (function () {
    function CreateChannelNameComponent(router, commanAPI, api, formBuilder, snackbar) {
        this.router = router;
        this.commanAPI = commanAPI;
        this.api = api;
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.count = 0;
        this.userID = '';
        this.uID = '';
        this.usercount = '';
    }
    CreateChannelNameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commanAPI.getLoggeddUser()
            .subscribe(function (res) {
            _this.frmChannelName.get('InsertBy').setValue(res.PingUserName);
            _this.frmChannelName.get('LoginUserID').setValue(res.PingUserID);
            _this.api.getChannelNames()
                .subscribe(function (res) {
                console.log(res);
                _this.count = res.length;
                _this.count = _this.count + 1;
                _this.userID = 'Channel-' + _this.count;
                _this.uID = _this.frmChannelName.get('ChannelID').setValue(_this.userID);
            }, function (err) {
                console.log(err);
                _this.usercount = '0';
            });
        }, function (err) {
            console.log("err");
            console.log(err);
            _this.router.navigate(['/login']);
        });
        this.frmChannelName = this.formBuilder.group({
            // id: '',
            ChannelID: [this.uID, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ChannelName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            InsertBy: [''],
            LoginUserID: [''],
        });
    };
    CreateChannelNameComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postChannelName(form)
            .subscribe(function (res) {
            _this.snackbar.open('Succesfully submitted channel details', 'Close', {
                duration: 3000,
            });
            _this.router.navigate(['/admin/channelNameDetails']);
            console.log("Successfully Record Saved....");
        }, function (err) {
            _this.snackbar.open('Something went wrong..!!', 'Close', {
                duration: 3000,
            });
            console.log(err);
        });
    };
    CreateChannelNameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-channel-name',
            template: __webpack_require__(/*! ./create-channel-name.component.html */ "./src/app/Admin/MasterForms/ChannelName/create-channel-name/create-channel-name.component.html"),
            styles: [__webpack_require__(/*! ./create-channel-name.component.css */ "./src/app/Admin/MasterForms/ChannelName/create-channel-name/create-channel-name.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], CreateChannelNameComponent);
    return CreateChannelNameComponent;
}());



/***/ }),

/***/ "./src/app/Admin/SuperAdmin/alert-list/alert-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Admin/SuperAdmin/alert-list/alert-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\ntable {\r\n    width: 100%;\r\n    transition: none !important;\r\n    box-shadow: none !important;\r\n    margin-top: -30px;\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 70%;\r\n  }\r\n#row2{\r\n    margin-top: -2px;\r\n    padding-top: 8px;\r\n    padding-bottom: 10px;\r\n    /* width: 99%; */\r\n  }\r\n/* mat-slide-toggle {\r\n    margin-left: 10px;\r\n  } */\r\n.table-responsive{\r\n    margin-top: -15px;\r\n    padding-top: 40px;\r\n  }\r\ntr.mat-header-row{\r\n    height: 37px;\r\n  }\r\n.table-bordered>thead>tr>th{\r\n    border: 1px solid rgb(231, 76, 60);\r\n  }\r\ntd{\r\n    color: rgb(127, 127, 127)\r\n  }\r\n.mat-header-cell {\r\n    color: rgb(102,102,102);\r\n  }\r\nth{\r\n    padding-top: -100px;\r\n    font-size: 14px;\r\n    background-color: rgb(238, 238, 238);\r\n  }\r\n#th_allign{\r\n    text-align: center;\r\n  }\r\n#button{\r\n    background-color: rgb(249, 25, 66);\r\n    color: rgb(255, 255, 255);\r\n    text-decoration: none;\r\n  }\r\n#height{\r\n    height: 10px;\r\n  }\r\n* {\r\n    font-family: 'Nunito', 'Glyphicons Halflings';\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/Admin/SuperAdmin/alert-list/alert-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Admin/SuperAdmin/alert-list/alert-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\" id=\"height\">\n          <flash-messages></flash-messages>\n      </div>\n    </div>\n</div>\n<div>\n      \n  <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4\"></div>\n        <div class=\"col-md-4\"></div>\n          <div class=\"col-md-4 \">\n            <div class=\"input-group\">\n              <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"txtSearch\"/> -->\n              <input class=\"form-control\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\" >\n                  <div class=\"input-group-btn\">\n                      <button class=\"btn btn-default\" type=\"submit\">\n                          <span class=\"glyphicon glyphicon-search\"></span>\n                      </button>\n                  </div>\n              </div>\n           \n    </div>\n      </div>\n    </div>\n<!-- <div class=\"row\">\n  <div class=\"col-xs-3\"></div>\n  <div class=\"col-xs-4\">\n\n  </div>\n</div> -->\n<br>\n<div class=\"container\" id=\"table-responsive\">\n  <div class=\"table-responsive\" >\n      <table mat-table [dataSource]=\"dataSource\" class=\" mat-elevation-z8 table-bordered table-striped\">\n\n          <!-- frmCntAlertID Column -->\n          <ng-container matColumnDef=\"AlertID\">\n          <th  mat-header-cell *matHeaderCellDef  >Alert Id</th>\n          <td  mat-cell *matCellDef=\"let element\">&nbsp; {{element.frmCntAlertID}} </td>\n          </ng-container>\n\n          <!-- frmCntAlertName Column -->\n          <ng-container matColumnDef=\"AlertName\" >\n            <th mat-header-cell  *matHeaderCellDef id=\"th_allign\" > Alert Name </th>\n           <td  mat-cell *matCellDef=\"let element\">&nbsp; {{element.frmCntAlertName}} </td>\n          </ng-container>\n\n         \n          <!-- frmCntApplication Column -->\n          <ng-container matColumnDef=\"ApplicationName\" >\n            <th mat-header-cell  *matHeaderCellDef  id=\"th_allign\" > Application Name </th>\n            <td  mat-cell *matCellDef=\"let element\"> &nbsp; {{element.frmCntApplication.AppName }} </td>\n          </ng-container>\n<!-- frmCntMeasures -->\n          <ng-container matColumnDef=\"Measures\" >\n            <th mat-header-cell  *matHeaderCellDef id=\"th_allign\"  >Measures  </th>\n            <td  mat-cell *matCellDef=\"let element\">&nbsp; {{element.frmCntMeasures.pingMeasuresqLabel }} </td>\n          </ng-container>\n\n           <!-- alertsetTime Column -->\n           <ng-container matColumnDef=\"Setdate\" >\n              <th mat-header-cell  *matHeaderCellDef id=\"th_allign\" >Set Date </th>\n              <td class=\"text-center\" mat-cell *matCellDef=\"let element\">&nbsp;  {{element.alertsetTime | date:\"yyyy-MM-dd\"}} </td>\n            </ng-container>\n  \n  \n               <!-- alertsetTime Column -->\n           <ng-container matColumnDef=\"SetTime\">\n              <th mat-header-cell  *matHeaderCellDef id=\"th_allign\"  > Set Time </th>\n               <td class=\"text-center\" mat-cell *matCellDef=\"let element\"> &nbsp;{{element.alertsetTime | date:\"shortTime\"}} </td>\n            </ng-container>    \n  \n\n\n<!-- Trigger -->\n\n          <ng-container matColumnDef=\"trigger\">\n            <th mat-header-cell *matHeaderCellDef id=\"th_allign\"  >Trigger  </th>\n           <!-- <td mat-cell *matCellDef=\"let element\"> {{element.trigger}} </td> -->\n           <td class=\"text-center\" mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                <mat-slide-toggle \n                      class=\"example-margin\"\n                      (change)=\"onTriggerChange($event,element._id)\"\n                      [color]=\"color\"\n                      [checked]=\"checked\"\n                      [disabled]=\"disabled\"\n                      [(ngModel)]=\"element.trigger\"> \n                </mat-slide-toggle>\n            </td>\n          </ng-container>\n\n          <!-- Colum Edit/ Delete -->\n          <ng-container matColumnDef=\"edit\">\n              <th mat-header-cell *matHeaderCellDef id=\"th_allign\" >Edit / Delete  </th>\n             <td mat-cell *matCellDef=\"let element\">\n               <div class=\"row col-md-offset-3\"  >\n                  &nbsp; &nbsp;\n                 <div class=\"col-md-2\">\n                     <a style=\"cursor: pointer;\" [routerLink]=\"['/pingAlert/editAlert/',element._id]\" ><i matTooltip=\"Edit\" class=\"glyphicon glyphicon-pencil\" ></i></a>\n                 </div>\n                 &nbsp;\n                 <div class=\"col-md-2\">\n                      <a  matTooltip=\"Delete\" style=\"cursor: pointer;\" (click)=\"deleteAlert(element._id)\"> <i class=\"glyphicon glyphicon-trash\"></i></a>\n                     <!-- <a mat-raised-button color=\"warn\" (click)=\"deleteAlert(element._id)\"><mat-icon>delete</mat-icon></a> -->\n                  </div>\n               </div>\n             </td>\n           </ng-container>\n\n          <!-- <ng-container matColumnDef=\"Edit/Delete\">\n              <th mat-header-cell *matHeaderCellDef>&nbsp;&nbsp;<strong>Edit / Delete</strong>  </th>\n\n             <td>\n               <div class=\"row\">\n                 <div class=\"col-md-2\">\n                  <button class=\"btn btn-primary\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\n                 </div>\n                 <div class=\"col-md-2\">\n                    <button class=\"btn btn-primary\"> <i class=\"glyphicon glyphicon-trash\"></i></button>\n                  </div>\n               </div>\n             </td>\n\n          </ng-container> -->\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n  </div>\n\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n        <a id=\"button\" mat-raised-button [routerLink]=\"['/pingAlert/createAlert']\">Create Alert</a>\n    </div>\n    <div class=\"col-md-9\">\n        <mat-paginator [pageSizeOptions]=\"[10,20,50,100,150,200,250]\" showFirstLastButtons></mat-paginator>\n    </div>\n  </div>\n</div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/Admin/SuperAdmin/alert-list/alert-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Admin/SuperAdmin/alert-list/alert-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: AlertListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertListComponent", function() { return AlertListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_PingAlert_ping_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/PingAlert/ping-alert.service */ "./src/app/PingAlert/ping-alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AlertListComponent = /** @class */ (function () {
    function AlertListComponent(api, commanApi, router, location, _service, _flashMessagesService) {
        this.api = api;
        this.commanApi = commanApi;
        this.router = router;
        this.location = location;
        this._service = _service;
        this._flashMessagesService = _flashMessagesService;
        this.color = 'primary';
        this.checked = false;
        this.disabled = false;
        this.device = false;
        this.displayedColumns = ['AlertID', 'AlertName', 'ApplicationName', 'Measures', 'Setdate', 'SetTime', 'trigger', 'edit'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    // @ViewChild(MatSort) sort: MatSort;
    AlertListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AlertListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("In Alert Inbox Init");
        // AuthService.loggedUserTableID =localStorage.getItem('loggedUserTableID');
        // console.log("AuthService.loggedUserTableID>>>>", AuthService.loggedUserTableID);
        this.commanApi.getLoggeddUser().subscribe(function (res) {
            console.log(res.PingUserID);
            _this.api.getAlerts()
                .subscribe(function (res) {
                console.log(res);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res);
                _this.dataSource.paginator = _this.paginator;
                // this.dataSource.sort =this.sort;
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log("err");
            console.log(err);
            _this.router.navigate(['/login']);
        });
    };
    // delete Alert's
    AlertListComponent.prototype.deleteAlert = function (id) {
        var _this = this;
        console.log("In Delete Alert");
        console.log(id);
        this.api.deleteAlert(id)
            .subscribe(function (res) {
            _this.ngOnInit();
            _this.api.getAlerts()
                .subscribe(function (res) {
                _this.ngOnInit();
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res);
                // this.dataSource.sort = this.sort;
                _this.dataSource.paginator = _this.paginator;
            }, function (err) {
                console.log(err);
            });
            // this.router.navigateByUrl("/alert_Inbox");
            // this.router.navigate(['/alert_examples']);
        }, function (err) {
            console.log(err);
        });
    };
    AlertListComponent.prototype.onTriggerChange = function (event, id) {
        var _this = this;
        var triggerStatus = {
            trigger: event.checked,
            id: id
        };
        this.api.updatetriggerAlert(triggerStatus).subscribe(function (res) {
            console.log(res.ok);
            if (res.ok == 1) {
                if (triggerStatus.trigger === true) {
                    _this._flashMessagesService.show(' successfully! Trigger ON', { cssClass: 'alert-success', timeout: 500 });
                }
                else {
                    _this._flashMessagesService.show('successfully! Trigger OFF', { cssClass: 'alert-danger', timeout: 500 });
                }
            }
        });
    };
    AlertListComponent.prototype.StatusAlert = function (id) {
        var _this = this;
        console.log("In Delete Alert");
        console.log(id);
        this.api.deleteAlert(id)
            .subscribe(function (res) {
            _this.api.getAlerts()
                .subscribe(function (res) {
                console.log(res);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res);
                // this.dataSource.sort = this.sort;
                _this.dataSource.paginator = _this.paginator;
            }, function (err) {
                console.log(err);
            });
            // this.router.navigateByUrl("/alert_Inbox");
            // this.router.navigate(['/alert_examples']);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AlertListComponent.prototype, "paginator", void 0);
    AlertListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert-list',
            template: __webpack_require__(/*! ./alert-list.component.html */ "./src/app/Admin/SuperAdmin/alert-list/alert-list.component.html"),
            styles: [__webpack_require__(/*! ./alert-list.component.css */ "./src/app/Admin/SuperAdmin/alert-list/alert-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_PingAlert_ping_alert_service__WEBPACK_IMPORTED_MODULE_7__["PingAlertService"], src_app_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], AlertListComponent);
    return AlertListComponent;
}());



/***/ }),

/***/ "./src/app/Admin/SuperAdmin/show-all-user-list/show-all-user-list.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/Admin/SuperAdmin/show-all-user-list/show-all-user-list.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\n\r\ninput[type=\"file\"] {\r\n    display: none;\r\n  }\r\n\r\n.custom-file-upload {\r\n    border: 1px solid #ccc;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n  }\r\n\r\ntable {\r\n      width: 100%;\r\n      transition: none !important;\r\n      box-shadow: none !important;\r\n      margin-top: -30px;\r\n    }\r\n\r\n.mat-form-field {\r\n      font-size: 14px;\r\n      width: 70%;\r\n    }\r\n\r\n#table-responsive{\r\n      margin-top: 5px;\r\n    }\r\n\r\n#row2{\r\n      margin-top: -2px;\r\n      padding-top: 8px;\r\n      padding-bottom: 10px;\r\n    }\r\n\r\n.table-responsive{\r\n      margin-top: -15px;\r\n      padding-top: 40px;\r\n    }\r\n\r\ntr.mat-header-row{\r\n      height: 37px;\r\n    }\r\n\r\n.table-bordered>thead>tr>th{\r\n      border: 1px solid rgb(231, 76, 60);\r\n    }\r\n\r\n/* Switch Button */\r\n\r\nth{\r\n      padding-top: -100px;\r\n    }\r\n\r\n#th_allign{\r\n      text-align: center;\r\n    }\r\n\r\ntd{\r\n      color: rgb(127, 127, 127)\r\n    }\r\n\r\n.mat-header-cell {\r\n      color: rgb(102,102,102);\r\n    }\r\n\r\nth{\r\n      font-size: 14px;\r\n      background-color: rgb(238, 238, 238);\r\n      /* background-color: rgb(249, 55, 66); */\r\n    \r\n    }\r\n\r\n#btn-danger{\r\n      background-color: rgb(249, 25, 66);\r\n      color: rgb(255, 255, 255)\r\n    }\r\n\r\n* {\r\n    font-family: 'Nunito', 'Glyphicons Halflings';\r\n  }"

/***/ }),

/***/ "./src/app/Admin/SuperAdmin/show-all-user-list/show-all-user-list.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/Admin/SuperAdmin/show-all-user-list/show-all-user-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n            <div class=\"btn-group btn-breadcrumb \">\n                <a routerLink=\"/admin/sAdminHome\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-home\"></i></a>\n                <a class=\"btn btn-default\">SuperAdmin</a>\n                <a class=\"btn btn-default\">All Users</a>\n            </div>\n      </div>\n      <div class=\"col-md-2 text-center\"><h4>All Users</h4></div>\n      <div class=\"col-md-4 pull-right\">\n        <div class=\"input-group\" style=\"float:right\">\n          <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"txtSearch\"/> -->\n          <input class=\"form-control\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\" >\n              <div class=\"input-group-btn\">\n                  <button class=\"btn btn-default\" type=\"submit\">\n                      <span class=\"glyphicon glyphicon-search\"></span>\n                  </button>\n              </div>\n          </div>\n       </div>\n\n\n    </div>\n</div>\n\n<!--\n<div class=\"row\">\n  <div class=\"col-xs-3\"></div>\n  <div class=\"col-xs-4\">\n\n  </div>\n</div> -->\n<br>\n\n\n    <div class=\"container\" id=\"table-responsive\">\n          <div class=\"table-responsive\" >\n              <table mat-table [dataSource]=\"dataSource\" matSort class=\" mat-elevation-z8 table-bordered table-striped\">\n\n                <!-- USerID Column -->\n                <ng-container matColumnDef=\"PingUserID\">\n                <th  mat-header-cell *matHeaderCellDef class=\"text-center\" id=\"th_allign\"> User ID</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.PingUserID}} </td>\n                </ng-container>\n\n                <!-- USerNAme Column -->\n                <ng-container matColumnDef=\"PingUserName\">\n                <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\"> User Name </th>\n                <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.PingUserName}} </td>\n                </ng-container>\n\n              \n                  \n                    <!-- Access Column -->\n                <ng-container matColumnDef=\"PingUserAccess\">\n                  <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\">User Access </th>\n                  <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.PingUserAccess}} </td>\n                  </ng-container> \n\n                    <!-- Role Column -->\n                <ng-container matColumnDef=\"PingRole\">\n                  <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\">Role </th>\n                  <td mat-cell  *matCellDef=\"let element\" >  &nbsp; {{element.PingRole}} </td>\n                  </ng-container> \n\n                    <!-- EmailId Column -->\n                <ng-container matColumnDef=\"EmailID\">\n                  <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\">Email Id </th>\n                  <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.EmailID}} </td>\n                  </ng-container> \n\n                    <!-- Insert bY Column -->\n                <ng-container matColumnDef=\"InsertBy\">\n                    <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\">Created By </th>\n                    <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.InsertBy}} </td>\n                    </ng-container> \n\n\n                <!-- alertsetTime Column -->\n                <!-- <ng-container matColumnDef=\"Setdate\">\n                <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp; Set date </th>\n                <td mat-cell  *matCellDef=\"let element\">  &nbsp;{{element.alertsetTime | date}} </td>\n                </ng-container> -->\n\n\n                   <!-- alertsetTime Column -->\n               <!-- <ng-container matColumnDef=\"SetTime\">\n                  <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp; Set Time </th>\n                  <td mat-cell name=\"SetTime\" *matCellDef=\"let element\">  &nbsp;{{element.alertsetTime | date:\"HH:MM\"}} </td>\n                </ng-container> -->\n\n      <!-- Trigger -->\n\n                <!-- <ng-container matColumnDef=\"trigger\">\n                  <th mat-header-cell *matHeaderCellDef>&nbsp;&nbsp;Trigger  </th> -->\n                 <!-- <td mat-cell *matCellDef=\"let element\"> {{element.trigger}} </td> -->\n                 <!-- <td mat-cell *matCellDef=\"let element\">\n                      <mat-slide-toggle\n                            class=\"example-margin\"\n                            name=\"trigger\"\n                            [color]=\"color\"\n                            [checked]=\"checked\"\n                            [disabled]=\"disabled\"\n                            [(ngModel)]=\"element.trigger\"> {{element.trigger}}\n                      </mat-slide-toggle>\n                   </td>\n                </ng-container> -->\n\n                <!-- Colum Edit/ Delete -->\n                <ng-container matColumnDef=\"edit\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\" id=\"th_allign\">Edit / Delete  </th>\n\n                   <td mat-cell *matCellDef=\"let element\">\n                     <div class=\"row col-lg-offset-3\">\n                       <div class=\"col-md-2\">\n                          <!-- <a routerLink=\"/edit_alert\" style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a> -->\n                          <!-- <a type='submit' [routerLink]=\"['/edit_new',element.id]\" (click)=\"onEdit(element._id)\" style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a> -->\n                          <a class=\"text-center\" type='submit' [routerLink]=\"['/admin/editUserDetails/',element._id]\"  style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a>\n\n                        </div>\n                       &nbsp;\n                       <div class=\"col-md-2\">\n                            <a class=\"text-center\" style=\"cursor: pointer;\" (click)=\"deleteUser(element._id)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\n                           <!-- <a mat-raised-button color=\"warn\" (click)=\"deleteAlert(element._id)\"><mat-icon>delete</mat-icon></a> -->\n                        </div>\n                     </div>\n                   </td>\n                 </ng-container>\n                <!-- <ng-container matColumnDef=\"Edit/Delete\">\n                    <th mat-header-cell *matHeaderCellDef>&nbsp;&nbsp;<strong>Edit / Delete</strong>  </th>\n                   <td>\n                     <div class=\"row\">\n                       <div class=\"col-md-2\">\n                        <button class=\"btn btn-primary\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\n                       </div>\n                       <div class=\"col-md-2\">\n                          <button class=\"btn btn-primary\"> <i class=\"glyphicon glyphicon-trash\"></i></button>\n                        </div>\n                     </div>\n                   </td>\n\n                </ng-container> -->\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n          </div>\n\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-1\" >\n              <button \n              mat-raised-button \n              id=\"btn-danger\" \n              [routerLink]=\"['/admin/createUser']\">Create User</button>\n          </div>        \n          \n        </div>\n        <!-- <div class=\"row\">\n          <div class=\"col-md-1\"></div>\n            <div class=\"col-md-2\" style=\"margin-left: 20px;\">\n                <a (click)=\"downloadFile()\" style=\"cursor:pointer; \">Download Template</a>    \n            </div>\n        </div> -->\n        <div class=\"col-md-12\">\n            <mat-paginator  [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20, 30, 50, 100]\"\n             showFirstLastButtons></mat-paginator>\n        </div>\n      </div>\n  \n\n\n\n"

/***/ }),

/***/ "./src/app/Admin/SuperAdmin/show-all-user-list/show-all-user-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/Admin/SuperAdmin/show-all-user-list/show-all-user-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ShowAllUserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllUserListComponent", function() { return ShowAllUserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin.service */ "./src/app/Admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { identifier } from '../../../../node_modules/@types/babel-types';


// import { AuthService } from '../../auth/auth.service';
var ShowAllUserListComponent = /** @class */ (function () {
    function ShowAllUserListComponent(api, commanAPI, router, location, route, snackbar) {
        this.api = api;
        this.commanAPI = commanAPI;
        this.router = router;
        this.location = location;
        this.route = route;
        this.snackbar = snackbar;
        this.displayedColumns = ['PingUserID', 'PingUserName', 'PingUserAccess', 'PingRole', 'EmailID', 'InsertBy', 'edit'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ShowAllUserListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ShowAllUserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commanAPI.getLoggeddUser().subscribe(function (res) {
            _this.api.getPingUserStatusWise(true)
                .subscribe(function (res) {
                // if(res.code == 200){
                console.log("User Details :", res.body);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.body);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
                // }
            }, function (err) {
                console.log(err);
            });
        }, function (res) {
            _this.router.navigate(['/login']);
        });
        this.editPingUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            PingUserID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingUserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingUserDirectory: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingUserAccess: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingMemberID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingGroupID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            InsertBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            EmailID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
        });
    };
    // Edit User
    ShowAllUserListComponent.prototype.onEdit = function (id) {
        var _this = this;
        console.log('In Edit User');
        console.log(id);
        this.api.getPingUserIDDetails(id)
            .subscribe(function (res) {
            console.log(res);
            _this.PingUserID = id;
        });
    };
    // delete User
    ShowAllUserListComponent.prototype.deleteUser = function (id) {
        var _this = this;
        console.log('In Delete User');
        console.log(id);
        this.ngOnInit();
        this.api.deletePingUserNew(id)
            .subscribe(function (res) {
            console.log('ping user new Data');
            _this.ngOnInit();
            _this.api.getPingUsersNew()
                .subscribe(function (res) {
                _this.snackbar.open('Succesfully deleted user', 'Close', {
                    duration: 3000,
                });
                console.log(res);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }, function (err) {
                console.log(err);
            });
            // this.api.getPingUsersNew()
            // .subscribe( res => {
            //   console.log('ping user new Data');
            //   console.log(res);
            //   this.snackbar.open('Succesfully deleted user', 'Close', {
            //     duration: 3000,
            //   });
            //   this.dataSource = new MatTableDataSource(res);
            //   this.dataSource.sort = this.sort;
            //   this.dataSource.paginator = this.paginator;
            // }, err => {
            //   console.log(err);
            // });
            // this.router.navigateByUrl("/alert_Inbox");
            // this.router.navigate(['/alert_examples']);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ShowAllUserListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ShowAllUserListComponent.prototype, "sort", void 0);
    ShowAllUserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-all-user-list',
            template: __webpack_require__(/*! ./show-all-user-list.component.html */ "./src/app/Admin/SuperAdmin/show-all-user-list/show-all-user-list.component.html"),
            styles: [__webpack_require__(/*! ./show-all-user-list.component.css */ "./src/app/Admin/SuperAdmin/show-all-user-list/show-all-user-list.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], ShowAllUserListComponent);
    return ShowAllUserListComponent;
}());



/***/ }),

/***/ "./src/app/Admin/SuperAdmin/show-in-active-users/show-in-active-users.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/Admin/SuperAdmin/show-in-active-users/show-in-active-users.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\n\r\ninput[type=\"file\"] {\r\n    display: none;\r\n  }\r\n\r\n.custom-file-upload {\r\n    border: 1px solid #ccc;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n  }\r\n\r\ntable {\r\n      width: 100%;\r\n      transition: none !important;\r\n      box-shadow: none !important;\r\n      margin-top: -30px;\r\n    }\r\n\r\n.mat-form-field {\r\n      font-size: 14px;\r\n      width: 70%;\r\n    }\r\n\r\n#table-responsive{\r\n      margin-top: 5px;\r\n    }\r\n\r\n#row2{\r\n      margin-top: -2px;\r\n      padding-top: 8px;\r\n      padding-bottom: 10px;\r\n    }\r\n\r\n.table-responsive{\r\n      margin-top: -15px;\r\n      padding-top: 40px;\r\n    }\r\n\r\ntr.mat-header-row{\r\n      height: 37px;\r\n    }\r\n\r\n.table-bordered>thead>tr>th{\r\n      border: 1px solid rgb(231, 76, 60);\r\n    }\r\n\r\n/* Switch Button */\r\n\r\nth{\r\n      padding-top: -100px;\r\n    }\r\n\r\n#th_allign{\r\n      text-align: center;\r\n    }\r\n\r\ntd{\r\n      color: rgb(127, 127, 127)\r\n    }\r\n\r\n.mat-header-cell {\r\n      color: rgb(102,102,102);\r\n    }\r\n\r\nth{\r\n      font-size: 14px;\r\n      background-color: rgb(238, 238, 238);\r\n      /* background-color: rgb(249, 55, 66); */\r\n    \r\n    }\r\n\r\n#btn-danger{\r\n      background-color: rgb(249, 25, 66);\r\n      color: rgb(255, 255, 255)\r\n    }\r\n\r\n* {\r\n    font-family: 'Nunito', 'Glyphicons Halflings';\r\n  }"

/***/ }),

/***/ "./src/app/Admin/SuperAdmin/show-in-active-users/show-in-active-users.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/Admin/SuperAdmin/show-in-active-users/show-in-active-users.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n            <div class=\"btn-group btn-breadcrumb \">\n                <a routerLink=\"/admin/sAdminHome\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-home\"></i></a>\n                <a class=\"btn btn-default\">SuperAdmin</a>\n                <a class=\"btn btn-default\">All Users</a>\n            </div>\n      </div>\n      <div class=\"col-md-2 text-center\"><h4> InActive Users</h4></div>\n      <div class=\"col-md-4 pull-right\">\n        <div class=\"input-group\" style=\"float:right\">\n          <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"txtSearch\"/> -->\n          <input class=\"form-control\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\" >\n              <div class=\"input-group-btn\">\n                  <button class=\"btn btn-default\" type=\"submit\">\n                      <span class=\"glyphicon glyphicon-search\"></span>\n                  </button>\n              </div>\n          </div>\n       </div>\n\n\n    </div>\n</div>\n\n<!--\n<div class=\"row\">\n  <div class=\"col-xs-3\"></div>\n  <div class=\"col-xs-4\">\n\n  </div>\n</div> -->\n<br>\n\n\n    <div class=\"container\" id=\"table-responsive\">\n          <div class=\"table-responsive\" >\n              <table mat-table [dataSource]=\"dataSource\" matSort class=\" mat-elevation-z8 table-bordered table-striped\">\n\n                <!-- USerID Column -->\n                <ng-container matColumnDef=\"PingUserID\">\n                <th  mat-header-cell *matHeaderCellDef class=\"text-center\" id=\"th_allign\"> User ID</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.PingUserID}} </td>\n                </ng-container>\n\n                <!-- USerNAme Column -->\n                <ng-container matColumnDef=\"PingUserName\">\n                <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\"> User Name </th>\n                <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.PingUserName}} </td>\n                </ng-container>\n\n              \n                  \n                    <!-- Access Column -->\n                <ng-container matColumnDef=\"PingUserAccess\">\n                  <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\">User Access </th>\n                  <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.PingUserAccess}} </td>\n                  </ng-container> \n\n                    <!-- Role Column -->\n                <ng-container matColumnDef=\"PingRole\">\n                  <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\">Role </th>\n                  <td mat-cell  *matCellDef=\"let element\" >  &nbsp; {{element.PingRole}} </td>\n                  </ng-container> \n\n                    <!-- EmailId Column -->\n                <ng-container matColumnDef=\"EmailID\">\n                  <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\">Email Id </th>\n                  <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.EmailID}} </td>\n                  </ng-container> \n\n                    <!-- Insert bY Column -->\n                <ng-container matColumnDef=\"InsertBy\">\n                    <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\">Created By </th>\n                    <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.InsertBy}} </td>\n                    </ng-container> \n\n\n                <!-- alertsetTime Column -->\n                <!-- <ng-container matColumnDef=\"Setdate\">\n                <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp; Set date </th>\n                <td mat-cell  *matCellDef=\"let element\">  &nbsp;{{element.alertsetTime | date}} </td>\n                </ng-container> -->\n\n\n                   <!-- alertsetTime Column -->\n               <!-- <ng-container matColumnDef=\"SetTime\">\n                  <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp; Set Time </th>\n                  <td mat-cell name=\"SetTime\" *matCellDef=\"let element\">  &nbsp;{{element.alertsetTime | date:\"HH:MM\"}} </td>\n                </ng-container> -->\n\n      <!-- Trigger -->\n\n                <!-- <ng-container matColumnDef=\"trigger\">\n                  <th mat-header-cell *matHeaderCellDef>&nbsp;&nbsp;Trigger  </th> -->\n                 <!-- <td mat-cell *matCellDef=\"let element\"> {{element.trigger}} </td> -->\n                 <!-- <td mat-cell *matCellDef=\"let element\">\n                      <mat-slide-toggle\n                            class=\"example-margin\"\n                            name=\"trigger\"\n                            [color]=\"color\"\n                            [checked]=\"checked\"\n                            [disabled]=\"disabled\"\n                            [(ngModel)]=\"element.trigger\"> {{element.trigger}}\n                      </mat-slide-toggle>\n                   </td>\n                </ng-container> -->\n\n                <!-- Colum Edit/ Delete -->\n                <ng-container matColumnDef=\"edit\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\" id=\"th_allign\">Edit / Delete  </th>\n\n                   <td mat-cell *matCellDef=\"let element\">\n                     <div class=\"row col-lg-offset-3\">\n                       <div class=\"col-md-2\">\n                          <!-- <a routerLink=\"/edit_alert\" style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a> -->\n                          <!-- <a type='submit' [routerLink]=\"['/edit_new',element.id]\" (click)=\"onEdit(element._id)\" style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a> -->\n                          <a class=\"text-center\" type='submit' [routerLink]=\"['/admin/editUserDetails/',element._id]\"  style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a>\n\n                        </div>\n                       &nbsp;\n                       <div class=\"col-md-2\">\n                            <a class=\"text-center\" style=\"cursor: pointer;\" (click)=\"deleteUser(element._id)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\n                           <!-- <a mat-raised-button color=\"warn\" (click)=\"deleteAlert(element._id)\"><mat-icon>delete</mat-icon></a> -->\n                        </div>\n                     </div>\n                   </td>\n                 </ng-container>\n                <!-- <ng-container matColumnDef=\"Edit/Delete\">\n                    <th mat-header-cell *matHeaderCellDef>&nbsp;&nbsp;<strong>Edit / Delete</strong>  </th>\n                   <td>\n                     <div class=\"row\">\n                       <div class=\"col-md-2\">\n                        <button class=\"btn btn-primary\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\n                       </div>\n                       <div class=\"col-md-2\">\n                          <button class=\"btn btn-primary\"> <i class=\"glyphicon glyphicon-trash\"></i></button>\n                        </div>\n                     </div>\n                   </td>\n\n                </ng-container> -->\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n          </div>\n\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-1\" >\n              <button \n              mat-raised-button \n              id=\"btn-danger\" \n              [routerLink]=\"['/admin/createUser']\">Create User</button>\n          </div>        \n          \n        </div>\n        <!-- <div class=\"row\">\n          <div class=\"col-md-1\"></div>\n            <div class=\"col-md-2\" style=\"margin-left: 20px;\">\n                <a (click)=\"downloadFile()\" style=\"cursor:pointer; \">Download Template</a>    \n            </div>\n        </div> -->\n        <div class=\"col-md-12\">\n            <mat-paginator  [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20, 30, 50, 100]\"\n             showFirstLastButtons></mat-paginator>\n        </div>\n      </div>\n  \n\n\n\n"

/***/ }),

/***/ "./src/app/Admin/SuperAdmin/show-in-active-users/show-in-active-users.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/Admin/SuperAdmin/show-in-active-users/show-in-active-users.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ShowInActiveUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowInActiveUsersComponent", function() { return ShowInActiveUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin.service */ "./src/app/Admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { identifier } from '../../../../node_modules/@types/babel-types';


// import { AuthService } from '../../auth/auth.service';
var ShowInActiveUsersComponent = /** @class */ (function () {
    function ShowInActiveUsersComponent(api, commanAPI, router, location, route, snackbar) {
        this.api = api;
        this.commanAPI = commanAPI;
        this.router = router;
        this.location = location;
        this.route = route;
        this.snackbar = snackbar;
        this.displayedColumns = ['PingUserID', 'PingUserName', 'PingUserAccess', 'PingRole', 'EmailID', 'InsertBy', 'edit'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ShowInActiveUsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ShowInActiveUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commanAPI.getLoggeddUser().subscribe(function (res) {
            _this.api.getPingUserStatusWise(false)
                .subscribe(function (res) {
                // if(res.code == 200){
                console.log("User Details :", res.body);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.body);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
                // }
            }, function (err) {
                console.log(err);
            });
        }, function (res) {
            _this.router.navigate(['/login']);
        });
        this.editPingUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            PingUserID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingUserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingUserDirectory: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingUserAccess: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingMemberID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingGroupID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            InsertBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            EmailID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
        });
    };
    // Edit User
    ShowInActiveUsersComponent.prototype.onEdit = function (id) {
        var _this = this;
        console.log('In Edit User');
        console.log(id);
        this.api.getPingUserIDDetails(id)
            .subscribe(function (res) {
            console.log(res);
            _this.PingUserID = id;
        });
    };
    // delete User
    ShowInActiveUsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        console.log('In Delete User');
        console.log(id);
        this.ngOnInit();
        this.api.deletePingUserNew(id)
            .subscribe(function (res) {
            console.log('ping user new Data');
            _this.ngOnInit();
            _this.api.getPingUsersNew()
                .subscribe(function (res) {
                _this.snackbar.open('Succesfully deleted user', 'Close', {
                    duration: 3000,
                });
                console.log(res);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }, function (err) {
                console.log(err);
            });
            // this.api.getPingUsersNew()
            // .subscribe( res => {
            //   console.log('ping user new Data');
            //   console.log(res);
            //   this.snackbar.open('Succesfully deleted user', 'Close', {
            //     duration: 3000,
            //   });
            //   this.dataSource = new MatTableDataSource(res);
            //   this.dataSource.sort = this.sort;
            //   this.dataSource.paginator = this.paginator;
            // }, err => {
            //   console.log(err);
            // });
            // this.router.navigateByUrl("/alert_Inbox");
            // this.router.navigate(['/alert_examples']);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ShowInActiveUsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ShowInActiveUsersComponent.prototype, "sort", void 0);
    ShowInActiveUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-in-active-users',
            template: __webpack_require__(/*! ./show-in-active-users.component.html */ "./src/app/Admin/SuperAdmin/show-in-active-users/show-in-active-users.component.html"),
            styles: [__webpack_require__(/*! ./show-in-active-users.component.css */ "./src/app/Admin/SuperAdmin/show-in-active-users/show-in-active-users.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], ShowInActiveUsersComponent);
    return ShowInActiveUsersComponent;
}());



/***/ }),

/***/ "./src/app/Admin/SuperAdmin/super-admin-home/super-admin-home.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/Admin/SuperAdmin/super-admin-home/super-admin-home.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gi-2x{font-size: 2em;}\r\n.gi-3x{font-size: 3em;}\r\n.gi-4x{font-size: 4em;}\r\n.gi-5x{font-size: 5em;}"

/***/ }),

/***/ "./src/app/Admin/SuperAdmin/super-admin-home/super-admin-home.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/Admin/SuperAdmin/super-admin-home/super-admin-home.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br><br><br><br><br>\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\" id=\"height\">\n          <flash-messages></flash-messages>\n      </div>\n    </div>\n</div>\n<div>\n        <div class=\"row col-lg-offset-2\">\n                <div class=\"col-md-3 col-sm-3 col-xs-6 text-center\">\n                      <!-- <a routerLink=\"/admin/allUserList\" class=\"btn btn-default\"> -->\n                              <div (click)='showActiveUsers()' data-toggle=\"tooltip\" title=\"\" class=\"well top-block\" data-original-title=\"Active members.\">\n                                      <i class=\"glyphicon glyphicon-list-alt gi-2x\"></i>\n                                      <div><h4>Total Users</h4></div>\n                                      <div class=\"badge badge-primary\">{{ActiveUserCount}}</div>\n                              </div>\n                      <!-- </a> -->\n                </div>\n              \n                <div class=\"col-md-3 col-sm-3 col-xs-6 text-center\">\n                    <div (click)='showDactiveUsers()' data-toggle=\"tooltip\" title=\"\" class=\"well top-block\" data-original-title=\"Active Server.\">\n                        <i class=\"glyphicon glyphicon-pushpin gi-2x\"></i>\n              \n                        <div><h4>Deactive User</h4></div>\n                        <div class=\"badge badge-primary\">{{DactiveUser}}</div>\n                    </div>\n                </div>\n              \n                <div class=\"col-md-3 col-sm-3 col-xs-6 text-center\">    \n                    <div (click)='showAlertList()' data-toggle=\"tooltip\" title=\"\" class=\"well top-block\" data-original-title=\"InActive User\">\n                        <i class=\"glyphicon glyphicon-edit gi-2x\"></i>\n                        <div><h4>Total Alerts</h4></div>\n                        <div></div>\n                        <br>\n                    </div>\n\n                </div>\n                \n              </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Admin/SuperAdmin/super-admin-home/super-admin-home.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Admin/SuperAdmin/super-admin-home/super-admin-home.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SuperAdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminHomeComponent", function() { return SuperAdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var src_app_SuperAdmin_super_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/SuperAdmin/super-admin.service */ "./src/app/SuperAdmin/super-admin.service.ts");
/* harmony import */ var src_app_LoginModule_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/LoginModule/login.service */ "./src/app/LoginModule/login.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SuperAdminHomeComponent = /** @class */ (function () {
    function SuperAdminHomeComponent(fb, router, api, formBuilder, snackbar, superAdminService, _flashMessagesService, PingAdminFlag) {
        this.fb = fb;
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.superAdminService = superAdminService;
        this._flashMessagesService = _flashMessagesService;
        this.PingAdminFlag = PingAdminFlag;
        this.PingUserName = '';
        this.PingRole = '';
        this.EmailID = '';
        this.password = '';
        this.loginFlag = false;
        this.show = false;
        this.ActiveUserCount = '0';
        this.DactiveUser = '0';
        this.roleStr = 'Administrat';
        this.loop1 = true;
    }
    SuperAdminHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._flashMessagesService.show(' Your Trial Period For Ping Has Expired Within ' + this.PingAdminFlag.LicenseCount, { cssClass: 'alert-danger', timeout: 5000 });
        this.api.getPingUsersCount().subscribe(function (res) {
            console.log(res);
            _this.ActiveUserCount = res.body;
        });
        this.api.getDactivePingUsersCount().subscribe(function (res) {
            console.log(res);
            _this.DactiveUser = res.body;
        });
    };
    SuperAdminHomeComponent.prototype.showActiveUsers = function () {
        this.router.navigate(['/admin/allUserList']);
    };
    SuperAdminHomeComponent.prototype.showDactiveUsers = function () {
        this.router.navigate(['/admin/inActiveUsers']);
    };
    SuperAdminHomeComponent.prototype.showAlertList = function () {
        this.router.navigate(['/admin/sAlertList']);
    };
    SuperAdminHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-super-admin-home',
            template: __webpack_require__(/*! ./super-admin-home.component.html */ "./src/app/Admin/SuperAdmin/super-admin-home/super-admin-home.component.html"),
            styles: [__webpack_require__(/*! ./super-admin-home.component.css */ "./src/app/Admin/SuperAdmin/super-admin-home/super-admin-home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_LoginModule_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            src_app_SuperAdmin_super_admin_service__WEBPACK_IMPORTED_MODULE_4__["SuperAdminService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"],
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]])
    ], SuperAdminHomeComponent);
    return SuperAdminHomeComponent;
}());



/***/ }),

/***/ "./src/app/Admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/Admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-register/user-register.component */ "./src/app/Admin/user-register/user-register.component.ts");
/* harmony import */ var _user_register_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-register/user-details/user-details.component */ "./src/app/Admin/user-register/user-details/user-details.component.ts");
/* harmony import */ var _user_register_edit_user_details_edit_user_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-register/edit-user-details/edit-user-details.component */ "./src/app/Admin/user-register/edit-user-details/edit-user-details.component.ts");
/* harmony import */ var _DeliveryChannel_create_delivery_channel_create_delivery_channel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeliveryChannel/create-delivery-channel/create-delivery-channel.component */ "./src/app/Admin/DeliveryChannel/create-delivery-channel/create-delivery-channel.component.ts");
/* harmony import */ var _DeliveryChannel_delivery_channel_details_delivery_channel_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeliveryChannel/delivery-channel-details/delivery-channel-details.component */ "./src/app/Admin/DeliveryChannel/delivery-channel-details/delivery-channel-details.component.ts");
/* harmony import */ var _DeliveryChannel_edit_delivery_channel_edit_delivery_channel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeliveryChannel/edit-delivery-channel/edit-delivery-channel.component */ "./src/app/Admin/DeliveryChannel/edit-delivery-channel/edit-delivery-channel.component.ts");
/* harmony import */ var _Datasource_create_datasource_create_datasource_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Datasource/create-datasource/create-datasource.component */ "./src/app/Admin/Datasource/create-datasource/create-datasource.component.ts");
/* harmony import */ var _Datasource_edit_datasource_edit_datasource_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Datasource/edit-datasource/edit-datasource.component */ "./src/app/Admin/Datasource/edit-datasource/edit-datasource.component.ts");
/* harmony import */ var _Datasource_datasource_details_datasource_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Datasource/datasource-details/datasource-details.component */ "./src/app/Admin/Datasource/datasource-details/datasource-details.component.ts");
/* harmony import */ var _MasterForms_ChannelMaster_ChannelType_create_channel_type_create_channel_type_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MasterForms/ChannelMaster/ChannelType/create-channel-type/create-channel-type.component */ "./src/app/Admin/MasterForms/ChannelMaster/ChannelType/create-channel-type/create-channel-type.component.ts");
/* harmony import */ var _MasterForms_ChannelName_channel_name_details_channel_name_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MasterForms/ChannelName/channel-name-details/channel-name-details.component */ "./src/app/Admin/MasterForms/ChannelName/channel-name-details/channel-name-details.component.ts");
/* harmony import */ var _MasterForms_ChannelName_create_channel_name_create_channel_name_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MasterForms/ChannelName/create-channel-name/create-channel-name.component */ "./src/app/Admin/MasterForms/ChannelName/create-channel-name/create-channel-name.component.ts");
/* harmony import */ var _MasterForms_ChannelMaster_ChannelType_channel_type_details_channel_type_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MasterForms/ChannelMaster/ChannelType/channel-type-details/channel-type-details.component */ "./src/app/Admin/MasterForms/ChannelMaster/ChannelType/channel-type-details/channel-type-details.component.ts");
/* harmony import */ var _SuperAdmin_super_admin_home_super_admin_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SuperAdmin/super-admin-home/super-admin-home.component */ "./src/app/Admin/SuperAdmin/super-admin-home/super-admin-home.component.ts");
/* harmony import */ var _SuperAdmin_show_all_user_list_show_all_user_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SuperAdmin/show-all-user-list/show-all-user-list.component */ "./src/app/Admin/SuperAdmin/show-all-user-list/show-all-user-list.component.ts");
/* harmony import */ var _SuperAdmin_show_in_active_users_show_in_active_users_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SuperAdmin/show-in-active-users/show-in-active-users.component */ "./src/app/Admin/SuperAdmin/show-in-active-users/show-in-active-users.component.ts");
/* harmony import */ var _SuperAdmin_alert_list_alert_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SuperAdmin/alert-list/alert-list.component */ "./src/app/Admin/SuperAdmin/alert-list/alert-list.component.ts");
/* harmony import */ var _LicenseDetails_license_details_license_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./LicenseDetails/license-details/license-details.component */ "./src/app/Admin/LicenseDetails/license-details/license-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    // {
    //     path: 'supDashboard ',
    //     component: SuperAdminDashboardComponent,  
    //     pathMatch:'full'     
    // },
    //User start
    {
        path: 'createUser',
        component: _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_2__["UserRegisterComponent"],
        pathMatch: 'full'
    },
    {
        path: 'userDetails',
        component: _user_register_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsComponent"],
        pathMatch: 'full'
    },
    {
        path: 'editUserDetails/:id',
        component: _user_register_edit_user_details_edit_user_details_component__WEBPACK_IMPORTED_MODULE_4__["EditUserDetailsComponent"],
        pathMatch: 'full'
    },
    //**************************************** */
    //Delivery Channel start
    {
        path: 'createDeliveryChannel',
        component: _DeliveryChannel_create_delivery_channel_create_delivery_channel_component__WEBPACK_IMPORTED_MODULE_5__["CreateDeliveryChannelComponent"],
        pathMatch: 'full'
    },
    {
        path: 'deliveryChannelDetails',
        component: _DeliveryChannel_delivery_channel_details_delivery_channel_details_component__WEBPACK_IMPORTED_MODULE_6__["DeliveryChannelDetailsComponent"],
        pathMatch: 'full'
    },
    {
        path: 'editDeliveryChannel/:id',
        component: _DeliveryChannel_edit_delivery_channel_edit_delivery_channel_component__WEBPACK_IMPORTED_MODULE_7__["EditDeliveryChannelComponent"],
        pathMatch: 'full'
    },
    //************************************************ */
    //Datasource part
    {
        path: 'createDataSource',
        component: _Datasource_create_datasource_create_datasource_component__WEBPACK_IMPORTED_MODULE_8__["CreateDatasourceComponent"],
        pathMatch: 'full'
    },
    {
        path: 'editDataSource/:id',
        component: _Datasource_edit_datasource_edit_datasource_component__WEBPACK_IMPORTED_MODULE_9__["EditDatasourceComponent"],
        pathMatch: 'full'
    },
    {
        path: 'dataSourceDetails',
        component: _Datasource_datasource_details_datasource_details_component__WEBPACK_IMPORTED_MODULE_10__["DatasourceDetailsComponent"],
        pathMatch: 'full'
    },
    //Admin Master forms Routing
    {
        path: 'createChannelType',
        component: _MasterForms_ChannelMaster_ChannelType_create_channel_type_create_channel_type_component__WEBPACK_IMPORTED_MODULE_11__["CreateChannelTypeComponent"],
        pathMatch: 'full'
    },
    {
        path: 'channelTypeDetails',
        component: _MasterForms_ChannelMaster_ChannelType_channel_type_details_channel_type_details_component__WEBPACK_IMPORTED_MODULE_14__["ChannelTypeDetailsComponent"],
        pathMatch: 'full'
    },
    {
        path: 'createChannelName',
        component: _MasterForms_ChannelName_create_channel_name_create_channel_name_component__WEBPACK_IMPORTED_MODULE_13__["CreateChannelNameComponent"],
        pathMatch: 'full'
    },
    {
        path: 'channelNameDetails',
        component: _MasterForms_ChannelName_channel_name_details_channel_name_details_component__WEBPACK_IMPORTED_MODULE_12__["ChannelNameDetailsComponent"],
        pathMatch: 'full'
    },
    //Super Admin Dashboard
    {
        path: 'sAdminHome',
        component: _SuperAdmin_super_admin_home_super_admin_home_component__WEBPACK_IMPORTED_MODULE_15__["SuperAdminHomeComponent"],
        pathMatch: 'full'
    },
    {
        path: 'allUserList',
        component: _SuperAdmin_show_all_user_list_show_all_user_list_component__WEBPACK_IMPORTED_MODULE_16__["ShowAllUserListComponent"],
        pathMatch: 'full'
    },
    {
        path: 'inActiveUsers',
        component: _SuperAdmin_show_in_active_users_show_in_active_users_component__WEBPACK_IMPORTED_MODULE_17__["ShowInActiveUsersComponent"],
        pathMatch: 'full'
    },
    {
        path: 'sAlertList',
        component: _SuperAdmin_alert_list_alert_list_component__WEBPACK_IMPORTED_MODULE_18__["AlertListComponent"],
        pathMatch: 'full'
    },
    //License Details
    {
        path: 'LicenseDetails',
        component: _LicenseDetails_license_details_license_details_component__WEBPACK_IMPORTED_MODULE_19__["LicenseDetailsComponent"],
        pathMatch: 'full'
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/Admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/Admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/Admin/admin-routing.module.ts");
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
/* harmony import */ var _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-register/user-register.component */ "./src/app/Admin/user-register/user-register.component.ts");
/* harmony import */ var _user_register_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-register/user-details/user-details.component */ "./src/app/Admin/user-register/user-details/user-details.component.ts");
/* harmony import */ var _user_register_edit_user_details_edit_user_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-register/edit-user-details/edit-user-details.component */ "./src/app/Admin/user-register/edit-user-details/edit-user-details.component.ts");
/* harmony import */ var _DeliveryChannel_create_delivery_channel_create_delivery_channel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./DeliveryChannel/create-delivery-channel/create-delivery-channel.component */ "./src/app/Admin/DeliveryChannel/create-delivery-channel/create-delivery-channel.component.ts");
/* harmony import */ var _DeliveryChannel_delivery_channel_details_delivery_channel_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./DeliveryChannel/delivery-channel-details/delivery-channel-details.component */ "./src/app/Admin/DeliveryChannel/delivery-channel-details/delivery-channel-details.component.ts");
/* harmony import */ var _DeliveryChannel_edit_delivery_channel_edit_delivery_channel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./DeliveryChannel/edit-delivery-channel/edit-delivery-channel.component */ "./src/app/Admin/DeliveryChannel/edit-delivery-channel/edit-delivery-channel.component.ts");
/* harmony import */ var _Datasource_edit_datasource_edit_datasource_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Datasource/edit-datasource/edit-datasource.component */ "./src/app/Admin/Datasource/edit-datasource/edit-datasource.component.ts");
/* harmony import */ var _Datasource_datasource_details_datasource_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Datasource/datasource-details/datasource-details.component */ "./src/app/Admin/Datasource/datasource-details/datasource-details.component.ts");
/* harmony import */ var _Datasource_create_datasource_create_datasource_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Datasource/create-datasource/create-datasource.component */ "./src/app/Admin/Datasource/create-datasource/create-datasource.component.ts");
/* harmony import */ var _MasterForms_ChannelMaster_ChannelType_create_channel_type_create_channel_type_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./MasterForms/ChannelMaster/ChannelType/create-channel-type/create-channel-type.component */ "./src/app/Admin/MasterForms/ChannelMaster/ChannelType/create-channel-type/create-channel-type.component.ts");
/* harmony import */ var _MasterForms_ChannelMaster_ChannelType_channel_type_details_channel_type_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./MasterForms/ChannelMaster/ChannelType/channel-type-details/channel-type-details.component */ "./src/app/Admin/MasterForms/ChannelMaster/ChannelType/channel-type-details/channel-type-details.component.ts");
/* harmony import */ var _MasterForms_ChannelName_create_channel_name_create_channel_name_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./MasterForms/ChannelName/create-channel-name/create-channel-name.component */ "./src/app/Admin/MasterForms/ChannelName/create-channel-name/create-channel-name.component.ts");
/* harmony import */ var _MasterForms_ChannelName_channel_name_details_channel_name_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./MasterForms/ChannelName/channel-name-details/channel-name-details.component */ "./src/app/Admin/MasterForms/ChannelName/channel-name-details/channel-name-details.component.ts");
/* harmony import */ var _SuperAdmin_super_admin_home_super_admin_home_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./SuperAdmin/super-admin-home/super-admin-home.component */ "./src/app/Admin/SuperAdmin/super-admin-home/super-admin-home.component.ts");
/* harmony import */ var _SuperAdmin_show_all_user_list_show_all_user_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./SuperAdmin/show-all-user-list/show-all-user-list.component */ "./src/app/Admin/SuperAdmin/show-all-user-list/show-all-user-list.component.ts");
/* harmony import */ var _SuperAdmin_show_in_active_users_show_in_active_users_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./SuperAdmin/show-in-active-users/show-in-active-users.component */ "./src/app/Admin/SuperAdmin/show-in-active-users/show-in-active-users.component.ts");
/* harmony import */ var _SuperAdmin_alert_list_alert_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./SuperAdmin/alert-list/alert-list.component */ "./src/app/Admin/SuperAdmin/alert-list/alert-list.component.ts");
/* harmony import */ var _LicenseDetails_license_details_license_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./LicenseDetails/license-details/license-details.component */ "./src/app/Admin/LicenseDetails/license-details/license-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { AlertsModule } from 'angular-alert-module';



// material import

//Components


















// import { SuperAdminDashboardComponent } from '../SuperAdmin/super-admin-dashboard/super-admin-dashboard.component';
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_13__["UserRegisterComponent"],
                _user_register_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_14__["UserDetailsComponent"],
                _user_register_edit_user_details_edit_user_details_component__WEBPACK_IMPORTED_MODULE_15__["EditUserDetailsComponent"],
                _DeliveryChannel_create_delivery_channel_create_delivery_channel_component__WEBPACK_IMPORTED_MODULE_16__["CreateDeliveryChannelComponent"],
                _DeliveryChannel_delivery_channel_details_delivery_channel_details_component__WEBPACK_IMPORTED_MODULE_17__["DeliveryChannelDetailsComponent"],
                _DeliveryChannel_edit_delivery_channel_edit_delivery_channel_component__WEBPACK_IMPORTED_MODULE_18__["EditDeliveryChannelComponent"],
                _Datasource_create_datasource_create_datasource_component__WEBPACK_IMPORTED_MODULE_21__["CreateDatasourceComponent"],
                _Datasource_edit_datasource_edit_datasource_component__WEBPACK_IMPORTED_MODULE_19__["EditDatasourceComponent"],
                _Datasource_datasource_details_datasource_details_component__WEBPACK_IMPORTED_MODULE_20__["DatasourceDetailsComponent"],
                _MasterForms_ChannelMaster_ChannelType_create_channel_type_create_channel_type_component__WEBPACK_IMPORTED_MODULE_22__["CreateChannelTypeComponent"],
                _MasterForms_ChannelMaster_ChannelType_channel_type_details_channel_type_details_component__WEBPACK_IMPORTED_MODULE_23__["ChannelTypeDetailsComponent"],
                _MasterForms_ChannelName_create_channel_name_create_channel_name_component__WEBPACK_IMPORTED_MODULE_24__["CreateChannelNameComponent"],
                _MasterForms_ChannelName_channel_name_details_channel_name_details_component__WEBPACK_IMPORTED_MODULE_25__["ChannelNameDetailsComponent"],
                _SuperAdmin_super_admin_home_super_admin_home_component__WEBPACK_IMPORTED_MODULE_26__["SuperAdminHomeComponent"],
                _SuperAdmin_show_all_user_list_show_all_user_list_component__WEBPACK_IMPORTED_MODULE_27__["ShowAllUserListComponent"],
                _SuperAdmin_show_in_active_users_show_in_active_users_component__WEBPACK_IMPORTED_MODULE_28__["ShowInActiveUsersComponent"],
                _SuperAdmin_alert_list_alert_list_component__WEBPACK_IMPORTED_MODULE_29__["AlertListComponent"],
                _LicenseDetails_license_details_license_details_component__WEBPACK_IMPORTED_MODULE_30__["LicenseDetailsComponent"],
            ],
            entryComponents: [
                _user_register_user_register_component__WEBPACK_IMPORTED_MODULE_13__["UserRegisterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__["AdminRoutingModule"],
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
                // AlertsModule.forRoot(),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesModule"].forRoot()
            ],
            providers: [],
            bootstrap: []
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/Admin/user-register/edit-user-details/edit-user-details.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/Admin/user-register/edit-user-details/edit-user-details.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#edit{\r\n    background-color:rgb(231, 76, 60);\r\n    padding-top: 14px;\r\n}\r\n\r\n#cancel{\r\n    margin-left: 5px;\r\n}\r\n\r\n#hide{\r\n    visibility: hidden;\r\n}\r\n\r\n.btn-primary{\r\n    margin-left: 40%;\r\n}\r\n\r\n#container1{\r\n    border: 1px solid rgb(236, 235, 235);\r\n    margin-left:13%\r\n}\r\n\r\n/* #margin{\r\n    margin-left: 10% ;\r\n} */\r\n\r\n#save{\r\n  background-color:rgb(249, 25, 66);\r\n  color: white;\r\n  margin-left: 10px;\r\n}\r\n\r\n.example-form {\r\n    min-width: 80px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n.example-full-width:nth-last-child() {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n.button-row {\r\n    margin: 10px 0;\r\n  }\r\n\r\n.text-white{\r\n    color: white;\r\n}\r\n "

/***/ }),

/***/ "./src/app/Admin/user-register/edit-user-details/edit-user-details.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/Admin/user-register/edit-user-details/edit-user-details.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br><br><br><br>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n          <div class=\"btn-group btn-breadcrumb \">\n              <a routerLink=\"/pingAlert/alertInbox\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-home\"></i></a>\n              <a class=\"btn btn-default\">Admin</a>\n              <a routerLink=\"/UserRoleDetails\" class=\"btn btn-default\">User Management</a>\n              <a class=\"btn btn-default active\">Create/Edit User</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n    <br>\n    <form [formGroup]=\"pingUserRoleFrm\" (ngSubmit)=\"onFormSubmit(pingUserRoleFrm.value)\">\n      <div class=\"col-md-1\"></div>\n      <div class=\"col-md-9 \">\n          <div class=\"panel panel-default\">\n              <div class=\"panel-body\">\n                 <div class=\"col-md-6\">\n                  <div class=\"row\">\n                      <!-- <div class=\"col-lg-1 pull-left\"><mat-icon>person_add</mat-icon></div>\n                      <div class=\"col-lg-11\"><h5>Please enter the user details below: </h5></div> -->\n                    </div>\n                      \n                      <div class=\"col-md-9\">           \n                        \n                          <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n                              <mat-label>User ID </mat-label>\n                              <!-- <span matPrefix><mat-icon matPrefix>edit_attributes</mat-icon>&nbsp;</span> -->\n                              <input matInput placeholder=\"Enter User ID\" formControlName=\"PingUserID\"\n                                     [errorStateMatcher]=\"matcher\">\n                                     <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->                         \n                              <mat-error>\n                                <span *ngIf=\"!pingUserRoleFrm.get('PingUserID').valid && pingUserRoleFrm.get('PingUserID').touched\">Please enter User ID</span>\n                              </mat-error>\n                            </mat-form-field>\n                      </div>\n                      <div class=\"col-md-9\">\n                          <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                              <mat-label>User Name </mat-label>\n                              <!-- <span matPrefix><mat-icon matPrefix>edit</mat-icon> &nbsp;</span> -->\n                              <input matInput placeholder=\"Enter User Name\" formControlName=\"PingUserName\"\n                                     [errorStateMatcher]=\"matcher\">\n                              <mat-error>\n                                <span *ngIf=\"!pingUserRoleFrm.get('PingUserName').valid && pingUserRoleFrm.get('PingUserName').touched\">Please enter User Name</span>\n                              </mat-error>\n                            </mat-form-field>\n                      </div>  \n\n                    <!-- Password -->\n                     <div class=\"col-md-9\">           \n                        \n                      <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n                          <mat-label>Password*</mat-label>\n                          <!-- <span matPrefix><mat-icon matPrefix>edit_attributes</mat-icon>&nbsp;</span> -->\n                          <input type=\"password\" matInput placeholder=\"Enter Password\" formControlName=\"password\"\n                                 [errorStateMatcher]=\"matcher\">\n                                 <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                                 \n                          <mat-error>\n                            <span *ngIf=\"!pingUserRoleFrm.get('password').valid && pingUserRoleFrm.get('password').touched\">Please enter User ID</span>\n                          </mat-error>\n                        </mat-form-field>\n                      </div>\n\n\n                      <div class=\"col-md-9\">\n                          <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                              <mat-label>User Directory *</mat-label>\n                              <!-- <span matPrefix>+1 &nbsp;</span> -->\n                              <input matInput placeholder=\"Enter User Directory\" formControlName=\"PingUserDirectory\"\n                                     [errorStateMatcher]=\"matcher\">\n                              <mat-error>\n                                <span *ngIf=\"!pingUserRoleFrm.get('PingUserDirectory').valid && pingUserRoleFrm.get('PingUserDirectory').touched\">Please enter User Directory</span>\n                              </mat-error>\n                            </mat-form-field>\n                      </div>\n                     \n                      \n                      <!-- EmailId -->\n                      <div class=\"col-md-9\">           \n                        \n                        <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n                            <mat-label>Email Id*</mat-label>\n                            <!-- <span matPrefix><mat-icon matPrefix>edit_attributes</mat-icon>&nbsp;</span> -->\n                           <input  matInput placeholder=\"Enter Email Id\" formControlName=\"EmailID\"\n                            [errorStateMatcher]=\"matcher\">  \n                                   <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->       \n                            <mat-error>\n                              <span *ngIf=\"!pingUserRoleFrm.get('EmailID').valid && pingUserRoleFrm.get('EmailID').touched\">Please enter User ID</span>\n                            </mat-error>\n                          </mat-form-field>\n                    </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"row\">\n                    <div class=\"col-md-9\">\n                        <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                            <mat-label>User Access </mat-label>\n                          <mat-select placeholder=\"User Access\" formControlName=\"PingUserAccess\" name=\"UsreAccess\" required>\n                              <mat-option>--  Select Access --</mat-option>\n                            <mat-option *ngFor=\"let access of AAccess\" [value]=\"access.name\">\n                              {{access.name}}\n                            </mat-option>\n                          </mat-select>\n                          <mat-error>\n                              <span *ngIf=\"!pingUserRoleFrm.get('PingUserAccess').valid && pingUserRoleFrm.get('PingUserAccess').touched\">Please select user access</span>\n                            </mat-error>\n                          <!-- [selected]=\"car.color.id == qlikSenseApps.Appid\" -->\n                        </mat-form-field>\n                      </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-9\">\n                        <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                            <mat-label>User Role</mat-label>\n                          <mat-select placeholder=\"User Role\" formControlName=\"PingRole\" name=\"userRole\" required >\n                              <mat-option>-- Select Role --</mat-option>\n                            <mat-option *ngFor=\"let role of RRole\" [value]=\"role.name\">\n                              {{role.name}}\n                            </mat-option>\n                          </mat-select>\n                          <mat-error>\n                              <span *ngIf=\"!pingUserRoleFrm.get('PingRole').valid && pingUserRoleFrm.get('PingRole').touched\">Please select user role</span>\n                            </mat-error>\n                          <!-- [selected]=\"car.color.id == qlikSenseApps.Appid\" -->\n                        </mat-form-field>\n                        <!-- <form #form>\n                            <div class=\"row\">\n                              <div class=\"col-md-2\">\n                                    <input type=\"file\" name=\"file\" \n                                    class=\"upload\" accept=\"*.csv\" (change)=\"changeListener($event.target.files)\">\n                              </div>\n                            </div>\n                          </form> -->\n                      </div> \n                </div>\n                  \n              </div>\n            </div>\n\n            <!-- <br><br> -->\n          </div>\n      </div>\n        <button type=\"submit\" id=\"save\" class=\"col-md-1\" [disabled]=\"!pingUserRoleFrm.valid\" mat-raised-button >Update</button>\n        <button mat-raised-button id=\"cancel\" class=\"col-md-1\" [routerLink]=\"['/admin/userDetails']\" >Cancel</button>              \n    </form>"

/***/ }),

/***/ "./src/app/Admin/user-register/edit-user-details/edit-user-details.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/Admin/user-register/edit-user-details/edit-user-details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EditUserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserDetailsComponent", function() { return EditUserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../admin.service */ "./src/app/Admin/admin.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditUserDetailsComponent = /** @class */ (function () {
    function EditUserDetailsComponent(route, commanAPI, api, router, formBuilder, snackbar) {
        this.route = route;
        this.commanAPI = commanAPI;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.pingUserID = '';
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
    EditUserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commanAPI.getLoggeddUser().subscribe(function (res) {
            // console.log('route succesfully');
            // console.log(this.route.snapshot.params['id']);
            // this.onEdit(this.route.snapshot.params['id']);
            console.log('test route succesfully');
            console.log(_this.route.snapshot.params['id']);
            _this.onEdit(_this.route.snapshot.params['id']);
        }, function (err) {
            console.log("Session Expired in Edit user");
            _this.router.navigate(['/login']);
        });
        this.pingUserRoleFrm = this.formBuilder.group({
            // PingUserID:[null,Validators.required],
            // PingUserName:[null,Validators.required],
            // PingUserDirectory :[null,Validators.required],
            // PingUserAccess : [null,Validators.required],
            // PingMemberID :'',
            // PingGroupID : '',
            // PingRole : [null,Validators.required],
            // InsertBy : '',
            // EmailID:[null,Validators.required],
            // password:[null,Validators.required],
            PingUserID: '',
            PingUserName: '',
            PingUserDirectory: '',
            PingUserAccess: '',
            PingMemberID: '',
            PingGroupID: '',
            PingRole: '',
            InsertBy: '',
            EmailID: '',
            password: '',
        });
    };
    EditUserDetailsComponent.prototype.onEdit = function (id) {
        var _this = this;
        console.log('In Edit alert');
        console.log(id);
        this.api.getPingUserIDDetails(id).subscribe(function (res) {
            console.log('Get Edit Data');
            console.log(res);
            var id8 = res._id;
            console.log(id8);
            console.log(res.PingUserID);
            console.log(res.PingUserName);
            console.log(res.PingUserDirectory);
            console.log("Deliverto" + res.PingUserID);
            console.log("Data Sourse" + res.PingUserName);
            _this.pingUserRoleFrm.get('PingUserID').setValue(res.PingUserID);
            _this.pingUserRoleFrm.get('PingUserName').setValue(res.PingUserName);
            _this.pingUserRoleFrm.get('PingUserDirectory').setValue(res.PingUserDirectory);
            _this.pingUserRoleFrm.get('PingUserAccess').setValue(res.PingUserAccess);
            _this.pingUserRoleFrm.get('PingMemberID').setValue(res.PingMemberID);
            _this.pingUserRoleFrm.get('PingGroupID').setValue(res.PingGroupID);
            _this.pingUserRoleFrm.get('PingRole').setValue(res.PingRole);
            _this.pingUserRoleFrm.get('InsertBy').setValue(res.InsertBy);
            _this.pingUserRoleFrm.get('EmailID').setValue(res.EmailID);
            _this.pingUserRoleFrm.get('password').setValue(res.password);
            // this.frmAlert.setValue(res.frmCntDataSource);
            //  this.frmAlert.setValue(res.frmCntMeasures.pingMeasuresqLabel);
            //  this.frmAlert.setValue(res.frmCntApplication.AppName);
            //  this.frmAlert.setValue({
            //   frmCntAlertID: res.frmCntAlertID,
            //   frmCntAlertName: res.frmCntAlertName,
            //   frmCntRecipient: res.frmCntRecipient,  
            //   frmCntDeliverTo: res.frmCntDeliverTo,
            //   frmCntDataSource: res.frmCntDataSource,
            //   frmCntMeasures: res.frmCntMeasures,
            //   frmCntApplication: res.frmCntApplication,
            // });
        });
    };
    EditUserDetailsComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        console.log(this.route.snapshot.params['id']);
        this.api.UpdatePingUserRole(this.route.snapshot.params['id'], form)
            .subscribe(function (res) {
            res['_id'] = _this.route.snapshot.params['id'];
            var id = res['_id'];
            _this.snackbar.open('Succesfully updated user Role', 'Close', {
                duration: 3000,
            });
            _this.router.navigate(['admin/userDetails']);
        }, function (err) {
            _this.snackbar.open('Something went wrong...!!', 'Close', {
                duration: 3000,
            });
            console.log(err);
        });
    };
    EditUserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-user-details',
            template: __webpack_require__(/*! ./edit-user-details.component.html */ "./src/app/Admin/user-register/edit-user-details/edit-user-details.component.html"),
            styles: [__webpack_require__(/*! ./edit-user-details.component.css */ "./src/app/Admin/user-register/edit-user-details/edit-user-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], EditUserDetailsComponent);
    return EditUserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Admin/user-register/user-details/user-details.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/Admin/user-register/user-details/user-details.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\n\r\ninput[type=\"file\"] {\r\n    display: none;\r\n  }\r\n\r\n.custom-file-upload {\r\n    border: 1px solid #ccc;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n  }\r\n\r\ntable {\r\n      width: 100%;\r\n      transition: none !important;\r\n      box-shadow: none !important;\r\n      margin-top: -30px;\r\n    }\r\n\r\n.mat-form-field {\r\n      font-size: 14px;\r\n      width: 70%;\r\n    }\r\n\r\n#table-responsive{\r\n      margin-top: 5px;\r\n    }\r\n\r\n#row2{\r\n      margin-top: -2px;\r\n      padding-top: 8px;\r\n      padding-bottom: 10px;\r\n    }\r\n\r\n.table-responsive{\r\n      margin-top: -15px;\r\n      padding-top: 40px;\r\n    }\r\n\r\ntr.mat-header-row{\r\n      height: 37px;\r\n    }\r\n\r\n.table-bordered>thead>tr>th{\r\n      border: 1px solid rgb(231, 76, 60);\r\n    }\r\n\r\n/* Switch Button */\r\n\r\nth{\r\n      padding-top: -100px;\r\n    }\r\n\r\n#th_allign{\r\n      text-align: center;\r\n    }\r\n\r\ntd{\r\n      color: rgb(127, 127, 127)\r\n    }\r\n\r\n.mat-header-cell {\r\n      color: rgb(102,102,102);\r\n    }\r\n\r\nth{\r\n      font-size: 14px;\r\n      background-color: rgb(238, 238, 238);\r\n      /* background-color: rgb(249, 55, 66); */\r\n    \r\n    }\r\n\r\n#btn-danger{\r\n      background-color: rgb(249, 25, 66);\r\n      color: rgb(255, 255, 255)\r\n    }\r\n\r\n* {\r\n    font-family: 'Nunito', 'Glyphicons Halflings';\r\n  }"

/***/ }),

/***/ "./src/app/Admin/user-register/user-details/user-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/Admin/user-register/user-details/user-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n            <div class=\"btn-group btn-breadcrumb \">\n                <a routerLink=\"/pingAlert/alertInbox\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-home\"></i></a>\n                <a class=\"btn btn-default\">Admin</a>\n                <a class=\"btn btn-default\">Users Details</a>\n            </div>\n      </div>\n      <div class=\"col-md-4 pull-right\">\n        <div class=\"input-group\" style=\"float:right\">\n          <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"txtSearch\"/> -->\n          <input class=\"form-control\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\" >\n              <div class=\"input-group-btn\">\n                  <button class=\"btn btn-default\" type=\"submit\">\n                      <span class=\"glyphicon glyphicon-search\"></span>\n                  </button>\n              </div>\n          </div>\n       </div>\n\n\n    </div>\n</div>\n\n<!--\n<div class=\"row\">\n  <div class=\"col-xs-3\"></div>\n  <div class=\"col-xs-4\">\n\n  </div>\n</div> -->\n<br>\n\n\n    <div class=\"container\" id=\"table-responsive\">\n          <div class=\"table-responsive\" >\n              <table mat-table [dataSource]=\"dataSource\" matSort class=\" mat-elevation-z8 table-bordered table-striped\">\n\n                <!-- USerID Column -->\n                <ng-container matColumnDef=\"PingUserID\">\n                <th  mat-header-cell *matHeaderCellDef class=\"text-center\" id=\"th_allign\"> User ID</th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.PingUserID}} </td>\n                </ng-container>\n\n                <!-- USerNAme Column -->\n                <ng-container matColumnDef=\"PingUserName\">\n                <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\"> User Name </th>\n                <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.PingUserName}} </td>\n                </ng-container>\n\n                <!-- Directory Column -->\n                <ng-container matColumnDef=\"PingUserDirectory\">\n                  <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\">User Directory </th>\n                  <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.PingUserDirectory}} </td>\n                  </ng-container> \n                  \n                    <!-- Access Column -->\n                <ng-container matColumnDef=\"PingUserAccess\">\n                  <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\">User Access </th>\n                  <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.PingUserAccess}} </td>\n                  </ng-container> \n\n                    <!-- Role Column -->\n                <ng-container matColumnDef=\"PingRole\">\n                  <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\">Role </th>\n                  <td mat-cell  *matCellDef=\"let element\" >  &nbsp; {{element.PingRole}} </td>\n                  </ng-container> \n\n                    <!-- EmailId Column -->\n                <ng-container matColumnDef=\"EmailID\">\n                  <th mat-header-cell  *matHeaderCellDef class=\"text-center\" id=\"th_allign\">Email Id </th>\n                  <td mat-cell  *matCellDef=\"let element\">  &nbsp; {{element.EmailID}} </td>\n                  </ng-container> \n\n\n                <!-- alertsetTime Column -->\n                <!-- <ng-container matColumnDef=\"Setdate\">\n                <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp; Set date </th>\n                <td mat-cell  *matCellDef=\"let element\">  &nbsp;{{element.alertsetTime | date}} </td>\n                </ng-container> -->\n\n\n                   <!-- alertsetTime Column -->\n               <!-- <ng-container matColumnDef=\"SetTime\">\n                  <th mat-header-cell  *matHeaderCellDef>&nbsp;&nbsp; Set Time </th>\n                  <td mat-cell name=\"SetTime\" *matCellDef=\"let element\">  &nbsp;{{element.alertsetTime | date:\"HH:MM\"}} </td>\n                </ng-container> -->\n\n      <!-- Trigger -->\n\n                <!-- <ng-container matColumnDef=\"trigger\">\n                  <th mat-header-cell *matHeaderCellDef>&nbsp;&nbsp;Trigger  </th> -->\n                 <!-- <td mat-cell *matCellDef=\"let element\"> {{element.trigger}} </td> -->\n                 <!-- <td mat-cell *matCellDef=\"let element\">\n                      <mat-slide-toggle\n                            class=\"example-margin\"\n                            name=\"trigger\"\n                            [color]=\"color\"\n                            [checked]=\"checked\"\n                            [disabled]=\"disabled\"\n                            [(ngModel)]=\"element.trigger\"> {{element.trigger}}\n                      </mat-slide-toggle>\n                   </td>\n                </ng-container> -->\n\n                <!-- Colum Edit/ Delete -->\n                <ng-container matColumnDef=\"edit\">\n                    <th mat-header-cell *matHeaderCellDef class=\"text-center\" id=\"th_allign\">Edit / Delete  </th>\n\n                   <td mat-cell *matCellDef=\"let element\">\n                     <div class=\"row col-lg-offset-3\">\n                       <div class=\"col-md-2\">\n                          <!-- <a routerLink=\"/edit_alert\" style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a> -->\n                          <!-- <a type='submit' [routerLink]=\"['/edit_new',element.id]\" (click)=\"onEdit(element._id)\" style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a> -->\n                          <a class=\"text-center\" type='submit' [routerLink]=\"['/admin/editUserDetails/',element._id]\"  style=\"cursor: pointer;\"><i class=\"glyphicon glyphicon-pencil\" ></i></a>\n\n                        </div>\n                       &nbsp;\n                       <div class=\"col-md-2\">\n                            <a class=\"text-center\" style=\"cursor: pointer;\" (click)=\"deleteUser(element._id)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\n                           <!-- <a mat-raised-button color=\"warn\" (click)=\"deleteAlert(element._id)\"><mat-icon>delete</mat-icon></a> -->\n                        </div>\n                     </div>\n                   </td>\n                 </ng-container>\n                <!-- <ng-container matColumnDef=\"Edit/Delete\">\n                    <th mat-header-cell *matHeaderCellDef>&nbsp;&nbsp;<strong>Edit / Delete</strong>  </th>\n                   <td>\n                     <div class=\"row\">\n                       <div class=\"col-md-2\">\n                        <button class=\"btn btn-primary\"><i class=\"glyphicon glyphicon-pencil\"></i></button>\n                       </div>\n                       <div class=\"col-md-2\">\n                          <button class=\"btn btn-primary\"> <i class=\"glyphicon glyphicon-trash\"></i></button>\n                        </div>\n                     </div>\n                   </td>\n\n                </ng-container> -->\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n          </div>\n\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-1\" >\n              <button \n              mat-raised-button \n              id=\"btn-danger\" \n              [routerLink]=\"['/admin/createUser']\">Create User</button>\n          </div>\n          <div class=\"col-md-2\" style=\"margin-left: 20px;\">\n            <form #form>\n                <!-- <input type=\"file\" mat-raised-button name=\"file\" \n                class=\"upload\" accept=\"*.csv\" (change)=\"changeListener($event.target.files)\" > -->\n                <label matTooltip=\"Upload .CSV file\" for=\"file-upload\" class=\"custom-file-upload\">\n                  <i class=\"glyphicon glyphicon-upload\"></i> Upload Users\n              </label>\n              <input  id=\"file-upload\" type=\"file\" \n              class=\"upload\" \n              accept=\"*.csv\" \n              (change)=\"changeListener($event.target.files)\"/>\n            </form>\n          </div>\n          <div class=\"col-md-2\" style=\"margin-left: 20px;\">\n            <form #form>\n                <!-- <input type=\"file\" mat-raised-button name=\"file\" \n                class=\"upload\" accept=\"*.csv\" (change)=\"changeListener($event.target.files)\" > -->\n                <label matTooltip=\"Upload .CSV file\" (click)='AddQlikUser()' class=\"custom-file-upload\">\n                  <i class=\"glyphicon glyphicon-upload\"></i> Upload Qlik Users\n              </label>\n             \n            </form>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-1\"></div>\n            <div class=\"col-md-2\" style=\"margin-left: 20px;\">\n                <a (click)=\"downloadFile()\" style=\"cursor:pointer; \">Download Template</a>    \n            </div>\n        </div>\n        <div class=\"col-md-12\">\n            <mat-paginator  [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20, 30, 50, 100]\"\n             showFirstLastButtons></mat-paginator>\n        </div>\n      </div>\n  \n\n\n\n"

/***/ }),

/***/ "./src/app/Admin/user-register/user-details/user-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Admin/user-register/user-details/user-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin.service */ "./src/app/Admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { identifier } from '../../../../node_modules/@types/babel-types';


// import { AuthService } from '../../auth/auth.service';
var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(api, commanAPI, router, location, route, snackbar) {
        this.api = api;
        this.commanAPI = commanAPI;
        this.router = router;
        this.location = location;
        this.route = route;
        this.snackbar = snackbar;
        this.displayedColumns = ['PingUserID', 'PingUserName', 'PingUserDirectory', 'PingUserAccess', 'PingRole', 'EmailID', 'edit'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    UserDetailsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commanAPI.getLoggeddUser().subscribe(function (res) {
            _this.api.getPingUsersLoginIDWise(res.PingUserID)
                .subscribe(function (res) {
                _this.InsertBy = res.InsertBy;
                _this.LoginUserID = res.PingUserID;
                // if(res.code == 200){
                console.log("User Details :", res.body);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.body);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
                // }
            }, function (err) {
                console.log(err);
            });
        }, function (res) {
            _this.router.navigate(['/login']);
        });
        this.editPingUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            PingUserID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingUserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingUserDirectory: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingUserAccess: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingMemberID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingGroupID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PingRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            InsertBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            EmailID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            LoginUserID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
        });
    };
    UserDetailsComponent.prototype.changeListener = function (files) {
        var _this = this;
        console.log("*****************" + files + "**************");
        this.commanAPI.getLoggeddUser().subscribe(function (res1) {
            console.log("Res" + JSON.stringify(res1, null, 4));
            if (files && files.length > 0) {
                var file = files.item(0);
                console.log("***File***", file);
                console.log(file.name);
                console.log(file.size);
                console.log(file.type);
                if (file.type == 'text/csv' || file.type == 'application/vnd.ms-excel') {
                    var reader_1 = new FileReader();
                    reader_1.readAsText(file);
                    reader_1.onload = function (e) {
                        var csv = reader_1.result.toString();
                        console.log(csv);
                        var data = { data: csv, InsertBy: res1.PingUserName, LoginUserID: res1.PingUserID };
                        _this.api.postFileUpload(data)
                            .subscribe(function (res) {
                            console.log("Bulk Upload STatus" + res);
                            _this.snackbar.open('Succesfully submitted user details', 'Close', {
                                duration: 3000,
                            });
                        }, function (err) {
                            console.log(err);
                            _this.snackbar.open('Something went wrong..!!', 'Close', {
                                duration: 3000,
                            });
                        });
                    };
                }
                else {
                    console.log("File type is not appropriate format");
                    _this.snackbar.open('File type is not appropriate format please upload CSV format file', 'Close', {
                        duration: 3000,
                    });
                }
            }
        });
    };
    // Edit User
    UserDetailsComponent.prototype.onEdit = function (id) {
        var _this = this;
        console.log('In Edit User');
        console.log(id);
        this.api.getPingUserIDDetails(id)
            .subscribe(function (res) {
            console.log(res);
            _this.PingUserID = id;
        });
    };
    // delete User
    UserDetailsComponent.prototype.deleteUser = function (id) {
        var _this = this;
        console.log('In Delete User');
        console.log(id);
        this.ngOnInit();
        this.api.deletePingUserNew(id)
            .subscribe(function (res) {
            console.log('ping user new Data');
            _this.ngOnInit();
            _this.api.getPingUsersNew()
                .subscribe(function (res) {
                _this.snackbar.open('Succesfully deleted user', 'Close', {
                    duration: 3000,
                });
                console.log(res);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }, function (err) {
                console.log(err);
            });
            // this.api.getPingUsersNew()
            // .subscribe( res => {
            //   console.log('ping user new Data');
            //   console.log(res);
            //   this.snackbar.open('Succesfully deleted user', 'Close', {
            //     duration: 3000,
            //   });
            //   this.dataSource = new MatTableDataSource(res);
            //   this.dataSource.sort = this.sort;
            //   this.dataSource.paginator = this.paginator;
            // }, err => {
            //   console.log(err);
            // });
            // this.router.navigateByUrl("/alert_Inbox");
            // this.router.navigate(['/alert_examples']);
        }, function (err) {
            console.log(err);
        });
    };
    //File Donwload Template
    UserDetailsComponent.prototype.downloadFile = function () {
        var link = document.createElement("a");
        link.download = "PingUserRole.csv";
        link.href = "assets/PingUserRole.csv";
        link.click();
    };
    UserDetailsComponent.prototype.AddQlikUser = function () {
        var _this = this;
        console.log("Label Qliked");
        this.api.fetchQlikUsers().subscribe(function (res) {
            _this.snackbar.open("Qlik Users Added Successfully", 'Close', {
                duration: 2000,
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UserDetailsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], UserDetailsComponent.prototype, "sort", void 0);
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/Admin/user-register/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/Admin/user-register/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Admin/user-register/user-register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Admin/user-register/user-register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#edit{\r\n    background-color:rgb(231, 76, 60);\r\n    padding-top: 14px;\r\n}\r\n\r\n#cancel{\r\n    margin-left: 5px;\r\n}\r\n\r\n#hide{\r\n    visibility: hidden;\r\n}\r\n\r\n.btn-primary{\r\n    margin-left: 40%;\r\n}\r\n\r\n#container1{\r\n    border: 1px solid rgb(236, 235, 235);\r\n    margin-left:13%\r\n}\r\n\r\n/* #margin{\r\n    margin-left: 10% ;\r\n} */\r\n\r\n#save{\r\n  background-color:rgb(249, 25, 66);\r\n  color: white;\r\n  margin-left: 10px;\r\n}\r\n\r\n.example-form {\r\n    min-width: 80px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n.example-full-width:nth-last-child() {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n.button-row {\r\n    margin: 10px 0;\r\n  }\r\n\r\n.text-white{\r\n    color: white;\r\n}\r\n "

/***/ }),

/***/ "./src/app/Admin/user-register/user-register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Admin/user-register/user-register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br><br><br><br>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n          <div class=\"btn-group btn-breadcrumb \">\n              <a routerLink=\"/pingAlert/alertInbox\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-home\"></i></a>\n              <a class=\"btn btn-default\">Admin</a>\n              <a routerLink=\"/UserRoleDetails\" class=\"btn btn-default\">User Management</a>\n              <a class=\"btn btn-default active\">Create/Edit User</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n    <br>\n    <form [formGroup]=\"QlikServer\" (ngSubmit)=\"onFormSubmit(QlikServer.value)\">\n      <div class=\"col-md-1\"></div>\n      <div class=\"col-md-9 \">\n          <div class=\"panel panel-default\">\n              <div class=\"panel-body\">\n                 <div class=\"col-md-6\">\n                  <div class=\"row\">\n                      <!-- <div class=\"col-lg-1 pull-left\"><mat-icon>person_add</mat-icon></div>\n                      <div class=\"col-lg-11\"><h5>Please enter the user details below: </h5></div> -->\n                    </div>\n                      \n                      <div *ngIf=\"HideField\" class=\"col-md-9\">           \n                        \n                          <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n                              <mat-label>User ID </mat-label>\n                              <!-- <span matPrefix><mat-icon matPrefix>edit_attributes</mat-icon>&nbsp;</span> -->\n                              <input required matInput placeholder=\"Enter User ID\" formControlName=\"PingUserID\"\n                                     [errorStateMatcher]=\"matcher\">\n                                     <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->                         \n                              <mat-error>\n                                <span *ngIf=\"!QlikServer.get('PingUserID').valid && QlikServer.get('PingUserID').touched\">Please enter User ID</span>\n                              </mat-error>\n                            </mat-form-field>\n                      </div>\n                      <div class=\"col-md-9\">\n                          <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                              <mat-label>User Name </mat-label>\n                              <!-- <span matPrefix><mat-icon matPrefix>edit</mat-icon> &nbsp;</span> -->\n                              <input required matInput placeholder=\"Enter User Name\" formControlName=\"PingUserName\"\n                                     [errorStateMatcher]=\"matcher\">\n                              <mat-error>\n                                <span *ngIf=\"!QlikServer.get('PingUserName').valid && QlikServer.get('PingUserName').touched\">Please enter User Name</span>\n                              </mat-error>\n                            </mat-form-field>\n                      </div>  \n\n                    <!-- Password -->\n                     <div class=\"col-md-9\">           \n                        \n                      <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n                          <mat-label>Password</mat-label>\n                          <!-- <span matPrefix><mat-icon matPrefix>edit_attributes</mat-icon>&nbsp;</span> -->\n                          <input required type=\"password\" matInput placeholder=\"Enter Password\" formControlName=\"password\"\n                                 [errorStateMatcher]=\"matcher\">\n                                 <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n                                 \n                          <mat-error>\n                            <span *ngIf=\"!QlikServer.get('password').valid && QlikServer.get('password').touched\">Please enter user password</span>\n                          </mat-error>\n                        </mat-form-field>\n                      </div>\n\n\n                      <div class=\"col-md-9\">\n                          <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                              <mat-label>User Directory </mat-label>\n                              <!-- <span matPrefix>+1 &nbsp;</span> -->\n                              <input required matInput placeholder=\"Enter User Directory\" formControlName=\"PingUserDirectory\"\n                                     [errorStateMatcher]=\"matcher\">\n                              <mat-error>\n                                <span *ngIf=\"!QlikServer.get('PingUserDirectory').valid && QlikServer.get('PingUserDirectory').touched\">Please enter User Directory</span>\n                              </mat-error>\n                            </mat-form-field>\n                      </div>\n                     \n                      \n                      <!-- EmailId -->\n                      <div class=\"col-md-9\">           \n                        <mat-form-field class=\"example-full-width\" appearance=\"fill\" >\n                            <mat-label>Email Id</mat-label>\n                            <!-- <span matPrefix><mat-icon matPrefix>edit_attributes</mat-icon>&nbsp;</span> -->\n                           <input required matInput placeholder=\"Enter Email Id\" formControlName=\"EmailID\"\n                            [errorStateMatcher]=\"matcher\">  \n                                   <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->       \n                            <mat-error>\n                              <span *ngIf=\"!QlikServer.get('EmailID').valid && QlikServer.get('EmailID').touched\">Please enter User Email ID</span>\n                            </mat-error>\n                          </mat-form-field>\n                    </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"row\">\n                    <div class=\"col-md-9\">\n                        <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                            <mat-label>User Access </mat-label>\n                          <mat-select required placeholder=\"User Access\" formControlName=\"PingUserAccess\" name=\"UsreAccess\" required>\n                              <mat-option>--  Select Access --</mat-option>\n                            <mat-option *ngFor=\"let access of AAccess\" [value]=\"access.name\">\n                              {{access.name}}\n                            </mat-option>\n                          </mat-select>\n                          <mat-error>\n                              <span *ngIf=\"!QlikServer.get('PingUserAccess').valid && QlikServer.get('PingUserAccess').touched\">Please select user access</span>\n                            </mat-error>\n                          <!-- [selected]=\"car.color.id == qlikSenseApps.Appid\" -->\n                        </mat-form-field>\n                      </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-9\">\n                        <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n                            <mat-label>User Role</mat-label>\n                          <mat-select required placeholder=\"User Role\" formControlName=\"PingRole\" name=\"userRole\" required >\n                              <mat-option>-- Select Role --</mat-option>\n                            <mat-option *ngFor=\"let role of RRole\" [value]=\"role.name\">\n                              {{role.name}}\n                            </mat-option>\n                          </mat-select>\n                          <mat-error>\n                              <span *ngIf=\"!QlikServer.get('PingRole').valid && QlikServer.get('PingRole').touched\">Please select user role</span>\n                            </mat-error>\n                          <!-- [selected]=\"car.color.id == qlikSenseApps.Appid\" -->\n                        </mat-form-field>\n                      </div> \n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-md-9\">\n                        <!-- <input type=\"number\"\n                        class=\"form-control\"\n                          ng2TelInput\n                          [ng2TelInputOptions]=\"{initialCountry: 'in'}\"\n                          (hasError)=\"hasError($event)\"\n                          (ng2TelOutput)=\"getNumber($event)\"\n                          (intlTelInputObject)=\"telInputObject($event)\"\n                          (countryChange)=\"onCountryChange($event)\" /> -->\n                          <input type=\"number\"\n                        class=\"form-control\"\n                          ng2TelInput\n                          [ng2TelInputOptions]=\"{initialCountry: 'in'}\"\n                          (hasError)=\"hasError($event)\"\n                          (ng2TelOutput)=\"getNumber($event)\"\n                          (countryChange)=\"onCountryChange($event)\" />\n                    </div>\n                </div>\n                  \n              </div>\n            </div>\n\n            <!-- <br><br> -->\n          </div>\n      </div>\n      \n        <div class=\"col-md-5\"></div>\n        <button type=\"submit\" id=\"save\" class=\"col-md-1\" [disabled]=\"!QlikServer.valid\" mat-raised-button >Save</button>\n        <button mat-raised-button id=\"cancel\" class=\"col-md-1\" [routerLink]=\"['/admin/userDetails']\" >Cancel</button>\n    </form>\n\n\n\n"

/***/ }),

/***/ "./src/app/Admin/user-register/user-register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Admin/user-register/user-register.component.ts ***!
  \****************************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin.service */ "./src/app/Admin/admin.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent(router, commanApi, api, formBuilder, snackbar) {
        this.router = router;
        this.commanApi = commanApi;
        this.api = api;
        this.formBuilder = formBuilder;
        this.snackbar = snackbar;
        this.PingUserID = '';
        this.PingUserName = '';
        this.PingUserDirectory = '';
        this.PingUserAccess = '';
        this.PingMemberID = '';
        this.PingGroupID = '';
        this.PingRole = '';
        this.EmailID = '';
        this.password = '';
        this.InsertBy = '';
        this.usercount = '';
        this.count = 0;
        this.LoginUserID = 'User8';
        this.userID = '';
        this.uID = '';
        this.AAccess = [
            { id: 1, name: 'Use Qlik Security' },
            { id: 2, name: 'Manage in Ping' }
        ];
        this.HideField = false;
        this.RRole = [
            { id: 2, name: 'Administrator' },
            { id: 3, name: 'Connnection Manager' },
            { id: 4, name: 'User' }
        ];
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
        // this.myForm = new FormGroup ({
        //   Access: new FormControl()
        // });
        // this.api.getPingUsers()
        // .subscribe(res => {
        //   console.log(res);
        //   this.count=res.length;
        //   this.count=this.count+1;
        //   this.userID = 'User' + this.count ;
        //   this.uID = this.QlikServer.get('PingUserID').setValue(this.userID);
        var _this = this;
        // }, err => {
        //   console.log(err);
        //   this.usercount='0';
        // });
        // this.usercount=usersCnt
        this.commanApi.getLoggeddUser().subscribe(function (res) {
            _this.QlikServer.get('InsertBy').setValue(res.InsertBy);
            _this.QlikServer.get('LoginUserID').setValue(res.PingUserID);
        }, function (err) {
            console.log("err");
            console.log(err);
            _this.router.navigate(['/login']);
        });
        this.QlikServer = this.formBuilder.group({
            // id: '',
            PingUserID: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PingUserName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PingUserDirectory: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PingUserAccess: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.AAccess, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            EmailID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PingMemberID: '1',
            PingGroupID: '1',
            PingRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.RRole, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            InsertBy: '',
            LoginUserID: '',
        });
    };
    UserRegisterComponent.prototype.hasError = function (e) {
    };
    UserRegisterComponent.prototype.getNumber = function (e) { };
    UserRegisterComponent.prototype.onCountryChange = function (e) { };
    UserRegisterComponent.prototype.changeListener = function (files) {
        var _this = this;
        console.log("*****************" + files + "**************");
        if (files && files.length > 0) {
            var file = files.item(0);
            console.log("***File***", file);
            console.log(file.name);
            console.log(file.size);
            console.log(file.type);
            if (file.type == 'text/csv') {
                var reader_1 = new FileReader();
                reader_1.readAsText(file);
                reader_1.onload = function (e) {
                    var csv = reader_1.result.toString();
                    console.log(csv);
                    var data = { data: csv };
                    _this.api.postFileUpload(data)
                        .subscribe(function (res) {
                        console.log(res);
                        _this.snackbar.open('Succesfully submitted user details', 'Close', {
                            duration: 3000,
                        });
                    }, function (err) {
                        console.log(err);
                        _this.snackbar.open('Something went wrong..!!', 'Close', {
                            duration: 3000,
                        });
                    });
                };
            }
            else {
                console.log("File type is not appropriate format");
                this.snackbar.open('File type is not appropriate format please upload CSV format file', 'Close', {
                    duration: 3000,
                });
            }
        }
    };
    UserRegisterComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        console.log('Form Submited ', form);
        this.api.postPingUserDetails(form)
            .subscribe(function (res) {
            //let id = res['_id'];
            console.log(res);
            _this.snackbar.open(res.msg, 'Close', {
                duration: 6000,
            });
            _this.router.navigate(['/admin/userDetails']);
            console.log("Successfully Record Saved....");
        }, function (err) {
            if (err.error.length > 1) {
                _this.snackbar.open('Something went wrong..!!', 'Close', {
                    duration: 3000,
                });
            }
            else {
                _this.snackbar.open(err.error[0].msg, 'Close', {
                    duration: 5000,
                });
            }
        });
    };
    UserRegisterComponent.prototype.reset = function () {
        this.form.nativeElement.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", Object)
    ], UserRegisterComponent.prototype, "form", void 0);
    UserRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-register',
            template: __webpack_require__(/*! ./user-register.component.html */ "./src/app/Admin/user-register/user-register.component.html"),
            styles: [__webpack_require__(/*! ./user-register.component.css */ "./src/app/Admin/user-register/user-register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], _admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Admin-admin-module.js.map