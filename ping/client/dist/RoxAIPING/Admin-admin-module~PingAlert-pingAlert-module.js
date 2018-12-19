(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Admin-admin-module~PingAlert-pingAlert-module"],{

/***/ "./src/app/PingAlert/ping-alert.service.ts":
/*!*************************************************!*\
  !*** ./src/app/PingAlert/ping-alert.service.ts ***!
  \*************************************************/
/*! exports provided: PingAlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PingAlertService", function() { return PingAlertService; });
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




var pingAlertApi = "/pingAlert";
var QlikSenseMeasuresUrl = "/QlikSenseMeasures";
var QlikSenseUrl = "/QlikSense";
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PingAlertService = /** @class */ (function () {
    function PingAlertService(http) {
        this.http = http;
    }
    PingAlertService.prototype.handleError = function (error) {
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
    PingAlertService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    //#region All CRUD Operation's
    PingAlertService.prototype.getAlerts = function () {
        return this.http.get(pingAlertApi, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.getLoginIDWiseAlerts = function (id) {
        console.log('in service APi', id);
        var loginURL = "/pingAlert/LoggedUserWiseAlertData";
        var url = loginURL + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.getLoginIDWiseAlertsHistory = function (id) {
        console.log('in service APi', id);
        var AlertHistory = "/history/LoggedUserWiseAlertHistoryData";
        var url = AlertHistory + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.getHistory = function (userId) {
        // const httpOptions1 = {
        //   headers: new HttpHeaders({'Token': localStorage.getItem('jwtToken')})
        // };
        var URL = "/history/userId";
        return this.http.get(URL, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.getAlertHistroy = function (id) {
        var URL = "/history";
        var url = URL + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // Total Alert Count
    PingAlertService.prototype.getAlertsMax = function () {
        return this.http.get(pingAlertApi + '/count', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    //Get Alert max count 
    PingAlertService.prototype.getAlertsMaxCount = function (searchDate) {
        var URL = pingAlertApi + "/maxCountMonth";
        var url = URL + "/" + searchDate;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.getAlert = function (id) {
        var url = pingAlertApi + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.postAlert = function (data) {
        console.log('-------------', data);
        var caty = this.http.post(pingAlertApi, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        console.log('Caty.....', caty);
        return caty;
        // return this.http.post(pingAlertApi, data, httpOptions)
        //   .pipe(
        //     catchError(this.handleError)
        //   );
    };
    //Edit Alert 
    PingAlertService.prototype.updateAlert = function (id, data) {
        var url = pingAlertApi + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // tigger true or false
    PingAlertService.prototype.updatetriggerAlert = function (data) {
        var url = pingAlertApi + "/trigger/" + data.id;
        console.log(data);
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.deleteAlert = function (id) {
        var url = pingAlertApi + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.deleteAlertIsActive = function (id) {
        var isActive = 'IsActive';
        console.log('deleteAlertIsActive TS FIle....');
        var url = pingAlertApi + "/" + isActive + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    //#region QlikSense Object's
    PingAlertService.prototype.getQlikSenseObject = function (qlikUserDetail) {
        // const httpOptions1 = {
        //   headers: new HttpHeaders({user_directory :qlikUserDetail.user_directory,
        //     user_name :qlikUserDetail.user_name ,
        //     origin : qlikUserDetail.origin})
        // };
        return this.http.get(QlikSenseUrl + '/', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.CreateSession = function () {
        return this.http.get(QlikSenseMeasuresUrl + '/', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.getNumFormat = function (data) {
        var NumFormateURl = "NumFormate";
        return this.http.post(NumFormateURl, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.getMeasures = function (getMesValue) {
        return this.http.post(QlikSenseMeasuresUrl + '/getMeasureValue', getMesValue, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.getDiamention = function (getMesValue) {
        return this.http.post(QlikSenseMeasuresUrl + '/getDiamentionValue', getMesValue, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.getFielddValue = function (getMesValue) {
        return this.http.post(QlikSenseMeasuresUrl + '/getFielddValue', getMesValue, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.getFilter = function (putValue) {
        return this.http.post(QlikSenseMeasuresUrl + '/getFilterValue', putValue, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.sendMail = function (data, mailby) {
        var httpOptionsMail = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'ping-mail-by': mailby
            })
        };
        // console.log("###***********"+data);
        var sendMailURL = "/sendMail";
        return this.http.post(sendMailURL, data, httpOptionsMail)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    //edited Mail Send...
    PingAlertService.prototype.sendMailEdited = function (data, mailby) {
        var httpOptionsMail = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'ping-mail-by': mailby
            })
        };
        // console.log("###***********"+data);
        var sendMailURL = "/sendMail/editAlertMail";
        return this.http.post(sendMailURL, data, httpOptionsMail)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.ValidateEmailID = function (data) {
        console.log("In Validate Email ID" + data);
        var sendMailURL = "/sendMail/ValidateID";
        return this.http.post(sendMailURL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.ValidateEmailServer = function (data) {
        console.log("In Validate Email ID" + data);
        var sendMailURL = "/TestMailServer";
        return this.http.post(sendMailURL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.setSheduled = function (data) {
        console.log(data);
        var SetSheduledURL = "/SetSheduled";
        return this.http.post(SetSheduledURL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.setSheduledDia = function (data) {
        console.log(data);
        var SetSheduledURL = "/SetSheduled/Diamention";
        return this.http.post(SetSheduledURL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService.prototype.setSheduledFilter = function (data) {
        console.log(data);
        var SetSheduledURL = "/SetSheduled/Filter";
        return this.http.post(SetSheduledURL, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    //#endregion
    //region  ping User creationb Details
    //MobileNotify
    PingAlertService.prototype.getMobileNotify = function (EmailID) {
        var httpOptions1 = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Token': EmailID })
        };
        return this.http.get(pingAlertApi + '/MobileNotify', httpOptions1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    //#endregion
    PingAlertService.prototype.DecodeUserToken = function () {
        // console.log('In ping Decode User verify function',localStorage.getItem('jwtToken'));
        //console.log(data);
        var ValidToken1 = localStorage.getItem('jwtToken');
        console.log("Validated Token is If Condition" + ValidToken1);
        if (ValidToken1 != null) {
            console.log("Validated Token is If Condition" + ValidToken1);
            var httpOptions1 = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'x-access-token': ValidToken1
                })
            };
            var url = '/PingComman/decodeUserToken';
            return this.http.get(url, httpOptions1)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
        else {
            console.log("Validated Token is else Condition" + ValidToken1);
            //  return null;
        }
    };
    PingAlertService.prototype.onEdit = function (id) {
        var _this = this;
        var url = pingAlertApi + "/" + id;
        // console.log(url);
        return this.http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData, function () {
            console.log(_this.extractData);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PingAlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PingAlertService);
    return PingAlertService;
}());



/***/ })

}]);
//# sourceMappingURL=Admin-admin-module~PingAlert-pingAlert-module.js.map