(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./analysis/analysis.module": [
		"./src/app/analysis/analysis.module.ts",
		"common",
		"analysis-analysis-module"
	],
	"./bibliography/bibliography.module": [
		"./src/app/bibliography/bibliography.module.ts",
		"common",
		"bibliography-bibliography-module"
	],
	"./eventlist/eventlist.module": [
		"./src/app/eventlist/eventlist.module.ts",
		"eventlist-eventlist-module"
	],
	"./itemlist/itemlist.module": [
		"./src/app/itemlist/itemlist.module.ts",
		"common",
		"itemlist-itemlist-module"
	],
	"./overview/overview.module": [
		"./src/app/overview/overview.module.ts",
		"overview-overview-module"
	],
	"./statistics/statistics.module": [
		"./src/app/statistics/statistics.module.ts",
		"statistics-statistics-module"
	],
	"./usage/usage.module": [
		"./src/app/usage/usage.module.ts",
		"usage-usage-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/TimeoutInterceptor.ts":
/*!***************************************!*\
  !*** ./src/app/TimeoutInterceptor.ts ***!
  \***************************************/
/*! exports provided: DEFAULT_TIMEOUT, defaultTimeout, TimeoutInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TIMEOUT", function() { return DEFAULT_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTimeout", function() { return defaultTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutInterceptor", function() { return TimeoutInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/timeout */ "./node_modules/rxjs-compat/_esm5/add/operator/timeout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var DEFAULT_TIMEOUT = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('defaultTimeout');
var defaultTimeout = 60000;
var TimeoutInterceptor = /** @class */ (function () {
    function TimeoutInterceptor(defaultTimeout) {
        this.defaultTimeout = defaultTimeout;
    }
    TimeoutInterceptor.prototype.intercept = function (req, next) {
        var timeout = Number(req.headers.get('timeout')) || this.defaultTimeout;
        return next.handle(req).timeout(timeout);
    };
    TimeoutInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(DEFAULT_TIMEOUT)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], TimeoutInterceptor);
    return TimeoutInterceptor;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"/\">Lib-Intel</a>\n      <a style=\"color: #efe4bf\" class=\"navbar-brand\" href=\"/protokoll\">:: Protokoll</a>\n    </div>\n    <span *ngIf=\"!primaryLoad\" class=\"navbar-text\"><p-inputSwitch\n      [(ngModel)]=\"this.filterService.show['filter']\"></p-inputSwitch></span>\n    <div *ngIf=\"itemlistService.activeMemorylist\" class=\"navbar-nav navbar-text navbar-\">\n      {{itemlistService.activeMemorylist.name}}\n    </div>\n    <span class=\"navbar-nav navbar-right\">\n      <app-stockmanagement *ngIf=\"authenticationService.principal\"></app-stockmanagement>\n      <span class=\"navbar-text\">\n        <a *ngIf=\"!authenticationService.principal\" href=\"/login\">\n          <button type=\"button\" pButton icon=\"pi pi-bars\" label=\"Login\"></button>\n        </a>\n      </span>\n    </span>\n  </div>\n</nav>\n\n<div class=\"jumbotron\" *ngIf=\"primaryLoad\">\n  <div class=\"container\">\n    <h1 style=\"padding: 20px;\">\n      {{'title.protocol' | translate}}\n    </h1>\n    <p style=\"padding: 10px;\">{{'description.protocol.short' | translate}}</p>\n    <div class=\"ui-g ui-fluid\">\n      <form (submit)=\"collect()\" (keyup.enter)=\"collect()\">\n        <div class=\"ui-g-12 ui-lg-3\">\n        <span class=\"ui-float-label\">\n        <input id=\"float-input-jumbotron\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"protokollRequest.shelfmark\"\n               [ngModelOptions]=\"{standalone: true}\" autofocus\n               pTooltip=\"Bitte Signatur eingeben\" tooltipPosition=\"bottom\">\n        <label for=\"float-input-jumbotron\">{{'shelfmark' | translate}}</label>\n        </span>\n        </div>\n        <div class=\"ui-g-12 ui-lg-3\">\n        <span class=\"ui-float-label\">\n        <input [(ngModel)]=\"protokollRequest.collections\" id=\"collections-primary-jumbotron\" pInputText\n               name=\"collections\"\n               size=\"20\" pTooltip=\"z.B. E31, E3, D45, E (mehrere durch Leerzeichen trennen)\" tooltipPosition=\"bottom\"\n               [ngModelOptions]=\"{standalone: true}\"/>\n        <label for=\"collections-primary-jumbotron\">{{'collections' | translate}}</label>\n        </span>\n        </div>\n        <div class=\"ui-g-12 ui-lg-3\">\n          <p-toggleButton onLabel=\"Nur diese Auflage\" offLabel=\"Alle Auflagen\"\n                          [(ngModel)]=\"protokollRequest.exact\" [ngModelOptions]=\"{standalone: true}\"></p-toggleButton>\n        </div>\n        <div class=\"ui-g-12 ui-lg-3\">\n          <button pButton type=\"button\" class=\"ui-button-success\" (click)=\"collect()\" icon=\"pi pi-search\"\n                  label=\"Abfrage starten\"></button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<p-dialog header=\"{{'collecting.data' | translate}}\" [modal]=\"true\" [closable]=\"false\" [(visible)]=\"busy\">\n  <img src=\"/files/custom/loading.gif\" alt=\"Loading...\" style=\"width:304px;height:228px;\">\n</p-dialog>\n\n<p-dialog *ngIf=\"filterService.show['elisa']\" [(visible)]=\"filterService.show['elisa']\">\n  <p-header>\n    An ELi:SA senden\n  </p-header>\n  <table class=\"table table-hover\">\n    <tr>\n      <td>\n        <label for=\"notepad\">Merkliste</label>\n      </td>\n      <td>\n        <p>\n          <input size=\"60\" pInputText type=\"text\" value=\"Ausleihprotokoll\" style=\"border: none;\" id=\"notepad\"\n                 [(ngModel)]=\"elisaService.notepad\"/>\n        </p>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <label for=\"noteIntern\">Interne Notiz</label>\n      </td>\n      <td>\n        <input size=\"60\" pInputText type=\"text\" style=\"border: none;\" id=\"noteIntern\"\n               [(ngModel)]=\"elisaService.elisaTitleData.notizIntern\"/>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <label for=\"note\">Bibliotheksnotiz</label>\n      </td>\n      <td>\n        <p>\n          <input size=\"60\" pInputText type=\"text\" style=\"border: none;\" id=\"note\"\n                 [(ngModel)]=\"elisaService.elisaTitleData.notiz\"/>\n        </p>\n      </td>\n    </tr>\n  </table>\n\n\n  <p-footer>\n    <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"sendToElisa()\" label=\"Abschicken\"></button>\n    <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"filterService.show['elisa'] = false\" label=\"Abbrechen\"\n            class=\"ui-button-secondary\"></button>\n  </p-footer>\n</p-dialog>\n\n<div id=\"wrapper\" *ngIf=\"!primaryLoad\" class=\"ui-g\">\n  <div class=\"ui-g content\">\n    <div class=\"ui-md-2 ui-g-12 ui-g-nopad\" *ngIf=\"filterService.show['filter']\">\n      <app-filter></app-filter>\n    </div>\n\n    <div [className]=\"filterService.show['filter'] ? 'ui-md-10 ui-g-12' : 'ui-md-12 ui-g-12'\">\n\n      <form (submit)=\"collect()\" (keyup.enter)=\"collect()\">\n\n        <div class=\"ui-g\"\n             style=\"padding: 20px; border-style: none none solid none; background-color: #dfe4f2;\">\n\n          <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <span class=\"ui-float-label\">\n        <input id=\"float-input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"protokollRequest.shelfmark\"\n               [ngModelOptions]=\"{standalone: true}\" autofocus\n               pTooltip=\"Bitte Signatur eingeben\" tooltipPosition=\"bottom\">\n        <label for=\"float-input\">{{'shelfmark' | translate}}</label>\n        </span>\n          </div>\n          <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n        <span class=\"ui-float-label\">\n        <input [(ngModel)]=\"protokollRequest.collections\" id=\"collections-primary\" pInputText name=\"collections\"\n               size=\"20\" pTooltip=\"z.B. E31, E3, D45, E (mehrere durch Leerzeichen trennen)\" tooltipPosition=\"bottom\"\n               [ngModelOptions]=\"{standalone: true}\"/>\n        <label for=\"collections-primary\">{{'collections' | translate}}</label>\n        </span>\n          </div>\n          <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n            <p-toggleButton onLabel=\"Nur diese Auflage\" offLabel=\"Alle Auflagen\"\n                            [(ngModel)]=\"protokollRequest.exact\" [ngModelOptions]=\"{standalone: true}\"></p-toggleButton>\n          </div>\n          <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n            <button pButton type=\"button\" class=\"ui-button-success\" (click)=\"collect()\" icon=\"pi pi-search\"\n                    label=\"Abfrage starten\"></button>\n          </div>\n          <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n            <button pButton type=\"button\" class=\"ui-button-success\" (click)=\"copyLink()\" icon=\"pi pi-copy\"\n                    label=\"Link kopieren\"></button>\n          </div>\n        </div>\n      </form>\n\n      <p-messages [(value)]=\"messages\"></p-messages>\n\n      <div class=\"ui-g-fluid\">\n        <p-tabMenu [model]=\"items\" [activeItem]=\"items[0]\" class=\"ui-fluid\"></p-tabMenu>\n\n        <div class=\"ui-g-12 ui-md-12 ui-lg-12 tile-bottom\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<p-overlayPanel #op>\n  <p-scrollPanel [style]=\"{width: '300px', height: '800px'}\">\n    <p-table [value]=\"itemlistService.memorylistItems\" selectionMode=\"single\" (onRowSelect)=\"itemlistService.selectMemorylistItem($event.data)\">\n    <ng-template pTemplate=\"body\" let-savedItem>\n      <tr [pSelectableRow]=\"savedItem\">\n      <td style=\"font-size: 1.4em;\">\n        {{savedItem.shelfmark}}\n      </td>\n      </tr>\n    </ng-template>\n    </p-table>\n  </p-scrollPanel>\n</p-overlayPanel>\n\n<footer style=\"text-align: center;\" *ngIf=\"itemlistService.memorylistItems\" class=\"fixed-bottom\">\n  <ul *ngIf=\"itemlistService.memorylistItems.length !== 0\" style=\"font-size: 2em\" class=\"list-inline\">\n    <li>\n      <button pButton type=\"button\" [disabled]=\"itemlistService.tabindex < 1\" (click)=\"itemlistService.previousMemorylistItem()\"\n              icon=\"pi pi-chevron-left\"></button>\n    </li>\n    <li (click)=\"op.toggle($event)\">\n      <span style=\"color: white; min-width: 150px;\">  {{itemlistService.activeMemorylistItem.shelfmark}}  </span>\n    </li>\n    <li>\n      <button pButton type=\"button\" [disabled]=\"itemlistService.tabindex >= itemlistService.memorylistItems.length\"\n              (click)=\"itemlistService.nextMemorylistItem()\" icon=\"pi pi-chevron-right\"></button>\n    </li>\n  </ul>\n</footer>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_ProtokollRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/ProtokollRequest */ "./src/app/model/ProtokollRequest.ts");
/* harmony import */ var _service_getter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/getter.service */ "./src/app/service/getter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./translate */ "./src/app/translate/index.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _service_elisa_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/elisa.service */ "./src/app/service/elisa.service.ts");
/* harmony import */ var _service_filter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/filter.service */ "./src/app/service/filter.service.ts");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _service_memorylist_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/memorylist.service */ "./src/app/service/memorylist.service.ts");














