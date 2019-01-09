/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 105);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__ = __webpack_require__(32);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_esm_js__["l"]; });


if (process.env.NODE_ENV !== 'production') {
  console.warn('You are running production build of Inferno in development mode. Use dev:module entry point.');
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(23)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(60);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if (typeof module !== 'undefined' && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.classNames = classNames;
  }
})();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getScrollbarWidth */
/* harmony export (immutable) */ __webpack_exports__["g"] = setScrollbarWidth;
/* unused harmony export isBodyOverflowing */
/* harmony export (immutable) */ __webpack_exports__["b"] = getOriginalBodyPadding;
/* harmony export (immutable) */ __webpack_exports__["a"] = conditionallyUpdateScrollbar;
/* harmony export (immutable) */ __webpack_exports__["e"] = mapToCssModules;
/* harmony export (immutable) */ __webpack_exports__["f"] = omit;
/* harmony export (immutable) */ __webpack_exports__["c"] = getTarget;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return keyCodes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_shared__ = __webpack_require__(18);
 // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal#L436-L443

function getScrollbarWidth() {
  var scrollDiv = document.createElement('div'); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? "".concat(padding, "px") : null;
}
function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
  return parseInt(window.getComputedStyle(document.body, null).getPropertyValue('padding-right') || 0, 10);
}
function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal#L420

  var fixedContent = document.querySelectorAll('.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed')[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}
function mapToCssModules(className, cssModule) {
  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}
/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */

function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
function getTarget(target) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["b" /* isFunction */])(target)) {
    return target();
  }

  if (typeof target === 'string' && document) {
    var selection = document.querySelector(target);

    if (selection === null) {
      return document.querySelector("#".concat(target));
    }

    return selection;
  }

  return target;
}
var keyCodes = {
  esc: 27,
  space: 32,
  tab: 9,
  up: 38,
  down: 40
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createElement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);


function isNullOrUndef(o) {
  return isUndefined(o) || isNull(o);
}

function isString(o) {
  return typeof o === 'string';
}

function isNull(o) {
  return o === null;
}

function isUndefined(o) {
  return o === void 0;
}

var componentHooks = {
  onComponentDidMount: 1,
  onComponentDidUpdate: 1,
  onComponentShouldUpdate: 1,
  onComponentWillMount: 1,
  onComponentWillUnmount: 1,
  onComponentWillUpdate: 1
};

function createElement(type, props, _children) {
  var arguments$1 = arguments;
  var children;
  var ref = null;
  var key = null;
  var className = null;
  var flags = 0;
  var newProps;
  var childLen = arguments.length - 2;

  if (childLen === 1) {
    children = _children;
  } else if (childLen > 1) {
    children = [];

    while (childLen-- > 0) {
      children[childLen] = arguments$1[childLen + 2];
    }
  }

  if (isString(type)) {
    flags = Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["h" /* getFlagsForElementVnode */])(type);

    if (!isNullOrUndef(props)) {
      newProps = {};

      for (var prop in props) {
        if (prop === 'className' || prop === 'class') {
          className = props[prop];
        } else if (prop === 'key') {
          key = props.key;
        } else if (prop === 'children' && isUndefined(children)) {
          children = props.children; // always favour children args over props
        } else if (prop === 'ref') {
          ref = props.ref;
        } else {
          if (prop === 'contenteditable') {
            flags |= 4096
            /* ContentEditable */
            ;
          }

          newProps[prop] = props[prop];
        }
      }
    }
  } else {
    flags = 2
    /* ComponentUnknown */
    ;

    if (!isUndefined(children)) {
      if (!props) {
        props = {};
      }

      props.children = children;
    }

    if (!isNullOrUndef(props)) {
      newProps = {};

      for (var prop$1 in props) {
        if (prop$1 === 'key') {
          key = props.key;
        } else if (prop$1 === 'ref') {
          ref = props.ref;
        } else if (componentHooks[prop$1] === 1) {
          if (!ref) {
            ref = {};
          }

          ref[prop$1] = props[prop$1];
        } else {
          newProps[prop$1] = props[prop$1];
        }
      }
    }

    return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(flags, type, newProps, key, ref);
  }

  if (flags & 8192
  /* Fragment */
  ) {
      return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["c" /* createFragment */])(childLen === 1 ? [children] : children, 0
      /* UnknownChildren */
      , key);
    }

  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(flags, type, className, children, 0
  /* UnknownChildren */
  , newProps, key, ref);
}



/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(16);

var assertThisInitialized = __webpack_require__(10);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(31);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(14);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Section; });
/* harmony export (immutable) */ __webpack_exports__["f"] = Stage;
/* harmony export (immutable) */ __webpack_exports__["d"] = Scene;
/* harmony export (immutable) */ __webpack_exports__["b"] = Narrative;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_inferno_router__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prismjs__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_prismjs__);













__webpack_require__(118);

var Section =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(Section, _Component);

  function Section() {
    __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, Section);

    return __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(Section).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(Section, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.context.addSection(this.props.title, this.props.title.toLowerCase().replace(/\s/g, '_'));
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var title = _ref.title,
          children = _ref.children;
      return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "div", __WEBPACK_IMPORTED_MODULE_7_classnames___default()(this.props.className, "ExampleSection"), [title && Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "h2", null, title, 0), children], 0, {
        "id": this.props.title.toLowerCase().replace(/\s/g, '_')
      });
    }
  }]);

  return Section;
}(__WEBPACK_IMPORTED_MODULE_6_inferno__["a" /* Component */]);
function Stage(_ref2) {
  var children = _ref2.children;
  return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "div", "ExampleStage", children, 0);
}
function Scene(_ref3) {
  var children = _ref3.children;
  return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "div", "ExampleScene", children, 0);
}
function Narrative(_ref4) {
  var children = _ref4.children;
  return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "div", "ExampleNarrative", children, 0);
}
var Code =
/*#__PURE__*/
function (_Component2) {
  __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(Code, _Component2);

  function Code(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, Code);

    _this = __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(Code).call(this, props));
    _this._hightlight = _this._hightlight.bind(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(Code, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._hightlight();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.children !== this.props.children) {
        this._hightlight();
      }
    }
  }, {
    key: "_hightlight",
    value: function _hightlight() {
      __WEBPACK_IMPORTED_MODULE_9_prismjs___default.a.highlightElement(this._domNode, this.props.async);
    }
  }, {
    key: "render",
    value: function render(_ref5) {
      var _this2 = this;

      var children = _ref5.children;
      var languageCls = 'language-' + (this.props.language || 'jsx');
      return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "div", "ExampleScene-Code", Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "pre", null, Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "code", languageCls, children, 0, null, null, function (domNode) {
        return _this2._domNode = domNode;
      }), 2), 2);
    }
  }]);

  return Code;
}(__WEBPACK_IMPORTED_MODULE_6_inferno__["a" /* Component */]);

function smoothScrollVertTo(y, durMs) {
  var k = Math.log(y - window.scrollY) / durMs * 16;
  newSmoothScrollVertTo(y, k);
}

function newSmoothScrollVertTo(y, k) {
  var delta = y - window.scrollY;
  var step = k * delta;
  requestAnimationFrame(function () {
    var scrollStep = delta < 2 * step ? delta : step;
    window.scrollTo(0, window.scrollY + scrollStep);

    if (scrollStep >= 1 && window.scrollY + window.innerHeight !== document.body.scrollHeight) {
      newSmoothScrollVertTo(y, k);
    }
  });
}

function PageMenu(props) {
  return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "div", "PageMenuContainer", Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "ul", "PageMenu nav flex-column", [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "li", "nav-item", Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "h4", "PageMenu-Header", "Components", 16), 2), props.pageLinks.map(function (page) {
    return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "li", "nav-item", Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8_inferno_router__["b" /* Link */], {
      "className": "nav-link PageLink",
      "to": page.link,
      children: page.title
    }), 2);
  }).concat(props.pageSections.sort(function (a, b) {
    return a.title == b.title ? 0 : a.title < b.title ? -1 : 1;
  }).map(function (item) {
    return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "li", "nav-item", Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "a", "nav-link SectionLink", item.title, 0, {
      "href": '#' + item.anchor,
      "onClick": function onClick(e) {
        e.preventDefault();
        var el = document.getElementById(e.target.hash.split('#')[1]);
        var y = el.offsetTop; // smoothScrollVertTo(y, 500)

        smoothScrollVertTo(y, 500);
      }
    }), 2);
  }))], 0), 2);
}

var Page =
/*#__PURE__*/
function (_Component3) {
  __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(Page, _Component3);

  function Page(props) {
    var _this3;

    __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, Page);

    _this3 = __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(Page).call(this, props));
    _this3.state = {
      active: false,
      pageSections: []
    };
    return _this3;
  }

  __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      setTimeout(function () {
        _this4.setState({
          active: true
        });
      }, 10);
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        addSection: this.addSection.bind(this)
      };
    }
  }, {
    key: "addSection",
    value: function addSection(title, anchor) {
      this.state.pageSections.push({
        title: title,
        anchor: anchor
      });
    }
  }, {
    key: "render",
    value: function render() {
      var cls = {
        PageContent: true,
        'InfernoAnimation--noAnim': !this.state.active
      };
      return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "div", __WEBPACK_IMPORTED_MODULE_7_classnames___default()(cls), [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, PageMenu, {
        "pageSections": this.state.pageSections,
        "pageLinks": this.context.pageLinks
      }), this.props.children], 0);
    }
  }]);

  return Page;
}(__WEBPACK_IMPORTED_MODULE_6_inferno__["a" /* Component */]);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__(3);











var defaultProps = {
  color: 'secondary',
  tag: 'button'
};

var Button =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(Button, _Component);

  function Button(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, Button);

    _this = __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(Button).call(this, props));
    _this.onClick = _this.onClick.bind(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(Button, [{
    key: "onClick",
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          block = _this$props.block,
          children = _this$props.children,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          color = _this$props.color,
          outline = _this$props.outline,
          size = _this$props.size,
          Tag = _this$props.tag,
          innerRef = _this$props.innerRef,
          attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["active", "block", "children", "className", "cssModule", "color", "outline", "size", "tag", "innerRef"]);

      var classes = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_9_classnames___default()(className, 'btn', "btn".concat(outline ? '-outline' : '', "-").concat(color), size ? "btn-".concat(size) : false, block ? 'btn-block' : false, {
        active: active,
        disabled: this.props.disabled
      }), cssModule);

      if (attributes.href && Tag === 'button') {
        Tag = 'a';
      }

      Object.assign(attributes, {
        className: classes,
        type: Tag === 'button' && attributes.onClick ? 'button' : undefined,
        ref: innerRef,
        onClick: this.onClick
      });
      return Object(__WEBPACK_IMPORTED_MODULE_8_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
    }
  }]);

  return Button;
}(__WEBPACK_IMPORTED_MODULE_7_inferno__["a" /* Component */]);

Button.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_inferno_extras__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_inferno_shared__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_inferno_popper__ = __webpack_require__(17);












/* eslint react/no-find-dom-node: 0 */
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md






var defaultProps = {
  isOpen: false,
  dropup: false,
  nav: false,
  addonType: false,
  inNavbar: false
};

var Dropdown =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(Dropdown, _Component);

  function Dropdown(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, Dropdown);

    _this = __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(Dropdown).call(this, props));
    _this.addEvents = _this.addEvents.bind(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.handleKeyDown = _this.handleKeyDown.bind(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.removeEvents = _this.removeEvents.bind(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.toggle = _this.toggle.bind(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(Dropdown, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        toggle: this.props.toggle,
        isOpen: this.props.isOpen,
        dropup: this.props.dropup,
        inNavbar: this.props.inNavbar
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      return Object(__WEBPACK_IMPORTED_MODULE_10_inferno_extras__["a" /* findDOMNode */])(this);
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this2 = this;

      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.addEventListener(event, _this2.handleDocumentClick, true);
      });
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      var _this3 = this;

      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(e) {
      if (e && (e.which === 3 || e.type === 'keyup' && e.which !== __WEBPACK_IMPORTED_MODULE_12__utils__["d" /* keyCodes */].tab)) return;
      var container = this.getContainer();

      if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === __WEBPACK_IMPORTED_MODULE_12__utils__["d" /* keyCodes */].tab)) {
        return;
      }

      this.toggle(e);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      if ([__WEBPACK_IMPORTED_MODULE_12__utils__["d" /* keyCodes */].esc, __WEBPACK_IMPORTED_MODULE_12__utils__["d" /* keyCodes */].up, __WEBPACK_IMPORTED_MODULE_12__utils__["d" /* keyCodes */].down, __WEBPACK_IMPORTED_MODULE_12__utils__["d" /* keyCodes */].space].indexOf(e.which) === -1 || /button/i.test(e.target.tagName) && e.which === __WEBPACK_IMPORTED_MODULE_12__utils__["d" /* keyCodes */].space || /input|textarea/i.test(e.target.tagName)) {
        return;
      }

      e.preventDefault();
      if (this.props.disabled) return;
      var container = this.getContainer();

      if (e.which === __WEBPACK_IMPORTED_MODULE_12__utils__["d" /* keyCodes */].space && this.props.isOpen && container !== e.target) {
        e.target.click();
      }

      if (e.which === __WEBPACK_IMPORTED_MODULE_12__utils__["d" /* keyCodes */].esc || !this.props.isOpen) {
        this.toggle(e);
        container.querySelector('[aria-expanded]').focus();
        return;
      }

      var menuClass = Object(__WEBPACK_IMPORTED_MODULE_12__utils__["e" /* mapToCssModules */])('dropdown-menu', this.props.cssModule);
      var itemClass = Object(__WEBPACK_IMPORTED_MODULE_12__utils__["e" /* mapToCssModules */])('dropdown-item', this.props.cssModule);
      var disabledClass = Object(__WEBPACK_IMPORTED_MODULE_12__utils__["e" /* mapToCssModules */])('disabled', this.props.cssModule);
      var items = container.querySelectorAll(".".concat(menuClass, " .").concat(itemClass, ":not(.").concat(disabledClass, ")"));
      if (!items.length) return;
      var index = -1;

      for (var i = 0; i < items.length; i += 1) {
        if (items[i] === e.target) {
          index = i;
          break;
        }
      }

      if (e.which === __WEBPACK_IMPORTED_MODULE_12__utils__["d" /* keyCodes */].up && index > 0) {
        index -= 1;
      }

      if (e.which === __WEBPACK_IMPORTED_MODULE_12__utils__["d" /* keyCodes */].down && index < items.length - 1) {
        index += 1;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    }
  }, {
    key: "handleProps",
    value: function handleProps() {
      if (this.props.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _omit = Object(__WEBPACK_IMPORTED_MODULE_12__utils__["f" /* omit */])(this.props, ['toggle', 'disabled', 'inNavbar']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          isOpen = _omit.isOpen,
          group = _omit.group,
          size = _omit.size,
          nav = _omit.nav,
          addonType = _omit.addonType,
          attrs = __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(_omit, ["className", "cssModule", "dropup", "isOpen", "group", "size", "nav", "addonType"]);

      attrs.tag = attrs.tag || (nav ? 'li' : 'div');
      var classes = Object(__WEBPACK_IMPORTED_MODULE_12__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_11_classnames___default()(className, (_classNames = {}, __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty___default()(_classNames, "input-group-".concat(addonType), addonType), __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty___default()(_classNames, 'btn-group', group), __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty___default()(_classNames, "btn-group-".concat(size), !!size), __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty___default()(_classNames, "dropdown", !group && !addonType), __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty___default()(_classNames, "show", isOpen), __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty___default()(_classNames, "dropup", dropup), __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty___default()(_classNames, 'nav-item', nav), _classNames)), cssModule);
      return Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_14_inferno_popper__["b" /* Manager */], __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({}, attrs, {
        "className": classes,
        "onKeyDown": this.handleKeyDown
      })));
    }
  }]);

  return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_9_inferno__["a" /* Component */]);

Dropdown.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Dropdown);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _typeof2(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof2 = function _typeof2(obj) {
      return typeof obj;
    };
  } else {
    _typeof2 = function _typeof2(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof2(obj);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Manager__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Manager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Target__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__Target__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Popper__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__Popper__["a"]; });
/* unused harmony reexport placements */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Arrow__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__Arrow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Travel__ = __webpack_require__(70);
/* unused harmony reexport Travel */






/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ERROR_MSG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isArray; });
/* unused harmony export isStringOrNumber */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isNullOrUndef; });
/* unused harmony export isInvalid */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isFunction; });
/* unused harmony export isString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isNumber; });
/* unused harmony export isNull */
/* unused harmony export isTrue */
/* unused harmony export isUndefined */
/* unused harmony export isObject */
/* unused harmony export throwError */
/* unused harmony export warning */
/* unused harmony export combineFrom */
var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
var isArray = Array.isArray;

function isStringOrNumber(o) {
  var type = typeof o;
  return type === 'string' || type === 'number';
}

function isNullOrUndef(o) {
  return isUndefined(o) || isNull(o);
}

function isInvalid(o) {
  return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}

function isFunction(o) {
  return typeof o === 'function';
}

function isString(o) {
  return typeof o === 'string';
}

function isNumber(o) {
  return typeof o === 'number';
}

function isNull(o) {
  return o === null;
}

function isTrue(o) {
  return o === true;
}

function isUndefined(o) {
  return o === void 0;
}

function isObject(o) {
  return typeof o === 'object';
}

function throwError(message) {
  if (!message) {
    message = ERROR_MSG;
  }

  throw new Error("Inferno Error: " + message);
}

function warning(message) {
  // tslint:disable-next-line:no-console
  console.error(message);
}

function combineFrom(first, second) {
  var out = {};

  if (first) {
    for (var key in first) {
      out[key] = first[key];
    }
  }

  if (second) {
    for (var key$1 in second) {
      out[key$1] = second[key$1];
    }
  }

  return out;
}



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findDOMNode; });
/* unused harmony export isDOMinsideVNode */
/* unused harmony export isDOMinsideComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);


function isDOMinsideVNode(DOM, vNode) {
  var stack = [vNode];

  var _vNode;

  var flags;
  var children;

  while (stack.length > 0) {
    _vNode = stack.pop();

    if (_vNode.dom === DOM) {
      return true;
    }

    flags = _vNode.flags;
    children = _vNode.children;

    if (flags & 4
    /* ComponentClass */
    ) {
        stack.push(children.$LI);
      } else if (flags & 8
    /* ComponentFunction */
    ) {
        stack.push(children);
      } else {
      flags = _vNode.childFlags;

      if (flags & 12
      /* MultipleChildren */
      ) {
          var i = children.length;

          while (i--) {
            stack.push(children[i]);
          }
        } else if (flags & 2
      /* HasVNodeChildren */
      ) {
          stack.push(children);
        }
    }
  }

  return false;
}

function isDOMinsideComponent(DOM, instance) {
  if (instance.$UN) {
    return false;
  }

  return isDOMinsideVNode(DOM, instance.$LI);
}

function findDOMNode(ref) {
  if (ref && ref.nodeType) {
    return ref;
  }

  if (!ref || ref.$UN) {
    return null;
  }

  if (ref.$LI) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["g" /* findDOMfromVNode */])(ref.$LI, true);
  }

  if (ref.flags) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["g" /* findDOMfromVNode */])(ref, true);
  }

  return null;
}



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'ul',
  vertical: false
};

var getVerticalClass = function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return "flex-".concat(vertical, "-column");
};

var Nav = function Nav(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      tabs = props.tabs,
      pills = props.pills,
      vertical = props.vertical,
      horizontal = props.horizontal,
      justified = props.justified,
      fill = props.fill,
      navbar = props.navbar,
      card = props.card,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tabs", "pills", "vertical", "horizontal", "justified", "fill", "navbar", "card", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, navbar ? 'navbar-nav' : 'nav', horizontal ? "justify-content-".concat(horizontal) : false, getVerticalClass(vertical), {
    'nav-tabs': tabs,
    'card-header-tabs': card && tabs,
    'nav-pills': pills,
    'card-header-pills': card && pills,
    'nav-justified': justified,
    'nav-fill': fill
  }), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

Nav.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'li'
};

var NavItem = function NavItem(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'nav-item'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

NavItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (NavItem);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__(3);











var defaultProps = {
  tag: 'a'
};

var NavLink =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(NavLink, _Component);

  function NavLink(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, NavLink);

    _this = __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(NavLink).call(this, props));
    _this.onClick = _this.onClick.bind(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(NavLink, [{
    key: "onClick",
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.href === '#') {
        e.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          active = _this$props.active,
          Tag = _this$props.tag,
          innerRef = _this$props.innerRef,
          attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["children", "className", "cssModule", "active", "tag", "innerRef"]);

      var classes = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_9_classnames___default()(className, 'nav-link', {
        disabled: attributes.disabled,
        active: active
      }), cssModule);
      Object.assign(attributes, {
        className: classes,
        ref: innerRef,
        onClick: this.onClick
      });
      return Object(__WEBPACK_IMPORTED_MODULE_8_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
    }
  }]);

  return NavLink;
}(__WEBPACK_IMPORTED_MODULE_7_inferno__["a" /* Component */]);

NavLink.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (NavLink);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_inferno_popper__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Button__ = __webpack_require__(13);















var defaultProps = {
  'data-toggle': 'dropdown',
  'aria-haspopup': true,
  color: 'secondary'
};

var DropdownToggle =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(DropdownToggle, _Component);

  function DropdownToggle(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, DropdownToggle);

    _this = __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(DropdownToggle).call(this, props));
    _this.onClick = _this.onClick.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(DropdownToggle, [{
    key: "onClick",
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.nav && !this.props.tag) {
        e.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      this.context.toggle(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          color = _this$props.color,
          cssModule = _this$props.cssModule,
          caret = _this$props.caret,
          split = _this$props.split,
          nav = _this$props.nav,
          tag = _this$props.tag,
          props = __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["className", "color", "cssModule", "caret", "split", "nav", "tag"]);

      var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
      var classes = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_9_classnames___default()(className, {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        'nav-link': nav
      }), cssModule);
      var children = props.children || Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["f" /* createVNode */])(1, "span", "sr-only", ariaLabel, 0);
      var Tag;

      if (nav && !tag) {
        Tag = 'a';
        props.href = '#';
      } else if (!tag) {
        Tag = __WEBPACK_IMPORTED_MODULE_12__Button__["a" /* default */];
        props.color = color;
        props.cssModule = cssModule;
      } else {
        Tag = tag;
      }

      return Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11_inferno_popper__["d" /* Target */], __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({}, props, {
        "className": classes,
        "component": Tag,
        "onClick": this.onClick,
        "aria-haspopup": "true",
        "aria-expanded": this.context.isOpen,
        "children": children
      })));
    }
  }]);

  return DropdownToggle;
}(__WEBPACK_IMPORTED_MODULE_8_inferno__["a" /* Component */]);

DropdownToggle.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (DropdownToggle);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_inferno_popper__ = __webpack_require__(17);







var defaultProps = {
  tag: 'div',
  flip: true
};
var noFlipModifier = {
  flip: {
    enabled: false
  }
};

var DropdownMenu = function DropdownMenu(props, context) {
  var className = props.className,
      cssModule = props.cssModule,
      right = props.right,
      tag = props.tag,
      flip = props.flip,
      attrs = __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["className", "cssModule", "right", "tag", "flip"]);

  var position1 = context.dropup ? 'top' : 'bottom';
  var position2 = right ? 'end' : 'start';
  var classes = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, 'dropdown-menu', {
    'dropdown-menu-right': right,
    show: context.isOpen
  }), cssModule);
  attrs.placement = "".concat(position1, "-").concat(position2);
  return Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_5_inferno_popper__["c" /* Popper */], __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({
    "tabIndex": "-1",
    "role": "menu"
  }, attrs, {
    "component": tag,
    "aria-hidden": !context.isOpen,
    "className": classes,
    "modifiers": !flip ? noFlipModifier : undefined
  })));
};

DropdownMenu.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (DropdownMenu);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__(3);











var defaultProps = {
  tag: 'button',
  toggle: true
};

var DropdownItem =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(DropdownItem, _Component);

  function DropdownItem(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, DropdownItem);

    _this = __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(DropdownItem).call(this, props));
    _this.onClick = _this.onClick.bind(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.getTabIndex = _this.getTabIndex.bind(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(DropdownItem, [{
    key: "onClick",
    value: function onClick(e) {
      if (this.props.disabled || this.props.header || this.props.divider) {
        e.preventDefault();
        return;
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      if (this.props.toggle) {
        this.context.toggle();
      }
    }
  }, {
    key: "getTabIndex",
    value: function getTabIndex() {
      if (this.props.disabled || this.props.header || this.props.divider) {
        return '-1';
      }

      return '0';
    }
  }, {
    key: "render",
    value: function render() {
      var tabIndex = this.getTabIndex();

      var _omit = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["f" /* omit */])(this.props, ['toggle']),
          children = _omit.children,
          className = _omit.className,
          cssModule = _omit.cssModule,
          divider = _omit.divider,
          Tag = _omit.tag,
          header = _omit.header,
          active = _omit.active,
          props = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(_omit, ["children", "className", "cssModule", "divider", "tag", "header", "active"]);

      var classes = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_9_classnames___default()(className, {
        disabled: props.disabled,
        'dropdown-item': !divider && !header,
        active: active,
        'dropdown-header': header,
        'dropdown-divider': divider
      }), cssModule);

      if (Tag === 'button') {
        if (header) {
          Tag = 'h6';
        } else if (divider) {
          Tag = 'div';
        } else if (props.href) {
          Tag = 'a';
        }
      }

      Object.assign(props, {
        className: classes,
        tabIndex: tabIndex,
        type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined,
        onClick: this.onClick
      });
      return Object(__WEBPACK_IMPORTED_MODULE_8_inferno_create_element__["a" /* createElement */])(Tag, props, children);
    }
  }]);

  return DropdownItem;
}(__WEBPACK_IMPORTED_MODULE_7_inferno__["a" /* Component */]);

DropdownItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (DropdownItem);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return animateOnRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animateOnAdd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(28);


var animateOnRemove = function animateOnRemove(node, animationName, callback) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* animationIsRunningOnParent */])(node)) return;
  var animCls = {};

  if (__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default()(animationName) === 'object') {
    animCls = animationName;
  } else {
    animCls['start'] = animationName + '-leave';
    animCls['active'] = animationName + '-leave-active';
    animCls['end'] = animationName + '-leave-end';
  } // 1. Clone DOM node, inject it and hide original


  var clone = node.cloneNode(true);

  var _getDimensions = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* getDimensions */])(node),
      width = _getDimensions.width,
      height = _getDimensions.height;

  Object(__WEBPACK_IMPORTED_MODULE_1__utils__["h" /* setDimensions */])(clone, width, height);
  Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addClassName */])(clone, animCls.start); // Leaving original element so it can be removed in the normal way

  Object(__WEBPACK_IMPORTED_MODULE_1__utils__["i" /* setDisplay */])(node, 'none !important');
  node.insertAdjacentElement('beforebegin', clone); // 2. Set an animation listener, code at end

  Object(__WEBPACK_IMPORTED_MODULE_1__utils__["f" /* registerTransitionListener */])(clone, function () {
    // *** Cleanup ***
    callback && callback(clone);
    clone.remove();
  }); // 3. Activate transitions

  Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addClassName */])(clone, animCls.active); // 4. Activate target state

  setTimeout(function () {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addClassName */])(clone, animCls.end);
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* removeClassName */])(clone, animCls.start);
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* clearDimensions */])(clone);
  }, 5);
};
var animateOnAdd = function animateOnAdd(node, animationName, callback) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* animationIsRunningOnParent */])(node)) return;
  var animCls = {};

  if (__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default()(animationName) === 'object') {
    animCls = animationName;
  } else {
    animCls['start'] = animationName + '-enter';
    animCls['active'] = animationName + '-enter-active';
    animCls['end'] = animationName + '-enter-end';
  } // 1. Get height and set start of animation


  var _getDimensions2 = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* getDimensions */])(node),
      width = _getDimensions2.width,
      height = _getDimensions2.height;

  Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addClassName */])(node, animCls.start);
  Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* forceReflow */])(); // 2. Set an animation listener, code at end

  Object(__WEBPACK_IMPORTED_MODULE_1__utils__["f" /* registerTransitionListener */])([node, node.children[0]], function () {
    // *** Cleanup ***
    // 5. Remove the element
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* clearDimensions */])(node);
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* removeClassName */])(node, animCls.active);
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* removeClassName */])(node, animCls.end); // 6. Call callback to allow stuff to happen

    callback && callback(node);
  }); // 3. Activate transition

  Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addClassName */])(node, animCls.active); // 4. Activate target state

  setTimeout(function () {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["h" /* setDimensions */])(node, width, height);
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* removeClassName */])(node, animCls.start);
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* addClassName */])(node, animCls.end);
  }, 5);
};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addClassName;
/* harmony export (immutable) */ __webpack_exports__["g"] = removeClassName;
/* harmony export (immutable) */ __webpack_exports__["d"] = forceReflow;
/* harmony export (immutable) */ __webpack_exports__["i"] = setDisplay;
/* harmony export (immutable) */ __webpack_exports__["e"] = getDimensions;
/* harmony export (immutable) */ __webpack_exports__["h"] = setDimensions;
/* harmony export (immutable) */ __webpack_exports__["c"] = clearDimensions;
/* harmony export (immutable) */ __webpack_exports__["b"] = animationIsRunningOnParent;
/* harmony export (immutable) */ __webpack_exports__["f"] = registerTransitionListener;
function addClassName(node, className) {
  if (className) {
    var tmp = className.split(' ');

    for (var i = 0; i < tmp.length; i++) {
      node.classList.add(tmp[i]);
    }
  }
}
function removeClassName(node, className) {
  if (className) {
    var tmp = className.split(' ');

    for (var i = 0; i < tmp.length; i++) {
      node.classList.remove(tmp[i]);
    }
  }
}
function forceReflow() {
  var dummy = document.body.clientHeight;
}
function setDisplay(node, value) {
  var oldVal = node.style.display;

  if (oldVal !== value) {
    node.style.display = value;
  }

  return oldVal;
}

function _cleanStyle(node) {
  if (!node.style) {
    node.removeAttribute('style');
  }
}

function getDimensions(node) {
  var tmpDisplay = node.style.display;
  var isDisplayNone = window.getComputedStyle(node).getPropertyValue('display') === 'none';

  if (isDisplayNone) {
    node.style.display = 'block';
  }

  var tmp = node.getBoundingClientRect();

  if (isDisplayNone) {
    node.style.display = tmpDisplay;

    _cleanStyle(node);
  }

  return {
    width: tmp.width,
    height: tmp.height
  };
}
function setDimensions(node, width, height) {
  node.style.width = width + 'px';
  node.style.height = height + 'px';
}
function clearDimensions(node) {
  node.style.width = node.style.height = '';
}
function animationIsRunningOnParent(node) {
  return node.closest && node.closest('.InfernoAnimation--noAnim');
}

function _getMaxTransitionDuration()
/* add nodes as args*/
{
  var _arguments = arguments;
  var nrofTransitions = 0;
  var maxDuration = 0;

  var _loop = function _loop(i) {
    var node = _arguments[i];
    if (!node) return "continue";
    var cs = window.getComputedStyle(node);
    var dur = cs.getPropertyValue('transition-duration').split(',');
    var del = cs.getPropertyValue('transition-delay').split(',');
    var props = cs.getPropertyValue('transition-property').split(',').map(function (prop) {
      return prop.trim();
    });
    props.forEach(function (prop) {
      if (prop[0] === '-') {
        var tmp = prop.split('-').splice(2).join('-');

        if (props.indexOf(tmp) >= 0) {
          nrofTransitions--;
        }
      }
    });
    var animTimeout = dur.map(function (v, index) {
      return parseFloat(v) + parseFloat(del[index]);
    }).reduce(function (prev, curr) {
      return prev > curr ? prev : curr;
    }, 0);
    nrofTransitions += dur.length;

    if (animTimeout > maxDuration) {
      maxDuration = animTimeout;
    }
  };

  for (var i = 0; i < arguments.length; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }

  return {
    nrofTransitions: nrofTransitions,
    maxDuration: maxDuration
  };
}

function registerTransitionListener(nodes, callback) {
  if (!Array.isArray(nodes)) {
    nodes = [nodes];
  }

  var rootNode = nodes[0];
  rootNode.classList.add('InfernoAnimation-active');
  /**
   * Here comes the transition event listener
   */

  var _getMaxTransitionDura = _getMaxTransitionDuration.apply(this, nodes),
      nrofTransitionsLeft = _getMaxTransitionDura.nrofTransitions,
      maxDuration = _getMaxTransitionDura.maxDuration;

  var done = false;

  function onTransitionEnd(event) {
    // Make sure it isn't a child that is triggering the event
    if (event) {
      var goAhead = false;

      for (var i = 0; i < nodes.length; i++) {
        if (event.target === nodes[i]) {
          goAhead = true;
          break;
        }
      }

      if (!goAhead) return;
    }

    if (done || event !== undefined && --nrofTransitionsLeft > 0) {
      return;
    }

    done = true;
    rootNode.classList.remove('InfernoAnimation-active');
    /**
     * Perform cleanup
     */

    rootNode.removeEventListener("transitionend", onTransitionEnd, false);
    callback && callback();
  }

  rootNode.addEventListener("transitionend", onTransitionEnd, false); // Fallback if transitionend fails

  !window.debugAnimations && setTimeout(onTransitionEnd, Math.round(maxDuration * 1000) + 100);
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'div'
};

var FormGroup = function FormGroup(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      row = props.row,
      disabled = props.disabled,
      check = props.check,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "row", "disabled", "check", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, row ? 'row' : false, check ? 'form-check' : 'form-group', check && disabled ? 'disabled' : false), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

FormGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (FormGroup);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'div'
};

var Card = function Card(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      block = props.block,
      body = props.body,
      inverse = props.inverse,
      outline = props.outline,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "color", "block", "body", "inverse", "outline", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card', inverse ? 'text-white' : false, block || body ? 'card-body' : false, color ? "".concat(outline ? 'border' : 'bg', "-").concat(color) : false), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

Card.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Component; });
/* unused harmony export Fragment */
/* unused harmony export EMPTY_OBJ */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createComponentVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createPortal; });
/* unused harmony export createRef */
/* unused harmony export createRenderer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createTextVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createVNode; });
/* unused harmony export forwardRef */
/* unused harmony export directClone */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return findDOMfromVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getFlagsForElementVnode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return linkEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return normalizeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return render; });
/* unused harmony export rerender */
/* unused harmony export version */
/* unused harmony export _CI */
/* unused harmony export _HI */
/* unused harmony export _M */
/* unused harmony export _MCCC */
/* unused harmony export _ME */
/* unused harmony export _MFCC */
/* unused harmony export _MR */
/* unused harmony export _MT */
/* unused harmony export _MP */
/* unused harmony export __render */
var isArray = Array.isArray;

function isStringOrNumber(o) {
  var type = typeof o;
  return type === 'string' || type === 'number';
}

function isNullOrUndef(o) {
  return isUndefined(o) || isNull(o);
}

function isInvalid(o) {
  return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}

function isFunction(o) {
  return typeof o === 'function';
}

function isString(o) {
  return typeof o === 'string';
}

function isNull(o) {
  return o === null;
}

function isTrue(o) {
  return o === true;
}

function isUndefined(o) {
  return o === void 0;
}

function warning(message) {
  // tslint:disable-next-line:no-console
  console.error(message);
}

function combineFrom(first, second) {
  var out = {};

  if (first) {
    for (var key in first) {
      out[key] = first[key];
    }
  }

  if (second) {
    for (var key$1 in second) {
      out[key$1] = second[key$1];
    }
  }

  return out;
} // We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared


var EMPTY_OBJ = {};
var Fragment = '$F';

function appendChild(parentDOM, dom) {
  parentDOM.appendChild(dom);
}

function insertOrAppend(parentDOM, newNode, nextNode) {
  if (isNull(nextNode)) {
    appendChild(parentDOM, newNode);
  } else {
    parentDOM.insertBefore(newNode, nextNode);
  }
}

function documentCreateElement(tag, isSVG) {
  if (isSVG) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag);
  }

  return document.createElement(tag);
}

function replaceChild(parentDOM, newDom, lastDom) {
  parentDOM.replaceChild(newDom, lastDom);
}

