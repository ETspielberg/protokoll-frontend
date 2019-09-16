(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/primeng/button.js":
/*!****************************************!*\
  !*** ./node_modules/primeng/button.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/button/button */ "./node_modules/primeng/components/button/button.js"));

/***/ }),

/***/ "./src/app/model/Action.ts":
/*!*********************************!*\
  !*** ./src/app/model/Action.ts ***!
  \*********************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
var Action = /** @class */ (function () {
    function Action(actionType, collectionFrom, collectionTo, number, created) {
        this.actionType = actionType;
        this.collectionFrom = collectionFrom;
        this.collectionTo = collectionTo;
        this.number = number;
        this.created = created;
    }
    return Action;
}());



/***/ }),

/***/ "./src/app/model/MemoryListItem.ts":
/*!*****************************************!*\
  !*** ./src/app/model/MemoryListItem.ts ***!
  \*****************************************/
/*! exports provided: MemoryListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryListItem", function() { return MemoryListItem; });
var MemoryListItem = /** @class */ (function () {
    function MemoryListItem(itemId, barcode, shelfmark, comment, created, lastChange, itemActions, titleActions, id) {
        if (itemActions === void 0) { itemActions = []; }
        if (titleActions === void 0) { titleActions = []; }
        this.itemId = itemId;
        this.barcode = barcode;
        this.shelfmark = shelfmark;
        this.comment = comment;
        this.created = created;
        this.lastChange = lastChange;
        this.itemActions = itemActions;
        this.titleActions = titleActions;
        this.id = id;
    }
    return MemoryListItem;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map