var AppComponent = /** @class */ (function () {
    function AppComponent(getterService, router, route, translateService, clipboardService, messageService, authenticationService, elisaService, filterService, dataService, itemlistService) {
        this.getterService = getterService;
        this.router = router;
        this.route = route;
        this.translateService = translateService;
        this.clipboardService = clipboardService;
        this.messageService = messageService;
        this.authenticationService = authenticationService;
        this.elisaService = elisaService;
        this.filterService = filterService;
        this.dataService = dataService;
        this.itemlistService = itemlistService;
        this.primaryLoad = true;
        this.items = [];
        this.status = 'ready';
        this.response = '';
        this.isFachreferent = false;
        this.tabs = ['overview', 'bibliography', 'statistics', 'usage', 'itemlist', 'eventlist'];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemlistService.memorylistItemChanged$.subscribe(function (savedItem) { return _this.collectSaveditem(); });
        this.filterService.filterChanged$.subscribe(function (change) { return _this.updateData(); });
        this.filterService.show['elisa'] = false;
        this.authenticationService.updatePrincipal().subscribe(function (data) {
            _this.principal = data;
            if (_this.principal.roles) {
                _this.isFachreferent = _this.principal.roles.indexOf('ROLE_FACHREFERENT') > -1;
                if (_this.isFachreferent) {
                    _this.elisaService.setElisaData(_this.principal.name).subscribe(function (value) {
                        _this.filterService.show['elisaData'] = true;
                    }, function (error) {
                        console.log('no elisa data found');
                        _this.filterService.show['elisaData'] = false;
                    });
                    _this.tabs.push('analysis');
                    _this.buildTabs();
                }
            }
        }, function (error) { return console.log(error); });
        this.translateService.use('de');
        this.buildTabs();
        this.activeItem = this.items[0];
        this.activePart = this.activeItem.id;
        this.protokollRequest = new _model_ProtokollRequest__WEBPACK_IMPORTED_MODULE_2__["ProtokollRequest"]();
        this.route.queryParams.subscribe(function (params) {
            if (params['shelfmark'] !== undefined) {
                _this.protokollRequest.shelfmark = params['shelfmark'];
                _this.protokollRequest.update();
                if (params['exact'] !== undefined) {
                    _this.protokollRequest.exact = ('true' === params['exact']);
                }
                if (params['collections'] !== undefined) {
                    _this.protokollRequest.collections = params['collections'];
                }
                if (params['materials'] !== undefined) {
                    _this.protokollRequest.shelfmark = params['materials'];
                }
                _this.collect();
            }
        });
    };
    AppComponent.prototype.buildTabs = function () {
        var _this = this;
        this.items = [];
        this.tabs.forEach(function (entry) {
            return _this.items.push({
                label: _this.translateService.instant('tab.' + entry),
                icon: 'fa-plus',
                id: entry,
                command: function (event) { return _this.router.navigate(['/' + entry]); }
            });
        });
    };
    AppComponent.prototype.reset = function () {
        this.getterService.reset();
        this.filterService.resetFilter();
        this.filterService.resetPrintSelection();
        this.filterService.resetDigitalSelection();
        this.recKeys = new Set();
        this.messages = [];
        this.activePart = 'overview';
        this.filterService.show['filter'] = true;
    };
    AppComponent.prototype.collect = function () {
        this.busy = true;
        this.status = 'collecting';
        this.reset();
        this.protokollRequest.update();
        if (this.protokollRequest.getType() === 'ebook') {
            this.getDigitalManifestations();
        }
        else {
            this.getAllPrintManifestations();
        }
    };
    AppComponent.prototype.collectSaveditem = function () {
        this.reset();
        this.protokollRequest.shelfmark = this.itemlistService.activeMemorylistItem.shelfmark;
        this.collect();
    };
    AppComponent.prototype.getAllPrintManifestations = function () {
        var _this = this;
        this.getterService.getAllPrintManifestations(this.protokollRequest).subscribe(function (data) {
            if (data.length === 0) {
                _this.sendMessage('error', 'nothingFound');
            }
            else {
                data.forEach(function (entry) {
                    _this.getterService.printManifestations.set(entry.titleID, entry);
                    var recKey = entry.bibliographicInformation.recKey;
                    if ('' !== recKey) {
                        if (!_this.recKeys.has(recKey)) {
                            _this.recKeys.add(recKey);
                        }
                    }
                });
            }
            _this.primaryLoad = false;
        }, function (error) {
            _this.sendMessage('error', 'error');
            _this.primaryLoad = false;
            console.log(error);
        }, function () {
            _this.filterService.buildPrintFilterlist(_this.getterService.printManifestations);
            if (!(typeof _this.protokollRequest.collections === 'undefined' || _this.protokollRequest.collections.trim() === '')) {
                _this.filterService.includeSelectionFromHttpParamters(_this.protokollRequest.collections);
            }
            _this.filterService.applyPrintFilter(_this.getterService.printManifestations);
            _this.collectPrimoResponses();
            _this.busy = false;
        });
    };
    AppComponent.prototype.getDigitalManifestations = function () {
        var _this = this;
        this.getterService.getAllDigitalManifestations(this.protokollRequest).subscribe(function (data) {
            if (data.length === 0) {
                _this.sendMessage('error', 'nothingFound');
            }
            else {
                data.forEach(function (record) {
                    _this.getterService.digitalManifestations.set(record.identifier, record);
                    _this.filterService.filterList[record.identifier] = true;
                });
            }
            _this.primaryLoad = false;
        }, function (error) {
            _this.sendMessage('error', 'error');
            _this.primaryLoad = false;
            console.log(error);
        }, function () {
            _this.filterService.buildDigitalFilterlist(_this.getterService.digitalManifestations);
            _this.filterService.applyDigitalFilter(_this.getterService.digitalManifestations);
            _this.collectPrimoResponses();
            _this.busy = false;
        });
    };
    AppComponent.prototype.collectPrimoResponses = function () {
        var _this = this;
        this.getterService.printManifestations.forEach(function (value, key) {
            if (!_this.getterService.primoData.has(key)) {
                var isbn = value.bibliographicInformation.isbn;
                if ('' !== isbn) {
                    isbn = isbn.replace('ISBN', '').trim();
                    isbn = isbn.replace(/-/g, '').trim();
                    if (isbn.length > 13) {
                        if (isbn.startsWith('978')) {
                            isbn = isbn.substring(0, 13);
                        }
                        else {
                            isbn = isbn.substring(0, 10);
                        }
                    }
                }
                if (isbn.length === 13) {
                    _this.getterService.searchPrimoForIsbn(isbn).subscribe(function (data) { return _this.storePrimoResponse(data); }, function (error) { return console.log(error); }, function () { return _this.extendManifestations(); });
                }
                else {
                    _this.getterService.searchPrimoForShelfmark(value.shelfmark).subscribe(function (data) { return _this.storePrimoResponse(data); }, function (error) { return console.log(error); }, function () { return _this.extendManifestations(); });
                }
            }
        });
        this.getterService.digitalManifestations.forEach(function (value, key) {
            if (!_this.getterService.primoData.has(key)) {
                _this.getterService.searchPrimoForIsbn(key).subscribe(function (data) { return _this.storePrimoResponse(data); }, function (error) { return console.log(error); }, function () { return _this.extendManifestations(); });
            }
        });
    };
    AppComponent.prototype.storePrimoResponse = function (data) {
        var _this = this;
        data.electronic.forEach(function (entry) {
            if (!_this.getterService.primoData.has(entry.isbn)) {
                _this.getterService.primoData.set(entry.isbn, entry);
            }
        });
        data.print.forEach(function (entry) {
            if (!_this.getterService.primoData.has(entry.recordId)) {
                _this.getterService.primoData.set(entry.recordId, entry);
            }
        });
    };
    AppComponent.prototype.extendManifestations = function () {
        var _this = this;
        this.getterService.primoData.forEach(function (value, key) {
            if ('Online Resource' === value.type) {
                if (!_this.getterService.digitalManifestations.has(key)) {
                    var collected_1 = false;
                    var _loop_1 = function (keyInd) {
                        if (keyInd.trim() !== '') {
                            if (!collected_1) {
                                if (value.doi !== '') {
                                    _this.getterService.getDigitalManifestationByIdentifiers(keyInd, value.doi).subscribe(function (dm) {
                                        if (dm.usage.length > 0) {
                                            _this.filterService.addDigitalManifestationToFilterlist(dm);
                                            _this.getterService.digitalManifestations.set(key, dm);
                                            collected_1 = true;
                                            _this.updateData();
                                        }
                                        else {
                                            _this.sendMessage('warn', 'noUsage');
                                        }
                                    }, function (error) { return _this.sendMessage('error', 'noConnection'); });
                                }
                                else {
                                    _this.getterService.getDigitalManifestation(key).subscribe(function (dm) {
                                        if (dm.usage.length > 0) {
                                            _this.filterService.addDigitalManifestationToFilterlist(dm);
                                            _this.getterService.digitalManifestations.set(keyInd, dm);
                                            collected_1 = true;
                                            _this.updateData();
                                        }
                                        else {
                                            _this.sendMessage('warn', 'noUsage');
                                        }
                                    }, function (error) { return _this.sendMessage('error', 'noConnection'); });
                                }
                            }
                        }
                    };
                    for (var _i = 0, _a = key.split(';'); _i < _a.length; _i++) {
                        var keyInd = _a[_i];
                        _loop_1(keyInd);
                    }
                }
            }
            else if ('Physical Item' === value.type) {
                if (!_this.recKeys.has(key)) {
                    var shelfmark = value.shelfmarks;
                    if (value.shelfmarks.indexOf(';') > 0) {
                        shelfmark = shelfmark.substring(0, shelfmark.indexOf(';'));
                    }
                    shelfmark = shelfmark.substring(shelfmark.indexOf(' '), shelfmark.length);
                    var protokollrequest = new _model_ProtokollRequest__WEBPACK_IMPORTED_MODULE_2__["ProtokollRequest"]();
                    protokollrequest.shelfmark = shelfmark;
                    protokollrequest.exact = true;
                    _this.getterService.getAllPrintManifestations(protokollrequest).subscribe(function (pm) {
                        pm.forEach(function (entry) {
                            _this.getterService.printManifestations.set(entry.titleID, entry);
                            _this.filterService.addPrintManifestationToFilterlist(entry);
                            var recKey = entry.bibliographicInformation.recKey;
                            if ('' !== recKey) {
                                if (!_this.recKeys.has(recKey)) {
                                    _this.recKeys.add(recKey);
                                }
                            }
                        });
                    }, function (error) { return _this.sendMessage('warn', 'noUsage'); });
                }
            }
        });
    };
    AppComponent.prototype.updateData = function () {
        if (this.filterService.selectedEvents) {
            this.dataService.generatePrintData(this.filterService.selectedPrintManifestations, this.filterService.selectedEvents);
        }
        if (this.filterService.selectedDigitalUsage) {
            this.dataService.generateDigitalData(this.filterService.selectedDigitalManifestations);
        }
    };
    AppComponent.prototype.copyLink = function () {
        var url = location.href.split('?')[0] + '?' + this.protokollRequest.asUrlParamters();
        this.clipboardService.copyFromContent(url);
        this.messageService.add({
            severity: 'success',
            summary: 'Link kopiert',
            detail: 'Der Link wurde in die Ziwschenablage eingefügt'
        });
    };
    AppComponent.prototype.sendMessage = function (level, error) {
        this.messages = [];
        switch (level) {
            case 'error': {
                this.messages.push({
                    severity: error, summary: 'Fehler: ',
                    detail: this.translateService.instant('message.' + error)
                });
            }
        }
        this.status = level;
        this.busy = false;
    };
    AppComponent.prototype.sendToElisa = function () {
        var _this = this;
        this.messages = [];
        var message = {};
        this.elisaService.sendToElisa().subscribe(function (data) {
            _this.response = data;
            message = _this.messages.push({
                severity: 'success',
                summary: 'Erfolg: ',
                detail: _this.translateService.instant('message.elisa.submitted')
            });
        }, function (error) { return _this.messages.push({
            severity: 'error',
            summary: 'Fehler: ',
            detail: _this.translateService.instant('no.elisa.connection')
        }); });
        this.messages.push(message);
        this.filterService.show['elisa'] = false;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_service_getter_service__WEBPACK_IMPORTED_MODULE_3__["GetterService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_getter_service__WEBPACK_IMPORTED_MODULE_3__["GetterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _translate__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _service_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
            _service_elisa_service__WEBPACK_IMPORTED_MODULE_10__["ElisaService"],
            _service_filter_service__WEBPACK_IMPORTED_MODULE_11__["FilterService"],
            _service_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"],
            _service_memorylist_service__WEBPACK_IMPORTED_MODULE_13__["MemorylistService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.globals.ts":
/*!********************************!*\
  !*** ./src/app/app.globals.ts ***!
  \********************************/
/*! exports provided: settingsUrl, getterUrl, headersJson, headersForm, headersConnect, counterretrievalUrl, stockanalyzerUrl, elisaUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsUrl", function() { return settingsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getterUrl", function() { return getterUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headersJson", function() { return headersJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headersForm", function() { return headersForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headersConnect", function() { return headersConnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterretrievalUrl", function() { return counterretrievalUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stockanalyzerUrl", function() { return stockanalyzerUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elisaUrl", function() { return elisaUrl; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var settingsUrl = '/api/settings';
var getterUrl = '/getter';
var headersJson = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
var headersForm = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
var headersConnect = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'text/uri-list');
var counterretrievalUrl = '/api/counterretrieval';
var stockanalyzerUrl = '/api/stockanalyzer';
var elisaUrl = '/service/elisa/sendToElisa';


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/datatable/datatable */ "./node_modules/primeng/components/datatable/datatable.js");
/* harmony import */ var primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_getter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/getter.service */ "./src/app/service/getter.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _TimeoutInterceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TimeoutInterceptor */ "./src/app/TimeoutInterceptor.ts");
/* harmony import */ var _translate_translate_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./translate/translate.module */ "./src/app/translate/translate.module.ts");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/virtualscroller */ "./node_modules/primeng/virtualscroller.js");
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _stockmanagement_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./stockmanagement.component */ "./src/app/stockmanagement.component.ts");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _service_elisa_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/elisa.service */ "./src/app/service/elisa.service.ts");
/* harmony import */ var _service_memorylist_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/memorylist.service */ "./src/app/service/memorylist.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _service_filter_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service/filter.service */ "./src/app/service/filter.service.ts");
/* harmony import */ var _filter_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./filter.component */ "./src/app/filter.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./service/data.service */ "./src/app/service/data.service.ts");