function removeChild(parentDOM, childNode) {
  parentDOM.removeChild(childNode);
}

function callAll(arrayFn) {
  var listener;

  while ((listener = arrayFn.shift()) !== undefined) {
    listener();
  }
}

function findDOMfromVNode(vNode, start) {
  var flags;
  var children;

  while (vNode) {
    flags = vNode.flags;

    if (flags & 2033
    /* DOMRef */
    ) {
        return vNode.dom;
      }

    children = vNode.children;

    if (flags & 8192
    /* Fragment */
    ) {
        vNode = vNode.childFlags === 2
        /* HasVNodeChildren */
        ? children : children[start ? 0 : children.length - 1];
      } else if (flags & 4
    /* ComponentClass */
    ) {
        vNode = children.$LI;
      } else {
      vNode = children;
    }
  }

  return null;
}

function removeVNodeDOM(vNode, parentDOM) {
  var flags = vNode.flags;

  if (flags & 2033
  /* DOMRef */
  ) {
      removeChild(parentDOM, vNode.dom);
    } else {
    var children = vNode.children;

    if (flags & 4
    /* ComponentClass */
    ) {
        removeVNodeDOM(children.$LI, parentDOM);
      } else if (flags & 8
    /* ComponentFunction */
    ) {
        removeVNodeDOM(children, parentDOM);
      } else if (flags & 8192
    /* Fragment */
    ) {
        if (vNode.childFlags === 2
        /* HasVNodeChildren */
        ) {
            removeVNodeDOM(children, parentDOM);
          } else {
          for (var i = 0, len = children.length; i < len; ++i) {
            removeVNodeDOM(children[i], parentDOM);
          }
        }
      }
  }
}

function moveVNodeDOM(vNode, parentDOM, nextNode) {
  var flags = vNode.flags;

  if (flags & 2033
  /* DOMRef */
  ) {
      insertOrAppend(parentDOM, vNode.dom, nextNode);
    } else {
    var children = vNode.children;

    if (flags & 4
    /* ComponentClass */
    ) {
        moveVNodeDOM(children.$LI, parentDOM, nextNode);
      } else if (flags & 8
    /* ComponentFunction */
    ) {
        moveVNodeDOM(children, parentDOM, nextNode);
      } else if (flags & 8192
    /* Fragment */
    ) {
        if (vNode.childFlags === 2
        /* HasVNodeChildren */
        ) {
            moveVNodeDOM(children, parentDOM, nextNode);
          } else {
          for (var i = 0, len = children.length; i < len; ++i) {
            moveVNodeDOM(children[i], parentDOM, nextNode);
          }
        }
      }
  }
}

function createDerivedState(instance, nextProps, state) {
  if (instance.constructor.getDerivedStateFromProps) {
    return combineFrom(state, instance.constructor.getDerivedStateFromProps(nextProps, state));
  }

  return state;
}

var renderCheck = {
  v: false
};
var options = {
  componentComparator: null,
  createVNode: null,
  renderComplete: null
};
var keyPrefix = '$';

function V(childFlags, children, className, flags, key, props, ref, type) {
  this.childFlags = childFlags;
  this.children = children;
  this.className = className;
  this.dom = null;
  this.flags = flags;
  this.key = key === void 0 ? null : key;
  this.props = props === void 0 ? null : props;
  this.ref = ref === void 0 ? null : ref;
  this.type = type;
}

function createVNode(flags, type, className, children, childFlags, props, key, ref) {
  var childFlag = childFlags === void 0 ? 1
  /* HasInvalidChildren */
  : childFlags;
  var vNode = new V(childFlag, children, className, flags, key, props, ref, type);
  var optsVNode = options.createVNode;

  if (isFunction(optsVNode)) {
    optsVNode(vNode);
  }

  if (childFlag === 0
  /* UnknownChildren */
  ) {
      normalizeChildren(vNode, vNode.children);
    }

  return vNode;
}

function createComponentVNode(flags, type, props, key, ref) {
  if ((flags & 2
  /* ComponentUnknown */
  ) !== 0) {
    if (type.prototype && type.prototype.render) {
      flags = 4
      /* ComponentClass */
      ;
    } else if (type.render) {
      flags = 32776
      /* ForwardRefComponent */
      ;
      type = type.render;
    } else {
      flags = 8
      /* ComponentFunction */
      ;
    }
  } // set default props


  var defaultProps = type.defaultProps;

  if (!isNullOrUndef(defaultProps)) {
    if (!props) {
      props = {}; // Props can be referenced and modified at application level so always create new object
    }

    for (var prop in defaultProps) {
      if (isUndefined(props[prop])) {
        props[prop] = defaultProps[prop];
      }
    }
  }

  if ((flags & 8
  /* ComponentFunction */
  ) > 0 && (flags & 32768
  /* ForwardRef */
  ) === 0) {
    var defaultHooks = type.defaultHooks;

    if (!isNullOrUndef(defaultHooks)) {
      if (!ref) {
        // As ref cannot be referenced from application level, we can use the same refs object
        ref = defaultHooks;
      } else {
        for (var prop$1 in defaultHooks) {
          if (isUndefined(ref[prop$1])) {
            ref[prop$1] = defaultHooks[prop$1];
          }
        }
      }
    }
  }

  var vNode = new V(1
  /* HasInvalidChildren */
  , null, null, flags, key, props, ref, type);
  var optsVNode = options.createVNode;

  if (isFunction(optsVNode)) {
    optsVNode(vNode);
  }

  return vNode;
}

function createTextVNode(text, key) {
  return new V(1
  /* HasInvalidChildren */
  , isNullOrUndef(text) ? '' : text, null, 16
  /* Text */
  , key, null, null, null);
}

function createFragment(children, childFlags, key) {
  var fragment = createVNode(8192
  /* Fragment */
  , 8192
  /* Fragment */
  , null, children, childFlags, null, key, null);

  switch (fragment.childFlags) {
    case 1
    /* HasInvalidChildren */
    :
      fragment.children = createVoidVNode();
      fragment.childFlags = 2
      /* HasVNodeChildren */
      ;
      break;

    case 16
    /* HasTextChildren */
    :
      fragment.children = [createTextVNode(children)];
      fragment.childFlags = 4
      /* HasNonKeyedChildren */
      ;
      break;

    default:
      break;
  }

  return fragment;
}

function normalizeProps(vNode) {
  var props = vNode.props;

  if (props) {
    var flags = vNode.flags;

    if (flags & 481
    /* Element */
    ) {
        if (props.children !== void 0 && isNullOrUndef(vNode.children)) {
          normalizeChildren(vNode, props.children);
        }

        if (props.className !== void 0) {
          vNode.className = props.className || null;
          props.className = undefined;
        }
      }

    if (props.key !== void 0) {
      vNode.key = props.key;
      props.key = undefined;
    }

    if (props.ref !== void 0) {
      if (flags & 8
      /* ComponentFunction */
      ) {
          vNode.ref = combineFrom(vNode.ref, props.ref);
        } else {
        vNode.ref = props.ref;
      }

      props.ref = undefined;
    }
  }

  return vNode;
}
/*
 * Fragment is different than normal vNode,
 * because when it needs to be cloned we need to clone its children too
 * But not normalize, because otherwise those possibly get KEY and re-mount
 */


function cloneFragment(vNodeToClone) {
  var clonedChildren;
  var oldChildren = vNodeToClone.children;
  var childFlags = vNodeToClone.childFlags;

  if (childFlags === 2
  /* HasVNodeChildren */
  ) {
      clonedChildren = directClone(oldChildren);
    } else if (childFlags & 12
  /* MultipleChildren */
  ) {
      clonedChildren = [];

      for (var i = 0, len = oldChildren.length; i < len; ++i) {
        clonedChildren.push(directClone(oldChildren[i]));
      }
    }

  return createFragment(clonedChildren, childFlags, vNodeToClone.key);
}

function directClone(vNodeToClone) {
  var flags = vNodeToClone.flags & -16385
  /* ClearInUse */
  ;
  var props = vNodeToClone.props;

  if (flags & 14
  /* Component */
  ) {
      if (!isNull(props)) {
        var propsToClone = props;
        props = {};

        for (var key in propsToClone) {
          props[key] = propsToClone[key];
        }
      }
    }

  if ((flags & 8192
  /* Fragment */
  ) === 0) {
    return new V(vNodeToClone.childFlags, vNodeToClone.children, vNodeToClone.className, flags, vNodeToClone.key, props, vNodeToClone.ref, vNodeToClone.type);
  }

  return cloneFragment(vNodeToClone);
}

function createVoidVNode() {
  return createTextVNode('', null);
}

function createPortal(children, container) {
  return createVNode(1024
  /* Portal */
  , 1024
  /* Portal */
  , null, children, 0
  /* UnknownChildren */
  , null, isInvalid(children) ? null : children.key, container);
}

function _normalizeVNodes(nodes, result, index, currentKey) {
  for (var len = nodes.length; index < len; index++) {
    var n = nodes[index];

    if (!isInvalid(n)) {
      var newKey = currentKey + keyPrefix + index;

      if (isArray(n)) {
        _normalizeVNodes(n, result, 0, newKey);
      } else {
        if (isStringOrNumber(n)) {
          n = createTextVNode(n, newKey);
        } else {
          var oldKey = n.key;
          var isPrefixedKey = isString(oldKey) && oldKey[0] === keyPrefix;

          if (n.flags & 81920
          /* InUseOrNormalized */
          || isPrefixedKey) {
            n = directClone(n);
          }

          n.flags |= 65536
          /* Normalized */
          ;

          if (isNull(oldKey) || isPrefixedKey) {
            n.key = newKey;
          } else {
            n.key = currentKey + oldKey;
          }
        }

        result.push(n);
      }
    }
  }
}

function getFlagsForElementVnode(type) {
  switch (type) {
    case 'svg':
      return 32
      /* SvgElement */
      ;

    case 'input':
      return 64
      /* InputElement */
      ;

    case 'select':
      return 256
      /* SelectElement */
      ;

    case 'textarea':
      return 128
      /* TextareaElement */
      ;

    case Fragment:
      return 8192
      /* Fragment */
      ;

    default:
      return 1
      /* HtmlElement */
      ;
  }
}

function normalizeChildren(vNode, children) {
  var newChildren;
  var newChildFlags = 1
  /* HasInvalidChildren */
  ; // Don't change children to match strict equal (===) true in patching

  if (isInvalid(children)) {
    newChildren = children;
  } else if (isStringOrNumber(children)) {
    newChildFlags = 16
    /* HasTextChildren */
    ;
    newChildren = children;
  } else if (isArray(children)) {
    var len = children.length;

    for (var i = 0; i < len; ++i) {
      var n = children[i];

      if (isInvalid(n) || isArray(n)) {
        newChildren = newChildren || children.slice(0, i);

        _normalizeVNodes(children, newChildren, i, '');

        break;
      } else if (isStringOrNumber(n)) {
        newChildren = newChildren || children.slice(0, i);
        newChildren.push(createTextVNode(n, keyPrefix + i));
      } else {
        var key = n.key;
        var needsCloning = (n.flags & 81920
        /* InUseOrNormalized */
        ) > 0;
        var isNullKey = isNull(key);
        var isPrefixed = !isNullKey && isString(key) && key[0] === keyPrefix;

        if (needsCloning || isNullKey || isPrefixed) {
          newChildren = newChildren || children.slice(0, i);

          if (needsCloning || isPrefixed) {
            n = directClone(n);
          }

          if (isNullKey || isPrefixed) {
            n.key = keyPrefix + i;
          }

          newChildren.push(n);
        } else if (newChildren) {
          newChildren.push(n);
        }

        n.flags |= 65536
        /* Normalized */
        ;
      }
    }

    newChildren = newChildren || children;

    if (newChildren.length === 0) {
      newChildFlags = 1
      /* HasInvalidChildren */
      ;
    } else {
      newChildFlags = 8
      /* HasKeyedChildren */
      ;
    }
  } else {
    newChildren = children;
    newChildren.flags |= 65536
    /* Normalized */
    ;

    if (children.flags & 81920
    /* InUseOrNormalized */
    ) {
        newChildren = directClone(children);
      }

    newChildFlags = 2
    /* HasVNodeChildren */
    ;
  }

  vNode.children = newChildren;
  vNode.childFlags = newChildFlags;
  return vNode;
}
/**
 * Links given data to event as first parameter
 * @param {*} data data to be linked, it will be available in function as first parameter
 * @param {Function} event Function to be called when event occurs
 * @returns {{data: *, event: Function}}
 */


function linkEvent(data, event) {
  if (isFunction(event)) {
    return {
      data: data,
      event: event
    };
  }

  return null; // Return null when event is invalid, to avoid creating unnecessary event handlers
}

var xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = 'http://www.w3.org/XML/1998/namespace';
var namespaces = {
  'xlink:actuate': xlinkNS,
  'xlink:arcrole': xlinkNS,
  'xlink:href': xlinkNS,
  'xlink:role': xlinkNS,
  'xlink:show': xlinkNS,
  'xlink:title': xlinkNS,
  'xlink:type': xlinkNS,
  'xml:base': xmlNS,
  'xml:lang': xmlNS,
  'xml:space': xmlNS
};

function getDelegatedEventObject(v) {
  return {
    onClick: v,
    onDblClick: v,
    onFocusIn: v,
    onFocusOut: v,
    onKeyDown: v,
    onKeyPress: v,
    onKeyUp: v,
    onMouseDown: v,
    onMouseMove: v,
    onMouseUp: v,
    onSubmit: v,
    onTouchEnd: v,
    onTouchMove: v,
    onTouchStart: v
  };
}

var attachedEventCounts = getDelegatedEventObject(0);
var attachedEvents = getDelegatedEventObject(null);
var delegatedEvents = getDelegatedEventObject(true);

function handleEvent(name, nextEvent, dom) {
  var eventsObject = dom.$EV;

  if (nextEvent) {
    if (attachedEventCounts[name] === 0) {
      attachedEvents[name] = attachEventToDocument(name);
    }

    if (!eventsObject) {
      eventsObject = dom.$EV = getDelegatedEventObject(null);
    }

    if (!eventsObject[name]) {
      ++attachedEventCounts[name];
    }

    eventsObject[name] = nextEvent;
  } else if (eventsObject && eventsObject[name]) {
    if (--attachedEventCounts[name] === 0) {
      document.removeEventListener(normalizeEventName(name), attachedEvents[name]);
      attachedEvents[name] = null;
    }

    eventsObject[name] = null;
  }
}

function dispatchEvents(event, target, isClick, name, eventData) {
  var dom = target;

  while (!isNull(dom)) {
    // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
    // because the event listener is on document.body
    // Don't process clicks on disabled elements
    if (isClick && dom.disabled) {
      return;
    }

    var eventsObject = dom.$EV;

    if (eventsObject) {
      var currentEvent = eventsObject[name];

      if (currentEvent) {
        // linkEvent object
        eventData.dom = dom;

        if (currentEvent.event) {
          currentEvent.event(currentEvent.data, event);
        } else {
          currentEvent(event);
        }

        if (event.cancelBubble) {
          return;
        }
      }
    }

    dom = dom.parentNode;
  }
}

function normalizeEventName(name) {
  return name.substr(2).toLowerCase();
}

function stopPropagation() {
  this.cancelBubble = true;

  if (!this.immediatePropagationStopped) {
    this.stopImmediatePropagation();
  }
}

function attachEventToDocument(name) {
  var docEvent = function (event) {
    var isClick = name === 'onClick' || name === 'onDblClick';

    if (isClick && event.button !== 0) {
      // Firefox incorrectly triggers click event for mid/right mouse buttons.
      // This bug has been active for 12 years.
      // https://bugzilla.mozilla.org/show_bug.cgi?id=184051
      event.stopPropagation();
      return;
    }

    event.stopPropagation = stopPropagation; // Event data needs to be object to save reference to currentTarget getter

    var eventData = {
      dom: document
    };
    Object.defineProperty(event, 'currentTarget', {
      configurable: true,
      get: function get() {
        return eventData.dom;
      }
    });
    dispatchEvents(event, event.target, isClick, name, eventData);
  };

  document.addEventListener(normalizeEventName(name), docEvent);
  return docEvent;
}

function isSameInnerHTML(dom, innerHTML) {
  var tempdom = document.createElement('i');
  tempdom.innerHTML = innerHTML;
  return tempdom.innerHTML === dom.innerHTML;
}

function triggerEventListener(props, methodName, e) {
  if (props[methodName]) {
    var listener = props[methodName];

    if (listener.event) {
      listener.event(listener.data, e);
    } else {
      listener(e);
    }
  } else {
    var nativeListenerName = methodName.toLowerCase();

    if (props[nativeListenerName]) {
      props[nativeListenerName](e);
    }
  }
}

function createWrappedFunction(methodName, applyValue) {
  var fnMethod = function (e) {
    var vNode = this.$V; // If vNode is gone by the time event fires, no-op

    if (!vNode) {
      return;
    }

    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;

    if (isString(methodName)) {
      triggerEventListener(props, methodName, e);
    } else {
      for (var i = 0; i < methodName.length; ++i) {
        triggerEventListener(props, methodName[i], e);
      }
    }

    if (isFunction(applyValue)) {
      var newVNode = this.$V;
      var newProps = newVNode.props || EMPTY_OBJ;
      applyValue(newProps, dom, false, newVNode);
    }
  };

  Object.defineProperty(fnMethod, 'wrapped', {
    configurable: false,
    enumerable: false,
    value: true,
    writable: false
  });
  return fnMethod;
}

function isCheckedType(type) {
  return type === 'checkbox' || type === 'radio';
}

var onTextInputChange = createWrappedFunction('onInput', applyValueInput);
var wrappedOnChange = createWrappedFunction(['onClick', 'onChange'], applyValueInput);
/* tslint:disable-next-line:no-empty */

function emptywrapper(event) {
  event.stopPropagation();
}

emptywrapper.wrapped = true;

function inputEvents(dom, nextPropsOrEmpty) {
  if (isCheckedType(nextPropsOrEmpty.type)) {
    dom.onchange = wrappedOnChange;
    dom.onclick = emptywrapper;
  } else {
    dom.oninput = onTextInputChange;
  }
}

function applyValueInput(nextPropsOrEmpty, dom) {
  var type = nextPropsOrEmpty.type;
  var value = nextPropsOrEmpty.value;
  var checked = nextPropsOrEmpty.checked;
  var multiple = nextPropsOrEmpty.multiple;
  var defaultValue = nextPropsOrEmpty.defaultValue;
  var hasValue = !isNullOrUndef(value);

  if (type && type !== dom.type) {
    dom.setAttribute('type', type);
  }

  if (!isNullOrUndef(multiple) && multiple !== dom.multiple) {
    dom.multiple = multiple;
  }

  if (!isNullOrUndef(defaultValue) && !hasValue) {
    dom.defaultValue = defaultValue + '';
  }

  if (isCheckedType(type)) {
    if (hasValue) {
      dom.value = value;
    }

    if (!isNullOrUndef(checked)) {
      dom.checked = checked;
    }
  } else {
    if (hasValue && dom.value !== value) {
      dom.defaultValue = value;
      dom.value = value;
    } else if (!isNullOrUndef(checked)) {
      dom.checked = checked;
    }
  }
}

function updateChildOptions(vNode, value) {
  if (vNode.type === 'option') {
    updateChildOption(vNode, value);
  } else {
    var children = vNode.children;
    var flags = vNode.flags;

    if (flags & 4
    /* ComponentClass */
    ) {
        updateChildOptions(children.$LI, value);
      } else if (flags & 8
    /* ComponentFunction */
    ) {
        updateChildOptions(children, value);
      } else if (vNode.childFlags === 2
    /* HasVNodeChildren */
    ) {
        updateChildOptions(children, value);
      } else if (vNode.childFlags & 12
    /* MultipleChildren */
    ) {
        for (var i = 0, len = children.length; i < len; ++i) {
          updateChildOptions(children[i], value);
        }
      }
  }
}

function updateChildOption(vNode, value) {
  var props = vNode.props || EMPTY_OBJ;
  var dom = vNode.dom; // we do this as multiple may have changed

  dom.value = props.value;

  if (props.value === value || isArray(value) && value.indexOf(props.value) !== -1) {
    dom.selected = true;
  } else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {
    dom.selected = props.selected || false;
  }
}

var onSelectChange = createWrappedFunction('onChange', applyValueSelect);

function selectEvents(dom) {
  dom.onchange = onSelectChange;
}

function applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode) {
  var multiplePropInBoolean = Boolean(nextPropsOrEmpty.multiple);

  if (!isNullOrUndef(nextPropsOrEmpty.multiple) && multiplePropInBoolean !== dom.multiple) {
    dom.multiple = multiplePropInBoolean;
  }

  var childFlags = vNode.childFlags;

  if (childFlags !== 1
  /* HasInvalidChildren */
  ) {
      var value = nextPropsOrEmpty.value;

      if (mounting && isNullOrUndef(value)) {
        value = nextPropsOrEmpty.defaultValue;
      }

      updateChildOptions(vNode, value);
    }
}

var onTextareaInputChange = createWrappedFunction('onInput', applyValueTextArea);
var wrappedOnChange$1 = createWrappedFunction('onChange');

function textAreaEvents(dom, nextPropsOrEmpty) {
  dom.oninput = onTextareaInputChange;

  if (nextPropsOrEmpty.onChange) {
    dom.onchange = wrappedOnChange$1;
  }
}

function applyValueTextArea(nextPropsOrEmpty, dom, mounting) {
  var value = nextPropsOrEmpty.value;
  var domValue = dom.value;

  if (isNullOrUndef(value)) {
    if (mounting) {
      var defaultValue = nextPropsOrEmpty.defaultValue;

      if (!isNullOrUndef(defaultValue) && defaultValue !== domValue) {
        dom.defaultValue = defaultValue;
        dom.value = defaultValue;
      }
    }
  } else if (domValue !== value) {
    /* There is value so keep it controlled */
    dom.defaultValue = value;
    dom.value = value;
  }
}
/**
 * There is currently no support for switching same input between controlled and nonControlled
 * If that ever becomes a real issue, then re design controlled elements
 * Currently user must choose either controlled or non-controlled and stick with that
 */


function processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
  if (flags & 64
  /* InputElement */
  ) {
      applyValueInput(nextPropsOrEmpty, dom);
    } else if (flags & 256
  /* SelectElement */
  ) {
      applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode);
    } else if (flags & 128
  /* TextareaElement */
  ) {
      applyValueTextArea(nextPropsOrEmpty, dom, mounting);
    }

  if (isControlled) {
    dom.$V = vNode;
  }
}

function addFormElementEventHandlers(flags, dom, nextPropsOrEmpty) {
  if (flags & 64
  /* InputElement */
  ) {
      inputEvents(dom, nextPropsOrEmpty);
    } else if (flags & 256
  /* SelectElement */
  ) {
      selectEvents(dom);
    } else if (flags & 128
  /* TextareaElement */
  ) {
      textAreaEvents(dom, nextPropsOrEmpty);
    }
}

function isControlledFormElement(nextPropsOrEmpty) {
  return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type) ? !isNullOrUndef(nextPropsOrEmpty.checked) : !isNullOrUndef(nextPropsOrEmpty.value);
}

function createRef() {
  return {
    current: null
  };
}

function forwardRef(render) {
  {
    return {
      render: render
    };
  }

  if (!isFunction(render)) {
    warning("forwardRef requires a render function but was given " + (render === null ? 'null' : typeof render) + ".");
    return;
  }

  var fwRef = {
    render: render
  };
  Object.seal(fwRef);
  return fwRef;
}

function pushRef(dom, value, lifecycle) {
  lifecycle.push(function () {
    value(dom);
  });
}

function unmountRef(ref) {
  if (ref) {
    if (isFunction(ref)) {
      ref(null);
    } else if (ref.current) {
      ref.current = null;
    }
  }
}

function mountRef(ref, value, lifecycle) {
  if (ref) {
    if (isFunction(ref)) {
      pushRef(value, ref, lifecycle);
    } else if (ref.current !== void 0) {
      ref.current = value;
    }
  }
}

function remove(vNode, parentDOM) {
  unmount(vNode);

  if (parentDOM) {
    removeVNodeDOM(vNode, parentDOM);
  }
}

function unmount(vNode) {
  var flags = vNode.flags;
  var children = vNode.children;
  var ref;

  if (flags & 481
  /* Element */
  ) {
      ref = vNode.ref;
      var props = vNode.props;
      unmountRef(ref);
      var childFlags = vNode.childFlags;

      if (!isNull(props)) {
        var keys = Object.keys(props);

        for (var i = 0, len = keys.length; i < len; i++) {
          var key = keys[i];

          if (delegatedEvents[key]) {
            handleEvent(key, null, vNode.dom);
          }
        }
      }

      if (childFlags & 12
      /* MultipleChildren */
      ) {
          unmountAllChildren(children);
        } else if (childFlags === 2
      /* HasVNodeChildren */
      ) {
          unmount(children);
        }
    } else if (children) {
    if (flags & 4
    /* ComponentClass */
    ) {
        if (isFunction(children.componentWillUnmount)) {
          children.componentWillUnmount();
        }

        unmountRef(vNode.ref);
        children.$UN = true;
        unmount(children.$LI);
      } else if (flags & 8
    /* ComponentFunction */
    ) {
        ref = vNode.ref;

        if (!isNullOrUndef(ref) && isFunction(ref.onComponentWillUnmount)) {
          ref.onComponentWillUnmount(findDOMfromVNode(vNode, true), vNode.props || EMPTY_OBJ);
        }

        unmount(children);
      } else if (flags & 1024
    /* Portal */
    ) {
        remove(children, vNode.ref);
      } else if (flags & 8192
    /* Fragment */
    ) {
        if (vNode.childFlags & 12
        /* MultipleChildren */
        ) {
            unmountAllChildren(children);
          }
      }
  }
}

function unmountAllChildren(children) {
  for (var i = 0, len = children.length; i < len; ++i) {
    unmount(children[i]);
  }
}

function clearDOM(dom) {
  // Optimization for clearing dom
  dom.textContent = '';
}

function removeAllChildren(dom, vNode, children) {
  unmountAllChildren(children);

  if (vNode.flags & 8192
  /* Fragment */
  ) {
      removeVNodeDOM(vNode, dom);
    } else {
    clearDOM(dom);
  }
}

function createLinkEvent(linkEvent, nextValue) {
  return function (e) {
    linkEvent(nextValue.data, e);
  };
}

function patchEvent(name, nextValue, dom) {
  var nameLowerCase = name.toLowerCase();

  if (!isFunction(nextValue) && !isNullOrUndef(nextValue)) {
    var linkEvent = nextValue.event;

    if (isFunction(linkEvent)) {
      dom[nameLowerCase] = createLinkEvent(linkEvent, nextValue);
    }
  } else {
    var domEvent = dom[nameLowerCase]; // if the function is wrapped, that means it's been controlled by a wrapper

    if (!domEvent || !domEvent.wrapped) {
      dom[nameLowerCase] = nextValue;
    }
  }
} // We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined


function patchStyle(lastAttrValue, nextAttrValue, dom) {
  if (isNullOrUndef(nextAttrValue)) {
    dom.removeAttribute('style');
    return;
  }

  var domStyle = dom.style;
  var style;
  var value;

  if (isString(nextAttrValue)) {
    domStyle.cssText = nextAttrValue;
    return;
  }

  if (!isNullOrUndef(lastAttrValue) && !isString(lastAttrValue)) {
    for (style in nextAttrValue) {
      // do not add a hasOwnProperty check here, it affects performance
      value = nextAttrValue[style];

      if (value !== lastAttrValue[style]) {
        domStyle.setProperty(style, value);
      }
    }

    for (style in lastAttrValue) {
      if (isNullOrUndef(nextAttrValue[style])) {
        domStyle.removeProperty(style);
      }
    }
  } else {
    for (style in nextAttrValue) {
      value = nextAttrValue[style];
      domStyle.setProperty(style, value);
    }
  }
}

function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode) {
  switch (prop) {
    case 'children':
    case 'childrenType':
    case 'className':
    case 'defaultValue':
    case 'key':
    case 'multiple':
    case 'ref':
      break;

    case 'autoFocus':
      dom.autofocus = !!nextValue;
      break;

    case 'allowfullscreen':
    case 'autoplay':
    case 'capture':
    case 'checked':
    case 'controls':
    case 'default':
    case 'disabled':
    case 'hidden':
    case 'indeterminate':
    case 'loop':
    case 'muted':
    case 'novalidate':
    case 'open':
    case 'readOnly':
    case 'required':
    case 'reversed':
    case 'scoped':
    case 'seamless':
    case 'selected':
      dom[prop] = !!nextValue;
      break;

    case 'defaultChecked':
    case 'value':
    case 'volume':
      if (hasControlledValue && prop === 'value') {
        break;
      }

      var value = isNullOrUndef(nextValue) ? '' : nextValue;

      if (dom[prop] !== value) {
        dom[prop] = value;
      }

      break;

    case 'style':
      patchStyle(lastValue, nextValue, dom);
      break;

    case 'dangerouslySetInnerHTML':
      var lastHtml = lastValue && lastValue.__html || '';
      var nextHtml = nextValue && nextValue.__html || '';

      if (lastHtml !== nextHtml) {
        if (!isNullOrUndef(nextHtml) && !isSameInnerHTML(dom, nextHtml)) {
          if (!isNull(lastVNode)) {
            if (lastVNode.childFlags & 12
            /* MultipleChildren */
            ) {
                unmountAllChildren(lastVNode.children);
              } else if (lastVNode.childFlags === 2
            /* HasVNodeChildren */
            ) {
                unmount(lastVNode.children);
              }

            lastVNode.children = null;
            lastVNode.childFlags = 1
            /* HasInvalidChildren */
            ;
          }

          dom.innerHTML = nextHtml;
        }
      }

      break;

    default:
      if (delegatedEvents[prop]) {
        if (!(lastValue && nextValue && !isFunction(lastValue) && !isFunction(nextValue) && lastValue.event === nextValue.event && lastValue.data === nextValue.data)) {
          handleEvent(prop, nextValue, dom);
        }
      } else if (prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110) {
        patchEvent(prop, nextValue, dom);
      } else if (isNullOrUndef(nextValue)) {
        dom.removeAttribute(prop);
      } else if (isSVG && namespaces[prop]) {
        // We optimize for isSVG being false
        // If we end up in this path we can read property again
        dom.setAttributeNS(namespaces[prop], prop, nextValue);
      } else {
        dom.setAttribute(prop, nextValue);
      }

      break;
  }
}

function mountProps(vNode, flags, props, dom, isSVG) {
  var hasControlledValue = false;
  var isFormElement = (flags & 448
  /* FormElement */
  ) > 0;

  if (isFormElement) {
    hasControlledValue = isControlledFormElement(props);

    if (hasControlledValue) {
      addFormElementEventHandlers(flags, dom, props);
    }
  }

  for (var prop in props) {
    // do not add a hasOwnProperty check here, it affects performance
    patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue, null);
  }

  if (isFormElement) {
    processElement(flags, vNode, dom, props, true, hasControlledValue);
  }
}

function renderNewInput(instance, props, context) {
  var nextInput = handleComponentInput(instance.render(props, instance.state, context));
  var childContext = context;

  if (isFunction(instance.getChildContext)) {
    childContext = combineFrom(context, instance.getChildContext());
  }

  instance.$CX = childContext;
  return nextInput;
}

function createClassComponentInstance(vNode, Component, props, context, isSVG, lifecycle) {
  var instance = new Component(props, context);
  var usesNewAPI = instance.$N = Boolean(Component.getDerivedStateFromProps || instance.getSnapshotBeforeUpdate);
  instance.$SVG = isSVG;
  instance.$L = lifecycle;
  vNode.children = instance;
  instance.$BS = false;
  instance.context = context;

  if (instance.props === EMPTY_OBJ) {
    instance.props = props;
  }

  if (!usesNewAPI) {
    if (isFunction(instance.componentWillMount)) {
      instance.$BR = true;
      instance.componentWillMount();
      var pending = instance.$PS;

      if (!isNull(pending)) {
        var state = instance.state;

        if (isNull(state)) {
          instance.state = pending;
        } else {
          for (var key in pending) {
            state[key] = pending[key];
          }
        }

        instance.$PS = null;
      }

      instance.$BR = false;
    }
  } else {
    instance.state = createDerivedState(instance, props, instance.state);
  }

  instance.$LI = renderNewInput(instance, props, context);
  return instance;
}

function handleComponentInput(input) {
  if (isInvalid(input)) {
    input = createVoidVNode();
  } else if (isStringOrNumber(input)) {
    input = createTextVNode(input, null);
  } else if (isArray(input)) {
    input = createFragment(input, 0
    /* UnknownChildren */
    , null);
  } else if (input.flags & 16384
  /* InUse */
  ) {
      input = directClone(input);
    }

  return input;
}

function mount(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
  var flags = vNode.flags |= 16384
  /* InUse */
  ;

  if (flags & 481
  /* Element */
  ) {
      mountElement(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
    } else if (flags & 4
  /* ComponentClass */
  ) {
      mountClassComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
    } else if (flags & 8
  /* ComponentFunction */
  ) {
      mountFunctionalComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
    } else if (flags & 512
  /* Void */
  || flags & 16
  /* Text */
  ) {
      mountText(vNode, parentDOM, nextNode);
    } else if (flags & 8192
  /* Fragment */
  ) {
      mountFragment(vNode, parentDOM, context, isSVG, nextNode, lifecycle);
    } else if (flags & 1024
  /* Portal */
  ) {
      mountPortal(vNode, context, parentDOM, nextNode, lifecycle);
    }
}

function mountPortal(vNode, context, parentDOM, nextNode, lifecycle) {
  mount(vNode.children, vNode.ref, context, false, null, lifecycle);
  var placeHolderVNode = createVoidVNode();
  mountText(placeHolderVNode, parentDOM, nextNode);
  vNode.dom = placeHolderVNode.dom;
}

function mountFragment(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
  var children = vNode.children;
  var childFlags = vNode.childFlags; // When fragment is optimized for multiple children, check if there is no children and change flag to invalid
  // This is the only normalization always done, to keep optimization flags API same for fragments and regular elements

  if (childFlags & 12
  /* MultipleChildren */
  && children.length === 0) {
    childFlags = vNode.childFlags = 2
    /* HasVNodeChildren */
    ;
    children = vNode.children = createVoidVNode();
  }

  if (childFlags === 2
  /* HasVNodeChildren */
  ) {
      mount(children, parentDOM, nextNode, isSVG, nextNode, lifecycle);
    } else {
    mountArrayChildren(children, parentDOM, context, isSVG, nextNode, lifecycle);
  }
}

function mountText(vNode, parentDOM, nextNode) {
  var dom = vNode.dom = document.createTextNode(vNode.children);

  if (!isNull(parentDOM)) {
    insertOrAppend(parentDOM, dom, nextNode);
  }
}

function mountTextContent(dom, children) {
  dom.textContent = children;
}

function mountElement(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
  var flags = vNode.flags;
  var props = vNode.props;
  var className = vNode.className;
  var ref = vNode.ref;
  var children = vNode.children;
  var childFlags = vNode.childFlags;
  isSVG = isSVG || (flags & 32
  /* SvgElement */
  ) > 0;
  var dom = documentCreateElement(vNode.type, isSVG);
  vNode.dom = dom;

  if (!isNullOrUndef(className) && className !== '') {
    if (isSVG) {
      dom.setAttribute('class', className);
    } else {
      dom.className = className;
    }
  }

  if (childFlags === 16
  /* HasTextChildren */
  ) {
      mountTextContent(dom, children);
    } else if (childFlags !== 1
  /* HasInvalidChildren */
  ) {
      var childrenIsSVG = isSVG && vNode.type !== 'foreignObject';

      if (childFlags === 2
      /* HasVNodeChildren */
      ) {
          if (children.flags & 16384
          /* InUse */
          ) {
              vNode.children = children = directClone(children);
            }

          mount(children, dom, context, childrenIsSVG, null, lifecycle);
        } else if (childFlags === 8
      /* HasKeyedChildren */
      || childFlags === 4
      /* HasNonKeyedChildren */
      ) {
          mountArrayChildren(children, dom, context, childrenIsSVG, null, lifecycle);
        }
    }

  if (!isNull(parentDOM)) {
    insertOrAppend(parentDOM, dom, nextNode);
  }

  if (!isNull(props)) {
    mountProps(vNode, flags, props, dom, isSVG);
  }

  mountRef(ref, dom, lifecycle);
}

function mountArrayChildren(children, dom, context, isSVG, nextNode, lifecycle) {
  for (var i = 0, len = children.length; i < len; ++i) {
    var child = children[i];

    if (child.flags & 16384
    /* InUse */
    ) {
        children[i] = child = directClone(child);
      }

    mount(child, dom, context, isSVG, nextNode, lifecycle);
  }
}

function mountClassComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
  var instance = createClassComponentInstance(vNode, vNode.type, vNode.props || EMPTY_OBJ, context, isSVG, lifecycle);
  mount(instance.$LI, parentDOM, instance.$CX, isSVG, nextNode, lifecycle);
  mountClassComponentCallbacks(vNode.ref, instance, lifecycle);
}

function mountFunctionalComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle) {
  var type = vNode.type;
  var props = vNode.props || EMPTY_OBJ;
  var ref = vNode.ref;
  var input = handleComponentInput(vNode.flags & 32768
  /* ForwardRef */
  ? type(props, ref, context) : type(props, context));
  vNode.children = input;
  mount(input, parentDOM, context, isSVG, nextNode, lifecycle);
  mountFunctionalComponentCallbacks(props, ref, vNode, lifecycle);
}

function createClassMountCallback(instance) {
  return function () {
    instance.componentDidMount();
  };
}

function mountClassComponentCallbacks(ref, instance, lifecycle) {
  mountRef(ref, instance, lifecycle);

  if (isFunction(instance.componentDidMount)) {
    lifecycle.push(createClassMountCallback(instance));
  }
}

function createOnMountCallback(ref, vNode, props) {
  return function () {
    ref.onComponentDidMount(findDOMfromVNode(vNode, true), props);
  };
}

function mountFunctionalComponentCallbacks(props, ref, vNode, lifecycle) {
  if (!isNullOrUndef(ref)) {
    if (isFunction(ref.onComponentWillMount)) {
      ref.onComponentWillMount(props);
    }

    if (isFunction(ref.onComponentDidMount)) {
      lifecycle.push(createOnMountCallback(ref, vNode, props));
    }
  }
}

function replaceWithNewNode(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle) {
  unmount(lastVNode);

  if ((nextVNode.flags & lastVNode.flags & 2033
  /* DOMRef */
  ) !== 0) {
    // Single DOM operation, when we have dom references available
    mount(nextVNode, null, context, isSVG, null, lifecycle); // Single DOM operation, when we have dom references available

    replaceChild(parentDOM, nextVNode.dom, lastVNode.dom);
  } else {
    mount(nextVNode, parentDOM, context, isSVG, findDOMfromVNode(lastVNode, true), lifecycle);
    removeVNodeDOM(lastVNode, parentDOM);
  }
}

function patch(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
  var nextFlags = nextVNode.flags |= 16384
  /* InUse */
  ;

  if (lastVNode.flags !== nextFlags || lastVNode.type !== nextVNode.type || lastVNode.key !== nextVNode.key || (nextFlags & 2048
  /* ReCreate */
  ) !== 0) {
    if (lastVNode.flags & 16384
    /* InUse */
    ) {
        replaceWithNewNode(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle);
      } else {
      // Last vNode is not in use, it has crashed at application level. Just mount nextVNode and ignore last one
      mount(nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
    }
  } else if (nextFlags & 481
  /* Element */
  ) {
      patchElement(lastVNode, nextVNode, context, isSVG, nextFlags, lifecycle);
    } else if (nextFlags & 4
  /* ComponentClass */
  ) {
      patchClassComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
    } else if (nextFlags & 8
  /* ComponentFunction */
  ) {
      patchFunctionalComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle);
    } else if (nextFlags & 16
  /* Text */
  ) {
      patchText(lastVNode, nextVNode);
    } else if (nextFlags & 512
  /* Void */
  ) {
      nextVNode.dom = lastVNode.dom;
    } else if (nextFlags & 8192
  /* Fragment */
  ) {
      patchFragment(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle);
    } else {
    patchPortal(lastVNode, nextVNode, context, lifecycle);
  }
}

function patchSingleTextChild(lastChildren, nextChildren, parentDOM) {
  if (lastChildren !== nextChildren) {
    if (lastChildren !== '') {
      parentDOM.firstChild.nodeValue = nextChildren;
    } else {
      parentDOM.textContent = nextChildren;
    }
  }
}

function patchContentEditableChildren(dom, nextChildren) {
  if (dom.textContent !== nextChildren) {
    dom.textContent = nextChildren;
  }
}

function patchFragment(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle) {
  var lastChildren = lastVNode.children;
  var nextChildren = nextVNode.children;
  var lastChildFlags = lastVNode.childFlags;
  var nextChildFlags = nextVNode.childFlags;
  var nextNode = null; // When fragment is optimized for multiple children, check if there is no children and change flag to invalid
  // This is the only normalization always done, to keep optimization flags API same for fragments and regular elements

  if (nextChildFlags & 12
  /* MultipleChildren */
  && nextChildren.length === 0) {
    nextChildFlags = nextVNode.childFlags = 2
    /* HasVNodeChildren */
    ;
    nextChildren = nextVNode.children = createVoidVNode();
  }

  var nextIsSingle = (nextChildFlags & 2
  /* HasVNodeChildren */
  ) !== 0;

  if (lastChildFlags & 12
  /* MultipleChildren */
  ) {
      var lastLen = lastChildren.length; // We need to know Fragment's edge node when

      if ( // It uses keyed algorithm
      lastChildFlags & 8
      /* HasKeyedChildren */
      && nextChildFlags & 8
      /* HasKeyedChildren */
      || // It transforms from many to single
      nextIsSingle || // It will append more nodes
      !nextIsSingle && nextChildren.length > lastLen) {
        // When fragment has multiple children there is always at least one vNode
        nextNode = findDOMfromVNode(lastChildren[lastLen - 1], false).nextSibling;
      }
    }

  patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, lastVNode, lifecycle);
}

function patchPortal(lastVNode, nextVNode, context, lifecycle) {
  var lastContainer = lastVNode.ref;
  var nextContainer = nextVNode.ref;
  var nextChildren = nextVNode.children;
  patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, lastContainer, context, false, null, lastVNode, lifecycle);
  nextVNode.dom = lastVNode.dom;

  if (lastContainer !== nextContainer && !isInvalid(nextChildren)) {
    var node = nextChildren.dom;
    removeChild(lastContainer, node);
    appendChild(nextContainer, node);
  }
}

function patchElement(lastVNode, nextVNode, context, isSVG, nextFlags, lifecycle) {
  var dom = lastVNode.dom;
  var lastProps = lastVNode.props;
  var nextProps = nextVNode.props;
  var isFormElement = false;
  var hasControlledValue = false;
  var nextPropsOrEmpty;
  nextVNode.dom = dom;
  isSVG = isSVG || (nextFlags & 32
  /* SvgElement */
  ) > 0; // inlined patchProps  -- starts --

  if (lastProps !== nextProps) {
    var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
    nextPropsOrEmpty = nextProps || EMPTY_OBJ;

    if (nextPropsOrEmpty !== EMPTY_OBJ) {
      isFormElement = (nextFlags & 448
      /* FormElement */
      ) > 0;

      if (isFormElement) {
        hasControlledValue = isControlledFormElement(nextPropsOrEmpty);
      }

      for (var prop in nextPropsOrEmpty) {
        var lastValue = lastPropsOrEmpty[prop];
        var nextValue = nextPropsOrEmpty[prop];

        if (lastValue !== nextValue) {
          patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode);
        }
      }
    }

    if (lastPropsOrEmpty !== EMPTY_OBJ) {
      for (var prop$1 in lastPropsOrEmpty) {
        if (isNullOrUndef(nextPropsOrEmpty[prop$1]) && !isNullOrUndef(lastPropsOrEmpty[prop$1])) {
          patchProp(prop$1, lastPropsOrEmpty[prop$1], null, dom, isSVG, hasControlledValue, lastVNode);
        }
      }
    }
  }

  var nextChildren = nextVNode.children;
  var nextClassName = nextVNode.className; // inlined patchProps  -- ends --

  if (lastVNode.className !== nextClassName) {
    if (isNullOrUndef(nextClassName)) {
      dom.removeAttribute('class');
    } else if (isSVG) {
      dom.setAttribute('class', nextClassName);
    } else {
      dom.className = nextClassName;
    }
  }

  if (nextFlags & 4096
  /* ContentEditable */
  ) {
      patchContentEditableChildren(dom, nextChildren);
    } else {
    patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, dom, context, isSVG && nextVNode.type !== 'foreignObject', null, lastVNode, lifecycle);
  }

  if (isFormElement) {
    processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, false, hasControlledValue);
  }

  var nextRef = nextVNode.ref;
  var lastRef = lastVNode.ref;

  if (lastRef !== nextRef) {
    unmountRef(lastRef);
    mountRef(nextRef, dom, lifecycle);
  }
}

function replaceOneVNodeWithMultipleVNodes(lastChildren, nextChildren, parentDOM, context, isSVG, lifecycle) {
  unmount(lastChildren);
  mountArrayChildren(nextChildren, parentDOM, context, isSVG, findDOMfromVNode(lastChildren, true), lifecycle);
  removeVNodeDOM(lastChildren, parentDOM);
}

function patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, parentVNode, lifecycle) {
  switch (lastChildFlags) {
    case 2
    /* HasVNodeChildren */
    :
      switch (nextChildFlags) {
        case 2
        /* HasVNodeChildren */
        :
          patch(lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
          break;

        case 1
        /* HasInvalidChildren */
        :
          remove(lastChildren, parentDOM);
          break;

        case 16
        /* HasTextChildren */
        :
          unmount(lastChildren);
          mountTextContent(parentDOM, nextChildren);
          break;

        default:
          replaceOneVNodeWithMultipleVNodes(lastChildren, nextChildren, parentDOM, context, isSVG, lifecycle);
          break;
      }

      break;

    case 1
    /* HasInvalidChildren */
    :
      switch (nextChildFlags) {
        case 2
        /* HasVNodeChildren */
        :
          mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
          break;

        case 1
        /* HasInvalidChildren */
        :
          break;

        case 16
        /* HasTextChildren */
        :
          mountTextContent(parentDOM, nextChildren);
          break;

        default:
          mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
          break;
      }

      break;

    case 16
    /* HasTextChildren */
    :
      switch (nextChildFlags) {
        case 16
        /* HasTextChildren */
        :
          patchSingleTextChild(lastChildren, nextChildren, parentDOM);
          break;

        case 2
        /* HasVNodeChildren */
        :
          clearDOM(parentDOM);
          mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
          break;

        case 1
        /* HasInvalidChildren */
        :
          clearDOM(parentDOM);
          break;

        default:
          clearDOM(parentDOM);
          mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
          break;
      }

      break;

    default:
      switch (nextChildFlags) {
        case 16
        /* HasTextChildren */
        :
          unmountAllChildren(lastChildren);
          mountTextContent(parentDOM, nextChildren);
          break;

        case 2
        /* HasVNodeChildren */
        :
          removeAllChildren(parentDOM, parentVNode, lastChildren);
          mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
          break;

        case 1
        /* HasInvalidChildren */
        :
          removeAllChildren(parentDOM, parentVNode, lastChildren);
          break;

        default:
          var lastLength = lastChildren.length | 0;
          var nextLength = nextChildren.length | 0; // Fast path's for both algorithms

          if (lastLength === 0) {
            if (nextLength > 0) {
              mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle);
            }
          } else if (nextLength === 0) {
            removeAllChildren(parentDOM, parentVNode, lastChildren);
          } else if (nextChildFlags === 8
          /* HasKeyedChildren */
          && lastChildFlags === 8
          /* HasKeyedChildren */
          ) {
              patchKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength, nextNode, parentVNode, lifecycle);
            } else {
            patchNonKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength, nextNode, lifecycle);
          }

          break;
      }

      break;
  }
}

function createDidUpdate(instance, lastProps, lastState, snapshot, lifecycle) {
  lifecycle.push(function () {
    instance.componentDidUpdate(lastProps, lastState, snapshot);
  });
}

function updateClassComponent(instance, nextState, nextProps, parentDOM, context, isSVG, force, nextNode, lifecycle) {
  var lastState = instance.state;
  var lastProps = instance.props;
  var usesNewAPI = Boolean(instance.$N);
  var hasSCU = isFunction(instance.shouldComponentUpdate);

  if (usesNewAPI) {
    nextState = createDerivedState(instance, nextProps, nextState !== lastState ? combineFrom(lastState, nextState) : nextState);
  }

  if (force || !hasSCU || hasSCU && instance.shouldComponentUpdate(nextProps, nextState, context)) {
    if (!usesNewAPI && isFunction(instance.componentWillUpdate)) {
      instance.componentWillUpdate(nextProps, nextState, context);
    }

    instance.props = nextProps;
    instance.state = nextState;
    instance.context = context;
    var snapshot = null;
    var nextInput = renderNewInput(instance, nextProps, context);

    if (usesNewAPI && isFunction(instance.getSnapshotBeforeUpdate)) {
      snapshot = instance.getSnapshotBeforeUpdate(lastProps, lastState);
    }

    patch(instance.$LI, nextInput, parentDOM, instance.$CX, isSVG, nextNode, lifecycle); // Dont update Last input, until patch has been succesfully executed

    instance.$LI = nextInput;

    if (isFunction(instance.componentDidUpdate)) {
      createDidUpdate(instance, lastProps, lastState, snapshot, lifecycle);
    }
  } else {
    instance.props = nextProps;
    instance.state = nextState;
    instance.context = context;
  }
}

function patchClassComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
  var instance = nextVNode.children = lastVNode.children; // If Component has crashed, ignore it to stay functional

  if (isNull(instance)) {
    return;
  }

  instance.$L = lifecycle;
  var nextProps = nextVNode.props || EMPTY_OBJ;
  var nextRef = nextVNode.ref;
  var lastRef = lastVNode.ref;
  var nextState = instance.state;

  if (!instance.$N) {
    if (isFunction(instance.componentWillReceiveProps)) {
      instance.$BR = true;
      instance.componentWillReceiveProps(nextProps, context); // If instance component was removed during its own update do nothing.

      if (instance.$UN) {
        return;
      }

      instance.$BR = false;
    }

    if (!isNull(instance.$PS)) {
      nextState = combineFrom(nextState, instance.$PS);
      instance.$PS = null;
    }
  }

  updateClassComponent(instance, nextState, nextProps, parentDOM, context, isSVG, false, nextNode, lifecycle);

  if (lastRef !== nextRef) {
    unmountRef(lastRef);
    mountRef(nextRef, instance, lifecycle);
  }
}

function patchFunctionalComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle) {
  var shouldUpdate = true;
  var nextProps = nextVNode.props || EMPTY_OBJ;
  var nextRef = nextVNode.ref;
  var lastProps = lastVNode.props;
  var nextHooksDefined = !isNullOrUndef(nextRef);
  var lastInput = lastVNode.children;

  if (nextHooksDefined && isFunction(nextRef.onComponentShouldUpdate)) {
    shouldUpdate = nextRef.onComponentShouldUpdate(lastProps, nextProps);
  }

  if (shouldUpdate !== false) {
    if (nextHooksDefined && isFunction(nextRef.onComponentWillUpdate)) {
      nextRef.onComponentWillUpdate(lastProps, nextProps);
    }

    var nextInput = handleComponentInput(nextVNode.type(nextProps, context));
    patch(lastInput, nextInput, parentDOM, context, isSVG, nextNode, lifecycle);
    nextVNode.children = nextInput;

    if (nextHooksDefined && isFunction(nextRef.onComponentDidUpdate)) {
      nextRef.onComponentDidUpdate(lastProps, nextProps);
    }
  } else {
    nextVNode.children = lastInput;
  }
}

function patchText(lastVNode, nextVNode) {
  var nextText = nextVNode.children;
  var dom = lastVNode.dom;

  if (nextText !== lastVNode.children) {
    dom.nodeValue = nextText;
  }

  nextVNode.dom = dom;
}

function patchNonKeyedChildren(lastChildren, nextChildren, dom, context, isSVG, lastChildrenLength, nextChildrenLength, nextNode, lifecycle) {
  var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
  var i = 0;
  var nextChild;
  var lastChild;

  for (; i < commonLength; ++i) {
    nextChild = nextChildren[i];
    lastChild = lastChildren[i];

    if (nextChild.flags & 16384
    /* InUse */
    ) {
        nextChild = nextChildren[i] = directClone(nextChild);
      }

    patch(lastChild, nextChild, dom, context, isSVG, nextNode, lifecycle);
    lastChildren[i] = nextChild;
  }

  if (lastChildrenLength < nextChildrenLength) {
    for (i = commonLength; i < nextChildrenLength; ++i) {
      nextChild = nextChildren[i];

      if (nextChild.flags & 16384
      /* InUse */
      ) {
          nextChild = nextChildren[i] = directClone(nextChild);
        }

      mount(nextChild, dom, context, isSVG, nextNode, lifecycle);
    }
  } else if (lastChildrenLength > nextChildrenLength) {
    for (i = commonLength; i < lastChildrenLength; ++i) {
      remove(lastChildren[i], dom);
    }
  }
}

function patchKeyedChildren(a, b, dom, context, isSVG, aLength, bLength, outerEdge, parentVNode, lifecycle) {
  var aEnd = aLength - 1;
  var bEnd = bLength - 1;
  var i = 0;
  var j = 0;
  var aNode = a[j];
  var bNode = b[j];
  var nextPos;
  var nextNode; // Step 1
  // tslint:disable-next-line

  outer: {
    // Sync nodes with the same key at the beginning.
    while (aNode.key === bNode.key) {
      if (bNode.flags & 16384
      /* InUse */
      ) {
          b[j] = bNode = directClone(bNode);
        }

      patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
      a[j] = bNode;
      ++j;

      if (j > aEnd || j > bEnd) {
        break outer;
      }

      aNode = a[j];
      bNode = b[j];
    }

    aNode = a[aEnd];
    bNode = b[bEnd]; // Sync nodes with the same key at the end.

    while (aNode.key === bNode.key) {
      if (bNode.flags & 16384
      /* InUse */
      ) {
          b[bEnd] = bNode = directClone(bNode);
        }

      patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
      a[aEnd] = bNode;
      aEnd--;
      bEnd--;

      if (j > aEnd || j > bEnd) {
        break outer;
      }

      aNode = a[aEnd];
      bNode = b[bEnd];
    }
  }

  if (j > aEnd) {
    if (j <= bEnd) {
      nextPos = bEnd + 1;
      nextNode = nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge;

      while (j <= bEnd) {
        bNode = b[j];

        if (bNode.flags & 16384
        /* InUse */
        ) {
            b[j] = bNode = directClone(bNode);
          }

        ++j;
        mount(bNode, dom, context, isSVG, nextNode, lifecycle);
      }
    }
  } else if (j > bEnd) {
    while (j <= aEnd) {
      remove(a[j++], dom);
    }
  } else {
    var aStart = j;
    var bStart = j;
    var aLeft = aEnd - j + 1;
    var bLeft = bEnd - j + 1;
    var sources = [];

    while (i++ <= bLeft) {
      sources.push(0);
    } // Keep track if its possible to remove whole DOM using textContent = '';


    var canRemoveWholeContent = aLeft === aLength;
    var moved = false;
    var pos = 0;
    var patched = 0; // When sizes are small, just loop them through

    if (bLength < 4 || (aLeft | bLeft) < 32) {
      for (i = aStart; i <= aEnd; ++i) {
        aNode = a[i];

        if (patched < bLeft) {
          for (j = bStart; j <= bEnd; j++) {
            bNode = b[j];

            if (aNode.key === bNode.key) {
              sources[j - bStart] = i + 1;

              if (canRemoveWholeContent) {
                canRemoveWholeContent = false;

                while (aStart < i) {
                  remove(a[aStart++], dom);
                }
              }

              if (pos > j) {
                moved = true;
              } else {
                pos = j;
              }

              if (bNode.flags & 16384
              /* InUse */
              ) {
                  b[j] = bNode = directClone(bNode);
                }

              patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
              ++patched;
              break;
            }
          }

          if (!canRemoveWholeContent && j > bEnd) {
            remove(aNode, dom);
          }
        } else if (!canRemoveWholeContent) {
          remove(aNode, dom);
        }
      }
    } else {
      var keyIndex = {}; // Map keys by their index

      for (i = bStart; i <= bEnd; ++i) {
        keyIndex[b[i].key] = i;
      } // Try to patch same keys


      for (i = aStart; i <= aEnd; ++i) {
        aNode = a[i];

        if (patched < bLeft) {
          j = keyIndex[aNode.key];

          if (j !== void 0) {
            if (canRemoveWholeContent) {
              canRemoveWholeContent = false;

              while (i > aStart) {
                remove(a[aStart++], dom);
              }
            }

            bNode = b[j];
            sources[j - bStart] = i + 1;

            if (pos > j) {
              moved = true;
            } else {
              pos = j;
            }

            if (bNode.flags & 16384
            /* InUse */
            ) {
                b[j] = bNode = directClone(bNode);
              }

            patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle);
            ++patched;
          } else if (!canRemoveWholeContent) {
            remove(aNode, dom);
          }
        } else if (!canRemoveWholeContent) {
          remove(aNode, dom);
        }
      }
    } // fast-path: if nothing patched remove all old and add all new


    if (canRemoveWholeContent) {
      removeAllChildren(dom, parentVNode, a);
      mountArrayChildren(b, dom, context, isSVG, outerEdge, lifecycle);
    } else if (moved) {
      var seq = lis_algorithm(sources);
      j = seq.length - 1;

      for (i = bLeft - 1; i >= 0; i--) {
        if (sources[i] === 0) {
          pos = i + bStart;
          bNode = b[pos];

          if (bNode.flags & 16384
          /* InUse */
          ) {
              b[pos] = bNode = directClone(bNode);
            }

          nextPos = pos + 1;
          mount(bNode, dom, context, isSVG, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge, lifecycle);
        } else if (j < 0 || i !== seq[j]) {
          pos = i + bStart;
          bNode = b[pos];
          nextPos = pos + 1;
          moveVNodeDOM(bNode, dom, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge);
        } else {
          j--;
        }
      }
    } else if (patched !== bLeft) {
      // when patched count doesn't match b length we need to insert those new ones
      // loop backwards so we can use insertBefore
      for (i = bLeft - 1; i >= 0; i--) {
        if (sources[i] === 0) {
          pos = i + bStart;
          bNode = b[pos];

          if (bNode.flags & 16384
          /* InUse */
          ) {
              b[pos] = bNode = directClone(bNode);
            }

          nextPos = pos + 1;
          mount(bNode, dom, context, isSVG, nextPos < bLength ? findDOMfromVNode(b[nextPos], true) : outerEdge, lifecycle);
        }
      }
    }
  }
} // https://en.wikipedia.org/wiki/Longest_increasing_subsequence


function lis_algorithm(arr) {
  var p = arr.slice();
  var result = [0];
  var i;
  var j;
  var u;
  var v;
  var c;
  var len = arr.length;

  for (i = 0; i < len; ++i) {
    var arrI = arr[i];

    if (arrI !== 0) {
      j = result[result.length - 1];

      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }

      u = 0;
      v = result.length - 1;

      while (u < v) {
        c = (u + v) / 2 | 0;

        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }

      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }

        result[u] = i;
      }
    }
  }

  u = result.length;
  v = result[u - 1];

  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }

  return result;
}

var hasDocumentAvailable = typeof document !== 'undefined';
var documentBody = null;

if (hasDocumentAvailable) {
  documentBody = document.body;
  /*
   * Defining $EV and $V properties on Node.prototype
   * fixes v8 "wrong map" de-optimization
   */

  Node.prototype.$EV = null;
  Node.prototype.$V = null;
}

function __render(input, parentDOM, callback, context) {
  var lifecycle = [];
  var rootInput = parentDOM.$V;
  renderCheck.v = true;

  if (isNullOrUndef(rootInput)) {
    if (!isNullOrUndef(input)) {
      if (input.flags & 16384
      /* InUse */
      ) {
          input = directClone(input);
        }

      mount(input, parentDOM, context, false, null, lifecycle);
      parentDOM.$V = input;
      rootInput = input;
    }
  } else {
    if (isNullOrUndef(input)) {
      remove(rootInput, parentDOM);
      parentDOM.$V = null;
    } else {
      if (input.flags & 16384
      /* InUse */
      ) {
          input = directClone(input);
        }

      patch(rootInput, input, parentDOM, context, false, null, lifecycle);
      rootInput = parentDOM.$V = input;
    }
  }

  if (lifecycle.length > 0) {
    callAll(lifecycle);
  }

  renderCheck.v = false;

  if (isFunction(callback)) {
    callback();
  }

  if (isFunction(options.renderComplete)) {
    options.renderComplete(rootInput, parentDOM);
  }
}

function render(input, parentDOM, callback, context) {
  if (callback === void 0) callback = null;
  if (context === void 0) context = EMPTY_OBJ;

  __render(input, parentDOM, callback, context);
}

function createRenderer(parentDOM) {
  return function renderer(lastInput, nextInput, callback, context) {
    if (!parentDOM) {
      parentDOM = lastInput;
    }

    render(nextInput, parentDOM, callback, context);
  };
}

var QUEUE = [];
var nextTick = typeof Promise !== 'undefined' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout.bind(window);
var microTaskPending = false;

function queueStateChanges(component, newState, callback, force) {
  var pending = component.$PS;

  if (isFunction(newState)) {
    newState = newState(pending ? combineFrom(component.state, pending) : component.state, component.props, component.context);
  }

  if (isNullOrUndef(pending)) {
    component.$PS = newState;
  } else {
    for (var stateKey in newState) {
      pending[stateKey] = newState[stateKey];
    }
  }

  if (!component.$BR) {
    if (!renderCheck.v) {
      if (QUEUE.length === 0) {
        applyState(component, force, callback);
        return;
      }
    }

    if (QUEUE.indexOf(component) === -1) {
      QUEUE.push(component);
    }

    if (!microTaskPending) {
      microTaskPending = true;
      nextTick(rerender);
    }

    if (isFunction(callback)) {
      var QU = component.$QU;

      if (!QU) {
        QU = component.$QU = [];
      }

      QU.push(callback);
    }
  } else if (isFunction(callback)) {
    component.$L.push(callback.bind(component));
  }
}

function callSetStateCallbacks(component) {
  var queue = component.$QU;

  for (var i = 0, len = queue.length; i < len; ++i) {
    queue[i].call(component);
  }

  component.$QU = null;
}

function rerender() {
  var component;
  microTaskPending = false;

  while (component = QUEUE.pop()) {
    var queue = component.$QU;
    applyState(component, false, queue ? callSetStateCallbacks.bind(null, component) : null);
  }
}

function applyState(component, force, callback) {
  if (component.$UN) {
    return;
  }

  if (force || !component.$BR) {
    var pendingState = component.$PS;
    component.$PS = null;
    var lifecycle = [];
    renderCheck.v = true;
    updateClassComponent(component, combineFrom(component.state, pendingState), component.props, findDOMfromVNode(component.$LI, true).parentNode, component.context, component.$SVG, force, null, lifecycle);

    if (lifecycle.length > 0) {
      callAll(lifecycle);
    }

    renderCheck.v = false;
  } else {
    component.state = component.$PS;
    component.$PS = null;
  }

  if (isFunction(callback)) {
    callback.call(component);
  }
}

var Component = function Component(props, context) {
  // Public
  this.state = null; // Internal properties

  this.$BR = false; // BLOCK RENDER

  this.$BS = true; // BLOCK STATE

  this.$PS = null; // PENDING STATE (PARTIAL or FULL)

  this.$LI = null; // LAST INPUT

  this.$UN = false; // UNMOUNTED

  this.$CX = null; // CHILDCONTEXT

  this.$QU = null; // QUEUE

  this.$N = false; // Uses new lifecycle API Flag

  this.$L = null; // Current lifecycle of this component

  this.$SVG = false; // Flag to keep track if component is inside SVG tree

  this.props = props || EMPTY_OBJ;
  this.context = context || EMPTY_OBJ; // context should not be mutable
};

Component.prototype.forceUpdate = function forceUpdate(callback) {
  if (this.$UN) {
    return;
  } // Do not allow double render during force update


  queueStateChanges(this, {}, callback, true);
};

Component.prototype.setState = function setState(newState, callback) {
  if (this.$UN) {
    return;
  }

  if (!this.$BS) {
    queueStateChanges(this, newState, callback, false);
  } else {
    return;
  }
};

Component.prototype.render = function render(_nextProps, _nextState, _nextContext) {
  return null;
};

var version = "7.0.5";


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return stripLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return stripBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return stripTrailingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createPath; });
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};
var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};
var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};
var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};
var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};
var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};
var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;
  return path;
};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'div',
  role: 'group'
};

var ButtonGroup = function ButtonGroup(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      vertical = props.vertical,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "size", "vertical", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

ButtonGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (ButtonGroup);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Animated__ = __webpack_require__(76);
/* unused harmony reexport Animated */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CrossFade__ = __webpack_require__(77);
/* unused harmony reexport CrossFade */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animatedComponent__ = __webpack_require__(27);
/* unused harmony reexport animateOnRemove */
/* unused harmony reexport animateOnAdd */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(28);




var utils = {
  addClassName: __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* addClassName */],
  animationIsRunningOnParent: __WEBPACK_IMPORTED_MODULE_3__utils__["b" /* animationIsRunningOnParent */],
  removeClassName: __WEBPACK_IMPORTED_MODULE_3__utils__["g" /* removeClassName */],
  registerTransitionListener: __WEBPACK_IMPORTED_MODULE_3__utils__["f" /* registerTransitionListener */],
  forceReflow: __WEBPACK_IMPORTED_MODULE_3__utils__["d" /* forceReflow */],
  clearDimensions: __WEBPACK_IMPORTED_MODULE_3__utils__["c" /* clearDimensions */],
  getDimensions: __WEBPACK_IMPORTED_MODULE_3__utils__["e" /* getDimensions */],
  setDimensions: __WEBPACK_IMPORTED_MODULE_3__utils__["h" /* setDimensions */],
  setDisplay: __WEBPACK_IMPORTED_MODULE_3__utils__["i" /* setDisplay */]
};

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'div'
};

var CardBody = function CardBody(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-body'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

CardBody.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (CardBody);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'h4'
};

var CardTitle = function CardTitle(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-title'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

CardTitle.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (CardTitle);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'p'
};

var CardText = function CardText(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-text'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

CardText.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (CardText);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_inferno_popper__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__PopperTargetHelper__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils__ = __webpack_require__(3);















var defaultProps = {
  placement: 'auto',
  isOpen: false,
  offset: 0,
  fallbackPlacement: 'flip',
  wrapTag: 'span',
  flip: true
};

var PopperContent =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(PopperContent, _Component);

  function PopperContent(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, PopperContent);

    _this = __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(PopperContent).call(this, props));
    _this.handlePlacementChange = _this.handlePlacementChange.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.state = {};
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(PopperContent, [{
    key: "handlePlacementChange",
    value: function handlePlacementChange(data) {
      if (this.state.placement !== data.placement) {
        this.setState({
          placement: data.placement
        });
      }

      return data;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cssModule = _this$props.cssModule,
          children = _this$props.children,
          isOpen = _this$props.isOpen,
          flip = _this$props.flip,
          target = _this$props.target,
          offset = _this$props.offset,
          fallbackPlacement = _this$props.fallbackPlacement,
          placementPrefix = _this$props.placementPrefix,
          className = _this$props.className,
          wrapTag = _this$props.wrapTag,
          wrapClassName = _this$props.wrapClassName,
          tag = _this$props.tag,
          attrs = __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["cssModule", "children", "isOpen", "flip", "target", "offset", "fallbackPlacement", "placementPrefix", "className", "wrapTag", "wrapClassName", "tag"]);

      var arrowClassName = Object(__WEBPACK_IMPORTED_MODULE_12__utils__["e" /* mapToCssModules */])('arrow', cssModule);
      var placement = (this.state.placement || attrs.placement).split('-')[0];
      var managerClass = Object(__WEBPACK_IMPORTED_MODULE_12__utils__["e" /* mapToCssModules */])(wrapClassName, this.props.cssModule);
      var popperClassName = Object(__WEBPACK_IMPORTED_MODULE_12__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_9_classnames___default()(className, placementPrefix ? "".concat(placementPrefix, "-").concat(placement) : placement), this.props.cssModule);
      var modifiers = {
        offset: {
          offset: offset
        },
        flip: {
          enabled: flip,
          behavior: fallbackPlacement
        },
        update: {
          enabled: true,
          order: 950,
          fn: this.handlePlacementChange
        }
      };
      return Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10_inferno_popper__["b" /* Manager */], {
        "tag": wrapTag,
        "className": managerClass,
        children: [Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__PopperTargetHelper__["a" /* default */], {
          "target": target
        }), isOpen && Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10_inferno_popper__["c" /* Popper */], __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({
          "modifiers": modifiers
        }, attrs, {
          "component": tag,
          "className": popperClassName,
          children: [children, Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10_inferno_popper__["a" /* Arrow */], {
            "className": arrowClassName
          })]
        })))]
      });
    }
  }]);

  return PopperContent;
}(__WEBPACK_IMPORTED_MODULE_8_inferno__["a" /* Component */]);

PopperContent.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (PopperContent);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'form'
};
/**
 * 
 * NOTE: I have removed the `inline`-attribute, this can be done with CSS
 * which gives cleaner code and better separation of semantics and styling.
 */

var Form = function Form(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag", "innerRef"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className), cssModule);
  Object.assign(attributes, {
    className: classes,
    ref: innerRef
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

Form.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'label'
};
/**
 * 
 * NOTE: I have removed the `inline`-attribute, this can be done with CSS
 * which gives cleaner code and better separation of semantics and styling.
 * 
 * This affects widths property
 */

var Label = function Label(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      hidden = props.hidden,
      Tag = props.tag,
      check = props.check,
      disabled = props.disabled,
      htmlFor = props.htmlFor,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "hidden", "tag", "check", "disabled", "htmlFor"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, hidden ? 'sr-only' : false, check ? 'form-check-label' : 'form-control-label', check && disabled ? 'disabled' : false), cssModule);
  Object.assign(attributes, {
    className: classes,
    htmlFor: htmlFor
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

Label.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Label);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils__ = __webpack_require__(3);







/* eslint react/prefer-stateless-function: 0 */




var defaultProps = {
  tag: 'p',
  type: 'text'
};

var Input =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(Input, _Component);

  function Input() {
    __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, Input);

    return __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(Input).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(Input, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          type = _this$props.type,
          bsSize = _this$props.bsSize,
          tag = _this$props.tag,
          valid = _this$props.valid,
          addon = _this$props.addon,
          plaintext = _this$props.plaintext,
          innerRef = _this$props.innerRef,
          attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["className", "cssModule", "type", "bsSize", "tag", "valid", "addon", "plaintext", "innerRef"]);

      var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
      var fileInput = type === 'file';
      var textareaInput = type === 'textarea';
      var selectInput = type === 'select';
      var Tag = selectInput || textareaInput ? type : 'input';
      var formControlClass = 'form-control';

      if (plaintext) {
        formControlClass = "".concat(formControlClass, "-plaintext");
        Tag = tag;
      } else if (fileInput) {
        formControlClass = "".concat(formControlClass, "-file");
      } else if (checkInput) {
        if (addon) {
          formControlClass = null;
        } else {
          formControlClass = 'form-check-input';
        }
      }

      var classes = Object(__WEBPACK_IMPORTED_MODULE_9__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_8_classnames___default()(className, valid === false && 'is-invalid', valid && 'is-valid', bsSize ? "form-control-".concat(bsSize) : false, formControlClass), cssModule);

      if (Tag === 'input') {
        attributes.type = type;
      }

      Object.assign(attributes, {
        className: classes,
        ref: innerRef
      });
      return Object(__WEBPACK_IMPORTED_MODULE_7_inferno_create_element__["a" /* createElement */])(Tag, attributes);
    }
  }]);

  return Input;
}(__WEBPACK_IMPORTED_MODULE_6_inferno__["a" /* Component */]);

