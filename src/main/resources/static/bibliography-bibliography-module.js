(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bibliography-bibliography-module"],{

/***/ "./src/app/bibliography/bibliography.component.html":
/*!**********************************************************!*\
  !*** ./src/app/bibliography/bibliography.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{'title.bibliography' | translate}}</h2>\r\n<div>\r\n  <p-virtualScroller [value]=\"getterService.primoData | keyvalue\" scrollHeight=\"70vH\" >\r\n    <ng-template let-primo pTemplate=\"item\">\r\n      <div class=\"ui-g primo-item\">\r\n        <div class=\"ui-g-2 ui-md-2 primo-identifier\">\r\n          <span>{{getIdentifiers(primo.value)}}</span>\r\n        </div>\r\n        <div class=\"ui-g-1 ui-md-1\">\r\n          <img src=\"{{primo.value.linkThumbnail}}\">\r\n        </div>\r\n        <div class=\"ui-g-7 ui-md-7\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-sm-6\">\r\n              <div>\r\n                <span class=\"primo-type\">{{primo.value.type | translate}}</span>\r\n              </div>\r\n              <div class=\"primo-link\">\r\n                <span class=\"primo-title primo-link\"><a target=\"_blank\" href=\"{{primo.value.link}}\">{{primo.value.title}}</a></span>\r\n              </div>\r\n              <div>\r\n                <span class=\"primo-authors\">{{primo.value.authors}}</span>\r\n              </div>\r\n              <div>\r\n                <span class=\"primo-add-infos\">{{primo.value.edition}}. Auflage; {{primo.value.year}}</span>\r\n              </div>\r\n              <div *ngIf=\"''!==primo.value.isbn\">\r\n                ISBN: {{primo.value.isbn}}\r\n              </div>\r\n              <div *ngIf=\"''!==primo.value.fulltextLink\">\r\n                <span class=\"primo-add-infos\"><a target=\"_blank\" href=\"{{primo.value.fulltextLink}}\">Link zum Volltext</a></span>\r\n              </div>\r\n              <div>\r\n                <span class=\"primo-add-infos\">{{getIdentifiers(primo.key)}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-2 ui-md-2\">\r\n          <span *ngIf=\"authenticationService.principal\"><button pButton type=\"button\" class=\"ui-button-rounded ui-button-success\" label=\"Auflage nachbestellen\" icon=\"pi pi-plus\" (click)=\"showElisaInput(primo.value, getIdentifiers(primo.value))\"></button></span>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </p-virtualScroller>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/bibliography/bibliography.component.ts":
/*!********************************************************!*\
  !*** ./src/app/bibliography/bibliography.component.ts ***!
  \********************************************************/
/*! exports provided: BibliographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibliographyComponent", function() { return BibliographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_getter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/getter.service */ "./src/app/service/getter.service.ts");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _service_elisa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/elisa.service */ "./src/app/service/elisa.service.ts");
/* harmony import */ var _service_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/filter.service */ "./src/app/service/filter.service.ts");






var BibliographyComponent = /** @class */ (function () {
    function BibliographyComponent(getterService, elisaService, filterService, authenticationService) {
        this.getterService = getterService;
        this.elisaService = elisaService;
        this.filterService = filterService;
        this.authenticationService = authenticationService;
    }
    BibliographyComponent.prototype.getIdentifiers = function (primoDatum) {
        if (primoDatum.type === 'Online Resource') {
            return primoDatum.isbn;
        }
        else if (primoDatum.type === 'Physical Item') {
            var shelfmarkSet = new Set();
            var shelfmarks = primoDatum.shelfmarks;
            for (var _i = 0, _a = shelfmarks.split(';'); _i < _a.length; _i++) {
                var shelfmark = _a[_i];
                shelfmark = shelfmark.split(' ')[1];
                if (!shelfmarkSet.has(shelfmark)) {
                    shelfmarkSet.add(shelfmark);
                }
            }
            var shelfmarkString_1 = '';
            shelfmarkSet.forEach(function (value) { return shelfmarkString_1 = shelfmarkString_1 + value + '; '; });
            return shelfmarkString_1.substring(0, shelfmarkString_1.length - 2);
        }
        else {
            return primoDatum.recordId;
        }
    };
    BibliographyComponent.prototype.showElisaInput = function (primoValue, shortShelfmarks) {
        this.elisaService.createElisaRequest(primoValue.isbn, shortShelfmarks);
        this.filterService.show['elisa'] = true;
    };
    BibliographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bibliography',
            template: __webpack_require__(/*! ./bibliography.component.html */ "./src/app/bibliography/bibliography.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_getter_service__WEBPACK_IMPORTED_MODULE_2__["GetterService"],
            _service_elisa_service__WEBPACK_IMPORTED_MODULE_4__["ElisaService"],
            _service_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"],
            _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], BibliographyComponent);
    return BibliographyComponent;
}());



/***/ }),

/***/ "./src/app/bibliography/bibliography.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/bibliography/bibliography.module.ts ***!
  \*****************************************************/
/*! exports provided: BibliographyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibliographyModule", function() { return BibliographyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bibliography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bibliography.component */ "./src/app/bibliography/bibliography.component.ts");
/* harmony import */ var _bibliography_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bibliography.routing */ "./src/app/bibliography/bibliography.routing.ts");
/* harmony import */ var _translate_translate_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../translate/translate.module */ "./src/app/translate/translate.module.ts");
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/virtualscroller */ "./node_modules/primeng/virtualscroller.js");
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_7__);








var BibliographyModule = /** @class */ (function () {
    function BibliographyModule() {
    }
    BibliographyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _translate_translate_module__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_6__["VirtualScrollerModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                _bibliography_routing__WEBPACK_IMPORTED_MODULE_4__["bibliographyRouting"]],
            declarations: [_bibliography_component__WEBPACK_IMPORTED_MODULE_3__["BibliographyComponent"]],
            exports: [_bibliography_component__WEBPACK_IMPORTED_MODULE_3__["BibliographyComponent"]],
            providers: []
        })
    ], BibliographyModule);
    return BibliographyModule;
}());



/***/ }),

/***/ "./src/app/bibliography/bibliography.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/bibliography/bibliography.routing.ts ***!
  \******************************************************/
/*! exports provided: bibliographyRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bibliographyRouting", function() { return bibliographyRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bibliography_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bibliography.component */ "./src/app/bibliography/bibliography.component.ts");


var routes = [
    { path: '', component: _bibliography_component__WEBPACK_IMPORTED_MODULE_1__["BibliographyComponent"] }
];
var bibliographyRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=bibliography-bibliography-module.js.map