///<reference path='../../node_modules/primeng/components/common/menuitem.d.ts'/>


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_17__["VirtualScrollerModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["TieredMenuModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_15__["ClipboardModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["PanelModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["CheckboxModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["InputSwitchModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["MessagesModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["SlideMenuModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["SelectButtonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["ScrollPanelModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["TabViewModule"],
                primeng_slider__WEBPACK_IMPORTED_MODULE_14__["SliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["InputTextareaModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["SpinnerModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["OverlayPanelModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["ToggleButtonModule"],
                _translate_translate_module__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["TabMenuModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_25__["protokollRouting"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["DialogModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_22__["TableModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["SlideMenuModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _stockmanagement_component__WEBPACK_IMPORTED_MODULE_18__["StockmanagementComponent"], _filter_component__WEBPACK_IMPORTED_MODULE_24__["FilterComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]],
            providers: [_service_getter_service__WEBPACK_IMPORTED_MODULE_9__["GetterService"], _service_filter_service__WEBPACK_IMPORTED_MODULE_23__["FilterService"], _service_data_service__WEBPACK_IMPORTED_MODULE_26__["DataService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_15__["ClipboardService"], primeng_api__WEBPACK_IMPORTED_MODULE_16__["MessageService"], _service_authentication_service__WEBPACK_IMPORTED_MODULE_19__["AuthenticationService"],
                _service_memorylist_service__WEBPACK_IMPORTED_MODULE_21__["MemorylistService"], _service_elisa_service__WEBPACK_IMPORTED_MODULE_20__["ElisaService"], [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _TimeoutInterceptor__WEBPACK_IMPORTED_MODULE_12__["TimeoutInterceptor"], multi: true }],
                [{ provide: _TimeoutInterceptor__WEBPACK_IMPORTED_MODULE_12__["DEFAULT_TIMEOUT"], useValue: _TimeoutInterceptor__WEBPACK_IMPORTED_MODULE_12__["defaultTimeout"] }]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: protokollRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protokollRouting", function() { return protokollRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', loadChildren: './overview/overview.module#OverviewModule' },
    { path: 'bibliography', loadChildren: './bibliography/bibliography.module#BibliographyModule' },
    { path: 'itemlist', loadChildren: './itemlist/itemlist.module#ItemlistModule' },
    { path: 'eventlist', loadChildren: './eventlist/eventlist.module#EventlistModule' },
    { path: 'analysis', loadChildren: './analysis/analysis.module#AnalysisModule' },
    { path: 'statistics', loadChildren: './statistics/statistics.module#StatisticsModule' },
    { path: 'usage', loadChildren: './usage/usage.module#UsageModule' }
];
var protokollRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/filter.component.html":
/*!***************************************!*\
  !*** ./src/app/filter.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(getterService.printManifestations.size +  getterService.digitalManifestations.size) > 0\">\r\n  <p-scrollPanel [style]=\"{width: '100%', height: '100%'}\">\r\n    <h3  *ngIf=\"getterService.printManifestations.size > 0\" (click)=\"toggleShow('editions')\">{{'editions' | translate}} <i\r\n      [ngClass]=\"filterService.show['editions'] ? 'pi pi-caret-down' : 'pi pi-caret-right'\"></i></h3>\r\n    <div *ngIf=\"filterService.show['editions'] && getterService.printManifestations.size > 0\" class=\"ui-g\">\r\n      <div *ngFor=\"let m of getterService.printManifestations | keyvalue\" class=\"ui-g-12\">\r\n        <p-checkbox [(ngModel)]=\"filterService.filterList[m.value.titleID]\" binary=\"true\" (onChange)=\"sendEvent()\"\r\n                    label=\"{{m.value.edition}}. Auflage: {{m.value.shelfmark}}   <{{filterService.statsManifestations.get(m.value.titleID)}} Ex.>\"\r\n                    pTooltip=\"{{m.value.bibliographicInformation.authors}}:\r\n          {{m.value.bibliographicInformation.title}}, {{m.value.bibliographicInformation.year}}.\"></p-checkbox>\r\n      </div>\r\n    </div>\r\n    <h3 *ngIf=\"getterService.printManifestations.size > 0\" (click)=\"toggleShow('collections')\">{{'collections' | translate}} <i\r\n      [ngClass]=\"filterService.show['collections'] ? 'pi pi-caret-down' : 'pi pi-caret-right'\"></i></h3>\r\n    <div *ngIf=\"filterService.show['collections'] && getterService.printManifestations.size > 0\" class=\"ui-g\">\r\n      <div *ngFor=\"let m of filterService.uniqueCollections\" class=\"ui-g-12\">\r\n        <p-checkbox [(ngModel)]=\"filterService.filterList[m]\" binary=\"true\" (onChange)=\"sendEvent()\"\r\n                    label=\"{{m}} <{{filterService.statsCollection.get(m)}} Ex.>\"></p-checkbox>\r\n      </div>\r\n    </div>\r\n    <h3 *ngIf=\"getterService.printManifestations.size > 0\" (click)=\"toggleShow('materials')\">{{'materials' | translate}} <i\r\n      [ngClass]=\"filterService.show['materials'] ? 'pi pi-caret-down' : 'pi pi-caret-right'\"></i></h3>\r\n    <div *ngIf=\"filterService.show['materials'] && getterService.printManifestations.size > 0\" class=\"ui-g\">\r\n      <div *ngFor=\"let m of filterService.uniqueMaterials\" class=\"ui-g-12\">\r\n        <p-checkbox [(ngModel)]=\"filterService.filterList[m]\" binary=\"true\" (onChange)=\"sendEvent()\"\r\n                    label=\"{{'material.' + m | translate}} <{{filterService.statsMaterials.get(m)}} Ex.>\"></p-checkbox>\r\n      </div>\r\n    </div>\r\n    <h3 *ngIf=\"getterService.digitalManifestations.size > 0\" (click)=\"toggleShow('digital')\">{{'E-Books'}} <i\r\n      [ngClass]=\"filterService.show['digital'] ? 'pi pi-caret-down' : 'pi pi-caret-right'\"></i></h3>\r\n    <div *ngIf=\"filterService.show['digital']\" class=\"ui-g\">\r\n      <div *ngFor=\"let m of getterService.digitalManifestations | keyvalue\" class=\"ui-g-12\">\r\n        <p-checkbox [(ngModel)]=\"filterService.filterList[m.value.identifier]\" binary=\"true\" (onChange)=\"sendEvent()\"\r\n                    label=\"{{m.value.identifier}}\"></p-checkbox>\r\n      </div>\r\n    </div>\r\n  </p-scrollPanel>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/filter.component.ts":
/*!*************************************!*\
  !*** ./src/app/filter.component.ts ***!
  \*************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_getter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/getter.service */ "./src/app/service/getter.service.ts");
/* harmony import */ var _service_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/filter.service */ "./src/app/service/filter.service.ts");




var FilterComponent = /** @class */ (function () {
    function FilterComponent(getterService, filterService) {
        this.getterService = getterService;
        this.filterService = filterService;
    }
    FilterComponent.prototype.ngOnInit = function () {
    };
    FilterComponent.prototype.toggleShow = function (feature) {
        this.filterService.show[feature] = !this.filterService.show[feature];
    };
    FilterComponent.prototype.sendEvent = function () {
        this.filterService.applyPrintFilter(this.getterService.printManifestations);
    };
    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/filter.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_getter_service__WEBPACK_IMPORTED_MODULE_2__["GetterService"],
            _service_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/model/ElisaTitle.ts":
/*!*************************************!*\
  !*** ./src/app/model/ElisaTitle.ts ***!
  \*************************************/
/*! exports provided: ElisaTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElisaTitle", function() { return ElisaTitle; });
var ElisaTitle = /** @class */ (function () {
    function ElisaTitle(title) {
        this.title = title;
    }
    return ElisaTitle;
}());



/***/ }),

/***/ "./src/app/model/ElisaTitleData.ts":
/*!*****************************************!*\
  !*** ./src/app/model/ElisaTitleData.ts ***!
  \*****************************************/
/*! exports provided: ElisaTitleData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElisaTitleData", function() { return ElisaTitleData; });
var ElisaTitleData = /** @class */ (function () {
    function ElisaTitleData(notizIntern, notiz, isbn) {
        this.notizIntern = notizIntern;
        this.notiz = notiz;
        this.isbn = isbn;
    }
    return ElisaTitleData;
}());



/***/ }),

/***/ "./src/app/model/Memorylist.ts":
/*!*************************************!*\
  !*** ./src/app/model/Memorylist.ts ***!
  \*************************************/
/*! exports provided: Memorylist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Memorylist", function() { return Memorylist; });
var Memorylist = /** @class */ (function () {
    function Memorylist(created, lastChange, name, savedItems, description, id) {
        this.created = created;
        this.lastChange = lastChange;
        this.name = name;
        this.savedItems = savedItems;
        this.description = description;
        this.id = id;
    }
    return Memorylist;
}());



/***/ }),

/***/ "./src/app/model/ProtokollRequest.ts":
/*!*******************************************!*\
  !*** ./src/app/model/ProtokollRequest.ts ***!
  \*******************************************/
/*! exports provided: ProtokollRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtokollRequest", function() { return ProtokollRequest; });
var ProtokollRequest = /** @class */ (function () {
    function ProtokollRequest() {
        this.collections = '';
        this.materials = '';
        this.exact = false;
        this.shelfmark = '';
        this.type = '';
        this.barcodeRegExp = new RegExp('^[Dd]*[Ee][0-9]{3}[0-9]+');
        this.collectionRegExp = new RegExp('^[DdEe][0-9][0-9]');
        this.isbnRegExp = new RegExp('978[0-9]{9}[0-9X]');
    }
    ProtokollRequest.prototype.update = function () {
        this.checkForCollections();
        this.determineType();
    };
    ProtokollRequest.prototype.asUrlParamters = function () {
        var url = 'shelfmark=' + this.shelfmark;
        if (this.collections !== '') {
            url = url + '&collections=' + this.collections;
        }
        if (this.materials !== '') {
            url = url + '&materials=' + this.materials;
        }
        if (this.exact) {
            url = url + '&exact=true';
        }
        return url;
    };
    ProtokollRequest.prototype.getType = function () {
        this.determineType();
        return this.type;
    };
    ProtokollRequest.prototype.determineType = function () {
        var test = this.shelfmark;
        if (test.indexOf(' ') !== -1) {
            test = test.substring(0, test.indexOf(' '));
        }
        test = test.replace(/-/g, '').trim();
        if (this.isbnRegExp.test(test)) {
            this.type = 'ebook';
        }
        else if (this.barcodeRegExp.test(test)) {
            this.type = 'barcode';
        }
        else {
            this.type = 'shelfmark';
        }
    };
    ProtokollRequest.prototype.checkForCollections = function () {
        var shelfmark = this.shelfmark.trim();
        if (this.collectionRegExp.test(shelfmark)) {
            this.collections = this.collectionRegExp.exec(shelfmark)[0];
            shelfmark = shelfmark.replace(this.collections, '');
            shelfmark = shelfmark.replace(':', '');
            shelfmark = shelfmark.replace('=', '');
            shelfmark = shelfmark.replace(';', '');
            this.shelfmark = shelfmark.trim();
        }
    };
    return ProtokollRequest;
}());



/***/ }),

/***/ "./src/app/model/ProtokollToElisaRequest.ts":
/*!**************************************************!*\
  !*** ./src/app/model/ProtokollToElisaRequest.ts ***!
  \**************************************************/
/*! exports provided: ProtokollToElisaRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtokollToElisaRequest", function() { return ProtokollToElisaRequest; });
var ProtokollToElisaRequest = /** @class */ (function () {
    function ProtokollToElisaRequest(notepadName, userID, titles) {
        this.notepadName = notepadName;
        this.userID = userID;
        this.titles = titles;
    }
    return ProtokollToElisaRequest;
}());



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.updatePrincipal = function () {
        var _this = this;
        var observable = this.http.get('/activeuser'
        // '/assets/data/example_authentication.json'
        );
        observable.subscribe(function (value) { return _this.principal = value; });
        return observable;
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        this.http.post('/logout', {}, { responseType: 'text' }).subscribe(function () { return _this.principal = null; });
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataService = /** @class */ (function () {
    function DataService() {
        this.dataChanged$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DataService.prototype.generatePrintData = function (printManifestations, selectedEvents) {
        this.printData = new Map();
        this.groupedData = new Map();
        if (printManifestations.length === 1) {
            var manifestation = printManifestations[0];
            this.title = manifestation.shelfmark + ' (' + manifestation.edition + '. Auflage)';
        }
        else {
            var title_1 = '';
            printManifestations.forEach(function (manifestation) { return title_1 = title_1 + manifestation.shelfmark + ', '; });
            this.title = title_1.substr(0, title_1.length - 2);
        }
        selectedEvents.sort(function (firstEvent, secondEvent) {
            return firstEvent.time === secondEvent.time ? 0 : +(firstEvent.time > secondEvent.time) || -1;
        });
        for (var _i = 0, selectedEvents_1 = selectedEvents; _i < selectedEvents_1.length; _i++) {
            var event_1 = selectedEvents_1[_i];
            if (event_1.type === 'loan' || event_1.type === 'return') {
                this.addDatapointToMap(event_1, 'loans', this.printData);
                this.addDatapointToMap(event_1, event_1.borrowerStatus, this.groupedData);
            }
            else if (event_1.type === 'request' || event_1.type === 'hold') {
                this.addDatapointToMap(event_1, 'requests', this.printData);
            }
            else if (event_1.type === 'inventory' || event_1.type === 'deletion') {
                this.addDatapointToMap(event_1, 'stock', this.printData);
                this.addDatapointToMap(event_1, 'stock', this.groupedData);
            }
            else if (event_1.type === 'cald' || event_1.type === 'caldDelivery') {
                this.addDatapointToMap(event_1, 'cald', this.printData);
            }
        }
        this.dataChanged$.emit('print');
    };
    DataService.prototype.generateDigitalData = function (digitalDataList) {
        var _this = this;
        this.digitalData = new Map();
        digitalDataList.forEach(function (entry) {
            _this.title = entry.title;
            var list = [];
            for (var _i = 0, _a = entry.usage; _i < _a.length; _i++) {
                var counter = _a[_i];
                var date = new Date(counter.year, counter.month, 15);
                var values = [date.getTime(), counter.totalRequests];
                list.push(values);
            }
            list = list.sort(function (n1, n2) { return n1[0] - n2[0]; });
            _this.digitalData.set(String(entry.identifier), list);
            /*for (const counter of entry.usage) {
              const keyTest = counter.year + '-' + counter.month;
              if (this.filterService.selectedDigitalUsage.has(keyTest)) {
                this.filterService.selectedDigitalUsage.get(keyTest).totalRequests += counter.totalRequests;
              } else {
                this.filterService.selectedDigitalUsage.set(keyTest, counter);
              }
            }*/
        });
    };
    DataService.prototype.addDatapointToMap = function (event, classOfEvent, map) {
        if (event.time > 0) {
            var list = void 0;
            if ((typeof map.get(classOfEvent) === 'undefined')) {
                list = [];
                list.push([event.time, 1]);
            }
            else {
                list = map.get(classOfEvent);
                var lastDatapoint = list[list.length - 1];
                list.push([event.time, lastDatapoint[1]]);
                list.push([event.time, lastDatapoint[1] + event.delta]);
            }
            map.set(classOfEvent, list);
        }
    };
    DataService.prototype.reset = function () {
        this.digitalData = new Map();
        this.printData = new Map();
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/service/elisa.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/elisa.service.ts ***!
  \******************************************/
/*! exports provided: ElisaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElisaService", function() { return ElisaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.globals */ "./src/app/app.globals.ts");
/* harmony import */ var _model_ProtokollToElisaRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/ProtokollToElisaRequest */ "./src/app/model/ProtokollToElisaRequest.ts");
/* harmony import */ var _model_ElisaTitleData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/ElisaTitleData */ "./src/app/model/ElisaTitleData.ts");
/* harmony import */ var _model_ElisaTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/ElisaTitle */ "./src/app/model/ElisaTitle.ts");







var ElisaService = /** @class */ (function () {
    function ElisaService(http) {
        this.http = http;
        this.notepad = 'Ausleihprotokoll';
        this.notizIntern = 'X Exemplare aus Etat ';
    }
    ElisaService.prototype.createElisaRequest = function (isbn, shortShelfmarks) {
        var libraryNote = 'E/D??:1, NB ' + shortShelfmarks;
        this.elisaTitleData = new _model_ElisaTitleData__WEBPACK_IMPORTED_MODULE_5__["ElisaTitleData"](this.notizIntern, libraryNote, isbn);
    };
    ElisaService.prototype.sendToElisa = function () {
        var titles = [];
        titles.push(new _model_ElisaTitle__WEBPACK_IMPORTED_MODULE_6__["ElisaTitle"](this.elisaTitleData));
        var protokollToElisaRequest = new _model_ProtokollToElisaRequest__WEBPACK_IMPORTED_MODULE_4__["ProtokollToElisaRequest"](this.notepad, this.elisaData[0].elisaUserId, titles);
        return this.http.post(_app_globals__WEBPACK_IMPORTED_MODULE_3__["elisaUrl"], JSON.stringify(protokollToElisaRequest), { headers: _app_globals__WEBPACK_IMPORTED_MODULE_3__["headersJson"] });
    };
    ElisaService.prototype.setElisaData = function (username) {
        var _this = this;
        var url = _app_globals__WEBPACK_IMPORTED_MODULE_3__["settingsUrl"] + '/elisadata/forLibintel/' + username;
        // const url = '/assets/data/elisa_data_example.json';
        var observable = this.http.get(url);
        observable.subscribe(function (value) { return _this.elisaData = value; });
        return observable;
    };
    ElisaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ElisaService);
    return ElisaService;
}());



/***/ }),