Input.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function () {};

if (process.env.NODE_ENV !== 'production') {
  warning = function (condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);

    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });

      if (typeof console !== 'undefined') {
        console.error(message);
      }

      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return locationsAreEqual; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resolve_pathname__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_value_equal__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PathUtils__ = __webpack_require__(33);
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};




var createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = Object(__WEBPACK_IMPORTED_MODULE_2__PathUtils__["d" /* parsePath */])(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(__WEBPACK_IMPORTED_MODULE_0_resolve_pathname__["a" /* default */])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};
var locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(__WEBPACK_IMPORTED_MODULE_1_value_equal__["a" /* default */])(a.state, b.state);
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  color: 'secondary',
  pill: false,
  tag: 'span'
};

var Badge = function Badge(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      pill = props.pill,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "color", "pill", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'badge', 'badge-' + color, pill ? 'badge-pill' : false), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

Badge.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Badge);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dropdown__ = __webpack_require__(15);





var ButtonDropdown = function ButtonDropdown(props) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_1_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__Dropdown__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({
    "group": true
  }, props)));
};

/* harmony default export */ __webpack_exports__["a"] = (ButtonDropdown);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'div'
};

var Row = function Row(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      noGutters = props.noGutters,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "noGutters", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, noGutters ? 'no-gutters' : null, 'row'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

Row.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Row);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isobject__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isobject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isobject__);






var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var defaultProps = {
  tag: 'div',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-".concat(colWidth);
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-".concat(colWidth, "-auto");
  }

  return isXs ? "col-".concat(colSize) : "col-".concat(colWidth, "-").concat(colSize);
};

var Col = function Col(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      widths = props.widths,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "widths", "tag"]);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];

    if (!i && columnProp === undefined) {
      columnProp = true;
    }

    delete attributes[colWidth];

    if (!columnProp) {
      return;
    }

    var isXs = !i;
    var colClass;

    if (__WEBPACK_IMPORTED_MODULE_5_lodash_isobject___default()(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-".concat(colWidth, "-");
      colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push(Object(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_3_classnames___default()((_classNames = {}, __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty___default()(_classNames, colClass, columnProp.size || columnProp.size === ''), __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty___default()(_classNames, "push".concat(colSizeInterfix).concat(columnProp.push), columnProp.push || columnProp.push === 0), __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty___default()(_classNames, "pull".concat(colSizeInterfix).concat(columnProp.pull), columnProp.pull || columnProp.pull === 0), __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty___default()(_classNames, "offset".concat(colSizeInterfix).concat(columnProp.offset), columnProp.offset || columnProp.offset === 0), _classNames))), cssModule);
    } else {
      colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });
  var classes = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, colClasses), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_2_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

Col.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Col);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(3);


var PopperTargetHelper = function PopperTargetHelper(props, context) {
  context.popperManager.setTargetNode(Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* getTarget */])(props.target));
  return null;
};

/* harmony default export */ __webpack_exports__["a"] = (PopperTargetHelper);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'div'
};

var InputGroup = function InputGroup(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      size = props.size,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag", "size"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'input-group', size ? "input-group-".concat(size) : null), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

InputGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (InputGroup);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__InputGroupText__ = __webpack_require__(53);







var defaultProps = {
  tag: 'div'
};

var InputGroupAddon = function InputGroupAddon(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      addonType = props.addonType,
      children = props.children,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["className", "cssModule", "tag", "addonType", "children"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, 'input-group-' + addonType), cssModule); // Convenience to assist with transition

  if (typeof children === 'string') {
    Object.assign(attributes, {
      className: classes
    });
    return Object(__WEBPACK_IMPORTED_MODULE_2_inferno_create_element__["a" /* createElement */])(Tag, attributes, Object(__WEBPACK_IMPORTED_MODULE_1_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_5__InputGroupText__["a" /* default */], {
      children: children
    }));
  }

  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_2_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

InputGroupAddon.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (InputGroupAddon);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'span'
};

var InputGroupText = function InputGroupText(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'input-group-text'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

InputGroupText.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (InputGroupText);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__AnimateModal__ = __webpack_require__(100);















var propsToOmit = ['animationPrefix', 'backgroundAnimationPrefix', 'isOpen', 'autoFocus', 'size', 'toggle', 'keyboard', 'backdrop', 'onEnter', 'onExit', 'onOpened', 'onClosed', 'children', 'className', 'wrapClassName', 'modalClassName', 'backdropClassName', 'contentClassName', 'fade', 'cssModule', 'zIndex'];
var defaultProps = {
  isOpen: false,
  autoFocus: true,
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true
};

var Modal =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(Modal, _Component);

  function Modal(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, Modal);

    _this = __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(Modal).call(this, props));
    _this.originalBodyPadding = null;
    _this.isBodyOverflowing = false;
    _this.togglePortal = _this.togglePortal.bind(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.handleBackdropClick = _this.handleBackdropClick.bind(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.handleEscape = _this.handleEscape.bind(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.destroy = _this.destroy.bind(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.onOpened = _this.onOpened.bind(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.onClosed = _this.onClosed.bind(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.createEventListeners = _this.createEventListeners.bind(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.state = {};
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.togglePortal();
      }

      if (this.props.onEnter) {
        this.props.onEnter();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        // handle portal events/dom updates
        this.togglePortal();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroy();

      if (this.props.onExit) {
        this.props.onExit();
      }
    }
  }, {
    key: "onOpened",
    value: function onOpened() {
      if (this.props.onOpened) {
        this.props.onOpened();
      }
    }
  }, {
    key: "onClosed",
    value: function onClosed() {
      this.destroy();

      if (this.props.onClosed) {
        this.props.onClosed();
      }
    }
  }, {
    key: "handleEscape",
    value: function handleEscape(e) {
      if (this._dialog && this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
        this.props.toggle();
      }
    }
  }, {
    key: "handleBackdropClick",
    value: function handleBackdropClick(e) {
      if (!this._dialog || this.props.backdrop !== true) return;
      var container = this._dialog;

      if (e.target && !container.contains(e.target) && this.props.toggle) {
        this.props.toggle();
      }
    }
  }, {
    key: "togglePortal",
    value: function togglePortal() {
      if (this.props.isOpen) {
        if (this.props.autoFocus) {
          this._focus = true;
        }

        this.show();
      } else {
        this.hide();
      }
    }
  }, {
    key: "createEventListeners",
    value: function createEventListeners() {
      window.addEventListener('keyup', this.handleEscape);
      window.addEventListener('click', this.handleBackdropClick, true);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener('keyup', this.handleEscape);
      window.removeEventListener('click', this.handleBackdropClick, true);

      if (this.state._element) {
        var _element = this.state._element;
        this.setState({
          _element: null
        });
        document.body.removeChild(_element);
      } // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`


      var classes = document.body.className.replace(/(^| )modal-open( |$)/, ' ');
      document.body.className = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_10_classnames___default()(classes).trim(), this.props.cssModule);
      Object(__WEBPACK_IMPORTED_MODULE_11__utils__["g" /* setScrollbarWidth */])(this.originalBodyPadding);
    }
  }, {
    key: "hide",
    value: function hide() {
      // Need to trigger cleanup if the animation doesn't play
      if (!this.props.fade) {
        this.destroy();
      }
    }
  }, {
    key: "show",
    value: function show() {
      var classes = document.body.className;

      var _element = document.createElement('div');

      _element.setAttribute('tabindex', '-1');

      _element.style.position = 'relative';
      _element.style.zIndex = this.props.zIndex;
      this.originalBodyPadding = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["b" /* getOriginalBodyPadding */])();
      Object(__WEBPACK_IMPORTED_MODULE_11__utils__["a" /* conditionallyUpdateScrollbar */])();
      this.createEventListeners();
      document.body.appendChild(_element);
      document.body.className = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_10_classnames___default()(classes, 'modal-open'), this.props.cssModule);
      this.setState({
        _element: _element
      });
    }
  }, {
    key: "renderModalDialog",
    value: function renderModalDialog() {
      var _this2 = this;

      var attributes = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["f" /* omit */])(this.props, propsToOmit);
      return Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "div", Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_10_classnames___default()('modal-dialog', this.props.className, __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty___default()({}, "modal-".concat(this.props.size), this.props.size)), this.props.cssModule), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "div", Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_10_classnames___default()('modal-content', this.props.contentClassName), this.props.cssModule), this.props.children, 0), 2, __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({
        "role": "document"
      }, attributes), null, function (c) {
        _this2._dialog = c;

        if (_this2._focus) {
          c.parentNode.focus();
          _this2._focus = false;
        }
      }));
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this$props = this.props,
          wrapClassName = _this$props.wrapClassName,
          modalClassName = _this$props.modalClassName,
          backdropClassName = _this$props.backdropClassName,
          cssModule = _this$props.cssModule,
          isOpen = _this$props.isOpen,
          backdrop = _this$props.backdrop,
          modalTransitionTimeout = _this$props.modalTransitionTimeout,
          backdropTransitionTimeout = _this$props.backdropTransitionTimeout;
      var modalAttributes = {
        tabIndex: '-1'
      };
      var prefix = this.props.animationPrefix || "ModalFade";
      var backgroundPrefix = this.props.backgroundAnimationPrefix || "ModalBackdropFade";

      if (this.props.fade) {
        var animCls = {
          show: 'show',
          active: 'fade',
          hide: undefined
        };
        var backdropAnimCls = {
          show: 'fade show',
          active: 'fade',
          hide: undefined
        };
        return Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "div", Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* mapToCssModules */])(wrapClassName), [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, AnimatedSpecial, __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({
          "isOpen": isOpen,
          "cssModule": cssModule,
          "className": Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_10_classnames___default()('modal', modalClassName), cssModule),
          "onOpened": this.onOpened,
          "onClosed": this.onClosed
        }, modalAttributes, {
          children: this.renderModalDialog()
        }), "modal-dialog")), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, AnimatedSpecial, {
          "isOpen": isOpen && backdrop,
          "cssModule": cssModule,
          "className": Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_10_classnames___default()('modal-backdrop', backdropClassName), cssModule)
        }, "modal-backdrop")], 8);
      }

      return Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "div", Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* mapToCssModules */])(wrapClassName), [isOpen && Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "div", Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_10_classnames___default()('modal', 'show', modalClassName), cssModule), this.renderModalDialog(), 0, __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({
        "style": {
          display: 'block'
        }
      }, modalAttributes))), isOpen && backdrop && Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "div", Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_10_classnames___default()('modal-backdrop', 'show', backdropClassName), cssModule))], 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state._element ? Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["d" /* createPortal */])(this.renderChildren(), this.state._element) : null;
    }
  }]);

  return Modal;
}(__WEBPACK_IMPORTED_MODULE_9_inferno__["a" /* Component */]);

Modal.defaultProps = defaultProps;

var AnimatedSpecial =
/*#__PURE__*/
function (_Component2) {
  __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(AnimatedSpecial, _Component2);

  function AnimatedSpecial() {
    __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, AnimatedSpecial);

    return __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(AnimatedSpecial).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(AnimatedSpecial, [{
    key: "render",

    /*
    I need to create a separate component to get unmount to work properly
    since animations are triggered on unmount and I don't want inferno to
    remove all the elements until the animation is completed.
     */
    value: function render(_ref) {
      var isOpen = _ref.isOpen,
          onClosed = _ref.onClosed,
          onOpened = _ref.onOpened,
          attrs = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["isOpen", "onClosed", "onOpened"]);

      if (isOpen) {
        return Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_12__AnimateModal__["a" /* Animated */], __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({}, attrs), null, {
          "onComponentDidMount": function onComponentDidMount(dom) {
            return Object(__WEBPACK_IMPORTED_MODULE_12__AnimateModal__["b" /* animateModalOnAdd */])(dom, onOpened);
          },
          "onComponentWillUnmount": function onComponentWillUnmount(dom) {
            return Object(__WEBPACK_IMPORTED_MODULE_12__AnimateModal__["c" /* animateModalOnRemove */])(dom, onClosed);
          }
        }));
      } else {
        return null;
      }
    }
  }]);

  return AnimatedSpecial;
}(__WEBPACK_IMPORTED_MODULE_9_inferno__["a" /* Component */]);

/* harmony default export */ __webpack_exports__["a"] = (Modal);
/*
  props.bootstrapCls = {
    hide: ,
    active: 'modal fade',
    show: 'modal show'
  }
*/

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(3);






var defaultProps = {
  tag: 'h4',
  wrapTag: 'div',
  closeAriaLabel: 'Close'
};

var ModalHeader = function ModalHeader(props) {
  var closeButton;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, 'modal-header'), cssModule);

  if (toggle) {
    closeButton = Object(__WEBPACK_IMPORTED_MODULE_1_inferno__["f" /* createVNode */])(1, "button", "close", Object(__WEBPACK_IMPORTED_MODULE_1_inferno__["f" /* createVNode */])(1, "span", null, String.fromCharCode(215), 0, {
      "aria-hidden": "true"
    }), 2, {
      "type": "button",
      "onClick": toggle,
      "aria-label": closeAriaLabel
    });
  }

  var innerChildren = [Object(__WEBPACK_IMPORTED_MODULE_2_inferno_create_element__["a" /* createElement */])(Tag, {
    className: Object(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* mapToCssModules */])('modal-title', cssModule)
  }, children), closeButton];
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_2_inferno_create_element__["a" /* createElement */])(WrapTag, attributes, innerChildren);
};

ModalHeader.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (ModalHeader);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'div'
};

var ModalBody = function ModalBody(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'modal-body'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

ModalBody.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (ModalBody);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'div'
};

var ModalFooter = function ModalFooter(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'modal-footer'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

ModalFooter.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (ModalFooter);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Dropdown__ = __webpack_require__(15);







var defaultProps = {
  tag: 'li'
};

var NavDropdown = function NavDropdown(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["className", "cssModule", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, 'nav-item'), cssModule);
  return Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_5__Dropdown__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({}, attributes, {
    "tag": Tag,
    "className": classes
  })));
};

NavDropdown.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (NavDropdown);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);


var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(prompt == null, 'A history supports only one prompt at a time');
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ __webpack_exports__["a"] = (createTransitionManager);

/***/ }),
/* 60 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(3);






var defaultProps = {
  color: 'success',
  tag: 'div'
};

var Alert = function Alert(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      color = props.color,
      onClose = props.onClose,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag", "color", "onClose"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, 'alert', "alert-".concat(color), {
    'alert-dismissible': onClose
  }), cssModule);
  var closeClasses = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* mapToCssModules */])('close', cssModule);
  Object.assign(attributes, {
    className: classes,
    role: 'alert'
  });
  var childEls = [onClose ? Object(__WEBPACK_IMPORTED_MODULE_1_inferno__["f" /* createVNode */])(1, "button", closeClasses, Object(__WEBPACK_IMPORTED_MODULE_1_inferno__["f" /* createVNode */])(1, "span", null, "\xD7", 16, {
    "aria-hidden": "true"
  }), 2, {
    "type": "button",
    "aria-label": "Close",
    "onClick": onClose
  }) : null, children];
  return Object(__WEBPACK_IMPORTED_MODULE_2_inferno_create_element__["a" /* createElement */])(Tag, attributes, childEls);
};

Alert.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Alert);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'ol'
};

var Breadcrumb = function Breadcrumb(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'breadcrumb'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

Breadcrumb.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Breadcrumb);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'li'
};

var BreadcrumbItem = function BreadcrumbItem(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "active", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

BreadcrumbItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (BreadcrumbItem);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'div',
  role: 'toolbar'
};

var ButtonToolbar = function ButtonToolbar(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'btn-toolbar'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

ButtonToolbar.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (ButtonToolbar);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_inferno_create_element__ = __webpack_require__(4);









var Manager =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(Manager, _Component);

  function Manager(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, Manager);

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(Manager).call(this, props));

    _this._setTargetNode = function (node) {
      _this._targetNode = node;
    };

    _this._getTargetNode = function () {
      return _this._targetNode;
    };

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(Manager, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        popperManager: {
          setTargetNode: this._setTargetNode,
          getTargetNode: this._getTargetNode
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Tag = _this$props.tag,
          children = _this$props.children,
          restProps = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["tag", "children"]);

      if (Tag !== false) {
        return Object(__WEBPACK_IMPORTED_MODULE_7_inferno_create_element__["a" /* createElement */])(Tag || 'div', restProps, children);
      } else {
        return children;
      }
    }
  }]);

  return Manager;
}(__WEBPACK_IMPORTED_MODULE_6_inferno__["a" /* Component */]);

/* harmony default export */ __webpack_exports__["a"] = (Manager);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inferno_create_element__ = __webpack_require__(4);





var Target = function Target(props, context) {
  var _props$component = props.component,
      component = _props$component === void 0 ? 'div' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default()(props, ["component", "innerRef", "children"]);

  var popperManager = context.popperManager;

  var targetRef = function targetRef(node) {
    popperManager.setTargetNode(node);

    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };

  if (typeof children === 'function') {
    var targetProps = {
      ref: targetRef
    };
    return children({
      targetProps: targetProps,
      restProps: restProps
    });
  }

  var componentProps = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, restProps);

  if (typeof component === 'string') {
    componentProps.ref = targetRef;
  } else {
    componentProps.innerRef = targetRef;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_3_inferno_create_element__["a" /* createElement */])(component, componentProps, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Target);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export placements */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_popper_js__ = __webpack_require__(68);












var placements = __WEBPACK_IMPORTED_MODULE_11_popper_js__["a" /* default */].placements;
var defaultProps = {
  component: 'div',
  placement: 'bottom',
  eventsEnabled: true,
  positionFixed: false,
  modifiers: {}
};

var Popper =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default()(Popper, _Component);

  function Popper() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, Popper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(Popper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "state", {});

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "_updateStateModifier", {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        if (_this._isDataDirty(data)) {
          _this.setState({
            data: data
          });
        }

        return data;
      }
    });

    __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_defineProperty___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_assertThisInitialized___default()(_this)), "_handlePopperRef", function (node) {
      _this._popperNode = node;

      if (node) {
        _this._createPopper();
      } else {
        _this._destroyPopper();
      }

      if (_this.props.innerRef) {
        _this.props.innerRef(node);
      }
    });

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(Popper, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        popper: {
          setArrowNode: this._setArrowNode.bind(this),
          getArrowStyle: this._getArrowStyle.bind(this)
        }
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(lastProps) {
      if (lastProps.placement !== this.props.placement || lastProps.eventsEnabled !== this.props.eventsEnabled || lastProps.target !== this.props.target) {
        this._destroyPopper();

        this._createPopper();
      }

      if (lastProps.children !== this.props.children) {
        this._popper.scheduleUpdate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._destroyPopper();
    }
  }, {
    key: "_setArrowNode",
    value: function _setArrowNode(node) {
      this._arrowNode = node;
    }
  }, {
    key: "_getTargetNode",
    value: function _getTargetNode() {
      if (this.props.target) {
        return this.props.target;
      } else if (!this.context.popperManager || !this.context.popperManager.getTargetNode()) {
        throw new Error('Target missing. Popper must be given a target from the Popper Manager, or as a prop.');
      }

      return this.context.popperManager.getTargetNode();
    }
  }, {
    key: "_getOffsets",
    value: function _getOffsets(data) {
      return Object.keys(data.offsets).map(function (key) {
        return data.offsets[key];
      });
    }
  }, {
    key: "_isDataDirty",
    value: function _isDataDirty(data) {
      if (this.state.data) {
        return JSON.stringify(this._getOffsets(this.state.data)) !== JSON.stringify(this._getOffsets(data));
      } else {
        return true;
      }
    }
  }, {
    key: "_createPopper",
    value: function _createPopper() {
      var _this2 = this;

      var _this$props = this.props,
          placement = _this$props.placement,
          eventsEnabled = _this$props.eventsEnabled,
          positionFixed = _this$props.positionFixed;

      var modifiers = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, this.props.modifiers, {
        applyStyle: {
          enabled: false
        },
        updateState: this._updateStateModifier
      });

      if (this._arrowNode) {
        modifiers.arrow = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, this.props.modifiers.arrow || {}, {
          element: this._arrowNode
        });
      }

      this._popper = new __WEBPACK_IMPORTED_MODULE_11_popper_js__["a" /* default */](this._getTargetNode(), this._popperNode, {
        placement: placement,
        positionFixed: positionFixed,
        eventsEnabled: eventsEnabled,
        modifiers: modifiers
      }); // TODO: look into setTimeout scheduleUpdate call, without it, the popper will not position properly on creation

      setTimeout(function () {
        return _this2._scheduleUpdate();
      });
    }
  }, {
    key: "_destroyPopper",
    value: function _destroyPopper() {
      if (this._popper) {
        this._popper.destroy();
      }
    }
  }, {
    key: "_getPopperStyle",
    value: function _getPopperStyle() {
      var data = this.state.data;

      if (!this._popper || !data) {
        return {
          position: 'absolute',
          pointerEvents: 'none',
          opacity: 0
        };
      }

      return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({
        position: data.offsets.popper.position
      }, data.styles);
    }
  }, {
    key: "_getPopperPlacement",
    value: function _getPopperPlacement() {
      return this.state.data ? this.state.data.placement : undefined;
    }
  }, {
    key: "_getPopperHide",
    value: function _getPopperHide() {
      return !!this.state.data && this.state.data.hide ? '' : undefined;
    }
  }, {
    key: "_getArrowStyle",
    value: function _getArrowStyle() {
      if (!this.state.data || !this.state.data.offsets.arrow) {
        return {};
      } else {
        var _this$state$data$offs = this.state.data.offsets.arrow,
            top = _this$state$data$offs.top,
            left = _this$state$data$offs.left;
        return {
          top: top,
          left: left
        };
      }
    }
  }, {
    key: "_scheduleUpdate",
    value: function _scheduleUpdate() {
      this._popper && this._popper.scheduleUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          component = _this$props2.component,
          innerRef = _this$props2.innerRef,
          placement = _this$props2.placement,
          eventsEnabled = _this$props2.eventsEnabled,
          positionFixed = _this$props2.positionFixed,
          modifiers = _this$props2.modifiers,
          children = _this$props2.children,
          restProps = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties___default()(_this$props2, ["component", "innerRef", "placement", "eventsEnabled", "positionFixed", "modifiers", "children"]); // Default props


      component = component || 'div';
      placement = placement || 'bottom';
      eventsEnabled === undefined ? true : eventsEnabled;
      modifiers = modifiers || {};

      var popperStyle = this._getPopperStyle();

      var popperPlacement = this._getPopperPlacement();

      var popperHide = this._getPopperHide();

      if (typeof children === 'function') {
        var popperProps = {
          ref: this._handlePopperRef,
          style: popperStyle,
          'data-placement': popperPlacement,
          'data-x-out-of-boundaries': popperHide
        };
        return children({
          popperProps: popperProps,
          restProps: restProps,
          scheduleUpdate: this._scheduleUpdate
        });
      }

      var componentProps = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, restProps, {
        style: __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, restProps.style, popperStyle),
        'data-placement': popperPlacement,
        'data-x-out-of-boundaries': popperHide
      });

      if (typeof component === 'string') {
        componentProps.ref = this._handlePopperRef;
      } else {
        componentProps.innerRef = this._handlePopperRef;
      }

      return Object(__WEBPACK_IMPORTED_MODULE_10_inferno_create_element__["a" /* createElement */])(component, componentProps, children);
    }
  }]);

  return Popper;
}(__WEBPACK_IMPORTED_MODULE_9_inferno__["a" /* Component */]);

Popper.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Popper);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.6
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;

for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  return isFixed(getParentNode(element));
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthOddness = reference.width % 2 === popper.width % 2;
  var bothOddWidth = reference.width % 2 === 1 && popper.width % 2 === 1;

  var noRound = function noRound(v) {
    return v;
  };

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthOddness ? Math.round : Math.floor;
  var verticalToInteger = !shouldRound ? noRound : Math.round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ __webpack_exports__["a"] = (Popper);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(45)))

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inferno_create_element__ = __webpack_require__(4);





var Arrow = function Arrow(props, context) {
  var _props$component = props.component,
      component = _props$component === void 0 ? 'span' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default()(props, ["component", "innerRef", "children"]);

  var popper = context.popper;

  var arrowRef = function arrowRef(node) {
    popper.setArrowNode(node);

    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };

  var arrowStyle = popper.getArrowStyle();

  if (typeof children === 'function') {
    var arrowProps = {
      ref: arrowRef,
      style: arrowStyle
    };
    return children({
      arrowProps: arrowProps,
      restProps: restProps
    });
  }

  var componentProps = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, restProps, {
    style: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, arrowStyle, restProps.style)
  });

  if (typeof component === 'string') {
    componentProps.ref = arrowRef;
  } else {
    componentProps.innerRef = arrowRef;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_3_inferno_create_element__["a" /* createElement */])(component, componentProps, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Arrow);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__compat__ = __webpack_require__(71);








var noop = function noop() {
  return null;
};

var Travel =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default()(Travel, _Component);

  function Travel(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, Travel);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(Travel).call(this, props));
    _this.state = {
      portalNode: null,
      portalInstance: null
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(Travel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setupPortal();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._updatePortal();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._destroyPortal();
    }
  }, {
    key: "_getRenderToNode",
    value: function _getRenderToNode() {
      var renderTo = this.props.renderTo;

      if (typeof renderTo === 'string') {
        return document.querySelector(renderTo);
      } else {
        return renderTo || document.body;
      }
    }
  }, {
    key: "_getComponent",
    value: function _getComponent() {
      if (this.props.useArray) {
        return __WEBPACK_IMPORTED_MODULE_6__compat__["a" /* Children */].toArray(this.props.children)[1];
      } else {
        return __WEBPACK_IMPORTED_MODULE_6__compat__["a" /* Children */].only(this.props.children);
      }
    }
  }, {
    key: "_setupPortal",
    value: function _setupPortal() {
      var _this$props = this.props,
          renderTag = _this$props.renderTag,
          onMount = _this$props.onMount; // Default props

      renderTag = renderTag || 'div';
      onMount = onMount || noop;

      var renderToNode = this._getRenderToNode(); // create a node that we can stick our component in


      var portalNode = document.createElement(renderTag); // append node to the render node

      renderToNode.appendChild(portalNode); // store the instance passed back to allow work to be done on it

      var portalInstance = typeof onMount === 'function' ? onMount(portalNode) : portalNode;
      this.setState({
        portalNode: portalNode,
        portalInstance: portalInstance
      });
    }
  }, {
    key: "_updatePortal",
    value: function _updatePortal() {
      var _this2 = this;

      var _this$props2 = this.props,
          id = _this$props2.id,
          className = _this$props2.className,
          style = _this$props2.style,
          onUpdate = _this$props2.onUpdate; // Default props

      onUpdate = onUpdate || noop;

      if (id) {
        this._portalNode.id = id;
      }

      if (className) {
        this._portalNode.className = className;
      }

      if (style) {
        Object.keys(style).forEach(function (key) {
          _this2._portalNode.style[key] = style[key];
        });
      }

      if (typeof onUpdate === 'function') {
        this._portalInstance = onUpdate(this._portalInstance);
      }
    }
  }, {
    key: "_destroyPortal",
    value: function _destroyPortal() {
      this.state.portalNode.parentNode.removeChild(this._portalNode);
      this.setState({
        portalNode: null,
        portalInstance: null
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.portalNode ? Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["d" /* createPortal */])(this._getComponent(), this.state.portalNode) : null;
    }
  }]);

  return Travel;
}(__WEBPACK_IMPORTED_MODULE_5_inferno__["a" /* Component */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Travel);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Children; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_shared__ = __webpack_require__(18);

/* COMPATIBILITY */

var ARR = [];
var Children = {
  only: function only(children) {
    children = Children.toArray(children);

    if (children.length !== 1) {
      throw new Error("Children.only() expects only one child.");
    }

    return children[0];
  },
  toArray: function toArray(children) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["c" /* isNullOrUndef */])(children)) {
      return [];
    } // We need to flatten arrays here,
    // because React does it also and application level code might depend on that behavior


    if (Object(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["a" /* isArray */])(children)) {
      var result = [];
      flatten(children, result);
      return result;
    }

    return ARR.concat(children);
  }
};
/* /COMPATIBILITY */

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'div'
};

var Jumbotron = function Jumbotron(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      fluid = props.fluid,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag", "fluid"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

Jumbotron.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Jumbotron);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_tonumber__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_tonumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_tonumber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(3);







var defaultProps = {
  tag: 'div',
  value: 0,
  max: 100
};

var Progress = function Progress(props) {
  var children = props.children,
      className = props.className,
      barClassName = props.barClassName,
      cssModule = props.cssModule,
      value = props.value,
      max = props.max,
      animated = props.animated,
      striped = props.striped,
      color = props.color,
      bar = props.bar,
      multi = props.multi,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "barClassName", "cssModule", "value", "max", "animated", "striped", "color", "bar", "multi", "tag"]);

  var percent = __WEBPACK_IMPORTED_MODULE_4_lodash_tonumber___default()(value) / __WEBPACK_IMPORTED_MODULE_4_lodash_tonumber___default()(max) * 100;
  var progressClasses = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, 'progress'), cssModule);
  var progressBarClasses = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_3_classnames___default()('progress-bar', bar ? className || barClassName : barClassName, animated ? 'progress-bar-animated' : null, color ? "bg-".concat(color) : null, striped || animated ? 'progress-bar-striped' : null), cssModule);
  var ProgressBar = multi ? children : Object(__WEBPACK_IMPORTED_MODULE_1_inferno__["f" /* createVNode */])(1, "div", progressBarClasses, children, 0, {
    "style": {
      width: "".concat(percent, "%")
    },
    "role": "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": "0",
    "aria-valuemax": max
  });

  if (bar) {
    return ProgressBar;
  }

  Object.assign(attributes, {
    className: progressClasses
  });
  return Object(__WEBPACK_IMPORTED_MODULE_2_inferno_create_element__["a" /* createElement */])(Tag, attributes, ProgressBar);
};

Progress.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Progress);

/***/ }),
/* 74 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */


function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_inferno_animation__ = __webpack_require__(35);














var addClassName = __WEBPACK_IMPORTED_MODULE_11_inferno_animation__["a" /* utils */].addClassName,
    removeClassName = __WEBPACK_IMPORTED_MODULE_11_inferno_animation__["a" /* utils */].removeClassName,
    registerTransitionListener = __WEBPACK_IMPORTED_MODULE_11_inferno_animation__["a" /* utils */].registerTransitionListener,
    forceReflow = __WEBPACK_IMPORTED_MODULE_11_inferno_animation__["a" /* utils */].forceReflow,
    clearDimensions = __WEBPACK_IMPORTED_MODULE_11_inferno_animation__["a" /* utils */].clearDimensions,
    getDimensions = __WEBPACK_IMPORTED_MODULE_11_inferno_animation__["a" /* utils */].getDimensions,
    setDimensions = __WEBPACK_IMPORTED_MODULE_11_inferno_animation__["a" /* utils */].setDimensions,
    setDisplay = __WEBPACK_IMPORTED_MODULE_11_inferno_animation__["a" /* utils */].setDisplay;
/**
 * These are the open and close animation helpers
 */

function _animateCollapseOnRemove(node, animCls, callback) {
  var clone = node.cloneNode(true);

  var _getDimensions = getDimensions(node),
      width = _getDimensions.width,
      height = _getDimensions.height;

  setDimensions(clone, width, height);
  addClassName(clone, 'collapse show');
  setDisplay(node, 'none !important');
  node.parentNode.appendChild(clone);
  addClassName(clone, 'collapsing');
  registerTransitionListener(clone, function () {
    // *** Cleanup ***
    callback && callback(clone);
    clone.remove();
  });
  setTimeout(function () {
    removeClassName(clone, 'collapse show');
    clearDimensions(clone);
  }, 5);
}

function _animateCollapseOnAdd(node, animCls, callback) {
  var _getDimensions2 = getDimensions(node),
      width = _getDimensions2.width,
      height = _getDimensions2.height;

  addClassName(node, 'collapse');
  forceReflow();
  addClassName(node, 'collapsing');
  setDisplay(node, 'block');
  registerTransitionListener([node, node.children[0]], function () {
    // *** Cleanup ***
    removeClassName(node, 'collapsing');
    clearDimensions(node);
    callback && callback(node);
  }); //setTimeout(() => {

  setDimensions(node, width, height);
  addClassName(node, 'collapse show');
  removeClassName(node, 'collapse'); //}, 5) 
}

function Animated(props) {
  var Tag = props.tag,
      children = props.children,
      attrs = __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["tag", "children"]);

  return Object(__WEBPACK_IMPORTED_MODULE_8_inferno_create_element__["a" /* createElement */])(Tag || 'div', attrs, children);
}
/**
 * This is the bootstrap code:
 */


var defaultProps = {
  isOpen: false,
  tag: 'div',
  onOpened: function onOpened() {},
  onClosed: function onClosed() {}
};

var Collapse =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(Collapse, _Component);

  function Collapse(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, Collapse);

    _this = __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(Collapse).call(this, props));
    _this.state = {
      active: false
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(Collapse, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        active: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _omit = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["f" /* omit */])(this.props, ['isOpen', 'delay', 'onOpened', 'onClosed']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(_omit, ["className", "cssModule", "tag"]);

      var classes = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_9_classnames___default()(className, !this.state.active && 'InfernoAnimation-noAnim'), cssModule);
      var prefix = this.props.animationClassNames; // If hidden

      if (!this.props.isOpen) return null;
      return Object(__WEBPACK_IMPORTED_MODULE_7_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_7_inferno__["b" /* createComponentVNode */])(2, Animated, __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({}, attributes, {
        "tag": Tag,
        "className": classes
      }), null, {
        "onComponentDidMount": function onComponentDidMount(dom) {
          return _animateCollapseOnAdd(dom, _this2.props.onOpened);
        },
        "onComponentWillUnmount": function onComponentWillUnmount(dom) {
          return _animateCollapseOnRemove(dom, _this2.props.onClosed);
        }
      }));
    }
  }]);

  return Collapse;
}(__WEBPACK_IMPORTED_MODULE_7_inferno__["a" /* Component */]);

Collapse.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Collapse);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animatedComponent__ = __webpack_require__(27);






function OriginalAnimated(_ref) {
  var el = _ref.el,
      tag = _ref.tag,
      children = _ref.children,
      attrs = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["el", "tag", "children"]);

  return Object(__WEBPACK_IMPORTED_MODULE_3_inferno_create_element__["a" /* createElement */])(tag || el || 'div', attrs, children);
}

function Animated(_ref2) {
  var prefix = _ref2.prefix,
      onDidEnter = _ref2.onDidEnter,
      onDidLeave = _ref2.onDidLeave,
      attrs = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default()(_ref2, ["prefix", "onDidEnter", "onDidLeave"]);

  return Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["b" /* createComponentVNode */])(2, OriginalAnimated, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, attrs), null, {
    "onComponentDidMount": function onComponentDidMount(dom) {
      return Object(__WEBPACK_IMPORTED_MODULE_4__animatedComponent__["a" /* animateOnAdd */])(dom, prefix, onDidEnter);
    },
    "onComponentWillUnmount": function onComponentWillUnmount(dom) {
      return Object(__WEBPACK_IMPORTED_MODULE_4__animatedComponent__["b" /* animateOnRemove */])(dom, prefix, onDidLeave);
    }
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Animated);
/*

// Why did this not work?

'use strict'
import { Component } from 'inferno'
import { createElement } from 'inferno-create-element'
import { animateOnAdd, animateOnRemove } from './animatedComponent'

function Animated ({ el, tag, prefix, onDidEnter, onDidLeave, children, ...attrs}) {

  attrs.onComponentDidMount = (dom) => animateOnAdd(dom, prefix, onDidEnter)
  attrs.onComponentWillUnmount = (dom) => animateOnRemove(dom, prefix, onDidLeave)

  return createElement(
    tag || el || 'div', 
    attrs, 
    children
  )
}

export default Animated

*/

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_inferno_extras__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__animatedComponent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__(28);













