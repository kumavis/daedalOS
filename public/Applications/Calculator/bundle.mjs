/******/ var __webpack_modules__ = ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _components_DigitButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/DigitButton */ "./src/components/DigitButton.jsx");
/* harmony import */ var _components_OperationButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/OperationButton */ "./src/components/OperationButton.jsx");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _constants_ActionsType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/ActionsType.js */ "./src/constants/ActionsType.js");
/* harmony import */ var _constants_IntegerFormatter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/IntegerFormatter.js */ "./src/constants/IntegerFormatter.js");
/* harmony import */ var _constants_Reducers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/Reducers.js */ "./src/constants/Reducers.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react__WEBPACK_IMPORTED_MODULE_0__]);
react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function App() {
  var initialState = {
    previousOperand: null,
    operation: null,
    currentOperand: null,
    overwrite: false
  };

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      currentOperand = _useReducer2$.currentOperand,
      previousOperand = _useReducer2$.previousOperand,
      operation = _useReducer2$.operation,
      dispatch = _useReducer2[1];

  var actions = mapDispatch(dispatch);
  return /*#__PURE__*/React.createElement("div", {
    className: "calculator-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "output"
  }, /*#__PURE__*/React.createElement("div", {
    className: "previous-operand"
  }, formatOperand(previousOperand), " ", operation), /*#__PURE__*/React.createElement("div", {
    className: "current-operand"
  }, formatOperand(currentOperand))), /*#__PURE__*/React.createElement("button", {
    className: "span-two",
    onClick: actions.clear
  }, "AC"), /*#__PURE__*/React.createElement("button", {
    onClick: actions.deleteDigit
  }, "DEL"), /*#__PURE__*/React.createElement(_components_OperationButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    operation: "\xF7",
    chooseOperation: actions.chooseOperation
  }), /*#__PURE__*/React.createElement(_components_DigitButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    digit: "1",
    addDigit: actions.addDigit
  }), /*#__PURE__*/React.createElement(_components_DigitButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    digit: "2",
    addDigit: actions.addDigit
  }), /*#__PURE__*/React.createElement(_components_DigitButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    digit: "3",
    addDigit: actions.addDigit
  }), /*#__PURE__*/React.createElement(_components_OperationButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    operation: "*",
    chooseOperation: actions.chooseOperation
  }), /*#__PURE__*/React.createElement(_components_DigitButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    digit: "4",
    addDigit: actions.addDigit
  }), /*#__PURE__*/React.createElement(_components_DigitButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    digit: "5",
    addDigit: actions.addDigit
  }), /*#__PURE__*/React.createElement(_components_DigitButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    digit: "6",
    addDigit: actions.addDigit
  }), /*#__PURE__*/React.createElement(_components_OperationButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    operation: "+",
    chooseOperation: actions.chooseOperation
  }), /*#__PURE__*/React.createElement(_components_DigitButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    digit: "7",
    addDigit: actions.addDigit
  }), /*#__PURE__*/React.createElement(_components_DigitButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    digit: "8",
    addDigit: actions.addDigit
  }), /*#__PURE__*/React.createElement(_components_DigitButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    digit: "9",
    addDigit: actions.addDigit
  }), /*#__PURE__*/React.createElement(_components_OperationButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    operation: "-",
    chooseOperation: actions.chooseOperation
  }), /*#__PURE__*/React.createElement(_components_DigitButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    digit: ".",
    addDigit: actions.addDigit
  }), /*#__PURE__*/React.createElement(_components_DigitButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    digit: "0",
    addDigit: actions.addDigit
  }), /*#__PURE__*/React.createElement("button", {
    className: "span-two",
    onClick: actions.evaluate
  }, "="));
}
;

var mapDispatch = function mapDispatch(dispatch) {
  return {
    addDigit: function addDigit(digit) {
      return dispatch({
        type: _constants_ActionsType_js__WEBPACK_IMPORTED_MODULE_4__["default"].ADD_DIGIT,
        payload: {
          digit: digit
        }
      });
    },
    chooseOperation: function chooseOperation(operation) {
      return dispatch({
        type: _constants_ActionsType_js__WEBPACK_IMPORTED_MODULE_4__["default"].CHOOSE_OPERATION,
        payload: {
          operation: operation
        }
      });
    },
    clear: function clear() {
      return dispatch({
        type: _constants_ActionsType_js__WEBPACK_IMPORTED_MODULE_4__["default"].CLEAR
      });
    },
    deleteDigit: function deleteDigit() {
      return dispatch({
        type: _constants_ActionsType_js__WEBPACK_IMPORTED_MODULE_4__["default"].DELETE_DIGIT
      });
    },
    evaluate: function evaluate() {
      return dispatch({
        type: _constants_ActionsType_js__WEBPACK_IMPORTED_MODULE_4__["default"].EVALUATE
      });
    }
  };
};

