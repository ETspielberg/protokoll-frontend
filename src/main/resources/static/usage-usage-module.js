(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usage-usage-module"],{

/***/ "./src/app/usage/usage.component.html":
/*!********************************************!*\
  !*** ./src/app/usage/usage.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{'title.usage' | translate}}</h2>\r\n<p-table #dusage [value]=\"filterService.selectedDigitalUsage | keyvalue\" [rows]=\"10\" [paginator]=\"true\"\r\n             [rowsPerPageOptions]=\"[10,20,50]\">\r\n  <ng-template pTemplate=\"caption\">\r\n    <div class=\"ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"pi pi-table\" iconPos=\"left\" label=\"Export\" (click)=\"dusage.exportCSV()\" style=\"float:left\"></button>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\">\r\n    <tr>\r\n      <th>{{'year' | translate}}</th>\r\n      <th>{{'month' | translate}}</th>\r\n      <th>{{'usage.totalRequests' | translate}}</th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-usage>\r\n    <tr>\r\n      <td>{{usage.year}}</td>\r\n      <td>{{usage.month}}</td>\r\n      <td>{{usage.totalRequests}}</td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n"

/***/ }),

/***/ "./src/app/usage/usage.component.ts":
/*!******************************************!*\
  !*** ./src/app/usage/usage.component.ts ***!
  \******************************************/
/*! exports provided: UsageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsageComponent", function() { return UsageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/filter.service */ "./src/app/service/filter.service.ts");



var UsageComponent = /** @class */ (function () {
    function UsageComponent(filterService) {
        this.filterService = filterService;
    }
    UsageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usage',
            template: __webpack_require__(/*! ./usage.component.html */ "./src/app/usage/usage.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"]])
    ], UsageComponent);
    return UsageComponent;
}());



/***/ }),

/***/ "./src/app/usage/usage.module.ts":
/*!***************************************!*\
  !*** ./src/app/usage/usage.module.ts ***!
  \***************************************/
/*! exports provided: UsageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsageModule", function() { return UsageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _translate_translate_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translate/translate.module */ "./src/app/translate/translate.module.ts");
/* harmony import */ var _usage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usage.component */ "./src/app/usage/usage.component.ts");
/* harmony import */ var _usage_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usage.routing */ "./src/app/usage/usage.routing.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);








var UsageModule = /** @class */ (function () {
    function UsageModule() {
    }
    UsageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                _translate_translate_module__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                _usage_routing__WEBPACK_IMPORTED_MODULE_5__["usageRouting"]],
            declarations: [_usage_component__WEBPACK_IMPORTED_MODULE_4__["UsageComponent"]],
            exports: [_usage_component__WEBPACK_IMPORTED_MODULE_4__["UsageComponent"]],
            providers: []
        })
    ], UsageModule);
    return UsageModule;
}());



/***/ }),

/***/ "./src/app/usage/usage.routing.ts":
/*!****************************************!*\
  !*** ./src/app/usage/usage.routing.ts ***!
  \****************************************/
/*! exports provided: usageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usageRouting", function() { return usageRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usage.component */ "./src/app/usage/usage.component.ts");


var routes = [
    { path: '', component: _usage_component__WEBPACK_IMPORTED_MODULE_1__["UsageComponent"] }
];
var usageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=usage-usage-module.js.map