var animateSizeChange = function animateSizeChange(node, animationName, sourceSize, targetSize) {
  if (Object(__WEBPACK_IMPORTED_MODULE_10__utils__["b" /* animationIsRunningOnParent */])(node)) return; // 1. Set dimensions

  Object(__WEBPACK_IMPORTED_MODULE_10__utils__["h" /* setDimensions */])(node, sourceSize.width, sourceSize.height); // node.style.height = sourceSize.height + 'px'
  // node.style.width = sourceSize.width + 'px'

  Object(__WEBPACK_IMPORTED_MODULE_10__utils__["d" /* forceReflow */])(node); // 2. Set an animation listener, code at end

  Object(__WEBPACK_IMPORTED_MODULE_10__utils__["f" /* registerTransitionListener */])(node, function () {
    // *** Cleanup ***
    // callback && callback(clone)
    Object(__WEBPACK_IMPORTED_MODULE_10__utils__["c" /* clearDimensions */])(node);
    node.classList.remove(animationName + '-cross-fade-active');
  }); // 3. Activate transition

  node.classList.add(animationName + '-cross-fade-active'); // 4. Activate target state

  setTimeout(function () {
    Object(__WEBPACK_IMPORTED_MODULE_10__utils__["h" /* setDimensions */])(node, targetSize.width, targetSize.height);
  }, 5);
};

function _getSizeOfCrossFadeDOMNode(DOMNode) {
  var domEl = DOMNode.parentNode;
  domEl.classList.add('InfernoAnimation--getSize');
  Object(__WEBPACK_IMPORTED_MODULE_10__utils__["d" /* forceReflow */])(domEl);
  var outpDimensions = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["e" /* getDimensions */])(domEl);
  domEl.classList.remove('InfernoAnimation--getSize');
  return outpDimensions;
}

var CrossFade =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default()(CrossFade, _Component);

  function CrossFade(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, CrossFade);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(CrossFade).call(this, props));
    _this.state = {
      active: false
    };
    _this.setTargetSize = _this.setTargetSize.bind(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.setSourceSize = _this.setSourceSize.bind(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this._animationCheck = _this._animationCheck.bind(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_assertThisInitialized___default()(_this)));
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(CrossFade, [{
    key: "_animationCheck",
    value: function _animationCheck() {
      if (this.state.active && this.targetSize && this.sourceSize && Object(__WEBPACK_IMPORTED_MODULE_8_inferno_extras__["a" /* findDOMNode */])(this)) {
        animateSizeChange(Object(__WEBPACK_IMPORTED_MODULE_8_inferno_extras__["a" /* findDOMNode */])(this), this.props.prefix, this.sourceSize, this.targetSize);
        this.targetSize = this.sourceSize = undefined;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.targetSize = _this2.sourceSize = undefined;

        _this2.setState({
          active: true
        });
      }, 10);
    }
  }, {
    key: "setTargetSize",
    value: function setTargetSize(DOMNode) {
      this.targetSize = _getSizeOfCrossFadeDOMNode(DOMNode);

      this._animationCheck();
    }
  }, {
    key: "setSourceSize",
    value: function setSourceSize(DOMNode) {
      this.sourceSize = _getSizeOfCrossFadeDOMNode(DOMNode);

      this._animationCheck();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var elProps = {};

      if (this.props.className) {
        // Using 'InfernoAnimation--noAnim' to block animations in children
        elProps['className'] = this.props.className + (!this.state.active ? ' InfernoAnimation--noAnim' : '');
      } else if (!this.state.active) {
        elProps['className'] = 'InfernoAnimation--noAnim';
      }

      var children = !Array.isArray(this.props.children) ? [this.props.children] : this.props.children;
      var childEls = children.map(function (childEl) {
        return Object(__WEBPACK_IMPORTED_MODULE_7_inferno_create_element__["a" /* createElement */])(CrossFadeItem, {
          // onComponentDidMount: this.setTargetSize, onComponentWillUnmount: this.setSourceSize, key: childEl.key
          onEnter: _this3.setTargetSize,
          onLeave: _this3.setSourceSize,
          key: childEl && childEl.key,
          prefix: _this3.props.prefix
        }, childEl);
      });
      return Object(__WEBPACK_IMPORTED_MODULE_7_inferno_create_element__["a" /* createElement */])(this.props.el || this.props.tag || 'div', elProps, childEls);
    }
  }]);

  return CrossFade;
}(__WEBPACK_IMPORTED_MODULE_6_inferno__["a" /* Component */]);
/*
function CrossFadeItem (props) {
  return (
    <div className="CrossFadeItem">
      {props.children}
    </div>
  )
}
*/


var CrossFadeItem =
/*#__PURE__*/
function (_Component2) {
  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default()(CrossFadeItem, _Component2);

  function CrossFadeItem() {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, CrossFadeItem);

    return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(CrossFadeItem).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(CrossFadeItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      var node = Object(__WEBPACK_IMPORTED_MODULE_8_inferno_extras__["a" /* findDOMNode */])(this);
      this.props.onEnter(node);
      setTimeout(function () {
        return Object(__WEBPACK_IMPORTED_MODULE_9__animatedComponent__["a" /* animateOnAdd */])(node, _this4.props.prefix);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this5 = this;

      var node = Object(__WEBPACK_IMPORTED_MODULE_8_inferno_extras__["a" /* findDOMNode */])(this);
      this.props.onLeave(node);
      setTimeout(function () {
        return Object(__WEBPACK_IMPORTED_MODULE_9__animatedComponent__["b" /* animateOnRemove */])(node, _this5.props.prefix);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "div", "CrossFadeItem", this.props.children, 0);
    }
  }]);

  return CrossFadeItem;
}(__WEBPACK_IMPORTED_MODULE_6_inferno__["a" /* Component */]);

/* unused harmony default export */ var _unused_webpack_default_export = (CrossFade);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'div'
};

var Container = function Container(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      fluid = props.fluid,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "fluid", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, fluid ? 'container-fluid' : 'container'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_2_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

Container.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),
/* 79 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_inferno_extras__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils__ = __webpack_require__(3);










var defaultProps = {
  tag: 'div'
};
var omitProps = ['tag', 'activeTab', 'className', 'cssModule'];

function getContentSize() {
  var domEl = Object(__WEBPACK_IMPORTED_MODULE_7_inferno_extras__["a" /* findDOMNode */])(this);
  return {
    width: domEl.offsetWidth + 'px',
    height: domEl.offsetHeight + 'px'
  };
} // This could probably be generalised in inferno-animation as part of animateOnAdd


function animateCrossFadeIn(component, currSize, animationName, callback) {
  var domEl = Object(__WEBPACK_IMPORTED_MODULE_7_inferno_extras__["a" /* findDOMNode */])(component);
  var height = domEl.offsetHeight + 'px';
  var width = domEl.offsetWidth + 'px';
  domEl.style.height = currSize.height;
  domEl.style.width = currSize.width;
  domEl.classList.add(animationName + '-enter'); // Trigger reflow

  var tmp = domEl.offsetHeight; // 2. Set an animation listener, code at end

  var done = false;
  var nrofTransitionsLeft;

  var onTransitionEnd = function onTransitionEnd(event) {
    // Make sure it isn't a child that is triggering the event
    if (event && event.target !== domEl) {
      return;
    }

    if (event !== undefined && nrofTransitionsLeft > 0) {
      nrofTransitionsLeft--;
      return;
    }

    if (done) return;
    done = true; // Clear style stuff

    domEl.style.height = domEl.style.width = '';
    domEl.classList.remove('InfernoAnimation-active');
    domEl.classList.remove(animationName + '-enter-active');
    domEl.classList.remove(animationName + '-enter-end'); // 5. Call callback to allow stuff to happen

    callback && callback(domEl);
  };

  domEl.addEventListener("transitionend", onTransitionEnd, false); // 3. Activate transitions

  domEl.classList.add(animationName + '-enter-active'); // The following is needed so we can prevent nested animations from playing slower
  // than parent animation causing a jump (in for example a cross-fade)

  domEl.classList.add('InfernoAnimation-active');
  var cs = window.getComputedStyle(domEl);
  var dur = cs.getPropertyValue('transition-duration').split(',');
  var del = cs.getPropertyValue('transition-delay').split(',');
  var animTimeout = dur.map(function (v, index) {
    return parseFloat(v) + parseFloat(del[index]);
  }).reduce(function (prev, curr) {
    return prev > curr ? prev : curr;
  }, 0);
  nrofTransitionsLeft = dur.length - 1;
  setTimeout(onTransitionEnd, Math.round(animTimeout * 1000) + 50); // Fallback if transitionend fails

  setTimeout(function () {
    domEl.style.height = height;
    domEl.style.width = width;
    domEl.classList.remove(animationName + '-enter');
    domEl.classList.add(animationName + '-enter-end');
  }, 5);
}

var TabContent =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(TabContent, _Component);

  function TabContent(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, TabContent);

    _this = __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(TabContent).call(this, props));
    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(TabContent, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        activeTabId: this.state
      };
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.state.activeTab !== nextProps.activeTab) {
        var sourceSize = getContentSize.call(this);
        this.setState({
          activeTab: nextProps.activeTab
        });

        if (nextProps.fade) {
          requestAnimationFrame(function () {
            animateCrossFadeIn(_this2, sourceSize, 'FadeIn');
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          Tag = _this$props.tag;
      var attributes = Object(__WEBPACK_IMPORTED_MODULE_9__utils__["f" /* omit */])(this.props, omitProps);
      var classes = Object(__WEBPACK_IMPORTED_MODULE_9__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_8_classnames___default()('tab-content', className), cssModule);
      Object.assign(attributes, {
        className: classes
      });
      return Object(__WEBPACK_IMPORTED_MODULE_6_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
    }
  }]);

  return TabContent;
}(__WEBPACK_IMPORTED_MODULE_5_inferno__["a" /* Component */]);


TabContent.defaultProps = defaultProps;

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TabPane;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'div'
};
function TabPane(props, context) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      tabId = props.tabId,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tabId", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('tab-pane', className, {
    active: tabId === context.activeTabId.activeTab
  }), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
}
TabPane.defaultProps = defaultProps;

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_typeof__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__PopperContent__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_inferno_shared__ = __webpack_require__(18);















var omitProps = ['placement', 'target', 'isOpen', 'cssModule', 'className', 'delay', 'disabled', 'placementPrefix', 'toggle'];
var DEFAULT_DELAYS = {
  show: 0,
  hide: 0
};
var defaultProps = {
  isOpen: false,
  placement: 'right',
  placementPrefix: 'bs-popover',
  delay: DEFAULT_DELAYS,
  toggle: function toggle() {}
};

var Popover =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(Popover, _Component);

  function Popover(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, Popover);

    _this = __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(Popover).call(this, props));
    _this.addTargetEvents = _this.addTargetEvents.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.removeTargetEvents = _this.removeTargetEvents.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.toggle = _this.toggle.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.show = _this.show.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.hide = _this.hide.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._target = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["c" /* getTarget */])(this.props.target);
      this.handleProps();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleProps();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearShowTimeout();
      this.clearHideTimeout();
      this.removeTargetEvents();
    }
  }, {
    key: "getDelay",
    value: function getDelay(key) {
      var delay = this.props.delay;

      if (__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_typeof___default()(delay) === 'object') {
        return !Object(__WEBPACK_IMPORTED_MODULE_12_inferno_shared__["d" /* isNumber */])(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }

      return delay;
    }
  }, {
    key: "handleProps",
    value: function handleProps() {
      if (this.props.isOpen) {
        this.show();
      } else {
        this.hide();
      }
    }
  }, {
    key: "show",
    value: function show() {
      this.clearHideTimeout();
      this.addTargetEvents();

      if (!this.props.isOpen) {
        this.clearShowTimeout();
        this._showTimeout = setTimeout(this.toggle, this.getDelay('show'));
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.clearShowTimeout();
      this.removeTargetEvents();

      if (this.props.isOpen) {
        this.clearHideTimeout();
        this._hideTimeout = setTimeout(this.toggle, this.getDelay('hide'));
      }
    }
  }, {
    key: "clearShowTimeout",
    value: function clearShowTimeout() {
      clearTimeout(this._showTimeout);
      this._showTimeout = undefined;
    }
  }, {
    key: "clearHideTimeout",
    value: function clearHideTimeout() {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = undefined;
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(e) {
      if (e.target !== this._target && !this._target.contains(e.target)) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }

        if (this.props.isOpen) {
          this.toggle();
        }
      }
    }
  }, {
    key: "addTargetEvents",
    value: function addTargetEvents() {
      document.addEventListener('click', this.handleDocumentClick, true);
    }
  }, {
    key: "removeTargetEvents",
    value: function removeTargetEvents() {
      document.removeEventListener('click', this.handleDocumentClick, true);
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }

      var attributes = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["f" /* omit */])(this.props, Object.keys(omitProps));
      var classes = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_9_classnames___default()('popover-inner', this.props.className), this.props.cssModule);
      var popperClasses = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_9_classnames___default()('popover', 'show'), this.props.cssModule);
      return Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__PopperContent__["a" /* default */], {
        "className": popperClasses,
        "target": this.props.target,
        "isOpen": this.props.isOpen,
        "placement": this.props.placement,
        "placementPrefix": this.props.placementPrefix,
        children: Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["f" /* createVNode */])(1, "div", classes, null, 1, __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({}, attributes)))
      });
    }
  }]);

  return Popover;
}(__WEBPACK_IMPORTED_MODULE_8_inferno__["a" /* Component */]);

Popover.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Popover);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'h3'
};

var PopoverHeader = function PopoverHeader(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'popover-header'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

PopoverHeader.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (PopoverHeader);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'div'
};

var PopoverBody = function PopoverBody(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'popover-body'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

PopoverBody.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (PopoverBody);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(3);





var defaultProps = {
  tag: 'ul'
};

var Pagination = function Pagination(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "size", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'pagination', __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_defineProperty___default()({}, "pagination-".concat(size), !!size)), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_3_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

Pagination.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Pagination);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'li'
};

var PaginationItem = function PaginationItem(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      disabled = props.disabled,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["active", "children", "className", "cssModule", "disabled", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, 'page-item', {
    active: active,
    disabled: disabled
  }), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_2_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

PaginationItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (PaginationItem);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(3);






var defaultProps = {
  tag: 'a'
};

var PaginationLink = function PaginationLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      next = props.next,
      previous = props.previous,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["className", "cssModule", "next", "previous", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'page-link'), cssModule);
  var defaultAriaLabel;

  if (previous) {
    defaultAriaLabel = 'Previous';
  } else if (next) {
    defaultAriaLabel = 'Next';
  }

  var ariaLabel = props['aria-label'] || defaultAriaLabel;
  var defaultCaret;

  if (previous) {
    defaultCaret = "\xAB";
  } else if (next) {
    defaultCaret = "\xBB";
  }

  var children = props.children;

  if (previous || next) {
    children = [Object(__WEBPACK_IMPORTED_MODULE_1_inferno__["f" /* createVNode */])(1, "span", null, children || defaultCaret, 0, {
      "aria-hidden": "true"
    }, "caret"), Object(__WEBPACK_IMPORTED_MODULE_1_inferno__["f" /* createVNode */])(1, "span", "sr-only", ariaLabel, 0, null, "sr")];
  }

  Object.assign(attributes, {
    'aria-label': ariaLabel,
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_3_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

PaginationLink.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (PaginationLink);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'ul'
};

var ListGroup = function ListGroup(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      flush = props.flush,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag", "flush"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

ListGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (ListGroup);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'li'
};

var handleDisabledOnClick = function handleDisabledOnClick(e) {
  e.preventDefault();
};

var ListGroupItem = function ListGroupItem(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      active = props.active,
      disabled = props.disabled,
      action = props.action,
      color = props.color,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "tag", "active", "disabled", "action", "color"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? "list-group-item-".concat(color) : false, 'list-group-item')); // Prevent click event when disabled.

  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }

  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

ListGroupItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (ListGroupItem);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'h5'
};

var ListGroupItemHeading = function ListGroupItemHeading(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'list-group-item-heading'));
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

ListGroupItemHeading.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (ListGroupItemHeading);

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'p'
};

var ListGroupItemText = function ListGroupItemText(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'list-group-item-text'));
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

ListGroupItemText.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (ListGroupItemText);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MediaBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(3);








var Media = function Media(props) {
  var vertical = props.vertical,
      children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      href = props.href,
      tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["vertical", "children", "className", "cssModule", "href", "tag"]);

  var Tag = href !== undefined ? tag || 'a' : tag || 'div';
  var classes = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, {
    'media': true,
    'flex-column': vertical
  }), cssModule);
  Object.assign(attributes, {
    className: classes,
    href: href
  });
  return Object(__WEBPACK_IMPORTED_MODULE_3_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

var MediaBody = function MediaBody(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag"]);

  var Tag = tag || 'div';
  var classes = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, 'media-body'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_3_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

var Image = function Image(props) {
  var baseline = props.baseline,
      top = props.top,
      middle = props.middle,
      bottom = props.bottom,
      textTop = props.textTop,
      textBottom = props.textBottom,
      href = props.href,
      target = props.target,
      responsive = props.responsive,
      spacing = props.spacing,
      className = props.className,
      cssModule = props.cssModule,
      attributes = __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["baseline", "top", "middle", "bottom", "textTop", "textBottom", "href", "target", "responsive", "spacing", "className", "cssModule"]);

  var alignment = {
    'align-baseline': baseline,
    'align-self-start': top,
    'align-self-end': bottom,
    'align-self-center': middle,
    'align-text-top': textTop,
    'align-text-bottom': textBottom
  };
  var responsiveWrapperClasses = responsive && 'embed-responsive embed-responsive-' + responsive;
  var responsiveItemClasses = responsive && 'embed-responsive-item';

  if (href) {
    var classes = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, responsiveItemClasses), cssModule);
    var anchorClasses = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_4_classnames___default()(alignment, responsiveWrapperClasses, spacing), cssModule);
    var anchorAttributes = {
      href: href,
      target: target
    };
    return Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["f" /* createVNode */])(1, "a", anchorClasses, Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["f" /* createVNode */])(1, "img", classes, null, 1, __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({}, attributes))), 2, __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({}, anchorAttributes)));
  } else if (responsive) {
    var _classes = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, responsiveItemClasses), cssModule);

    var wrapperClasses = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_4_classnames___default()(alignment, responsiveWrapperClasses, spacing), cssModule);
    return Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["f" /* createVNode */])(1, "div", wrapperClasses, Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["f" /* createVNode */])(1, "img", _classes, null, 1, __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({}, attributes))), 2);
  } else {
    var _classes2 = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, alignment, spacing), cssModule);

    return Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["f" /* createVNode */])(1, "img", _classes2, null, 1, __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({}, attributes)));
  }
};



/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(3);






var defaultProps = {
  type: 'border',
  children: 'Loading...'
};

var Spinner = function Spinner(props) {
  var className = props.className,
      cssModule = props.cssModule,
      type = props.type,
      size = props.size,
      color = props.color,
      children = props.children,
      attributes = __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["className", "cssModule", "type", "size", "color", "children"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, size ? "spinner-".concat(type, "-").concat(size) : false, "spinner-".concat(type), color ? "text-".concat(color) : false), cssModule);
  return Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["f" /* createVNode */])(1, "div", classes, children && Object(__WEBPACK_IMPORTED_MODULE_2_inferno__["f" /* createVNode */])(1, "span", Object(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* mapToCssModules */])('sr-only', cssModule), children, 0), 0, __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({
    "role": "status"
  }, attributes)));
};

Spinner.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Spinner);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'img'
};

var CardImg = function CardImg(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      top = props.top,
      bottom = props.bottom,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "top", "bottom", "tag"]);

  var cardImgClassName = 'card-img';

  if (top) {
    cardImgClassName = 'card-img-top';
  }

  if (bottom) {
    cardImgClassName = 'card-img-bottom';
  }

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, cardImgClassName), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

CardImg.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (CardImg);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'a'
};

var CardLink = function CardLink(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag", "innerRef"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-link'), cssModule);
  Object.assign(attributes, {
    className: classes,
    ref: innerRef
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

CardLink.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (CardLink);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'h6'
};

var CardSubtitle = function CardSubtitle(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-subtitle'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

CardSubtitle.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (CardSubtitle);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'div'
};

var CardHeader = function CardHeader(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-header'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

CardHeader.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (CardHeader);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);




var defaultProps = {
  tag: 'div'
};

var CardFooter = function CardFooter(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["children", "className", "cssModule", "tag"]);

  var classes = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'card-footer'), cssModule);
  Object.assign(attributes, {
    className: classes
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag, attributes, children);
};

CardFooter.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (CardFooter);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dropdown__ = __webpack_require__(15);





var InputGroupButtonDropdown = function InputGroupButtonDropdown(props) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_1_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__Dropdown__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({}, props)));
};

/* harmony default export */ __webpack_exports__["a"] = (InputGroupButtonDropdown);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = animateModalOnRemove;
/* harmony export (immutable) */ __webpack_exports__["b"] = animateModalOnAdd;
/* harmony export (immutable) */ __webpack_exports__["a"] = Animated;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inferno_animation__ = __webpack_require__(35);



var addClassName = __WEBPACK_IMPORTED_MODULE_2_inferno_animation__["a" /* utils */].addClassName,
    removeClassName = __WEBPACK_IMPORTED_MODULE_2_inferno_animation__["a" /* utils */].removeClassName,
    registerTransitionListener = __WEBPACK_IMPORTED_MODULE_2_inferno_animation__["a" /* utils */].registerTransitionListener,
    forceReflow = __WEBPACK_IMPORTED_MODULE_2_inferno_animation__["a" /* utils */].forceReflow,
    setDisplay = __WEBPACK_IMPORTED_MODULE_2_inferno_animation__["a" /* utils */].setDisplay;
/**
 * These are the open and close animation helpers
 */

function animateModalOnRemove(node, callback) {
  var clone = node.cloneNode(true);
  setDisplay(node, 'none !important');
  node.parentNode.appendChild(clone);
  registerTransitionListener(clone, function () {
    // *** Cleanup ***
    callback && callback(clone);
    clone.remove();
  });
  setTimeout(function () {
    removeClassName(clone, 'show');
  }, 5);
}
function animateModalOnAdd(node, callback) {
  setDisplay(node, 'none');
  addClassName(node, 'fade');
  forceReflow(node);
  setDisplay(node, 'block');
  registerTransitionListener([node, node.children[0]], function () {
    // *** Cleanup ***
    callback && callback(node);
  });
  addClassName(node, 'show');
}
function Animated(props) {
  var Tag = props.tag,
      children = props.children,
      attrs = __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(props, ["tag", "children"]);

  return Object(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* createElement */])(Tag || 'div', attrs, children);
}

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserRouter; });
/* unused harmony export HashRouter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Link; });
/* unused harmony export MemoryRouter */
/* unused harmony export NavLink */
/* unused harmony export Prompt */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Route; });
/* unused harmony export Router */
/* unused harmony export StaticRouter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Switch; });
/* unused harmony export matchPath */
/* unused harmony export withRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_history__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path_to_regexp_es6__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path_to_regexp_es6___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path_to_regexp_es6__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hoist_non_inferno_statics__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hoist_non_inferno_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hoist_non_inferno_statics__);




var isArray = Array.isArray;

function isInvalid(o) {
  return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}

function isNull(o) {
  return o === null;
}

function isTrue(o) {
  return o === true;
}

function isUndefined(o) {
  return o === void 0;
}

function combineFrom(first, second) {
  var out = {};

  if (first) {
    for (var key in first) {
      out[key] = first[key];
    }
  }

  if (second) {
    for (var key$1 in second) {
      out[key$1] = second[key$1];
    }
  }

  return out;
}

function invariant(condition, format, a, b, c, d, e, f) {
  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
}
/**
 * The public API for putting history on context.
 */


var Router =
/*@__PURE__*/
function (Component$$1) {
  function Router(props, context) {
    Component$$1.call(this, props, context);
    this.state = {
      match: this.computeMatch(props.history.location.pathname)
    };
  }

  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;

  Router.prototype.getChildContext = function getChildContext() {
    var childContext = combineFrom(this.context.router, null);
    childContext.history = this.props.history;
    childContext.route = {
      location: childContext.history.location,
      match: this.state.match
    };
    return {
      router: childContext
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      isExact: pathname === '/',
      params: {},
      path: '/',
      url: '/'
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var this$1 = this;
    var ref = this.props;
    var history = ref.history; // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.

    this.unlisten = history.listen(function () {
      this$1.setState({
        match: this$1.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render(props) {
    return props.children;
  };

  return Router;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]);

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
} // tslint:disable-next-line:no-empty


var noop = function () {};

var StaticRouter =
/*@__PURE__*/
function (Component$$1) {
  function StaticRouter() {
    var this$1 = this;
    Component$$1.apply(this, arguments);

    this.createHref = function (path) {
      return addLeadingSlash(this$1.props.basename + createURL(path));
    };

    this.handlePush = function (location) {
      var ref = this$1.props;
      var basename = ref.basename;
      var context = ref.context;
      context.action = 'PUSH';
      context.location = addBasename(basename, createLocation$1(location));
      context.url = createURL(context.location);
    };

    this.handleReplace = function (location) {
      var ref = this$1.props;
      var basename = ref.basename;
      var context = ref.context;
      context.action = 'REPLACE';
      context.location = addBasename(basename, createLocation$1(location));
      context.url = createURL(context.location);
    }; // tslint:disable-next-line:no-empty


    this.handleListen = function () {
      return noop;
    }; // tslint:disable-next-line:no-empty


    this.handleBlock = function () {
      return noop;
    };
  }

  if (Component$$1) StaticRouter.__proto__ = Component$$1;
  StaticRouter.prototype = Object.create(Component$$1 && Component$$1.prototype);
  StaticRouter.prototype.constructor = StaticRouter;

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.render = function render(ref) {
    var basename = ref.basename;
    var context = ref.context;
    var location = ref.location;
    var rest = objectWithoutProperties(ref, ["basename", "context", "location"]);
    var props = rest;
    return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(4
    /* ComponentClass */
    , Router, combineFrom(props, {
      history: {
        action: 'POP',
        block: this.handleBlock,
        createHref: this.createHref,
        go: staticHandler('go'),
        goBack: staticHandler('goBack'),
        goForward: staticHandler('goForward'),
        listen: this.handleListen,
        location: stripBasename(basename, createLocation$1(location)),
        push: this.handlePush,
        replace: this.handleReplace
      }
    }));
  };

  return StaticRouter;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]);

StaticRouter.defaultProps = {
  basename: '',
  location: '/'
};

function normalizeLocation(ref) {
  var pathname = ref.pathname;
  if (pathname === void 0) pathname = '/';
  var search = ref.search;
  var hash = ref.hash;
  return {
    hash: (hash || '') === '#' ? '' : hash,
    pathname: pathname,
    search: (search || '') === '?' ? '' : search
  };
}

function addBasename(basename, location) {
  if (!basename) {
    return location;
  }

  return combineFrom(location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) {
    return location;
  }

  var base = addLeadingSlash(basename);

  if (location.pathname.indexOf(base) !== 0) {
    return location;
  }

  return combineFrom(location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createLocation$1(location) {
  return typeof location === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_1_history__["g" /* parsePath */])(location) : normalizeLocation(location);
}

function createURL(location) {
  return typeof location === 'string' ? location : Object(__WEBPACK_IMPORTED_MODULE_1_history__["e" /* createPath */])(location);
}

function staticHandler(methodName) {
  return function () {
    invariant(false, 'You cannot %s with <StaticRouter>', methodName);
  };
}

var BrowserRouter =
/*@__PURE__*/
function (Component$$1) {
  function BrowserRouter(props, context) {
    Component$$1.call(this, props, context);
    this.history = Object(__WEBPACK_IMPORTED_MODULE_1_history__["a" /* createBrowserHistory */])(props);
  }

  if (Component$$1) BrowserRouter.__proto__ = Component$$1;
  BrowserRouter.prototype = Object.create(Component$$1 && Component$$1.prototype);
  BrowserRouter.prototype.constructor = BrowserRouter;

  BrowserRouter.prototype.render = function render() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(4
    /* ComponentClass */
    , Router, {
      children: this.props.children,
      history: this.history
    });
  };

  return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]);

var HashRouter =
/*@__PURE__*/
function (Component$$1) {
  function HashRouter(props, context) {
    Component$$1.call(this, props, context);
    this.history = Object(__WEBPACK_IMPORTED_MODULE_1_history__["b" /* createHashHistory */])(props);
  }

  if (Component$$1) HashRouter.__proto__ = Component$$1;
  HashRouter.prototype = Object.create(Component$$1 && Component$$1.prototype);
  HashRouter.prototype.constructor = HashRouter;

  HashRouter.prototype.render = function render() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(4
    /* ComponentClass */
    , Router, {
      children: this.props.children,
      history: this.history
    });
  };

  return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]);

var MemoryRouter =
/*@__PURE__*/
function (Component$$1) {
  function MemoryRouter(props, context) {
    Component$$1.call(this, props, context);
    this.history = Object(__WEBPACK_IMPORTED_MODULE_1_history__["d" /* createMemoryHistory */])(props);
  }

  if (Component$$1) MemoryRouter.__proto__ = Component$$1;
  MemoryRouter.prototype = Object.create(Component$$1 && Component$$1.prototype);
  MemoryRouter.prototype.constructor = MemoryRouter;

  MemoryRouter.prototype.render = function render() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(4
    /* ComponentClass */
    , Router, {
      children: this.props.children,
      history: this.history
    });
  };

  return MemoryRouter;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]);

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function (pattern, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) {
    return cache[pattern];
  }

  var keys = [];
  var re = __WEBPACK_IMPORTED_MODULE_2_path_to_regexp_es6___default()(pattern, keys, options);
  var compiledPattern = {
    re: re,
    keys: keys
  };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};
/**
 * Public API for matching a URL pathname to a path pattern.
 */


function matchPath(pathname, options) {
  if (typeof options === 'string') {
    options = {
      path: options
    };
  }

  var path = options.path;
  if (path === void 0) path = '/';
  var exact = options.exact;
  if (exact === void 0) exact = false;
  var strict = options.strict;
  if (strict === void 0) strict = false;
  var sensitive = options.sensitive;
  if (sensitive === void 0) sensitive = false;
  var ref = compilePath(path, {
    end: exact,
    strict: strict,
    sensitive: sensitive
  });
  var re = ref.re;
  var keys = ref.keys;
  var match = re.exec(pathname);

  if (!match) {
    return null;
  }

  var url = match[0];
  var values = match.slice(1);
  var isExact = pathname === url;

  if (exact && !isExact) {
    return null;
  }

  return {
    isExact: isExact,
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {}),
    path: path,
    url: path === '/' && url === '' ? '/' : url // the matched portion of the URL

  };
}
/**
 * The public API for matching a single path and rendering.
 */


var Route =
/*@__PURE__*/
function (Component$$1) {
  function Route(props, context) {
    Component$$1.call(this, props, context);
    this.state = {
      match: this.computeMatch(props, context.router)
    };
  }

  if (Component$$1) Route.__proto__ = Component$$1;
  Route.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Route.prototype.constructor = Route;

  Route.prototype.getChildContext = function getChildContext() {
    var childContext = combineFrom(this.context.router, null);
    childContext.route = {
      location: this.props.location || this.context.router.route.location,
      match: this.state.match
    };
    return {
      router: childContext
    };
  };

  Route.prototype.computeMatch = function computeMatch(ref, router) {
    var computedMatch = ref.computedMatch;
    var location = ref.location;
    var path = ref.path;
    var strict = ref.strict;
    var exact = ref.exact;
    var sensitive = ref.sensitive;

    if (computedMatch) {
      // <Switch> already computed the match for us
      return computedMatch;
    }

    var route = router.route;
    var pathname = (location || route.location).pathname;
    return path ? matchPath(pathname, {
      path: path,
      strict: strict,
      exact: exact,
      sensitive: sensitive
    }) : route.match;
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var ref = this.state;
    var match = ref.match;
    var ref$1 = this.props;
    var children = ref$1.children;
    var component = ref$1.component;
    var render = ref$1.render;
    var ref$2 = this.context.router;
    var history = ref$2.history;
    var route = ref$2.route;
    var staticContext = ref$2.staticContext;
    var location = this.props.location || route.location;
    var props = {
      match: match,
      location: location,
      history: history,
      staticContext: staticContext
    };

    if (component) {
      return match ? Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2
      /* ComponentUnknown */
      , component, props) : null;
    }

    if (render) {
      return match ? render(props, this.context) : null;
    }

    if (typeof children === 'function') {
      return children(props);
    }

    return children;
  };

  return Route;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]);

function getMatch(ref, route, location) {
  var path = ref.path;
  var exact = ref.exact;
  var strict = ref.strict;
  var sensitive = ref.sensitive;
  var from = ref.from;
  var pathProp = path || from;
  return pathProp ? matchPath(location.pathname, {
    path: pathProp,
    exact: exact,
    strict: strict,
    sensitive: sensitive
  }) : route.match;
}

var Switch =
/*@__PURE__*/
function (Component$$1) {
  function Switch() {
    Component$$1.apply(this, arguments);
  }

  if (Component$$1) Switch.__proto__ = Component$$1;
  Switch.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Switch.prototype.constructor = Switch;

  Switch.prototype.render = function render() {
    var ref = this.context.router;
    var route = ref.route;
    var ref$1 = this.props;
    var children = ref$1.children;
    var location = this.props.location || route.location;

    if (isInvalid(children)) {
      return null;
    }

    var match;

    var _child;

    if (isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        _child = children[i];
        match = getMatch(_child.props, route, location);

        if (match) {
          break;
        }
      }
    } else {
      match = getMatch(children.props, route, location);
      _child = children;
    }

    if (match) {
      return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(_child.flags, _child.type, combineFrom(_child.props, {
        location: location,
        computedMatch: match
      }));
    }

    return null;
  };

  return Switch;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]);

function objectWithoutProperties$1(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var isModifiedEvent = function (event) {
  return Boolean(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

function handleClick(ref, event) {
  var props = ref.props;
  var context = ref.context;

  if (props.onClick) {
    props.onClick(event);
  }

  if (!event.defaultPrevented && // onClick prevented default
  event.button === 0 && // ignore everything but left clicks
  !props.target && // let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // ignore clicks with modifier keys
  ) {
      event.preventDefault();
      var ref$1 = context.router;
      var history = ref$1.history;
      var replace = props.replace;
      if (replace === void 0) replace = false;
      var to = props.to;

      if (replace) {
        history.replace(to);
      } else {
        history.push(to);
      }
    }
}
/**
 * The public API for rendering a history-aware <a>.
 */


function Link(props, context) {
  var replace = props.replace;
  var children = props.children;
  var className = props.className;
  var to = props.to;
  if (to === void 0) to = '';
  var innerRef = props.innerRef;
  var rest$1 = objectWithoutProperties$1(props, ["replace", "children", "className", "to", "innerRef"]);
  var rest = rest$1;
  invariant(context.router, 'You should not use <Link> outside a <Router>');
  var href = context.router.history.createHref(typeof to === 'string' ? {
    pathname: to
  } : to);
  var newProps = combineFrom(rest, null);
  newProps.href = href;
  newProps.onClick = Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["i" /* linkEvent */])({
    context: context,
    props: props
  }, handleClick);
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1
  /* HtmlElement */
  , 'a', className, children, 0
  /* UnknownChildren */
  , newProps, null, innerRef);
}

function objectWithoutProperties$2(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

function filter(i) {
  return i;
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


function NavLink(ref) {
  var to = ref.to;
  var exact = ref.exact;
  var strict = ref.strict;
  var onClick = ref.onClick;
  var linkLocation = ref.location;
  var activeClassName = ref.activeClassName;
  if (activeClassName === void 0) activeClassName = 'active';
  var className = ref.className;
  var activeStyle = ref.activeStyle;
  var style = ref.style;
  var getIsActive = ref.isActive;
  var ariaCurrent = ref.ariaCurrent;
  if (ariaCurrent === void 0) ariaCurrent = 'true';
  var rest$1 = objectWithoutProperties$2(ref, ["to", "exact", "strict", "onClick", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "ariaCurrent"]);
  var rest = rest$1;

  function linkComponent(ref) {
    var location = ref.location;
    var match = ref.match;
    var isActive = !!(getIsActive ? getIsActive(match, location) : match);
    return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(8
    /* ComponentFunction */
    , Link, combineFrom({
      'aria-current': isActive && ariaCurrent,
      className: isActive ? [className, activeClassName].filter(filter).join(' ') : className,
      onClick: onClick,
      style: isActive ? combineFrom(style, activeStyle) : style,
      to: to
    }, rest));
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(4
  /* ComponentClass */
  , Route, {
    children: linkComponent,
    exact: exact,
    location: linkLocation,
    path: typeof to === 'object' ? to.pathname : to,
    strict: strict
  });
}
/**
 * The public API for matching a single path and rendering.
 */


var Prompt =
/*@__PURE__*/
function (Component$$1) {
  function Prompt() {
    Component$$1.apply(this, arguments);
  }

  if (Component$$1) Prompt.__proto__ = Component$$1;
  Prompt.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Prompt.prototype.constructor = Prompt;

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) {
      this.unblock();
    }

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    invariant(this.context.router, 'You should not use <Prompt> outside a <Router>');

    if (this.props.when) {
      this.enable(this.props.message);
    }
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) {
        this.enable(nextProps.message);
      }
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]);

var Redirect =
/*@__PURE__*/
function (Component$$1) {
  function Redirect() {
    Component$$1.apply(this, arguments);
  }

  if (Component$$1) Redirect.__proto__ = Component$$1;
  Redirect.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Redirect.prototype.constructor = Redirect;

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    invariant(this.context.router, 'You should not use <Redirect> outside a <Router>');

    if (this.isStatic()) {
      this.perform();
    }
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) {
      this.perform();
    }
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = Object(__WEBPACK_IMPORTED_MODULE_1_history__["c" /* createLocation */])(prevProps.to);
    var nextTo = Object(__WEBPACK_IMPORTED_MODULE_1_history__["c" /* createLocation */])(this.props.to);

    if (Object(__WEBPACK_IMPORTED_MODULE_1_history__["f" /* locationsAreEqual */])(prevTo, nextTo)) {
      // tslint:disable-next-line:no-console
      console.error("You tried to redirect to the same route you're currently on: \"" + nextTo.pathname + nextTo.search + "\"");
      return;
    }

    this.perform();
  };

  Redirect.prototype.perform = function perform() {
    var ref = this.context.router;
    var history = ref.history;
    var ref$1 = this.props;
    var push = ref$1.push;
    if (push === void 0) push = false;
    var to = ref$1.to;

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */]);

