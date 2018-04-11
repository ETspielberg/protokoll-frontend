webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/TimeoutInterceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defaultTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TimeoutInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_timeout__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/timeout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DEFAULT_TIMEOUT = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('defaultTimeout');
var defaultTimeout = 60000;
var TimeoutInterceptor = (function () {
    function TimeoutInterceptor(defaultTimeout) {
        this.defaultTimeout = defaultTimeout;
    }
    TimeoutInterceptor.prototype.intercept = function (req, next) {
        var timeout = Number(req.headers.get('timeout')) || this.defaultTimeout;
        return next.handle(req).timeout(timeout);
    };
    TimeoutInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(DEFAULT_TIMEOUT)),
        __metadata("design:paramtypes", [Object])
    ], TimeoutInterceptor);
    return TimeoutInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" *ngIf=\"!primaryLoad\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"/\">Lib-Intel</a>\n      <a  style=\"color: #efe4bf\" class=\"navbar-brand\" href=\"#\">:: Protokoll</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a *ngIf=\"show['filter']\" (click)=\"toggleShow('filter')\">{{'hide.filter' | translate}}</a>\n          <a *ngIf=\"!show['filter']\" (click)=\"toggleShow('filter')\">{{'show.filter' | translate}}</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"jumbotron\" *ngIf=\"primaryLoad\">\n  <div class=\"container\">\n    <h1 style=\"padding: 20px;\">\n      {{'title.protocol' | translate}}\n    </h1>\n    <p style=\"padding: 10px;\">{{'description.protocol.short' | translate}}</p>\n    <div class=\"ui-g ui-fluid\">\n      <form (submit)=\"getFullManifestations()\" (keyup.enter)=\"getFullManifestations()\">\n        <div class=\"ui-g-12 ui-lg-3\">\n        <span class=\"ui-float-label\">\n        <input id=\"float-input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"protokollRequest.shelfmark\"\n               [ngModelOptions]=\"{standalone: true}\" autofocus\n               pTooltip=\"Bitte Signatur eingeben\" tooltipPosition=\"bottom\">\n        <label for=\"float-input\">{{'shelfmark' | translate}}</label>\n        </span>\n        </div>\n        <div class=\"ui-g-12 ui-lg-3\">\n        <span class=\"ui-float-label\">\n        <input [(ngModel)]=\"protokollRequest.collections\" id=\"collections-primary\" pInputText name=\"collections\"\n               size=\"20\" pTooltip=\"z.B. E31, E3, D45, E (mehrere durch Leerzeichen trennen)\" tooltipPosition=\"bottom\"\n               [ngModelOptions]=\"{standalone: true}\"/>\n        <label for=\"collections-primary\">{{'collections' | translate}}</label>\n        </span>\n        </div>\n        <div class=\"ui-g-12 ui-lg-3\">\n          <p-toggleButton onLabel=\"Nur diese Auflage\" offLabel=\"Alle Auflagen\"\n                          [(ngModel)]=\"protokollRequest.exact\" [ngModelOptions]=\"{standalone: true}\"></p-toggleButton>\n        </div>\n        <div class=\"ui-g-12 ui-lg-3\">\n          <button pButton type=\"button\" class=\"ui-button-success\" (click)=\"getFullManifestations()\" icon=\"fa-search\"\n                  label=\"Abfrage starten\"></button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<p-dialog header=\"Daten werden abgerufen\" [modal]=\"true\" [closable]=\"false\" [(visible)]=\"busy\">\n  <img src=\"assets/img/loading_newtons_cradle.gif\" alt=\"Loading...\" style=\"width:304px;height:228px;\">\n</p-dialog>\n\n<div id=\"wrapper\" *ngIf=\"!primaryLoad\" class=\"ui-g\">\n\n\n  <div class=\"ui-g content\">\n    <div class=\"ui-md-2 ui-g-12 ui-g-nopad\" *ngIf=\"show['filter']\">\n      <div *ngIf=\"manifestationsFound\">\n        <p-scrollPanel [style]=\"{width: '100%', height: '100%'}\">\n          <h3 (click)=\"toggleShow('editions')\">{{'editions' | translate}} <i\n            [ngClass]=\"show['editions'] ? 'fa fa-caret-down' : 'fa fa-caret-right'\"></i></h3>\n          <div *ngIf=\"show['editions']\" class=\"ui-g\">\n            <div *ngFor=\"let m of manifestations\" class=\"ui-g-12\">\n              <p-checkbox [(ngModel)]=\"filterList[m.titleID]\" binary=\"true\" (onChange)=\"update()\"\n                          label=\"{{m.edition}}. Auflage: {{m.shelfmark}} ({{statsManifestations.get(m.titleID)}})\"\n                          pTooltip=\"{{m.bibliographicInformation.authors}}:\n          {{m.bibliographicInformation.title}}, {{m.bibliographicInformation.year}}.\"></p-checkbox>\n            </div>\n          </div>\n          <h3 (click)=\"toggleShow('collections')\">{{'collections' | translate}} <i\n            [ngClass]=\"show['collections'] ? 'fa fa-caret-down' : 'fa fa-caret-right'\"></i></h3>\n          <div *ngIf=\"show['collections']\" class=\"ui-g\">\n            <div *ngFor=\"let m of uniqueCollections\" class=\"ui-g-12\">\n              <p-checkbox [(ngModel)]=\"filterList[m]\" binary=\"true\" (onChange)=\"update()\"\n                          label=\"{{m}} ({{statsCollection.get(m)}})\"></p-checkbox>\n            </div>\n          </div>\n          <h3 (click)=\"toggleShow('materials')\">{{'materials' | translate}} <i\n            [ngClass]=\"show['materials'] ? 'fa fa-caret-down' : 'fa fa-caret-right'\"></i></h3>\n          <div *ngIf=\"show['materials']\" class=\"ui-g\">\n            <div *ngFor=\"let m of uniqueMaterials\" class=\"ui-g-12\">\n              <p-checkbox [(ngModel)]=\"filterList[m]\" binary=\"true\" (onChange)=\"update()\"\n                          label=\"{{'material.' + m | translate}} ({{statsMaterials.get(m)}})\"></p-checkbox>\n            </div>\n          </div>\n          <h3 (click)=\"toggleShow('subLibrary')\">{{'subLibraries' | translate}} <i\n            [ngClass]=\"show['subLibrary'] ? 'fa fa-caret-down' : 'fa fa-caret-right'\"></i></h3>\n          <div *ngIf=\"show['subLibrary']\" class=\"ui-g\">\n            <div *ngFor=\"let m of uniqueSubLibraries\" class=\"ui-g-12\">\n              <p-checkbox [(ngModel)]=\"filterList[m]\" binary=\"true\" (onChange)=\"update()\"\n                          label=\"{{'subLibrary.' + m | translate}} ({{statsSublibraries.get(m)}})\"></p-checkbox>\n            </div>\n          </div>\n        </p-scrollPanel>\n      </div>\n    </div>\n\n    <div class=\"ui-md-10 ui-g-12\">\n\n      <form (submit)=\"getFullManifestations()\" (keyup.enter)=\"getFullManifestations()\">\n\n        <div class=\"ui-g\"\n             style=\"padding: 20px; border-style: none none solid none; background-color: #dfe4f2;\">\n\n          <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <span class=\"ui-float-label\">\n        <input id=\"float-input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"protokollRequest.shelfmark\"\n               [ngModelOptions]=\"{standalone: true}\" autofocus\n               pTooltip=\"Bitte Signatur eingeben\" tooltipPosition=\"bottom\">\n        <label for=\"float-input\">{{'shelfmark' | translate}}</label>\n        </span>\n          </div>\n          <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n        <span class=\"ui-float-label\">\n        <input [(ngModel)]=\"protokollRequest.collections\" id=\"collections-primary\" pInputText name=\"collections\"\n               size=\"20\" pTooltip=\"z.B. E31, E3, D45, E (mehrere durch Leerzeichen trennen)\" tooltipPosition=\"bottom\"\n               [ngModelOptions]=\"{standalone: true}\"/>\n        <label for=\"collections-primary\">{{'collections' | translate}}</label>\n        </span>\n          </div>\n          <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n            <p-toggleButton onLabel=\"Nur diese Auflage\" offLabel=\"Alle Auflagen\"\n                            [(ngModel)]=\"protokollRequest.exact\" [ngModelOptions]=\"{standalone: true}\"></p-toggleButton>\n          </div>\n          <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n            <button pButton type=\"button\" class=\"ui-button-success\" (click)=\"getFullManifestations()\" icon=\"fa-search\"\n                    label=\"Abfrage starten\"></button>\n          </div>\n\n        </div>\n      </form>\n      <p-messages [(value)]=\"messages\" [closable]=\"false\"></p-messages>\n\n      <div class=\"ui-g\" *ngIf=\"manifestationsFound\">\n        <p-tabMenu [model]=\"items\" [activeItem]=\"items[0]\"></p-tabMenu>\n        <div class=\"ui-g-12 ui-md-12 ui-lg-12 tile-bottom\">\n          <h2>{{'title.' + activePart | translate}}</h2>\n\n          <div *ngIf=\"activePart === 'bibliography'\">\n            <p-accordion [multiple]=\"true\">\n              <p-accordionTab header=\"{{m.edition}}. Auflage: {{m.shelfmark}}\" *ngFor=\"let m of manifestations;  let index = index\" [selected]=\"(index === 0) ? true : false\">\n                <div [innerHTML]=\"m.bibliographicInformation.fullDescription\"></div>\n                <button pButton type=\"button\" class=\"ui-button-success\"\n                        (click)=\"goToPrimo(m.bibliographicInformation)\"\n                        label=\"Titel in Primo anzeigen\"></button>\n              </p-accordionTab>\n            </p-accordion>\n          </div>\n\n          <div class=\"ui-g-12\" *ngIf=\"activePart === 'graph'\">\n            <chart [options]=\"options\" style=\"display: block; height: 60vH;\"></chart>\n          </div>\n          <div *ngIf=\"activePart === 'graph'\" class=\"ui-g-12\">\n            <p-toggleButton onLabel=\"Überblick zeigen\" offLabel=\"Nutzergruppen zeigen\"\n                            [(ngModel)]=\"show['usergroups']\" (onChange)=\"update()\"\n                            [ngModelOptions]=\"{standalone: true}\"></p-toggleButton>\n          </div>\n\n          <p-dataTable #dt [value]=\"statistics\" [rows]=\"10\" [paginator]=\"true\"\n                       [rowsPerPageOptions]=\"[10,20,50]\" sortField=\"year\" [sortOrder]=\"-1\"\n                       *ngIf=\"activePart === 'information'\">\n            <p-header>\n              <div class=\"ui-helper-clearfix\">\n                <button style=\"float: left;\" class=\"ui-button-success\" type=\"button\" pButton\n                        (click)=\"dt.exportCSV()\"\n                        label=\"Export\" icon=\"fa-table\"></button>\n              </div>\n            </p-header>\n            <p-column field=\"year\" header=\"Jahr\" [sortable]=\"true\"\n                      filterPlaceholder=\"Filter\"></p-column>\n            <p-column field=\"meanRelativeLoan\" header=\"Mittlere Ausleihe\" [sortable]=\"true\">\n              <ng-template let-col let-statistic=\"rowData\" pTemplate=\"body\">\n                {{(statistic.daysLoaned / statistic.daysStock) | percent:'1.0-1'}}\n              </ng-template>\n            </p-column>\n            <p-column field=\"numberRequests\" header=\"Anzahl Vormerkungen\" [sortable]=\"true\"\n                      filterPlaceholder=\"Filter\"></p-column>\n            <p-column field=\"numberLoans\" header=\"Anzahl Ausleihen\" [sortable]=\"true\"\n                      filterPlaceholder=\"Filter\"></p-column>\n            <p-column field=\"numberCald\" header=\"Anzahl CaLD\" [sortable]=\"true\"\n                      filterPlaceholder=\"Filter\"></p-column>\n          </p-dataTable>\n\n          <div class=\"ui-g\" *ngIf=\"activePart === 'analysis'\">\n            <div class=\"ui-g-8\">\n              <p>In dieser Tabelle werden die ungenutzten Exemplare in den zurückliegenden X Jahren dargestellt.</p>\n              <p-dataTable #danalysis [value]=\"eventanalysiss\" selectionMode=\"single\" [(selection)]=\"activeAnalysis\"\n                           sortField=\"year\" [sortOrder]=\"1\" dataKey=\"years\"\n                           (onRowSelect)=\"calculateDeletionProposal()\">\n                <p-header>\n                  <div class=\"ui-helper-clearfix\">\n                    <button style=\"float: left;\" class=\"ui-button-success\" type=\"button\" pButton\n                            (click)=\"danalysis.exportCSV()\"\n                            label=\"Export\" icon=\"fa-table\"></button>\n                  </div>\n                </p-header>\n                <p-column field=\"years\" header=\"Jahre\"\n                          filterPlaceholder=\"Filter\"></p-column>\n                <p-column field=\"maxLoansAbs\" header=\"Maximale Ausleihe\"\n                          filterPlaceholder=\"Filter\"></p-column>\n                >\n                <p-column field=\"lastStock\" header=\"Ungenutzte Exemplare\">\n                  <ng-template let-col let-eventanalysis=\"rowData\" pTemplate=\"body\">\n                    {{eventanalysis.lastStock - eventanalysis.maxLoansAbs}}\n                  </ng-template>\n                </p-column>\n\n              </p-dataTable>\n            </div>\n            <div class=\"ui-g-4\" *ngIf=\"activeAnalysis\">\n\n              <p>In den letzten {{activeAnalysis.years}} Jahren wurden von den vorhandenen\n                {{activeAnalysis.lastStock}} Exemplaren {{activeAnalysis.lastStock - activeAnalysis.maxLoansAbs}}\n                nicht genutzt.</p>\n\n              <p-slider [(ngModel)]=\"staticBuffer\" [min]=\"0\" [max]=\"100\"\n                        (onChange)=\"calculateDeletionProposal()\"></p-slider>\n\n              <p>Bei einer Reserve von {{staticBuffer}} % ergibt sich ein Vorschlag zur Aussonderung von</p>\n\n              <p style=\"color:darkred; font-size: x-large; font-weight: bolder;\"> {{deletionProposal |\n                number:'1.0-0'}} Exemplar(en)</p>\n\n              <!--<button pButton type=\"button\" class=\"ui-button-danger\" icon=\"fa-trash\" iconPos=\"right\" label=\"Aussondern\"></button>-->\n            </div>\n            <div class=\"ui-g-4\" *ngIf=\"!activeAnalysis\">\n              <p>Bitte einen Zeitraum für die Analyse auswahählen.</p>\n            </div>\n            </div>\n          <p-dataTable #dt [value]=\"selectedItems\" [rows]=\"10\" [paginator]=\"true\"\n                       [rowsPerPageOptions]=\"[10,20,50]\" *ngIf=\"activePart === 'items'\">\n            <p-header>\n              <div class=\"ui-helper-clearfix\">\n                <button style=\"float: left;\" class=\"ui-button-success\" type=\"button\" pButton\n                        (click)=\"dt.exportCSV()\"\n                        label=\"Export\" icon=\"fa-table\"></button>\n              </div>\n            </p-header>\n            <p-column field=\"collection\" header=\"Standort\" [sortable]=\"true\" [filter]=\"true\"\n                      filterPlaceholder=\"Filter\"></p-column>\n            <p-column field=\"shelfmark\" header=\"Signatur\" [sortable]=\"true\" [filter]=\"true\"\n                      filterPlaceholder=\"Filter\"></p-column>\n            <p-column field=\"material\" header=\"Medium\" [sortable]=\"true\" [filter]=\"true\"\n                      filterPlaceholder=\"Filter\"></p-column>\n            <p-column field=\"events.length\" header=\"Ausleihen\" [sortable]=\"true\" [filter]=\"true\"\n                      filterPlaceholder=\"Filter\"></p-column>\n            <p-column field=\"itemStatus\" header=\"Status\" [sortable]=\"true\" [filter]=\"true\"\n                      filterPlaceholder=\"Filter\">\n              <ng-template let-col let-item=\"rowData\" pTemplate=\"body\">\n                {{'item.status.' + item.status | translate}}\n              </ng-template>\n            </p-column>\n          </p-dataTable>\n\n          <p-dataTable #di [value]=\"selectedEvents\" [rows]=\"10\" [paginator]=\"true\"\n                       [rowsPerPageOptions]=\"[10,20,50]\" sortField=\"date\" [sortOrder]=\"-1\"\n                       *ngIf=\"activePart === 'events'\">\n            <p-header>\n              <div class=\"ui-helper-clearfix\">\n                <button style=\"float: left;\" class=\"ui-button-success\" type=\"button\" pButton\n                        (click)=\"di.exportCSV()\"\n                        label=\"Export\" icon=\"fa-table\"></button>\n              </div>\n            </p-header>\n            <p-column field=\"date\" header=\"Datum von\" [sortable]=\"true\" [filter]=\"true\"\n                      filterPlaceholder=\"Filter\"></p-column>\n            <p-column field=\"endEvent.date\" header=\"Datum bis\" [sortable]=\"true\" [filter]=\"true\"\n                      filterPlaceholder=\"Filter\"></p-column>\n            <p-column field=\"duration\" header=\"Tage\" [sortable]=\"true\" [filter]=\"true\"\n                      filterPlaceholder=\"Filter\"></p-column>\n            <p-column field=\"type\" header=\"Ereignis\" [sortable]=\"true\">\n              <ng-template let-col let-event=\"rowData\" pTemplate=\"body\">\n                {{'event.type.' + event.type | translate}}\n              </ng-template>\n            </p-column>\n            <p-column field=\"borrowerStatus\" header=\"Benutzer\" [sortable]=\"true\">\n              <ng-template let-col let-event=\"rowData\" pTemplate=\"body\">\n                {{'event.borrowerStatus.' + event.borrowerStatus | translate}}\n              </ng-template>\n            </p-column>\n          </p-dataTable>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_ProtokollRequest__ = __webpack_require__("../../../../../src/app/model/ProtokollRequest.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_getter_service__ = __webpack_require__("../../../../../src/app/service/getter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Option__ = __webpack_require__("../../../../../src/app/model/Option.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Dataset__ = __webpack_require__("../../../../../src/app/model/Dataset.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_Datapoint__ = __webpack_require__("../../../../../src/app/model/Datapoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_analyzer_service__ = __webpack_require__("../../../../../src/app/service/analyzer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__translate__ = __webpack_require__("../../../../../src/app/translate/index.ts");
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
    function AppComponent(getterService, router, route, analyzrService, translateService) {
        this.getterService = getterService;
        this.router = router;
        this.route = route;
        this.analyzrService = analyzrService;
        this.translateService = translateService;
        this.index = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.primaryLoad = true;
        this.translateService.use('de');
        var tabs = ['graph', 'bibliography', 'information', 'items', 'events'];
        this.items = [];
        tabs.forEach(function (entry) {
            return _this.items.push({
                label: _this.translateService.instant('tab.' + entry),
                icon: 'fa-plus',
                id: entry,
                command: function (event2) { return _this.activePart = entry; }
            });
        });
        this.items.push({
            label: this.translateService.instant('tab.analysis'),
            icon: 'fa-plus',
            id: 'analysis',
            command: function (event2) {
                _this.activePart = 'analysis';
                _this.calculateDeletionProposal();
            }
        });
        this.activeItem = this.items[0];
        this.activePart = this.activeItem.id;
        this.staticBuffer = 20;
        this.resetVariables();
        this.resetProtokollrequest();
        this.route.queryParams.subscribe(function (params) {
            if (params['shelfmark'] !== undefined) {
                _this.protokollRequest.shelfmark = params['shelfmark'];
            }
            if (params['exact'] !== undefined) {
                _this.protokollRequest.exact = ('true' === params['exact']);
            }
            if (params['collections'] !== undefined) {
                _this.protokollRequest.collections = params['collections'];
            }
            if (params['materials'] !== undefined) {
                _this.protokollRequest.shelfmark = params['materials'];
            }
            if (_this.protokollRequest.shelfmark !== '') {
                _this.getFullManifestations();
            }
        });
    };
    AppComponent.prototype.resetProtokollrequest = function () {
        this.protokollRequest = new __WEBPACK_IMPORTED_MODULE_1__model_ProtokollRequest__["a" /* ProtokollRequest */]('', '', '', false);
    };
    AppComponent.prototype.resetVariables = function () {
        this.filteredManifestations = new Map();
        this.filteredItems = new Map();
        this.filteredEvents = new Map();
        this.selectedManifestations = [];
        this.selectedItems = [];
        this.selectedEvents = [];
        this.messages = [];
        this.activePart = 'graph';
        this.manifestationsFound = false;
        this.manifestations = [];
        this.manifestationsFound = false;
        this.filterList = new Map();
        this.show = new Map();
        this.show['editions'] = true;
        this.show['collections'] = true;
        this.show['materials'] = true;
        this.show['usergroups'] = false;
        this.show['subLibrary'] = true;
        this.show['filter'] = true;
        this.yearsOfRequests = 2;
        this.yearsOfLoans = 5;
    };
    AppComponent.prototype.getFullManifestations = function () {
        var _this = this;
        this.busy = true;
        this.resetVariables();
        this.getterService.getFullManifestation(this.protokollRequest.shelfmark.replace('+', '%2B'), this.protokollRequest.exact).subscribe(function (data) {
            _this.manifestations = data;
            if (_this.manifestations.length === 0) {
                _this.messages.push({
                    severity: 'warn', summary: 'Fehler: ',
                    detail: _this.translateService.instant('message.nothingFound')
                });
                _this.activePart = '';
                _this.busy = false;
                _this.index = _this.manifestations.length - 1;
            }
            else {
                _this.initializeLists();
            }
            _this.primaryLoad = false;
        }, function (error) {
            _this.busy = false;
            _this.primaryLoad = false;
            console.log(error);
            _this.messages.push({
                severity: 'error', summary: 'Fehler: ',
                detail: _this.translateService.instant('message.error')
            });
            _this.activePart = '';
        });
    };
    AppComponent.prototype.initializeLists = function () {
        var _this = this;
        this.manifestationsFound = this.manifestations.length > 0;
        var uniqueCollections = new Set();
        var uniqueMaterials = new Set();
        var uniqueSublibraries = new Set();
        this.manifestations.forEach(function (manifestation) {
            _this.filterList[manifestation.titleID] = true;
            _this.selectedManifestations.push(manifestation);
            manifestation.collections.forEach(function (collection) {
                if (!uniqueCollections.has(collection)) {
                    uniqueCollections.add(collection);
                    _this.filterList[collection] = (collection !== '???');
                }
            });
            manifestation.materials.forEach(function (material) {
                if (!uniqueMaterials.has(material)) {
                    uniqueMaterials.add(material);
                    _this.filterList[material] = true;
                }
            });
            manifestation.subLibraries.forEach(function (subLibrary) {
                if (!uniqueSublibraries.has(subLibrary)) {
                    uniqueSublibraries.add(subLibrary);
                    _this.filterList[subLibrary] = true;
                }
            });
        });
        this.uniqueMaterials = Array.from(uniqueMaterials).sort();
        this.uniqueCollections = Array.from(uniqueCollections).sort();
        this.uniqueSubLibraries = Array.from(uniqueSublibraries).sort();
        this.includeSelectionFromHttpParamters();
        this.update();
    };
    AppComponent.prototype.includeSelectionFromHttpParamters = function () {
        if (!(typeof this.protokollRequest.collections === 'undefined' || this.protokollRequest.collections.trim() === '')) {
            var individualCollections = [];
            if (this.protokollRequest.collections.indexOf(' ') > -1) {
                individualCollections = this.protokollRequest.collections.split(' ');
            }
            else {
                individualCollections.push(this.protokollRequest.collections);
            }
            for (var _i = 0, _a = this.uniqueCollections; _i < _a.length; _i++) {
                var f = _a[_i];
                var fitting = false;
                for (var _b = 0, individualCollections_1 = individualCollections; _b < individualCollections_1.length; _b++) {
                    var m = individualCollections_1[_b];
                    fitting = f.startsWith(m.trim().toUpperCase());
                }
                this.filterList[f] = fitting;
            }
        }
    };
    AppComponent.prototype.update = function () {
        this.updateFilteredLists();
        this.updatePlotData();
        this.busy = false;
    };
    AppComponent.prototype.updateFilteredLists = function () {
        var _this = this;
        this.statsCollection = new Map();
        this.statsMaterials = new Map();
        this.statsManifestations = new Map();
        this.statsSublibraries = new Map();
        this.uniqueCollections.forEach(function (collection) { return _this.statsCollection.set(collection, 0); });
        this.uniqueMaterials.forEach(function (material) { return _this.statsMaterials.set(material, 0); });
        this.uniqueSubLibraries.forEach(function (sublibrary) { return _this.statsSublibraries.set(sublibrary, 0); });
        this.filteredManifestations = new Map();
        this.filteredItems = new Map();
        this.filteredEvents = new Map();
        this.selectedManifestations = [];
        this.selectedItems = [];
        this.selectedEvents = [];
        for (var _i = 0, _a = this.manifestations; _i < _a.length; _i++) {
            var m = _a[_i];
            this.statsManifestations.set(m.titleID, 0);
            if (this.filterList[m.titleID]) {
                this.selectedManifestations.push(m);
                this.filteredManifestations[m.titleID] = m;
                var filteredItemsInd = [];
                var filteredEventsInd = [];
                for (var _b = 0, _c = m.items; _b < _c.length; _b++) {
                    var item = _c[_b];
                    if (this.filterList[item.collection] && this.filterList[item.material] && this.filterList[item.subLibrary]) {
                        filteredItemsInd.push(item);
                        this.selectedItems.push(item);
                        if (item.deletionDate === '') {
                            var numberSublibrary = this.statsSublibraries.get(item.subLibrary);
                            numberSublibrary++;
                            this.statsSublibraries.set(item.subLibrary, numberSublibrary);
                            var numberCollections = this.statsCollection.get(item.collection);
                            numberCollections++;
                            this.statsCollection.set(item.collection, numberCollections);
                            var numberMaterials = this.statsMaterials.get(item.material);
                            numberMaterials++;
                            this.statsMaterials.set(item.material, numberMaterials);
                            var numberManifestations = this.statsManifestations.get(m.titleID);
                            numberManifestations++;
                            this.statsManifestations.set(m.titleID, numberManifestations);
                        }
                        for (var _d = 0, _e = item.events; _d < _e.length; _d++) {
                            var event_1 = _e[_d];
                            filteredEventsInd.push(event_1);
                            this.selectedEvents.push(event_1);
                            if (event_1.endEvent != null) {
                                this.selectedEvents.push(event_1.endEvent);
                            }
                        }
                    }
                }
                this.filteredItems[m.titleID] = filteredItemsInd;
                this.filteredEvents[m.titleID] = filteredEventsInd;
            }
        }
        this.selectedEvents.sort(function (firstEvent, secondEvent) {
            return firstEvent.time === secondEvent.time ? 0 : +(firstEvent.time > secondEvent.time) || -1;
        });
    };
    AppComponent.prototype.updatePlotData = function () {
        this.options = new __WEBPACK_IMPORTED_MODULE_4__model_Option__["a" /* Option */]({ text: '' }, [], { title: { text: 'Anzahl' }, min: 0, allowDecimals: false }, { type: 'datetime' }, { defaultSeriesType: 'area', zoomType: 'xy' }, ['#AA4643', '#4572A7', '#89A54E', '#80699B',
            '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92']);
        this.plotData = new Map();
        if (this.show['usergroups']) {
            this.plotUserData = new Map();
            for (var _i = 0, _a = this.selectedEvents; _i < _a.length; _i++) {
                var event_2 = _a[_i];
                this.addDatapointToMap(event_2, event_2.borrowerStatus, this.plotUserData);
            }
        }
        else {
            this.plotData = new Map();
            for (var _b = 0, _c = this.selectedEvents; _b < _c.length; _b++) {
                var event_3 = _c[_b];
                if (event_3.type === 'loan' || event_3.type === 'return') {
                    this.addDatapointToMap(event_3, 'loans', this.plotData);
                }
                else if (event_3.type === 'request' || event_3.type === 'hold') {
                    this.addDatapointToMap(event_3, 'requests', this.plotData);
                }
                else if (event_3.type === 'inventory' || event_3.type === 'deletion') {
                    this.addDatapointToMap(event_3, 'stock', this.plotData);
                }
                else if (event_3.type === 'cald' || event_3.type === 'caldDelivery') {
                    this.addDatapointToMap(event_3, 'cald', this.plotData);
                }
            }
        }
        if (this.selectedManifestations.length === 1) {
            var manifestation = this.filteredManifestations[this.selectedManifestations[0].titleID];
            this.options.title = { text: manifestation.shelfmark + ' (' + manifestation.edition + '. Auflage)' };
        }
        else {
            var title_1 = '';
            this.selectedManifestations.forEach(function (manifestation) { return title_1 = title_1 + manifestation.shelfmark + ', '; });
            this.options.title = { text: title_1.substr(0, title_1.length - 2) };
        }
        if (this.show['usergroups']) {
            this.updateChartObjectFromMap(this.plotUserData);
        }
        else {
            this.updateChartObjectFromMap(this.plotData);
            this.analyzrService.reset(this.plotData);
            this.eventanalysiss = this.analyzrService.getAnalysis();
            this.statistics = this.analyzrService.getStatistics();
            this.activeAnalysis = this.eventanalysiss[this.eventanalysiss.length / 2];
        }
    };
    AppComponent.prototype.updateChartObjectFromMap = function (plotData) {
        for (var key in plotData) {
            var datapoints = plotData[key];
            datapoints.push(new __WEBPACK_IMPORTED_MODULE_6__model_Datapoint__["a" /* Datapoint */](new Date().getTime(), datapoints[datapoints.length - 1][1]));
            var dataset = new __WEBPACK_IMPORTED_MODULE_5__model_Dataset__["a" /* Dataset */](this.translateService.instant('series.' + key), datapoints);
            if (key === 'loans') {
                dataset.color = '#4572A7';
                dataset.zIndex = 1;
            }
            else if (key === 'stock') {
                dataset.color = '#7e91a7';
                dataset.zIndex = 0;
            }
            else if (key === 'requests') {
                dataset.color = '#89A54E';
                dataset.zIndex = 2;
            }
            else if (key === 'cald') {
                dataset.color = '#80699B';
                dataset.zIndex = 3;
            }
            this.options.series.push(dataset);
        }
    };
    AppComponent.prototype.addDatapointToMap = function (event, classOfEvent, map) {
        if (event.time > 0) {
            var list = void 0;
            if ((typeof map[classOfEvent] === 'undefined')) {
                list = [];
                list.push([event.time, 1]);
            }
            else {
                list = map[classOfEvent];
                var lastDatapoint = list[list.length - 1];
                list.push([event.time, lastDatapoint[1]]);
                list.push([event.time, lastDatapoint[1] + event.delta]);
            }
            map[classOfEvent] = list;
        }
    };
    AppComponent.prototype.toggleShow = function (part) {
        this.show[part] = !this.show[part];
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AppComponent.prototype.goToPrimo = function (bibliographicInformation) {
        var url = 'https://primo.ub.uni-due.de/UDE:UDEALEPH{' + bibliographicInformation.otherIdentifier + '}';
        window.open(url, '_blank');
    };
    AppComponent.prototype.calculateDeletionProposal = function () {
        var proposal = (this.activeAnalysis.lastStock - this.activeAnalysis.maxLoansAbs) * (1 - this.staticBuffer / 100);
        this.deletionProposal = (proposal < 0) ? 0 : proposal;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_getter_service__["a" /* GetterService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_getter_service__["a" /* GetterService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_7__service_analyzer_service__["a" /* AnalyzerService */],
            __WEBPACK_IMPORTED_MODULE_9__translate__["a" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export settingsUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getterUrl; });
/* unused harmony export resourcesUrl */
/* unused harmony export headers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");

var settingsUrl = '/api/settings';
var getterUrl = '/getter';
var resourcesUrl = '/api/resources';
var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/json');


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_datatable_datatable__ = __webpack_require__("../../../../primeng/components/datatable/datatable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_datatable_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_components_datatable_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_highcharts__ = __webpack_require__("../../../../angular2-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_highcharts_dist_HighchartsService__ = __webpack_require__("../../../../angular2-highcharts/dist/HighchartsService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_highcharts_dist_HighchartsService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_highcharts_dist_HighchartsService__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_getter_service__ = __webpack_require__("../../../../../src/app/service/getter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_analyzer_service__ = __webpack_require__("../../../../../src/app/service/analyzer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__TimeoutInterceptor__ = __webpack_require__("../../../../../src/app/TimeoutInterceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__root_route__ = __webpack_require__("../../../../../src/app/root.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__root_component__ = __webpack_require__("../../../../../src/app/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__translate_translate_module__ = __webpack_require__("../../../../../src/app/translate/translate.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_slider__ = __webpack_require__("../../../../primeng/slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_slider__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///<reference path="../../node_modules/primeng/components/common/menuitem.d.ts"/>



















function highchartsFactory() {
    var hc = __webpack_require__("../../../../highcharts/highcharts.js");
    var dd = __webpack_require__("../../../../highcharts/modules/drilldown.js");
    dd(hc);
    return hc;
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TooltipModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ScrollPanelModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_18_primeng_slider__["SliderModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_15__root_route__["a" /* mainRoutingProviders */],
                __WEBPACK_IMPORTED_MODULE_15__root_route__["b" /* routing */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_components_datatable_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ToggleButtonModule"],
                __WEBPACK_IMPORTED_MODULE_17__translate_translate_module__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabMenuModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_highcharts__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DialogModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_16__root_component__["a" /* RootComponent */], __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__root_component__["a" /* RootComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_10__service_getter_service__["a" /* GetterService */], __WEBPACK_IMPORTED_MODULE_8__angular_common__["DecimalPipe"], __WEBPACK_IMPORTED_MODULE_13__service_analyzer_service__["a" /* AnalyzerService */], { provide: __WEBPACK_IMPORTED_MODULE_6_angular2_highcharts_dist_HighchartsService__["HighchartsStatic"],
                    useFactory: highchartsFactory }, [{ provide: __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_14__TimeoutInterceptor__["b" /* TimeoutInterceptor */], multi: true }],
                [{ provide: __WEBPACK_IMPORTED_MODULE_14__TimeoutInterceptor__["a" /* DEFAULT_TIMEOUT */], useValue: __WEBPACK_IMPORTED_MODULE_14__TimeoutInterceptor__["c" /* defaultTimeout */] }]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/model/Datapoint.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Datapoint; });
var Datapoint = (function () {
    function Datapoint(x, y) {
        this.x = x;
        this.y = y;
    }
    Datapoint.prototype.getData = function () {
        return [this.x, this.y];
    };
    return Datapoint;
}());



/***/ }),