/***/ "./src/app/service/filter.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/filter.service.ts ***!
  \*******************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterService = /** @class */ (function () {
    function FilterService() {
        this.filterChanged$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resetFilter();
    }
    FilterService.prototype.resetFilter = function () {
        this.show = {};
        this.filterList = {};
        this.uniqueCollections = [];
        this.uniqueMaterials = [];
        this.uniqueCollectionsSet = new Set();
        this.uniqueMaterialsSet = new Set();
    };
    FilterService.prototype.resetPrintSelection = function () {
        this.selectedPrintManifestations = [];
        this.selectedEvents = [];
        this.selectedItems = [];
        this.filteredManifestations = new Map();
        this.filteredItems = new Map();
        this.filteredEvents = new Map();
        this.statsCollection = new Map();
        this.statsMaterials = new Map();
        this.statsManifestations = new Map();
        this.selectedCollections = new Set();
        this.selectedShelfmarks = new Set();
    };
    FilterService.prototype.resetDigitalSelection = function () {
        this.selectedDigitalManifestations = [];
        this.selectedDigitalUsage = new Map();
    };
    FilterService.prototype.buildPrintFilterlist = function (printManifestations) {
        var _this = this;
        this.resetFilter();
        if (printManifestations && printManifestations.size > 0) {
            this.show['editions'] = true;
            this.show['materials'] = true;
            this.show['collections'] = true;
            this.show['filter'] = true;
            this.show['print'] = true;
            printManifestations.forEach(function (value) {
                _this.filterList[value.titleID] = true;
                value.collections.forEach(function (collection) {
                    if (!_this.uniqueCollectionsSet.has(collection)) {
                        _this.uniqueCollectionsSet.add(collection);
                        _this.filterList[collection] = (collection !== '???');
                    }
                });
                value.materials.forEach(function (material) {
                    if (!_this.uniqueMaterialsSet.has(material)) {
                        _this.uniqueMaterialsSet.add(material);
                        _this.filterList[material] = true;
                    }
                });
            });
            this.uniqueMaterials = Array.from(this.uniqueMaterialsSet).sort();
            this.uniqueCollections = Array.from(this.uniqueCollectionsSet).sort();
        }
    };
    FilterService.prototype.buildDigitalFilterlist = function (digitalManifestations) {
        var _this = this;
        if (digitalManifestations && digitalManifestations.size > 0) {
            digitalManifestations.forEach(function (value) { return _this.filterList[value.identifier] = true; });
            this.show['digital'] = true;
            this.show['filter'] = true;
        }
    };
    FilterService.prototype.includeSelectionFromHttpParamters = function (collections) {
        var individualCollections = [];
        if (collections.indexOf(' ') > -1) {
            individualCollections = collections.split(' ');
        }
        else {
            individualCollections.push(collections);
        }
        for (var _i = 0, _a = this.uniqueCollections; _i < _a.length; _i++) {
            var f = _a[_i];
            var fitting = false;
            for (var _b = 0, individualCollections_1 = individualCollections; _b < individualCollections_1.length; _b++) {
                var m = individualCollections_1[_b];
                fitting = f.startsWith(m.trim().toUpperCase());
                if (fitting) {
                    break;
                }
            }
            this.filterList[f] = fitting;
        }
    };
    FilterService.prototype.addPrintManifestationToFilterlist = function (printManifestation) {
        var _this = this;
        if (this.filterList[printManifestation.titleID] !== true) {
            this.filterList[printManifestation.titleID] = true;
            this.selectedPrintManifestations.push(printManifestation);
            this.filteredManifestations[printManifestation.titleID] = printManifestation;
            this.statsManifestations.set(printManifestation.titleID, 0);
            printManifestation.collections.forEach(function (collection) {
                if (!_this.uniqueCollectionsSet.has(collection)) {
                    _this.uniqueCollectionsSet.add(collection);
                    _this.filterList[collection] = (collection !== '???');
                    _this.statsCollection.set(collection, 0);
                }
            });
            printManifestation.materials.forEach(function (material) {
                if (!_this.uniqueMaterialsSet.has(material)) {
                    _this.uniqueMaterialsSet.add(material);
                    _this.statsMaterials.set(material, 0);
                    _this.filterList[material] = true;
                }
            });
            var filteredItemsInd = [];
            var filteredEventsInd = [];
            for (var _i = 0, _a = printManifestation.items; _i < _a.length; _i++) {
                var item = _a[_i];
                if (this.filterList[item.collection]) {
                    filteredItemsInd.push(item);
                    this.selectedItems.push(item);
                    if (item.deletionDate === '') {
                        var numberCollections = this.statsCollection.get(item.collection);
                        numberCollections++;
                        this.statsCollection.set(item.collection, numberCollections);
                        var numberMaterials = this.statsMaterials.get(item.material);
                        numberMaterials++;
                        this.statsMaterials.set(item.material, numberMaterials);
                        var numberManifestations = this.statsManifestations.get(printManifestation.titleID);
                        numberManifestations++;
                        this.statsManifestations.set(printManifestation.titleID, numberManifestations);
                    }
                    for (var _b = 0, _c = item.events; _b < _c.length; _b++) {
                        var event_1 = _c[_b];
                        if (!(event_1.type === 'inventory' || event_1.type === 'deletion') && event_1.borrowerStatus === '12') {
                            continue;
                        }
                        filteredEventsInd.push(event_1);
                        this.selectedEvents.push(event_1);
                        if (event_1.endEvent != null) {
                            this.selectedEvents.push(event_1.endEvent);
                        }
                    }
                }
            }
            this.filteredEvents[printManifestation.titleID] = filteredEventsInd;
            this.filteredItems[printManifestation.titleID] = filteredItemsInd;
            this.uniqueMaterials = Array.from(this.uniqueMaterialsSet).sort();
            this.uniqueCollections = Array.from(this.uniqueCollectionsSet).sort();
            this.selectedEvents.sort(function (firstEvent, secondEvent) {
                return firstEvent.time === secondEvent.time ? 0 : +(firstEvent.time > secondEvent.time) || -1;
            });
        }
    };
    FilterService.prototype.addDigitalManifestationToFilterlist = function (digitalManifestation) {
        this.selectedDigitalManifestations.push(digitalManifestation);
        this.selectedDigitalUsage.set(digitalManifestation.identifier, digitalManifestation.usage);
        this.filterList[digitalManifestation.identifier] = true;
    };
    FilterService.prototype.applyPrintFilter = function (printManifestations) {
        var _this = this;
        this.resetPrintSelection();
        this.uniqueCollections.forEach(function (entry) { return _this.statsCollection.set(entry, 0); });
        this.uniqueMaterials.forEach(function (entry) { return _this.statsMaterials.set(entry, 0); });
        printManifestations.forEach(function (printManifestation) {
            _this.statsManifestations.set(printManifestation.titleID, 0);
            var filteredItemsInd = [];
            var filteredEventsInd = [];
            if (_this.filterList[printManifestation.titleID]) {
                _this.selectedPrintManifestations.push(printManifestation);
                for (var _i = 0, _a = printManifestation.items; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (_this.filterList[item.collection] && _this.filterList[item.material]) {
                        _this.selectedCollections.add(item.collection);
                        _this.selectedShelfmarks.add(item.shelfmark);
                        _this.selectedItems.push(item);
                        filteredItemsInd.push(item);
                        if (item.deletionDate === '') {
                            var numberCollections = _this.statsCollection.get(item.collection);
                            numberCollections++;
                            _this.statsCollection.set(item.collection, numberCollections);
                            var numberMaterials = _this.statsMaterials.get(item.material);
                            numberMaterials++;
                            _this.statsMaterials.set(item.material, numberMaterials);
                            var numberManifestations = _this.statsManifestations.get(printManifestation.titleID);
                            numberManifestations++;
                            _this.statsManifestations.set(printManifestation.titleID, numberManifestations);
                        }
                        for (var _b = 0, _c = item.events; _b < _c.length; _b++) {
                            var event_2 = _c[_b];
                            if (!(event_2.type === 'inventory' || event_2.type === 'deletion') && event_2.borrowerStatus === '12') {
                                continue;
                            }
                            filteredEventsInd.push(event_2);
                            _this.selectedEvents.push(event_2);
                            if (event_2.endEvent != null) {
                                _this.selectedEvents.push(event_2.endEvent);
                            }
                        }
                    }
                }
                _this.filteredManifestations[printManifestation.titleID] = printManifestation;
                _this.filteredEvents[printManifestation.titleID] = filteredEventsInd;
                _this.filteredItems[printManifestation.titleID] = filteredItemsInd;
            }
        });
        this.selectedEvents.sort(function (firstEvent, secondEvent) {
            return firstEvent.time === secondEvent.time ? 0 : +(firstEvent.time > secondEvent.time) || -1;
        });
        this.filterChanged$.emit('filterChanged');
    };
    FilterService.prototype.applyDigitalFilter = function (digitalManifestations) {
        var _this = this;
        this.resetDigitalSelection();
        digitalManifestations.forEach(function (digitalManifestation) {
            if (_this.filterList[digitalManifestation.identifier]) {
                _this.selectedDigitalManifestations.push(digitalManifestation);
                _this.selectedDigitalUsage.set(digitalManifestation.identifier, digitalManifestation.usage);
            }
        });
    };
    FilterService.prototype.getFilteredTitleIds = function () {
        var titleIds = '';
        this.filteredManifestations.forEach(function (key, value) { return titleIds = titleIds + key + '; '; });
        titleIds = titleIds.substring(0, titleIds.length - 2);
        return titleIds;
    };
    FilterService.prototype.getFilteredShelfmarks = function () {
        var shelfmarks = '';
        this.selectedShelfmarks.forEach(function (shelfmark) { return shelfmarks = shelfmarks + shelfmark + '; '; });
        shelfmarks = shelfmarks.substring(0, shelfmarks.length - 2);
        return shelfmarks;
    };
    FilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "./src/app/service/getter.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/getter.service.ts ***!
  \*******************************************/
/*! exports provided: GetterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetterService", function() { return GetterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.globals */ "./src/app/app.globals.ts");





var GetterService = /** @class */ (function () {
    function GetterService(http) {
        this.http = http;
    }
    GetterService.prototype.reset = function () {
        this.printManifestations = new Map();
        this.digitalManifestations = new Map();
        this.primoData = new Map();
    };
    GetterService.prototype.getAllDigitalManifestations = function (protokollRequest) {
        var url = _app_globals__WEBPACK_IMPORTED_MODULE_4__["counterretrievalUrl"] + '/ebookcounter/isbns/' + protokollRequest.shelfmark.replace(' ', ';');
        // const url = 'assets/data/example_digital_manifestations.json';
        return this.http.get(url);
    };
    GetterService.prototype.searchPrimoForAutorTitle = function (authors, title) {
        return this.http.get(_app_globals__WEBPACK_IMPORTED_MODULE_4__["getterUrl"] + '/getauthorTitle?authors=' + authors + '&title=' + title);
    };
    GetterService.prototype.searchPrimoForShelfmark = function (shelfmark) {
        return this.http.get(_app_globals__WEBPACK_IMPORTED_MODULE_4__["getterUrl"] + '/getPrimoResponse/shelfmark/' + shelfmark);
    };
    GetterService.prototype.getDigitalManifestation = function (identifier) {
        // const url = 'assets/data/example_ebookcounter.json';
        var url = _app_globals__WEBPACK_IMPORTED_MODULE_4__["counterretrievalUrl"] + '/ebookcounter/isbn/' + identifier;
        return this.http.get(url);
    };
    GetterService.prototype.getDigitalManifestationByIdentifiers = function (isbn, doi) {
        // const url = 'assets/data/example_ebookcounter.json';
        var url = _app_globals__WEBPACK_IMPORTED_MODULE_4__["counterretrievalUrl"] + '/ebookcounter/identifiers?doi=' + doi + '&isbn=' + isbn;
        return this.http.get(url);
    };
    GetterService.prototype.searchPrimoForIsbn = function (identifier) {
        // const url = '/assets/data/example_primo_response.json';
        var url = _app_globals__WEBPACK_IMPORTED_MODULE_4__["getterUrl"] + '/getPrimoResponse/isbn/' + identifier.trim();
        return this.http.get(url);
    };
    GetterService.prototype.getPrintManifestation = function (identifier) {
        var url = _app_globals__WEBPACK_IMPORTED_MODULE_4__["getterUrl"] + '/buildFullManifestation?identifier=' + identifier.trim();
        // const url = 'assets/data/example_manifestation.json';
        return this.http.get(url);
    };
    GetterService.prototype.getAllPrintManifestations = function (protokollRequest) {
        var shelfmark = protokollRequest.shelfmark.trim().replace('+', '%2B').replace(' ', ';');
        var url = _app_globals__WEBPACK_IMPORTED_MODULE_4__["getterUrl"] + '/fullManifestation?identifier=' + shelfmark.trim() + '&exact=' + protokollRequest.exact;
        if (protokollRequest.getType() === 'barcode') {
            url = url + '&barcode';
        }
        // url = 'assets/data/example.json';
        return this.http.get(url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ timeout: "" + 60000 }) });
    };
    GetterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], GetterService);
    return GetterService;
}());