function objectWithoutProperties$3(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}
/**
 * A public higher-order component to access the imperative API
 */


function withRouter(Com) {
  var C = function (props) {
    var wrappedComponentRef = props.wrappedComponentRef;
    var rest = objectWithoutProperties$3(props, ["wrappedComponentRef"]);
    var remainingProps = rest;
    return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(4
    /* ComponentClass */
    , Route, {
      render: function render(routeComponentProps) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2
        /* ComponentUnknown */
        , Com, combineFrom(remainingProps, routeComponentProps), null, wrappedComponentRef);
      }
    });
  };

  C.displayName = "withRouter(" + (Com.displayName || Com.name) + ")";
  C.WrappedComponent = Com;
  return __WEBPACK_IMPORTED_MODULE_3_hoist_non_inferno_statics___default()(C, Com);
}



/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return supportsHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return supportsPopStateOnHashChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return supportsGoWithoutReloadUsingHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isExtraneousPopstateEvent; });
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};
var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};
var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
};
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 104 */,
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_inferno_router__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_Navigation_Nav__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_Navigation_NavItem__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_Navigation_NavLink__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__BasicPage__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__CardPage__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__FormPage__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ModalPage__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__NavigationPage__ = __webpack_require__(150);







 // require('inferno-devtools')











function Content(_ref) {
  var match = _ref.match;
  return Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["f" /* createVNode */])(1, "div", null, Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6_inferno_router__["e" /* Switch */], {
    children: [Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6_inferno_router__["d" /* Route */], {
      "path": "".concat(match.path, "/basic"),
      "component": __WEBPACK_IMPORTED_MODULE_10__BasicPage__["a" /* default */]
    }), Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6_inferno_router__["d" /* Route */], {
      "path": "".concat(match.path, "/card"),
      "component": __WEBPACK_IMPORTED_MODULE_11__CardPage__["a" /* default */]
    }), Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6_inferno_router__["d" /* Route */], {
      "path": "".concat(match.path, "/form"),
      "component": __WEBPACK_IMPORTED_MODULE_12__FormPage__["a" /* default */]
    }), Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6_inferno_router__["d" /* Route */], {
      "path": "".concat(match.path, "/modal"),
      "component": __WEBPACK_IMPORTED_MODULE_13__ModalPage__["a" /* default */]
    }), Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6_inferno_router__["d" /* Route */], {
      "path": "".concat(match.path, "/navigation"),
      "component": __WEBPACK_IMPORTED_MODULE_14__NavigationPage__["a" /* default */]
    }), Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6_inferno_router__["c" /* Redirect */], {
      "to": "/inferno-bootstrap-docs/basic"
    })]
  }), 2);
}

var App =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(App, _Component);

  function App() {
    __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, App);

    return __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(App).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        pageLinks: [{
          link: "/inferno-bootstrap-docs/basic",
          title: "Basic"
        }, {
          link: "/inferno-bootstrap-docs/card",
          title: "Card"
        }, {
          link: "/inferno-bootstrap-docs/form",
          title: "Form"
        }, {
          link: "/inferno-bootstrap-docs/modal",
          title: "Modal"
        }, {
          link: "/inferno-bootstrap-docs/navigation",
          title: "Navigation"
        }]
      };
    }
  }, {
    key: "render",
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["f" /* createVNode */])(1, "div", null, [Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__src_Navigation_Nav__["a" /* default */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__src_Navigation_NavItem__["a" /* default */], {
          children: Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_Navigation_NavLink__["a" /* default */], {
            "href": "//jhsware.github.io/inferno-bootstrap-docs",
            children: "Inferno Bootstrap"
          })
        }), Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__src_Navigation_NavItem__["a" /* default */], {
          children: Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_Navigation_NavLink__["a" /* default */], {
            "href": "https://github.com/jhsware/inferno-bootstrap",
            children: "Github"
          })
        }), Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__src_Navigation_NavItem__["a" /* default */], {
          children: Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_Navigation_NavLink__["a" /* default */], {
            "href": "https://infernojs.org/",
            children: "Inferno.js"
          })
        }), Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__src_Navigation_NavItem__["a" /* default */], {
          children: Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_Navigation_NavLink__["a" /* default */], {
            "href": "https://getbootstrap.com/docs/4.0/components/alerts/",
            children: "Bootstrap 4 Docs"
          })
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["f" /* createVNode */])(1, "div", "Content", Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6_inferno_router__["e" /* Switch */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6_inferno_router__["d" /* Route */], {
          "path": "/inferno-bootstrap-docs",
          "component": Content
        }), Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6_inferno_router__["c" /* Redirect */], {
          "to": "/inferno-bootstrap-docs/basic"
        })]
      }), 2)], 4);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_5_inferno__["a" /* Component */]);

if (typeof window !== 'undefined') {
  Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["l" /* render */])(Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6_inferno_router__["a" /* BrowserRouter */], {
    children: Object(__WEBPACK_IMPORTED_MODULE_5_inferno__["b" /* createComponentVNode */])(2, App)
  }), document.getElementById('app'));
}

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createHashHistory__ = __webpack_require__(110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__createHashHistory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__ = __webpack_require__(111);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LocationUtils__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PathUtils__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__PathUtils__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__PathUtils__["b"]; });









/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(103);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};







var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Browser history needs a DOM');
  var globalHistory = window.history;
  var canUseHistory = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["g" /* supportsHistory */])();
  var needsHashChangeListener = !Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["h" /* supportsPopStateOnHashChange */])();
  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;
  var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);
    return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["d" /* isExtraneousPopstateEvent */])(event)) return;
    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  var createHref = function createHref(location) {
    return basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');
        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');
        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, PopStateEvent, handlePopState);
      if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, PopStateEvent, handlePopState);
      if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
};

/* harmony default export */ __webpack_exports__["a"] = (createBrowserHistory);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
} // About 1.5x faster than the two-arg version of Array#splice()


function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
} // This implementation is based heavily on node's url.parse


function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];
  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';
  var hasTrailingSlash = void 0;

  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;

  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }
  if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');
  var result = fromParts.join('/');
  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (resolvePathname);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function valueEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);
  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();
    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (valueEqual);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(103);
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};







var HashChangeEvent = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */])(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
  },
  slash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Hash history needs a DOM');
  var globalHistory = window.history;
  var canGoWithoutReload = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["f" /* supportsGoWithoutReloadUsingHash */])();
  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;
  var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);
    return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path);
  };

  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["b" /* locationsAreEqual */])(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }; // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(initialLocation)]; // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location));
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot push state; it is ignored');
    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');
        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot replace state; it is ignored');
    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  };

  var go = function go(n) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
};

/* harmony default export */ __webpack_exports__["a"] = (createHashHistory);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PathUtils__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createTransitionManager__ = __webpack_require__(59);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};
/**
 * Creates a history object that stores locations in memory.
 */


var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;
  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_3__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, createKey()) : Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = __WEBPACK_IMPORTED_MODULE_1__PathUtils__["b" /* createPath */];

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
};

/* harmony default export */ __webpack_exports__["a"] = (createMemoryHistory);

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var pathToRegExp = __webpack_require__(113);
/**
 * Expose `pathToRegexp` as ES6 module
 */


module.exports = pathToRegExp;
module.exports.parse = pathToRegExp.parse;
module.exports.compile = pathToRegExp.compile;
module.exports.tokensToFunction = pathToRegExp.tokensToFunction;
module.exports.tokensToRegExp = pathToRegExp.tokensToRegExp;
module.exports['default'] = module.exports;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(114);
/**
 * Expose `pathToRegexp`.
 */


module.exports = pathToRegexp;
module.exports.parse = parse;
module.exports.compile = compile;
module.exports.tokensToFunction = tokensToFunction;
module.exports.tokensToRegExp = tokensToRegExp;
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

var PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */


function compile(str, options) {
  return tokensToFunction(parse(str, options));
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}
/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */


function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options.sensitive ? '' : 'i';
}
/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */


function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}
/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */


function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));
  return attachKeys(regexp, keys);
}
/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */


function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */


function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options =
    /** @type {!Object} */
    keys || options;
    keys = [];
  }

  options = options || {};
  var strict = options.strict;
  var end = options.end !== false;
  var route = ''; // Iterate over the tokens and create our regexp string.

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';
      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter; // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".

  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */


function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options =
    /** @type {!Object} */
    keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path,
    /** @type {!Array} */
    keys);
  }

  if (isarray(path)) {
    return arrayToRegexp(
    /** @type {!Array} */
    path,
    /** @type {!Array} */
    keys, options);
  }

  return stringToRegexp(
  /** @type {string} */
  path,
  /** @type {!Array} */
  keys, options);
}

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var INFERNO_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  arguments: true,
  arity: true
};
var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    var keys = Object.getOwnPropertyNames(sourceComponent);
    /* istanbul ignore else */

    if (isGetOwnPropertySymbolsAvailable) {
      keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
    }

    for (var i = 0; i < keys.length; ++i) {
      if (!INFERNO_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
        try {
          targetComponent[keys[i]] = sourceComponent[keys[i]];
        } catch (error) {}
      }
    }
  }

  return targetComponent;
}

;
module.exports = hoistNonReactStatics;
module.exports.default = module.exports;

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = BasicPage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Basic_Alert__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Basic_Badge__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Basic_Breadcrumb__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Basic_Button__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Basic_Dropdown__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Basic_Jumbotron__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Basic_Progress__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Basic_Collapse__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Basic_Layout__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Basic_Tabs__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Basic_Popovers__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Basic_Pagination__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Basic_List__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Basic_Tooltip__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Basic_Media__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Basic_Spinner__ = __webpack_require__(139);


















 // import Modal from '../../../src/Modal'

function BasicPage(props) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["c" /* Page */], {
    children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__Basic_Alert__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__Basic_Badge__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__Basic_Breadcrumb__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_5__Basic_Button__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6__Basic_Dropdown__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__Basic_Jumbotron__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__Basic_Progress__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__Basic_Collapse__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__Basic_Layout__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_14__Basic_List__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__Basic_Tabs__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_15__Basic_Tooltip__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_12__Basic_Popovers__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_13__Basic_Pagination__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_16__Basic_Media__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_17__Basic_Spinner__["a" /* default */])]
  });
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* **********************************************
     Begin prism-core.js
********************************************** */
var _self = typeof window !== 'undefined' ? window // if in browser
: typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
: {} // if in node js
;
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */


var Prism = function () {
  // Private helper vars
  var lang = /\blang(?:uage)?-([\w-]+)\b/i;
  var uniqueId = 0;

  var _ = _self.Prism = {
    manual: _self.Prism && _self.Prism.manual,
    disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
    util: {
      encode: function (tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
        } else if (_.util.type(tokens) === 'Array') {
          return tokens.map(_.util.encode);
        } else {
          return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
        }
      },
      type: function (o) {
        return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
      },
      objId: function (obj) {
        if (!obj['__id']) {
          Object.defineProperty(obj, '__id', {
            value: ++uniqueId
          });
        }

        return obj['__id'];
      },
      // Deep clone a language definition (e.g. to extend it)
      clone: function (o, visited) {
        var type = _.util.type(o);

        visited = visited || {};

        switch (type) {
          case 'Object':
            if (visited[_.util.objId(o)]) {
              return visited[_.util.objId(o)];
            }

            var clone = {};
            visited[_.util.objId(o)] = clone;

            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = _.util.clone(o[key], visited);
              }
            }

            return clone;

          case 'Array':
            if (visited[_.util.objId(o)]) {
              return visited[_.util.objId(o)];
            }

            var clone = [];
            visited[_.util.objId(o)] = clone;
            o.forEach(function (v, i) {
              clone[i] = _.util.clone(v, visited);
            });
            return clone;
        }

        return o;
      }
    },
    languages: {
      extend: function (id, redef) {
        var lang = _.util.clone(_.languages[id]);

        for (var key in redef) {
          lang[key] = redef[key];
        }

        return lang;
      },

      /**
       * Insert a token before another token in a language literal
       * As this needs to recreate the object (we cannot actually insert before keys in object literals),
       * we cannot just provide an object, we need anobject and a key.
       * @param inside The key (or language id) of the parent
       * @param before The key to insert before. If not provided, the function appends instead.
       * @param insert Object with the key/value pairs to insert
       * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
       */
      insertBefore: function (inside, before, insert, root) {
        root = root || _.languages;
        var grammar = root[inside];

        if (arguments.length == 2) {
          insert = arguments[1];

          for (var newToken in insert) {
            if (insert.hasOwnProperty(newToken)) {
              grammar[newToken] = insert[newToken];
            }
          }

          return grammar;
        }

        var ret = {};

        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            }

            ret[token] = grammar[token];
          }
        } // Update references in other language definitions


        _.languages.DFS(_.languages, function (key, value) {
          if (value === root[inside] && key != inside) {
            this[key] = ret;
          }
        });

        return root[inside] = ret;
      },
      // Traverse a language definition with Depth First Search
      DFS: function (o, callback, type, visited) {
        visited = visited || {};

        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);

            if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
              visited[_.util.objId(o[i])] = true;

              _.languages.DFS(o[i], callback, null, visited);
            } else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
              visited[_.util.objId(o[i])] = true;

              _.languages.DFS(o[i], callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},
    highlightAll: function (async, callback) {
      _.highlightAllUnder(document, async, callback);
    },
    highlightAllUnder: function (container, async, callback) {
      var env = {
        callback: callback,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };

      _.hooks.run("before-highlightall", env);

      var elements = env.elements || container.querySelectorAll(env.selector);

      for (var i = 0, element; element = elements[i++];) {
        _.highlightElement(element, async === true, env.callback);
      }
    },
    highlightElement: function (element, async, callback) {
      // Find language
      var language,
          grammar,
          parent = element;

      while (parent && !lang.test(parent.className)) {
        parent = parent.parentNode;
      }

      if (parent) {
        language = (parent.className.match(lang) || [, ''])[1].toLowerCase();
        grammar = _.languages[language];
      } // Set language on the element, if not present


      element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

      if (element.parentNode) {
        // Set language on the parent, for styling
        parent = element.parentNode;

        if (/pre/i.test(parent.nodeName)) {
          parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
        }
      }

      var code = element.textContent;
      var env = {
        element: element,
        language: language,
        grammar: grammar,
        code: code
      };

      _.hooks.run('before-sanity-check', env);

      if (!env.code || !env.grammar) {
        if (env.code) {
          _.hooks.run('before-highlight', env);

          env.element.textContent = env.code;

          _.hooks.run('after-highlight', env);
        }

        _.hooks.run('complete', env);

        return;
      }

      _.hooks.run('before-highlight', env);

      if (async && _self.Worker) {
        var worker = new Worker(_.filename);

        worker.onmessage = function (evt) {
          env.highlightedCode = evt.data;

          _.hooks.run('before-insert', env);

          env.element.innerHTML = env.highlightedCode;
          callback && callback.call(env.element);

          _.hooks.run('after-highlight', env);

          _.hooks.run('complete', env);
        };

        worker.postMessage(JSON.stringify({
          language: env.language,
          code: env.code,
          immediateClose: true
        }));
      } else {
        env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

        _.hooks.run('before-insert', env);

        env.element.innerHTML = env.highlightedCode;
        callback && callback.call(element);

        _.hooks.run('after-highlight', env);

        _.hooks.run('complete', env);
      }
    },
    highlight: function (text, grammar, language) {
      var env = {
        code: text,
        grammar: grammar,
        language: language
      };

      _.hooks.run('before-tokenize', env);

      env.tokens = _.tokenize(env.code, env.grammar);

      _.hooks.run('after-tokenize', env);

      return Token.stringify(_.util.encode(env.tokens), env.language);
    },
    matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
      var Token = _.Token;

      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }

        if (token == target) {
          return;
        }

        var patterns = grammar[token];
        patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];

        for (var j = 0; j < patterns.length; ++j) {
          var pattern = patterns[j],
              inside = pattern.inside,
              lookbehind = !!pattern.lookbehind,
              greedy = !!pattern.greedy,
              lookbehindLength = 0,
              alias = pattern.alias;

          if (greedy && !pattern.pattern.global) {
            // Without the global flag, lastIndex won't work
            var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
            pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
          }

          pattern = pattern.pattern || pattern; // Don’t cache length as it changes during the loop

          for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {
            var str = strarr[i];

            if (strarr.length > text.length) {
              // Something went terribly wrong, ABORT, ABORT!
              return;
            }

            if (str instanceof Token) {
              continue;
            }

            if (greedy && i != strarr.length - 1) {
              pattern.lastIndex = pos;
              var match = pattern.exec(text);

              if (!match) {
                break;
              }

              var from = match.index + (lookbehind ? match[1].length : 0),
                  to = match.index + match[0].length,
                  k = i,
                  p = pos;

              for (var len = strarr.length; k < len && (p < to || !strarr[k].type && !strarr[k - 1].greedy); ++k) {
                p += strarr[k].length; // Move the index i to the element in strarr that is closest to from

                if (from >= p) {
                  ++i;
                  pos = p;
                }
              } // If strarr[i] is a Token, then the match starts inside another Token, which is invalid


              if (strarr[i] instanceof Token) {
                continue;
              } // Number of tokens to delete and replace with the new match


              delNum = k - i;
              str = text.slice(pos, p);
              match.index -= pos;
            } else {
              pattern.lastIndex = 0;
              var match = pattern.exec(str),
                  delNum = 1;
            }

            if (!match) {
              if (oneshot) {
                break;
              }

              continue;
            }

            if (lookbehind) {
              lookbehindLength = match[1] ? match[1].length : 0;
            }

            var from = match.index + lookbehindLength,
                match = match[0].slice(lookbehindLength),
                to = from + match.length,
                before = str.slice(0, from),
                after = str.slice(to);
            var args = [i, delNum];

            if (before) {
              ++i;
              pos += before.length;
              args.push(before);
            }

            var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
            args.push(wrapped);

            if (after) {
              args.push(after);
            }

            Array.prototype.splice.apply(strarr, args);
            if (delNum != 1) _.matchGrammar(text, strarr, grammar, i, pos, true, token);
            if (oneshot) break;
          }
        }
      }
    },
    tokenize: function (text, grammar, language) {
      var strarr = [text];
      var rest = grammar.rest;

      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }

        delete grammar.rest;
      }

      _.matchGrammar(text, strarr, grammar, 0, 0, false);

      return strarr;
    },
    hooks: {
      all: {},
      add: function (name, callback) {
        var hooks = _.hooks.all;
        hooks[name] = hooks[name] || [];
        hooks[name].push(callback);
      },
      run: function (name, env) {
        var callbacks = _.hooks.all[name];

        if (!callbacks || !callbacks.length) {
          return;
        }

        for (var i = 0, callback; callback = callbacks[i++];) {
          callback(env);
        }
      }
    }
  };

  var Token = _.Token = function (type, content, alias, matchedStr, greedy) {
    this.type = type;
    this.content = content;
    this.alias = alias; // Copy of the full string this token was created from

    this.length = (matchedStr || "").length | 0;
    this.greedy = !!greedy;
  };

  Token.stringify = function (o, language, parent) {
    if (typeof o == 'string') {
      return o;
    }

    if (_.util.type(o) === 'Array') {
      return o.map(function (element) {
        return Token.stringify(element, language, o);
      }).join('');
    }

    var env = {
      type: o.type,
      content: Token.stringify(o.content, language, parent),
      tag: 'span',
      classes: ['token', o.type],
      attributes: {},
      language: language,
      parent: parent
    };

    if (o.alias) {
      var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
      Array.prototype.push.apply(env.classes, aliases);
    }

    _.hooks.run('wrap', env);

    var attributes = Object.keys(env.attributes).map(function (name) {
      return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
    }).join(' ');
    return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
  };

  if (!_self.document) {
    if (!_self.addEventListener) {
      // in Node.js
      return _self.Prism;
    }

    if (!_.disableWorkerMessageHandler) {
      // In worker
      _self.addEventListener('message', function (evt) {
        var message = JSON.parse(evt.data),
            lang = message.language,
            code = message.code,
            immediateClose = message.immediateClose;

        _self.postMessage(_.highlight(code, _.languages[lang], lang));

        if (immediateClose) {
          _self.close();
        }
      }, false);
    }

    return _self.Prism;
  } //Get current script and highlight


  var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

  if (script) {
    _.filename = script.src;

    if (!_.manual && !script.hasAttribute('data-manual')) {
      if (document.readyState !== "loading") {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(_.highlightAll);
        } else {
          window.setTimeout(_.highlightAll, 16);
        }
      } else {
        document.addEventListener('DOMContentLoaded', _.highlightAll);
      }
    }
  }

  return _self.Prism;
}();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Prism;
} // hack for components to work correctly in node.js


if (typeof global !== 'undefined') {
  global.Prism = Prism;
}
/* **********************************************
     Begin prism-markup.js
********************************************** */


Prism.languages.markup = {
  'comment': /<!--[\s\S]*?-->/,
  'prolog': /<\?[\s\S]+?\?>/,
  'doctype': /<!DOCTYPE[\s\S]+?>/i,
  'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'attr-value': {
        pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
        inside: {
          'punctuation': [/^=/, {
            pattern: /(^|[^\\])["']/,
            lookbehind: true
          }]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': /&#?[\da-z]{1,8};/i
};
Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity']; // Plugin to make entity title show the real entity, idea by Roman Komarov

Prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
  'comment': /\/\*[\s\S]*?\*\//,
  'atrule': {
    pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
    inside: {
      'rule': /@[\w-]+/ // See rest below

    }
  },
  'url': /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
  'selector': /[^{}\s][^{};]*?(?=\s*\{)/,
  'string': {
    pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
  'important': /\B!important\b/i,
  'function': /[-a-z0-9]+(?=\()/i,
  'punctuation': /[(){};:]/
};
Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

if (Prism.languages.markup) {
  Prism.languages.insertBefore('markup', 'tag', {
    'style': {
      pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
      lookbehind: true,
      inside: Prism.languages.css,
      alias: 'language-css',
      greedy: true
    }
  });
  Prism.languages.insertBefore('inside', 'attr-value', {
    'style-attr': {
      pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
      inside: {
        'attr-name': {
          pattern: /^\s*style/i,
          inside: Prism.languages.markup.tag.inside
        },
        'punctuation': /^\s*=\s*['"]|['"]\s*$/,
        'attr-value': {
          pattern: /.+/i,
          inside: Prism.languages.css
        }
      },
      alias: 'language-css'
    }
  }, Prism.languages.markup.tag);
}
/* **********************************************
     Begin prism-clike.js
********************************************** */


Prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: true,
    inside: {
      punctuation: /[.\\]/
    }
  },
  'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  'boolean': /\b(?:true|false)\b/,
  'function': /[a-z0-9_]+(?=\()/i,
  'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  'punctuation': /[{}[\];(),.:]/
};
/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
  'keyword': /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
  'number': /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
  'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});
Prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: true,
    greedy: true
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
    alias: 'function'
  },
  'constant': /\b[A-Z][A-Z\d_]*\b/
});
Prism.languages.insertBefore('javascript', 'string', {
  'template-string': {
    pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
    greedy: true,
    inside: {
      'interpolation': {
        pattern: /\${[^}]+}/,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\${|}$/,
            alias: 'punctuation'
          },
          rest: null // See below

        }
      },
      'string': /[\s\S]+/
    }
  }
});
Prism.languages.javascript['template-string'].inside['interpolation'].inside.rest = Prism.languages.javascript;

if (Prism.languages.markup) {
  Prism.languages.insertBefore('markup', 'tag', {
    'script': {
      pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
      lookbehind: true,
      inside: Prism.languages.javascript,
      alias: 'language-javascript',
      greedy: true
    }
  });
}

Prism.languages.js = Prism.languages.javascript;
/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
  if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
    return;
  }

  self.Prism.fileHighlight = function () {
    var Extensions = {
      'js': 'javascript',
      'py': 'python',
      'rb': 'ruby',
      'ps1': 'powershell',
      'psm1': 'powershell',
      'sh': 'bash',
      'bat': 'batch',
      'h': 'c',
      'tex': 'latex'
    };
    Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
      var src = pre.getAttribute('data-src');
      var language,
          parent = pre;
      var lang = /\blang(?:uage)?-([\w-]+)\b/i;

      while (parent && !lang.test(parent.className)) {
        parent = parent.parentNode;
      }

      if (parent) {
        language = (pre.className.match(lang) || [, ''])[1];
      }

      if (!language) {
        var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
        language = Extensions[extension] || extension;
      }

      var code = document.createElement('code');
      code.className = 'language-' + language;
      pre.textContent = '';
      code.textContent = 'Loading…';
      pre.appendChild(code);
      var xhr = new XMLHttpRequest();
      xhr.open('GET', src, true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status < 400 && xhr.responseText) {
            code.textContent = xhr.responseText;
            Prism.highlightElement(code);
          } else if (xhr.status >= 400) {
            code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
          } else {
            code.textContent = '✖ Error: File does not exist or is empty';
          }
        }
      };

      xhr.send(null);
    });

    if (Prism.plugins.toolbar) {
      Prism.plugins.toolbar.registerButton('download-file', function (env) {
        var pre = env.element.parentNode;

        if (!pre || !/pre/i.test(pre.nodeName) || !pre.hasAttribute('data-src') || !pre.hasAttribute('data-download-link')) {
          return;
        }

        var src = pre.getAttribute('data-src');
        var a = document.createElement('a');
        a.textContent = pre.getAttribute('data-download-link-label') || 'Download';
        a.setAttribute('download', '');
        a.href = src;
        return a;
      });
    }
  };

  document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ }),
/* 118 */
/***/ (function(module, exports) {

(function (Prism) {
  var javascript = Prism.util.clone(Prism.languages.javascript);
  Prism.languages.jsx = Prism.languages.extend('markup', javascript);
  Prism.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i;
  Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i;
  Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i;
  Prism.languages.insertBefore('inside', 'attr-name', {
    'spread': {
      pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
      inside: {
        'punctuation': /\.{3}|[{}.]/,
        'attr-value': /\w+/
      }
    }
  }, Prism.languages.jsx.tag);
  Prism.languages.insertBefore('inside', 'attr-value', {
    'script': {
      // Allow for two levels of nesting
      pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
      inside: {
        'script-punctuation': {
          pattern: /^=(?={)/,
          alias: 'punctuation'
        },
        rest: Prism.languages.jsx
      },
      'alias': 'language-javascript'
    }
  }, Prism.languages.jsx.tag); // The following will handle plain text inside tags

  var stringifyToken = function (token) {
    if (!token) {
      return '';
    }

    if (typeof token === 'string') {
      return token;
    }

    if (typeof token.content === 'string') {
      return token.content;
    }

    return token.content.map(stringifyToken).join('');
  };

  var walkTokens = function (tokens) {
    var openedTags = [];

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;

      if (typeof token !== 'string') {
        if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
          // We found a tag, now find its kind
          if (token.content[0].content[0].content === '</') {
            // Closing tag
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              // Pop matching opening tag
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === '/>') {// Autoclosed tag, ignore
            } else {
              // Opening tag
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {
          // Here we might have entered a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {
          // Here we might have left a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }

      if (notTagNorBrace || typeof token === 'string') {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          // Here we are inside a tag, and not inside a JSX context.
          // That's plain text: drop any tokens matched.
          var plainText = stringifyToken(token); // And merge text with adjacent text

          if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }

          if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }

          tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
        }
      }

      if (token.content && typeof token.content !== 'string') {
        walkTokens(token.content);
      }
    }
  };

  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'jsx' && env.language !== 'tsx') {
      return;
    }

    walkTokens(env.tokens);
  });
})(Prism);

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Alert__ = __webpack_require__(61);




/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Section */], {
    "title": "Alerts",
    children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h3", null, "Standard alert box", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Alert__["a" /* default */], {
          "color": "success",
          children: ["Some cool text in a ", Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "b", null, "success", 16), " alert box!"]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Alert__["a" /* default */], {
          "color": "warning",
          children: ["Some cool text in a ", Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "b", null, "warning", 16), " alert box!"]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Alert__["a" /* default */], {
          "color": "danger",
          children: ["Some cool text in a ", Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "b", null, "danger", 16), " alert box!"]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Alert color=\"success\">\n  Some cool text in a <b>success</b> alert box!\n</Alert>\n<Alert color=\"warning\">\n  Some cool text in a <b>warning</b> alert box!\n</Alert>\n<Alert color=\"danger\">\n  Some cool text in a <b>danger</b> alert box!\n</Alert>"
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h3", null, "Alert box with close button", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Alert__["a" /* default */], {
          "onClose": function onClose() {},
          children: ["Some cool text in a ", Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "b", null, "danger", 16), " alert box!"]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Alert onClose={() => {}}>\n  Some cool text in a <b>danger</b> alert box!\n</Alert>"
        })]
      })]
    })]
  });
});

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Badge__ = __webpack_require__(46);




/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Section */], {
    "title": "Badges",
    children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "Small and adaptive tag for adding context to just about any content.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h2", null, [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["e" /* createTextVNode */])("Some nice text "), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Badge__["a" /* default */], {
          children: "new"
        })], 4), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h3", null, [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["e" /* createTextVNode */])("Some nice text "), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Badge__["a" /* default */], {
          children: "new"
        })], 4), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h4", null, [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["e" /* createTextVNode */])("Some nice text "), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Badge__["a" /* default */], {
          children: "new"
        })], 4), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<h2>Some nice text <Badge>new</Badge></h2>\n<h3>Some nice text <Badge>new</Badge></h3>\n<h4>Some nice text <Badge>new</Badge></h4>"
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h5", null, [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["e" /* createTextVNode */])("Some nice text "), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Badge__["a" /* default */], {
          "pill": true,
          "color": "danger",
          children: "10"
        })], 4), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["e" /* createTextVNode */])("Some nice text "), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Badge__["a" /* default */], {
          "pill": true,
          "color": "danger",
          children: "10"
        })], 4), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<h5>Some nice text <Badge pill color=\"danger\">10</Badge></h5>\n<p>Some nice text <Badge pill color=\"danger\">10</Badge></p>"
        })]
      })]
    })]
  });
});

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Breadcrumb__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_BreadcrumbItem__ = __webpack_require__(63);





/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Section */], {
    "title": "Breadcrumbs",
    children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["e" /* createTextVNode */])("Indicate the current page\u2019s location within a navigational hierarchy. Separators are automatically added in CSS through "), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "a", null, Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "code", "highlighter-rouge", "::before", 16), 2, {
        "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
      }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["e" /* createTextVNode */])(" and "), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "a", null, [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["e" /* createTextVNode */])(" "), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "code", "highlighter-rouge", "content", 16)], 4, {
        "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/content"
      }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["e" /* createTextVNode */])(".")], 4)
    }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Breadcrumb__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_BreadcrumbItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "a", null, "Home", 16, {
              "href": "#"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_BreadcrumbItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "a", null, "Section", 16, {
              "href": "#"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_BreadcrumbItem__["a" /* default */], {
            "active": "true",
            children: "This page"
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Breadcrumb>\n  <BreadcrumbItem>\n    <a href=\"#\">Home</a>\n  </BreadcrumbItem>\n  <BreadcrumbItem>\n    <a href=\"#\">Section</a>\n  </BreadcrumbItem>\n  <BreadcrumbItem active=\"true\">\n    This page\n  </BreadcrumbItem>\n</Breadcrumb>"
        })]
      })
    })]
  });
});

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_Button__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_ButtonGroup__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_ButtonToolbar__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_ButtonDropdown__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_DropdownToggle__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_DropdownMenu__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_DropdownItem__ = __webpack_require__(26);




















