(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["itemlist-itemlist-module"],{

/***/ "./src/app/itemlist/itemlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/itemlist/itemlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{'title.itemlist' | translate}}</h2>\r\n<p-dialog [baseZIndex]=\"0\" *ngIf=\"itemlistService.activeMemorylistItem.itemActions\" [(visible)]=\"show['moveDialog']\">\r\n  <p-header>\r\n    Exemplare ändern?\r\n  </p-header>\r\n  <p-table [value]=\"itemlistService.activeMemorylistItem.itemActions\" (onEditComplete)=\"updateItemAction($event.data)\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Aktion</th>\r\n        <th>woher?</th>\r\n        <th>wohin?</th>\r\n        <th></th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-action>\r\n      <tr>\r\n        <td>{{action.actionType}}</td>\r\n        <td>{{action.collectionFrom}}</td>\r\n        <td [pEditableColumn]=\"action\" [pEditableColumnField]=\"'collectionTo'\">\r\n          <p-cellEditor >\r\n            <ng-template pTemplate=\"input\">\r\n              <input pInputText type=\"text\" [(ngModel)]=\"action.collectionTo\">\r\n            </ng-template>\r\n            <ng-template pTemplate=\"output\">\r\n              {{action.collectionTo}}\r\n            </ng-template>\r\n          </p-cellEditor>\r\n        </td>\r\n        <td><button pButton type=\"button\" (click)=\"itemlistService.removeItemAction(action)\"></button></td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n<p-footer>\r\n  <button style=\"float: left;\" class=\"ui-button-success\" type=\"button\" pButton (click)=\"show['moveDialog'] = false\"\r\n          label=\"OK\" icon=\"pi pi-table\" [disabled]=\"selectedItems.length == 0\"></button>\r\n</p-footer>\r\n</p-dialog>\r\n<p-table #dt [value]=\"filterService.selectedItems\" [rows]=\"10\" [paginator]=\"true\"\r\n         [rowsPerPageOptions]=\"[10,20,50]\" selectionMode=\"multiple\" [(selection)]=\"selectedItems\">\r\n  <ng-template pTemplate=\"caption\">\r\n    <div class=\"ui-helper-clearfix\">\r\n      <button style=\"float: left;\" class=\"ui-button-success\" type=\"button\" pButton (click)=\"dt.exportCSV()\"\r\n              label=\"Export\" icon=\"pi pi-table\"></button>\r\n      <button style=\"float: left;\" class=\"ui-button-success\" type=\"button\" pButton (click)=\"clearSelection()\"\r\n              label=\"Auswahl aufheben\" icon=\"pi pi-table\" [disabled]=\"selectedItems.length == 0\"></button>\r\n      <button style=\"float: left;\" class=\"ui-button-success\" type=\"button\" pButton (click)=\"deleteItems()\"\r\n              label=\"Aussondern\" icon=\"pi pi-table\" [disabled]=\"selectedItems.length == 0\"></button>\r\n      <button style=\"float: left;\" class=\"ui-button-success\" type=\"button\" pButton (click)=\"moveItems()\"\r\n              label=\"Umstellen\" icon=\"pi pi-table\" [disabled]=\"selectedItems.length == 0\"></button>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th>\r\n        {{'collection' | translate}}\r\n      </th>\r\n      <th>\r\n        {{'shelfmark' | translate}}\r\n      </th>\r\n      <th>\r\n        {{'materials' | translate}}\r\n      </th>\r\n      <th>\r\n        {{'number.loans' | translate}}\r\n      </th>\r\n      <th>\r\n        {{'item.status' | translate}}\r\n      </th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-item>\r\n    <tr [pSelectableRow]=\"item\">\r\n      <td>\r\n        {{item.collection}}\r\n      </td>\r\n      <td>\r\n        {{item.shelfmark}}\r\n      </td>\r\n      <td>\r\n        {{item.material}}\r\n      </td>\r\n      <td>\r\n        {{item.events.length}}\r\n      </td>\r\n      <td>\r\n        {{'item.status.' + item.itemStatus | translate}} {{'item.process.status.' + item.processStatus |\r\n        translate}} {{item.noteOpac}}\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n"

/***/ }),

/***/ "./src/app/itemlist/itemlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/itemlist/itemlist.component.ts ***!
  \************************************************/
/*! exports provided: ItemlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemlistComponent", function() { return ItemlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/filter.service */ "./src/app/service/filter.service.ts");
/* harmony import */ var _service_memorylist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/memorylist.service */ "./src/app/service/memorylist.service.ts");
/* harmony import */ var _model_MemoryListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/MemoryListItem */ "./src/app/model/MemoryListItem.ts");
/* harmony import */ var _model_ItemAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/ItemAction */ "./src/app/model/ItemAction.ts");