/***/ }),

/***/ "./src/app/service/memorylist.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/memorylist.service.ts ***!
  \***********************************************/
/*! exports provided: MemorylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemorylistService", function() { return MemorylistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.globals */ "./src/app/app.globals.ts");
/* harmony import */ var _model_Memorylist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/Memorylist */ "./src/app/model/Memorylist.ts");





var MemorylistService = /** @class */ (function () {
    function MemorylistService(http) {
        this.http = http;
        this.memorylists = [];
        this.tabindex = 0;
        this.actionTypes = ['Aussonderung', 'Umstellung'];
        this.stockcontrols = [];
        this.activeMemorylist = new _model_Memorylist__WEBPACK_IMPORTED_MODULE_4__["Memorylist"](new Date(), new Date(), '', [], '');
        this.memorylistItemChanged$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.reset();
    }
    MemorylistService.prototype.reset = function () {
        this.stockcontrols = [];
        this.memorylistItems = [];
        this.memorylists = [];
        this.savedActions = new Map();
    };
    MemorylistService.prototype.createNewList = function () {
        var url = _app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/newMemorylist';
        return this.http.post(url, JSON.stringify(this.activeMemorylist), { headers: _app_globals__WEBPACK_IMPORTED_MODULE_3__["headersJson"] });
    };
    MemorylistService.prototype.addMemorylistItem = function (memorylistItem) {
        var _this = this;
        this.http.post(_app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/memorylistItem', JSON.stringify(memorylistItem), { headers: _app_globals__WEBPACK_IMPORTED_MODULE_3__["headersJson"] }).subscribe(function (data) {
            _this.http.put(_app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/memorylistItem/' + data.id + '/memorylist', _app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/memorylist/' + _this.activeMemorylist.id, { headers: _app_globals__WEBPACK_IMPORTED_MODULE_3__["headersConnect"] }).map(function (response) { return response['_embedded']['memeorylistItem']; }).subscribe(function () { return _this.activeMemorylistItem = data; });
        });
    };
    MemorylistService.prototype.updateItemAction = function (itemAction) {
        return this.http.put(_app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/itemAction/' + itemAction.uuid, JSON.stringify(itemAction), { headers: _app_globals__WEBPACK_IMPORTED_MODULE_3__["headersJson"] });
    };
    MemorylistService.prototype.addItemAction = function (itemAction) {
        var _this = this;
        if (this.savedActions.has(itemAction.itemId)) {
            return false;
        }
        else {
            this.http.post(_app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/itemAction', JSON.stringify(itemAction), { headers: _app_globals__WEBPACK_IMPORTED_MODULE_3__["headersJson"] }).subscribe(function (data) {
                _this.http.put(_app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/itemAction/' + data.uuid + '/memorylistItem', _app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/memorylistItem/' + _this.activeMemorylistItem.id, { headers: _app_globals__WEBPACK_IMPORTED_MODULE_3__["headersConnect"] }).subscribe(function () {
                    _this.activeMemorylistItem.itemActions.push(data);
                    _this.savedActions.set(data.itemId, data);
                    return true;
                });
            });
        }
    };
    MemorylistService.prototype.removeItemAction = function (itemAction) {
        var _this = this;
        if (!this.savedActions.has(itemAction.itemId)) {
            return false;
        }
        else {
            this.http.delete(_app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/itemAction/' + itemAction.uuid).subscribe(function () {
                _this.activeMemorylistItem.itemActions = _this.activeMemorylistItem.itemActions.filter(function (entry) { return entry !== itemAction; });
                _this.savedActions.delete(itemAction.itemId);
            });
        }
    };
    MemorylistService.prototype.addTitleAction = function (titleAction) {
        var _this = this;
        if (this.savedActions.has(titleAction.titleId)) {
            return false;
        }
        else {
            this.http.post(_app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/titleAction', JSON.stringify(titleAction), { headers: _app_globals__WEBPACK_IMPORTED_MODULE_3__["headersJson"] }).subscribe(function (data) {
                _this.http.put(_app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/titleAction/' + data.uuid + '/memorylistItem', _app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/memorylistItem/' + _this.activeMemorylistItem.id, { headers: _app_globals__WEBPACK_IMPORTED_MODULE_3__["headersConnect"] }).subscribe(function () {
                    _this.activeMemorylistItem.titleActions.push(data);
                    _this.savedActions.set(data.titleId, data);
                    return true;
                });
            });
        }
    };
    MemorylistService.prototype.removeTitleAction = function (titleAction) {
        var _this = this;
        var key = titleAction.actionType + '-' + titleAction.titleId;
        if (!this.savedActions.has(key)) {
            return false;
        }
        else {
            this.http.delete(_app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/titleAction/' + titleAction.uuid).subscribe(function () {
                _this.activeMemorylistItem.titleActions = _this.activeMemorylistItem.titleActions.filter(function (entry) { return entry !== titleAction; });
                _this.savedActions.delete(titleAction.titleId);
            });
        }
    };
    MemorylistService.prototype.getItemlistsForUser = function (username) {
        var url = _app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/memorylist/forUser/' + username;
        return this.http.get(url);
    };
    MemorylistService.prototype.getStockcontrolsForUser = function (username) {
        var url = _app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/stockcontrol/peruser/' + username;
        return this.http.get(url);
    };
    MemorylistService.prototype.getItemlist = function (identifier) {
        return this.http.get(_app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/memorylist/' + identifier);
    };
    MemorylistService.prototype.importStockcontrol = function (identifier) {
        return this.http.get(_app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/memorylist/fromStockcontrol/' + identifier);
    };
    MemorylistService.prototype.getItemsForMemorylist = function (uuid) {
        return this.http.get(_app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/memorylist/' + uuid + '/memorylistItems')
            .map(function (response) { return response['_embedded']['memorylistItem']; });
    };
    MemorylistService.prototype.saveActiveMemorylist = function () {
        return this.http.post(_app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/memorylist/' + this.activeMemorylist.id, JSON.stringify(this.activeMemorylist), { headers: _app_globals__WEBPACK_IMPORTED_MODULE_3__["headersJson"] });
    };
    MemorylistService.prototype.selectMemorylistItem = function (savedItem) {
        var _this = this;
        this.activeMemorylistItem = savedItem;
        this.http.get(_app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/memorylistItem/' + this.activeMemorylistItem.id +
            '/titleActions').map(function (response) { return response['_embedded']['titleAction']; }).subscribe(function (data) {
            _this.activeMemorylistItem.titleActions = data;
            data.forEach(function (entry) { return _this.savedActions.set(entry.titleId, entry); });
        });
        this.http.get(_app_globals__WEBPACK_IMPORTED_MODULE_3__["stockanalyzerUrl"] + '/memorylistItem/' + this.activeMemorylistItem.id +
            '/itemActions').map(function (response) { return response['_embedded']['itemAction']; }).subscribe(function (data) {
            _this.activeMemorylistItem.itemActions = data;
            data.forEach(function (entry) { return _this.savedActions.set(entry.itemId, entry); });
        });
        this.memorylistItemChanged$.emit(savedItem);
    };
    MemorylistService.prototype.nextMemorylistItem = function () {
        this.tabindex++;
        this.selectMemorylistItem(this.memorylistItems[this.tabindex]);
    };
    MemorylistService.prototype.previousMemorylistItem = function () {
        this.tabindex--;
        this.selectMemorylistItem(this.memorylistItems[this.tabindex]);
    };
    MemorylistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MemorylistService);
    return MemorylistService;
}());



/***/ }),