/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "div", null, [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["e" /* Section */], {
    "title": "Buttons",
    children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "p", null, "Use Bootstrap\u2019s custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["f" /* Stage */], {
      children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "h3", null, "Standard Buttons", 16), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "color": "primary",
          children: "primary"
        }), ' ', Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "color": "secondary",
          children: "secondary"
        }), ' ', Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "color": "success",
          children: "success"
        }), ' ', Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "color": "info",
          children: "info"
        }), ' ', Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "color": "warning",
          children: "warning"
        }), ' ', Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "color": "danger",
          children: "danger"
        }), ' ', Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "color": "link",
          children: "link"
        }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["a" /* Code */], {
          children: "<Button color=\"primary\">primary</Button>\n<Button color=\"secondary\">secondary</Button>\n<Button color=\"success\">success</Button>\n<Button color=\"info\">info</Button>\n<Button color=\"warning\">warning</Button>\n<Button color=\"danger\">danger</Button>\n<Button color=\"link\">link</Button>"
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "h3", null, "Outline Buttons", 16), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "outline": true,
          "color": "primary",
          children: "primary"
        }), ' ', Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "outline": true,
          "color": "secondary",
          children: "secondary"
        }), ' ', Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "outline": true,
          "color": "success",
          children: "success"
        }), ' ', Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "outline": true,
          "color": "info",
          children: "info"
        }), ' ', Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "outline": true,
          "color": "warning",
          children: "warning"
        }), ' ', Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "outline": true,
          "color": "danger",
          children: "danger"
        }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["a" /* Code */], {
          children: "<Button outline color=\"primary\">primary</Button>\n<Button outline color=\"secondary\">secondary</Button>\n<Button outline color=\"success\">success</Button>\n<Button outline color=\"info\">info</Button>\n<Button outline color=\"warning\">warning</Button>\n<Button outline color=\"danger\">danger</Button>"
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "h3", null, "Different sizes", 16), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "color": "primary",
          "size": "lg",
          children: "Large Button"
        }), ' ', Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "color": "secondary",
          "size": "lg",
          children: "Large Button"
        }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["a" /* Code */], {
          children: "<Button color=\"primary\" size=\"lg\">Large Button</Button>\n<Button color=\"secondary\" size=\"lg\">Large Button</Button>"
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "color": "primary",
          "size": "sm",
          children: "Small Button"
        }), ' ', Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "color": "secondary",
          "size": "sm",
          children: "Small Button"
        }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["a" /* Code */], {
          children: "<Button color=\"primary\" size=\"sm\">Small Button</Button>\n<Button color=\"secondary\" size=\"sm\">Small Button</Button>"
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "h3", null, "Block Level Buttons", 16), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "color": "primary",
          "size": "lg",
          "block": true,
          children: "Block level button"
        }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "color": "secondary",
          "size": "lg",
          "block": true,
          children: "Block level button"
        }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["a" /* Code */], {
          children: "<Button color=\"primary\" size=\"lg\" block>Block level button</Button>\n<Button color=\"secondary\" size=\"lg\" block>Block level button</Button>"
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "h3", null, "Disabled Buttons", 16), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "color": "primary",
          "size": "lg",
          "disabled": true,
          children: "Primary button"
        }), ' ', Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
          "color": "secondary",
          "size": "lg",
          "disabled": true,
          children: "Button"
        }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["a" /* Code */], {
          children: "<Button color=\"primary\" size=\"lg\" disabled>Primary button</Button>\n<Button color=\"secondary\" size=\"lg\" disabled>Button</Button>"
        })]
      })]
    })]
  }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["e" /* Section */], {
    "title": "Radio Buttons",
    children: Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, RadioButtonStage)
  }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["e" /* Section */], {
    "title": "Button Group",
    children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "p", null, "Group a series of buttons together on a single line with the button group.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_12__src_ButtonGroup__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
            children: "Left"
          }), ' ', Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
            children: "Middle"
          }), ' ', Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
            children: "Right"
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["a" /* Code */], {
          children: "<ButtonGroup>\n  <Button>Left</Button>\n  <Button>Middle</Button>\n  <Button>Right</Button>\n</ButtonGroup>"
        })]
      })
    })]
  }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["e" /* Section */], {
    "title": "Button Toolbar",
    children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "p", null, "Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_13__src_ButtonToolbar__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_12__src_ButtonGroup__["a" /* default */], {
            "className": "mr-2",
            children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
              children: "Store"
            }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
              children: "Update"
            }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
              children: "Stay"
            }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
              children: "Flow"
            })]
          }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_12__src_ButtonGroup__["a" /* default */], {
            "className": "mr-2",
            children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
              children: "5"
            }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
              children: "6"
            }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
              children: "7"
            })]
          }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_12__src_ButtonGroup__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
              children: "8"
            })
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["a" /* Code */], {
          children: "<ButtonToolbar>\n  <ButtonGroup className=\"mr-2\">\n    <Button>Store</Button>\n    <Button>Update</Button>\n    <Button>Stay</Button>\n    <Button>Flow</Button>\n  </ButtonGroup>\n  <ButtonGroup className=\"mr-2\">\n    <Button>5</Button>\n    <Button>6</Button>\n    <Button>7</Button>\n  </ButtonGroup>\n  <ButtonGroup>\n    <Button>8</Button>\n  </ButtonGroup>\n</ButtonToolbar>"
        })]
      })
    })]
  }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["e" /* Section */], {
    "title": "Button Vertical",
    children: Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["f" /* Stage */], {
      children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_12__src_ButtonGroup__["a" /* default */], {
          "vertical": true,
          children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
            children: "One"
          }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
            children: "Two"
          }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, SampleDropdownButton, {
            "caret": true,
            children: "Drop me!"
          }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_12__src_ButtonGroup__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
              children: "Split drop!"
            }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, SampleDropdownButton, {
              "split": true
            })]
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["a" /* Code */], {
          children: "<ButtonGroup vertical>\n  <Button>One</Button>\n  <Button>Two</Button>\n  <SampleDropdownButton caret>Drop me!</SampleDropdownButton>\n  <ButtonGroup>\n    <Button>Split drop!</Button><SampleDropdownButton split />\n  </ButtonGroup>\n</ButtonGroup>"
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["b" /* Narrative */], {
          children: "This is the code to create the dropdown button:"
        }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["a" /* Code */], {
          children: "class SampleDropdownButton extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      isOpen: false\n    }\n\n    this.doToggle = this.doToggle.bind(this)\n  }\n\n  doToggle() {\n    this.setState({\n      isOpen: !this.state.isOpen\n    })\n  }\n\n  render({ children, ...props }) {\n    return (\n      <ButtonDropdown isOpen={this.state.isOpen} toggle={this.doToggle}>\n        <DropdownToggle {...props}>{children}</DropdownToggle>\n        <DropdownMenu>\n          <DropdownItem>Item 1</DropdownItem>\n          <DropdownItem>Item 2</DropdownItem>\n          <DropdownItem>Item 3</DropdownItem>\n        </DropdownMenu>\n      </ButtonDropdown>\n    )\n  }\n}"
        })]
      })]
    })
  })], 4);
});

var RadioButtonStage =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(RadioButtonStage, _Component);

  function RadioButtonStage(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, RadioButtonStage);

    _this = __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(RadioButtonStage).call(this, props));
    _this.state = {
      cSelected: []
    };
    _this.onRadioBtnClick = _this.onRadioBtnClick.bind(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.onCheckboxBtnClick = _this.onCheckboxBtnClick.bind(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(RadioButtonStage, [{
    key: "onRadioBtnClick",
    value: function onRadioBtnClick(rSelected) {
      this.setState({
        rSelected: rSelected
      });
    }
  }, {
    key: "onCheckboxBtnClick",
    value: function onCheckboxBtnClick(selected) {
      var index = this.state.cSelected.indexOf(selected);

      if (index < 0) {
        this.state.cSelected.push(selected);
      } else {
        this.state.cSelected.splice(index, 1);
      }

      this.setState({
        cSelected: __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_toConsumableArray___default()(this.state.cSelected)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["f" /* Stage */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["d" /* Scene */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "h5", null, "Radio Buttons", 16), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_12__src_ButtonGroup__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
              "color": "primary",
              "onClick": function onClick() {
                return _this2.onRadioBtnClick(1);
              },
              "active": this.state.rSelected === 1,
              children: "One"
            }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
              "color": "primary",
              "onClick": function onClick() {
                return _this2.onRadioBtnClick(2);
              },
              "active": this.state.rSelected === 2,
              children: "Two"
            }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
              "color": "primary",
              "onClick": function onClick() {
                return _this2.onRadioBtnClick(3);
              },
              "active": this.state.rSelected === 3,
              children: "Three"
            })]
          }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "p", null, [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["e" /* createTextVNode */])("Selected: "), this.state.rSelected], 0), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["a" /* Code */], {
            children: "<ButtonGroup>\n  <Button color=\"primary\" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>\n  <Button color=\"primary\" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>\n  <Button color=\"primary\" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>\n</ButtonGroup>"
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["d" /* Scene */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "h5", null, "Checkbox Buttons", 16), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_12__src_ButtonGroup__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
              "color": "primary",
              "onClick": function onClick() {
                return _this2.onCheckboxBtnClick(1);
              },
              "active": this.state.cSelected.includes(1),
              children: "One"
            }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
              "color": "primary",
              "onClick": function onClick() {
                return _this2.onCheckboxBtnClick(2);
              },
              "active": this.state.cSelected.includes(2),
              children: "Two"
            }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Button__["a" /* default */], {
              "color": "primary",
              "onClick": function onClick() {
                return _this2.onCheckboxBtnClick(3);
              },
              "active": this.state.cSelected.includes(3),
              children: "Three"
            })]
          }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["f" /* createVNode */])(1, "p", null, [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["e" /* createTextVNode */])("Selected: "), JSON.stringify(this.state.cSelected)], 0), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__components__["a" /* Code */], {
            children: "<ButtonGroup>\n  <Button color=\"primary\" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>\n  <Button color=\"primary\" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>\n  <Button color=\"primary\" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>\n</ButtonGroup>"
          })]
        })]
      });
    }
  }]);

  return RadioButtonStage;
}(__WEBPACK_IMPORTED_MODULE_9_inferno__["a" /* Component */]);

var SampleDropdownButton =
/*#__PURE__*/
function (_Component2) {
  __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(SampleDropdownButton, _Component2);

  function SampleDropdownButton(props) {
    var _this3;

    __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, SampleDropdownButton);

    _this3 = __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(SampleDropdownButton).call(this, props));
    _this3.state = {
      isOpen: false
    };
    _this3.doToggle = _this3.doToggle.bind(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this3)));
    return _this3;
  }

  __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(SampleDropdownButton, [{
    key: "doToggle",
    value: function doToggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var children = _ref.children,
          props = __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["children"]);

      return Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_14__src_ButtonDropdown__["a" /* default */], {
        "isOpen": this.state.isOpen,
        "toggle": this.doToggle,
        children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_15__src_DropdownToggle__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({}, props, {
          children: children
        }))), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_16__src_DropdownMenu__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_17__src_DropdownItem__["a" /* default */], {
            children: "Item 1"
          }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_17__src_DropdownItem__["a" /* default */], {
            children: "Item 2"
          }), Object(__WEBPACK_IMPORTED_MODULE_9_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_17__src_DropdownItem__["a" /* default */], {
            children: "Item 3"
          })]
        })]
      });
    }
  }]);

  return SampleDropdownButton;
}(__WEBPACK_IMPORTED_MODULE_9_inferno__["a" /* Component */]);

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(124);

var iterableToArray = __webpack_require__(125);

var nonIterableSpread = __webpack_require__(126);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 124 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 125 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 126 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_Dropdown__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_DropdownToggle__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_DropdownMenu__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_DropdownItem__ = __webpack_require__(26);














/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["e" /* Section */], {
    "title": "Dropdown Menu",
    children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "p", null, "Simple dropdown menu.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, DropdownExample), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["a" /* Code */], {
          children: "class DropdownExample extends Component {\n  constructor(props) {\n    super(props);\n\n    this.toggle = this.toggle.bind(this);\n    this.state = {\n      dropdownOpen: false\n    };\n  }\n\n  toggle() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen\n    });\n  }\n\n  render() {\n    return (\n      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>\n        <DropdownToggle caret>\n          Dropdown\n        </DropdownToggle>\n        <DropdownMenu>\n          <DropdownItem header>Header</DropdownItem>\n          <DropdownItem disabled>Action</DropdownItem>\n          <DropdownItem>Another Action</DropdownItem>\n          <DropdownItem divider />\n          <DropdownItem>Another Action</DropdownItem>\n        </DropdownMenu>\n      </Dropdown>\n    );\n  }\n}"
        })]
      })
    })]
  });
});

var DropdownExample =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(DropdownExample, _Component);

  function DropdownExample(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, DropdownExample);

    _this = __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(DropdownExample).call(this, props));
    _this.toggle = _this.toggle.bind(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.state = {
      dropdownOpen: false
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(DropdownExample, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__src_Dropdown__["a" /* default */], {
        "isOpen": this.state.dropdownOpen,
        "toggle": this.toggle,
        children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_DropdownToggle__["a" /* default */], {
          "caret": true,
          children: "Dropdown"
        }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__src_DropdownMenu__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_DropdownItem__["a" /* default */], {
            "header": true,
            children: "Header"
          }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_DropdownItem__["a" /* default */], {
            "disabled": true,
            children: "Action"
          }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_DropdownItem__["a" /* default */], {
            children: "Another Action"
          }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_DropdownItem__["a" /* default */], {
            "divider": true
          }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_DropdownItem__["a" /* default */], {
            children: "Another Action"
          })]
        })]
      });
    }
  }]);

  return DropdownExample;
}(__WEBPACK_IMPORTED_MODULE_6_inferno__["a" /* Component */]);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Jumbotron__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Button__ = __webpack_require__(13);





/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Section */], {
    "title": "Jumbotron",
    children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "The jumbotron or hero is a content section that gives a nice entry point to important content", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Jumbotron__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h1", "display-3", "Hello, world!", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", "lead", "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "hr", "my-2"), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "It uses utility classes for typgraphy and spacing to space content out within the larger container.", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", "lead", Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Button__["a" /* default */], {
            "color": "primary",
            children: "Learn More"
          }), 2)]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Jumbotron>\n  <h1 className=\"display-3\">Hello, world!</h1>\n  <p className=\"lead\">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>\n  <hr className=\"my-2\" />\n  <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>\n  <p className=\"lead\">\n    <Button color=\"primary\">Learn More</Button>\n  </p>\n</Jumbotron>"
        })]
      })
    })]
  });
});

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Progress__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Button__ = __webpack_require__(13);





/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Section */], {
    "title": "Progress Bars",
    children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "Use progress bars to give feedback on a process completing.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "div", "text-center", "0%", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Progress__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "div", "text-center", "25%", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Progress__["a" /* default */], {
          "value": "25"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "div", "text-center", "50%", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Progress__["a" /* default */], {
          "value": 50
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "div", "text-center", "75%", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Progress__["a" /* default */], {
          "value": 75
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "div", "text-center", "100%", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Progress__["a" /* default */], {
          "value": "100"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "div", "text-center", "Multiple bars", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Progress__["a" /* default */], {
          "multi": true,
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Progress__["a" /* default */], {
            "bar": true,
            "value": "15"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Progress__["a" /* default */], {
            "bar": true,
            "color": "success",
            "value": "30"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Progress__["a" /* default */], {
            "bar": true,
            "color": "info",
            "value": "25"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Progress__["a" /* default */], {
            "bar": true,
            "color": "warning",
            "value": "20"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Progress__["a" /* default */], {
            "bar": true,
            "color": "danger",
            "value": "5"
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<div className=\"text-center\">0%</div>\n<Progress />\n<div className=\"text-center\">25%</div>\n<Progress value=\"25\" />\n<div className=\"text-center\">50%</div>\n<Progress value={50} />\n<div className=\"text-center\">75%</div>\n<Progress value={75} />\n<div className=\"text-center\">100%</div>\n<Progress value=\"100\" />\n<div className=\"text-center\">Multiple bars</div>\n<Progress multi>\n  <Progress bar value=\"15\" />\n  <Progress bar color=\"success\" value=\"30\" />\n  <Progress bar color=\"info\" value=\"25\" />\n  <Progress bar color=\"warning\" value=\"20\" />\n  <Progress bar color=\"danger\" value=\"5\" />\n</Progress>"
        })]
      })
    })]
  });
});

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_Button__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_Collapse__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_Card_Card__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_Card_CardBody__ = __webpack_require__(36);














/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["e" /* Section */], {
    "title": "Collapse",
    children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "p", null, "Toggle visibility of content with animation.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["f" /* Stage */], {
      children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "h3", null, "Default open", 16), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["d" /* Scene */], {
        children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, ToggleCollapse, {
          "defaultOpen": true
        })
      }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "h3", null, "Default closed", 16), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["d" /* Scene */], {
        children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, ToggleCollapse, {
          "defaultOpen": false
        })
      }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "h3", null, "Example code:", 16), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["d" /* Scene */], {
        children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["a" /* Code */], {
          children: "class ToggleCollapse extends Component {\n  constructor(props) {\n    super(props)\n\n    this.state = {\n      isOpen: false\n    }\n\n    this.doToggle = this.doToggle.bind(this)\n  }\n\n  doToggle() {\n    this.setState({\n      isOpen: !this.state.isOpen\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.doToggle}>Do toggle!</Button>\n        <Collapse isOpen={this.state.isOpen}>\n          <Card className=\"ExampleCollapseContainer\">\n            <CardBody>\n              <p>My phone number is only two digits off from a local pizzeria\u2019s. I\u2019ve spent my entire life getting occasional wrong-dials from people who accidentally fumbled and hit the wrong number, looking for pizza. One night, it is two am, and our phone rings. I let it go to machine, and am greeted by a rather amusing voicemail from a very drunk man called \u201CGordon\u201D, who is practically begging for pizza to be delivered to his dorm room at the local college. I try to go back to sleep, but \u201CGordon\u201D calls back again\u2026 and again. On the third call, I answer the phone.</p>\n            </CardBody>\n          </Card>\n        </Collapse>  \n      </div>  \n    )\n  }\n}"
        })
      })]
    })]
  });
});

var ToggleCollapse =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(ToggleCollapse, _Component);

  function ToggleCollapse(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, ToggleCollapse);

    _this = __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(ToggleCollapse).call(this, props));
    _this.state = {
      isOpen: props.defaultOpen
    };
    _this.doToggle = _this.doToggle.bind(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(ToggleCollapse, [{
    key: "doToggle",
    value: function doToggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "div", null, [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__src_Button__["a" /* default */], {
        "onClick": this.doToggle,
        children: "Do toggle!"
      }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_Collapse__["a" /* default */], {
        "isOpen": this.state.isOpen,
        children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__src_Card_Card__["a" /* default */], {
          "className": "ExampleCollapseContainer",
          children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Card_CardBody__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "p", null, "My phone number is only two digits off from a local pizzeria\u2019s. I\u2019ve spent my entire life getting occasional wrong-dials from people who accidentally fumbled and hit the wrong number, looking for pizza. One night, it is two am, and our phone rings. I let it go to machine, and am greeted by a rather amusing voicemail from a very drunk man called \u201CGordon\u201D, who is practically begging for pizza to be delivered to his dorm room at the local college. I try to go back to sleep, but \u201CGordon\u201D calls back again\u2026 and again. On the third call, I answer the phone.", 16)
          })
        })
      })], 4);
    }
  }]);

  return ToggleCollapse;
}(__WEBPACK_IMPORTED_MODULE_6_inferno__["a" /* Component */]);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Container__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Row__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Col__ = __webpack_require__(49);






/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Section */], {
    "title": "Layout",
    "className": "ExampleLayout",
    children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "Organise content in rows and columns.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h3", null, "Standard alert box", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Container__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Row__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Col__["a" /* default */], {
              children: ".col"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Row__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Col__["a" /* default */], {
              children: ".col"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Col__["a" /* default */], {
              children: ".col"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Col__["a" /* default */], {
              children: ".col"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Col__["a" /* default */], {
              children: ".col"
            })]
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Row__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Col__["a" /* default */], {
              "xs": "3",
              children: ".col-3"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Col__["a" /* default */], {
              "xs": "auto",
              children: ".col-auto - variable width content"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Col__["a" /* default */], {
              "xs": "3",
              children: ".col-3"
            })]
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Row__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Col__["a" /* default */], {
              "xs": "6",
              children: ".col-6"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Col__["a" /* default */], {
              "xs": "6",
              children: ".col-6"
            })]
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Row__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Col__["a" /* default */], {
              "xs": "6",
              "sm": "4",
              children: ".col-6 .col-sm-4"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Col__["a" /* default */], {
              "xs": "6",
              "sm": "4",
              children: ".col-6 .col-sm-4"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Col__["a" /* default */], {
              "sm": "4",
              children: ".col .col-sm-4"
            })]
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Row__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Col__["a" /* default */], {
              "sm": {
                size: 6,
                push: 2,
                pull: 2,
                offset: 1
              },
              children: ".col .col-sm-6 .col-sm-push-2 .col-sm-pull-2 .col-sm-offset-2"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Row__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Col__["a" /* default */], {
              "sm": "12",
              "md": {
                size: 8,
                offset: 2
              },
              children: ".col .col-sm-12 .col-md-6 .col-md-offset-3"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Row__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Col__["a" /* default */], {
              "sm": {
                size: 'auto',
                offset: 1
              },
              children: ".col .col-sm .col-sm-offset-1"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Col__["a" /* default */], {
              "sm": {
                size: 'auto',
                offset: 1
              },
              children: ".col .col-sm .col-sm-offset-1"
            })]
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Container>\n  <Row>\n    <Col>.col</Col>\n  </Row>\n  <Row>\n    <Col>.col</Col>\n    <Col>.col</Col>\n    <Col>.col</Col>\n    <Col>.col</Col>\n  </Row>\n  <Row>\n    <Col xs=\"3\">.col-3</Col>\n    <Col xs=\"auto\">.col-auto - variable width content</Col>\n    <Col xs=\"3\">.col-3</Col>\n  </Row>\n  <Row>\n    <Col xs=\"6\">.col-6</Col>\n    <Col xs=\"6\">.col-6</Col>\n  </Row>\n  <Row>\n    <Col xs=\"6\" sm=\"4\">.col-6 .col-sm-4</Col>\n    <Col xs=\"6\" sm=\"4\">.col-6 .col-sm-4</Col>\n    <Col sm=\"4\">.col .col-sm-4</Col>\n  </Row>\n  <Row>\n    <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>.col .col-sm-6 .col-sm-push-2 .col-sm-pull-2 .col-sm-offset-2</Col>\n  </Row>\n  <Row>\n    <Col sm=\"12\" md={{ size: 8, offset: 2 }}>.col .col-sm-12 .col-md-6 .col-md-offset-3</Col>\n  </Row>\n  <Row>\n    <Col sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>\n    <Col sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>\n  </Row>\n</Container>"
        })]
      })]
    })]
  });
});

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_Navigation_Nav__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_Navigation_NavItem__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_Navigation_NavLink__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_TabContent__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_TabPane__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_Row__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_Col__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_Card_Card__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_Card_CardTitle__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_Card_CardText__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_Button__ = __webpack_require__(13);






















/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__components__["e" /* Section */], {
    "title": "Tabs",
    children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__components__["f" /* Stage */], {
      children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__components__["d" /* Scene */], {
        children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, TabExample)
      }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "h3", null, "Example Code:", 16), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__components__["d" /* Scene */], {
        children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__components__["a" /* Code */], {
          children: "class TabExample extends Component {\n  constructor(props) {\n    super(props);\n\n    this.toggle = this.toggle.bind(this);\n    this.state = {\n      activeTab: '1'\n    };\n  }\n\n  toggle(tab) {\n    if (this.state.activeTab !== tab) {\n      this.setState({\n        activeTab: tab\n      });\n    }\n  }\n  render() {\n    return (\n      <div>\n        <Nav tabs>\n          <NavItem>\n            <NavLink\n              className={classnames({ active: this.state.activeTab === '1' })}\n              onClick={() => { this.toggle('1'); }}\n            >\n              Tab1\n            </NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink\n              className={classnames({ active: this.state.activeTab === '2' })}\n              onClick={() => { this.toggle('2'); }}\n            >\n              Moar Tabs\n            </NavLink>\n          </NavItem>\n        </Nav>\n        <TabContent className=\"ExampleTab\" fade activeTab={this.state.activeTab}>\n          <TabPane tabId=\"1\">\n            <Row>\n              <Col sm=\"12\">\n                <h4>Tab 1 Contents</h4>\n              </Col>\n            </Row>\n          </TabPane>\n          <TabPane tabId=\"2\">\n            <Row>\n              <Col sm=\"6\">\n                <Card block>\n                  <CardTitle>Special Title Treatment</CardTitle>\n                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>\n                  <Button>Go somewhere</Button>\n                </Card>\n              </Col>\n              <Col sm=\"6\">\n                <Card block>\n                  <CardTitle>Special Title Treatment</CardTitle>\n                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>\n                  <Button>Go somewhere</Button>\n                </Card>\n              </Col>\n            </Row>\n          </TabPane>\n        </TabContent>\n      </div>\n    );\n  }\n}"
        })
      })]
    })
  });
});

var TabExample =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(TabExample, _Component);

  function TabExample(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, TabExample);

    _this = __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(TabExample).call(this, props));
    _this.toggle = _this.toggle.bind(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.state = {
      activeTab: '1'
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(TabExample, [{
    key: "toggle",
    value: function toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "div", null, [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_Navigation_Nav__["a" /* default */], {
        "tabs": true,
        children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__src_Navigation_NavItem__["a" /* default */], {
          children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Navigation_NavLink__["a" /* default */], {
            "className": __WEBPACK_IMPORTED_MODULE_7_classnames___default()({
              active: this.state.activeTab === '1'
            }),
            "onClick": function onClick() {
              _this2.toggle('1');
            },
            children: "Tab1"
          })
        }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__src_Navigation_NavItem__["a" /* default */], {
          children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Navigation_NavLink__["a" /* default */], {
            "className": __WEBPACK_IMPORTED_MODULE_7_classnames___default()({
              active: this.state.activeTab === '2'
            }),
            "onClick": function onClick() {
              _this2.toggle('2');
            },
            children: "Moar Tabs"
          })
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_12__src_TabContent__["a" /* default */], {
        "className": "ExampleTab",
        "fade": true,
        "activeTab": this.state.activeTab,
        children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_13__src_TabPane__["a" /* default */], {
          "tabId": "1",
          children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_14__src_Row__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_15__src_Col__["a" /* default */], {
              "sm": "12",
              children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "h4", null, "Tab 1 Contents", 16)
            })
          })
        }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_13__src_TabPane__["a" /* default */], {
          "tabId": "2",
          children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_14__src_Row__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_15__src_Col__["a" /* default */], {
              "sm": "6",
              children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_16__src_Card_Card__["a" /* default */], {
                "block": true,
                children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_17__src_Card_CardTitle__["a" /* default */], {
                  children: "Special Title Treatment"
                }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_18__src_Card_CardText__["a" /* default */], {
                  children: "With supporting text below as a natural lead-in to additional content."
                }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_19__src_Button__["a" /* default */], {
                  children: "Go somewhere"
                })]
              })
            }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_15__src_Col__["a" /* default */], {
              "sm": "6",
              children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_16__src_Card_Card__["a" /* default */], {
                "block": true,
                children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_17__src_Card_CardTitle__["a" /* default */], {
                  children: "Special Title Treatment"
                }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_18__src_Card_CardText__["a" /* default */], {
                  children: "With supporting text below as a natural lead-in to additional content."
                }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_19__src_Button__["a" /* default */], {
                  children: "Go somewhere"
                })]
              })
            })]
          })
        })]
      })], 4);
    }
  }]);

  return TabExample;
}(__WEBPACK_IMPORTED_MODULE_6_inferno__["a" /* Component */]);

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_Button__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_Popover__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_PopoverHeader__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_PopoverBody__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_inferno_popper__ = __webpack_require__(17);














/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["e" /* Section */], {
    "title": "Popovers",
    children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "p", null, "Popovers are built with Popper.js.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["f" /* Stage */], {
      children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["d" /* Scene */], {
        children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, ExamplePopover)
      }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["b" /* Narrative */], {
          children: "This is the code to create a button with a popover:"
        }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["a" /* Code */], {
          children: "import { Manager, Target, Popper, Arrow, Travel } from 'inferno-popper'\n\nclass ExamplePopover extends Component {\n  constructor(props) {\n    super(props);\n\n    this.toggle = this.toggle.bind(this);\n    this.state = {\n      popoverOpen: false\n    };\n  }\n\n  toggle() {\n    this.setState({\n      popoverOpen: !this.state.popoverOpen\n    });\n  }\n\n  render() {\n    return (\n      <Manager>\n        <Target>\n          <Button id=\"Popover1\" onClick={this.toggle}>\n            Launch Popover\n          </Button>\n        </Target>\n        <Popover placement=\"bottom\" isOpen={this.state.popoverOpen} target=\"Popover1\" toggle={this.toggle}>\n          <PopoverHeader>Popover Title</PopoverHeader>\n          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>\n        </Popover>\n      </Manager>\n    );\n  }\n}"
        })]
      })]
    })]
  });
});


var ExamplePopover =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(ExamplePopover, _Component);

  function ExamplePopover(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, ExamplePopover);

    _this = __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(ExamplePopover).call(this, props));
    _this.toggle = _this.toggle.bind(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.state = {
      popoverOpen: false
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(ExamplePopover, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        popoverOpen: !this.state.popoverOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_12_inferno_popper__["b" /* Manager */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_12_inferno_popper__["d" /* Target */], {
          children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__src_Button__["a" /* default */], {
            "id": "Popover1",
            "onClick": this.toggle,
            children: "Launch Popover"
          })
        }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_Popover__["a" /* default */], {
          "placement": "bottom",
          "isOpen": this.state.popoverOpen,
          "target": "Popover1",
          "toggle": this.toggle,
          children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__src_PopoverHeader__["a" /* default */], {
            children: "Popover Title"
          }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_PopoverBody__["a" /* default */], {
            children: "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
          })]
        })]
      });
    }
  }]);

  return ExamplePopover;
}(__WEBPACK_IMPORTED_MODULE_6_inferno__["a" /* Component */]);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Pagination__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__ = __webpack_require__(87);






/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Section */], {
    "title": "Pagination",
    children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Pagination__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "previous": true,
              "href": "#"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "href": "#",
              children: "1"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "href": "#",
              children: "2"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "href": "#",
              children: "3"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "href": "#",
              children: "4"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "href": "#",
              children: "5"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "next": true,
              "href": "#"
            })
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Pagination>\n  <PaginationItem>\n    <PaginationLink previous href=\"#\" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href=\"#\">\n      1\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href=\"#\">\n      2\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href=\"#\">\n      3\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href=\"#\">\n      4\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href=\"#\">\n      5\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink next href=\"#\" />\n  </PaginationItem>\n</Pagination>"
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h3", null, "Disabled and Active State", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Pagination__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            "disabled": true,
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "previous": true,
              "href": "#"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            "active": true,
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "href": "#",
              children: "1"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "href": "#",
              children: "2"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "href": "#",
              children: "3"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "href": "#",
              children: "4"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "href": "#",
              children: "5"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "next": true,
              "href": "#"
            })
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Pagination>\n  <PaginationItem disabled>\n    <PaginationLink previous href=\"#\" />\n  </PaginationItem>\n  <PaginationItem active>\n    <PaginationLink href=\"#\">\n      1\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href=\"#\">\n      2\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href=\"#\">\n      3\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href=\"#\">\n      4\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href=\"#\">\n      5\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink next href=\"#\" />\n  </PaginationItem>\n</Pagination>"
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h3", null, "Sizing", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Pagination__["a" /* default */], {
          "size": "lg",
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "previous": true,
              "href": "#"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "href": "#",
              children: "1"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "href": "#",
              children: "2"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "href": "#",
              children: "3"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_PaginationItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_PaginationLink__["a" /* default */], {
              "next": true,
              "href": "#"
            })
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Pagination size=\"lg\">\n  <PaginationItem>\n    <PaginationLink previous href=\"#\" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href=\"#\">\n      1\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href=\"#\">\n      2\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href=\"#\">\n      3\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink next href=\"#\" />\n  </PaginationItem>\n</Pagination>"
        })]
      })]
    })
  });
});

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_List_ListGroup__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_List_ListGroupItem__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_List_ListGroupItemHeading__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_List_ListGroupItemText__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_Badge__ = __webpack_require__(46);








/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Section */], {
    "title": "List",
    children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h3", null, "Standard List", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_List_ListGroup__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_List_ListGroupItem__["a" /* default */], {
            children: "Cras justo odio"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_List_ListGroupItem__["a" /* default */], {
            children: "Dapibus ac facilisis in"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_List_ListGroupItem__["a" /* default */], {
            children: "Morbi leo risus"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_List_ListGroupItem__["a" /* default */], {
            children: "Porta ac consectetur ac"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_List_ListGroupItem__["a" /* default */], {
            children: "Vestibulum at eros"
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<ListGroup>\n  <ListGroupItem>Cras justo odio</ListGroupItem>\n  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>\n  <ListGroupItem>Morbi leo risus</ListGroupItem>\n  <ListGroupItem>Porta ac consectetur ac</ListGroupItem>\n  <ListGroupItem>Vestibulum at eros</ListGroupItem>\n</ListGroup>"
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h3", null, "List With Badges", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_List_ListGroup__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_List_ListGroupItem__["a" /* default */], {
            "className": "justify-content-between",
            children: ["Cras justo odio ", Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6__src_Badge__["a" /* default */], {
              "pill": true,
              children: "14"
            })]
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_List_ListGroupItem__["a" /* default */], {
            "className": "justify-content-between",
            children: ["Dapibus ac facilisis in ", Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6__src_Badge__["a" /* default */], {
              "pill": true,
              children: "2"
            })]
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_List_ListGroupItem__["a" /* default */], {
            "className": "justify-content-between",
            children: ["Morbi leo risus ", Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6__src_Badge__["a" /* default */], {
              "pill": true,
              children: "1"
            })]
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<ListGroup>\n  <ListGroupItem className=\"justify-content-between\">Cras justo odio <Badge pill>14</Badge></ListGroupItem>\n  <ListGroupItem className=\"justify-content-between\">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>\n  <ListGroupItem className=\"justify-content-between\">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>\n</ListGroup>"
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h3", null, "List With Links and Buttons", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_List_ListGroup__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_List_ListGroupItem__["a" /* default */], {
            "disabled": true,
            "tag": "a",
            "href": "#",
            children: "Cras justo odio"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_List_ListGroupItem__["a" /* default */], {
            "tag": "a",
            "href": "#",
            children: "Dapibus ac facilisis in"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_List_ListGroupItem__["a" /* default */], {
            "tag": "a",
            "href": "#",
            "action": true,
            children: "Morbi leo risus"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_List_ListGroupItem__["a" /* default */], {
            "active": true,
            "tag": "a",
            "href": "#",
            "action": true,
            children: "Porta ac consectetur ac"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_List_ListGroupItem__["a" /* default */], {
            "tag": "button",
            "action": true,
            children: "Vestibulum at eros"
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<ListGroup>\n  <ListGroupItem disabled tag=\"a\" href=\"#\">Cras justo odio</ListGroupItem>\n  <ListGroupItem tag=\"a\" href=\"#\">Dapibus ac facilisis in</ListGroupItem>\n  <ListGroupItem tag=\"a\" href=\"#\" action>Morbi leo risus</ListGroupItem>\n  <ListGroupItem active tag=\"a\" href=\"#\" action>Porta ac consectetur ac</ListGroupItem>\n  <ListGroupItem tag=\"button\" action>Vestibulum at eros</ListGroupItem>\n</ListGroup>"
        })]
      })]
    })
  });
});

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_Tooltip__ = __webpack_require__(137);












/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__components__["e" /* Section */], {
    "title": "Tooltip",
    children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__components__["f" /* Stage */], {
      children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__components__["d" /* Scene */], {
        children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, TooltipExample)
      }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "h3", null, "Example Code:", 16), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__components__["d" /* Scene */], {
        children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__components__["a" /* Code */], {
          children: "class TooltipExample extends Component {\n  constructor(props) {\n    super(props);\n\n    this.toggle = this.toggle.bind(this);\n    this.state = {\n      tooltipOpen: false\n    };\n  }\n\n  toggle() {\n    this.setState({\n      tooltipOpen: !this.state.tooltipOpen\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <p>Somewhere in here is a <a href=\"#\" id=\"TooltipExample\">tooltip</a>.</p>\n        <Tooltip placement=\"bottom\" isOpen={this.state.tooltipOpen} target=\"TooltipExample\" toggle={this.toggle}>\n          Hello world!\n        </Tooltip>\n      </div>\n    );\n  }\n}"
        })
      })]
    })
  });
});

var TooltipExample =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(TooltipExample, _Component);

  function TooltipExample(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, TooltipExample);

    _this = __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(TooltipExample).call(this, props));
    _this.toggle = _this.toggle.bind(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.state = {
      tooltipOpen: false
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(TooltipExample, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        tooltipOpen: !this.state.tooltipOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "div", null, [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "p", null, [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["e" /* createTextVNode */])("Somewhere in here is a "), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "a", null, "tooltip", 16, {
        "href": "#",
        "id": "TooltipExample"
      }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["e" /* createTextVNode */])(".")], 4), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_Tooltip__["a" /* default */], {
        "placement": "bottom",
        "isOpen": this.state.tooltipOpen,
        "target": "TooltipExample",
        "toggle": this.toggle,
        children: "Hello world!"
      })], 4);
    }
  }]);

  return TooltipExample;
}(__WEBPACK_IMPORTED_MODULE_6_inferno__["a" /* Component */]);

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_typeof__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__PopperContent__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils__ = __webpack_require__(3);














var propsToOmit = ['placement', 'target', 'container', 'isOpen', 'disabled', 'hideArrow', 'className', 'innerClassName', 'cssModule', 'toggle', 'autohide', 'placementPrefix', 'delay', 'modifiers'];
var DEFAULT_DELAYS = {
  show: 0,
  hide: 250
};
var defaultProps = {
  isOpen: false,
  hideArrow: false,
  placement: 'top',
  placementPrefix: 'bs-tooltip',
  delay: DEFAULT_DELAYS,
  autohide: true,
  toggle: function toggle() {}
};

