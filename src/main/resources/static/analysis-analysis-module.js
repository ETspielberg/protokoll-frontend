(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analysis-analysis-module"],{

/***/ "./node_modules/primeng/dialog.js":
/*!****************************************!*\
  !*** ./node_modules/primeng/dialog.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/dialog/dialog */ "./node_modules/primeng/components/dialog/dialog.js"));

/***/ }),

/***/ "./src/app/analysis/analysis.component.html":
/*!**************************************************!*\
  !*** ./src/app/analysis/analysis.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{'title.analysis' | translate}}</h2>\r\n<p-dialog *ngIf=\"memorylistService.activeMemorylistItem.titleActions\" [(visible)]=\"show['dialog']\">\r\n  <p-header>\r\n    {{'task' | translate}}\r\n  </p-header>\r\n  <p-table [value]=\"memorylistService.activeMemorylistItem.titleActions\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>{{'action' | translate}}</th>\r\n        <th>{{'shelfmark' | translate}}</th>\r\n        <th>{{'number' | translate}}</th>\r\n        <th>{{'collection.from' | translate}}</th>\r\n        <th>{{'collection.to' | translate}}</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-action>\r\n      <tr>\r\n        <td>{{action.actionType}}</td>\r\n        <td>{{action.shelfmark}}</td>\r\n        <td>\r\n          <p-spinner [min]=\"0\" [max]=\"filterService.statsCollection.get(action.collectionFrom)\" [(ngModel)]=\"action.number\"></p-spinner>\r\n        </td>\r\n        <td><p-dropdown [options]=\"collectionOptions\" [(ngModel)]=\"action.collectionFrom\"></p-dropdown></td>\r\n        <td pEditableColumn>\r\n          <p-cellEditor>\r\n            <ng-template pTemplate=\"input\">\r\n              <input pInputText type=\"text\" [(ngModel)]=\"action.collectionTo\">\r\n            </ng-template>\r\n            <ng-template pTemplate=\"output\">\r\n              {{action.collectionTo}}\r\n            </ng-template>\r\n          </p-cellEditor>\r\n        </td>\r\n        <td><button pButton type=\"button\" (click)=\"memorylistService.removeTitleAction(action)\"></button></td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n  <p-footer>\r\n    <button style=\"float: left;\" class=\"ui-button-warning\" type=\"button\" pButton (click)=\"show['deletionDialog'] = false\"\r\n            label=\"{{'ok' | translate}}\" icon=\"pi pi-table\" [disabled]=\"memorylistService.activeMemorylistItem.titleActions.length == 0\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-8\">\r\n    <p>{{'analysis.description.short' | translate}}</p>\r\n    <p-table #danalysis [value]=\"analyses\" selectionMode=\"single\" [(selection)]=\"activeAnalysis\"\r\n             sortField=\"year\" [sortOrder]=\"1\" dataKey=\"years\"\r\n             (onRowSelect)=\"calculateDeletionProposal()\">\r\n      <ng-template pTemplate=\"caption\">\r\n        <div class=\"ui-helper-clearfix\">\r\n          <button type=\"button\" pButton icon=\"pi pi-table\" iconPos=\"left\" label=\"Export\" (click)=\"danalysis.exportCSV()\"\r\n                  style=\"float:left\" ></button>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th>{{'years' | translate}}</th>\r\n          <th>{{'max.loans' | translate}}</th>\r\n          <th>{{'last.stock' | translate}}</th>\r\n          <th>{{'unused.items' | translate}}</th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-analysis>\r\n        <tr [pSelectableRow]=\"analysis\">\r\n          <td>{{analysis.years}}</td>\r\n          <td>{{analysis.maxLoansAbs}}</td>\r\n          <td>{{analysis.lastStock}}</td>\r\n          <td>{{analysis.lastStock - analysis.maxLoansAbs}}</td>\r\n        </tr>\r\n      </ng-template>\r\n\r\n    </p-table>\r\n\r\n  </div>\r\n  <div class=\"ui-g-4\" *ngIf=\"activeAnalysis\">\r\n\r\n    <p>In den letzten {{activeAnalysis.years}} Jahren wurden von den vorhandenen\r\n      {{activeAnalysis.lastStock}} Exemplaren {{activeAnalysis.lastStock - activeAnalysis.maxLoansAbs}}\r\n      nicht genutzt.</p>\r\n\r\n    <p-slider [(ngModel)]=\"staticBuffer\" [min]=\"0\" [max]=\"100\"\r\n              (onChange)=\"calculateDeletionProposal()\"></p-slider>\r\n\r\n    <p>Bei einer Reserve von {{staticBuffer}} % ergibt sich ein Vorschlag zur Aussonderung von</p>\r\n\r\n    <p style=\"color:darkred; font-size: x-large; font-weight: bolder;\"> {{deletionProposal |\r\n      number:'1.0-0'}} Exemplar(en)</p>\r\n\r\n    <button pButton type=\"button\" class=\"ui-button-danger\" icon=\"fa-trash\" iconPos=\"right\" label=\"Aussondern\"\r\n            (click)=\"prepareDeletion()\"></button>\r\n  </div>\r\n  <div class=\"ui-g-4\" *ngIf=\"!activeAnalysis\">\r\n    <p>{{'select.years.for.analysis' | translate}}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/analysis/analysis.component.ts":
/*!************************************************!*\
  !*** ./src/app/analysis/analysis.component.ts ***!
  \************************************************/