/***/ "./src/app/stockmanagement.component.html":
/*!************************************************!*\
  !*** ./src/app/stockmanagement.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <p-slideMenu #menu [model]=\"mainMenu\" [popup]=\"true\"></p-slideMenu>\r\n  <span class=\"navbar-text\">\r\n  <button #btn type=\"button\" pButton icon=\"pi pi-bars\" label=\"{{authenticationService.principal.fullname}}\"\r\n          (click)=\"menu.toggle($event)\"></button>\r\n  </span>\r\n<p-dialog [(visible)]=\"show['newList']\">\r\n  <p-header>\r\n    {{'new.memorylist' | translate}}\r\n  </p-header>\r\n  <input type=\"text\" size=\"60\" pInputText [(ngModel)]=\"itemlistsService.activeMemorylist.name\"/>\r\n  <textarea [rows]=\"5\" [cols]=\"60\" type=\"text\" pInputText\r\n            [(ngModel)]=\"itemlistsService.activeMemorylist.description\"></textarea>\r\n  <p-footer>\r\n    <button pButton type=\"button\" label=\"{{'save' | translate}}\" (click)=\"saveNewList()\"></button>\r\n    <button pButton type=\"button\" label=\"{{'cancel' | translate}}\" (click)=\"show['newList'] = false;\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<p-dialog [(visible)]=\"show['stockcontrolImport']\">\r\n  <p-header>\r\n    <p-dropdown [options]=\"itemlistsService.stockcontrols\" optionLabel=\"description\"\r\n                [(ngModel)]=\"stockcontrol\"></p-dropdown>\r\n  </p-header>\r\n  <p-footer>\r\n    <button pButton type=\"button\" label=\"Import\"\r\n            (click)=\"loadItemlistFromStockcontrol(stockcontrol.identifier)\"></button>\r\n    <button pButton type=\"button\" label=\"{{'cancel' | translate}}\" (click)=\"show['stockcontrolImport'] = false;\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<p-dialog [(visible)]=\"show['deletionSettings']\">\r\n  <p-header>\r\n    {{'task' | translate}}\r\n  </p-header>\r\n  <p-footer>\r\n    <p-dropdown [options]=\"itemlistsService.actionTypes\"\r\n                [(ngModel)]=\"itemlistsService.actionType\"></p-dropdown>\r\n    <p-dropdown [options]=\"filterService.uniqueCollections\"\r\n                [(ngModel)]=\"itemlistsService.collectionInd\"></p-dropdown>\r\n    <p-spinner [(ngModel)]=\"itemlistsService.number\" [min]=\"0\"></p-spinner>\r\n    <button pButton type=\"button\" label=\"Import\"\r\n            (click)=\"addAction()\"></button>\r\n    <button pButton type=\"button\" label=\"{{'cancel' | translate}}\" (click)=\"show['deletionSettings'] = false;\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/app/stockmanagement.component.ts":
/*!**********************************************!*\
  !*** ./src/app/stockmanagement.component.ts ***!
  \**********************************************/