var Tooltip =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(Tooltip, _Component);

  function Tooltip(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, Tooltip);

    _this = __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(Tooltip).call(this, props));
    _this.addTargetEvents = _this.addTargetEvents.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.removeTargetEvents = _this.removeTargetEvents.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.toggle = _this.toggle.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.onMouseOverTooltip = _this.onMouseOverTooltip.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.onMouseLeaveTooltip = _this.onMouseLeaveTooltip.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.show = _this.show.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    _this.hide = _this.hide.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._target = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["c" /* getTarget */])(this.props.target);
      this.addTargetEvents();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeTargetEvents();
    }
  }, {
    key: "onMouseOverTooltip",
    value: function onMouseOverTooltip() {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      this._showTimeout = setTimeout(this.show, this.getDelay('show'));
    }
  }, {
    key: "onMouseLeaveTooltip",
    value: function onMouseLeaveTooltip() {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }

      this._hideTimeout = setTimeout(this.hide, this.getDelay('hide'));
    }
  }, {
    key: "onMouseOverTooltipContent",
    value: function onMouseOverTooltipContent() {
      if (this.props.autohide) {
        return;
      }

      if (this._hideTimeout) {
        this.clearHideTimeout();
      }
    }
  }, {
    key: "onMouseLeaveTooltipContent",
    value: function onMouseLeaveTooltipContent() {
      if (this.props.autohide) {
        return;
      }

      if (this._showTimeout) {
        this.clearShowTimeout();
      }

      this._hideTimeout = setTimeout(this.hide, this.getDelay('hide'));
    }
  }, {
    key: "getDelay",
    value: function getDelay(key) {
      var delay = this.props.delay;

      if (__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_typeof___default()(delay) === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }

      return delay;
    }
  }, {
    key: "show",
    value: function show() {
      if (!this.props.isOpen) {
        this.clearShowTimeout();
        this.toggle();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.props.isOpen) {
        this.clearHideTimeout();
        this.toggle();
      }
    }
  }, {
    key: "clearShowTimeout",
    value: function clearShowTimeout() {
      clearTimeout(this._showTimeout);
      this._showTimeout = undefined;
    }
  }, {
    key: "clearHideTimeout",
    value: function clearHideTimeout() {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = undefined;
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(e) {
      if (e.target === this._target || this._target.contains(e.target)) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }

        if (!this.props.isOpen) {
          this.toggle();
        }
      }
    }
  }, {
    key: "addTargetEvents",
    value: function addTargetEvents() {
      var _this2 = this;

      this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);

      this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);

      ['click', 'touchstart'].forEach(function (event) {
        return document.addEventListener(event, _this2.handleDocumentClick, true);
      });
    }
  }, {
    key: "removeTargetEvents",
    value: function removeTargetEvents() {
      var _this3 = this;

      this._target.removeEventListener('mouseover', this.onMouseOverTooltip, true);

      this._target.removeEventListener('mouseout', this.onMouseLeaveTooltip, true);

      ['click', 'touchstart'].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }

      var attributes = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["f" /* omit */])(this.props, propsToOmit);
      var classes = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_9_classnames___default()('tooltip-inner', this.props.innerClassName), this.props.cssModule);
      var popperClasses = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* mapToCssModules */])(__WEBPACK_IMPORTED_MODULE_9_classnames___default()('tooltip', 'show', this.props.className), this.props.cssModule);
      return Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__PopperContent__["a" /* default */], {
        "className": popperClasses,
        "target": this.props.target,
        "isOpen": this.props.isOpen,
        "hideArrow": this.props.hideArrow,
        "placement": this.props.placement,
        "placementPrefix": this.props.placementPrefix,
        "container": this.props.container,
        "modifiers": this.props.modifiers,
        children: Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["f" /* createVNode */])(1, "div", classes, null, 1, __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({}, attributes, {
          "onMouseOver": this.onMouseOverTooltipContent,
          "onMouseLeave": this.onMouseLeaveTooltipContent
        })))
      });
    }
  }]);

  return Tooltip;
}(__WEBPACK_IMPORTED_MODULE_8_inferno__["a" /* Component */]);

Tooltip.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Tooltip);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Media__ = __webpack_require__(92);




var svgData = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16831fcfed4%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16831fcfed4%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.46875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Section */], {
    "title": "Media",
    children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "Use media objects to display content containing images.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Media__["b" /* Media */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Media__["a" /* Image */], {
            "className": "mr-2",
            "src": svgData,
            "alt": "Generic placeholder image"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Media__["c" /* MediaBody */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h4", null, "A Nice Heading", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.", 16)]
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Media>\n  <Image className=\"mr-2\" src={svgData} alt=\"Generic placeholder image\" />\n  <MediaBody>\n    <h4>A Nice Heading</h4>\n    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n  </MediaBody>\n</Media>"
        })]
      })
    }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "You can align media holders.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Media__["b" /* Media */], {
          "className": "mt-1",
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Media__["a" /* Image */], {
            "top": true,
            "className": "mr-2",
            "href": "#",
            "src": svgData,
            "alt": "Generic placeholder image"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Media__["c" /* MediaBody */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h4", null, "Top aligned media", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.", 16)]
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Media__["b" /* Media */], {
          "className": "mt-1",
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Media__["a" /* Image */], {
            "middle": true,
            "className": "mr-2",
            "href": "#",
            "src": svgData,
            "alt": "Generic placeholder image"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Media__["c" /* MediaBody */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h4", null, "Middle aligned media", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.", 16)]
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Media__["b" /* Media */], {
          "className": "mt-1",
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Media__["a" /* Image */], {
            "bottom": true,
            "className": "mr-2",
            "href": "#",
            "src": svgData,
            "alt": "Generic placeholder image"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Media__["c" /* MediaBody */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h4", null, "Middle aligned media", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.", 16)]
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Media className=\"mt-1\">\n  <Image top className=\"mr-2\" href=\"#\" src={svgData} alt=\"Generic placeholder image\" />\n  <MediaBody>\n    <h4>Top aligned media</h4>\n    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n  </MediaBody>\n  </Media>\n  <Media className=\"mt-1\">\n  <Image middle className=\"mr-2\" href=\"#\" src={svgData} alt=\"Generic placeholder image\" />\n  <MediaBody>\n    <h4>Middle aligned media</h4>\n    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n  </MediaBody>\n  </Media>\n  <Media className=\"mt-1\">\n  <Image bottom className=\"mr-2\" href=\"#\" src={svgData} alt=\"Generic placeholder image\" />\n  <MediaBody>\n    <h4>Middle aligned media</h4>\n    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n  </MediaBody>\n</Media>"
        })]
      })
    }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "You can stack your image vertically.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "div", "w-50", Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Media__["b" /* Media */], {
          "vertical": true,
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Media__["a" /* Image */], {
            "responsive": "16by9",
            "spacing": "mb-2",
            "src": svgData,
            "alt": "Generic placeholder image"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Media__["c" /* MediaBody */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h4", null, "A Nice Heading", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.", 16)]
          })]
        }), 2), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Media vertical>\n  <Image responsive=\"16by9\" spacing=\"mb-2\" src={svgData} alt=\"Generic placeholder image\" />\n  <MediaBody>\n    <h4>A Nice Heading</h4>\n    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n  </MediaBody>\n</Media>"
        })]
      })
    })]
  });
});

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Spinner__ = __webpack_require__(93);




/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Section */], {
    "title": "Spinner",
    children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "Spinner allow you to indicate activity, such as network calls.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "color": "primary"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "color": "secondary"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "color": "success"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "color": "danger"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "color": "warning"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "color": "info"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "color": "light"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "color": "dark"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "size": "sm",
          "color": "primary"
        }), ' ', Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "size": "sm",
          "color": "secondary"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Spinner color=\"primary\" />\n<Spinner color=\"secondary\" />\n<Spinner color=\"success\" />\n<Spinner color=\"danger\" />\n<Spinner color=\"warning\" />\n<Spinner color=\"info\" />\n<Spinner color=\"light\" />\n<Spinner color=\"dark\" />\n\n<Spinner size=\"sm\" color=\"primary\" />\n<Spinner size=\"sm\" color=\"secondary\" />"
        })]
      })
    }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "Spinners can also grow.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "type": "grow",
          "color": "primary"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "type": "grow",
          "color": "secondary"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "type": "grow",
          "color": "success"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "type": "grow",
          "color": "danger"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "type": "grow",
          "color": "warning"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "type": "grow",
          "color": "info"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "type": "grow",
          "color": "light"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Spinner__["a" /* default */], {
          "type": "grow",
          "color": "dark"
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Spinner type=\"grow\" color=\"primary\" />\n<Spinner type=\"grow\" color=\"secondary\" />\n<Spinner type=\"grow\" color=\"success\" />\n<Spinner type=\"grow\" color=\"danger\" />\n<Spinner type=\"grow\" color=\"warning\" />\n<Spinner type=\"grow\" color=\"info\" />\n<Spinner type=\"grow\" color=\"light\" />\n<Spinner type=\"grow\" color=\"dark\" />"
        })]
      })
    })]
  });
});

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CardPage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Card_TextCard__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Card_HeaderCard__ = __webpack_require__(142);





function CardPage(props) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["c" /* Page */], {
    children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__Card_TextCard__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__Card_HeaderCard__["a" /* default */])]
  });
}

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Card_Card__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Card_CardImg__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Card_CardBody__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_Card_CardLink__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_Card_CardSubtitle__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_Card_CardText__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_Card_CardTitle__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_Button__ = __webpack_require__(13);











/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Section */], {
    "title": "Basic Card",
    children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "Use a card to display content in an engaging and concise manner.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Card_Card__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Card_CardImg__["a" /* default */], {
            "top": true,
            "width": "100%",
            "src": "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
            "alt": "Card image cap"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Card_CardBody__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__src_Card_CardTitle__["a" /* default */], {
              children: "Card title"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__src_Card_CardText__["a" /* default */], {
              children: "Some quick example text to build on the card title and make up the bulk of the card's content."
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_Button__["a" /* default */], {
              children: "Button"
            })]
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Card>\n  <CardImg top width=\"100%\" src=\"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180\" alt=\"Card image cap\" />\n  <CardBody>\n    <CardTitle>Card title</CardTitle>\n    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>\n    <Button>Button</Button>\n  </CardBody>\n</Card>"
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h3", null, "Card with different design", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Card_Card__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Card_CardBody__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__src_Card_CardTitle__["a" /* default */], {
              children: "Card title"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6__src_Card_CardSubtitle__["a" /* default */], {
              children: "Card subtitle goes here"
            })]
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "img", null, null, 1, {
            "width": "100%",
            "src": "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
            "alt": "Card image cap"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Card_CardBody__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__src_Card_CardText__["a" /* default */], {
              children: "Some quick example text to build on the card title and make up the bulk of the card's content."
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_5__src_Card_CardLink__["a" /* default */], {
              "href": "#",
              children: "Card Link"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_5__src_Card_CardLink__["a" /* default */], {
              "href": "#",
              children: "Another Link"
            })]
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Card>\n  <CardBody>\n    <CardTitle>Card title</CardTitle>\n    <CardSubtitle>Card subtitle goes here</CardSubtitle>\n  </CardBody>\n  <img width=\"100%\" src=\"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180\" alt=\"Card image cap\" />\n  <CardBody>\n    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>\n    <CardLink href=\"#\">Card Link</CardLink>\n    <CardLink href=\"#\">Another Link</CardLink>\n  </CardBody>\n</Card>"
        })]
      })]
    })]
  });
});

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Card_Card__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Card_CardBody__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Card_CardHeader__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_Card_CardFooter__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_Card_CardText__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_Card_CardTitle__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_Button__ = __webpack_require__(13);










/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Section */], {
    "title": "Card With Header and Footer",
    children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, "Use a card to display content in an engaging and concise manner.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Card_Card__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Card_CardHeader__["a" /* default */], {
            children: "The Header"
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Card_CardBody__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__src_Card_CardTitle__["a" /* default */], {
              children: "Special Title Treatment"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6__src_Card_CardText__["a" /* default */], {
              children: "With supporting text below as a natural lead-in to additional content."
            })]
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_5__src_Card_CardFooter__["a" /* default */], {
            "className": "text-right",
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__src_Button__["a" /* default */], {
              "color": "link",
              children: "Go now..."
            })
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Card>\n  <CardHeader>The Header</CardHeader>\n  <CardBody>\n    <CardTitle>Special Title Treatment</CardTitle>\n    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>\n  </CardBody>\n  <CardFooter className=\"text-right\"><Button color=\"link\">Go now...</Button></CardFooter>\n</Card>"
        })]
      })
    })]
  });
});

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FormPage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Form_Input__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form_InputGroup__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Form_InputWithButton__ = __webpack_require__(146);






function FormPage(props) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["c" /* Page */], {
    children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__Form_Input__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__Form_InputGroup__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__Form_InputWithButton__["a" /* default */])]
  });
}

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Form_Form__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Form_FormGroup__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Form_Label__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_Form_Input__ = __webpack_require__(42);









/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Section */], {
    "title": "Basic Input Elements",
    children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Form_Form__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Form_FormGroup__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Form_Label__["a" /* default */], {
              children: "Title:"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_5__src_Form_Input__["a" /* default */], {
              "type": "text",
              "name": "title"
            })]
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Form_FormGroup__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Form_Label__["a" /* default */], {
              children: "Age:"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_5__src_Form_Input__["a" /* default */], {
              "type": "number",
              "name": "age"
            })]
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Form_FormGroup__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Form_Label__["a" /* default */], {
              children: "Filter:"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_5__src_Form_Input__["a" /* default */], {
              "type": "text",
              "name": "filter",
              "placeholder": "Type here..."
            })]
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Form_FormGroup__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Form_Label__["a" /* default */], {
              children: "Password:"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_5__src_Form_Input__["a" /* default */], {
              "type": "password",
              "name": "password",
              "placeholder": "Choose wisely..."
            })]
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Form>\n  <FormGroup>\n    <Label>Title:</Label>\n    <Input type=\"text\" name=\"title\" />\n  </FormGroup>\n  <FormGroup>\n    <Label>Age:</Label>\n    <Input type=\"number\" name=\"age\" />\n  </FormGroup>\n  <FormGroup>\n    <Label>Filter:</Label>\n    <Input type=\"text\" name=\"filter\" placeholder=\"Type here...\" />\n  </FormGroup>\n  <FormGroup>\n    <Label>Password:</Label>\n    <Input type=\"password\" name=\"password\" placeholder=\"Choose wisely...\" />\n  </FormGroup>\n</Form>"
        })]
      })
    })
  });
});

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Form_Form__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Form_FormGroup__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Form_Input__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_Form_InputGroup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_Form_InputGroupAddon__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_Form_Label__ = __webpack_require__(41);









/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Section */], {
    "title": "Input With Addon",
    children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Form_Form__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Form_FormGroup__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__src_Form_Label__["a" /* default */], {
              children: "Email:"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_5__src_Form_InputGroup__["a" /* default */], {
              children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6__src_Form_InputGroupAddon__["a" /* default */], {
                "addonType": "prepend",
                children: "@"
              }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Form_Input__["a" /* default */], {
                "type": "email",
                "name": "email",
                "placeholder": "example@email.com"
              })]
            })]
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Form_FormGroup__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__src_Form_Label__["a" /* default */], {
              children: "Price:"
            }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_5__src_Form_InputGroup__["a" /* default */], {
              children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Form_Input__["a" /* default */], {
                "type": "number",
                "name": "Age"
              }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_6__src_Form_InputGroupAddon__["a" /* default */], {
                "addonType": "append",
                children: "SEK"
              })]
            })]
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Form>\n  <FormGroup>\n    <Label>Email:</Label>\n    <InputGroup>\n      <InputGroupAddon addonType=\"prepend\">@</InputGroupAddon>\n      <Input type=\"email\" name=\"email\" placeholder=\"example@email.com\" />\n    </InputGroup>\n  </FormGroup>\n  <FormGroup>\n    <Label>Price:</Label>\n    <InputGroup>\n      <Input type=\"number\" name=\"Age\" />\n      <InputGroupAddon addonType=\"append\">SEK</InputGroupAddon>\n    </InputGroup>\n  </FormGroup>\n</Form>"
        })]
      })
    })
  });
});

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_Form_Form__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_Form_FormGroup__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_Form_Input__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_Form_InputGroup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_Form_InputGroupAddon__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_Form_InputGroupButtonDropdown__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_Form_Label__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_Button__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_ButtonDropdown__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_DropdownToggle__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_DropdownMenu__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_DropdownItem__ = __webpack_require__(26);
























/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__components__["e" /* Section */], {
    "title": "Input With Button",
    children: Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__src_Form_Form__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Form_FormGroup__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_16__src_Form_Label__["a" /* default */], {
              children: "Email:"
            }), Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_13__src_Form_InputGroup__["a" /* default */], {
              children: [Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_14__src_Form_InputGroupAddon__["a" /* default */], {
                "addonType": "prepend",
                children: Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_17__src_Button__["a" /* default */], {
                  children: "I'm a button"
                })
              }), Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_12__src_Form_Input__["a" /* default */], {
                "type": "email",
                "name": "email",
                "placeholder": "example@email.com"
              })]
            })]
          }), Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Form_FormGroup__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_16__src_Form_Label__["a" /* default */], {
              children: "Price:"
            }), Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_13__src_Form_InputGroup__["a" /* default */], {
              children: [Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_14__src_Form_InputGroupAddon__["a" /* default */], {
                "addonType": "prepend",
                children: Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_17__src_Button__["a" /* default */], {
                  children: "Button life"
                })
              }), Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_12__src_Form_Input__["a" /* default */], {
                "type": "number",
                "name": "Age"
              }), Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, SampleDropdownAddonButton, {
                "addonType": "append",
                "color": "primary",
                "split": true
              })]
            })]
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__components__["a" /* Code */], {
          children: "<Form>\n  <FormGroup>\n    <Label>Email:</Label>\n    <InputGroup>\n      <InputGroupAddon addonType=\"prepend\"><Button>I'm a button</Button></InputGroupAddon>\n      <Input type=\"email\" name=\"email\" placeholder=\"example@email.com\" />\n    </InputGroup>\n  </FormGroup>\n  <FormGroup>\n    <Label>Price:</Label>\n    <InputGroup>\n      <InputGroupAddon addonType=\"prepend\"><Button>Button life</Button></InputGroupAddon>\n      <Input type=\"number\" name=\"Age\" />\n      <SampleDropdownAddonButton addonType=\"append\" color=\"primary\" split/>\n    </InputGroup>\n  </FormGroup>\n</Form>"
        }), Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__components__["b" /* Narrative */], {
          children: "This is what the SampleDropdownAddonButton looks like:"
        }), Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__components__["a" /* Code */], {
          children: "class SampleDropdownAddonButton extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      isOpen: false\n    }\n\n    this.doToggle = this.doToggle.bind(this)\n  }\n\n  doToggle() {\n    this.setState({\n      isOpen: !this.state.isOpen\n    })\n  }\n\n  render({ children, addonType, ...props }) {\n    return (\n      <InputGroupButtonDropdown addonType={addonType} isOpen={this.state.isOpen} toggle={this.doToggle}>\n        <DropdownToggle {...props}>{children}</DropdownToggle>\n        <DropdownMenu>\n          <DropdownItem>Item 1</DropdownItem>\n          <DropdownItem>Item 2</DropdownItem>\n          <DropdownItem>Item 3</DropdownItem>\n        </DropdownMenu>\n      </InputGroupButtonDropdown>\n    )\n  }\n}"
        })]
      })
    })
  });
});

var SampleDropdownAddonButton =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(SampleDropdownAddonButton, _Component);

  function SampleDropdownAddonButton(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, SampleDropdownAddonButton);

    _this = __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(SampleDropdownAddonButton).call(this, props));
    _this.state = {
      isOpen: false
    };
    _this.doToggle = _this.doToggle.bind(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_7__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(SampleDropdownAddonButton, [{
    key: "doToggle",
    value: function doToggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var children = _ref.children,
          addonType = _ref.addonType,
          props = __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["children", "addonType"]);

      return Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_15__src_Form_InputGroupButtonDropdown__["a" /* default */], {
        "addonType": addonType,
        "isOpen": this.state.isOpen,
        "toggle": this.doToggle,
        children: [Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["j" /* normalizeProps */])(Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_19__src_DropdownToggle__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_objectSpread___default()({}, props, {
          children: children
        }))), Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_20__src_DropdownMenu__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_21__src_DropdownItem__["a" /* default */], {
            children: "Item 1"
          }), Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_21__src_DropdownItem__["a" /* default */], {
            children: "Item 2"
          }), Object(__WEBPACK_IMPORTED_MODULE_8_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_21__src_DropdownItem__["a" /* default */], {
            children: "Item 3"
          })]
        })]
      });
    }
  }]);

  return SampleDropdownAddonButton;
}(__WEBPACK_IMPORTED_MODULE_8_inferno__["a" /* Component */]);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = BasicPage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_BasicModal__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modal_Animations__ = __webpack_require__(149);





function BasicPage(props) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["c" /* Page */], {
    children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__Modal_BasicModal__["a" /* default */])
  });
}

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_Button__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_ButtonGroup__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_Modal_Modal__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_Modal_ModalHeader__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_Modal_ModalBody__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_Modal_ModalFooter__ = __webpack_require__(57);
















/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["e" /* Section */], {
    "title": "Basic Modal",
    children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "p", null, "Use modals to present essential information that takes over the entire window.", 16)
    }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["f" /* Stage */], {
      children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_ButtonGroup__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, ModalExample, {
            "buttonLabel": "Show modal"
          }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, ModalExample, {
            "buttonLabel": "Show modal without fade",
            "fade": false
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["a" /* Code */], {
          children: "<ButtonGroup>  \n  <ModalExample buttonLabel=\"Show modal\" />\n  <ModalExample buttonLabel=\"Show modal (no fade)\" fade={false} />\n</ButtonGroup>"
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["f" /* createVNode */])(1, "h3", null, "Implementation of <ModalExample> component:", 16), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["d" /* Scene */], {
        children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["a" /* Code */], {
          children: "class ModalExample extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      modal: false\n    };\n\n    this.toggle = this.toggle.bind(this);\n  }\n\n  toggle() {\n    this.setState({\n      modal: !this.state.modal\n    });\n  }\n\n  render() {\n    const fadeModal = (props.hasOwnProperty('fade') ? this.props.fade : true)\n    return (\n      <Button onClick={this.toggle}>{this.props.buttonLabel}\n        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} fade={fadeModal}>\n          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>\n          <ModalBody>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </ModalBody>\n          <ModalFooter>\n            <Button color=\"primary\" onClick={this.toggle}>Do Something</Button>{' '}\n            <Button color=\"secondary\" onClick={this.toggle}>Cancel</Button>\n          </ModalFooter>\n        </Modal>\n      </Button>\n    );\n  }\n}"
        })
      })]
    })]
  });
});

var ModalExample =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(ModalExample, _Component);

  function ModalExample(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, ModalExample);

    _this = __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(ModalExample).call(this, props));
    _this.state = {
      modal: false
    };
    _this.toggle = _this.toggle.bind(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(ModalExample, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  }, {
    key: "render",
    value: function render() {
      var fadeModal = this.props.hasOwnProperty('fade') ? this.props.fade : true;
      return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__src_Button__["a" /* default */], {
        "onClick": this.toggle,
        children: [this.props.buttonLabel, Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__src_Modal_Modal__["a" /* default */], {
          "isOpen": this.state.modal,
          "toggle": this.toggle,
          "className": this.props.className,
          "fade": fadeModal,
          children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Modal_ModalHeader__["a" /* default */], {
            "toggle": this.toggle,
            children: "Modal title"
          }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_12__src_Modal_ModalBody__["a" /* default */], {
            children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_13__src_Modal_ModalFooter__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__src_Button__["a" /* default */], {
              "color": "primary",
              "onClick": this.toggle,
              children: "Do Something"
            }), ' ', Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__src_Button__["a" /* default */], {
              "color": "secondary",
              "onClick": this.toggle,
              children: "Cancel"
            })]
          })]
        })]
      });
    }
  }]);

  return ModalExample;
}(__WEBPACK_IMPORTED_MODULE_6_inferno__["a" /* Component */]);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Button__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_ButtonGroup__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Modal_Modal__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_Modal_ModalHeader__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_Modal_ModalBody__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_Modal_ModalFooter__ = __webpack_require__(57);










/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Section */], {
    "title": "Customise Animations",
    children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["b" /* Narrative */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "p", null, [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["e" /* createTextVNode */])("Animations are implemented using "), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "a", null, "inferno-animation", 16, {
        "href": "https://github.com/jhsware/inferno-animation"
      }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["e" /* createTextVNode */])(". To customise animations you pass the props "), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "b", null, "animationPrefix", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["e" /* createTextVNode */])(" and "), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "b", null, "backgroundAnimationPrefix", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["e" /* createTextVNode */])(" and follow the css-class naming rules in "), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "b", null, "inferno-animation", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["e" /* createTextVNode */])(".")], 4)
    }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Modal animationPrefix=\"MyModalDialogAnimation\" backgroundAnimationPrefix=\"MyModalBackgroundAnimation\">\n    /* ...modal content... */\n</Modal>"
        })
      })
    })]
  });
});

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NavigationPage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Navigation_Horizontal__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_Vertical__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Navigation_Tabbed__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Navigation_Pills__ = __webpack_require__(154);






 // import Modal from '../../../src/Modal'

function NavigationPage(props) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["c" /* Page */], {
    children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__Navigation_Horizontal__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__Navigation_Vertical__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__Navigation_Tabbed__["a" /* default */]), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_5__Navigation_Pills__["a" /* default */])]
  });
}

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Navigation_Nav__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Navigation_NavItem__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__ = __webpack_require__(22);






/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Section */], {
    "title": "Horizontal",
    children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h3", null, "List Based NavBar", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Navigation_Nav__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Navigation_NavItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__["a" /* default */], {
              "href": "#",
              children: "Link"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Navigation_NavItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__["a" /* default */], {
              "href": "#",
              children: "Link"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Navigation_NavItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__["a" /* default */], {
              "href": "#",
              children: "Another Link"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Navigation_NavItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__["a" /* default */], {
              "disabled": true,
              "href": "#",
              children: "Disabled Link"
            })
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Nav>\n  <NavItem>\n    <NavLink href=\"#\">Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink href=\"#\">Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink href=\"#\">Another Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink disabled href=\"#\">Disabled Link</NavLink>\n  </NavItem>\n</Nav>"
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h3", null, "Link Based NavBar", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Navigation_Nav__["a" /* default */], {
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__["a" /* default */], {
            "href": "#",
            children: "Link"
          }), " ", Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__["a" /* default */], {
            "href": "#",
            children: "Link"
          }), " ", Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__["a" /* default */], {
            "href": "#",
            children: "Another Link"
          }), " ", Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__["a" /* default */], {
            "disabled": true,
            "href": "#",
            children: "Disabled Link"
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Nav>\n  <NavLink href=\"#\">Link</NavLink> <NavLink href=\"#\">Link</NavLink> <NavLink href=\"#\">Another Link</NavLink> <NavLink disabled href=\"#\">Disabled Link</NavLink>\n</Nav>"
        })]
      })]
    })
  });
});

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Navigation_Nav__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Navigation_NavItem__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__ = __webpack_require__(22);






/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["e" /* Section */], {
    "title": "Vertical",
    children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Stage */], {
      children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h3", null, "List Based NavBar", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Navigation_Nav__["a" /* default */], {
          "vertical": true,
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Navigation_NavItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__["a" /* default */], {
              "href": "#",
              children: "Link"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Navigation_NavItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__["a" /* default */], {
              "href": "#",
              children: "Link"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Navigation_NavItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__["a" /* default */], {
              "href": "#",
              children: "Another Link"
            })
          }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_3__src_Navigation_NavItem__["a" /* default */], {
            children: Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__["a" /* default */], {
              "disabled": true,
              "href": "#",
              children: "Disabled Link"
            })
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Nav vertical>\n  <NavItem>\n    <NavLink href=\"#\">Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink href=\"#\">Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink href=\"#\">Another Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink disabled href=\"#\">Disabled Link</NavLink>\n  </NavItem>\n</Nav>"
        })]
      }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["f" /* createVNode */])(1, "h3", null, "Link Based NavBar", 16), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_2__src_Navigation_Nav__["a" /* default */], {
          "vertical": true,
          children: [Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__["a" /* default */], {
            "href": "#",
            children: "Link"
          }), " ", Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__["a" /* default */], {
            "href": "#",
            children: "Link"
          }), " ", Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__["a" /* default */], {
            "href": "#",
            children: "Another Link"
          }), " ", Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_4__src_Navigation_NavLink__["a" /* default */], {
            "disabled": true,
            "href": "#",
            children: "Disabled Link"
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* Code */], {
          children: "<Nav vertical>\n  <NavLink href=\"#\">Link</NavLink> <NavLink href=\"#\">Link</NavLink> <NavLink href=\"#\">Another Link</NavLink> <NavLink disabled href=\"#\">Disabled Link</NavLink>\n</Nav>"
        })]
      })]
    })
  });
});

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_Navigation_Nav__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_Navigation_NavItem__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_Navigation_NavLink__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_Navigation_NavDropdown__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_Dropdown__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_DropdownMenu__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_DropdownToggle__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_DropdownItem__ = __webpack_require__(26);


















/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["e" /* Section */], {
    "title": "Tabbed",
    children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, TabbedNavbar), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["a" /* Code */], {
          children: "class TabbedNavbar extends Component {\n  constructor(props) {\n    super(props)\n\n    this.state = {\n      dropdownOpen: false\n    }\n\n    this.doToggle = this.doToggle.bind(this)\n  }\n\n  doToggle() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen\n    })\n  }\n\n  render() {\n    return (\n      <Nav tabs>\n        <NavItem>\n          <NavLink href=\"#\" active>Link</NavLink>\n        </NavItem>\n        <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.doToggle}>\n          <DropdownToggle nav caret>\n            Dropdown\n          </DropdownToggle>\n          <DropdownMenu>\n            <DropdownItem header>Header</DropdownItem>\n            <DropdownItem disabled>Action</DropdownItem>\n            <DropdownItem>Another Action</DropdownItem>\n            <DropdownItem divider />\n            <DropdownItem>Another Action</DropdownItem>\n          </DropdownMenu>\n        </NavDropdown>\n        <NavItem>\n          <NavLink href=\"#\">Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href=\"#\">Another Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink disabled href=\"#\">Disabled Link</NavLink>\n        </NavItem>\n      </Nav>\n    )\n  }\n}"
        })]
      })
    })
  });
});

var TabbedNavbar =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(TabbedNavbar, _Component);

  function TabbedNavbar(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, TabbedNavbar);

    _this = __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(TabbedNavbar).call(this, props));
    _this.state = {
      dropdownOpen: false
    };
    _this.doToggle = _this.doToggle.bind(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(TabbedNavbar, [{
    key: "doToggle",
    value: function doToggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__src_Navigation_Nav__["a" /* default */], {
        "tabs": true,
        children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_Navigation_NavItem__["a" /* default */], {
          children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__src_Navigation_NavLink__["a" /* default */], {
            "href": "#",
            "active": true,
            children: "Link"
          })
        }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Navigation_NavDropdown__["a" /* default */], {
          "isOpen": this.state.dropdownOpen,
          "toggle": this.doToggle,
          children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_14__src_DropdownToggle__["a" /* default */], {
            "nav": true,
            "caret": true,
            children: "Dropdown"
          }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_13__src_DropdownMenu__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_15__src_DropdownItem__["a" /* default */], {
              "header": true,
              children: "Header"
            }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_15__src_DropdownItem__["a" /* default */], {
              "disabled": true,
              children: "Action"
            }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_15__src_DropdownItem__["a" /* default */], {
              children: "Another Action"
            }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_15__src_DropdownItem__["a" /* default */], {
              "divider": true
            }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_15__src_DropdownItem__["a" /* default */], {
              children: "Another Action"
            })]
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_Navigation_NavItem__["a" /* default */], {
          children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__src_Navigation_NavLink__["a" /* default */], {
            "href": "#",
            children: "Link"
          })
        }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_Navigation_NavItem__["a" /* default */], {
          children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__src_Navigation_NavLink__["a" /* default */], {
            "href": "#",
            children: "Another Link"
          })
        }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_Navigation_NavItem__["a" /* default */], {
          children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__src_Navigation_NavLink__["a" /* default */], {
            "disabled": true,
            "href": "#",
            children: "Disabled Link"
          })
        })]
      });
    }
  }]);

  return TabbedNavbar;
}(__WEBPACK_IMPORTED_MODULE_6_inferno__["a" /* Component */]);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_Navigation_Nav__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_Navigation_NavItem__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_Navigation_NavLink__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_Navigation_NavDropdown__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_Dropdown__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_DropdownMenu__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_DropdownToggle__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_DropdownItem__ = __webpack_require__(26);


















/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["e" /* Section */], {
    "title": "Pills",
    children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["f" /* Stage */], {
      children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["d" /* Scene */], {
        children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, TabbedNavbar), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_7__components__["a" /* Code */], {
          children: "class TabbedNavbar extends Component {\n  constructor(props) {\n    super(props)\n\n    this.state = {\n      dropdownOpen: false\n    }\n\n    this.doToggle = this.doToggle.bind(this)\n  }\n\n  doToggle() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen\n    })\n  }\n\n  render() {\n    return (\n      <Nav pills>\n        <NavItem>\n          <NavLink href=\"#\" active>Link</NavLink>\n        </NavItem>\n        <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.doToggle}>\n          <DropdownToggle nav caret>\n            Dropdown\n          </DropdownToggle>\n          <DropdownMenu>\n            <DropdownItem header>Header</DropdownItem>\n            <DropdownItem disabled>Action</DropdownItem>\n            <DropdownItem>Another Action</DropdownItem>\n            <DropdownItem divider />\n            <DropdownItem>Another Action</DropdownItem>\n          </DropdownMenu>\n        </NavDropdown>\n        <NavItem>\n          <NavLink href=\"#\">Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href=\"#\">Another Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink disabled href=\"#\">Disabled Link</NavLink>\n        </NavItem>\n      </Nav>\n    )\n  }\n}"
        })]
      })
    })
  });
});

var TabbedNavbar =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_inherits___default()(TabbedNavbar, _Component);

  function TabbedNavbar(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_classCallCheck___default()(this, TabbedNavbar);

    _this = __WEBPACK_IMPORTED_MODULE_2__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_getPrototypeOf___default()(TabbedNavbar).call(this, props));
    _this.state = {
      dropdownOpen: false
    };
    _this.doToggle = _this.doToggle.bind(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_5__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_assertThisInitialized___default()(_this)));
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__Users_jhsware_node_lerna_inferno_modules_packages_inferno_bootstrap_node_modules_babel_runtime_helpers_createClass___default()(TabbedNavbar, [{
    key: "doToggle",
    value: function doToggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_8__src_Navigation_Nav__["a" /* default */], {
        "pills": true,
        children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_Navigation_NavItem__["a" /* default */], {
          children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__src_Navigation_NavLink__["a" /* default */], {
            "href": "#",
            "active": true,
            children: "Link"
          })
        }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_11__src_Navigation_NavDropdown__["a" /* default */], {
          "isOpen": this.state.dropdownOpen,
          "toggle": this.doToggle,
          children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_14__src_DropdownToggle__["a" /* default */], {
            "nav": true,
            "caret": true,
            children: "Dropdown"
          }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_13__src_DropdownMenu__["a" /* default */], {
            children: [Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_15__src_DropdownItem__["a" /* default */], {
              "header": true,
              children: "Header"
            }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_15__src_DropdownItem__["a" /* default */], {
              "disabled": true,
              children: "Action"
            }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_15__src_DropdownItem__["a" /* default */], {
              children: "Another Action"
            }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_15__src_DropdownItem__["a" /* default */], {
              "divider": true
            }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_15__src_DropdownItem__["a" /* default */], {
              children: "Another Action"
            })]
          })]
        }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_Navigation_NavItem__["a" /* default */], {
          children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__src_Navigation_NavLink__["a" /* default */], {
            "href": "#",
            children: "Link"
          })
        }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_Navigation_NavItem__["a" /* default */], {
          children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__src_Navigation_NavLink__["a" /* default */], {
            "href": "#",
            children: "Another Link"
          })
        }), Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_9__src_Navigation_NavItem__["a" /* default */], {
          children: Object(__WEBPACK_IMPORTED_MODULE_6_inferno__["b" /* createComponentVNode */])(2, __WEBPACK_IMPORTED_MODULE_10__src_Navigation_NavLink__["a" /* default */], {
            "disabled": true,
            "href": "#",
            children: "Disabled Link"
          })
        })]
      });
    }
  }]);

  return TabbedNavbar;
}(__WEBPACK_IMPORTED_MODULE_6_inferno__["a" /* Component */]);

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map