/*! exports provided: AnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisComponent", function() { return AnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Eventanalysis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/Eventanalysis */ "./src/app/model/Eventanalysis.ts");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _service_memorylist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/memorylist.service */ "./src/app/service/memorylist.service.ts");
/* harmony import */ var _service_getter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/getter.service */ "./src/app/service/getter.service.ts");
/* harmony import */ var _model_TitleAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/TitleAction */ "./src/app/model/TitleAction.ts");
/* harmony import */ var _service_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/filter.service */ "./src/app/service/filter.service.ts");
/* harmony import */ var _model_MemoryListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/MemoryListItem */ "./src/app/model/MemoryListItem.ts");









var AnalysisComponent = /** @class */ (function () {
    function AnalysisComponent(dataService, filterService, getterService, memorylistService) {
        this.dataService = dataService;
        this.filterService = filterService;
        this.getterService = getterService;
        this.memorylistService = memorylistService;
        this.show = {};
        this.titleActions = [];
        this.collectionOptions = [];
    }
    AnalysisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterService.filterChanged$.subscribe(function (value) {
            _this.buildCollectionOptions();
            _this.reset();
        });
        this.show['dialog'] = false;
        this.analyses = [];
        this.staticBuffer = 20;
        this.deletionProposal = 0;
        this.yearsOfLoans = 5;
        if (this.dataService.printData) {
            this.reset();
        }
        this.buildCollectionOptions();
    };
    AnalysisComponent.prototype.buildCollectionOptions = function () {
        var _this = this;
        this.filterService.uniqueCollections.forEach(function (collection) { return _this.collectionOptions.push({
            label: collection,
            value: collection,
            disabled: !_this.filterService.selectedCollections.has(collection)
        }); });
    };
    AnalysisComponent.prototype.prepareDeletion = function () {
        if (!this.memorylistService.activeMemorylistItem) {
            this.memorylistService.activeMemorylistItem = new _model_MemoryListItem__WEBPACK_IMPORTED_MODULE_8__["MemoryListItem"](this.filterService.getFilteredTitleIds(), '', this.filterService.getFilteredShelfmarks(), 'manually selected', new Date(), new Date(), [], []);
        }
        if (!this.memorylistService.activeMemorylistItem.titleActions) {
            this.memorylistService.activeMemorylistItem.titleActions = [];
        }
        this.memorylistService.addTitleAction(new _model_TitleAction__WEBPACK_IMPORTED_MODULE_6__["TitleAction"]('deletion', this.filterService.uniqueCollections[0], '', this.deletionProposal, this.filterService.getFilteredTitleIds(), new Date()));
        this.show['dialog'] = true;
    };
    AnalysisComponent.prototype.confirmDeletion = function () {
        this.show['dialog'] = false;
    };
    AnalysisComponent.prototype.reset = function () {
        this.eventanalysiss = new Map();
        this.analyses = [];
        this.staticBuffer = 20;
        this.deletionProposal = 0;
        this.yearsOfLoans = 5;
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
                if (actualYear - year > 0 && actualYear - year <= 10) {
                    this.eventanalysiss.set(actualYear - year, new _model_Eventanalysis__WEBPACK_IMPORTED_MODULE_2__["Eventanalysis"]('', '', year, 0, 0, 0));
                }
                year++;
            }
            this.calculateAnalysis();
        }
    };
    AnalysisComponent.prototype.calculateAnalysis = function () {
        var _this = this;
        this.eventanalysiss.forEach(function (value, key) {
            var analysis = _this.calculateSingleAnalysis(_this.dataService.printData, key);
            _this.eventanalysiss.set(key, analysis);
        });
        this.analyses = [];
        this.eventanalysiss.forEach(function (entry) { return _this.analyses.push(entry); });
        this.activeAnalysis = this.eventanalysiss.get(this.analyses.length / 2);
        this.calculateDeletionProposal();
    };
    AnalysisComponent.prototype.calculateDeletionProposal = function () {
        if (this.activeAnalysis) {
            var proposal = Math.floor((this.activeAnalysis.lastStock - this.activeAnalysis.maxLoansAbs) * (1 - this.staticBuffer / 100));
            this.deletionProposal = (proposal < 0) ? 0 : proposal;
        }
    };
    AnalysisComponent.prototype.calculateSingleAnalysis = function (plotData, yearsOfLoans) {
        var eventanalysis = this.eventanalysiss.get(yearsOfLoans);
        var dayInMillis = 3600 * 24 * 1000;
        var yearInMillis = 365 * dayInMillis;
        var today = new Date().getTime();
        var startDateLoans = today - yearsOfLoans * yearInMillis;
        var loans = plotData.get('loans');
        var stock = plotData.get('stock');
        eventanalysis.lastStock = stock[stock.length - 1][1];
        var timeLoaned = 0;
        var timeStock = 0;
        var lastTimeLoans = startDateLoans;
        if (typeof loans !== 'undefined') {
            for (var _i = 0, loans_1 = loans; _i < loans_1.length; _i++) {
                var datapoint = loans_1[_i];
                if (datapoint[0] > startDateLoans) {
                    timeLoaned += (datapoint[0] - lastTimeLoans) * datapoint[1];
                    lastTimeLoans = datapoint[0];
                    if (datapoint[1] > eventanalysis.maxLoansAbs) {
                        eventanalysis.maxLoansAbs = datapoint[1];
                    }
                }
            }
        }
        else {
            eventanalysis.maxLoansAbs = 0;
        }
        for (var _a = 0, stock_1 = stock; _a < stock_1.length; _a++) {
            var datapoint = stock_1[_a];
            if (datapoint[0] > startDateLoans) {
                timeStock += (datapoint[0] - lastTimeLoans) * datapoint[1];
                lastTimeLoans = datapoint[0];
            }
        }
        if (timeStock !== 0) {
            eventanalysis.meanRelativeLoan = timeLoaned / timeStock;
        }
        eventanalysis.years = yearsOfLoans;
        return eventanalysis;
    };
    AnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-analysis',
            template: __webpack_require__(/*! ./analysis.component.html */ "./src/app/analysis/analysis.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _service_filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"],
            _service_getter_service__WEBPACK_IMPORTED_MODULE_5__["GetterService"],
            _service_memorylist_service__WEBPACK_IMPORTED_MODULE_4__["MemorylistService"]])
    ], AnalysisComponent);
    return AnalysisComponent;
}());