/*! exports provided: StockmanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockmanagementComponent", function() { return StockmanagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_memorylist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/memorylist.service */ "./src/app/service/memorylist.service.ts");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _model_Memorylist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/Memorylist */ "./src/app/model/Memorylist.ts");
/* harmony import */ var _service_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/filter.service */ "./src/app/service/filter.service.ts");






var StockmanagementComponent = /** @class */ (function () {
    function StockmanagementComponent(itemlistsService, authenticationService, filterService) {
        var _this = this;
        this.itemlistsService = itemlistsService;
        this.authenticationService = authenticationService;
        this.filterService = filterService;
        this.show = {};
        this.itemlistMenu = [
            {
                label: 'new List',
                icon: 'pi pi-fw pi-plus',
                command: function (event) { return _this.createNewList(); }
            }
        ];
    }
    StockmanagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.show['newList'] = false;
        this.show['uploadForm'] = false;
        this.show['importStockcontrol'] = false;
        if (this.authenticationService.principal) {
            if (this.authenticationService.principal.roles.indexOf('ROLE_FACHREFERENT') > -1) {
                this.getItemlists();
            }
        }
        this.mainMenu = [
            {
                label: 'Listen',
                items: this.itemlistMenu
            },
            {
                label: 'Profil-Import',
                command: function (event) { return _this.getStockcontrols(); }
            },
            {
                label: 'csv-Import',
                command: function (event) { return _this.show['uploadForm'] = true; }
            },
            {
                label: 'ELi:SA-Daten ändern',
                command: function (event) { return window.location.href = '/fachref/user'; }
            },
            {
                label: 'Listen verwalten',
                command: function (event) { return window.location.href = '/fachref/lists'; }
            },
            {
                label: 'Aufgaben abschicken',
                command: function (event) { return window.location.href = '/fachref/lists/' + _this.itemlistsService.activeMemorylist.id; }
            },
            {
                label: 'Logout',
                command: function (event) { return _this.authenticationService.logout(); }
            }
        ];
    };
    StockmanagementComponent.prototype.getItemlists = function () {
        var _this = this;
        this.itemlistsService.getItemlistsForUser(this.authenticationService.principal.name).subscribe(function (data) {
            console.log(data);
            _this.itemlistsService.memorylists = data;
            data.forEach(function (entry) { return _this.itemlistMenu.push({
                id: entry.id,
                label: entry.name,
                command: function (event) {
                    _this.loadItemlist(entry.id);
                }
            }); });
        });
    };
    StockmanagementComponent.prototype.getStockcontrols = function () {
        var _this = this;
        this.itemlistsService.getStockcontrolsForUser(this.authenticationService.principal.name).subscribe(function (data) {
            _this.itemlistsService.stockcontrols = data;
            _this.show['stockcontrolImport'] = true;
        });
    };
    StockmanagementComponent.prototype.loadItemlistFromStockcontrol = function (identifier) {
        var _this = this;
        this.itemlistsService.importStockcontrol(identifier).subscribe(function (data) {
            _this.itemlistsService.activeMemorylist = data;
            _this.show['stockcontrolImport'] = false;
        });
    };
    StockmanagementComponent.prototype.loadItemlist = function (identifier) {
        var _this = this;
        this.itemlistsService.getItemlist(identifier).subscribe(function (data) {
            _this.itemlistsService.activeMemorylist = data;
            _this.itemlistsService.getItemsForMemorylist(data.id).subscribe(function (savedItems) {
                _this.itemlistsService.memorylistItems = savedItems;
                _this.itemlistsService.selectMemorylistItem(savedItems[0]);
            });
        });
    };
    StockmanagementComponent.prototype.createNewList = function () {
        this.itemlistsService.activeMemorylist = new _model_Memorylist__WEBPACK_IMPORTED_MODULE_4__["Memorylist"](new Date(), new Date(), 'neue Liste', [], 'Beschreibung');
        this.show['newList'] = true;
    };
    StockmanagementComponent.prototype.saveNewList = function () {
        var _this = this;
        this.itemlistsService.createNewList().subscribe(function (data) {
            _this.itemlistsService.activeMemorylist = data;
            _this.itemlistsService.memorylists.push(data);
            _this.show['newList'] = false;
            _this.itemlistMenu.push({
                id: data.id,
                label: data.description,
                command: function (event) {
                    _this.loadItemlist(data.id);
                }
            });
        });
    };
    StockmanagementComponent.prototype.addAction = function () {
    };
    StockmanagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stockmanagement',
            template: __webpack_require__(/*! ./stockmanagement.component.html */ "./src/app/stockmanagement.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_memorylist_service__WEBPACK_IMPORTED_MODULE_2__["MemorylistService"],
            _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _service_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"]])
    ], StockmanagementComponent);
    return StockmanagementComponent;
}());



/***/ }),

/***/ "./src/app/translate/index.ts":
/*!************************************!*\
  !*** ./src/app/translate/index.ts ***!
  \************************************/
/*! exports provided: TranslateService, TRANSLATIONS, dictionary, TRANSLATION_PROVIDERS, TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate.service */ "./src/app/translate/translate.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return _translate_service__WEBPACK_IMPORTED_MODULE_0__["TranslateService"]; });