/***/ "../../../../../src/app/model/Dataset.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dataset; });
var Dataset = (function () {
    function Dataset(name, data, color, zIndex) {
        this.name = name;
        this.data = data;
        this.color = color;
        this.zIndex = zIndex;
    }
    return Dataset;
}());



/***/ }),

/***/ "../../../../../src/app/model/Eventanalysis.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Eventanalysis; });
/**
 * Created by etspi on 25.06.2017.
 */
var Eventanalysis = (function () {
    function Eventanalysis(years, meanRelativeLoan, lastStock, maxLoansAbs) {
        this.years = years;
        this.meanRelativeLoan = meanRelativeLoan;
        this.lastStock = lastStock;
        this.maxLoansAbs = maxLoansAbs;
    }
    return Eventanalysis;
}());



/***/ }),

/***/ "../../../../../src/app/model/Option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Option; });
var Option = (function () {
    function Option(title, series, yAxis, xAxis, chart, colors, plotOptions, lang) {
        this.title = title;
        this.series = series;
        this.yAxis = yAxis;
        this.xAxis = xAxis;
        this.chart = chart;
        this.colors = colors;
        this.plotOptions = plotOptions;
        this.lang = lang;
    }
    return Option;
}());



/***/ }),

/***/ "../../../../../src/app/model/ProtokollRequest.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtokollRequest; });
var ProtokollRequest = (function () {
    function ProtokollRequest(shelfmark, collections, materials, exact) {
        this.shelfmark = shelfmark;
        this.collections = collections;
        this.materials = materials;
        this.exact = exact;
    }
    return ProtokollRequest;
}());



