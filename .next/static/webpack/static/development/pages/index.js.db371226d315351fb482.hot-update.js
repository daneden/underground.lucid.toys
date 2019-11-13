webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Timeline.js":
/*!********************************!*\
  !*** ./components/Timeline.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timeline; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");



var _jsxFileName = "/Users/dte/Repos/underground.lucid.toys/components/Timeline.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  align-items: flex-start;\n  background-color: var(--background);\n  border-top: 1px solid;\n  box-shadow: 0.25em 2px 4px var(--background);\n  color: ", ";\n  display: flex;\n  margin: -0.5em;\n  margin-left: -1.25em;\n  width: 90%;\n  padding: 0.5em;\n  padding-left: 1.25em;\n  position: absolute;\n  top: ", "%;\n  transform: translateY(50%);\n  transition: 0.3s ease;\n  z-index: 1;\n\n  p + p {\n    margin-left: 0.75em;\n  }\n\n  ::after {\n    content: \"\u2022\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    font-size: 1.25rem;\n    margin-top: -0.725em;\n    margin-right: -0.25em;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 12rem;\n  font-size: 0.75em;\n  font-variant-numeric: tabular-nums;\n  justify-content: stretch;\n  list-style-type: none;\n  padding: 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var List = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].ul(_templateObject());
var ListItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].li(_templateObject2());
var ClockListItem = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].li(_templateObject3(), function (props) {
  return props.busy ? "var(--danger)" : "var(--foreground)";
}, function (props) {
  return props.progress;
});

function Clock(props) {
  var timer = useNewTimer(new Date());
  var interval = 1000 * 60 * 60 * 24;
  var startOfDay = Math.floor(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()() / interval) * interval;
  var elapsed = Math.abs(timer - startOfDay) / interval;
  var hours = timer.getHours();
  var isBusy = false;

  if (hours >= 8 && hours < 11 || hours >= 4 && hours < 7) {
    isBusy = true;
  }

  return __jsx(ClockListItem, {
    busy: true,
    progress: elapsed * 100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, timer.toLocaleTimeString(undefined, {
    timeStyle: "short"
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, isBusy ? "Usually very busy" : "Usually not very busy"));
}

function useNewTimer(currentDate) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(currentDate),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      date = _React$useState2[0],
      setDate = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    var timerID = setInterval(function () {
      return tick();
    }, 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return date;
}

function Timeline() {
  var timestamps = Array(24).fill(undefined).map(function (_, i) {
    return "".concat(i).padStart(2, "0");
  });
  var currentTime = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default.a;
  return __jsx(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(Clock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), timestamps.map(function (timestamp) {
    return __jsx(ListItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, timestamp, ":00");
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.db371226d315351fb482.hot-update.js.map