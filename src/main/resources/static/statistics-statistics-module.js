(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["statistics-statistics-module"],{

/***/ "./src/app/model/Statistics.ts":
/*!*************************************!*\
  !*** ./src/app/model/Statistics.ts ***!
  \*************************************/
/*! exports provided: Statistics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Statistics", function() { return Statistics; });
var Statistics = /** @class */ (function () {
    function Statistics(year, daysStock, daysLoaned, daysRequested, numberLoans, numberRequests, numberCald) {
        this.year = year;
        this.daysStock = daysStock;
        this.daysLoaned = daysLoaned;
        this.daysRequested = daysRequested;
        this.numberLoans = numberLoans;
        this.numberRequests = numberRequests;
        this.numberCald = numberCald;
    }
    return Statistics;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.component.html":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{'title.statistics' | translate}}</h2>\r\n<p-table #dstat [value]=\"statisticsList\" [rows]=\"10\"\r\n              [paginator]=\"true\" [rowsPerPageOptions]=\"[10,20,50]\" sortField=\"year\" [sortOrder]=\"-1\">\r\n  <ng-template pTemplate=\"caption\">\r\n    <div class=\"ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"pi pi-table\" iconPos=\"left\" label=\"Export\" (click)=\"dstat.exportCSV()\" style=\"float:left\"></button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate=\"header\">\r\n    <tr>\r\n      <th>{{'year' | translate}}</th>\r\n      <th>{{'statistics.averageLoan' | translate}}</th>\r\n      <th>{{'statistics.numberRequests' | translate}}</th>\r\n      <th>{{'statistics.numberLoans' | translate}}</th>\r\n      <th>{{'statistics.numberCald' | translate}}</th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-statistic>\r\n    <tr>\r\n      <td>{{statistic.year}}</td>\r\n      <td>{{(statistic.daysLoaned / statistic.daysStock) | percent:'1.0-1'}}</td>\r\n      <td>{{statistic.numberRequests}}</td>\r\n      <td>{{statistic.numberLoans}}</td>\r\n      <td>{{statistic.numberCald}}</td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n"

/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Statistics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/Statistics */ "./src/app/model/Statistics.ts");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");




var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(dataService) {
        this.dataService = dataService;
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.dataChanged$.subscribe(function (changed) { return _this.reset(); });
        this.reset();
    };
    StatisticsComponent.prototype.reset = function () {
        this.statistics = new Map();
        this.statisticsList = [];
        var stocks = this.dataService.printData.get('stock');
        if (typeof stocks !== 'undefined') {
            var requests = this.dataService.printData.get('requests');
            var oldDate = new Date(stocks[0][0]);
            var year = void 0;
            if (typeof requests !== 'undefined') {
                var oldRequestsDate = new Date(requests[0][0]);
                year = Math.min(oldDate.getFullYear(), oldRequestsDate.getFullYear());
            }
            else {
                year = Math.min(oldDate.getFullYear());
            }
            var actualYear = new Date().getFullYear();
            while (year <= actualYear) {
                this.statistics.set(year, new _model_Statistics__WEBPACK_IMPORTED_MODULE_2__["Statistics"](year, 0, 0, 0, 0, 0, 0));
                year++;
            }
            this.calculateStatistics();
        }
    };
    StatisticsComponent.prototype.calculateStatistics = function () {
        var _this = this;
        var actualYear = new Date().getFullYear();
        this.fillAnalysisFields(this.dataService.printData, 'loans', actualYear);
        this.fillAnalysisFields(this.dataService.printData, 'cald', actualYear);
        this.fillAnalysisFields(this.dataService.printData, 'stock', actualYear);
        this.fillAnalysisFields(this.dataService.printData, 'requests', actualYear);
        this.statistics.forEach(function (entry) { return _this.statisticsList.push(entry); });
    };
    StatisticsComponent.prototype.fillAnalysisFields = function (plotData, type, actualYear) {
        var series = plotData.get(type);
        if (series === undefined) {
            return;
        }
        else if (series.length === 0) {
            return;
        }
        var oldDatapoint = series[0];
        var amount;
        for (var i = 0; i < series.length; i++) {
            var stat = void 0;
            var startDate = new Date(oldDatapoint[0]);
            var year = startDate.getFullYear();
            var finalEndDate = void 0;
            if (i === series.length - 1) {
                finalEndDate = new Date();
            }
            else {
                finalEndDate = new Date(series[i][0]);
            }
            actualYear = finalEndDate.getFullYear();
            while (year < actualYear) {
                var endDate = new Date().setFullYear(year, 12, 31);
                stat = this.statistics.get(year);
                amount = (endDate.valueOf() - startDate.valueOf()) * oldDatapoint[1] / (1000 * 3600 * 24);
                if (type === 'stock') {
                    stat.daysStock += amount;
                }
                else if (type === 'requests') {
                    stat.daysRequested += amount;
                }
                else if (type === 'loans') {
                    stat.daysLoaned += amount;
                }
                year++;
                startDate.setFullYear(year, 1, 1);
            }
            stat = this.statistics.get(year);
            if (typeof series[i][1] !== 'undefined') {
                if ((series[i][1] - oldDatapoint[1]) > 0) {
                    if (type === 'requests') {
                        stat.numberRequests++;
                    }
                    else if (type === 'loans') {
                        stat.numberLoans++;
                    }
                    else if (type === 'cald') {
                        stat.numberCald++;
                    }
                }
            }
            amount = (finalEndDate.valueOf() - startDate.valueOf()) * oldDatapoint[1] / (1000 * 3600 * 24);
            if (type === 'stock') {
                stat.daysStock += amount;
            }
            else if (type === 'loans') {
                stat.daysLoaned += amount;
            }
            else if (type === 'requests') {
                stat.daysRequested += amount;
            }
            oldDatapoint = series[i];
        }
    };
    StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/statistics/statistics.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.module.ts":
/*!*************************************************!*\
  !*** ./src/app/statistics/statistics.module.ts ***!
  \*************************************************/
/*! exports provided: StatisticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsModule", function() { return StatisticsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _translate_translate_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translate/translate.module */ "./src/app/translate/translate.module.ts");
/* harmony import */ var _statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _statistics_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statistics.routing */ "./src/app/statistics/statistics.routing.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);








var StatisticsModule = /** @class */ (function () {
    function StatisticsModule() {
    }
    StatisticsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                _translate_translate_module__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                _statistics_routing__WEBPACK_IMPORTED_MODULE_5__["statisticsRouting"]],
            declarations: [_statistics_component__WEBPACK_IMPORTED_MODULE_4__["StatisticsComponent"]],
            exports: [_statistics_component__WEBPACK_IMPORTED_MODULE_4__["StatisticsComponent"]],
            providers: []
        })
    ], StatisticsModule);
    return StatisticsModule;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/statistics/statistics.routing.ts ***!
  \**************************************************/
/*! exports provided: statisticsRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statisticsRouting", function() { return statisticsRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _statistics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statistics.component */ "./src/app/statistics/statistics.component.ts");


var routes = [
    { path: '', component: _statistics_component__WEBPACK_IMPORTED_MODULE_1__["StatisticsComponent"] }
];
var statisticsRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=statistics-statistics-module.js.map