/***/ }),

/***/ "../../../../../src/app/model/Statistics.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Statistics; });
var Statistics = (function () {
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

/***/ "../../../../../src/app/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootComponent = (function () {
    function RootComponent() {
    }
    RootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>",
        }),
        __metadata("design:paramtypes", [])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "../../../../../src/app/root.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mainRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mainRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");


var mainRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] }
];
var mainRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(mainRoutes);


/***/ }),

/***/ "../../../../../src/app/service/analyzer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyzerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Eventanalysis__ = __webpack_require__("../../../../../src/app/model/Eventanalysis.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Statistics__ = __webpack_require__("../../../../../src/app/model/Statistics.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AnalyzerService = (function () {
    function AnalyzerService() {
    }
    AnalyzerService.prototype.reset = function (plotData) {
        this.plotData = plotData;
        this.statistics = new Map();
        this.eventanalysiss = new Map();
        var stocks = plotData['stock'];
        var requests = plotData['requests'];
        var oldDate = new Date(stocks[0][0]);
        var year;
        if (typeof requests !== 'undefined') {
            var oldRequestsDate = new Date(requests[0][0]);
            year = Math.min(oldDate.getFullYear(), oldRequestsDate.getFullYear());
        }
        else {
            year = Math.min(oldDate.getFullYear());
        }
        var actualYear = new Date().getFullYear();
        while (year <= actualYear) {
            this.statistics.set(year, new __WEBPACK_IMPORTED_MODULE_2__model_Statistics__["a" /* Statistics */](year, 0, 0, 0, 0, 0, 0));
            if (actualYear - year > 0 && actualYear - year <= 10) {
                this.eventanalysiss.set(actualYear - year, new __WEBPACK_IMPORTED_MODULE_1__model_Eventanalysis__["a" /* Eventanalysis */](year, 0, 0, 0));
            }
            year++;
        }
    };
    AnalyzerService.prototype.getStatistics = function () {
        var actualYear = new Date().getFullYear();
        this.fillAnalysisFields(this.plotData, 'loans', actualYear);
        this.fillAnalysisFields(this.plotData, 'cald', actualYear);
        this.fillAnalysisFields(this.plotData, 'stock', actualYear);
        this.fillAnalysisFields(this.plotData, 'requests', actualYear);
        var stats = [];
        this.statistics.forEach(function (entry) { return stats.push(entry); });
        return stats;
    };
    AnalyzerService.prototype.getAnalysis = function () {
        this.calculateAnalysis(this.plotData);
        var analyses = [];
        this.eventanalysiss.forEach(function (entry) { return analyses.push(entry); });
        return analyses;
    };
    AnalyzerService.prototype.calculateSingleAnalysis = function (plotData, yearsOfLoans) {
        var eventanalysis = this.eventanalysiss.get(yearsOfLoans);
        var dayInMillis = 3600 * 24 * 1000;
        var yearInMillis = 365 * dayInMillis;
        var today = new Date().getTime();
        var startDateLoans = today - yearsOfLoans * yearInMillis;
        var loans = [];
        if (plotData.has('loans')) {
            loans = plotData['loans'];
        }
        var stock = plotData['stock'];
        eventanalysis.lastStock = stock[stock.length - 1].y;
        var timeLoaned = 0;
        var timeStock = 0;
        var lastTimeLoans = startDateLoans;
        if (loans.length > 0) {
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
    AnalyzerService.prototype.calculateAnalysis = function (plotData) {
        var _this = this;
        this.eventanalysiss.forEach(function (value, key) {
            var analysis = _this.calculateSingleAnalysis(plotData, key);
            _this.eventanalysiss.set(key, analysis);
        });
    };
    AnalyzerService.prototype.fillAnalysisFields = function (plotData, type, actualYear) {
        var series = plotData[type];
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
    AnalyzerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AnalyzerService);
    return AnalyzerService;
}());



/***/ }),