/***/ }),

/***/ "./src/app/analysis/analysis.module.ts":
/*!*********************************************!*\
  !*** ./src/app/analysis/analysis.module.ts ***!
  \*********************************************/
/*! exports provided: AnalysisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisModule", function() { return AnalysisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _translate_translate_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translate/translate.module */ "./src/app/translate/translate.module.ts");
/* harmony import */ var _analysis_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./analysis.component */ "./src/app/analysis/analysis.component.ts");
/* harmony import */ var _analysis_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./analysis.routing */ "./src/app/analysis/analysis.routing.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_11__);












var AnalysisModule = /** @class */ (function () {
    function AnalysisModule() {
    }
    AnalysisModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                primeng_slider__WEBPACK_IMPORTED_MODULE_7__["SliderModule"],
                _translate_translate_module__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_10__["DialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["SpinnerModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["InputTextModule"],
                _analysis_routing__WEBPACK_IMPORTED_MODULE_5__["analysisRouting"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
            declarations: [_analysis_component__WEBPACK_IMPORTED_MODULE_4__["AnalysisComponent"]],
            exports: [_analysis_component__WEBPACK_IMPORTED_MODULE_4__["AnalysisComponent"]],
            providers: []
        })
    ], AnalysisModule);
    return AnalysisModule;
}());



/***/ }),

/***/ "./src/app/analysis/analysis.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/analysis/analysis.routing.ts ***!
  \**********************************************/
/*! exports provided: analysisRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analysisRouting", function() { return analysisRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _analysis_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analysis.component */ "./src/app/analysis/analysis.component.ts");


var routes = [
    { path: '', component: _analysis_component__WEBPACK_IMPORTED_MODULE_1__["AnalysisComponent"] }
];
var analysisRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/model/Eventanalysis.ts":
/*!****************************************!*\
  !*** ./src/app/model/Eventanalysis.ts ***!
  \****************************************/
/*! exports provided: Eventanalysis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eventanalysis", function() { return Eventanalysis; });
/**
 * Created by etspi on 25.06.2017.
 */
var Eventanalysis = /** @class */ (function () {
    function Eventanalysis(identifier, href, years, meanRelativeLoan, lastStock, maxLoansAbs) {
        this.identifier = identifier;
        this.href = href;
        this.years = years;
        this.meanRelativeLoan = meanRelativeLoan;
        this.lastStock = lastStock;
        this.maxLoansAbs = maxLoansAbs;
    }
    return Eventanalysis;
}());



/***/ }),

/***/ "./src/app/model/TitleAction.ts":
/*!**************************************!*\
  !*** ./src/app/model/TitleAction.ts ***!
  \**************************************/
/*! exports provided: TitleAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleAction", function() { return TitleAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action */ "./src/app/model/Action.ts");


var TitleAction = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TitleAction, _super);
    function TitleAction(actionType, collectionFrom, collectionTo, number, titleId, created, uuid) {
        var _this = _super.call(this, actionType, collectionFrom, collectionTo, number, created) || this;
        _this.actionType = actionType;
        _this.collectionFrom = collectionFrom;
        _this.collectionTo = collectionTo;
        _this.number = number;
        _this.titleId = titleId;
        _this.created = created;
        _this.uuid = uuid;
        return _this;
    }
    return TitleAction;
}(_Action__WEBPACK_IMPORTED_MODULE_1__["Action"]));



/***/ })

}]);
//# sourceMappingURL=analysis-analysis-module.js.map