/* harmony import */ var _translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translation */ "./src/app/translate/translation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TRANSLATIONS", function() { return _translation__WEBPACK_IMPORTED_MODULE_1__["TRANSLATIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dictionary", function() { return _translation__WEBPACK_IMPORTED_MODULE_1__["dictionary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TRANSLATION_PROVIDERS", function() { return _translation__WEBPACK_IMPORTED_MODULE_1__["TRANSLATION_PROVIDERS"]; });

/* harmony import */ var _translate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translate.pipe */ "./src/app/translate/translate.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return _translate_pipe__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]; });






/***/ }),

/***/ "./src/app/translate/lang-de.ts":
/*!**************************************!*\
  !*** ./src/app/translate/lang-de.ts ***!
  \**************************************/
/*! exports provided: LANG_DE_NAME, LANG_DE_TRANS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_DE_NAME", function() { return LANG_DE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_DE_TRANS", function() { return LANG_DE_TRANS; });
var LANG_DE_NAME = 'de';
var LANG_DE_TRANS = {
    'year': 'Jahr',
    'month': 'Monat',
    'usergroups': 'Nutzergruppen',
    'overview': 'Überblick',
    'show.filter': 'Filter anzeigen',
    'hide.filter': 'Filter ausblenden',
    'shelfmark': 'Signatur oder Barcode',
    'collection': 'Standort',
    'number.loans': 'Anzahl Ausleihen',
    'submit': 'Abfrage starten',
    'collecting.data': 'Datenw erden abgerufen',
    'tooltip.shelfmark': 'Bitte Signatur eingeben',
    'tab.overview': 'Überblick',
    'tab.bibliography': 'Titeldaten',
    'tab.information': 'Zahlen',
    'tab.itemlist': 'Exemplare',
    'tab.usage': 'Nutzung',
    'tab.eventlist': 'Ereignisse',
    'tab.statistics': 'Daten',
    'tab.analysis': 'Analyse',
    'title.protocol': 'Ausleihprotokoll',
    'description.protocol.short': 'Alle Details zu einem Titel',
    'description.analysis.short': 'In dieser Tabelle werden die ungenutzten Exemplare in den zurückliegenden X Jahren dargestellt.',
    'title.overview': 'Überblick',
    'title.bibliography': 'Bibliographische Angaben',
    'title.statistics': 'Zahlen',
    'title.itemlist': 'Exemplarübersicht',
    'title.eventlist': 'Ereignisübersicht',
    'title.analysis': 'Analyse',
    'title.usage': 'Nutzung',
    'editions': 'Auflagen',
    'materials': 'Materialien',
    'collections': 'Standorte',
    'subLibraries': 'Zweigbibliothek',
    'material.BOOK': 'Bücher',
    'material.CDROM': 'CD-ROM',
    'material.': 'unbekannt',
    'material.???': 'unbekannt',
    'subLibrary.E0001': 'Campus Essen',
    'subLibrary.D0001': 'Campus Duisburg',
    'subLibrary.E0023': 'FachBibl Medizin',
    'subLibrary.???': 'unbekannt',
    'series.loans': 'Ausleihen',
    'series.requests': 'Vormerkungen',
    'series.stock': 'Bestand',
    'series.cald': 'CaLD',
    'event.type.loan': 'Ausleihe',
    'event.type.return': 'Rückgabe',
    'event.type.request': 'Vormerkung',
    'event.type.hold': 'Abholung',
    'event.type.inventory': 'Inventarisierung',
    'event.type.deletion': 'Aussonderung',
    'event.type.cald': 'CaLD',
    'event.type.caldDelivery': 'CaLD Ankunft',
    'series.01': 'Studierende',
    'series.05': 'Promovierende + Habilitierende',
    'series.18': 'ExamenskandidatInnen',
    'series.21': 'Angehörige anderer HS',
    'series.23': 'HS-Angehörige (UA Ruhr)',
    'series.06': 'Hochschulangehörige UDE',
    'series.03': 'HS-Angehörige (Sonderkond.) UDE',
    'series.24': 'Studierende, schwerbehindert',
    'series.22': 'Externe BenutzerInnen',
    'series.20': 'SchülerInnen (DJ/EJ bis 18 Jahre, sonst DE/EE)',
    'series.07': 'Handapparat',
    'series.08': 'Handapparat, gemeinsamer',
    'series.04': 'Handapparat, 15 Ausleihen',
    'series.09': 'Projekt',
    'series.10': 'Semesterapparat',
    'series.12': 'Bibliotheksverw. / Dienstgebrauch',
    'series.13': 'Neuerw. / 14 Tage',
    'series.16': 'Fernleihe, national',
    'series.17': 'Fernleihe, international',
    'series.50': 'Neuanmeldungen - gesperrt',
    'series.02': 'Inaktive - zur Löschung vorgesehen',
    'series.25': 'Exmatrikulierte - noch aktiv',
    'event.borrowerStatus.01': 'Studierende',
    'event.borrowerStatus.05': 'Promovierende + Habilitierende',
    'event.borrowerStatus.18': 'ExamenskandidatInnen',
    'event.borrowerStatus.21': 'Angehörige anderer HS',
    'event.borrowerStatus.23': 'HS-Angehörige (UA Ruhr)',
    'event.borrowerStatus.06': 'Hochschulangehörige UDE',
    'event.borrowerStatus.03': 'HS-Angehörige (Sonderkond.) UDE',
    'event.borrowerStatus.24': 'Studierende, schwerbehindert',
    'event.borrowerStatus.22': 'Externe BenutzerInnen',
    'event.borrowerStatus.20': 'SchülerInnen (DJ/EJ bis 18 Jahre, sonst DE/EE)',
    'event.borrowerStatus.07': 'Handapparat',
    'event.borrowerStatus.08': 'Handapparat, gemeinsamer',
    'event.borrowerStatus.04': 'Handapparat, 15 Ausleihen',
    'event.borrowerStatus.09': 'Projekt',
    'event.borrowerStatus.10': 'Semesterapparat',
    'event.borrowerStatus.12': 'Bibliotheksverw. / Dienstgebrauch',
    'event.borrowerStatus.13': 'Neuerw. / 14 Tage',
    'event.borrowerStatus.16': 'Fernleihe, national',
    'event.borrowerStatus.17': 'Fernleihe, international',
    'event.borrowerStatus.50': 'Neuanmeldungen - gesperrt',
    'event.borrowerStatus.02': 'Inaktive - zur Löschung vorgesehen',
    'event.borrowerStatus.25': 'Exmatrikulierte - noch aktiv',
    'event.borrowerStatus.': 'unbekannt',
    'event.borrowerStatus.???': 'unbekannt',
    'item.process.status.IU': ', in der internen Umarbeitung',
    'item.process.status.IG': ', nicht am Standort',
    'item.process.status.GG': ', in Bearbeitung',
    'item.process.status.NE': ', Neuerwerbungen',
    'item.process.status.BD': ', beim Buchbinder',
    'item.process.status.ZS': ', Zsn-Katalogisierung',
    'item.process.status.WE': ', Werkstatt',
    'item.process.status.MS': ', vermisst',
    'item.process.status.BW': ', wird bestellt',
    'item.process.status.BS': ', bestellt',
    'item.process.status.BP': ', Zsn.-Heft erwartet',
    'item.process.status.NP': ', erscheint nicht',
    'item.process.status.VG': ', vergriffen',
    'item.process.status.ST': ', storniert',
    'item.process.status.SU': ', Semesterapparat',
    'item.process.status.UU': ', Präsenzapparat IBW Raum BB',
    'item.process.status.FS': ', Fortsetzungen',
    'item.process.status.TA': ', Themenaktion',
    'item.process.status.WP': ', Bestellwunsch / Benutzer',
    'item.process.status.IL': ', Fernleihmaterial',
    'item.process.status.RK': ', reklamiert',
    'item.process.status.NV': ', nicht am Standort',
    'item.process.status.': ' ',
    'item.process.status.???': ' ',
    'item.status.xx': 'ausgesodnert',
    'item.status': 'Status',
    'item.status.': 'unbekannt',
    'item.status.undefined': 'unbekannt',
    'item.status.???': 'unbekannt',
    'item.status.10': 'Ausleihbestand',
    'item.status.11': '',
    'item.status.12': 'Magazinausleihe',
    'item.status.30': 'Zeitschriftenbände',
    'item.status.31': 'Zeitschriftenband, Magazin',
    'item.status.38': 'Zeitschriften-Stücktitel, Päsenz',
    'item.status.39': 'Zeitschriften-Heft',
    'item.status.42': 'Dienstgebrauch',
    'item.status.43': 'Projekt, Staffelexemplar',
    'item.status.44': 'Projekt',
    'item.status.45': 'Handapparat',
    'item.status.46': 'Externer Bestand',
    'item.status.50': 'Rara',
    'item.status.51': 'Magazin Präsenz',
    'item.status.52': 'Präsenz, Keine Kurzausleihe',
    'item.status.53': 'Präsenzbestand',
    'item.status.54': 'bestellbar, Lesegerät erforderlich',
    'item.status.55': 'In den Lesesaal bestellbar',
    'item.status.85': 'Verlust Staffelexemplar',
    'item.status.86': 'Verbrauchsmaterial',
    'item.status.87': 'Mahnfall, Staffelexemplar',
    'item.status.89': 'ausgesondert',
    'item.status.90': 'ausgesondert',
    'item.status.92': 'Interne Titelaufnahme',
    'item.status.93': 'Projekt, Einzelexemplar',
    'item.status.95': 'Verlust, Einzelexemplar',
    'item.status.96': 'Projekt, Einzelexemplar',
    'item.status.97': 'Mahnfall, Einzelexemplar',
    'item.status.kA': 'keine Angabe',
    'item.status.sE': 'siehe Einzelbände',
    'statistics.numberLoans': 'Anzahl Ausleihen',
    'statistics.numberRequests': 'Anzahl Vormerkungen',
    'statistics.numberCald': 'Anzahl CALD',
    'statistics.averageLoan': 'Mittlere Ausleihe',
    'series.': 'andere',
    'series.???': 'unbekannt',
    'usage.totalRequests': 'Nutzung',
    'message.nothingFound': 'Leider konnten keine Auflagen gefunden werden. Bitte eine gültige Signatur eingeben.',
    'message.error': 'Es ist ein Fehler aufgetreten. Die Daten konnten nicht abgerufen werden.',
    'message,noUsage': 'Es wurden keine Nutzungsdaten gefunden.',
    'message.noConnection': 'Es konnte keine Verbindung zur Nutzungsddatenbank hergestellt werden.',
    'cancel': 'Abbrechen',
    'action': 'Anweisung',
    'task': 'Aufgabe',
    'new.memorylist': 'Neue Merkliste',
    'save': 'Speichern',
    'collection.from': 'woher?',
    'collection.to': 'wohin?',
    'number': 'Anzahl',
    'ok': 'OK',
    'select.years.for.analysis': 'Bitte einen Zeitraum für die Analyse auswählen.',
};


/***/ }),

/***/ "./src/app/translate/lang-en.ts":
/*!**************************************!*\
  !*** ./src/app/translate/lang-en.ts ***!
  \**************************************/
/*! exports provided: LANG_EN_NAME, LANG_EN_TRANS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_EN_NAME", function() { return LANG_EN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANG_EN_TRANS", function() { return LANG_EN_TRANS; });
var LANG_EN_NAME = 'en';
var LANG_EN_TRANS = {
    'subject_75': 'Biology',
    'status_deleted': 'weed',
    'status_ignored': 'ignore',
    'status_reposiotry': 'relocate'
};


/***/ }),

/***/ "./src/app/translate/translate.module.ts":
/*!***********************************************!*\
  !*** ./src/app/translate/translate.module.ts ***!
  \***********************************************/
/*! exports provided: TranslateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateModule", function() { return TranslateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translate.pipe */ "./src/app/translate/translate.pipe.ts");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translate.service */ "./src/app/translate/translate.service.ts");
/* harmony import */ var _translation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translation */ "./src/app/translate/translation.ts");
/*
* https://scotch.io/tutorials/simple-language-translation-in-angular-2-part-1
* https://stackoverflow.com/questions/39007130/the-pipe-could-not-be-found-angular2-custom-pipe
*/





var TranslateModule = /** @class */ (function () {
    function TranslateModule() {
    }
    TranslateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [],
            declarations: [_translate_pipe__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
            exports: [_translate_pipe__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
            providers: [_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _translation__WEBPACK_IMPORTED_MODULE_4__["TRANSLATION_PROVIDERS"]]
        })
    ], TranslateModule);
    return TranslateModule;
}());



/***/ }),

/***/ "./src/app/translate/translate.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/translate/translate.pipe.ts ***!
  \*********************************************/
/*! exports provided: TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translate.service */ "./src/app/translate/translate.service.ts");



var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(translate) {
        this.translate = translate;
    }
    TranslatePipe.prototype.transform = function (value, lang) {
        if (!value) {
            return;
        }
        if (lang) {
            this.translate.use(lang);
        }
        return this.translate.instant(value);
    };
    TranslatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'translate',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], TranslatePipe);
    return TranslatePipe;
}());



/***/ }),

/***/ "./src/app/translate/translate.service.ts":
/*!************************************************!*\
  !*** ./src/app/translate/translate.service.ts ***!
  \************************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translation */ "./src/app/translate/translation.ts");



var TranslateService = /** @class */ (function () {
    function TranslateService(_translations) {
        this._translations = _translations;
        this._currentLang = 'de';
    }
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        get: function () {
            return this._currentLang;
        },
        enumerable: true,
        configurable: true
    });
    TranslateService.prototype.use = function (lang) {
        this._currentLang = lang;
    };
    TranslateService.prototype.translate = function (key) {
        var translation = key;
        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }
        return translation;
    };
    TranslateService.prototype.instant = function (key) {
        return this.translate(key);
    };
    TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_translation__WEBPACK_IMPORTED_MODULE_2__["TRANSLATIONS"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ "./src/app/translate/translation.ts":
/*!******************************************!*\
  !*** ./src/app/translate/translation.ts ***!
  \******************************************/
/*! exports provided: TRANSLATIONS, dictionary, TRANSLATION_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSLATIONS", function() { return TRANSLATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dictionary", function() { return dictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSLATION_PROVIDERS", function() { return TRANSLATION_PROVIDERS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lang_de__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang-de */ "./src/app/translate/lang-de.ts");
/* harmony import */ var _lang_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang-en */ "./src/app/translate/lang-en.ts");
var _a;

// import translations


// translation token
var TRANSLATIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('translations');
// all translations
var dictionary = (_a = {},
    _a[_lang_de__WEBPACK_IMPORTED_MODULE_1__["LANG_DE_NAME"]] = _lang_de__WEBPACK_IMPORTED_MODULE_1__["LANG_DE_TRANS"],
    _a[_lang_en__WEBPACK_IMPORTED_MODULE_2__["LANG_EN_NAME"]] = _lang_de__WEBPACK_IMPORTED_MODULE_1__["LANG_DE_TRANS"],
    _a);
// providers
var TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];


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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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

module.exports = __webpack_require__(/*! C:\Development\html\protokoll\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map