/***/ "../../../../../src/app/service/getter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_globals__ = __webpack_require__("../../../../../src/app/app.globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetterService = (function () {
    function GetterService(http) {
        this.http = http;
        this.barcodeRegExp = new RegExp('^[Dd]*[Ee][0-9]+');
    }
    GetterService.prototype.getFullManifestation = function (shelfmark, exact) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_3__app_globals__["a" /* getterUrl */] + '/fullManifestation?identifier=' + shelfmark.trim() + '&exact=' + exact;
        if (this.barcodeRegExp.test(shelfmark)) {
            url = url + '&barcode';
        }
        var manifestationsFound = this.http.get(
        // 'assets/data/example.json'
        url, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({ timeout: "" + 60000 }) });
        manifestationsFound.subscribe(function (data) { return _this.manifestations = data; });
        return manifestationsFound;
    };
    GetterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], GetterService);
    return GetterService;
}());



/***/ }),

/***/ "../../../../../src/app/translate/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translate_service__ = __webpack_require__("../../../../../src/app/translate/translate.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__translate_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translation__ = __webpack_require__("../../../../../src/app/translate/translation.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_pipe__ = __webpack_require__("../../../../../src/app/translate/translate.pipe.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "../../../../../src/app/translate/lang-de.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANG_DE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LANG_DE_TRANS; });
var LANG_DE_NAME = 'de';
var LANG_DE_TRANS = {
    'show.filter': 'Filter anzeigen',
    'hide.filter': 'Filter ausblenden',
    'shelfmark': 'Signatur oder Barcode',
    'submit': 'Abfrage starten',
    'tooltip.shelfmark': 'Bitte Signatur eingeben',
    'tab.graph': 'Überblick',
    'tab.bibliography': 'Titeldaten',
    'tab.information': 'Zahlen',
    'tab.items': 'Exemplare',
    'tab.events': 'Ereignisse',
    'tab.analysis': 'Analyse',
    'title.protocol': 'Ausleihprotokoll',
    'description.protocol.short': 'Alle Details zu einem Titel',
    'title.graph': 'Überblick',
    'title.bibliography': 'Bibliographische Angaben',
    'title.information': 'Zahlen',
    'title.items': 'Exemplarübersicht',
    'title.events': 'Ereignisübersicht',
    'title.analysis': 'Analyse',
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
    'item.status.xx': 'ausgesodnert',
    'item.status.': 'unbekannt',
    'item.status.undefined': 'unbekannt',
    'item.status.???': 'unbekannt',
    'item.status.10': 'Ausleihbestand',
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
    'series.': 'andere',
    'series.???': 'unbekannt',
    'message.nothingFound': 'Leider konnten keine Auflagen gefunden werden. Bitte eine gültige Signatur eingeben.',
    'message.error': 'Es ist ein Fehler aufgetreten. Die Daten konnten nicht abgerufen werden.',
};


/***/ }),