function reducer(state, _ref) {
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _constants_ActionsType_js__WEBPACK_IMPORTED_MODULE_4__["default"].ADD_DIGIT:
      return _constants_Reducers_js__WEBPACK_IMPORTED_MODULE_6__["default"].addDigit(state, payload.digit);

    case _constants_ActionsType_js__WEBPACK_IMPORTED_MODULE_4__["default"].CHOOSE_OPERATION:
      return _constants_Reducers_js__WEBPACK_IMPORTED_MODULE_6__["default"].chooseOperation(state, payload.operation, evaluateFunction);

    case _constants_ActionsType_js__WEBPACK_IMPORTED_MODULE_4__["default"].CLEAR:
      return {};

    case _constants_ActionsType_js__WEBPACK_IMPORTED_MODULE_4__["default"].DELETE_DIGIT:
      return _constants_Reducers_js__WEBPACK_IMPORTED_MODULE_6__["default"].deleteDigit(state);

    case _constants_ActionsType_js__WEBPACK_IMPORTED_MODULE_4__["default"].EVALUATE:
      return _constants_Reducers_js__WEBPACK_IMPORTED_MODULE_6__["default"].evaluate(state, evaluateFunction);

    default:
      return state;
  }
}

;

function evaluateFunction(_ref2) {
  var currentOperand = _ref2.currentOperand,
      previousOperand = _ref2.previousOperand,
      operation = _ref2.operation;
  var current = parseFloat(currentOperand);
  var previous = parseFloat(previousOperand);
  if (isNaN(previous) || isNaN(current)) return "";

  switch (operation) {
    case "+":
      return (previous + current).toString();

    case "-":
      return (previous - current).toString();

    case "*":
      return (previous * current).toString();

    case "÷":
      return (previous / current).toString();

    default:
      return "";
  }
}

;

function formatOperand(operand) {
  if (operand == null) return;

  var _operand$split = operand.split("."),
      _operand$split2 = _slicedToArray(_operand$split, 2),
      integer = _operand$split2[0],
      decimal = _operand$split2[1];

  if (decimal == null) return _constants_IntegerFormatter_js__WEBPACK_IMPORTED_MODULE_5__["default"].format(integer);
  return _constants_IntegerFormatter_js__WEBPACK_IMPORTED_MODULE_5__["default"].format(integer) + "." + decimal;
}

;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/components/DigitButton.jsx":
/*!****************************************!*\
  !*** ./src/components/DigitButton.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DigitButton)
/* harmony export */ });
function DigitButton(_ref) {
  var addDigit = _ref.addDigit,
      digit = _ref.digit;
  return /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return addDigit(digit);
    }
  }, digit);
}

/***/ }),

/***/ "./src/components/OperationButton.jsx":
/*!********************************************!*\
  !*** ./src/components/OperationButton.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OperationButton)
/* harmony export */ });
function OperationButton(_ref) {
  var chooseOperation = _ref.chooseOperation,
      operation = _ref.operation;
  return /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return chooseOperation(operation);
    }
  }, operation);
}

/***/ }),

/***/ "./src/constants/ActionsType.js":
/*!**************************************!*\
  !*** ./src/constants/ActionsType.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ActionsType = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionsType);

/***/ }),

/***/ "./src/constants/IntegerFormatter.js":
/*!*******************************************!*\
  !*** ./src/constants/IntegerFormatter.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var integerFormatter = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (integerFormatter);

/***/ }),

/***/ "./src/constants/Reducers.js":
/*!***********************************!*\
  !*** ./src/constants/Reducers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Reducers = {
  addDigit: function addDigit(state, digit) {
    var _state$currentOperand;

    var currentOperand = (_state$currentOperand = state.currentOperand) !== null && _state$currentOperand !== void 0 ? _state$currentOperand : "";
    if (digit === "0" && currentOperand === "0") return state;
    if (digit === "." && currentOperand.includes(".")) return state;
    if (state.overwrite) return _objectSpread(_objectSpread({}, state), {}, {
      currentOperand: digit,
      overwrite: false
    });
    return _objectSpread(_objectSpread({}, state), {}, {
      currentOperand: currentOperand + digit
    });
  },
  chooseOperation: function chooseOperation(state, operation, evaluateFunction) {
    if (state.currentOperand == null && state.previousOperand == null) return state;
    if (state.currentOperand == null) return _objectSpread(_objectSpread({}, state), {}, {
      operation: operation
    });

    if (state.previousOperand == null) {
      return _objectSpread(_objectSpread({}, state), {}, {
        operation: operation,
        previousOperand: state.currentOperand,
        currentOperand: null
      });
    }

    ;
    return _objectSpread(_objectSpread({}, state), {}, {
      previousOperand: evaluateFunction(state),
      operation: operation,
      currentOperand: null
    });
  },
  deleteDigit: function deleteDigit(state) {
    if (state.overwrite) return _objectSpread(_objectSpread({}, state), {}, {
      overwrite: false,
      currentOperand: null
    });
    if (state.currentOperand == null) return state;
    if (state.currentOperand.length === 1) return _objectSpread(_objectSpread({}, state), {}, {
      currentOperand: null
    });
    return _objectSpread(_objectSpread({}, state), {}, {
      currentOperand: state.currentOperand.slice(0, -1)
    });
  },
  evaluate: function evaluate(state, evaluateFunction) {
    if (state.operation == null || state.currentOperand == null || state.previousOperand == null) {
      return state;
    }

    ;
    return _objectSpread(_objectSpread({}, state), {}, {
      overwrite: true,
      previousOperand: null,
      operation: null,
      currentOperand: evaluateFunction(state)
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reducers);

/***/ }),

