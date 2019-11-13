webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TFLLine.js":
/*!*******************************!*\
  !*** ./components/TFLLine.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TFLLine; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _utils_lineColors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/lineColors */ "./utils/lineColors.js");

var _jsxFileName = "/Users/dte/Repos/underground.lucid.toys/components/TFLLine.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: ", ";\n  color: white;\n  padding: 0.25rem;\n  display: flex;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ListItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject(), function (props) {
  return props.color;
});
function TFLLine(_ref) {
  var status = _ref.status,
      lineID = _ref.lineID,
      lineName = _ref.lineName;
  return __jsx(ListItem, {
    color: _utils_lineColors__WEBPACK_IMPORTED_MODULE_3__["default"][lineID],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, lineName);
}

/***/ })

})
//# sourceMappingURL=index.js.88ecbd1d648361b56cf7.hot-update.js.map