/***/ "../../../../../src/app/translate/lang-en.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LANG_EN_NAME; });
/* unused harmony export LANG_EN_TRANS */
var LANG_EN_NAME = 'en';
var LANG_EN_TRANS = {
    'subject_75': 'Biology',
    'status_deleted': 'weed',
    'status_ignored': 'ignore',
    'status_reposiotry': 'relocate'
};


/***/ }),

/***/ "../../../../../src/app/translate/translate.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_pipe__ = __webpack_require__("../../../../../src/app/translate/translate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_service__ = __webpack_require__("../../../../../src/app/translate/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translation__ = __webpack_require__("../../../../../src/app/translate/translation.ts");
/*
* https://scotch.io/tutorials/simple-language-translation-in-angular-2-part-1
* https://stackoverflow.com/questions/39007130/the-pipe-could-not-be-found-angular2-custom-pipe
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TranslateModule = (function () {
    function TranslateModule() {
    }
    TranslateModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__translate_pipe__["a" /* TranslatePipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__translate_pipe__["a" /* TranslatePipe */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__translation__["b" /* TRANSLATION_PROVIDERS */]]
        })
    ], TranslateModule);
    return TranslateModule;
}());



/***/ }),

/***/ "../../../../../src/app/translate/translate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_service__ = __webpack_require__("../../../../../src/app/translate/translate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslatePipe = (function () {
    function TranslatePipe(translate) {
        this.translate = translate;
    }
    TranslatePipe.prototype.transform = function (value, lang) {
        if (!value)
            return;
        if (lang) {
            this.translate.use(lang);
        }
        return this.translate.instant(value);
    };
    TranslatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'translate',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__translate_service__["a" /* TranslateService */]])
    ], TranslatePipe);
    return TranslatePipe;
}());



/***/ }),

/***/ "../../../../../src/app/translate/translate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translation__ = __webpack_require__("../../../../../src/app/translate/translation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TranslateService = (function () {
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
    TranslateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__translation__["a" /* TRANSLATIONS */])),
        __metadata("design:paramtypes", [Object])
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ "../../../../../src/app/translate/translation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRANSLATIONS; });
/* unused harmony export dictionary */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TRANSLATION_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang_de__ = __webpack_require__("../../../../../src/app/translate/lang-de.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang_en__ = __webpack_require__("../../../../../src/app/translate/lang-en.ts");

// import translations


// translation token
var TRANSLATIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('translations');
// all translations
var dictionary = (_a = {},
    _a[__WEBPACK_IMPORTED_MODULE_1__lang_de__["a" /* LANG_DE_NAME */]] = __WEBPACK_IMPORTED_MODULE_1__lang_de__["b" /* LANG_DE_TRANS */],
    _a[__WEBPACK_IMPORTED_MODULE_2__lang_en__["a" /* LANG_EN_NAME */]] = __WEBPACK_IMPORTED_MODULE_1__lang_de__["b" /* LANG_DE_TRANS */],
    _a);
// providers
var TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];
var _a;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map