var ItemlistComponent = /** @class */ (function () {
    function ItemlistComponent(itemlistService, filterService) {
        this.itemlistService = itemlistService;
        this.filterService = filterService;
        this.show = {};
    }
    ItemlistComponent.prototype.ngOnInit = function () {
        this.show['moveDialog'] = false;
        this.selectedItems = [];
    };
    ItemlistComponent.prototype.clearSelection = function () {
        this.selectedItems = [];
    };
    ItemlistComponent.prototype.deleteItems = function () {
        var _this = this;
        if (!this.itemlistService.activeMemorylistItem) {
            this.itemlistService.activeMemorylistItem = new _model_MemoryListItem__WEBPACK_IMPORTED_MODULE_4__["MemoryListItem"]('', '', '', 'manually selected', new Date(), new Date(), [], []);
        }
        if (!this.itemlistService.activeMemorylistItem.itemActions) {
            this.itemlistService.activeMemorylistItem.itemActions = [];
        }
        this.selectedItems.forEach(function (item) {
            if (!_this.itemlistService.savedActions.has(item.itemId)) {
                var action = new _model_ItemAction__WEBPACK_IMPORTED_MODULE_5__["ItemAction"]('deletion', item.collection, 'basar', 1, new Date(), item.shelfmark, item.itemId);
                _this.itemlistService.addItemAction(action);
            }
        });
        this.show['moveDialog'] = true;
    };
    ItemlistComponent.prototype.updateItemAction = function (itemAction) {
        this.itemlistService.updateItemAction(itemAction).subscribe(function () { return console.log('item saved.'); });
    };
    ItemlistComponent.prototype.confirmDeletion = function () {
        var _this = this;
        this.itemlistService.saveActiveMemorylist().subscribe(function (data) { return _this.itemlistService.activeMemorylist = data; });
        this.show['moveDialog'] = false;
    };
    ItemlistComponent.prototype.moveItems = function () {
        var _this = this;
        if (!this.itemlistService.activeMemorylistItem) {
            this.itemlistService.activeMemorylistItem = new _model_MemoryListItem__WEBPACK_IMPORTED_MODULE_4__["MemoryListItem"]('', '', '', 'manually selected', new Date(), new Date(), [], []);
        }
        if (!this.itemlistService.activeMemorylistItem.itemActions) {
            this.itemlistService.activeMemorylistItem.itemActions = [];
        }
        this.selectedItems.forEach(function (item) {
            var action = new _model_ItemAction__WEBPACK_IMPORTED_MODULE_5__["ItemAction"]('move', item.collection, item.collection.substring(0, 2), 1, new Date(), item.shelfmark, item.itemId);
            _this.itemlistService.addItemAction(action);
        });
        this.show['moveDialog'] = true;
    };
    ItemlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-itemlist',
            template: __webpack_require__(/*! ./itemlist.component.html */ "./src/app/itemlist/itemlist.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_memorylist_service__WEBPACK_IMPORTED_MODULE_3__["MemorylistService"],
            _service_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"]])
    ], ItemlistComponent);
    return ItemlistComponent;
}());



/***/ }),

/***/ "./src/app/itemlist/itemlist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/itemlist/itemlist.module.ts ***!
  \*********************************************/
/*! exports provided: ItemlistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemlistModule", function() { return ItemlistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _translate_translate_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translate/translate.module */ "./src/app/translate/translate.module.ts");
/* harmony import */ var _itemlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itemlist.component */ "./src/app/itemlist/itemlist.component.ts");
/* harmony import */ var _itemlist_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./itemlist.routing */ "./src/app/itemlist/itemlist.routing.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var ItemlistModule = /** @class */ (function () {
    function ItemlistModule() {
    }
    ItemlistModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _translate_translate_module__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _itemlist_routing__WEBPACK_IMPORTED_MODULE_5__["itemlistRouting"]],
            declarations: [_itemlist_component__WEBPACK_IMPORTED_MODULE_4__["ItemlistComponent"]],
            exports: [_itemlist_component__WEBPACK_IMPORTED_MODULE_4__["ItemlistComponent"]],
            providers: []
        })
    ], ItemlistModule);
    return ItemlistModule;
}());



/***/ }),

/***/ "./src/app/itemlist/itemlist.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/itemlist/itemlist.routing.ts ***!
  \**********************************************/
/*! exports provided: itemlistRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemlistRouting", function() { return itemlistRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _itemlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemlist.component */ "./src/app/itemlist/itemlist.component.ts");


var routes = [
    { path: '', component: _itemlist_component__WEBPACK_IMPORTED_MODULE_1__["ItemlistComponent"] }
];
var itemlistRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/model/ItemAction.ts":
/*!*************************************!*\
  !*** ./src/app/model/ItemAction.ts ***!
  \*************************************/
/*! exports provided: ItemAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemAction", function() { return ItemAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action */ "./src/app/model/Action.ts");


var ItemAction = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ItemAction, _super);
    function ItemAction(actionType, collectionFrom, collectionTo, number, created, shelfmark, itemId, uuid) {
        var _this = _super.call(this, actionType, collectionFrom, collectionTo, number, created) || this;
        _this.actionType = actionType;
        _this.collectionFrom = collectionFrom;
        _this.collectionTo = collectionTo;
        _this.number = number;
        _this.created = created;
        _this.shelfmark = shelfmark;
        _this.itemId = itemId;
        _this.uuid = uuid;
        return _this;
    }
    return ItemAction;
}(_Action__WEBPACK_IMPORTED_MODULE_1__["Action"]));



/***/ })

}]);
//# sourceMappingURL=itemlist-itemlist-module.js.map