/***/ "./src/module.js":
/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.jsx */ "./src/App.jsx");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_App_jsx__WEBPACK_IMPORTED_MODULE_0__]);
_App_jsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_App_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  background: linear-gradient(to right, #00aeff, #3b05ff);\n}\n\n.calculator-grid {\n  display: grid;\n  height: 100vh;\n  justify-content: center;\n  align-content: center;\n  grid-template-columns: repeat(4, 6rem);\n  grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);\n}\n\n.calculator-grid > button {\n  cursor: pointer;\n  font-size: 2rem;\n  border: 1px solid white;\n  outline: none;\n  background-color: rgba(255, 255, 255, 0.75);\n}\n\n.calculator-grid > button:hover,\n.calculator-grid > button:focus {\n  background-color: rgba(255, 255, 255, 0.9);\n}\n\n.span-two {\n  grid-column: span 2;\n}\n\n.output {\n  grid-column: 1 / -1;\n  background-color: rgba(0, 0, 0, 0.75);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-around;\n  padding: 0.75rem;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n\n.output .previous-operand {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 1.5rem;\n}\n\n.output .current-operand {\n  color: white;\n  font-size: 2.5rem;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = react;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/async module */
/******/ (() => {
/******/ 	var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 	var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 	var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 	var resolveQueue = (queue) => {
/******/ 		if(queue && !queue.d) {
/******/ 			queue.d = 1;
/******/ 			queue.forEach((fn) => (fn.r--));
/******/ 			queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 		}
/******/ 	}
/******/ 	var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 		if(dep !== null && typeof dep === "object") {
/******/ 			if(dep[webpackQueues]) return dep;
/******/ 			if(dep.then) {
/******/ 				var queue = [];
/******/ 				queue.d = 0;
/******/ 				dep.then((r) => {
/******/ 					obj[webpackExports] = r;
/******/ 					resolveQueue(queue);
/******/ 				}, (e) => {
/******/ 					obj[webpackError] = e;
/******/ 					resolveQueue(queue);
/******/ 				});
/******/ 				var obj = {};
/******/ 				obj[webpackQueues] = (fn) => (fn(queue));
/******/ 				return obj;
/******/ 			}
/******/ 		}
/******/ 		var ret = {};
/******/ 		ret[webpackQueues] = x => {};
/******/ 		ret[webpackExports] = dep;
/******/ 		return ret;
/******/ 	}));
/******/ 	__webpack_require__.a = (module, body, hasAwait) => {
/******/ 		var queue;
/******/ 		hasAwait && ((queue = []).d = 1);
/******/ 		var depQueues = new Set();
/******/ 		var exports = module.exports;
/******/ 		var currentDeps;
/******/ 		var outerResolve;
/******/ 		var reject;
/******/ 		var promise = new Promise((resolve, rej) => {
/******/ 			reject = rej;
/******/ 			outerResolve = resolve;
/******/ 		});
/******/ 		promise[webpackExports] = exports;
/******/ 		promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 		module.exports = promise;
/******/ 		body((deps) => {
/******/ 			currentDeps = wrapDeps(deps);
/******/ 			var fn;
/******/ 			var getResult = () => (currentDeps.map((d) => {
/******/ 				if(d[webpackError]) throw d[webpackError];
/******/ 				return d[webpackExports];
/******/ 			}))
/******/ 			var promise = new Promise((resolve) => {
/******/ 				fn = () => (resolve(getResult));
/******/ 				fn.r = 0;
/******/ 				var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 				currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 			});
/******/ 			return fn.r ? promise : getResult();
/******/ 		}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 		queue && (queue.d = 0);
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module used 'module' so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__("./src/module.js");
/******/ __webpack_exports__ = await __webpack_exports__;
/******/ var __webpack_exports__default = __webpack_exports__["default"];
/******/ export { __webpack_exports__default as default };
/******/ 
