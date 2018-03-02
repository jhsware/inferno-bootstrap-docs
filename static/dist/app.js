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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 133);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__ = __webpack_require__(34);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EMPTY_OBJ", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NO_OP", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createComponentVNode", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createRenderer", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createTextVNode", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createVNode", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "directClone", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getFlagsForElementVnode", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getNumberStyleValue", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "linkEvent", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "normalizeProps", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "options", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "version", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["q"]; });


if (process.env.NODE_ENV !== 'production') {
  console.warn('You are running production build of Inferno in development mode. Use dev:module entry point.');
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
  Copyright (c) 2016 Jed Watson.
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

			var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
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
		module.exports = classNames;
	} else if ("function" === 'function' && _typeof(__webpack_require__(54)) === 'object' && __webpack_require__(54)) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScrollbarWidth = getScrollbarWidth;
exports.setScrollbarWidth = setScrollbarWidth;
exports.isBodyOverflowing = isBodyOverflowing;
exports.getOriginalBodyPadding = getOriginalBodyPadding;
exports.conditionallyUpdateScrollbar = conditionallyUpdateScrollbar;
exports.mapToCssModules = mapToCssModules;
exports.omit = omit;
exports.getTarget = getTarget;

var _infernoShared = __webpack_require__(23);

// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal#L436-L443
function getScrollbarWidth() {
  var scrollDiv = document.createElement('div');
  // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113
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
  document.body.style.paddingRight = padding > 0 ? padding + 'px' : null;
}

function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}

function getOriginalBodyPadding() {
  return parseInt(window.getComputedStyle(document.body, null).getPropertyValue('padding-right') || 0, 10);
}

function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth();
  // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal#L420
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
  if ((0, _infernoShared.isFunction)(target)) {
    return target();
  }

  if (typeof target === 'string' && document) {
    var selection = document.querySelector(target);
    if (selection === null) {
      return document.querySelector('#' + target);
    }
    return selection;
  }

  return target;
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);


// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== 'undefined' && window.document);
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
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
function isObject(o) {
    return typeof o === 'object';
}

var componentHooks = {
    onComponentDidMount: 1,
    onComponentDidUpdate: 1,
    onComponentShouldUpdate: 1,
    onComponentWillMount: 1,
    onComponentWillUnmount: 1,
    onComponentWillUpdate: 1
};
/**
 * Creates virtual node
 * @param {string|Function|Component<any, any>} type Type of node
 * @param {object=} props Optional props for virtual node
 * @param {...{object}=} _children Optional children for virtual node
 * @returns {VNode} new virtual ndoe
 */
function createElement(type, props) {
    var _children = [], len = arguments.length - 2;
    while ( len-- > 0 ) _children[ len ] = arguments[ len + 2 ];

    if (isInvalid(type) || isObject(type)) {
        throw new Error('Inferno Error: createElement() name parameter cannot be undefined, null, false or true, It must be a string, class or function.');
    }
    var children = _children;
    var ref = null;
    var key = null;
    var className = null;
    var flags = 0;
    var newProps;
    if (_children) {
        if (_children.length === 1) {
            children = _children[0];
        }
        else if (_children.length === 0) {
            children = void 0;
        }
    }
    if (isString(type)) {
        flags = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["getFlagsForElementVnode"])(type);
        if (!isNullOrUndef(props)) {
            newProps = {};
            for (var prop in props) {
                if (prop === 'className' || prop === 'class') {
                    className = props[prop];
                }
                else if (prop === 'key') {
                    key = props.key;
                }
                else if (prop === 'children' && isUndefined(children)) {
                    children = props.children; // always favour children args, default to props
                }
                else if (prop === 'ref') {
                    ref = props.ref;
                }
                else {
                    newProps[prop] = props[prop];
                }
            }
        }
    }
    else {
        flags = 2 /* ComponentUnknown */;
        if (!isUndefined(children)) {
            if (!props) {
                props = {};
            }
            props.children = children;
            children = null;
        }
        if (!isNullOrUndef(props)) {
            newProps = {};
            for (var prop$1 in props) {
                if (componentHooks[prop$1] !== void 0) {
                    if (!ref) {
                        ref = {};
                    }
                    ref[prop$1] = props[prop$1];
                }
                else if (prop$1 === 'key') {
                    key = props.key;
                }
                else if (prop$1 === 'ref') {
                    ref = props.ref;
                }
                else {
                    newProps[prop$1] = props[prop$1];
                }
            }
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["createComponentVNode"])(flags, type, newProps, key, ref);
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["createVNode"])(flags, type, className, children, 0 /* UnknownChildren */, newProps, key, ref);
}




/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = exports.Code = exports.Section = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.Stage = Stage;
exports.Scene = Scene;
exports.Narrative = Narrative;

var _inferno = __webpack_require__(0);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _infernoRouter = __webpack_require__(35);

var _prismjs = __webpack_require__(108);

var _prismjs2 = _interopRequireDefault(_prismjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(107);

var Section = exports.Section = function (_Component) {
  _inherits(Section, _Component);

  function Section() {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
  }

  _createClass(Section, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.context.addSection(this.props.title, this.props.title.toLowerCase());
    }
  }, {
    key: 'render',
    value: function render(_ref) {
      var title = _ref.title,
          children = _ref.children;

      return (0, _inferno.createVNode)(1, 'div', (0, _classnames2.default)(this.props.className, "ExampleSection"), [title && (0, _inferno.createVNode)(1, 'h2', null, title, 0), children], 0, {
        'id': this.props.title.toLowerCase()
      });
    }
  }]);

  return Section;
}(_inferno.Component);

function Stage(_ref2) {
  var children = _ref2.children;

  return (0, _inferno.createVNode)(1, 'div', 'ExampleStage', children, 0);
}

function Scene(_ref3) {
  var children = _ref3.children;

  return (0, _inferno.createVNode)(1, 'div', 'ExampleScene', children, 0);
}

function Narrative(_ref4) {
  var children = _ref4.children;

  return (0, _inferno.createVNode)(1, 'div', 'ExampleNarrative', children, 0);
}

var Code = exports.Code = function (_Component2) {
  _inherits(Code, _Component2);

  function Code(props) {
    _classCallCheck(this, Code);

    var _this2 = _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).call(this, props));

    _this2._hightlight = _this2._hightlight.bind(_this2);
    return _this2;
  }

  _createClass(Code, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._hightlight();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.children !== this.props.children) {
        this._hightlight();
      }
    }
  }, {
    key: '_hightlight',
    value: function _hightlight() {
      _prismjs2.default.highlightElement(this._domNode, this.props.async);
    }
  }, {
    key: 'render',
    value: function render(_ref5) {
      var _this3 = this;

      var children = _ref5.children;

      var languageCls = 'language-' + (this.props.language || 'jsx');
      return (0, _inferno.createVNode)(1, 'div', 'ExampleScene-Code', (0, _inferno.createVNode)(1, 'pre', null, (0, _inferno.createVNode)(1, 'code', languageCls, children, 0, null, null, function (domNode) {
        return _this3._domNode = domNode;
      }), 2), 2);
    }
  }]);

  return Code;
}(_inferno.Component);

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

  return (0, _inferno.createVNode)(1, 'div', 'PageMenuContainer', (0, _inferno.createVNode)(1, 'ul', 'PageMenu nav flex-column', [(0, _inferno.createVNode)(1, 'li', 'nav-item', (0, _inferno.createVNode)(1, 'h4', 'PageMenu-Header', (0, _inferno.createTextVNode)('Components'), 2), 2), props.pageLinks.map(function (page) {
    return (0, _inferno.createVNode)(1, 'li', 'nav-item', (0, _inferno.createComponentVNode)(2, _infernoRouter.Link, {
      'className': 'nav-link PageLink',
      'to': page.link,
      children: page.title
    }), 2);
  }).concat(props.pageSections.sort(function (a, b) {
    return a.title == b.title ? 0 : a.title < b.title ? -1 : 1;
  }).map(function (item) {
    return (0, _inferno.createVNode)(1, 'li', 'nav-item', (0, _inferno.createVNode)(1, 'a', 'nav-link SectionLink', item.title, 0, {
      'href': '#' + item.anchor,
      'onClick': function onClick(e) {
        e.preventDefault();
        var el = document.getElementById(e.target.hash.split('#')[1]);
        var y = el.offsetTop;
        // smoothScrollVertTo(y, 500)
        smoothScrollVertTo(y, 500);
      }
    }), 2);
  }))], 0), 2);
}

var Page = exports.Page = function (_Component3) {
  _inherits(Page, _Component3);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this4 = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    _this4.state = {
      active: false,
      pageSections: []
    };
    return _this4;
  }

  _createClass(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this5 = this;

      setTimeout(function () {
        _this5.setState({
          active: true
        });
      }, 10);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        addSection: this.addSection.bind(this)
      };
    }
  }, {
    key: 'addSection',
    value: function addSection(title, anchor) {
      this.state.pageSections.push({ title: title, anchor: anchor });
    }
  }, {
    key: 'render',
    value: function render() {
      var cls = {
        PageContent: true,
        'InfernoAnimation--noAnim': !this.state.active
      };

      return (0, _inferno.createVNode)(1, 'div', (0, _classnames2.default)(cls), [(0, _inferno.createComponentVNode)(2, PageMenu, {
        'pageSections': this.state.pageSections,
        'pageLinks': this.context.pageLinks
      }), this.props.children], 0);
    }
  }]);

  return Page;
}(_inferno.Component);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  color: 'secondary',
  tag: 'button'
};

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: 'onClick',
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
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          block = _props.block,
          children = _props.children,
          className = _props.className,
          cssModule = _props.cssModule,
          color = _props.color,
          outline = _props.outline,
          size = _props.size,
          Tag = _props.tag,
          innerRef = _props.innerRef,
          attributes = _objectWithoutProperties(_props, ['active', 'block', 'children', 'className', 'cssModule', 'color', 'outline', 'size', 'tag', 'innerRef']);

      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'btn', 'btn' + (outline ? '-outline' : '') + '-' + color, size ? 'btn-' + size : false, block ? 'btn-block' : false, { active: active, disabled: this.props.disabled }), cssModule);

      if (attributes.href && Tag === 'button') {
        Tag = 'a';
      }

      Object.assign(attributes, {
        className: classes,
        type: Tag === 'button' && attributes.onClick ? 'button' : undefined,
        ref: innerRef,
        onClick: this.onClick
      });

      return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
    }
  }]);

  return Button;
}(_inferno.Component);

Button.defaultProps = defaultProps;

exports.default = Button;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
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
    }
    // if setTimeout wasn't available but was latter defined
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
    }
    // if clearTimeout wasn't available but was latter defined
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
};

// v8 likes predictible objects
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__ = __webpack_require__(149);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EMPTY_OBJ", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NO_OP", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createComponentVNode", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createRenderer", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createTextVNode", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createVNode", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "directClone", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getFlagsForElementVnode", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getNumberStyleValue", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "linkEvent", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "normalizeProps", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "options", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "render", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "version", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["q"]; });


if (process.env.NODE_ENV !== 'production') {
  console.warn('You are running production build of Inferno in development mode. Use dev:module entry point.');
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoComponent = __webpack_require__(33);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _infernoShared = __webpack_require__(23);

var _infernoPopper = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/no-find-dom-node: 0 */
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md

var defaultProps = {
  isOpen: false,
  dropup: false,
  nav: false,
  addonType: false,
  inNavbar: false
};

var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.addEvents = _this.addEvents.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.removeEvents = _this.removeEvents.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        toggle: this.props.toggle,
        isOpen: this.props.isOpen,
        dropup: this.props.dropup,
        inNavbar: this.props.inNavbar
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: 'getContainer',
    value: function getContainer() {
      return this.$V.dom;
    }
  }, {
    key: 'addEvents',
    value: function addEvents() {
      var _this2 = this;

      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.addEventListener(event, _this2.handleDocumentClick, true);
      });
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {
      var _this3 = this;

      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
      var container = this.getContainer();

      if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
        return;
      }

      this.toggle(e);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if ([keyCodes.esc, keyCodes.up, keyCodes.down, keyCodes.space].indexOf(e.which) === -1 || /button/i.test(e.target.tagName) && e.which === keyCodes.space || /input|textarea/i.test(e.target.tagName)) {
        return;
      }

      e.preventDefault();
      if (this.props.disabled) return;

      var container = this.getContainer();

      if (e.which === keyCodes.space && this.props.isOpen && container !== e.target) {
        e.target.click();
      }

      if (e.which === keyCodes.esc || !this.props.isOpen) {
        this.toggle(e);
        container.querySelector('[aria-expanded]').focus();
        return;
      }

      var menuClass = (0, _utils.mapToCssModules)('dropdown-menu', this.props.cssModule);
      var itemClass = (0, _utils.mapToCssModules)('dropdown-item', this.props.cssModule);
      var disabledClass = (0, _utils.mapToCssModules)('disabled', this.props.cssModule);

      var items = container.querySelectorAll('.' + menuClass + ' .' + itemClass + ':not(.' + disabledClass + ')');

      if (!items.length) return;

      var index = -1;
      for (var i = 0; i < items.length; i += 1) {
        if (items[i] === e.target) {
          index = i;
          break;
        }
      }

      if (e.which === keyCodes.up && index > 0) {
        index -= 1;
      }

      if (e.which === keyCodes.down && index < items.length - 1) {
        index += 1;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _omit = (0, _utils.omit)(this.props, ['toggle', 'disabled', 'inNavbar']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          isOpen = _omit.isOpen,
          group = _omit.group,
          size = _omit.size,
          nav = _omit.nav,
          addonType = _omit.addonType,
          attrs = _objectWithoutProperties(_omit, ['className', 'cssModule', 'dropup', 'isOpen', 'group', 'size', 'nav', 'addonType']);

      attrs.tag = attrs.tag || (nav ? 'li' : 'div');

      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, (_classNames = {}, _defineProperty(_classNames, 'input-group-' + addonType, addonType), _defineProperty(_classNames, 'btn-group', group), _defineProperty(_classNames, 'btn-group-' + size, !!size), _defineProperty(_classNames, 'dropdown', !group && !addonType), _defineProperty(_classNames, 'show', isOpen), _defineProperty(_classNames, 'dropup', dropup), _defineProperty(_classNames, 'nav-item', nav), _classNames)), cssModule);
      return (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, _infernoPopper.Manager, _extends({}, attrs, {
        'className': classes,
        'onKeyDown': this.handleKeyDown
      })));
    }
  }]);

  return Dropdown;
}(_infernoComponent2.default);

Dropdown.defaultProps = defaultProps;

exports.default = Dropdown;
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Arrow: __webpack_require__(135),
  Manager: __webpack_require__(136),
  Popper: __webpack_require__(137),
  Target: __webpack_require__(138),
  Travel: __webpack_require__(139),
  placements: __webpack_require__(53).placements
};

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  tag: 'button',
  toggle: true
};

var DropdownItem = function (_Component) {
  _inherits(DropdownItem, _Component);

  function DropdownItem(props) {
    _classCallCheck(this, DropdownItem);

    var _this = _possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    _this.getTabIndex = _this.getTabIndex.bind(_this);
    return _this;
  }

  _createClass(DropdownItem, [{
    key: 'onClick',
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
    key: 'getTabIndex',
    value: function getTabIndex() {
      if (this.props.disabled || this.props.header || this.props.divider) {
        return '-1';
      }

      return '0';
    }
  }, {
    key: 'render',
    value: function render() {
      var tabIndex = this.getTabIndex();

      var _omit = (0, _utils.omit)(this.props, ['toggle']),
          children = _omit.children,
          className = _omit.className,
          cssModule = _omit.cssModule,
          divider = _omit.divider,
          Tag = _omit.tag,
          header = _omit.header,
          active = _omit.active,
          props = _objectWithoutProperties(_omit, ['children', 'className', 'cssModule', 'divider', 'tag', 'header', 'active']);

      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, {
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

      return (0, _infernoCreateElement.createElement)(Tag, props, children);
    }
  }]);

  return DropdownItem;
}(_inferno.Component);

DropdownItem.defaultProps = defaultProps;

exports.default = DropdownItem;
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _infernoPopper = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div',
  flip: true
};

var noFlipModifier = { flip: { enabled: false } };

var DropdownMenu = function DropdownMenu(props, context) {
  var className = props.className,
      cssModule = props.cssModule,
      right = props.right,
      tag = props.tag,
      flip = props.flip,
      attrs = _objectWithoutProperties(props, ['className', 'cssModule', 'right', 'tag', 'flip']);

  var position1 = context.dropup ? 'top' : 'bottom';
  var position2 = right ? 'end' : 'start';
  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'dropdown-menu', {
    'dropdown-menu-right': right,
    show: context.isOpen
  }), cssModule);

  attrs.placement = position1 + '-' + position2;

  return (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, _infernoPopper.Popper, _extends({
    'tabIndex': '-1',
    'role': 'menu'
  }, attrs, {
    'component': tag,
    'aria-hidden': !context.isOpen,
    'className': classes,
    'modifiers': !flip ? noFlipModifier : undefined
  })));
};

DropdownMenu.defaultProps = defaultProps;

exports.default = DropdownMenu;
module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _infernoPopper = __webpack_require__(9);

var _Button = __webpack_require__(5);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  'data-toggle': 'dropdown',
  'aria-haspopup': true,
  color: 'secondary'
};

var DropdownToggle = function (_Component) {
  _inherits(DropdownToggle, _Component);

  function DropdownToggle(props) {
    _classCallCheck(this, DropdownToggle);

    var _this = _possibleConstructorReturn(this, (DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(DropdownToggle, [{
    key: 'onClick',
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
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          color = _props.color,
          cssModule = _props.cssModule,
          caret = _props.caret,
          split = _props.split,
          nav = _props.nav,
          tag = _props.tag,
          props = _objectWithoutProperties(_props, ['className', 'color', 'cssModule', 'caret', 'split', 'nav', 'tag']);

      var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        'nav-link': nav
      }), cssModule);
      var children = props.children || (0, _inferno.createVNode)(1, 'span', 'sr-only', ariaLabel, 0);

      var Tag = void 0;

      if (nav && !tag) {
        Tag = 'a';
        props.href = '#';
      } else if (!tag) {
        Tag = _Button2.default;
        props.color = color;
        props.cssModule = cssModule;
      } else {
        Tag = tag;
      }

      return (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, _infernoPopper.Target, _extends({}, props, {
        'className': classes,
        'component': Tag,
        'onClick': this.onClick,
        'aria-haspopup': 'true',
        'aria-expanded': this.context.isOpen,
        'children': children
      })));
    }
  }]);

  return DropdownToggle;
}(_inferno.Component);

DropdownToggle.defaultProps = defaultProps;

exports.default = DropdownToggle;
module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

  return 'flex-' + vertical + '-column';
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
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tabs', 'pills', 'vertical', 'horizontal', 'justified', 'fill', 'navbar', 'card', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, navbar ? 'navbar-nav' : 'nav', horizontal ? 'justify-content-' + horizontal : false, getVerticalClass(vertical), {
    'nav-tabs': tabs,
    'card-header-tabs': card && tabs,
    'nav-pills': pills,
    'card-header-pills': card && pills,
    'nav-justified': justified,
    'nav-fill': fill
  }), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

Nav.defaultProps = defaultProps;

exports.default = Nav;
module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'li'
};

var NavItem = function NavItem(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'nav-item'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

NavItem.defaultProps = defaultProps;

exports.default = NavItem;
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _infernoComponent = __webpack_require__(33);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  tag: 'a'
};

var NavLink = function (_Component) {
  _inherits(NavLink, _Component);

  function NavLink(props) {
    _classCallCheck(this, NavLink);

    var _this = _possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(NavLink, [{
    key: 'onClick',
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
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          cssModule = _props.cssModule,
          active = _props.active,
          Tag = _props.tag,
          innerRef = _props.innerRef,
          attributes = _objectWithoutProperties(_props, ['children', 'className', 'cssModule', 'active', 'tag', 'innerRef']);

      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'nav-link', {
        disabled: attributes.disabled,
        active: active
      }), cssModule);

      Object.assign(attributes, {
        className: classes,
        ref: innerRef,
        onClick: this.onClick
      });

      return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
    }
  }]);

  return NavLink;
}(_infernoComponent2.default);

NavLink.defaultProps = defaultProps;

exports.default = NavLink;
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
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

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;

  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(7);


// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== 'undefined' && window.document);
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
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
function isObject(o) {
    return typeof o === 'object';
}

var componentHooks = {
    onComponentDidMount: 1,
    onComponentDidUpdate: 1,
    onComponentShouldUpdate: 1,
    onComponentWillMount: 1,
    onComponentWillUnmount: 1,
    onComponentWillUpdate: 1
};
/**
 * Creates virtual node
 * @param {string|Function|Component<any, any>} type Type of node
 * @param {object=} props Optional props for virtual node
 * @param {...{object}=} _children Optional children for virtual node
 * @returns {VNode} new virtual ndoe
 */
function createElement(type, props) {
    var _children = [], len = arguments.length - 2;
    while ( len-- > 0 ) _children[ len ] = arguments[ len + 2 ];

    if (isInvalid(type) || isObject(type)) {
        throw new Error('Inferno Error: createElement() name parameter cannot be undefined, null, false or true, It must be a string, class or function.');
    }
    var children = _children;
    var ref = null;
    var key = null;
    var className = null;
    var flags = 0;
    var newProps;
    if (_children) {
        if (_children.length === 1) {
            children = _children[0];
        }
        else if (_children.length === 0) {
            children = void 0;
        }
    }
    if (isString(type)) {
        flags = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["getFlagsForElementVnode"])(type);
        if (!isNullOrUndef(props)) {
            newProps = {};
            for (var prop in props) {
                if (prop === 'className' || prop === 'class') {
                    className = props[prop];
                }
                else if (prop === 'key') {
                    key = props.key;
                }
                else if (prop === 'children' && isUndefined(children)) {
                    children = props.children; // always favour children args, default to props
                }
                else if (prop === 'ref') {
                    ref = props.ref;
                }
                else {
                    newProps[prop] = props[prop];
                }
            }
        }
    }
    else {
        flags = 2 /* ComponentUnknown */;
        if (!isUndefined(children)) {
            if (!props) {
                props = {};
            }
            props.children = children;
            children = null;
        }
        if (!isNullOrUndef(props)) {
            newProps = {};
            for (var prop$1 in props) {
                if (componentHooks[prop$1] !== void 0) {
                    if (!ref) {
                        ref = {};
                    }
                    ref[prop$1] = props[prop$1];
                }
                else if (prop$1 === 'key') {
                    key = props.key;
                }
                else if (prop$1 === 'ref') {
                    ref = props.ref;
                }
                else {
                    newProps[prop$1] = props[prop$1];
                }
            }
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["createComponentVNode"])(flags, type, newProps, key, ref);
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["createVNode"])(flags, type, className, children, 0 /* UnknownChildren */, newProps, key, ref);
}




/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'color', 'block', 'body', 'inverse', 'outline', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'card', inverse ? 'text-white' : false, block || body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + '-' + color : false), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

Card.defaultProps = defaultProps;

exports.default = Card;
module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationsAreEqual = exports.createLocation = undefined;

var _resolvePathname = __webpack_require__(99);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(100);

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
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
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),
/* 22 */
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

var warning = function warning() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function warning(condition, format, args) {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_OP", function() { return NO_OP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_MSG", function() { return ERROR_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStringOrNumber", function() { return isStringOrNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndef", function() { return isNullOrUndef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInvalid", function() { return isInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTrue", function() { return isTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return throwError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineFrom", function() { return combineFrom; });
var NO_OP = '$NO_OP';
var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== 'undefined' && window.document);
function toArray(children) {
    return isArray(children) ? children : children ? [children] : children;
}
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
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
function isDefined(o) {
    return o !== void 0;
}
function isObject(o) {
    return typeof o === 'object';
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error(("Inferno Error: " + message));
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'size', 'vertical', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

ButtonGroup.defaultProps = defaultProps;

exports.default = ButtonGroup;
module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var CardBody = function CardBody(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'card-body'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

CardBody.defaultProps = defaultProps;

exports.default = CardBody;
module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'p'
};

var CardText = function CardText(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'card-text'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

CardText.defaultProps = defaultProps;

exports.default = CardText;
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'h4'
};

var CardTitle = function CardTitle(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'card-title'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

CardTitle.defaultProps = defaultProps;

exports.default = CardTitle;
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag', 'innerRef']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className), cssModule);

  Object.assign(attributes, {
    className: classes,
    ref: innerRef
  });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

Form.defaultProps = defaultProps;

exports.default = Form;
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'row', 'disabled', 'check', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, row ? 'row' : false, check ? 'form-check' : 'form-group', check && disabled ? 'disabled' : false), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

FormGroup.defaultProps = defaultProps;

exports.default = FormGroup;
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prefer-stateless-function: 0 */


var defaultProps = {
  tag: 'p',
  type: 'text'
};

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          type = _props.type,
          bsSize = _props.bsSize,
          tag = _props.tag,
          valid = _props.valid,
          addon = _props.addon,
          plaintext = _props.plaintext,
          innerRef = _props.innerRef,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'type', 'bsSize', 'tag', 'valid', 'addon', 'plaintext', 'innerRef']);

      var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;

      var fileInput = type === 'file';
      var textareaInput = type === 'textarea';
      var selectInput = type === 'select';
      var Tag = selectInput || textareaInput ? type : 'input';

      var formControlClass = 'form-control';

      if (plaintext) {
        formControlClass = formControlClass + '-plaintext';
        Tag = tag;
      } else if (fileInput) {
        formControlClass = formControlClass + '-file';
      } else if (checkInput) {
        if (addon) {
          formControlClass = null;
        } else {
          formControlClass = 'form-check-input';
        }
      }

      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, valid === false && 'is-invalid', valid && 'is-valid', bsSize ? 'form-control-' + bsSize : false, formControlClass), cssModule);

      if (Tag === 'input') {
        attributes.type = type;
      }

      Object.assign(attributes, {
        className: classes,
        ref: innerRef
      });

      return (0, _infernoCreateElement.createElement)(Tag, attributes);
    }
  }]);

  return Input;
}(_inferno.Component);

Input.defaultProps = defaultProps;

exports.default = Input;
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'hidden', 'tag', 'check', 'disabled', 'htmlFor']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, hidden ? 'sr-only' : false, check ? 'form-check-label' : 'form-control-label', check && disabled ? 'disabled' : false), cssModule);

  Object.assign(attributes, {
    className: classes,
    htmlFor: htmlFor
  });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

Label.defaultProps = defaultProps;

exports.default = Label;
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _warning = __webpack_require__(22);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

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
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

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

exports.default = createTransitionManager;
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component$1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(144);


var Component$1 = __WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* Component */];

/* harmony default export */ __webpack_exports__["default"] = (Component$1);



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EMPTY_OBJ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NO_OP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createComponentVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createTextVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return directClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getFlagsForElementVnode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getNumberStyleValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return linkEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return normalizeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return version; });
var NO_OP = '$NO_OP';
var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== 'undefined' && window.document);
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
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
function isDefined(o) {
    return o !== void 0;
}
function isObject(o) {
    return typeof o === 'object';
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error(("Inferno Error: " + message));
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

var keyPrefix = '$';
function getVNode(childFlags, children, className, flags, key, props, ref, type) {
    {
        return {
            childFlags: childFlags,
            children: children,
            className: className,
            dom: null,
            flags: flags,
            key: key === void 0 ? null : key,
            parentVNode: null,
            props: props === void 0 ? null : props,
            ref: ref === void 0 ? null : ref,
            type: type
        };
    }
    return {
        childFlags: childFlags,
        children: children,
        className: className,
        dom: null,
        flags: flags,
        isValidated: false,
        key: key === void 0 ? null : key,
        parentVNode: null,
        props: props === void 0 ? null : props,
        ref: ref === void 0 ? null : ref,
        type: type
    };
}
function createVNode(flags, type, className, children, childFlags, props, key, ref) {
    var childFlag = childFlags === void 0 ? 1 /* HasInvalidChildren */ : childFlags;
    var vNode = getVNode(childFlag, children, className, flags, key, props, ref, type);
    var optsVNode = options.createVNode;
    if (typeof optsVNode === 'function') {
        optsVNode(vNode);
    }
    if (childFlag === 0 /* UnknownChildren */) {
        normalizeChildren(vNode, vNode.children);
    }
    return vNode;
}
function createComponentVNode(flags, type, props, key, ref) {
    if ((flags & 2 /* ComponentUnknown */) > 0) {
        flags = isDefined(type.prototype) && isFunction(type.prototype.render) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
    }
    // set default props
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
    if ((flags & 8 /* ComponentFunction */) > 0) {
        var defaultHooks = type.defaultHooks;
        if (!isNullOrUndef(defaultHooks)) {
            if (!ref) {
                // As ref cannot be referenced from application level, we can use the same refs object
                ref = defaultHooks;
            }
            else {
                for (var prop$1 in defaultHooks) {
                    if (isUndefined(ref[prop$1])) {
                        ref[prop$1] = defaultHooks[prop$1];
                    }
                }
            }
        }
    }
    var vNode = getVNode(1 /* HasInvalidChildren */, null, null, flags, key, props, ref, type);
    var optsVNode = options.createVNode;
    if (isFunction(optsVNode)) {
        optsVNode(vNode);
    }
    return vNode;
}
function createTextVNode(text, key) {
    return getVNode(1 /* HasInvalidChildren */, isNullOrUndef(text) ? '' : text, null, 16 /* Text */, key, null, null, null);
}
function normalizeProps(vNode) {
    var props = vNode.props;
    if (props) {
        if (vNode.flags & 481 /* Element */) {
            if (isDefined(props.children) && isNullOrUndef(vNode.children)) {
                normalizeChildren(vNode, props.children);
            }
            if (isDefined(props.className)) {
                vNode.className = props.className || null;
                props.className = undefined;
            }
        }
        if (isDefined(props.key)) {
            vNode.key = props.key;
            props.key = undefined;
        }
        if (isDefined(props.ref)) {
            vNode.ref = props.ref;
            props.ref = undefined;
        }
    }
    return vNode;
}
function directClone(vNodeToClone) {
    var newVNode;
    var flags = vNodeToClone.flags;
    if (flags & 14 /* Component */) {
        var props;
        var propsToClone = vNodeToClone.props;
        if (!isNull(propsToClone)) {
            props = {};
            for (var key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
        newVNode = createComponentVNode(flags, vNodeToClone.type, props, vNodeToClone.key, vNodeToClone.ref);
    }
    else if (flags & 481 /* Element */) {
        var children = vNodeToClone.children;
        newVNode = createVNode(flags, vNodeToClone.type, vNodeToClone.className, children, 0 /* UnknownChildren */, vNodeToClone.props, vNodeToClone.key, vNodeToClone.ref);
    }
    else if (flags & 16 /* Text */) {
        newVNode = createTextVNode(vNodeToClone.children, vNodeToClone.key);
    }
    else if (flags & 1024 /* Portal */) {
        newVNode = vNodeToClone;
    }
    return newVNode;
}
function createVoidVNode() {
    return createTextVNode('', null);
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        if (!isInvalid(n)) {
            var newKey = currentKey + keyPrefix + index;
            if (isArray(n)) {
                _normalizeVNodes(n, result, 0, newKey);
            }
            else {
                if (isStringOrNumber(n)) {
                    n = createTextVNode(n, newKey);
                }
                else {
                    var oldKey = n.key;
                    var isPrefixedKey = isString(oldKey) && oldKey[0] === keyPrefix;
                    if (!isNull(n.dom) || isPrefixedKey) {
                        n = directClone(n);
                    }
                    if (isNull(oldKey) || isPrefixedKey) {
                        n.key = newKey;
                    }
                    else {
                        n.key = currentKey + oldKey;
                    }
                }
                result.push(n);
            }
        }
    }
}
function getFlagsForElementVnode(type) {
    if (type === 'svg') {
        return 32 /* SvgElement */;
    }
    if (type === 'input') {
        return 64 /* InputElement */;
    }
    if (type === 'select') {
        return 256 /* SelectElement */;
    }
    if (type === 'textarea') {
        return 128 /* TextareaElement */;
    }
    return 1 /* HtmlElement */;
}
function normalizeChildren(vNode, children) {
    var newChildren;
    var newChildFlags;
    // Don't change children to match strict equal (===) true in patching
    if (isInvalid(children)) {
        newChildFlags = 1 /* HasInvalidChildren */;
        newChildren = children;
    }
    else if (isString(children)) {
        newChildFlags = 2 /* HasVNodeChildren */;
        newChildren = createTextVNode(children);
    }
    else if (isNumber(children)) {
        newChildFlags = 2 /* HasVNodeChildren */;
        newChildren = createTextVNode(children + '');
    }
    else if (isArray(children)) {
        var len = children.length;
        if (len === 0) {
            newChildren = null;
            newChildFlags = 1 /* HasInvalidChildren */;
        }
        else {
            // we assign $ which basically means we've flagged this array for future note
            // if it comes back again, we need to clone it, as people are using it
            // in an immutable way
            // tslint:disable-next-line
            if (Object.isFrozen(children) || children['$'] === true) {
                children = children.slice();
            }
            newChildFlags = 8 /* HasKeyedChildren */;
            for (var i = 0; i < len; i++) {
                var n = children[i];
                if (isInvalid(n) || isArray(n)) {
                    newChildren = newChildren || children.slice(0, i);
                    _normalizeVNodes(children, newChildren, i, '');
                    break;
                }
                else if (isStringOrNumber(n)) {
                    newChildren = newChildren || children.slice(0, i);
                    newChildren.push(createTextVNode(n, keyPrefix + i));
                }
                else {
                    var key = n.key;
                    var isNullDom = isNull(n.dom);
                    var isNullKey = isNull(key);
                    var isPrefixed = !isNullKey && key[0] === keyPrefix;
                    if (!isNullDom || isNullKey || isPrefixed) {
                        newChildren = newChildren || children.slice(0, i);
                        if (!isNullDom || isPrefixed) {
                            n = directClone(n);
                        }
                        if (isNullKey || isPrefixed) {
                            n.key = keyPrefix + i;
                        }
                        newChildren.push(n);
                    }
                    else if (newChildren) {
                        newChildren.push(n);
                    }
                }
            }
            newChildren = newChildren || children;
            newChildren.$ = true;
        }
    }
    else {
        newChildren = children;
        if (!isNull(children.dom)) {
            newChildren = directClone(children);
        }
        newChildFlags = 2 /* HasVNodeChildren */;
    }
    vNode.children = newChildren;
    vNode.childFlags = newChildFlags;
    return vNode;
}
var options = {
    afterMount: null,
    afterRender: null,
    afterUpdate: null,
    beforeRender: null,
    beforeUnmount: null,
    createVNode: null,
    roots: []
};

/**
 * Links given data to event as first parameter
 * @param {*} data data to be linked, it will be available in function as first parameter
 * @param {Function} event Function to be called when event occurs
 * @returns {{data: *, event: Function}}
 */
function linkEvent(data, event) {
    if (isFunction(event)) {
        return { data: data, event: event };
    }
    return null; // Return null when event is invalid, to avoid creating unnecessary event handlers
}

var xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = 'http://www.w3.org/XML/1998/namespace';
var svgNS = 'http://www.w3.org/2000/svg';
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

// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
var EMPTY_OBJ = {};
var LIFECYCLE = [];
function appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
function insertOrAppend(parentDom, newNode, nextNode) {
    if (isNullOrUndef(nextNode)) {
        appendChild(parentDom, newNode);
    }
    else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(svgNS, tag);
    }
    return document.createElement(tag);
}
function replaceChild(parentDom, newDom, lastDom) {
    parentDom.replaceChild(newDom, lastDom);
}
function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
function callAll(arrayFn) {
    var listener;
    while ((listener = arrayFn.shift()) !== undefined) {
        listener();
    }
}

var attachedEventCounts = {};
var attachedEvents = {};
function handleEvent(name, nextEvent, dom) {
    var eventsLeft = attachedEventCounts[name];
    var eventsObject = dom.$EV;
    if (nextEvent) {
        if (!eventsLeft) {
            attachedEvents[name] = attachEventToDocument(name);
            attachedEventCounts[name] = 0;
        }
        if (!eventsObject) {
            eventsObject = dom.$EV = {};
        }
        if (!eventsObject[name]) {
            attachedEventCounts[name]++;
        }
        eventsObject[name] = nextEvent;
    }
    else if (eventsObject && eventsObject[name]) {
        attachedEventCounts[name]--;
        if (eventsLeft === 1) {
            document.removeEventListener(normalizeEventName(name), attachedEvents[name]);
            attachedEvents[name] = null;
        }
        eventsObject[name] = nextEvent;
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
                }
                else {
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
    this.stopImmediatePropagation();
}
function attachEventToDocument(name) {
    var docEvent = function (event) {
        var type = event.type;
        var isClick = type === 'click' || type === 'dblclick';
        if (isClick && event.button !== 0) {
            // Firefox incorrectly triggers click event for mid/right mouse buttons.
            // This bug has been active for 12 years.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=184051
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
        event.stopPropagation = stopPropagation;
        // Event data needs to be object to save reference to currentTarget getter
        var eventData = {
            dom: document
        };
        try {
            Object.defineProperty(event, 'currentTarget', {
                configurable: true,
                get: function get() {
                    return eventData.dom;
                }
            });
        }
        catch (e) {
            /* safari7 and phantomJS will crash */
        }
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
function isSamePropsInnerHTML(dom, props) {
    return Boolean(props && props.dangerouslySetInnerHTML && props.dangerouslySetInnerHTML.__html && isSameInnerHTML(dom, props.dangerouslySetInnerHTML.__html));
}

function triggerEventListener(props, methodName, e) {
    if (props[methodName]) {
        var listener = props[methodName];
        if (listener.event) {
            listener.event(listener.data, e);
        }
        else {
            listener(e);
        }
    }
    else {
        var nativeListenerName = methodName.toLowerCase();
        if (props[nativeListenerName]) {
            props[nativeListenerName](e);
        }
    }
}
function createWrappedFunction(methodName, applyValue) {
    var fnMethod = function (e) {
        e.stopPropagation();
        var vNode = this.$V;
        // If vNode is gone by the time event fires, no-op
        if (!vNode) {
            return;
        }
        var props = vNode.props || EMPTY_OBJ;
        var dom = vNode.dom;
        if (isString(methodName)) {
            triggerEventListener(props, methodName, e);
        }
        else {
            for (var i = 0; i < methodName.length; i++) {
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
    }
    else {
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
    }
    else {
        if (hasValue && dom.value !== value) {
            dom.defaultValue = value;
            dom.value = value;
        }
        else if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
}

function updateChildOptionGroup(vNode, value) {
    var type = vNode.type;
    if (type === 'optgroup') {
        var children = vNode.children;
        var childFlags = vNode.childFlags;
        if (childFlags & 12 /* MultipleChildren */) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOption(children[i], value);
            }
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            updateChildOption(children, value);
        }
    }
    else {
        updateChildOption(vNode, value);
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if ((isArray(value) && value.indexOf(props.value) !== -1) || props.value === value) {
        dom.selected = true;
    }
    else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {
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
    if ((childFlags & 1 /* HasInvalidChildren */) === 0) {
        var children = vNode.children;
        var value = nextPropsOrEmpty.value;
        if (mounting && isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        if (childFlags & 12 /* MultipleChildren */) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOptionGroup(children[i], value);
            }
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            updateChildOptionGroup(children, value);
        }
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
    }
    else if (domValue !== value) {
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
    if (flags & 64 /* InputElement */) {
        applyValueInput(nextPropsOrEmpty, dom);
    }
    else if (flags & 256 /* SelectElement */) {
        applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode);
    }
    else if (flags & 128 /* TextareaElement */) {
        applyValueTextArea(nextPropsOrEmpty, dom, mounting);
    }
    if (isControlled) {
        dom.$V = vNode;
    }
}
function addFormElementEventHandlers(flags, dom, nextPropsOrEmpty) {
    if (flags & 64 /* InputElement */) {
        inputEvents(dom, nextPropsOrEmpty);
    }
    else if (flags & 256 /* SelectElement */) {
        selectEvents(dom);
    }
    else if (flags & 128 /* TextareaElement */) {
        textAreaEvents(dom, nextPropsOrEmpty);
    }
}
function isControlledFormElement(nextPropsOrEmpty) {
    return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type) ? !isNullOrUndef(nextPropsOrEmpty.checked) : !isNullOrUndef(nextPropsOrEmpty.value);
}

function remove(vNode, parentDom) {
    unmount(vNode);
    if (!isNull(parentDom)) {
        removeChild(parentDom, vNode.dom);
        // Let carbage collector free memory
        vNode.dom = null;
    }
}
function unmount(vNode) {
    var flags = vNode.flags;
    if (flags & 481 /* Element */) {
        var ref = vNode.ref;
        var props = vNode.props;
        if (isFunction(ref)) {
            ref(null);
        }
        var children = vNode.children;
        var childFlags = vNode.childFlags;
        if (childFlags & 12 /* MultipleChildren */) {
            unmountAllChildren(children);
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            unmount(children);
        }
        if (!isNull(props)) {
            for (var name in props) {
                switch (name) {
                    case 'onClick':
                    case 'onDblClick':
                    case 'onFocusIn':
                    case 'onFocusOut':
                    case 'onKeyDown':
                    case 'onKeyPress':
                    case 'onKeyUp':
                    case 'onMouseDown':
                    case 'onMouseMove':
                    case 'onMouseUp':
                    case 'onSubmit':
                    case 'onTouchEnd':
                    case 'onTouchMove':
                    case 'onTouchStart':
                        handleEvent(name, null, vNode.dom);
                        break;
                    default:
                        break;
                }
            }
        }
    }
    else if (flags & 14 /* Component */) {
        var instance = vNode.children;
        var ref$1 = vNode.ref;
        if (flags & 4 /* ComponentClass */) {
            if (isFunction(options.beforeUnmount)) {
                options.beforeUnmount(vNode);
            }
            if (isFunction(instance.componentWillUnmount)) {
                instance.componentWillUnmount();
            }
            if (isFunction(ref$1)) {
                ref$1(null);
            }
            instance.$UN = true;
            unmount(instance.$LI);
        }
        else {
            if (!isNullOrUndef(ref$1) && isFunction(ref$1.onComponentWillUnmount)) {
                ref$1.onComponentWillUnmount(vNode.dom, vNode.props || EMPTY_OBJ);
            }
            unmount(instance);
        }
    }
    else if (flags & 1024 /* Portal */) {
        var children$1 = vNode.children;
        if (!isNull(children$1) && isObject(children$1)) {
            remove(children$1, vNode.type);
        }
    }
}
function unmountAllChildren(children) {
    for (var i = 0, len = children.length; i < len; i++) {
        unmount(children[i]);
    }
}
function removeAllChildren(dom, children) {
    unmountAllChildren(children);
    dom.textContent = '';
}

function createLinkEvent(linkEvent, nextValue) {
    return function (e) {
        linkEvent(nextValue.data, e);
    };
}
function patchEvent(name, lastValue, nextValue, dom) {
    var nameLowerCase = name.toLowerCase();
    if (!isFunction(nextValue) && !isNullOrUndef(nextValue)) {
        var linkEvent = nextValue.event;
        if (linkEvent && isFunction(linkEvent)) {
            dom[nameLowerCase] = createLinkEvent(linkEvent, nextValue);
        }
        else {
            // Development warning
            
        }
    }
    else {
        var domEvent = dom[nameLowerCase];
        // if the function is wrapped, that means it's been controlled by a wrapper
        if (!domEvent || !domEvent.wrapped) {
            dom[nameLowerCase] = nextValue;
        }
    }
}
function getNumberStyleValue(style, value) {
    switch (style) {
        case 'animationIterationCount':
        case 'borderImageOutset':
        case 'borderImageSlice':
        case 'borderImageWidth':
        case 'boxFlex':
        case 'boxFlexGroup':
        case 'boxOrdinalGroup':
        case 'columnCount':
        case 'fillOpacity':
        case 'flex':
        case 'flexGrow':
        case 'flexNegative':
        case 'flexOrder':
        case 'flexPositive':
        case 'flexShrink':
        case 'floodOpacity':
        case 'fontWeight':
        case 'gridColumn':
        case 'gridRow':
        case 'lineClamp':
        case 'lineHeight':
        case 'opacity':
        case 'order':
        case 'orphans':
        case 'stopOpacity':
        case 'strokeDasharray':
        case 'strokeDashoffset':
        case 'strokeMiterlimit':
        case 'strokeOpacity':
        case 'strokeWidth':
        case 'tabSize':
        case 'widows':
        case 'zIndex':
        case 'zoom':
            return value;
        default:
            return value + 'px';
    }
}
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
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
                domStyle[style] = isNumber(value) ? getNumberStyleValue(style, value) : value;
            }
        }
        for (style in lastAttrValue) {
            if (isNullOrUndef(nextAttrValue[style])) {
                domStyle[style] = '';
            }
        }
    }
    else {
        for (style in nextAttrValue) {
            value = nextAttrValue[style];
            domStyle[style] = isNumber(value) ? getNumberStyleValue(style, value) : value;
        }
    }
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode) {
    switch (prop) {
        case 'onClick':
        case 'onDblClick':
        case 'onFocusIn':
        case 'onFocusOut':
        case 'onKeyDown':
        case 'onKeyPress':
        case 'onKeyUp':
        case 'onMouseDown':
        case 'onMouseMove':
        case 'onMouseUp':
        case 'onSubmit':
        case 'onTouchEnd':
        case 'onTouchMove':
        case 'onTouchStart':
            handleEvent(prop, nextValue, dom);
            break;
        case 'children':
        case 'childrenType':
        case 'className':
        case 'defaultValue':
        case 'key':
        case 'multiple':
        case 'ref':
            return;
        case 'allowfullscreen':
        case 'autoFocus':
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
            prop = prop === 'autoFocus' ? prop.toLowerCase() : prop;
            dom[prop] = !!nextValue;
            break;
        case 'defaultChecked':
        case 'value':
        case 'volume':
            if (hasControlledValue && prop === 'value') {
                return;
            }
            var value = isNullOrUndef(nextValue) ? '' : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
            break;
        case 'dangerouslySetInnerHTML':
            var lastHtml = (lastValue && lastValue.__html) || '';
            var nextHtml = (nextValue && nextValue.__html) || '';
            if (lastHtml !== nextHtml) {
                if (!isNullOrUndef(nextHtml) && !isSameInnerHTML(dom, nextHtml)) {
                    if (!isNull(lastVNode)) {
                        if (lastVNode.childFlags & 12 /* MultipleChildren */) {
                            unmountAllChildren(lastVNode.children);
                        }
                        else if (lastVNode.childFlags === 2 /* HasVNodeChildren */) {
                            unmount(lastVNode.children);
                        }
                        lastVNode.children = null;
                        lastVNode.childFlags = 1 /* HasInvalidChildren */;
                    }
                    dom.innerHTML = nextHtml;
                }
            }
            break;
        default:
            if (prop[0] === 'o' && prop[1] === 'n') {
                patchEvent(prop, lastValue, nextValue, dom);
            }
            else if (isNullOrUndef(nextValue)) {
                dom.removeAttribute(prop);
            }
            else if (prop === 'style') {
                patchStyle(lastValue, nextValue, dom);
            }
            else if (isSVG && namespaces[prop]) {
                // We optimize for NS being boolean. Its 99.9% time false
                // If we end up in this path we can read property again
                dom.setAttributeNS(namespaces[prop], prop, nextValue);
            }
            else {
                dom.setAttribute(prop, nextValue);
            }
            break;
    }
}
function mountProps(vNode, flags, props, dom, isSVG) {
    var hasControlledValue = false;
    var isFormElement = (flags & 448 /* FormElement */) > 0;
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

function createClassComponentInstance(vNode, Component, props, context) {
    var instance = new Component(props, context);
    vNode.children = instance;
    instance.$V = vNode;
    instance.$BS = false;
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    instance.$UN = false;
    if (isFunction(instance.componentWillMount)) {
        instance.$BR = true;
        instance.componentWillMount();
        if (instance.$PSS) {
            var state = instance.state;
            var pending = instance.$PS;
            if (isNull(state)) {
                instance.state = pending;
            }
            else {
                for (var key in pending) {
                    state[key] = pending[key];
                }
            }
            instance.$PSS = false;
            instance.$PS = null;
        }
        instance.$BR = false;
    }
    if (isFunction(options.beforeRender)) {
        options.beforeRender(instance);
    }
    var input = handleComponentInput(instance.render(props, instance.state, context), vNode);
    var childContext;
    if (isFunction(instance.getChildContext)) {
        childContext = instance.getChildContext();
    }
    if (isNullOrUndef(childContext)) {
        instance.$CX = context;
    }
    else {
        instance.$CX = combineFrom(context, childContext);
    }
    if (isFunction(options.afterRender)) {
        options.afterRender(instance);
    }
    instance.$LI = input;
    return instance;
}
function handleComponentInput(input, componentVNode) {
    // Development validation
    if (isInvalid(input)) {
        input = createVoidVNode();
    }
    else if (isStringOrNumber(input)) {
        input = createTextVNode(input, null);
    }
    else {
        if (input.dom) {
            input = directClone(input);
        }
        if (input.flags & 14 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = componentVNode;
        }
    }
    return input;
}

function mount(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 481 /* Element */) {
        return mountElement(vNode, parentDom, lifecycle, context, isSVG);
    }
    if (flags & 14 /* Component */) {
        return mountComponent(vNode, parentDom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    if (flags & 512 /* Void */ || flags & 16 /* Text */) {
        return mountText(vNode, parentDom);
    }
    if (flags & 1024 /* Portal */) {
        mount(vNode.children, vNode.type, lifecycle, context, false);
        return (vNode.dom = mountText(createVoidVNode(), parentDom));
    }
    // Development validation, in production we don't need to throw because it crashes anyway
    
}
function mountText(vNode, parentDom) {
    var dom = (vNode.dom = document.createTextNode(vNode.children));
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var ref = vNode.ref;
    var childFlags = vNode.childFlags;
    isSVG = isSVG || (flags & 32 /* SvgElement */) > 0;
    var dom = documentCreateElement(vNode.type, isSVG);
    vNode.dom = dom;
    if (!isNullOrUndef(className) && className !== '') {
        if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
    }
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    if ((childFlags & 1 /* HasInvalidChildren */) === 0) {
        var childrenIsSVG = isSVG === true && vNode.type !== 'foreignObject';
        if (childFlags === 2 /* HasVNodeChildren */) {
            mount(children, dom, lifecycle, context, childrenIsSVG);
        }
        else if (childFlags & 12 /* MultipleChildren */) {
            mountArrayChildren(children, dom, lifecycle, context, childrenIsSVG);
        }
    }
    if (!isNull(props)) {
        mountProps(vNode, flags, props, dom, isSVG);
    }
    if (isFunction(ref)) {
        mountRef(dom, ref, lifecycle);
    }
    return dom;
}
function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        if (!isNull(child.dom)) {
            children[i] = child = directClone(child);
        }
        mount(child, dom, lifecycle, context, isSVG);
    }
}
function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
    var dom;
    var type = vNode.type;
    var props = vNode.props || EMPTY_OBJ;
    var ref = vNode.ref;
    if (isClass) {
        var instance = createClassComponentInstance(vNode, type, props, context);
        var input = instance.$LI;
        vNode.dom = dom = mount(input, null, lifecycle, instance.$CX, isSVG);
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance.$UPD = false;
    }
    else {
        var input$1 = handleComponentInput(type(props, context), vNode);
        vNode.dom = dom = mount(input$1, null, lifecycle, context, isSVG);
        vNode.children = input$1;
        mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
    }
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function createClassMountCallback(instance, hasAfterMount, afterMount, vNode, hasDidMount) {
    return function () {
        instance.$UPD = true;
        if (hasAfterMount) {
            afterMount(vNode);
        }
        if (hasDidMount) {
            instance.componentDidMount();
        }
        instance.$UPD = false;
    };
}
function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
    if (isFunction(ref)) {
        ref(instance);
    }
    else {
        
    }
    var hasDidMount = isFunction(instance.componentDidMount);
    var afterMount = options.afterMount;
    var hasAfterMount = isFunction(afterMount);
    if (hasDidMount || hasAfterMount) {
        lifecycle.push(createClassMountCallback(instance, hasAfterMount, afterMount, vNode, hasDidMount));
    }
}
// Create did mount callback lazily to avoid creating function context if not needed
function createOnMountCallback(ref, dom, props) {
    return function () { return ref.onComponentDidMount(dom, props); };
}
function mountFunctionalComponentCallbacks(props, ref, dom, lifecycle) {
    if (!isNullOrUndef(ref)) {
        if (isFunction(ref.onComponentWillMount)) {
            ref.onComponentWillMount(props);
        }
        if (isFunction(ref.onComponentDidMount)) {
            lifecycle.push(createOnMountCallback(ref, dom, props));
        }
    }
}
function mountRef(dom, value, lifecycle) {
    lifecycle.push(function () { return value(dom); });
}

function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
    var type = vNode.type;
    var ref = vNode.ref;
    var props = vNode.props || EMPTY_OBJ;
    if (isClass) {
        var instance = createClassComponentInstance(vNode, type, props, context);
        var input = instance.$LI;
        hydrateVNode(input, dom, lifecycle, instance.$CX, isSVG);
        vNode.dom = input.dom;
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance.$UPD = false; // Mount finished allow going sync
    }
    else {
        var input$1 = handleComponentInput(type(props, context), vNode);
        hydrateVNode(input$1, dom, lifecycle, context, isSVG);
        vNode.children = input$1;
        vNode.dom = input$1.dom;
        mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
    }
}
function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var flags = vNode.flags;
    var ref = vNode.ref;
    isSVG = isSVG || (flags & 32 /* SvgElement */) > 0;
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.type) {
        var newDom = mountElement(vNode, null, lifecycle, context, isSVG);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
    }
    else {
        vNode.dom = dom;
        var childNode = dom.firstChild;
        var childFlags = vNode.childFlags;
        if ((childFlags & 1 /* HasInvalidChildren */) === 0) {
            var nextSibling = null;
            while (childNode) {
                nextSibling = childNode.nextSibling;
                if (childNode.nodeType === 8) {
                    if (childNode.data === '!') {
                        dom.replaceChild(document.createTextNode(''), childNode);
                    }
                    else {
                        dom.removeChild(childNode);
                    }
                }
                childNode = nextSibling;
            }
            childNode = dom.firstChild;
            if (childFlags === 2 /* HasVNodeChildren */) {
                if (isNull(childNode)) {
                    mount(children, dom, lifecycle, context, isSVG);
                }
                else {
                    nextSibling = childNode.nextSibling;
                    hydrateVNode(children, childNode, lifecycle, context, isSVG);
                    childNode = nextSibling;
                }
            }
            else if (childFlags & 12 /* MultipleChildren */) {
                for (var i = 0, len = children.length; i < len; i++) {
                    var child = children[i];
                    if (isNull(childNode)) {
                        mount(child, dom, lifecycle, context, isSVG);
                    }
                    else {
                        nextSibling = childNode.nextSibling;
                        hydrateVNode(child, childNode, lifecycle, context, isSVG);
                        childNode = nextSibling;
                    }
                }
            }
            // clear any other DOM nodes, there should be only a single entry for the root
            while (childNode) {
                nextSibling = childNode.nextSibling;
                dom.removeChild(childNode);
                childNode = nextSibling;
            }
        }
        else if (!isNull(dom.firstChild) && !isSamePropsInnerHTML(dom, props)) {
            dom.textContent = ''; // dom has content, but VNode has no children remove everything from DOM
            if (flags & 448 /* FormElement */) {
                // If element is form element, we need to clear defaultValue also
                dom.defaultValue = '';
            }
        }
        if (!isNull(props)) {
            mountProps(vNode, flags, props, dom, isSVG);
        }
        if (isNullOrUndef(className)) {
            if (dom.className !== '') {
                dom.removeAttribute('class');
            }
        }
        else if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
        if (isFunction(ref)) {
            mountRef(dom, ref, lifecycle);
        }
        else {
            
        }
    }
}
function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = mountText(vNode, null);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
    }
    else {
        var text = vNode.children;
        if (dom.nodeValue !== text) {
            dom.nodeValue = text;
        }
        vNode.dom = dom;
    }
}
function hydrateVNode(vNode, dom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 14 /* Component */) {
        hydrateComponent(vNode, dom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    else if (flags & 481 /* Element */) {
        hydrateElement(vNode, dom, lifecycle, context, isSVG);
    }
    else if (flags & 16 /* Text */) {
        hydrateText(vNode, dom);
    }
    else if (flags & 512 /* Void */) {
        vNode.dom = dom;
    }
    else {
        throwError();
    }
}
function hydrate(input, parentDom, callback) {
    var dom = parentDom.firstChild;
    if (!isNull(dom)) {
        if (!isInvalid(input)) {
            hydrateVNode(input, dom, LIFECYCLE, EMPTY_OBJ, false);
        }
        dom = parentDom.firstChild;
        // clear any other DOM nodes, there should be only a single entry for the root
        while ((dom = dom.nextSibling)) {
            parentDom.removeChild(dom);
        }
    }
    if (LIFECYCLE.length > 0) {
        callAll(LIFECYCLE);
    }
    if (!parentDom.$V) {
        options.roots.push(parentDom);
    }
    parentDom.$V = input;
    if (isFunction(callback)) {
        callback();
    }
}

function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG) {
    unmount(lastNode);
    replaceChild(parentDom, mount(nextNode, null, lifecycle, context, isSVG), lastNode.dom);
}
function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG) {
    if (lastVNode !== nextVNode) {
        var nextFlags = nextVNode.flags;
        if (lastVNode.flags !== nextFlags || nextFlags & 2048 /* ReCreate */) {
            replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG);
        }
        else if (nextFlags & 481 /* Element */) {
            patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG);
        }
        else if (nextFlags & 14 /* Component */) {
            patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, (nextFlags & 4 /* ComponentClass */) > 0);
        }
        else if (nextFlags & 16 /* Text */) {
            patchText(lastVNode, nextVNode, parentDom);
        }
        else if (nextFlags & 512 /* Void */) {
            nextVNode.dom = lastVNode.dom;
        }
        else {
            // Portal
            patchPortal(lastVNode, nextVNode, lifecycle, context);
        }
    }
}
function patchPortal(lastVNode, nextVNode, lifecycle, context) {
    var lastContainer = lastVNode.type;
    var nextContainer = nextVNode.type;
    var nextChildren = nextVNode.children;
    patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, lastContainer, lifecycle, context, false);
    nextVNode.dom = lastVNode.dom;
    if (lastContainer !== nextContainer && !isInvalid(nextChildren)) {
        var node = nextChildren.dom;
        lastContainer.removeChild(node);
        nextContainer.appendChild(node);
    }
}
function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG) {
    var nextTag = nextVNode.type;
    if (lastVNode.type !== nextTag) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG);
    }
    else {
        var dom = lastVNode.dom;
        var nextFlags = nextVNode.flags;
        var lastProps = lastVNode.props;
        var nextProps = nextVNode.props;
        var isFormElement = false;
        var hasControlledValue = false;
        var nextPropsOrEmpty;
        nextVNode.dom = dom;
        isSVG = isSVG || (nextFlags & 32 /* SvgElement */) > 0;
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
            nextPropsOrEmpty = nextProps || EMPTY_OBJ;
            if (nextPropsOrEmpty !== EMPTY_OBJ) {
                isFormElement = (nextFlags & 448 /* FormElement */) > 0;
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
                    // do not add a hasOwnProperty check here, it affects performance
                    if (!nextPropsOrEmpty.hasOwnProperty(prop$1) && !isNullOrUndef(lastPropsOrEmpty[prop$1])) {
                        patchProp(prop$1, lastPropsOrEmpty[prop$1], null, dom, isSVG, hasControlledValue, lastVNode);
                    }
                }
            }
        }
        var lastChildren = lastVNode.children;
        var nextChildren = nextVNode.children;
        var nextRef = nextVNode.ref;
        var lastClassName = lastVNode.className;
        var nextClassName = nextVNode.className;
        if (lastChildren !== nextChildren) {
            patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG && nextTag !== 'foreignObject');
        }
        if (isFormElement) {
            processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, false, hasControlledValue);
        }
        // inlined patchProps  -- ends --
        if (lastClassName !== nextClassName) {
            if (isNullOrUndef(nextClassName)) {
                dom.removeAttribute('class');
            }
            else if (isSVG) {
                dom.setAttribute('class', nextClassName);
            }
            else {
                dom.className = nextClassName;
            }
        }
        if (isFunction(nextRef) && lastVNode.ref !== nextRef) {
            mountRef(dom, nextRef, lifecycle);
        }
        else {
            
        }
    }
}
function patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, lifecycle, context, isSVG) {
    switch (lastChildFlags) {
        case 2 /* HasVNodeChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    patch(lastChildren, nextChildren, parentDOM, lifecycle, context, isSVG);
                    break;
                case 1 /* HasInvalidChildren */:
                    remove(lastChildren, parentDOM);
                    break;
                default:
                    remove(lastChildren, parentDOM);
                    mountArrayChildren(nextChildren, parentDOM, lifecycle, context, isSVG);
                    break;
            }
            break;
        case 1 /* HasInvalidChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    mount(nextChildren, parentDOM, lifecycle, context, isSVG);
                    break;
                case 1 /* HasInvalidChildren */:
                    break;
                default:
                    mountArrayChildren(nextChildren, parentDOM, lifecycle, context, isSVG);
                    break;
            }
            break;
        default:
            if (nextChildFlags & 12 /* MultipleChildren */) {
                var lastLength = lastChildren.length;
                var nextLength = nextChildren.length;
                // Fast path's for both algorithms
                if (lastLength === 0) {
                    if (nextLength > 0) {
                        mountArrayChildren(nextChildren, parentDOM, lifecycle, context, isSVG);
                    }
                }
                else if (nextLength === 0) {
                    removeAllChildren(parentDOM, lastChildren);
                }
                else {
                    if (nextChildFlags === 8 /* HasKeyedChildren */ && lastChildFlags === 8 /* HasKeyedChildren */) {
                        patchKeyedChildren(lastChildren, nextChildren, parentDOM, lifecycle, context, isSVG, lastLength, nextLength);
                    }
                    else {
                        patchNonKeyedChildren(lastChildren, nextChildren, parentDOM, lifecycle, context, isSVG, lastLength, nextLength);
                    }
                }
            }
            else if (nextChildFlags === 1 /* HasInvalidChildren */) {
                removeAllChildren(parentDOM, lastChildren);
            }
            else {
                removeAllChildren(parentDOM, lastChildren);
                mount(nextChildren, parentDOM, lifecycle, context, isSVG);
            }
            break;
    }
}
function updateClassComponent(instance, nextState, nextVNode, nextProps, parentDom, lifecycle, context, isSVG, force, fromSetState) {
    var lastState = instance.state;
    var lastProps = instance.props;
    nextVNode.children = instance;
    var lastInput = instance.$LI;
    var renderOutput;
    if (instance.$UN) {
        return;
    }
    if (lastProps !== nextProps || nextProps === EMPTY_OBJ) {
        if (!fromSetState && isFunction(instance.componentWillReceiveProps)) {
            instance.$BR = true;
            instance.componentWillReceiveProps(nextProps, context);
            // If instance component was removed during its own update do nothing...
            if (instance.$UN) {
                return;
            }
            instance.$BR = false;
        }
        if (instance.$PSS) {
            nextState = combineFrom(nextState, instance.$PS);
            instance.$PSS = false;
            instance.$PS = null;
        }
    }
    /* Update if scu is not defined, or it returns truthy value or force */
    var hasSCU = isFunction(instance.shouldComponentUpdate);
    if (force || !hasSCU || (hasSCU && instance.shouldComponentUpdate(nextProps, nextState, context))) {
        if (isFunction(instance.componentWillUpdate)) {
            instance.$BS = true;
            instance.componentWillUpdate(nextProps, nextState, context);
            instance.$BS = false;
        }
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
        if (isFunction(options.beforeRender)) {
            options.beforeRender(instance);
        }
        renderOutput = instance.render(nextProps, nextState, context);
        if (isFunction(options.afterRender)) {
            options.afterRender(instance);
        }
        var didUpdate = renderOutput !== NO_OP;
        var childContext;
        if (isFunction(instance.getChildContext)) {
            childContext = instance.getChildContext();
        }
        if (isNullOrUndef(childContext)) {
            childContext = context;
        }
        else {
            childContext = combineFrom(context, childContext);
        }
        instance.$CX = childContext;
        if (didUpdate) {
            var nextInput = (instance.$LI = handleComponentInput(renderOutput, nextVNode));
            patch(lastInput, nextInput, parentDom, lifecycle, childContext, isSVG);
            if (isFunction(instance.componentDidUpdate)) {
                instance.componentDidUpdate(lastProps, lastState);
            }
            if (isFunction(options.afterUpdate)) {
                options.afterUpdate(nextVNode);
            }
        }
    }
    else {
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
    }
    nextVNode.dom = instance.$LI.dom;
}
function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass) {
    var nextType = nextVNode.type;
    var lastKey = lastVNode.key;
    var nextKey = nextVNode.key;
    if (lastVNode.type !== nextType || lastKey !== nextKey) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG);
    }
    else {
        var nextProps = nextVNode.props || EMPTY_OBJ;
        if (isClass) {
            var instance = lastVNode.children;
            instance.$UPD = true;
            updateClassComponent(instance, instance.state, nextVNode, nextProps, parentDom, lifecycle, context, isSVG, false, false);
            instance.$V = nextVNode;
            instance.$UPD = false;
        }
        else {
            var shouldUpdate = true;
            var lastProps = lastVNode.props;
            var nextHooks = nextVNode.ref;
            var nextHooksDefined = !isNullOrUndef(nextHooks);
            var lastInput = lastVNode.children;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = lastInput;
            if (nextHooksDefined && isFunction(nextHooks.onComponentShouldUpdate)) {
                shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps, nextProps);
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined && isFunction(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(lastProps, nextProps);
                }
                var nextInput = nextType(nextProps, context);
                if (nextInput !== NO_OP) {
                    nextInput = handleComponentInput(nextInput, nextVNode);
                    patch(lastInput, nextInput, parentDom, lifecycle, context, isSVG);
                    nextVNode.children = nextInput;
                    nextVNode.dom = nextInput.dom;
                    if (nextHooksDefined && isFunction(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(lastProps, nextProps);
                    }
                }
            }
            else if (lastInput.flags & 14 /* Component */) {
                lastInput.parentVNode = nextVNode;
            }
        }
    }
}
function patchText(lastVNode, nextVNode, parentDom) {
    var nextText = nextVNode.children;
    var textNode = parentDom.firstChild;
    var dom;
    // Guard against external change on DOM node.
    if (isNull(textNode)) {
        parentDom.textContent = nextText;
        dom = parentDom.firstChild;
    }
    else {
        dom = lastVNode.dom;
        if (nextText !== lastVNode.children) {
            dom.nodeValue = nextText;
        }
    }
    nextVNode.dom = dom;
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, lastChildrenLength, nextChildrenLength) {
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    for (; i < commonLength; i++) {
        var nextChild = nextChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = directClone(nextChild);
        }
        patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG);
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            var nextChild$1 = nextChildren[i];
            if (nextChild$1.dom) {
                nextChild$1 = nextChildren[i] = directClone(nextChild$1);
            }
            appendChild(dom, mount(nextChild$1, null, lifecycle, context, isSVG));
        }
    }
    else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            remove(lastChildren[i], dom);
        }
    }
}
function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, aLength, bLength) {
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var aStart = 0;
    var bStart = 0;
    var i;
    var j;
    var aNode;
    var bNode;
    var nextNode;
    var nextPos;
    var node;
    var aStartNode = a[aStart];
    var bStartNode = b[bStart];
    var aEndNode = a[aEnd];
    var bEndNode = b[bEnd];
    if (bStartNode.dom) {
        b[bStart] = bStartNode = directClone(bStartNode);
    }
    if (bEndNode.dom) {
        b[bEnd] = bEndNode = directClone(bEndNode);
    }
    // Step 1
    // tslint:disable-next-line
    outer: {
        // Sync nodes with the same key at the beginning.
        while (aStartNode.key === bStartNode.key) {
            patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG);
            aStart++;
            bStart++;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aStartNode = a[aStart];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = directClone(bStartNode);
            }
        }
        // Sync nodes with the same key at the end.
        while (aEndNode.key === bEndNode.key) {
            patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG);
            aEnd--;
            bEnd--;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aEndNode = a[aEnd];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = directClone(bEndNode);
            }
        }
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < bLength ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = directClone(node);
                }
                bStart++;
                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
            }
        }
    }
    else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            remove(a[aStart++], dom);
        }
    }
    else {
        var aLeft = aEnd - aStart + 1;
        var bLeft = bEnd - bStart + 1;
        var sources = new Array(bLeft);
        for (i = 0; i < bLeft; i++) {
            sources[i] = -1;
        }
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if (bLeft <= 4 || aLeft * bLeft <= 16) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLeft) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            }
                            else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = directClone(bNode);
                            }
                            patch(aNode, bNode, dom, lifecycle, context, isSVG);
                            patched++;
                            a[i] = null;
                            break;
                        }
                    }
                }
            }
        }
        else {
            var keyIndex = {};
            // Map keys by their index in array
            for (i = bStart; i <= bEnd; i++) {
                keyIndex[b[i].key] = i;
            }
            // Try to patch same keys
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLeft) {
                    j = keyIndex[aNode.key];
                    if (isDefined(j)) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        }
                        else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = directClone(bNode);
                        }
                        patch(aNode, bNode, dom, lifecycle, context, isSVG);
                        patched++;
                        a[i] = null;
                    }
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (aLeft === aLength && patched === 0) {
            removeAllChildren(dom, a);
            mountArrayChildren(b, dom, lifecycle, context, isSVG);
        }
        else {
            i = aLeft - patched;
            while (i > 0) {
                aNode = a[aStart++];
                if (!isNull(aNode)) {
                    remove(aNode, dom);
                    i--;
                }
            }
            if (moved) {
                var seq = lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLeft - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = directClone(node);
                        }
                        nextPos = pos + 1;
                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextPos < bLength ? b[nextPos].dom : null);
                    }
                    else if (j < 0 || i !== seq[j]) {
                        pos = i + bStart;
                        node = b[pos];
                        nextPos = pos + 1;
                        insertOrAppend(dom, node.dom, nextPos < bLength ? b[nextPos].dom : null);
                    }
                    else {
                        j--;
                    }
                }
            }
            else if (patched !== bLeft) {
                // when patched count doesn't match b length we need to insert those new ones
                // loop backwards so we can use insertBefore
                for (i = bLeft - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = directClone(node);
                        }
                        nextPos = pos + 1;
                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextPos < bLength ? b[nextPos].dom : null);
                    }
                }
            }
        }
    }
}
// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var p = arr.slice();
    var result = [0];
    var i;
    var j;
    var u;
    var v;
    var c;
    var len = arr.length;
    for (i = 0; i < len; i++) {
        var arrI = arr[i];
        if (arrI !== -1) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = ((u + v) / 2) | 0;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
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

var roots = options.roots;
var documentBody = isBrowser ? document.body : null;
function render(input, parentDom, callback) {
    // Development warning
    if (input === NO_OP) {
        return;
    }
    var rootLen = roots.length;
    var rootInput;
    var index;
    for (index = 0; index < rootLen; index++) {
        if (roots[index] === parentDom) {
            rootInput = parentDom.$V;
            break;
        }
    }
    if (isUndefined(rootInput)) {
        if (!isInvalid(input)) {
            if (input.dom) {
                input = directClone(input);
            }
            if (isNull(parentDom.firstChild)) {
                mount(input, parentDom, LIFECYCLE, EMPTY_OBJ, false);
                parentDom.$V = input;
                roots.push(parentDom);
            }
            else {
                hydrate(input, parentDom);
            }
            rootInput = input;
        }
    }
    else {
        if (isNullOrUndef(input)) {
            remove(rootInput, parentDom);
            roots.splice(index, 1);
        }
        else {
            if (input.dom) {
                input = directClone(input);
            }
            patch(rootInput, input, parentDom, LIFECYCLE, EMPTY_OBJ, false);
            rootInput = parentDom.$V = input;
        }
    }
    if (LIFECYCLE.length > 0) {
        callAll(LIFECYCLE);
    }
    if (isFunction(callback)) {
        callback();
    }
    if (rootInput && rootInput.flags & 14 /* Component */) {
        return rootInput.children;
    }
}
function createRenderer(parentDom) {
    return function renderer(lastInput, nextInput) {
        if (!parentDom) {
            parentDom = lastInput;
        }
        render(nextInput, parentDom);
    };
}
function createPortal(children, container) {
    return createVNode(1024 /* Portal */, container, null, children, 0 /* UnknownChildren */, null, isInvalid(children) ? null : children.key, null);
}

var resolvedPromise = typeof Promise === 'undefined' ? null : Promise.resolve();
var fallbackMethod = typeof requestAnimationFrame === 'undefined' ? setTimeout : requestAnimationFrame;
function nextTick(fn) {
    if (resolvedPromise) {
        return resolvedPromise.then(fn);
    }
    return fallbackMethod(fn);
}
function queueStateChanges(component, newState, callback) {
    if (isFunction(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    var pending = component.$PS;
    if (isNullOrUndef(pending)) {
        component.$PS = newState;
    }
    else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (!component.$PSS && !component.$BR) {
        if (!component.$UPD) {
            component.$PSS = true;
            component.$UPD = true;
            applyState(component, false, callback);
            component.$UPD = false;
        }
        else {
            // Async
            var queue = component.$QU;
            if (isNull(queue)) {
                queue = component.$QU = [];
                nextTick(promiseCallback(component, queue));
            }
            if (isFunction(callback)) {
                queue.push(callback);
            }
        }
    }
    else {
        component.$PSS = true;
        if (component.$BR && isFunction(callback)) {
            LIFECYCLE.push(callback.bind(component));
        }
    }
}
function promiseCallback(component, queue) {
    return function () {
        component.$QU = null;
        component.$UPD = true;
        applyState(component, false, function () {
            for (var i = 0, len = queue.length; i < len; i++) {
                queue[i].call(component);
            }
        });
        component.$UPD = false;
    };
}
function applyState(component, force, callback) {
    if (component.$UN) {
        return;
    }
    if (force || !component.$BR) {
        component.$PSS = false;
        var pendingState = component.$PS;
        var prevState = component.state;
        var nextState = combineFrom(prevState, pendingState);
        var props = component.props;
        var context = component.context;
        component.$PS = null;
        var vNode = component.$V;
        var lastInput = component.$LI;
        var parentDom = lastInput.dom && lastInput.dom.parentNode;
        updateClassComponent(component, nextState, vNode, props, parentDom, LIFECYCLE, context, (vNode.flags & 32 /* SvgElement */) > 0, force, true);
        if (component.$UN) {
            return;
        }
        if ((component.$LI.flags & 1024 /* Portal */) === 0) {
            var dom = component.$LI.dom;
            while (!isNull((vNode = vNode.parentVNode))) {
                if ((vNode.flags & 14 /* Component */) > 0) {
                    vNode.dom = dom;
                }
            }
        }
        if (LIFECYCLE.length > 0) {
            callAll(LIFECYCLE);
        }
    }
    else {
        component.state = component.$PS;
        component.$PS = null;
    }
    if (isFunction(callback)) {
        callback.call(component);
    }
}
var Component = function Component(props, context) {
    this.state = null;
    // Internal properties
    this.$BR = false; // BLOCK RENDER
    this.$BS = true; // BLOCK STATE
    this.$PSS = false; // PENDING SET STATE
    this.$PS = null; // PENDING STATE (PARTIAL or FULL)
    this.$LI = null; // LAST INPUT
    this.$V = null; // VNODE
    this.$UN = false; // UNMOUNTED
    this.$CX = null; // CHILDCONTEXT
    this.$UPD = true; // UPDATING
    this.$QU = null; // QUEUE
    /** @type {object} */
    this.props = props || EMPTY_OBJ;
    /** @type {object} */
    this.context = context || EMPTY_OBJ; // context should not be mutable
};
Component.prototype.forceUpdate = function forceUpdate (callback) {
    if (this.$UN) {
        return;
    }
    applyState(this, true, callback);
};
Component.prototype.setState = function setState (newState, callback) {
    if (this.$UN) {
        return;
    }
    if (!this.$BS) {
        queueStateChanges(this, newState, callback);
    }
    else {
        // Development warning
        return;
    }
};
// tslint:disable-next-line:no-empty
Component.prototype.render = function render (nextProps, nextState, nextContext) { };
// Public
Component.defaultProps = null;

var version = "4.0.3";




/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__ = __webpack_require__(145);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "IndexLink", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "IndexRoute", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["o"]; });


if (process.env.NODE_ENV !== 'production') {
  console.warn('You are running production build of Inferno-router in development mode. Use dev:module entry point.');
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClassName = addClassName;
exports.removeClassName = removeClassName;
exports.forceReflow = forceReflow;
exports.setDisplay = setDisplay;
exports.getDimensions = getDimensions;
exports.setDimensions = setDimensions;
exports.clearDimensions = clearDimensions;
exports.animationIsRunningOnParent = animationIsRunningOnParent;
exports.registerTransitionListener = registerTransitionListener;
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

function _getMaxTransitionDuration() /* add nodes as args*/{
  var _arguments = arguments;

  var nrofTransitions = 0;
  var maxDuration = 0;

  var _loop = function _loop(i) {
    var node = _arguments[i];
    if (!node) return 'continue';

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

    if (_ret === 'continue') continue;
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
  rootNode.addEventListener("transitionend", onTransitionEnd, false);
  // Fallback if transitionend fails
  !window.debugAnimations && setTimeout(onTransitionEnd, Math.round(maxDuration * 1000) + 100);
}
//# sourceMappingURL=utils.js.map

/***/ }),
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'color', 'pill', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'badge', 'badge-' + color, pill ? 'badge-pill' : false), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

Badge.defaultProps = defaultProps;

exports.default = Badge;
module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _inferno = __webpack_require__(0);

var _Dropdown = __webpack_require__(8);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonDropdown = function ButtonDropdown(props) {
  return (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, _Dropdown2.default, _extends({
    'group': true
  }, props)));
};

exports.default = ButtonDropdown;
module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _lodash = __webpack_require__(105);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];

var defaultProps = {
  tag: 'div',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : 'col-' + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
  }

  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
};

var Col = function Col(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      widths = props.widths,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'widths', 'tag']);

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
    var colClass = void 0;

    if ((0, _lodash2.default)(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
      colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

      colClasses.push((0, _utils.mapToCssModules)((0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), _defineProperty(_classNames, 'push' + colSizeInterfix + columnProp.push, columnProp.push || columnProp.push === 0), _defineProperty(_classNames, 'pull' + colSizeInterfix + columnProp.pull, columnProp.pull || columnProp.pull === 0), _defineProperty(_classNames, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset || columnProp.offset === 0), _classNames))), cssModule);
    } else {
      colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, colClasses), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

Col.defaultProps = defaultProps;

exports.default = Col;
module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var InputGroup = function InputGroup(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      size = props.size,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag', 'size']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'input-group', size ? 'input-group-' + size : null), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

InputGroup.defaultProps = defaultProps;

exports.default = InputGroup;
module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _InputGroupText = __webpack_require__(77);

var _InputGroupText2 = _interopRequireDefault(_InputGroupText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var InputGroupAddon = function InputGroupAddon(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      addonType = props.addonType,
      children = props.children,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'addonType', 'children']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'input-group-' + addonType), cssModule);

  // Convenience to assist with transition
  if (typeof children === 'string') {
    Object.assign(attributes, { className: classes });

    return (0, _infernoCreateElement.createElement)(Tag, attributes, (0, _inferno.createComponentVNode)(2, _InputGroupText2.default, {
      children: children
    }));
  }

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

InputGroupAddon.defaultProps = defaultProps;

exports.default = InputGroupAddon;
module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(33);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _compat = __webpack_require__(94);

var _AnimateModal = __webpack_require__(150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propsToOmit = ['animationPrefix', 'backgroundAnimationPrefix', 'isOpen', 'autoFocus', 'size', 'toggle', 'keyboard', 'backdrop', 'onEnter', 'onExit', 'onOpened', 'onClosed', 'children', 'className', 'wrapClassName', 'modalClassName', 'backdropClassName', 'contentClassName', 'fade', 'cssModule', 'zIndex'];

var defaultProps = {
  isOpen: false,
  autoFocus: true,
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true
};

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.originalBodyPadding = null;
    _this.isBodyOverflowing = false;
    _this.togglePortal = _this.togglePortal.bind(_this);
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_this);
    _this.handleEscape = _this.handleEscape.bind(_this);
    _this.destroy = _this.destroy.bind(_this);
    _this.onOpened = _this.onOpened.bind(_this);
    _this.onClosed = _this.onClosed.bind(_this);
    _this.createEventListeners = _this.createEventListeners.bind(_this);
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.togglePortal();
      }
      if (this.props.onEnter) {
        this.props.onEnter();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        // handle portal events/dom updates
        this.togglePortal();
      } else if (this._element) {
        // rerender portal
        this.renderIntoSubtree();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroy();
      if (this.props.onExit) {
        this.props.onExit();
      }
    }
  }, {
    key: 'onOpened',
    value: function onOpened() {
      if (this.props.onOpened) {
        this.props.onOpened();
      }
    }
  }, {
    key: 'onClosed',
    value: function onClosed() {
      this.destroy();
      if (this.props.onClosed) {
        this.props.onClosed();
      }
    }
  }, {
    key: 'handleEscape',
    value: function handleEscape(e) {
      if (this._dialog && this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
        this.props.toggle();
      }
    }
  }, {
    key: 'handleBackdropClick',
    value: function handleBackdropClick(e) {
      if (!this._dialog || this.props.backdrop !== true) return;

      var container = this._dialog;

      if (e.target && !container.contains(e.target) && this.props.toggle) {
        this.props.toggle();
      }
    }
  }, {
    key: 'togglePortal',
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
    key: 'createEventListeners',
    value: function createEventListeners() {
      window.addEventListener('keyup', this.handleEscape);
      window.addEventListener('click', this.handleBackdropClick, true);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      window.removeEventListener('keyup', this.handleEscape);
      window.removeEventListener('click', this.handleBackdropClick, true);
      if (this._element) {
        (0, _compat.unmountComponentAtNode)(this._element);
        document.body.removeChild(this._element);
        this._element = null;
      }

      // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
      var classes = document.body.className.replace(/(^| )modal-open( |$)/, ' ');
      document.body.className = (0, _utils.mapToCssModules)((0, _classnames2.default)(classes).trim(), this.props.cssModule);
      (0, _utils.setScrollbarWidth)(this.originalBodyPadding);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.renderIntoSubtree();

      // Need to trigger cleanup if the animation doesn't play
      if (!this.props.fade) {
        this.destroy();
      }
    }
  }, {
    key: 'show',
    value: function show() {
      var classes = document.body.className;
      this._element = document.createElement('div');
      this._element.setAttribute('tabindex', '-1');
      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this.originalBodyPadding = (0, _utils.getOriginalBodyPadding)();

      (0, _utils.conditionallyUpdateScrollbar)();
      this.createEventListeners();

      document.body.appendChild(this._element);

      document.body.className = (0, _utils.mapToCssModules)((0, _classnames2.default)(classes, 'modal-open'), this.props.cssModule);

      this.renderIntoSubtree();
    }
  }, {
    key: 'renderModalDialog',
    value: function renderModalDialog() {
      var _this2 = this;

      var attributes = (0, _utils.omit)(this.props, propsToOmit);

      return (0, _inferno.normalizeProps)((0, _inferno.createVNode)(1, 'div', (0, _utils.mapToCssModules)((0, _classnames2.default)('modal-dialog', this.props.className, _defineProperty({}, 'modal-' + this.props.size, this.props.size)), this.props.cssModule), (0, _inferno.createVNode)(1, 'div', (0, _utils.mapToCssModules)((0, _classnames2.default)('modal-content', this.props.contentClassName), this.props.cssModule), this.props.children, 0), 2, _extends({
        'role': 'document'
      }, attributes), null, function (c) {
        return _this2._dialog = c;
      }));
    }
  }, {
    key: 'renderIntoSubtree',
    value: function renderIntoSubtree() {
      (0, _compat.unstable_renderSubtreeIntoContainer)(this, this.renderChildren(), this._element);

      // check if modal should receive focus
      if (this._focus) {
        this._dialog.parentNode.focus();
        this._focus = false;
      }
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _props = this.props,
          wrapClassName = _props.wrapClassName,
          modalClassName = _props.modalClassName,
          backdropClassName = _props.backdropClassName,
          cssModule = _props.cssModule,
          isOpen = _props.isOpen,
          backdrop = _props.backdrop,
          modalTransitionTimeout = _props.modalTransitionTimeout,
          backdropTransitionTimeout = _props.backdropTransitionTimeout;


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

        return (0, _inferno.createVNode)(1, 'div', (0, _utils.mapToCssModules)(wrapClassName), [(0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, AnimatedSpecial, _extends({
          'isOpen': isOpen,
          'cssModule': cssModule,
          'className': (0, _utils.mapToCssModules)((0, _classnames2.default)('modal', modalClassName), cssModule),
          'onOpened': this.onOpened,
          'onClosed': this.onClosed
        }, modalAttributes, {
          children: this.renderModalDialog()
        }), 'modal-dialog')), (0, _inferno.createComponentVNode)(2, AnimatedSpecial, {
          'isOpen': isOpen && backdrop,
          'cssModule': cssModule,
          'className': (0, _utils.mapToCssModules)((0, _classnames2.default)('modal-backdrop', backdropClassName), cssModule)
        }, 'modal-backdrop')], 8);
      }

      return (0, _inferno.createVNode)(1, 'div', (0, _utils.mapToCssModules)(wrapClassName), [isOpen && (0, _inferno.normalizeProps)((0, _inferno.createVNode)(1, 'div', (0, _utils.mapToCssModules)((0, _classnames2.default)('modal', 'show', modalClassName), cssModule), this.renderModalDialog(), 0, _extends({
        'style': { display: 'block' }
      }, modalAttributes))), isOpen && backdrop && (0, _inferno.createVNode)(1, 'div', (0, _utils.mapToCssModules)((0, _classnames2.default)('modal-backdrop', 'show', backdropClassName), cssModule))], 0);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Modal;
}(_infernoComponent2.default);

Modal.defaultProps = defaultProps;

var AnimatedSpecial = function (_Component2) {
  _inherits(AnimatedSpecial, _Component2);

  function AnimatedSpecial() {
    _classCallCheck(this, AnimatedSpecial);

    return _possibleConstructorReturn(this, (AnimatedSpecial.__proto__ || Object.getPrototypeOf(AnimatedSpecial)).apply(this, arguments));
  }

  _createClass(AnimatedSpecial, [{
    key: 'render',

    /*
    I need to create a separate component to get unmount to work properly
    since animations are triggered on unmount and I don't want inferno to
    remove all the elements until the animation is completed.
     */

    value: function render(_ref) {
      var isOpen = _ref.isOpen,
          onClosed = _ref.onClosed,
          onOpened = _ref.onOpened,
          attrs = _objectWithoutProperties(_ref, ['isOpen', 'onClosed', 'onOpened']);

      if (isOpen) {
        return (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, _AnimateModal.Animated, _extends({}, attrs), null, {
          'onComponentDidMount': function onComponentDidMount(dom) {
            return (0, _AnimateModal.animateModalOnAdd)(dom, onOpened);
          },
          'onComponentWillUnmount': function onComponentWillUnmount(dom) {
            return (0, _AnimateModal.animateModalOnRemove)(dom, onClosed);
          }
        }));
      } else {
        return null;
      }
    }
  }]);

  return AnimatedSpecial;
}(_infernoComponent2.default);

exports.default = Modal;

/*
  props.bootstrapCls = {
    hide: ,
    active: 'modal fade',
    show: 'modal show'
  }
*/

module.exports = exports['default'];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var ModalBody = function ModalBody(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'modal-body'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

ModalBody.defaultProps = defaultProps;

exports.default = ModalBody;
module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var ModalFooter = function ModalFooter(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'modal-footer'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

ModalFooter.defaultProps = defaultProps;

exports.default = ModalFooter;
module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'h4',
  wrapTag: 'div',
  closeAriaLabel: 'Close'
};

var ModalHeader = function ModalHeader(props) {
  var closeButton = void 0;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'children', 'toggle', 'tag', 'wrapTag', 'closeAriaLabel']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'modal-header'), cssModule);

  if (toggle) {
    closeButton = (0, _inferno.createVNode)(1, 'button', 'close', (0, _inferno.createVNode)(1, 'span', null, String.fromCharCode(215), 0, {
      'aria-hidden': 'true'
    }), 2, {
      'type': 'button',
      'onClick': toggle,
      'aria-label': closeAriaLabel
    });
  }

  var innerChildren = [(0, _infernoCreateElement.createElement)(Tag, { className: (0, _utils.mapToCssModules)('modal-title', cssModule) }, children), closeButton];

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(WrapTag, attributes, innerChildren);
};

ModalHeader.defaultProps = defaultProps;

exports.default = ModalHeader;
module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _inferno = __webpack_require__(0);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _Dropdown = __webpack_require__(8);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'li'
};

var NavDropdown = function NavDropdown(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'nav-item'), cssModule);

  return (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, _Dropdown2.default, _extends({}, attributes, {
    'tag': Tag,
    'className': classes
  })));
};

NavDropdown.defaultProps = defaultProps;

exports.default = NavDropdown;
module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var Row = function Row(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      noGutters = props.noGutters,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'noGutters', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, noGutters ? 'no-gutters' : null, 'row'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

Row.defaultProps = defaultProps;

exports.default = Row;
module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
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

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.9
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
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
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
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    if (element) {
      return element.ownerDocument.documentElement;
    }

    return document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
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
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
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

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function isIE10$1() {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE10$1() && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
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

var defineProperty = function defineProperty(obj, key, value) {
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
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
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
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

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
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
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

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
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
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

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
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
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
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
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
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
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
  }

  // use `filter` to obtain the same behavior of `find`
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
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
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
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
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

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
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
  target.addEventListener(event, callback, { passive: true });

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
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
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
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
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
    var unit = '';
    // add unit if the value is numeric and is one of the following
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
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
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
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

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
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
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
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
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
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
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
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
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
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
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
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
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

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

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
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
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

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
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
  var unit = split[2];

  // If it's not a number it's an operator, I guess
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
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
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
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
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
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
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
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
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
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
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
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
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
   * An scenario exists where the reference itself is not within the boundaries.<br />
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
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
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
   * pixels of conjuction are needed.
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
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
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
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
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
   * Just disable this modifier and define you own to achieve the desired effect.
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
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
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
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
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
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
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
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
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
     * Schedule an update, it will run on the next UI update available
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
 * NB: This feature isn't supported in Internet Explorer 10
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

exports.default = Popper;
//# sourceMappingURL=popper.js.map

module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ }),
/* 54 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BasicPage;

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Alert = __webpack_require__(109);

var _Alert2 = _interopRequireDefault(_Alert);

var _Badge = __webpack_require__(110);

var _Badge2 = _interopRequireDefault(_Badge);

var _Breadcrumb = __webpack_require__(111);

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _Button = __webpack_require__(112);

var _Button2 = _interopRequireDefault(_Button);

var _Dropdown = __webpack_require__(114);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Jumbotron = __webpack_require__(115);

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

var _Progress = __webpack_require__(120);

var _Progress2 = _interopRequireDefault(_Progress);

var _Collapse = __webpack_require__(113);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Layout = __webpack_require__(116);

var _Layout2 = _interopRequireDefault(_Layout);

var _Tabs = __webpack_require__(121);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Popovers = __webpack_require__(119);

var _Popovers2 = _interopRequireDefault(_Popovers);

var _Pagination = __webpack_require__(118);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _List = __webpack_require__(117);

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Modal from '../../../lib/Modal'

function BasicPage(props) {
  return (0, _inferno.createComponentVNode)(2, _components.Page, {
    children: [(0, _inferno.createComponentVNode)(2, _Alert2.default), (0, _inferno.createComponentVNode)(2, _Badge2.default), (0, _inferno.createComponentVNode)(2, _Breadcrumb2.default), (0, _inferno.createComponentVNode)(2, _Button2.default), (0, _inferno.createComponentVNode)(2, _Dropdown2.default), (0, _inferno.createComponentVNode)(2, _Jumbotron2.default), (0, _inferno.createComponentVNode)(2, _Progress2.default), (0, _inferno.createComponentVNode)(2, _Collapse2.default), (0, _inferno.createComponentVNode)(2, _Layout2.default), (0, _inferno.createComponentVNode)(2, _List2.default), (0, _inferno.createComponentVNode)(2, _Tabs2.default), (0, _inferno.createComponentVNode)(2, _Popovers2.default), (0, _inferno.createComponentVNode)(2, _Pagination2.default)]
  });
}
module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CardPage;

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _TextCard = __webpack_require__(123);

var _TextCard2 = _interopRequireDefault(_TextCard);

var _HeaderCard = __webpack_require__(122);

var _HeaderCard2 = _interopRequireDefault(_HeaderCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardPage(props) {
  return (0, _inferno.createComponentVNode)(2, _components.Page, {
    children: [(0, _inferno.createComponentVNode)(2, _TextCard2.default), (0, _inferno.createComponentVNode)(2, _HeaderCard2.default)]
  });
}
module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormPage;

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Input = __webpack_require__(124);

var _Input2 = _interopRequireDefault(_Input);

var _InputGroup = __webpack_require__(125);

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _InputWithButton = __webpack_require__(126);

var _InputWithButton2 = _interopRequireDefault(_InputWithButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormPage(props) {
  return (0, _inferno.createComponentVNode)(2, _components.Page, {
    children: [(0, _inferno.createComponentVNode)(2, _Input2.default), (0, _inferno.createComponentVNode)(2, _InputGroup2.default), (0, _inferno.createComponentVNode)(2, _InputWithButton2.default)]
  });
}
module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BasicPage;

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _BasicModal = __webpack_require__(128);

var _BasicModal2 = _interopRequireDefault(_BasicModal);

var _Animations = __webpack_require__(127);

var _Animations2 = _interopRequireDefault(_Animations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BasicPage(props) {
  return (0, _inferno.createComponentVNode)(2, _components.Page, {
    children: (0, _inferno.createComponentVNode)(2, _BasicModal2.default)
  });
}
module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavigationPage;

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Horizontal = __webpack_require__(129);

var _Horizontal2 = _interopRequireDefault(_Horizontal);

var _Vertical = __webpack_require__(132);

var _Vertical2 = _interopRequireDefault(_Vertical);

var _Tabbed = __webpack_require__(131);

var _Tabbed2 = _interopRequireDefault(_Tabbed);

var _Pills = __webpack_require__(130);

var _Pills2 = _interopRequireDefault(_Pills);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Modal from '../../../lib/Modal'


function NavigationPage(props) {
  return (0, _inferno.createComponentVNode)(2, _components.Page, {
    children: [(0, _inferno.createComponentVNode)(2, _Horizontal2.default), (0, _inferno.createComponentVNode)(2, _Vertical2.default), (0, _inferno.createComponentVNode)(2, _Tabbed2.default), (0, _inferno.createComponentVNode)(2, _Pills2.default)]
  });
}
module.exports = exports['default'];

/***/ }),
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag', 'color', 'onClose']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'alert', 'alert-' + color, { 'alert-dismissible': onClose }), cssModule);

  var closeClasses = (0, _utils.mapToCssModules)('close', cssModule);

  Object.assign(attributes, {
    className: classes,
    role: 'alert'
  });

  var childEls = [onClose ? (0, _inferno.createVNode)(1, 'button', closeClasses, (0, _inferno.createVNode)(1, 'span', null, (0, _inferno.createTextVNode)('\xD7'), 2, {
    'aria-hidden': 'true'
  }), 2, {
    'type': 'button',
    'aria-label': 'Close',
    'onClick': onClose
  }) : null, children];

  return (0, _infernoCreateElement.createElement)(Tag, attributes, childEls);
};

Alert.defaultProps = defaultProps;

exports.default = Alert;
module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'ol'
};

var Breadcrumb = function Breadcrumb(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'breadcrumb'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

Breadcrumb.defaultProps = defaultProps;

exports.default = Breadcrumb;
module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'li'
};

var BreadcrumbItem = function BreadcrumbItem(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'active', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

BreadcrumbItem.defaultProps = defaultProps;

exports.default = BreadcrumbItem;
module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div',
  role: 'toolbar'
};

var ButtonToolbar = function ButtonToolbar(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'btn-toolbar'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

ButtonToolbar.defaultProps = defaultProps;

exports.default = ButtonToolbar;
module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var CardFooter = function CardFooter(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'card-footer'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

CardFooter.defaultProps = defaultProps;

exports.default = CardFooter;
module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var CardHeader = function CardHeader(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'card-header'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

CardHeader.defaultProps = defaultProps;

exports.default = CardHeader;
module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'top', 'bottom', 'tag']);

  var cardImgClassName = 'card-img';
  if (top) {
    cardImgClassName = 'card-img-top';
  }
  if (bottom) {
    cardImgClassName = 'card-img-bottom';
  }

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, cardImgClassName), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

CardImg.defaultProps = defaultProps;

exports.default = CardImg;
module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'a'
};

var CardLink = function CardLink(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag', 'innerRef']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'card-link'), cssModule);

  Object.assign(attributes, {
    className: classes,
    ref: innerRef
  });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

CardLink.defaultProps = defaultProps;

exports.default = CardLink;
module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'h6'
};

var CardSubtitle = function CardSubtitle(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'card-subtitle'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

CardSubtitle.defaultProps = defaultProps;

exports.default = CardSubtitle;
module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _utils2 = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * These are the open and close animation helpers
 */
function _animateCollapseOnRemove(node, animCls, callback) {
  var clone = node.cloneNode(true);

  var _getDimensions = (0, _utils2.getDimensions)(node),
      width = _getDimensions.width,
      height = _getDimensions.height;

  (0, _utils2.setDimensions)(clone, width, height);
  (0, _utils2.addClassName)(clone, 'collapse show');
  (0, _utils2.setDisplay)(node, 'none !important');
  node.insertAdjacentElement('beforebegin', clone);

  (0, _utils2.addClassName)(clone, 'collapsing');

  (0, _utils2.registerTransitionListener)(clone, function () {
    // *** Cleanup ***
    callback && callback(clone);
    clone.remove();
  });

  setTimeout(function () {
    (0, _utils2.removeClassName)(clone, 'collapse show');
    (0, _utils2.clearDimensions)(clone);
  }, 5);
}

function _animateCollapseOnAdd(node, animCls, callback) {
  var _getDimensions2 = (0, _utils2.getDimensions)(node),
      width = _getDimensions2.width,
      height = _getDimensions2.height;

  (0, _utils2.addClassName)(node, 'collapse');
  (0, _utils2.forceReflow)();

  (0, _utils2.addClassName)(node, 'collapsing');
  (0, _utils2.setDisplay)(node, 'block');

  (0, _utils2.registerTransitionListener)([node, node.children[0]], function () {
    // *** Cleanup ***
    (0, _utils2.removeClassName)(node, 'collapsing');
    (0, _utils2.clearDimensions)(node);
    callback && callback(node);
  });

  //setTimeout(() => {
  (0, _utils2.setDimensions)(node, width, height);
  (0, _utils2.addClassName)(node, 'collapse show');
  (0, _utils2.removeClassName)(node, 'collapse');
  //}, 5) 
}

function Animated(props) {
  var Tag = props.tag,
      children = props.children,
      attrs = _objectWithoutProperties(props, ['tag', 'children']);

  return (0, _infernoCreateElement.createElement)(Tag || 'div', attrs, children);
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

var Collapse = function (_Component) {
  _inherits(Collapse, _Component);

  function Collapse(props) {
    _classCallCheck(this, Collapse);

    var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

    _this.state = {
      active: false
    };
    return _this;
  }

  _createClass(Collapse, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        active: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _omit = (0, _utils.omit)(this.props, ['isOpen', 'delay', 'onOpened', 'onClosed']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'tag']);

      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, !this.state.active && 'InfernoAnimation-noAnim'), cssModule);

      var prefix = this.props.animationClassNames;

      // If hidden
      if (!this.props.isOpen) return null;

      return (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, Animated, _extends({}, attributes, {
        'tag': Tag,
        'className': classes
      }), null, {
        'onComponentDidMount': function onComponentDidMount(dom) {
          return _animateCollapseOnAdd(dom, _this2.props.onOpened);
        },
        'onComponentWillUnmount': function onComponentWillUnmount(dom) {
          return _animateCollapseOnRemove(dom, _this2.props.onClosed);
        }
      }));
    }
  }]);

  return Collapse;
}(_inferno.Component);

Collapse.defaultProps = defaultProps;

exports.default = Collapse;
module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _infernoCreateElement = __webpack_require__(3);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var Container = function Container(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      fluid = props.fluid,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'fluid', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, fluid ? 'container-fluid' : 'container'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

Container.defaultProps = defaultProps;

exports.default = Container;
module.exports = exports['default'];

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _Dropdown = __webpack_require__(8);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputGroupButtonDropdown = function InputGroupButtonDropdown(props) {
  return (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, _Dropdown2.default, _extends({}, props)));
};

exports.default = InputGroupButtonDropdown;
module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'span'
};

var InputGroupText = function InputGroupText(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'input-group-text'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

InputGroupText.defaultProps = defaultProps;

exports.default = InputGroupText;
module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var Jumbotron = function Jumbotron(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      fluid = props.fluid,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag', 'fluid']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

Jumbotron.defaultProps = defaultProps;

exports.default = Jumbotron;
module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'ul'
};

var ListGroup = function ListGroup(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      flush = props.flush,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag', 'flush']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

ListGroup.defaultProps = defaultProps;

exports.default = ListGroup;
module.exports = exports['default'];

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
      attributes = _objectWithoutProperties(props, ['children', 'className', 'tag', 'active', 'disabled', 'action', 'color']);

  var classes = (0, _classnames2.default)(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? 'list-group-item-' + color : false, 'list-group-item');

  // Prevent click event when disabled.
  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

ListGroupItem.defaultProps = defaultProps;

exports.default = ListGroupItem;
module.exports = exports['default'];

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'h5'
};

var ListGroupItemHeading = function ListGroupItemHeading(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'tag']);

  var classes = (0, _classnames2.default)(className, 'list-group-item-heading');

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

ListGroupItemHeading.defaultProps = defaultProps;

exports.default = ListGroupItemHeading;
module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'p'
};

var ListGroupItemText = function ListGroupItemText(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'tag']);

  var classes = (0, _classnames2.default)(className, 'list-group-item-text');

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

ListGroupItemText.defaultProps = defaultProps;

exports.default = ListGroupItemText;
module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _infernoCreateElement = __webpack_require__(3);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'ul'
};

var Pagination = function Pagination(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'size', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'pagination', _defineProperty({}, 'pagination-' + size, !!size)), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

Pagination.defaultProps = defaultProps;

exports.default = Pagination;
module.exports = exports['default'];

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _infernoCreateElement = __webpack_require__(3);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
      attributes = _objectWithoutProperties(props, ['active', 'children', 'className', 'cssModule', 'disabled', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'page-item', {
    active: active,
    disabled: disabled
  }), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

PaginationItem.defaultProps = defaultProps;

exports.default = PaginationItem;
module.exports = exports['default'];

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _infernoCreateElement = __webpack_require__(3);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'a'
};

var PaginationLink = function PaginationLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      next = props.next,
      previous = props.previous,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'next', 'previous', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'page-link'), cssModule);

  var defaultAriaLabel = void 0;
  if (previous) {
    defaultAriaLabel = 'Previous';
  } else if (next) {
    defaultAriaLabel = 'Next';
  }
  var ariaLabel = props['aria-label'] || defaultAriaLabel;

  var defaultCaret = void 0;
  if (previous) {
    defaultCaret = '\xAB';
  } else if (next) {
    defaultCaret = '\xBB';
  }

  var children = props.children;
  if (previous || next) {
    children = [(0, _inferno.createVNode)(1, 'span', null, children || defaultCaret, 0, {
      'aria-hidden': 'true'
    }, 'caret'), (0, _inferno.createVNode)(1, 'span', 'sr-only', ariaLabel, 0, null, 'sr')];
  }

  Object.assign(attributes, {
    'aria-label': ariaLabel,
    className: classes
  });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

PaginationLink.defaultProps = defaultProps;

exports.default = PaginationLink;
module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _infernoPopper = __webpack_require__(9);

var _PopperContent = __webpack_require__(89);

var _PopperContent2 = _interopRequireDefault(_PopperContent);

var _utils = __webpack_require__(2);

var _infernoShared = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Popover = function (_Component) {
  _inherits(Popover, _Component);

  function Popover(props) {
    _classCallCheck(this, Popover);

    var _this = _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));

    _this.addTargetEvents = _this.addTargetEvents.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.removeTargetEvents = _this.removeTargetEvents.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    _this.show = _this.show.bind(_this);
    _this.hide = _this.hide.bind(_this);
    return _this;
  }

  _createClass(Popover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._target = (0, _utils.getTarget)(this.props.target);
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.handleProps();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearShowTimeout();
      this.clearHideTimeout();
      this.removeTargetEvents();
    }
  }, {
    key: 'getDelay',
    value: function getDelay(key) {
      var delay = this.props.delay;

      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
        return (0, _infernoShared.isNaN)(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }
      return delay;
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.isOpen) {
        this.show();
      } else {
        this.hide();
      }
    }
  }, {
    key: 'show',
    value: function show() {
      this.clearHideTimeout();
      this.addTargetEvents();
      if (!this.props.isOpen) {
        this.clearShowTimeout();
        this._showTimeout = setTimeout(this.toggle, this.getDelay('show'));
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.clearShowTimeout();
      this.removeTargetEvents();
      if (this.props.isOpen) {
        this.clearHideTimeout();
        this._hideTimeout = setTimeout(this.toggle, this.getDelay('hide'));
      }
    }
  }, {
    key: 'clearShowTimeout',
    value: function clearShowTimeout() {
      clearTimeout(this._showTimeout);
      this._showTimeout = undefined;
    }
  }, {
    key: 'clearHideTimeout',
    value: function clearHideTimeout() {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = undefined;
    }
  }, {
    key: 'handleDocumentClick',
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
    key: 'addTargetEvents',
    value: function addTargetEvents() {
      document.addEventListener('click', this.handleDocumentClick, true);
    }
  }, {
    key: 'removeTargetEvents',
    value: function removeTargetEvents() {
      document.removeEventListener('click', this.handleDocumentClick, true);
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle();
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }

      var attributes = (0, _utils.omit)(this.props, Object.keys(omitProps));
      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)('popover-inner', this.props.className), this.props.cssModule);

      var popperClasses = (0, _utils.mapToCssModules)((0, _classnames2.default)('popover', 'show'), this.props.cssModule);

      return (0, _inferno.createComponentVNode)(2, _PopperContent2.default, {
        'className': popperClasses,
        'target': this.props.target,
        'isOpen': this.props.isOpen,
        'placement': this.props.placement,
        'placementPrefix': this.props.placementPrefix,
        children: (0, _inferno.normalizeProps)((0, _inferno.createVNode)(1, 'div', classes, null, 1, _extends({}, attributes)))
      });
    }
  }]);

  return Popover;
}(_inferno.Component);

Popover.defaultProps = defaultProps;

exports.default = Popover;
module.exports = exports['default'];

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var PopoverBody = function PopoverBody(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'popover-body'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

PopoverBody.defaultProps = defaultProps;

exports.default = PopoverBody;
module.exports = exports['default'];

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'h3'
};

var PopoverHeader = function PopoverHeader(props) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'popover-header'), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
};

PopoverHeader.defaultProps = defaultProps;

exports.default = PopoverHeader;
module.exports = exports['default'];

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _infernoPopper = __webpack_require__(9);

var _PopperTargetHelper = __webpack_require__(90);

var _PopperTargetHelper2 = _interopRequireDefault(_PopperTargetHelper);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  placement: 'auto',
  isOpen: false,
  offset: 0,
  fallbackPlacement: 'flip',
  wrapTag: 'span',
  flip: true
};

var PopperContent = function (_Component) {
  _inherits(PopperContent, _Component);

  function PopperContent(props) {
    _classCallCheck(this, PopperContent);

    var _this = _possibleConstructorReturn(this, (PopperContent.__proto__ || Object.getPrototypeOf(PopperContent)).call(this, props));

    _this.handlePlacementChange = _this.handlePlacementChange.bind(_this);
    _this.state = {};
    return _this;
  }

  _createClass(PopperContent, [{
    key: 'handlePlacementChange',
    value: function handlePlacementChange(data) {
      if (this.state.placement !== data.placement) {
        this.setState({ placement: data.placement });
      }
      return data;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          cssModule = _props.cssModule,
          children = _props.children,
          isOpen = _props.isOpen,
          flip = _props.flip,
          target = _props.target,
          offset = _props.offset,
          fallbackPlacement = _props.fallbackPlacement,
          placementPrefix = _props.placementPrefix,
          className = _props.className,
          wrapTag = _props.wrapTag,
          wrapClassName = _props.wrapClassName,
          tag = _props.tag,
          attrs = _objectWithoutProperties(_props, ['cssModule', 'children', 'isOpen', 'flip', 'target', 'offset', 'fallbackPlacement', 'placementPrefix', 'className', 'wrapTag', 'wrapClassName', 'tag']);

      var arrowClassName = (0, _utils.mapToCssModules)('arrow', cssModule);
      var placement = (this.state.placement || attrs.placement).split('-')[0];
      var managerClass = (0, _utils.mapToCssModules)(wrapClassName, this.props.cssModule);
      var popperClassName = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, placementPrefix ? placementPrefix + '-' + placement : placement), this.props.cssModule);

      var modifiers = {
        offset: { offset: offset },
        flip: { enabled: flip, behavior: fallbackPlacement },
        update: {
          enabled: true,
          order: 950,
          fn: this.handlePlacementChange
        }
      };

      return (0, _inferno.createComponentVNode)(2, _infernoPopper.Manager, {
        'tag': wrapTag,
        'className': managerClass,
        children: [(0, _inferno.createComponentVNode)(2, _PopperTargetHelper2.default, {
          'target': target
        }), isOpen && (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, _infernoPopper.Popper, _extends({
          'modifiers': modifiers
        }, attrs, {
          'component': tag,
          'className': popperClassName,
          children: [children, (0, _inferno.createComponentVNode)(2, _infernoPopper.Arrow, {
            'className': arrowClassName
          })]
        })))]
      });
    }
  }]);

  return PopperContent;
}(_inferno.Component);

PopperContent.defaultProps = defaultProps;

exports.default = PopperContent;
module.exports = exports['default'];

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(2);

var PopperTargetHelper = function PopperTargetHelper(props, context) {
  context.popperManager.setTargetNode((0, _utils.getTarget)(props.target));
  return null;
};

exports.default = PopperTargetHelper;
module.exports = exports['default'];

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(106);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
      attributes = _objectWithoutProperties(props, ['children', 'className', 'barClassName', 'cssModule', 'value', 'max', 'animated', 'striped', 'color', 'bar', 'multi', 'tag']);

  var percent = (0, _lodash2.default)(value) / (0, _lodash2.default)(max) * 100;

  var progressClasses = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'progress'), cssModule);

  var progressBarClasses = (0, _utils.mapToCssModules)((0, _classnames2.default)('progress-bar', bar ? className || barClassName : barClassName, animated ? 'progress-bar-animated' : null, color ? 'bg-' + color : null, striped || animated ? 'progress-bar-striped' : null), cssModule);

  var ProgressBar = multi ? children : (0, _inferno.createVNode)(1, 'div', progressBarClasses, children, 0, {
    'style': { width: percent + '%' },
    'role': 'progressbar',
    'aria-valuenow': value,
    'aria-valuemin': '0',
    'aria-valuemax': max
  });

  if (bar) {
    return ProgressBar;
  }

  Object.assign(attributes, { className: progressClasses });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, ProgressBar);
};

Progress.defaultProps = defaultProps;

exports.default = Progress;
module.exports = exports['default'];

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  tag: 'div'
};

var omitProps = ['tag', 'activeTab', 'className', 'cssModule'];

function getContentSize() {
  var domEl = this.$V.dom;
  return {
    width: domEl.offsetWidth + 'px',
    height: domEl.offsetHeight + 'px'
  };
}

// This could probably be generalised in inferno-animation as part of animateOnAdd
function animateCrossFadeIn(component, currSize, animationName, callback) {
  var domEl = component.$V.dom;

  var height = domEl.offsetHeight + 'px';
  var width = domEl.offsetWidth + 'px';

  domEl.style.height = currSize.height;
  domEl.style.width = currSize.width;

  domEl.classList.add(animationName + '-enter');
  // Trigger reflow
  var tmp = domEl.offsetHeight;

  // 2. Set an animation listener, code at end
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
    done = true;

    // Clear style stuff
    domEl.style.height = domEl.style.width = '';
    domEl.classList.remove('InfernoAnimation-active');
    domEl.classList.remove(animationName + '-enter-active');
    domEl.classList.remove(animationName + '-enter-end');

    // 5. Call callback to allow stuff to happen
    callback && callback(domEl);
  };

  domEl.addEventListener("transitionend", onTransitionEnd, false);

  // 3. Activate transitions
  domEl.classList.add(animationName + '-enter-active');
  // The following is needed so we can prevent nested animations from playing slower
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

var TabContent = function (_Component) {
  _inherits(TabContent, _Component);

  function TabContent(props) {
    _classCallCheck(this, TabContent);

    var _this = _possibleConstructorReturn(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).call(this, props));

    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }

  _createClass(TabContent, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        activeTabId: this.state
      };
    }
  }, {
    key: 'componentWillReceiveProps',
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
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag;


      var attributes = (0, _utils.omit)(this.props, omitProps);

      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)('tab-content', className), cssModule);

      Object.assign(attributes, { className: classes });

      return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
    }
  }]);

  return TabContent;
}(_inferno.Component);

exports.default = TabContent;

TabContent.defaultProps = defaultProps;
module.exports = exports['default'];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TabPane;

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoCreateElement = __webpack_require__(3);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

function TabPane(props, context) {
  var children = props.children,
      className = props.className,
      cssModule = props.cssModule,
      tabId = props.tabId,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['children', 'className', 'cssModule', 'tabId', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)('tab-pane', className, { active: tabId === context.activeTabId.activeTab }), cssModule);

  Object.assign(attributes, { className: classes });

  return (0, _infernoCreateElement.createElement)(Tag, attributes, children);
}
TabPane.defaultProps = defaultProps;
module.exports = exports['default'];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Children = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.unmountComponentAtNode = unmountComponentAtNode;
exports.unstable_renderSubtreeIntoContainer = unstable_renderSubtreeIntoContainer;

var _inferno = __webpack_require__(0);

var _infernoShared = __webpack_require__(23);

var _infernoVnodeFlags = __webpack_require__(146);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* COMPATIBILITY */
// TODO: Rewrite implementation for Inferno

function unmountComponentAtNode(container) {
  (0, _inferno.render)(null, container);
  return true;
}

function unstable_renderSubtreeIntoContainer(parentComponent, vNode, container, callback) {
  var wrapperVNode = (0, _inferno.createComponentVNode)(_infernoVnodeFlags.VNodeFlags.ComponentClass, WrapperComponent, {
    children: vNode,
    context: parentComponent.context
  });
  (0, _inferno.render)(wrapperVNode, container);
  var component = vNode.children;

  if (callback) {
    // callback gets the component as context, no other argument.
    callback.call(component);
  }
  return component;
}

var WrapperComponent = function (_Component) {
  _inherits(WrapperComponent, _Component);

  function WrapperComponent() {
    _classCallCheck(this, WrapperComponent);

    return _possibleConstructorReturn(this, (WrapperComponent.__proto__ || Object.getPrototypeOf(WrapperComponent)).apply(this, arguments));
  }

  _createClass(WrapperComponent, [{
    key: "getChildContext",
    value: function getChildContext() {
      // tslint:disable-next-line
      return this.props.context;
    }
  }, {
    key: "render",
    value: function render(props) {
      return props.children;
    }
  }]);

  return WrapperComponent;
}(_inferno.Component);

var ARR = [];

var Children = exports.Children = {
  /*
  map(children: Array<InfernoChildren | any>, fn: IterateChildrenFn, ctx: any): any[] {
    if (isNullOrUndef(children)) {
      return children;
    }
    children = Children.toArray(children);
    if (ctx && ctx !== children) {
      fn = fn.bind(ctx);
    }
    return children.map(fn);
  },
  forEach(children: Array<InfernoChildren | any>, fn: IterateChildrenFn, ctx?: any): void {
    if (isNullOrUndef(children)) {
      return;
    }
    children = Children.toArray(children);
    if (ctx && ctx !== children) {
      fn = fn.bind(ctx);
    }
    for (let i = 0, len = children.length; i < len; i++) {
      const child = isInvalid(children[i]) ? null : children[i];
       fn(child, i, children);
    }
  },
  count(children: Array<InfernoChildren | any>): number {
    children = Children.toArray(children);
    return children.length;
  },
  */

  only: function only(children) {
    children = Children.toArray(children);
    if (children.length !== 1) {
      throw new Error('Children.only() expects only one child.');
    }
    return children[0];
  },

  toArray: function toArray(children) {
    if ((0, _infernoShared.isNullOrUndef)(children)) {
      return [];
    }
    // We need to flatten arrays here,
    // because React does it also and application level code might depend on that behavior
    if ((0, _infernoShared.isArray)(children)) {
      var result = [];

      flatten(children, result);

      return result;
    }
    return ARR.concat(children);
  }
};

/* /COMPATIBILITY */

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _warning = __webpack_require__(22);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(51);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(21);

var _PathUtils = __webpack_require__(17);

var _createTransitionManager = __webpack_require__(32);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(50);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
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

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;

    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

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
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
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
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

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
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
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

exports.default = createBrowserHistory;
module.exports = exports["default"];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _warning = __webpack_require__(22);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(51);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(21);

var _PathUtils = __webpack_require__(17);

var _createTransitionManager = __webpack_require__(32);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(50);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
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

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

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

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

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
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

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
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
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

exports.default = createHashHistory;
module.exports = exports['default'];

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _warning = __webpack_require__(22);

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(17);

var _LocationUtils = __webpack_require__(21);

var _createTransitionManager = __webpack_require__(32);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
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

  var transitionManager = (0, _createTransitionManager2.default)();

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
    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils.createPath;

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

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
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
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

exports.default = createMemoryHistory;
module.exports = exports["default"];

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPath = exports.parsePath = exports.locationsAreEqual = exports.createLocation = exports.createMemoryHistory = exports.createHashHistory = exports.createBrowserHistory = undefined;

var _LocationUtils = __webpack_require__(21);

Object.defineProperty(exports, 'createLocation', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.createLocation;
  }
});
Object.defineProperty(exports, 'locationsAreEqual', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.locationsAreEqual;
  }
});

var _PathUtils = __webpack_require__(17);

Object.defineProperty(exports, 'parsePath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.parsePath;
  }
});
Object.defineProperty(exports, 'createPath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.createPath;
  }
});

var _createBrowserHistory2 = __webpack_require__(95);

var _createBrowserHistory3 = _interopRequireDefault(_createBrowserHistory2);

var _createHashHistory2 = __webpack_require__(96);

var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

var _createMemoryHistory2 = __webpack_require__(97);

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createBrowserHistory = _createBrowserHistory3.default;
exports.createHashHistory = _createHashHistory3.default;
exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
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
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

exports.default = resolvePathname;
module.exports = exports['default'];

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
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

exports.default = valueEqual;
module.exports = exports["default"];

/***/ }),
/* 101 */
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
};

module.exports = hoistNonReactStatics;
module.exports.default = module.exports;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pathToRegExp = __webpack_require__(104);

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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isarray = __webpack_require__(102);

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
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
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
    index = offset + m.length;

    // Ignore already escaped sequences.
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
    var asterisk = res[7];

    // Push the current path onto the tokens.
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
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
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
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (_typeof(tokens[i]) === 'object') {
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
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
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
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
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
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */keys);
  }

  if (isarray(path)) {
    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
  }

  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
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
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
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
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (Prism) {

	var javascript = Prism.util.clone(Prism.languages.javascript);

	Prism.languages.jsx = Prism.languages.extend('markup', javascript);
	Prism.languages.jsx.tag.pattern = /<\/?[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+|(?:\{\{?[^}]*\}?\})))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?>/i;

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

	var jsxExpression = Prism.util.clone(Prism.languages.jsx);

	delete jsxExpression.punctuation;

	jsxExpression = Prism.languages.insertBefore('jsx', 'operator', {
		'punctuation': /=(?={)|[{}[\];(),.:]/
	}, { jsx: jsxExpression });

	Prism.languages.insertBefore('inside', 'attr-value', {
		'script': {
			// Allow for one level of nesting
			pattern: /=(\{(?:\{[^}]*\}|[^}])+\})/i,
			inside: jsxExpression,
			'alias': 'language-javascript'
		}
	}, Prism.languages.jsx.tag);
})(Prism);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/* **********************************************
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
	var lang = /\blang(?:uage)?-(\w+)\b/i;
	var uniqueId = 0;

	var _ = _self.Prism = {
		manual: _self.Prism && _self.Prism.manual,
		disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
				} else if (_.util.type(tokens) === 'Array') {
					return tokens.map(_.util.encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			type: function type(o) {
				return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
			},

			objId: function objId(obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			// Deep clone a language definition (e.g. to extend it)
			clone: function clone(o) {
				var type = _.util.type(o);

				switch (type) {
					case 'Object':
						var clone = {};

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = _.util.clone(o[key]);
							}
						}

						return clone;

					case 'Array':
						return o.map(function (v) {
							return _.util.clone(v);
						});
				}

				return o;
			}
		},

		languages: {
			extend: function extend(id, redef) {
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
			insertBefore: function insertBefore(inside, before, insert, root) {
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
				}

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === root[inside] && key != inside) {
						this[key] = ret;
					}
				});

				return root[inside] = ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
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

		highlightAll: function highlightAll(async, callback) {
			_.highlightAllUnder(document, async, callback);
		},

		highlightAllUnder: function highlightAllUnder(container, async, callback) {
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

		highlightElement: function highlightElement(element, async, callback) {
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
			}

			// Set language on the element, if not present
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

		highlight: function highlight(text, grammar, language) {
			var tokens = _.tokenize(text, grammar);
			return Token.stringify(_.util.encode(tokens), language);
		},

		matchGrammar: function matchGrammar(text, strarr, grammar, index, startPos, oneshot, target) {
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

					pattern = pattern.pattern || pattern;

					// Don’t cache length as it changes during the loop
					for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

						var str = strarr[i];

						if (strarr.length > text.length) {
							// Something went terribly wrong, ABORT, ABORT!
							return;
						}

						if (str instanceof Token) {
							continue;
						}

						pattern.lastIndex = 0;

						var match = pattern.exec(str),
						    delNum = 1;

						// Greedy patterns can override/remove up to two previously matched tokens
						if (!match && greedy && i != strarr.length - 1) {
							pattern.lastIndex = pos;
							match = pattern.exec(text);
							if (!match) {
								break;
							}

							var from = match.index + (lookbehind ? match[1].length : 0),
							    to = match.index + match[0].length,
							    k = i,
							    p = pos;

							for (var len = strarr.length; k < len && (p < to || !strarr[k].type && !strarr[k - 1].greedy); ++k) {
								p += strarr[k].length;
								// Move the index i to the element in strarr that is closest to from
								if (from >= p) {
									++i;
									pos = p;
								}
							}

							/*
        * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
        * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
        */
							if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
								continue;
							}

							// Number of tokens to delete and replace with the new match
							delNum = k - i;
							str = text.slice(pos, p);
							match.index -= pos;
						}

						if (!match) {
							if (oneshot) {
								break;
							}

							continue;
						}

						if (lookbehind) {
							lookbehindLength = match[1].length;
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

		tokenize: function tokenize(text, grammar, language) {
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

			add: function add(name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			run: function run(name, env) {
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
		this.alias = alias;
		// Copy of the full string this token was created from
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
	}

	//Get current script and highlight
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
}

// hack for components to work correctly in node.js
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
		pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
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

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
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
			'rule': /@[\w-]+/
			// See rest below
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

Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

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
		lookbehind: true
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
	'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};

/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
	'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
		alias: 'function'
	}
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|[^\\`])*`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^}]+\}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

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
			var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
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
	};

	document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Alerts',
    children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
      children: (0, _inferno.createVNode)(1, 'p', null, (0, _inferno.createTextVNode)('Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.'), 2)
    }), (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: [(0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Standard alert box'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Alert2.default, {
          'color': 'success',
          children: ['Some cool text in a ', (0, _inferno.createVNode)(1, 'b', null, (0, _inferno.createTextVNode)('success'), 2), ' alert box!']
        }), (0, _inferno.createComponentVNode)(2, _Alert2.default, {
          'color': 'warning',
          children: ['Some cool text in a ', (0, _inferno.createVNode)(1, 'b', null, (0, _inferno.createTextVNode)('warning'), 2), ' alert box!']
        }), (0, _inferno.createComponentVNode)(2, _Alert2.default, {
          'color': 'danger',
          children: ['Some cool text in a ', (0, _inferno.createVNode)(1, 'b', null, (0, _inferno.createTextVNode)('danger'), 2), ' alert box!']
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Alert color="success">\n  Some cool text in a <b>success</b> alert box!\n</Alert>\n<Alert color="warning">\n  Some cool text in a <b>warning</b> alert box!\n</Alert>\n<Alert color="danger">\n  Some cool text in a <b>danger</b> alert box!\n</Alert>'
        })]
      }), (0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Alert box with close button'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Alert2.default, {
          'onClose': function onClose() {},
          children: ['Some cool text in a ', (0, _inferno.createVNode)(1, 'b', null, (0, _inferno.createTextVNode)('danger'), 2), ' alert box!']
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Alert onClose={() => {}}>\n  Some cool text in a <b>danger</b> alert box!\n</Alert>'
        })]
      })]
    })]
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Alert = __webpack_require__(65);

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Badges',
    children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
      children: (0, _inferno.createVNode)(1, 'p', null, (0, _inferno.createTextVNode)('Small and adaptive tag for adding context to just about any content.'), 2)
    }), (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: [(0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createVNode)(1, 'h2', null, [(0, _inferno.createTextVNode)('Some nice text '), (0, _inferno.createComponentVNode)(2, _Badge2.default, {
          children: 'new'
        })], 4), (0, _inferno.createVNode)(1, 'h3', null, [(0, _inferno.createTextVNode)('Some nice text '), (0, _inferno.createComponentVNode)(2, _Badge2.default, {
          children: 'new'
        })], 4), (0, _inferno.createVNode)(1, 'h4', null, [(0, _inferno.createTextVNode)('Some nice text '), (0, _inferno.createComponentVNode)(2, _Badge2.default, {
          children: 'new'
        })], 4), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<h2>Some nice text <Badge>new</Badge></h2>\n<h3>Some nice text <Badge>new</Badge></h3>\n<h4>Some nice text <Badge>new</Badge></h4>'
        })]
      }), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createVNode)(1, 'h5', null, [(0, _inferno.createTextVNode)('Some nice text '), (0, _inferno.createComponentVNode)(2, _Badge2.default, {
          'pill': true,
          'color': 'danger',
          children: '10'
        })], 4), (0, _inferno.createVNode)(1, 'p', null, [(0, _inferno.createTextVNode)('Some nice text '), (0, _inferno.createComponentVNode)(2, _Badge2.default, {
          'pill': true,
          'color': 'danger',
          children: '10'
        })], 4), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<h5>Some nice text <Badge pill color="danger">10</Badge></h5>\n<p>Some nice text <Badge pill color="danger">10</Badge></p>'
        })]
      })]
    })]
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Badge = __webpack_require__(39);

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Breadcrumbs',
    children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
      children: (0, _inferno.createVNode)(1, 'p', null, [(0, _inferno.createTextVNode)('Indicate the current page\u2019s location within a navigational hierarchy. Separators are automatically added in CSS through '), (0, _inferno.createVNode)(1, 'a', null, (0, _inferno.createVNode)(1, 'code', 'highlighter-rouge', (0, _inferno.createTextVNode)('::before'), 2), 2, {
        'href': 'https://developer.mozilla.org/en-US/docs/Web/CSS/::before'
      }), (0, _inferno.createTextVNode)(' and '), (0, _inferno.createVNode)(1, 'a', null, [(0, _inferno.createTextVNode)(' '), (0, _inferno.createVNode)(1, 'code', 'highlighter-rouge', (0, _inferno.createTextVNode)('content'), 2)], 4, {
        'href': 'https://developer.mozilla.org/en-US/docs/Web/CSS/content'
      }), (0, _inferno.createTextVNode)('.')], 4)
    }), (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Breadcrumb2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _BreadcrumbItem2.default, {
            children: (0, _inferno.createVNode)(1, 'a', null, (0, _inferno.createTextVNode)('Home'), 2, {
              'href': '#'
            })
          }), (0, _inferno.createComponentVNode)(2, _BreadcrumbItem2.default, {
            children: (0, _inferno.createVNode)(1, 'a', null, (0, _inferno.createTextVNode)('Section'), 2, {
              'href': '#'
            })
          }), (0, _inferno.createComponentVNode)(2, _BreadcrumbItem2.default, {
            'active': 'true',
            children: 'This page'
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Breadcrumb>\n  <BreadcrumbItem>\n    <a href="#">Home</a>\n  </BreadcrumbItem>\n  <BreadcrumbItem>\n    <a href="#">Section</a>\n  </BreadcrumbItem>\n  <BreadcrumbItem active="true">\n    This page\n  </BreadcrumbItem>\n</Breadcrumb>'
        })]
      })
    })]
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Breadcrumb = __webpack_require__(66);

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _BreadcrumbItem = __webpack_require__(67);

var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return (0, _inferno.createVNode)(1, 'div', null, [(0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Buttons',
    children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
      children: (0, _inferno.createVNode)(1, 'p', null, (0, _inferno.createTextVNode)('Use Bootstrap\u2019s custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.'), 2)
    }), (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: [(0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Standard Buttons'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Button2.default, {
          'color': 'primary',
          children: 'primary'
        }), ' ', (0, _inferno.createComponentVNode)(2, _Button2.default, {
          'color': 'secondary',
          children: 'secondary'
        }), ' ', (0, _inferno.createComponentVNode)(2, _Button2.default, {
          'color': 'success',
          children: 'success'
        }), ' ', (0, _inferno.createComponentVNode)(2, _Button2.default, {
          'color': 'info',
          children: 'info'
        }), ' ', (0, _inferno.createComponentVNode)(2, _Button2.default, {
          'color': 'warning',
          children: 'warning'
        }), ' ', (0, _inferno.createComponentVNode)(2, _Button2.default, {
          'color': 'danger',
          children: 'danger'
        }), ' ', (0, _inferno.createComponentVNode)(2, _Button2.default, {
          'color': 'link',
          children: 'link'
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Button color="primary">primary</Button>\n<Button color="secondary">secondary</Button>\n<Button color="success">success</Button>\n<Button color="info">info</Button>\n<Button color="warning">warning</Button>\n<Button color="danger">danger</Button>\n<Button color="link">link</Button>'
        })]
      }), (0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Outline Buttons'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Button2.default, {
          'outline': true,
          'color': 'primary',
          children: 'primary'
        }), ' ', (0, _inferno.createComponentVNode)(2, _Button2.default, {
          'outline': true,
          'color': 'secondary',
          children: 'secondary'
        }), ' ', (0, _inferno.createComponentVNode)(2, _Button2.default, {
          'outline': true,
          'color': 'success',
          children: 'success'
        }), ' ', (0, _inferno.createComponentVNode)(2, _Button2.default, {
          'outline': true,
          'color': 'info',
          children: 'info'
        }), ' ', (0, _inferno.createComponentVNode)(2, _Button2.default, {
          'outline': true,
          'color': 'warning',
          children: 'warning'
        }), ' ', (0, _inferno.createComponentVNode)(2, _Button2.default, {
          'outline': true,
          'color': 'danger',
          children: 'danger'
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Button outline color="primary">primary</Button>\n<Button outline color="secondary">secondary</Button>\n<Button outline color="success">success</Button>\n<Button outline color="info">info</Button>\n<Button outline color="warning">warning</Button>\n<Button outline color="danger">danger</Button>'
        })]
      }), (0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Different sizes'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Button2.default, {
          'color': 'primary',
          'size': 'lg',
          children: 'Large Button'
        }), ' ', (0, _inferno.createComponentVNode)(2, _Button2.default, {
          'color': 'secondary',
          'size': 'lg',
          children: 'Large Button'
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Button color="primary" size="lg">Large Button</Button>\n<Button color="secondary" size="lg">Large Button</Button>'
        })]
      }), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Button2.default, {
          'color': 'primary',
          'size': 'sm',
          children: 'Small Button'
        }), ' ', (0, _inferno.createComponentVNode)(2, _Button2.default, {
          'color': 'secondary',
          'size': 'sm',
          children: 'Small Button'
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Button color="primary" size="sm">Small Button</Button>\n<Button color="secondary" size="sm">Small Button</Button>'
        })]
      }), (0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Block Level Buttons'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Button2.default, {
          'color': 'primary',
          'size': 'lg',
          'block': true,
          children: 'Block level button'
        }), (0, _inferno.createComponentVNode)(2, _Button2.default, {
          'color': 'secondary',
          'size': 'lg',
          'block': true,
          children: 'Block level button'
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Button color="primary" size="lg" block>Block level button</Button>\n<Button color="secondary" size="lg" block>Block level button</Button>'
        })]
      }), (0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Disabled Buttons'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Button2.default, {
          'color': 'primary',
          'size': 'lg',
          'disabled': true,
          children: 'Primary button'
        }), ' ', (0, _inferno.createComponentVNode)(2, _Button2.default, {
          'color': 'secondary',
          'size': 'lg',
          'disabled': true,
          children: 'Button'
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Button color="primary" size="lg" disabled>Primary button</Button>\n<Button color="secondary" size="lg" disabled>Button</Button>'
        })]
      })]
    })]
  }), (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Radio Buttons',
    children: (0, _inferno.createComponentVNode)(2, RadioButtonStage)
  }), (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Button Group',
    children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
      children: (0, _inferno.createVNode)(1, 'p', null, (0, _inferno.createTextVNode)('Group a series of buttons together on a single line with the button group.'), 2)
    }), (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _ButtonGroup2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _Button2.default, {
            children: 'Left'
          }), ' ', (0, _inferno.createComponentVNode)(2, _Button2.default, {
            children: 'Middle'
          }), ' ', (0, _inferno.createComponentVNode)(2, _Button2.default, {
            children: 'Right'
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<ButtonGroup>\n  <Button>Left</Button>\n  <Button>Middle</Button>\n  <Button>Right</Button>\n</ButtonGroup>'
        })]
      })
    })]
  }), (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Button Toolbar',
    children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
      children: (0, _inferno.createVNode)(1, 'p', null, (0, _inferno.createTextVNode)('Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.'), 2)
    }), (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _ButtonToolbar2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _ButtonGroup2.default, {
            'className': 'mr-2',
            children: [(0, _inferno.createComponentVNode)(2, _Button2.default, {
              children: 'Store'
            }), (0, _inferno.createComponentVNode)(2, _Button2.default, {
              children: 'Update'
            }), (0, _inferno.createComponentVNode)(2, _Button2.default, {
              children: 'Stay'
            }), (0, _inferno.createComponentVNode)(2, _Button2.default, {
              children: 'Flow'
            })]
          }), (0, _inferno.createComponentVNode)(2, _ButtonGroup2.default, {
            'className': 'mr-2',
            children: [(0, _inferno.createComponentVNode)(2, _Button2.default, {
              children: '5'
            }), (0, _inferno.createComponentVNode)(2, _Button2.default, {
              children: '6'
            }), (0, _inferno.createComponentVNode)(2, _Button2.default, {
              children: '7'
            })]
          }), (0, _inferno.createComponentVNode)(2, _ButtonGroup2.default, {
            children: (0, _inferno.createComponentVNode)(2, _Button2.default, {
              children: '8'
            })
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<ButtonToolbar>\n  <ButtonGroup className="mr-2">\n    <Button>Store</Button>\n    <Button>Update</Button>\n    <Button>Stay</Button>\n    <Button>Flow</Button>\n  </ButtonGroup>\n  <ButtonGroup className="mr-2">\n    <Button>5</Button>\n    <Button>6</Button>\n    <Button>7</Button>\n  </ButtonGroup>\n  <ButtonGroup>\n    <Button>8</Button>\n  </ButtonGroup>\n</ButtonToolbar>'
        })]
      })
    })]
  }), (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Button Vertical',
    children: (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: [(0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _ButtonGroup2.default, {
          'vertical': true,
          children: [(0, _inferno.createComponentVNode)(2, _Button2.default, {
            children: 'One'
          }), (0, _inferno.createComponentVNode)(2, _Button2.default, {
            children: 'Two'
          }), (0, _inferno.createComponentVNode)(2, SampleDropdownButton, {
            'caret': true,
            children: 'Drop me!'
          }), (0, _inferno.createComponentVNode)(2, _ButtonGroup2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Button2.default, {
              children: 'Split drop!'
            }), (0, _inferno.createComponentVNode)(2, SampleDropdownButton, {
              'split': true
            })]
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<ButtonGroup vertical>\n  <Button>One</Button>\n  <Button>Two</Button>\n  <SampleDropdownButton caret>Drop me!</SampleDropdownButton>\n  <ButtonGroup>\n    <Button>Split drop!</Button><SampleDropdownButton split />\n  </ButtonGroup>\n</ButtonGroup>'
        })]
      }), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
          children: 'This is the code to create the dropdown button:'
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: 'class SampleDropdownButton extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      isOpen: false\n    }\n\n    this.doToggle = this.doToggle.bind(this)\n  }\n\n  doToggle() {\n    this.setState({\n      isOpen: !this.state.isOpen\n    })\n  }\n\n  render({ children, ...props }) {\n    return (\n      <ButtonDropdown isOpen={this.state.isOpen} toggle={this.doToggle}>\n        <DropdownToggle {...props}>{children}</DropdownToggle>\n        <DropdownMenu>\n          <DropdownItem>Item 1</DropdownItem>\n          <DropdownItem>Item 2</DropdownItem>\n          <DropdownItem>Item 3</DropdownItem>\n        </DropdownMenu>\n      </ButtonDropdown>\n    )\n  }\n}'
        })]
      })]
    })
  })], 4);
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Button = __webpack_require__(5);

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = __webpack_require__(24);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _ButtonToolbar = __webpack_require__(68);

var _ButtonToolbar2 = _interopRequireDefault(_ButtonToolbar);

var _ButtonDropdown = __webpack_require__(40);

var _ButtonDropdown2 = _interopRequireDefault(_ButtonDropdown);

var _DropdownToggle = __webpack_require__(13);

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _DropdownMenu = __webpack_require__(12);

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownItem = __webpack_require__(11);

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButtonStage = function (_Component) {
  _inherits(RadioButtonStage, _Component);

  function RadioButtonStage(props) {
    _classCallCheck(this, RadioButtonStage);

    var _this = _possibleConstructorReturn(this, (RadioButtonStage.__proto__ || Object.getPrototypeOf(RadioButtonStage)).call(this, props));

    _this.state = { cSelected: [] };

    _this.onRadioBtnClick = _this.onRadioBtnClick.bind(_this);
    _this.onCheckboxBtnClick = _this.onCheckboxBtnClick.bind(_this);
    return _this;
  }

  _createClass(RadioButtonStage, [{
    key: 'onRadioBtnClick',
    value: function onRadioBtnClick(rSelected) {
      this.setState({ rSelected: rSelected });
    }
  }, {
    key: 'onCheckboxBtnClick',
    value: function onCheckboxBtnClick(selected) {
      var index = this.state.cSelected.indexOf(selected);
      if (index < 0) {
        this.state.cSelected.push(selected);
      } else {
        this.state.cSelected.splice(index, 1);
      }
      this.setState({ cSelected: [].concat(_toConsumableArray(this.state.cSelected)) });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return (0, _inferno.createComponentVNode)(2, _components.Stage, {
        children: [(0, _inferno.createComponentVNode)(2, _components.Scene, {
          children: [(0, _inferno.createVNode)(1, 'h5', null, (0, _inferno.createTextVNode)('Radio Buttons'), 2), (0, _inferno.createComponentVNode)(2, _ButtonGroup2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Button2.default, {
              'color': 'primary',
              'onClick': function onClick() {
                return _this2.onRadioBtnClick(1);
              },
              'active': this.state.rSelected === 1,
              children: 'One'
            }), (0, _inferno.createComponentVNode)(2, _Button2.default, {
              'color': 'primary',
              'onClick': function onClick() {
                return _this2.onRadioBtnClick(2);
              },
              'active': this.state.rSelected === 2,
              children: 'Two'
            }), (0, _inferno.createComponentVNode)(2, _Button2.default, {
              'color': 'primary',
              'onClick': function onClick() {
                return _this2.onRadioBtnClick(3);
              },
              'active': this.state.rSelected === 3,
              children: 'Three'
            })]
          }), (0, _inferno.createVNode)(1, 'p', null, [(0, _inferno.createTextVNode)('Selected: '), this.state.rSelected], 0), (0, _inferno.createComponentVNode)(2, _components.Code, {
            children: '<ButtonGroup>\n  <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>\n  <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>\n  <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>\n</ButtonGroup>'
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Scene, {
          children: [(0, _inferno.createVNode)(1, 'h5', null, (0, _inferno.createTextVNode)('Checkbox Buttons'), 2), (0, _inferno.createComponentVNode)(2, _ButtonGroup2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Button2.default, {
              'color': 'primary',
              'onClick': function onClick() {
                return _this2.onCheckboxBtnClick(1);
              },
              'active': this.state.cSelected.includes(1),
              children: 'One'
            }), (0, _inferno.createComponentVNode)(2, _Button2.default, {
              'color': 'primary',
              'onClick': function onClick() {
                return _this2.onCheckboxBtnClick(2);
              },
              'active': this.state.cSelected.includes(2),
              children: 'Two'
            }), (0, _inferno.createComponentVNode)(2, _Button2.default, {
              'color': 'primary',
              'onClick': function onClick() {
                return _this2.onCheckboxBtnClick(3);
              },
              'active': this.state.cSelected.includes(3),
              children: 'Three'
            })]
          }), (0, _inferno.createVNode)(1, 'p', null, [(0, _inferno.createTextVNode)('Selected: '), JSON.stringify(this.state.cSelected)], 0), (0, _inferno.createComponentVNode)(2, _components.Code, {
            children: '<ButtonGroup>\n  <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>\n  <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>\n  <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>\n</ButtonGroup>'
          })]
        })]
      });
    }
  }]);

  return RadioButtonStage;
}(_inferno.Component);

var SampleDropdownButton = function (_Component2) {
  _inherits(SampleDropdownButton, _Component2);

  function SampleDropdownButton(props) {
    _classCallCheck(this, SampleDropdownButton);

    var _this3 = _possibleConstructorReturn(this, (SampleDropdownButton.__proto__ || Object.getPrototypeOf(SampleDropdownButton)).call(this, props));

    _this3.state = {
      isOpen: false
    };

    _this3.doToggle = _this3.doToggle.bind(_this3);
    return _this3;
  }

  _createClass(SampleDropdownButton, [{
    key: 'doToggle',
    value: function doToggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: 'render',
    value: function render(_ref) {
      var children = _ref.children,
          props = _objectWithoutProperties(_ref, ['children']);

      return (0, _inferno.createComponentVNode)(2, _ButtonDropdown2.default, {
        'isOpen': this.state.isOpen,
        'toggle': this.doToggle,
        children: [(0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, _DropdownToggle2.default, _extends({}, props, {
          children: children
        }))), (0, _inferno.createComponentVNode)(2, _DropdownMenu2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
            children: 'Item 1'
          }), (0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
            children: 'Item 2'
          }), (0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
            children: 'Item 3'
          })]
        })]
      });
    }
  }]);

  return SampleDropdownButton;
}(_inferno.Component);

module.exports = exports['default'];

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Collapse',
    children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
      children: (0, _inferno.createVNode)(1, 'p', null, (0, _inferno.createTextVNode)('Toggle visibility of content with animation.'), 2)
    }), (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: [(0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Default open'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: (0, _inferno.createComponentVNode)(2, ToggleCollapse, {
          'defaultOpen': true
        })
      }), (0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Default closed'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: (0, _inferno.createComponentVNode)(2, ToggleCollapse, {
          'defaultOpen': false
        })
      }), (0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Example code:'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: 'class ToggleCollapse extends Component {\n  constructor(props) {\n    super(props)\n\n    this.state = {\n      isOpen: false\n    }\n\n    this.doToggle = this.doToggle.bind(this)\n  }\n\n  doToggle() {\n    this.setState({\n      isOpen: !this.state.isOpen\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.doToggle}>Do toggle!</Button>\n        <Collapse isOpen={this.state.isOpen}>\n          <Card className="ExampleCollapseContainer">\n            <CardBody>\n              <p>My phone number is only two digits off from a local pizzeria\u2019s. I\u2019ve spent my entire life getting occasional wrong-dials from people who accidentally fumbled and hit the wrong number, looking for pizza. One night, it is two am, and our phone rings. I let it go to machine, and am greeted by a rather amusing voicemail from a very drunk man called \u201CGordon\u201D, who is practically begging for pizza to be delivered to his dorm room at the local college. I try to go back to sleep, but \u201CGordon\u201D calls back again\u2026 and again. On the third call, I answer the phone.</p>\n            </CardBody>\n          </Card>\n        </Collapse>  \n      </div>  \n    )\n  }\n}'
        })
      })]
    })]
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Button = __webpack_require__(5);

var _Button2 = _interopRequireDefault(_Button);

var _Collapse = __webpack_require__(74);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Card = __webpack_require__(20);

var _Card2 = _interopRequireDefault(_Card);

var _CardBody = __webpack_require__(25);

var _CardBody2 = _interopRequireDefault(_CardBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleCollapse = function (_Component) {
  _inherits(ToggleCollapse, _Component);

  function ToggleCollapse(props) {
    _classCallCheck(this, ToggleCollapse);

    var _this = _possibleConstructorReturn(this, (ToggleCollapse.__proto__ || Object.getPrototypeOf(ToggleCollapse)).call(this, props));

    _this.state = {
      isOpen: props.defaultOpen
    };

    _this.doToggle = _this.doToggle.bind(_this);
    return _this;
  }

  _createClass(ToggleCollapse, [{
    key: 'doToggle',
    value: function doToggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _inferno.createVNode)(1, 'div', null, [(0, _inferno.createComponentVNode)(2, _Button2.default, {
        'onClick': this.doToggle,
        children: 'Do toggle!'
      }), (0, _inferno.createComponentVNode)(2, _Collapse2.default, {
        'isOpen': this.state.isOpen,
        children: (0, _inferno.createComponentVNode)(2, _Card2.default, {
          'className': 'ExampleCollapseContainer',
          children: (0, _inferno.createComponentVNode)(2, _CardBody2.default, {
            children: (0, _inferno.createVNode)(1, 'p', null, (0, _inferno.createTextVNode)('My phone number is only two digits off from a local pizzeria\u2019s. I\u2019ve spent my entire life getting occasional wrong-dials from people who accidentally fumbled and hit the wrong number, looking for pizza. One night, it is two am, and our phone rings. I let it go to machine, and am greeted by a rather amusing voicemail from a very drunk man called \u201CGordon\u201D, who is practically begging for pizza to be delivered to his dorm room at the local college. I try to go back to sleep, but \u201CGordon\u201D calls back again\u2026 and again. On the third call, I answer the phone.'), 2)
          })
        })
      })], 4);
    }
  }]);

  return ToggleCollapse;
}(_inferno.Component);

module.exports = exports['default'];

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Dropdown Menu',
    children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
      children: (0, _inferno.createVNode)(1, 'p', null, (0, _inferno.createTextVNode)('Simple dropdown menu.'), 2)
    }), (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, DropdownExample), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: 'class DropdownExample extends Component {\n  constructor(props) {\n    super(props);\n\n    this.toggle = this.toggle.bind(this);\n    this.state = {\n      dropdownOpen: false\n    };\n  }\n\n  toggle() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen\n    });\n  }\n\n  render() {\n    return (\n      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>\n        <DropdownToggle caret>\n          Dropdown\n        </DropdownToggle>\n        <DropdownMenu>\n          <DropdownItem header>Header</DropdownItem>\n          <DropdownItem disabled>Action</DropdownItem>\n          <DropdownItem>Another Action</DropdownItem>\n          <DropdownItem divider />\n          <DropdownItem>Another Action</DropdownItem>\n        </DropdownMenu>\n      </Dropdown>\n    );\n  }\n}'
        })]
      })
    })]
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Dropdown = __webpack_require__(8);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DropdownToggle = __webpack_require__(13);

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _DropdownMenu = __webpack_require__(12);

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownItem = __webpack_require__(11);

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownExample = function (_Component) {
  _inherits(DropdownExample, _Component);

  function DropdownExample(props) {
    _classCallCheck(this, DropdownExample);

    var _this = _possibleConstructorReturn(this, (DropdownExample.__proto__ || Object.getPrototypeOf(DropdownExample)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      dropdownOpen: false
    };
    return _this;
  }

  _createClass(DropdownExample, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _inferno.createComponentVNode)(2, _Dropdown2.default, {
        'isOpen': this.state.dropdownOpen,
        'toggle': this.toggle,
        children: [(0, _inferno.createComponentVNode)(2, _DropdownToggle2.default, {
          'caret': true,
          children: 'Dropdown'
        }), (0, _inferno.createComponentVNode)(2, _DropdownMenu2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
            'header': true,
            children: 'Header'
          }), (0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
            'disabled': true,
            children: 'Action'
          }), (0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
            children: 'Another Action'
          }), (0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
            'divider': true
          }), (0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
            children: 'Another Action'
          })]
        })]
      });
    }
  }]);

  return DropdownExample;
}(_inferno.Component);

module.exports = exports['default'];

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Jumbotron',
    children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
      children: (0, _inferno.createVNode)(1, 'p', null, (0, _inferno.createTextVNode)('The jumbotron or hero is a content section that gives a nice entry point to important content'), 2)
    }), (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Jumbotron2.default, {
          children: [(0, _inferno.createVNode)(1, 'h1', 'display-3', (0, _inferno.createTextVNode)('Hello, world!'), 2), (0, _inferno.createVNode)(1, 'p', 'lead', (0, _inferno.createTextVNode)('This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.'), 2), (0, _inferno.createVNode)(1, 'hr', 'my-2'), (0, _inferno.createVNode)(1, 'p', null, (0, _inferno.createTextVNode)('It uses utility classes for typgraphy and spacing to space content out within the larger container.'), 2), (0, _inferno.createVNode)(1, 'p', 'lead', (0, _inferno.createComponentVNode)(2, _Button2.default, {
            'color': 'primary',
            children: 'Learn More'
          }), 2)]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Jumbotron>\n  <h1 className="display-3">Hello, world!</h1>\n  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>\n  <hr className="my-2" />\n  <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>\n  <p className="lead">\n    <Button color="primary">Learn More</Button>\n  </p>\n</Jumbotron>'
        })]
      })
    })]
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Jumbotron = __webpack_require__(78);

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

var _Button = __webpack_require__(5);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Layout',
    'className': 'ExampleLayout',
    children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
      children: (0, _inferno.createVNode)(1, 'p', null, (0, _inferno.createTextVNode)('Organise content in rows and columns.'), 2)
    }), (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: [(0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Standard alert box'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Container2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _Row2.default, {
            children: (0, _inferno.createComponentVNode)(2, _Col2.default, {
              children: '.col'
            })
          }), (0, _inferno.createComponentVNode)(2, _Row2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Col2.default, {
              children: '.col'
            }), (0, _inferno.createComponentVNode)(2, _Col2.default, {
              children: '.col'
            }), (0, _inferno.createComponentVNode)(2, _Col2.default, {
              children: '.col'
            }), (0, _inferno.createComponentVNode)(2, _Col2.default, {
              children: '.col'
            })]
          }), (0, _inferno.createComponentVNode)(2, _Row2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Col2.default, {
              'xs': '3',
              children: '.col-3'
            }), (0, _inferno.createComponentVNode)(2, _Col2.default, {
              'xs': 'auto',
              children: '.col-auto - variable width content'
            }), (0, _inferno.createComponentVNode)(2, _Col2.default, {
              'xs': '3',
              children: '.col-3'
            })]
          }), (0, _inferno.createComponentVNode)(2, _Row2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Col2.default, {
              'xs': '6',
              children: '.col-6'
            }), (0, _inferno.createComponentVNode)(2, _Col2.default, {
              'xs': '6',
              children: '.col-6'
            })]
          }), (0, _inferno.createComponentVNode)(2, _Row2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Col2.default, {
              'xs': '6',
              'sm': '4',
              children: '.col-6 .col-sm-4'
            }), (0, _inferno.createComponentVNode)(2, _Col2.default, {
              'xs': '6',
              'sm': '4',
              children: '.col-6 .col-sm-4'
            }), (0, _inferno.createComponentVNode)(2, _Col2.default, {
              'sm': '4',
              children: '.col .col-sm-4'
            })]
          }), (0, _inferno.createComponentVNode)(2, _Row2.default, {
            children: (0, _inferno.createComponentVNode)(2, _Col2.default, {
              'sm': { size: 6, push: 2, pull: 2, offset: 1 },
              children: '.col .col-sm-6 .col-sm-push-2 .col-sm-pull-2 .col-sm-offset-2'
            })
          }), (0, _inferno.createComponentVNode)(2, _Row2.default, {
            children: (0, _inferno.createComponentVNode)(2, _Col2.default, {
              'sm': '12',
              'md': { size: 8, offset: 2 },
              children: '.col .col-sm-12 .col-md-6 .col-md-offset-3'
            })
          }), (0, _inferno.createComponentVNode)(2, _Row2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Col2.default, {
              'sm': { size: 'auto', offset: 1 },
              children: '.col .col-sm .col-sm-offset-1'
            }), (0, _inferno.createComponentVNode)(2, _Col2.default, {
              'sm': { size: 'auto', offset: 1 },
              children: '.col .col-sm .col-sm-offset-1'
            })]
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Container>\n  <Row>\n    <Col>.col</Col>\n  </Row>\n  <Row>\n    <Col>.col</Col>\n    <Col>.col</Col>\n    <Col>.col</Col>\n    <Col>.col</Col>\n  </Row>\n  <Row>\n    <Col xs="3">.col-3</Col>\n    <Col xs="auto">.col-auto - variable width content</Col>\n    <Col xs="3">.col-3</Col>\n  </Row>\n  <Row>\n    <Col xs="6">.col-6</Col>\n    <Col xs="6">.col-6</Col>\n  </Row>\n  <Row>\n    <Col xs="6" sm="4">.col-6 .col-sm-4</Col>\n    <Col xs="6" sm="4">.col-6 .col-sm-4</Col>\n    <Col sm="4">.col .col-sm-4</Col>\n  </Row>\n  <Row>\n    <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>.col .col-sm-6 .col-sm-push-2 .col-sm-pull-2 .col-sm-offset-2</Col>\n  </Row>\n  <Row>\n    <Col sm="12" md={{ size: 8, offset: 2 }}>.col .col-sm-12 .col-md-6 .col-md-offset-3</Col>\n  </Row>\n  <Row>\n    <Col sm={{ size: \'auto\', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>\n    <Col sm={{ size: \'auto\', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>\n  </Row>\n</Container>'
        })]
      })]
    })]
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Container = __webpack_require__(75);

var _Container2 = _interopRequireDefault(_Container);

var _Row = __webpack_require__(49);

var _Row2 = _interopRequireDefault(_Row);

var _Col = __webpack_require__(41);

var _Col2 = _interopRequireDefault(_Col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'List',
    children: (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: [(0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Standard List'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _ListGroup2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _ListGroupItem2.default, {
            children: 'Cras justo odio'
          }), (0, _inferno.createComponentVNode)(2, _ListGroupItem2.default, {
            children: 'Dapibus ac facilisis in'
          }), (0, _inferno.createComponentVNode)(2, _ListGroupItem2.default, {
            children: 'Morbi leo risus'
          }), (0, _inferno.createComponentVNode)(2, _ListGroupItem2.default, {
            children: 'Porta ac consectetur ac'
          }), (0, _inferno.createComponentVNode)(2, _ListGroupItem2.default, {
            children: 'Vestibulum at eros'
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<ListGroup>\n  <ListGroupItem>Cras justo odio</ListGroupItem>\n  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>\n  <ListGroupItem>Morbi leo risus</ListGroupItem>\n  <ListGroupItem>Porta ac consectetur ac</ListGroupItem>\n  <ListGroupItem>Vestibulum at eros</ListGroupItem>\n</ListGroup>'
        })]
      }), (0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('List With Badges'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _ListGroup2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _ListGroupItem2.default, {
            'className': 'justify-content-between',
            children: ['Cras justo odio ', (0, _inferno.createComponentVNode)(2, _Badge2.default, {
              'pill': true,
              children: '14'
            })]
          }), (0, _inferno.createComponentVNode)(2, _ListGroupItem2.default, {
            'className': 'justify-content-between',
            children: ['Dapibus ac facilisis in ', (0, _inferno.createComponentVNode)(2, _Badge2.default, {
              'pill': true,
              children: '2'
            })]
          }), (0, _inferno.createComponentVNode)(2, _ListGroupItem2.default, {
            'className': 'justify-content-between',
            children: ['Morbi leo risus ', (0, _inferno.createComponentVNode)(2, _Badge2.default, {
              'pill': true,
              children: '1'
            })]
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<ListGroup>\n  <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>\n  <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>\n  <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>\n</ListGroup>'
        })]
      }), (0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('List With Links and Buttons'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _ListGroup2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _ListGroupItem2.default, {
            'disabled': true,
            'tag': 'a',
            'href': '#',
            children: 'Cras justo odio'
          }), (0, _inferno.createComponentVNode)(2, _ListGroupItem2.default, {
            'tag': 'a',
            'href': '#',
            children: 'Dapibus ac facilisis in'
          }), (0, _inferno.createComponentVNode)(2, _ListGroupItem2.default, {
            'tag': 'a',
            'href': '#',
            'action': true,
            children: 'Morbi leo risus'
          }), (0, _inferno.createComponentVNode)(2, _ListGroupItem2.default, {
            'active': true,
            'tag': 'a',
            'href': '#',
            'action': true,
            children: 'Porta ac consectetur ac'
          }), (0, _inferno.createComponentVNode)(2, _ListGroupItem2.default, {
            'tag': 'button',
            'action': true,
            children: 'Vestibulum at eros'
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<ListGroup>\n  <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>\n  <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>\n  <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>\n  <ListGroupItem active tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>\n  <ListGroupItem tag="button" action>Vestibulum at eros</ListGroupItem>\n</ListGroup>'
        })]
      })]
    })
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _ListGroup = __webpack_require__(79);

var _ListGroup2 = _interopRequireDefault(_ListGroup);

var _ListGroupItem = __webpack_require__(80);

var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);

var _ListGroupItemHeading = __webpack_require__(81);

var _ListGroupItemHeading2 = _interopRequireDefault(_ListGroupItemHeading);

var _ListGroupItemText = __webpack_require__(82);

var _ListGroupItemText2 = _interopRequireDefault(_ListGroupItemText);

var _Badge = __webpack_require__(39);

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Pagination',
    children: (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: [(0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Pagination2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'previous': true,
              'href': '#'
            })
          }), (0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'href': '#',
              children: '1'
            })
          }), (0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'href': '#',
              children: '2'
            })
          }), (0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'href': '#',
              children: '3'
            })
          }), (0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'href': '#',
              children: '4'
            })
          }), (0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'href': '#',
              children: '5'
            })
          }), (0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'next': true,
              'href': '#'
            })
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Pagination>\n  <PaginationItem>\n    <PaginationLink previous href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      1\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      2\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      3\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      4\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      5\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink next href="#" />\n  </PaginationItem>\n</Pagination>'
        })]
      }), (0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Disabled and Active State'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Pagination2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            'disabled': true,
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'previous': true,
              'href': '#'
            })
          }), (0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            'active': true,
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'href': '#',
              children: '1'
            })
          }), (0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'href': '#',
              children: '2'
            })
          }), (0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'href': '#',
              children: '3'
            })
          }), (0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'href': '#',
              children: '4'
            })
          }), (0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'href': '#',
              children: '5'
            })
          }), (0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'next': true,
              'href': '#'
            })
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Pagination>\n  <PaginationItem disabled>\n    <PaginationLink previous href="#" />\n  </PaginationItem>\n  <PaginationItem active>\n    <PaginationLink href="#">\n      1\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      2\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      3\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      4\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      5\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink next href="#" />\n  </PaginationItem>\n</Pagination>'
        })]
      }), (0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Sizing'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Pagination2.default, {
          'size': 'lg',
          children: [(0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'previous': true,
              'href': '#'
            })
          }), (0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'href': '#',
              children: '1'
            })
          }), (0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'href': '#',
              children: '2'
            })
          }), (0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'href': '#',
              children: '3'
            })
          }), (0, _inferno.createComponentVNode)(2, _PaginationItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _PaginationLink2.default, {
              'next': true,
              'href': '#'
            })
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Pagination size="lg">\n  <PaginationItem>\n    <PaginationLink previous href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      1\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      2\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      3\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink next href="#" />\n  </PaginationItem>\n</Pagination>'
        })]
      })]
    })
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Pagination = __webpack_require__(83);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _PaginationItem = __webpack_require__(84);

var _PaginationItem2 = _interopRequireDefault(_PaginationItem);

var _PaginationLink = __webpack_require__(85);

var _PaginationLink2 = _interopRequireDefault(_PaginationLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Popovers',
    children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
      children: (0, _inferno.createVNode)(1, 'p', null, (0, _inferno.createTextVNode)('Popovers are built with Popper.js.'), 2)
    }), (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: [(0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: (0, _inferno.createComponentVNode)(2, ExamplePopover)
      }), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
          children: 'This is the code to create a button with a popover:'
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: 'import { Manager, Target, Popper, Arrow, Travel } from \'inferno-popper\'\n\nclass ExamplePopover extends Component {\n  constructor(props) {\n    super(props);\n\n    this.toggle = this.toggle.bind(this);\n    this.state = {\n      popoverOpen: false\n    };\n  }\n\n  toggle() {\n    this.setState({\n      popoverOpen: !this.state.popoverOpen\n    });\n  }\n\n  render() {\n    return (\n      <Manager>\n        <Target>\n          <Button id="Popover1" onClick={this.toggle}>\n            Launch Popover\n          </Button>\n        </Target>\n        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>\n          <PopoverHeader>Popover Title</PopoverHeader>\n          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>\n        </Popover>\n      </Manager>\n    );\n  }\n}'
        })]
      })]
    })]
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Button = __webpack_require__(5);

var _Button2 = _interopRequireDefault(_Button);

var _Popover = __webpack_require__(86);

var _Popover2 = _interopRequireDefault(_Popover);

var _PopoverHeader = __webpack_require__(88);

var _PopoverHeader2 = _interopRequireDefault(_PopoverHeader);

var _PopoverBody = __webpack_require__(87);

var _PopoverBody2 = _interopRequireDefault(_PopoverBody);

var _infernoPopper = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExamplePopover = function (_Component) {
  _inherits(ExamplePopover, _Component);

  function ExamplePopover(props) {
    _classCallCheck(this, ExamplePopover);

    var _this = _possibleConstructorReturn(this, (ExamplePopover.__proto__ || Object.getPrototypeOf(ExamplePopover)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      popoverOpen: false
    };
    return _this;
  }

  _createClass(ExamplePopover, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        popoverOpen: !this.state.popoverOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _inferno.createComponentVNode)(2, _infernoPopper.Manager, {
        children: [(0, _inferno.createComponentVNode)(2, _infernoPopper.Target, {
          children: (0, _inferno.createComponentVNode)(2, _Button2.default, {
            'id': 'Popover1',
            'onClick': this.toggle,
            children: 'Launch Popover'
          })
        }), (0, _inferno.createComponentVNode)(2, _Popover2.default, {
          'placement': 'bottom',
          'isOpen': this.state.popoverOpen,
          'target': 'Popover1',
          'toggle': this.toggle,
          children: [(0, _inferno.createComponentVNode)(2, _PopoverHeader2.default, {
            children: 'Popover Title'
          }), (0, _inferno.createComponentVNode)(2, _PopoverBody2.default, {
            children: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
          })]
        })]
      });
    }
  }]);

  return ExamplePopover;
}(_inferno.Component);

module.exports = exports['default'];

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Progress Bars',
    children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
      children: (0, _inferno.createVNode)(1, 'p', null, (0, _inferno.createTextVNode)('Use progress bars to give feedback on a process completing.'), 2)
    }), (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createVNode)(1, 'div', 'text-center', (0, _inferno.createTextVNode)('0%'), 2), (0, _inferno.createComponentVNode)(2, _Progress2.default), (0, _inferno.createVNode)(1, 'div', 'text-center', (0, _inferno.createTextVNode)('25%'), 2), (0, _inferno.createComponentVNode)(2, _Progress2.default, {
          'value': '25'
        }), (0, _inferno.createVNode)(1, 'div', 'text-center', (0, _inferno.createTextVNode)('50%'), 2), (0, _inferno.createComponentVNode)(2, _Progress2.default, {
          'value': 50
        }), (0, _inferno.createVNode)(1, 'div', 'text-center', (0, _inferno.createTextVNode)('75%'), 2), (0, _inferno.createComponentVNode)(2, _Progress2.default, {
          'value': 75
        }), (0, _inferno.createVNode)(1, 'div', 'text-center', (0, _inferno.createTextVNode)('100%'), 2), (0, _inferno.createComponentVNode)(2, _Progress2.default, {
          'value': '100'
        }), (0, _inferno.createVNode)(1, 'div', 'text-center', (0, _inferno.createTextVNode)('Multiple bars'), 2), (0, _inferno.createComponentVNode)(2, _Progress2.default, {
          'multi': true,
          children: [(0, _inferno.createComponentVNode)(2, _Progress2.default, {
            'bar': true,
            'value': '15'
          }), (0, _inferno.createComponentVNode)(2, _Progress2.default, {
            'bar': true,
            'color': 'success',
            'value': '30'
          }), (0, _inferno.createComponentVNode)(2, _Progress2.default, {
            'bar': true,
            'color': 'info',
            'value': '25'
          }), (0, _inferno.createComponentVNode)(2, _Progress2.default, {
            'bar': true,
            'color': 'warning',
            'value': '20'
          }), (0, _inferno.createComponentVNode)(2, _Progress2.default, {
            'bar': true,
            'color': 'danger',
            'value': '5'
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<div className="text-center">0%</div>\n<Progress />\n<div className="text-center">25%</div>\n<Progress value="25" />\n<div className="text-center">50%</div>\n<Progress value={50} />\n<div className="text-center">75%</div>\n<Progress value={75} />\n<div className="text-center">100%</div>\n<Progress value="100" />\n<div className="text-center">Multiple bars</div>\n<Progress multi>\n  <Progress bar value="15" />\n  <Progress bar color="success" value="30" />\n  <Progress bar color="info" value="25" />\n  <Progress bar color="warning" value="20" />\n  <Progress bar color="danger" value="5" />\n</Progress>'
        })]
      })
    })]
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Progress = __webpack_require__(91);

var _Progress2 = _interopRequireDefault(_Progress);

var _Button = __webpack_require__(5);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Tabs',
    children: (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: [(0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: (0, _inferno.createComponentVNode)(2, TabExample)
      }), (0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Example Code:'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: 'class TabExample extends Component {\n  constructor(props) {\n    super(props);\n\n    this.toggle = this.toggle.bind(this);\n    this.state = {\n      activeTab: \'1\'\n    };\n  }\n\n  toggle(tab) {\n    if (this.state.activeTab !== tab) {\n      this.setState({\n        activeTab: tab\n      });\n    }\n  }\n  render() {\n    return (\n      <div>\n        <Nav tabs>\n          <NavItem>\n            <NavLink\n              className={classnames({ active: this.state.activeTab === \'1\' })}\n              onClick={() => { this.toggle(\'1\'); }}\n            >\n              Tab1\n            </NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink\n              className={classnames({ active: this.state.activeTab === \'2\' })}\n              onClick={() => { this.toggle(\'2\'); }}\n            >\n              Moar Tabs\n            </NavLink>\n          </NavItem>\n        </Nav>\n        <TabContent className="ExampleTab" fade activeTab={this.state.activeTab}>\n          <TabPane tabId="1">\n            <Row>\n              <Col sm="12">\n                <h4>Tab 1 Contents</h4>\n              </Col>\n            </Row>\n          </TabPane>\n          <TabPane tabId="2">\n            <Row>\n              <Col sm="6">\n                <Card block>\n                  <CardTitle>Special Title Treatment</CardTitle>\n                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>\n                  <Button>Go somewhere</Button>\n                </Card>\n              </Col>\n              <Col sm="6">\n                <Card block>\n                  <CardTitle>Special Title Treatment</CardTitle>\n                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>\n                  <Button>Go somewhere</Button>\n                </Card>\n              </Col>\n            </Row>\n          </TabPane>\n        </TabContent>\n      </div>\n    );\n  }\n}'
        })
      })]
    })
  });
};

var _inferno = __webpack_require__(0);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _components = __webpack_require__(4);

var _Nav = __webpack_require__(14);

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = __webpack_require__(15);

var _NavItem2 = _interopRequireDefault(_NavItem);

var _NavLink = __webpack_require__(16);

var _NavLink2 = _interopRequireDefault(_NavLink);

var _TabContent = __webpack_require__(92);

var _TabContent2 = _interopRequireDefault(_TabContent);

var _TabPane = __webpack_require__(93);

var _TabPane2 = _interopRequireDefault(_TabPane);

var _Row = __webpack_require__(49);

var _Row2 = _interopRequireDefault(_Row);

var _Col = __webpack_require__(41);

var _Col2 = _interopRequireDefault(_Col);

var _Card = __webpack_require__(20);

var _Card2 = _interopRequireDefault(_Card);

var _CardTitle = __webpack_require__(27);

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardText = __webpack_require__(26);

var _CardText2 = _interopRequireDefault(_CardText);

var _Button = __webpack_require__(5);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabExample = function (_Component) {
  _inherits(TabExample, _Component);

  function TabExample(props) {
    _classCallCheck(this, TabExample);

    var _this = _possibleConstructorReturn(this, (TabExample.__proto__ || Object.getPrototypeOf(TabExample)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      activeTab: '1'
    };
    return _this;
  }

  _createClass(TabExample, [{
    key: 'toggle',
    value: function toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return (0, _inferno.createVNode)(1, 'div', null, [(0, _inferno.createComponentVNode)(2, _Nav2.default, {
        'tabs': true,
        children: [(0, _inferno.createComponentVNode)(2, _NavItem2.default, {
          children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'className': (0, _classnames2.default)({ active: this.state.activeTab === '1' }),
            'onClick': function onClick() {
              _this2.toggle('1');
            },
            children: 'Tab1'
          })
        }), (0, _inferno.createComponentVNode)(2, _NavItem2.default, {
          children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'className': (0, _classnames2.default)({ active: this.state.activeTab === '2' }),
            'onClick': function onClick() {
              _this2.toggle('2');
            },
            children: 'Moar Tabs'
          })
        })]
      }), (0, _inferno.createComponentVNode)(2, _TabContent2.default, {
        'className': 'ExampleTab',
        'fade': true,
        'activeTab': this.state.activeTab,
        children: [(0, _inferno.createComponentVNode)(2, _TabPane2.default, {
          'tabId': '1',
          children: (0, _inferno.createComponentVNode)(2, _Row2.default, {
            children: (0, _inferno.createComponentVNode)(2, _Col2.default, {
              'sm': '12',
              children: (0, _inferno.createVNode)(1, 'h4', null, (0, _inferno.createTextVNode)('Tab 1 Contents'), 2)
            })
          })
        }), (0, _inferno.createComponentVNode)(2, _TabPane2.default, {
          'tabId': '2',
          children: (0, _inferno.createComponentVNode)(2, _Row2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Col2.default, {
              'sm': '6',
              children: (0, _inferno.createComponentVNode)(2, _Card2.default, {
                'block': true,
                children: [(0, _inferno.createComponentVNode)(2, _CardTitle2.default, {
                  children: 'Special Title Treatment'
                }), (0, _inferno.createComponentVNode)(2, _CardText2.default, {
                  children: 'With supporting text below as a natural lead-in to additional content.'
                }), (0, _inferno.createComponentVNode)(2, _Button2.default, {
                  children: 'Go somewhere'
                })]
              })
            }), (0, _inferno.createComponentVNode)(2, _Col2.default, {
              'sm': '6',
              children: (0, _inferno.createComponentVNode)(2, _Card2.default, {
                'block': true,
                children: [(0, _inferno.createComponentVNode)(2, _CardTitle2.default, {
                  children: 'Special Title Treatment'
                }), (0, _inferno.createComponentVNode)(2, _CardText2.default, {
                  children: 'With supporting text below as a natural lead-in to additional content.'
                }), (0, _inferno.createComponentVNode)(2, _Button2.default, {
                  children: 'Go somewhere'
                })]
              })
            })]
          })
        })]
      })], 4);
    }
  }]);

  return TabExample;
}(_inferno.Component);

module.exports = exports['default'];

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Card With Header and Footer',
    children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
      children: (0, _inferno.createVNode)(1, 'p', null, (0, _inferno.createTextVNode)('Use a card to display content in an engaging and concise manner.'), 2)
    }), (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Card2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _CardHeader2.default, {
            children: 'The Header'
          }), (0, _inferno.createComponentVNode)(2, _CardBody2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _CardTitle2.default, {
              children: 'Special Title Treatment'
            }), (0, _inferno.createComponentVNode)(2, _CardText2.default, {
              children: 'With supporting text below as a natural lead-in to additional content.'
            })]
          }), (0, _inferno.createComponentVNode)(2, _CardFooter2.default, {
            'className': 'text-right',
            children: (0, _inferno.createComponentVNode)(2, _Button2.default, {
              'color': 'link',
              children: 'Go now...'
            })
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Card>\n  <CardHeader>The Header</CardHeader>\n  <CardBody>\n    <CardTitle>Special Title Treatment</CardTitle>\n    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>\n  </CardBody>\n  <CardFooter className="text-right"><Button color="link">Go now...</Button></CardFooter>\n</Card>'
        })]
      })
    })]
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Card = __webpack_require__(20);

var _Card2 = _interopRequireDefault(_Card);

var _CardBody = __webpack_require__(25);

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardHeader = __webpack_require__(70);

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardFooter = __webpack_require__(69);

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _CardText = __webpack_require__(26);

var _CardText2 = _interopRequireDefault(_CardText);

var _CardTitle = __webpack_require__(27);

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _Button = __webpack_require__(5);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Basic Card',
    children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
      children: (0, _inferno.createVNode)(1, 'p', null, (0, _inferno.createTextVNode)('Use a card to display content in an engaging and concise manner.'), 2)
    }), (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: [(0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Card2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _CardImg2.default, {
            'top': true,
            'width': '100%',
            'src': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
            'alt': 'Card image cap'
          }), (0, _inferno.createComponentVNode)(2, _CardBody2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _CardTitle2.default, {
              children: 'Card title'
            }), (0, _inferno.createComponentVNode)(2, _CardText2.default, {
              children: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
            }), (0, _inferno.createComponentVNode)(2, _Button2.default, {
              children: 'Button'
            })]
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Card>\n  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />\n  <CardBody>\n    <CardTitle>Card title</CardTitle>\n    <CardText>Some quick example text to build on the card title and make up the bulk of the card\'s content.</CardText>\n    <Button>Button</Button>\n  </CardBody>\n</Card>'
        })]
      }), (0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Card with different design'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Card2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _CardBody2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _CardTitle2.default, {
              children: 'Card title'
            }), (0, _inferno.createComponentVNode)(2, _CardSubtitle2.default, {
              children: 'Card subtitle goes here'
            })]
          }), (0, _inferno.createVNode)(1, 'img', null, null, 1, {
            'width': '100%',
            'src': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
            'alt': 'Card image cap'
          }), (0, _inferno.createComponentVNode)(2, _CardBody2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _CardText2.default, {
              children: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
            }), (0, _inferno.createComponentVNode)(2, _CardLink2.default, {
              'href': '#',
              children: 'Card Link'
            }), (0, _inferno.createComponentVNode)(2, _CardLink2.default, {
              'href': '#',
              children: 'Another Link'
            })]
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Card>\n  <CardBody>\n    <CardTitle>Card title</CardTitle>\n    <CardSubtitle>Card subtitle goes here</CardSubtitle>\n  </CardBody>\n  <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />\n  <CardBody>\n    <CardText>Some quick example text to build on the card title and make up the bulk of the card\'s content.</CardText>\n    <CardLink href="#">Card Link</CardLink>\n    <CardLink href="#">Another Link</CardLink>\n  </CardBody>\n</Card>'
        })]
      })]
    })]
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Card = __webpack_require__(20);

var _Card2 = _interopRequireDefault(_Card);

var _CardImg = __webpack_require__(71);

var _CardImg2 = _interopRequireDefault(_CardImg);

var _CardBody = __webpack_require__(25);

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardLink = __webpack_require__(72);

var _CardLink2 = _interopRequireDefault(_CardLink);

var _CardSubtitle = __webpack_require__(73);

var _CardSubtitle2 = _interopRequireDefault(_CardSubtitle);

var _CardText = __webpack_require__(26);

var _CardText2 = _interopRequireDefault(_CardText);

var _CardTitle = __webpack_require__(27);

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _Button = __webpack_require__(5);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Basic Input Elements',
    children: (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Form2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _FormGroup2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Label2.default, {
              children: 'Title:'
            }), (0, _inferno.createComponentVNode)(2, _Input2.default, {
              'type': 'text',
              'name': 'title'
            })]
          }), (0, _inferno.createComponentVNode)(2, _FormGroup2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Label2.default, {
              children: 'Age:'
            }), (0, _inferno.createComponentVNode)(2, _Input2.default, {
              'type': 'number',
              'name': 'age'
            })]
          }), (0, _inferno.createComponentVNode)(2, _FormGroup2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Label2.default, {
              children: 'Filter:'
            }), (0, _inferno.createComponentVNode)(2, _Input2.default, {
              'type': 'text',
              'name': 'filter',
              'placeholder': 'Type here...'
            })]
          }), (0, _inferno.createComponentVNode)(2, _FormGroup2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Label2.default, {
              children: 'Password:'
            }), (0, _inferno.createComponentVNode)(2, _Input2.default, {
              'type': 'password',
              'name': 'password',
              'placeholder': 'Choose wisely...'
            })]
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Form>\n  <FormGroup>\n    <Label>Title:</Label>\n    <Input type="text" name="title" />\n  </FormGroup>\n  <FormGroup>\n    <Label>Age:</Label>\n    <Input type="number" name="age" />\n  </FormGroup>\n  <FormGroup>\n    <Label>Filter:</Label>\n    <Input type="text" name="filter" placeholder="Type here..." />\n  </FormGroup>\n  <FormGroup>\n    <Label>Password:</Label>\n    <Input type="password" name="password" placeholder="Choose wisely..." />\n  </FormGroup>\n</Form>'
        })]
      })
    })
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Form = __webpack_require__(28);

var _Form2 = _interopRequireDefault(_Form);

var _FormGroup = __webpack_require__(29);

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Label = __webpack_require__(31);

var _Label2 = _interopRequireDefault(_Label);

var _Input = __webpack_require__(30);

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Input With Addon',
    children: (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Form2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _FormGroup2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Label2.default, {
              children: 'Email:'
            }), (0, _inferno.createComponentVNode)(2, _InputGroup2.default, {
              children: [(0, _inferno.createComponentVNode)(2, _InputGroupAddon2.default, {
                'addonType': 'prepend',
                children: '@'
              }), (0, _inferno.createComponentVNode)(2, _Input2.default, {
                'type': 'email',
                'name': 'email',
                'placeholder': 'example@email.com'
              })]
            })]
          }), (0, _inferno.createComponentVNode)(2, _FormGroup2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Label2.default, {
              children: 'Price:'
            }), (0, _inferno.createComponentVNode)(2, _InputGroup2.default, {
              children: [(0, _inferno.createComponentVNode)(2, _Input2.default, {
                'type': 'number',
                'name': 'Age'
              }), (0, _inferno.createComponentVNode)(2, _InputGroupAddon2.default, {
                'addonType': 'append',
                children: 'SEK'
              })]
            })]
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Form>\n  <FormGroup>\n    <Label>Email:</Label>\n    <InputGroup>\n      <InputGroupAddon addonType="prepend">@</InputGroupAddon>\n      <Input type="email" name="email" placeholder="example@email.com" />\n    </InputGroup>\n  </FormGroup>\n  <FormGroup>\n    <Label>Price:</Label>\n    <InputGroup>\n      <Input type="number" name="Age" />\n      <InputGroupAddon addonType="append">SEK</InputGroupAddon>\n    </InputGroup>\n  </FormGroup>\n</Form>'
        })]
      })
    })
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Form = __webpack_require__(28);

var _Form2 = _interopRequireDefault(_Form);

var _FormGroup = __webpack_require__(29);

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Input = __webpack_require__(30);

var _Input2 = _interopRequireDefault(_Input);

var _InputGroup = __webpack_require__(42);

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _InputGroupAddon = __webpack_require__(43);

var _InputGroupAddon2 = _interopRequireDefault(_InputGroupAddon);

var _Label = __webpack_require__(31);

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Input With Button',
    children: (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Form2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _FormGroup2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Label2.default, {
              children: 'Email:'
            }), (0, _inferno.createComponentVNode)(2, _InputGroup2.default, {
              children: [(0, _inferno.createComponentVNode)(2, _InputGroupAddon2.default, {
                'addonType': 'prepend',
                children: (0, _inferno.createComponentVNode)(2, _Button2.default, {
                  children: 'I\'m a button'
                })
              }), (0, _inferno.createComponentVNode)(2, _Input2.default, {
                'type': 'email',
                'name': 'email',
                'placeholder': 'example@email.com'
              })]
            })]
          }), (0, _inferno.createComponentVNode)(2, _FormGroup2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Label2.default, {
              children: 'Price:'
            }), (0, _inferno.createComponentVNode)(2, _InputGroup2.default, {
              children: [(0, _inferno.createComponentVNode)(2, _InputGroupAddon2.default, {
                'addonType': 'prepend',
                children: (0, _inferno.createComponentVNode)(2, _Button2.default, {
                  children: 'Button life'
                })
              }), (0, _inferno.createComponentVNode)(2, _Input2.default, {
                'type': 'number',
                'name': 'Age'
              }), (0, _inferno.createComponentVNode)(2, SampleDropdownAddonButton, {
                'addonType': 'append',
                'color': 'primary',
                'split': true
              })]
            })]
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Form>\n  <FormGroup>\n    <Label>Email:</Label>\n    <InputGroup>\n      <InputGroupAddon addonType="prepend"><Button>I\'m a button</Button></InputGroupAddon>\n      <Input type="email" name="email" placeholder="example@email.com" />\n    </InputGroup>\n  </FormGroup>\n  <FormGroup>\n    <Label>Price:</Label>\n    <InputGroup>\n      <InputGroupAddon addonType="prepend"><Button>Button life</Button></InputGroupAddon>\n      <Input type="number" name="Age" />\n      <SampleDropdownAddonButton addonType="append" color="primary" split/>\n    </InputGroup>\n  </FormGroup>\n</Form>'
        }), (0, _inferno.createComponentVNode)(2, _components.Narrative, {
          children: 'This is what the SampleDropdownAddonButton looks like:'
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: 'class SampleDropdownAddonButton extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      isOpen: false\n    }\n\n    this.doToggle = this.doToggle.bind(this)\n  }\n\n  doToggle() {\n    this.setState({\n      isOpen: !this.state.isOpen\n    })\n  }\n\n  render({ children, addonType, ...props }) {\n    return (\n      <InputGroupButtonDropdown addonType={addonType} isOpen={this.state.isOpen} toggle={this.doToggle}>\n        <DropdownToggle {...props}>{children}</DropdownToggle>\n        <DropdownMenu>\n          <DropdownItem>Item 1</DropdownItem>\n          <DropdownItem>Item 2</DropdownItem>\n          <DropdownItem>Item 3</DropdownItem>\n        </DropdownMenu>\n      </InputGroupButtonDropdown>\n    )\n  }\n}'
        })]
      })
    })
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Form = __webpack_require__(28);

var _Form2 = _interopRequireDefault(_Form);

var _FormGroup = __webpack_require__(29);

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Input = __webpack_require__(30);

var _Input2 = _interopRequireDefault(_Input);

var _InputGroup = __webpack_require__(42);

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _InputGroupAddon = __webpack_require__(43);

var _InputGroupAddon2 = _interopRequireDefault(_InputGroupAddon);

var _InputGroupButtonDropdown = __webpack_require__(76);

var _InputGroupButtonDropdown2 = _interopRequireDefault(_InputGroupButtonDropdown);

var _Label = __webpack_require__(31);

var _Label2 = _interopRequireDefault(_Label);

var _Button = __webpack_require__(5);

var _Button2 = _interopRequireDefault(_Button);

var _ButtonDropdown = __webpack_require__(40);

var _ButtonDropdown2 = _interopRequireDefault(_ButtonDropdown);

var _DropdownToggle = __webpack_require__(13);

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _DropdownMenu = __webpack_require__(12);

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownItem = __webpack_require__(11);

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SampleDropdownAddonButton = function (_Component) {
  _inherits(SampleDropdownAddonButton, _Component);

  function SampleDropdownAddonButton(props) {
    _classCallCheck(this, SampleDropdownAddonButton);

    var _this = _possibleConstructorReturn(this, (SampleDropdownAddonButton.__proto__ || Object.getPrototypeOf(SampleDropdownAddonButton)).call(this, props));

    _this.state = {
      isOpen: false
    };

    _this.doToggle = _this.doToggle.bind(_this);
    return _this;
  }

  _createClass(SampleDropdownAddonButton, [{
    key: 'doToggle',
    value: function doToggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: 'render',
    value: function render(_ref) {
      var children = _ref.children,
          addonType = _ref.addonType,
          props = _objectWithoutProperties(_ref, ['children', 'addonType']);

      return (0, _inferno.createComponentVNode)(2, _InputGroupButtonDropdown2.default, {
        'addonType': addonType,
        'isOpen': this.state.isOpen,
        'toggle': this.doToggle,
        children: [(0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, _DropdownToggle2.default, _extends({}, props, {
          children: children
        }))), (0, _inferno.createComponentVNode)(2, _DropdownMenu2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
            children: 'Item 1'
          }), (0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
            children: 'Item 2'
          }), (0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
            children: 'Item 3'
          })]
        })]
      });
    }
  }]);

  return SampleDropdownAddonButton;
}(_inferno.Component);

module.exports = exports['default'];

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Customise Animations',
    children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
      children: (0, _inferno.createVNode)(1, 'p', null, [(0, _inferno.createTextVNode)('Animations are implemented using '), (0, _inferno.createVNode)(1, 'a', null, (0, _inferno.createTextVNode)('inferno-animation'), 2, {
        'href': 'https://github.com/jhsware/inferno-animation'
      }), (0, _inferno.createTextVNode)('. To customise animations you pass the props '), (0, _inferno.createVNode)(1, 'b', null, (0, _inferno.createTextVNode)('animationPrefix'), 2), (0, _inferno.createTextVNode)(' and '), (0, _inferno.createVNode)(1, 'b', null, (0, _inferno.createTextVNode)('backgroundAnimationPrefix'), 2), (0, _inferno.createTextVNode)(' and follow the css-class naming rules in '), (0, _inferno.createVNode)(1, 'b', null, (0, _inferno.createTextVNode)('inferno-animation'), 2), (0, _inferno.createTextVNode)('.')], 4)
    }), (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Modal animationPrefix="MyModalDialogAnimation" backgroundAnimationPrefix="MyModalBackgroundAnimation">\n    /* ...modal content... */\n</Modal>'
        })
      })
    })]
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Button = __webpack_require__(5);

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = __webpack_require__(24);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Modal = __webpack_require__(44);

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalHeader = __webpack_require__(47);

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalBody = __webpack_require__(45);

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalFooter = __webpack_require__(46);

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Basic Modal',
    children: [(0, _inferno.createComponentVNode)(2, _components.Narrative, {
      children: (0, _inferno.createVNode)(1, 'p', null, (0, _inferno.createTextVNode)('Use modals to present essential information that takes over the entire window.'), 2)
    }), (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: [(0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _ButtonGroup2.default, {
          children: [(0, _inferno.createComponentVNode)(2, ModalExample, {
            'buttonLabel': 'Show modal'
          }), (0, _inferno.createComponentVNode)(2, ModalExample, {
            'buttonLabel': 'Show modal without fade',
            'fade': false
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<ButtonGroup>  \n  <ModalExample buttonLabel="Show modal" />\n  <ModalExample buttonLabel="Show modal (no fade)" fade={false} />\n</ButtonGroup>'
        })]
      }), (0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Implementation of <ModalExample> component:'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: 'class ModalExample extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      modal: false\n    };\n\n    this.toggle = this.toggle.bind(this);\n  }\n\n  toggle() {\n    this.setState({\n      modal: !this.state.modal\n    });\n  }\n\n  render() {\n    const fadeModal = (props.hasOwnProperty(\'fade\') ? this.props.fade : true)\n    return (\n      <Button onClick={this.toggle}>{this.props.buttonLabel}\n        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} fade={fadeModal}>\n          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>\n          <ModalBody>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </ModalBody>\n          <ModalFooter>\n            <Button color="primary" onClick={this.toggle}>Do Something</Button>{\' \'}\n            <Button color="secondary" onClick={this.toggle}>Cancel</Button>\n          </ModalFooter>\n        </Modal>\n      </Button>\n    );\n  }\n}'
        })
      })]
    })]
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Button = __webpack_require__(5);

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = __webpack_require__(24);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Modal = __webpack_require__(44);

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalHeader = __webpack_require__(47);

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalBody = __webpack_require__(45);

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalFooter = __webpack_require__(46);

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalExample = function (_Component) {
  _inherits(ModalExample, _Component);

  function ModalExample(props) {
    _classCallCheck(this, ModalExample);

    var _this = _possibleConstructorReturn(this, (ModalExample.__proto__ || Object.getPrototypeOf(ModalExample)).call(this, props));

    _this.state = {
      modal: false
    };

    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  _createClass(ModalExample, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var fadeModal = this.props.hasOwnProperty('fade') ? this.props.fade : true;
      return (0, _inferno.createComponentVNode)(2, _Button2.default, {
        'onClick': this.toggle,
        children: [this.props.buttonLabel, (0, _inferno.createComponentVNode)(2, _Modal2.default, {
          'isOpen': this.state.modal,
          'toggle': this.toggle,
          'className': this.props.className,
          'fade': fadeModal,
          children: [(0, _inferno.createComponentVNode)(2, _ModalHeader2.default, {
            'toggle': this.toggle,
            children: 'Modal title'
          }), (0, _inferno.createComponentVNode)(2, _ModalBody2.default, {
            children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }), (0, _inferno.createComponentVNode)(2, _ModalFooter2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _Button2.default, {
              'color': 'primary',
              'onClick': this.toggle,
              children: 'Do Something'
            }), ' ', (0, _inferno.createComponentVNode)(2, _Button2.default, {
              'color': 'secondary',
              'onClick': this.toggle,
              children: 'Cancel'
            })]
          })]
        })]
      });
    }
  }]);

  return ModalExample;
}(_inferno.Component);

module.exports = exports['default'];

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Horizontal',
    children: (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: [(0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('List Based NavBar'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Nav2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _NavItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
              'href': '#',
              children: 'Link'
            })
          }), (0, _inferno.createComponentVNode)(2, _NavItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
              'href': '#',
              children: 'Link'
            })
          }), (0, _inferno.createComponentVNode)(2, _NavItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
              'href': '#',
              children: 'Another Link'
            })
          }), (0, _inferno.createComponentVNode)(2, _NavItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
              'disabled': true,
              'href': '#',
              children: 'Disabled Link'
            })
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Nav>\n  <NavItem>\n    <NavLink href="#">Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink href="#">Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink href="#">Another Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink disabled href="#">Disabled Link</NavLink>\n  </NavItem>\n</Nav>'
        })]
      }), (0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Link Based NavBar'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Nav2.default, {
          children: [(0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'href': '#',
            children: 'Link'
          }), ' ', (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'href': '#',
            children: 'Link'
          }), ' ', (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'href': '#',
            children: 'Another Link'
          }), ' ', (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'disabled': true,
            'href': '#',
            children: 'Disabled Link'
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Nav>\n  <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>\n</Nav>'
        })]
      })]
    })
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Nav = __webpack_require__(14);

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = __webpack_require__(15);

var _NavItem2 = _interopRequireDefault(_NavItem);

var _NavLink = __webpack_require__(16);

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Pills',
    children: (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, TabbedNavbar), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: 'class TabbedNavbar extends Component {\n  constructor(props) {\n    super(props)\n\n    this.state = {\n      dropdownOpen: false\n    }\n\n    this.doToggle = this.doToggle.bind(this)\n  }\n\n  doToggle() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen\n    })\n  }\n\n  render() {\n    return (\n      <Nav pills>\n        <NavItem>\n          <NavLink href="#" active>Link</NavLink>\n        </NavItem>\n        <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.doToggle}>\n          <DropdownToggle nav caret>\n            Dropdown\n          </DropdownToggle>\n          <DropdownMenu>\n            <DropdownItem header>Header</DropdownItem>\n            <DropdownItem disabled>Action</DropdownItem>\n            <DropdownItem>Another Action</DropdownItem>\n            <DropdownItem divider />\n            <DropdownItem>Another Action</DropdownItem>\n          </DropdownMenu>\n        </NavDropdown>\n        <NavItem>\n          <NavLink href="#">Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href="#">Another Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink disabled href="#">Disabled Link</NavLink>\n        </NavItem>\n      </Nav>\n    )\n  }\n}'
        })]
      })
    })
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Nav = __webpack_require__(14);

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = __webpack_require__(15);

var _NavItem2 = _interopRequireDefault(_NavItem);

var _NavLink = __webpack_require__(16);

var _NavLink2 = _interopRequireDefault(_NavLink);

var _NavDropdown = __webpack_require__(48);

var _NavDropdown2 = _interopRequireDefault(_NavDropdown);

var _Dropdown = __webpack_require__(8);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DropdownMenu = __webpack_require__(12);

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownToggle = __webpack_require__(13);

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _DropdownItem = __webpack_require__(11);

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabbedNavbar = function (_Component) {
  _inherits(TabbedNavbar, _Component);

  function TabbedNavbar(props) {
    _classCallCheck(this, TabbedNavbar);

    var _this = _possibleConstructorReturn(this, (TabbedNavbar.__proto__ || Object.getPrototypeOf(TabbedNavbar)).call(this, props));

    _this.state = {
      dropdownOpen: false
    };

    _this.doToggle = _this.doToggle.bind(_this);
    return _this;
  }

  _createClass(TabbedNavbar, [{
    key: 'doToggle',
    value: function doToggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _inferno.createComponentVNode)(2, _Nav2.default, {
        'pills': true,
        children: [(0, _inferno.createComponentVNode)(2, _NavItem2.default, {
          children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'href': '#',
            'active': true,
            children: 'Link'
          })
        }), (0, _inferno.createComponentVNode)(2, _NavDropdown2.default, {
          'isOpen': this.state.dropdownOpen,
          'toggle': this.doToggle,
          children: [(0, _inferno.createComponentVNode)(2, _DropdownToggle2.default, {
            'nav': true,
            'caret': true,
            children: 'Dropdown'
          }), (0, _inferno.createComponentVNode)(2, _DropdownMenu2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
              'header': true,
              children: 'Header'
            }), (0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
              'disabled': true,
              children: 'Action'
            }), (0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
              children: 'Another Action'
            }), (0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
              'divider': true
            }), (0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
              children: 'Another Action'
            })]
          })]
        }), (0, _inferno.createComponentVNode)(2, _NavItem2.default, {
          children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'href': '#',
            children: 'Link'
          })
        }), (0, _inferno.createComponentVNode)(2, _NavItem2.default, {
          children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'href': '#',
            children: 'Another Link'
          })
        }), (0, _inferno.createComponentVNode)(2, _NavItem2.default, {
          children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'disabled': true,
            'href': '#',
            children: 'Disabled Link'
          })
        })]
      });
    }
  }]);

  return TabbedNavbar;
}(_inferno.Component);

module.exports = exports['default'];

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Tabbed',
    children: (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, TabbedNavbar), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: 'class TabbedNavbar extends Component {\n  constructor(props) {\n    super(props)\n\n    this.state = {\n      dropdownOpen: false\n    }\n\n    this.doToggle = this.doToggle.bind(this)\n  }\n\n  doToggle() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen\n    })\n  }\n\n  render() {\n    return (\n      <Nav tabs>\n        <NavItem>\n          <NavLink href="#" active>Link</NavLink>\n        </NavItem>\n        <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.doToggle}>\n          <DropdownToggle nav caret>\n            Dropdown\n          </DropdownToggle>\n          <DropdownMenu>\n            <DropdownItem header>Header</DropdownItem>\n            <DropdownItem disabled>Action</DropdownItem>\n            <DropdownItem>Another Action</DropdownItem>\n            <DropdownItem divider />\n            <DropdownItem>Another Action</DropdownItem>\n          </DropdownMenu>\n        </NavDropdown>\n        <NavItem>\n          <NavLink href="#">Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href="#">Another Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink disabled href="#">Disabled Link</NavLink>\n        </NavItem>\n      </Nav>\n    )\n  }\n}'
        })]
      })
    })
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Nav = __webpack_require__(14);

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = __webpack_require__(15);

var _NavItem2 = _interopRequireDefault(_NavItem);

var _NavLink = __webpack_require__(16);

var _NavLink2 = _interopRequireDefault(_NavLink);

var _NavDropdown = __webpack_require__(48);

var _NavDropdown2 = _interopRequireDefault(_NavDropdown);

var _Dropdown = __webpack_require__(8);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DropdownMenu = __webpack_require__(12);

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownToggle = __webpack_require__(13);

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _DropdownItem = __webpack_require__(11);

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabbedNavbar = function (_Component) {
  _inherits(TabbedNavbar, _Component);

  function TabbedNavbar(props) {
    _classCallCheck(this, TabbedNavbar);

    var _this = _possibleConstructorReturn(this, (TabbedNavbar.__proto__ || Object.getPrototypeOf(TabbedNavbar)).call(this, props));

    _this.state = {
      dropdownOpen: false
    };

    _this.doToggle = _this.doToggle.bind(_this);
    return _this;
  }

  _createClass(TabbedNavbar, [{
    key: 'doToggle',
    value: function doToggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _inferno.createComponentVNode)(2, _Nav2.default, {
        'tabs': true,
        children: [(0, _inferno.createComponentVNode)(2, _NavItem2.default, {
          children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'href': '#',
            'active': true,
            children: 'Link'
          })
        }), (0, _inferno.createComponentVNode)(2, _NavDropdown2.default, {
          'isOpen': this.state.dropdownOpen,
          'toggle': this.doToggle,
          children: [(0, _inferno.createComponentVNode)(2, _DropdownToggle2.default, {
            'nav': true,
            'caret': true,
            children: 'Dropdown'
          }), (0, _inferno.createComponentVNode)(2, _DropdownMenu2.default, {
            children: [(0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
              'header': true,
              children: 'Header'
            }), (0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
              'disabled': true,
              children: 'Action'
            }), (0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
              children: 'Another Action'
            }), (0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
              'divider': true
            }), (0, _inferno.createComponentVNode)(2, _DropdownItem2.default, {
              children: 'Another Action'
            })]
          })]
        }), (0, _inferno.createComponentVNode)(2, _NavItem2.default, {
          children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'href': '#',
            children: 'Link'
          })
        }), (0, _inferno.createComponentVNode)(2, _NavItem2.default, {
          children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'href': '#',
            children: 'Another Link'
          })
        }), (0, _inferno.createComponentVNode)(2, _NavItem2.default, {
          children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'disabled': true,
            'href': '#',
            children: 'Disabled Link'
          })
        })]
      });
    }
  }]);

  return TabbedNavbar;
}(_inferno.Component);

module.exports = exports['default'];

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createComponentVNode)(2, _components.Section, {
    'title': 'Vertical',
    children: (0, _inferno.createComponentVNode)(2, _components.Stage, {
      children: [(0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('List Based NavBar'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Nav2.default, {
          'vertical': true,
          children: [(0, _inferno.createComponentVNode)(2, _NavItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
              'href': '#',
              children: 'Link'
            })
          }), (0, _inferno.createComponentVNode)(2, _NavItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
              'href': '#',
              children: 'Link'
            })
          }), (0, _inferno.createComponentVNode)(2, _NavItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
              'href': '#',
              children: 'Another Link'
            })
          }), (0, _inferno.createComponentVNode)(2, _NavItem2.default, {
            children: (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
              'disabled': true,
              'href': '#',
              children: 'Disabled Link'
            })
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Nav vertical>\n  <NavItem>\n    <NavLink href="#">Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink href="#">Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink href="#">Another Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink disabled href="#">Disabled Link</NavLink>\n  </NavItem>\n</Nav>'
        })]
      }), (0, _inferno.createVNode)(1, 'h3', null, (0, _inferno.createTextVNode)('Link Based NavBar'), 2), (0, _inferno.createComponentVNode)(2, _components.Scene, {
        children: [(0, _inferno.createComponentVNode)(2, _Nav2.default, {
          'vertical': true,
          children: [(0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'href': '#',
            children: 'Link'
          }), ' ', (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'href': '#',
            children: 'Link'
          }), ' ', (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'href': '#',
            children: 'Another Link'
          }), ' ', (0, _inferno.createComponentVNode)(2, _NavLink2.default, {
            'disabled': true,
            'href': '#',
            children: 'Disabled Link'
          })]
        }), (0, _inferno.createComponentVNode)(2, _components.Code, {
          children: '<Nav vertical>\n  <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>\n</Nav>'
        })]
      })]
    })
  });
};

var _inferno = __webpack_require__(0);

var _components = __webpack_require__(4);

var _Nav = __webpack_require__(14);

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = __webpack_require__(15);

var _NavItem2 = _interopRequireDefault(_NavItem);

var _NavLink = __webpack_require__(16);

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoRouter = __webpack_require__(35);

var _BasicPage = __webpack_require__(55);

var _BasicPage2 = _interopRequireDefault(_BasicPage);

var _CardPage = __webpack_require__(56);

var _CardPage2 = _interopRequireDefault(_CardPage);

var _FormPage = __webpack_require__(57);

var _FormPage2 = _interopRequireDefault(_FormPage);

var _ModalPage = __webpack_require__(58);

var _ModalPage2 = _interopRequireDefault(_ModalPage);

var _NavigationPage = __webpack_require__(59);

var _NavigationPage2 = _interopRequireDefault(_NavigationPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// require('inferno-devtools')


function NoMatch() {}

function Content(_ref) {
  var match = _ref.match;

  return (0, _inferno.createVNode)(1, 'div', null, (0, _inferno.createComponentVNode)(2, _infernoRouter.Switch, {
    children: [(0, _inferno.createComponentVNode)(2, _infernoRouter.Route, {
      'path': match.path + '/basic',
      'component': _BasicPage2.default
    }), (0, _inferno.createComponentVNode)(2, _infernoRouter.Route, {
      'path': match.path + '/card',
      'component': _CardPage2.default
    }), (0, _inferno.createComponentVNode)(2, _infernoRouter.Route, {
      'path': match.path + '/form',
      'component': _FormPage2.default
    }), (0, _inferno.createComponentVNode)(2, _infernoRouter.Route, {
      'path': match.path + '/modal',
      'component': _ModalPage2.default
    }), (0, _inferno.createComponentVNode)(2, _infernoRouter.Route, {
      'path': match.path + '/navigation',
      'component': _NavigationPage2.default
    }), (0, _inferno.createComponentVNode)(2, _infernoRouter.Redirect, {
      'to': '/inferno-bootstrap-docs/basic'
    })]
  }), 2);
}

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        pageLinks: [{ link: "/inferno-bootstrap-docs/basic", title: "Basic" }, { link: "/inferno-bootstrap-docs/card", title: "Card" }, { link: "/inferno-bootstrap-docs/form", title: "Form" }, { link: "/inferno-bootstrap-docs/modal", title: "Modal" }, { link: "/inferno-bootstrap-docs/navigation", title: "Navigation" }]
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _inferno.createVNode)(1, 'div', 'Content', (0, _inferno.createComponentVNode)(2, _infernoRouter.Switch, {
        children: [(0, _inferno.createComponentVNode)(2, _infernoRouter.Route, {
          'path': '/inferno-bootstrap-docs',
          'component': Content
        }), (0, _inferno.createComponentVNode)(2, _infernoRouter.Redirect, {
          'to': '/inferno-bootstrap-docs/basic'
        })]
      }), 2);
    }
  }]);

  return App;
}(_inferno.Component);

if (typeof window !== 'undefined') {
  (0, _inferno.render)((0, _inferno.createComponentVNode)(2, _infernoRouter.BrowserRouter, {
    children: (0, _inferno.createComponentVNode)(2, App)
  }), document.getElementById('app'));
}

/***/ }),
/* 134 */,
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _inferno = __webpack_require__(7);

var _infernoCreateElement = __webpack_require__(18);

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var Arrow = function Arrow(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'span' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['component', 'innerRef', 'children']);

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
    return children({ arrowProps: arrowProps, restProps: restProps });
  }

  var componentProps = _extends({}, restProps, {
    style: _extends({}, arrowStyle, restProps.style)
  });

  if (typeof component === 'string') {
    componentProps.ref = arrowRef;
  } else {
    componentProps.innerRef = arrowRef;
  }

  return (0, _infernoCreateElement.createElement)(component, componentProps, children);
};

exports.default = Arrow;
module.exports = exports['default'];
//# sourceMappingURL=Arrow.js.map

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _inferno = __webpack_require__(7);

var _infernoCreateElement = __webpack_require__(18);

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Manager = function (_Component) {
  _inherits(Manager, _Component);

  function Manager(props) {
    _classCallCheck(this, Manager);

    var _this = _possibleConstructorReturn(this, (Manager.__proto__ || Object.getPrototypeOf(Manager)).call(this, props));

    _this._setTargetNode = function (node) {
      _this._targetNode = node;
    };

    _this._getTargetNode = function () {
      return _this._targetNode;
    };
    return _this;
  }

  _createClass(Manager, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popperManager: {
          setTargetNode: this._setTargetNode,
          getTargetNode: this._getTargetNode
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          Tag = _props.tag,
          children = _props.children,
          restProps = _objectWithoutProperties(_props, ['tag', 'children']);

      if (Tag !== false) {
        return (0, _infernoCreateElement.createElement)(Tag || 'div', restProps, children);
      } else {
        return children;
      }
    }
  }]);

  return Manager;
}(_inferno.Component);

exports.default = Manager;
module.exports = exports['default'];
//# sourceMappingURL=Manager.js.map

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _inferno = __webpack_require__(7);

var _infernoCreateElement = __webpack_require__(18);

var _popper = __webpack_require__(53);

var _popper2 = _interopRequireDefault(_popper);

var _isEqualShallow = __webpack_require__(141);

var _isEqualShallow2 = _interopRequireDefault(_isEqualShallow);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var noop = function noop() {
  return null;
};

var Popper = function (_Component) {
  _inherits(Popper, _Component);

  function Popper(props) {
    _classCallCheck(this, Popper);

    var _this = _possibleConstructorReturn(this, (Popper.__proto__ || Object.getPrototypeOf(Popper)).call(this, props));

    _this.state = {};

    _this._setArrowNode = function (node) {
      _this._arrowNode = node;
    };

    _this._getTargetNode = function () {
      return _this.context.popperManager.getTargetNode();
    };

    _this._updateStateModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        if (_this.state.data && !(0, _isEqualShallow2.default)(data.offsets, _this.state.data.offsets) || !_this.state.data) {
          _this.setState({ data: data });
        }
        return data;
      }
    };
    return _this;
  }

  _createClass(Popper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popper: {
          setArrowNode: this._setArrowNode.bind(this),
          getArrowStyle: this._getArrowStyle.bind(this)
        }
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._updatePopper();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {
      if (lastProps.placement !== this.props.placement || lastProps.eventsEnabled !== this.props.eventsEnabled) {
        this._updatePopper();
      }

      if (this._popper && lastProps.children !== this.props.children) {
        this._popper.scheduleUpdate();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroyPopper();
    }
  }, {
    key: '_updatePopper',
    value: function _updatePopper() {
      this._destroyPopper();
      if (this._node) {
        this._createPopper();
      }
    }
  }, {
    key: '_createPopper',
    value: function _createPopper() {
      var _props = this.props,
          placement = _props.placement,
          eventsEnabled = _props.eventsEnabled;

      var modifiers = _extends({}, this.props.modifiers, {
        applyStyle: { enabled: false },
        updateState: this._updateStateModifier
      });

      if (this._arrowNode) {
        modifiers.arrow = {
          element: this._arrowNode
        };
      }

      this._popper = new _popper2.default(this._getTargetNode(), this._node, {
        placement: placement,
        eventsEnabled: eventsEnabled,
        modifiers: modifiers
      });

      // schedule an update to make sure everything gets positioned correct
      // after being instantiated
      this._popper.scheduleUpdate();
    }
  }, {
    key: '_destroyPopper',
    value: function _destroyPopper() {
      if (this._popper) {
        this._popper.destroy();
      }
    }
  }, {
    key: '_getPopperStyle',
    value: function _getPopperStyle() {
      var data = this.state.data;

      // If Popper isn't instantiated, hide the popperElement
      // to avoid flash of unstyled content

      if (!this._popper || !data) {
        return {
          position: 'absolute',
          pointerEvents: 'none',
          opacity: 0
        };
      }

      var _data$offsets$popper = data.offsets.popper,
          top = _data$offsets$popper.top,
          left = _data$offsets$popper.left,
          position = _data$offsets$popper.position;

      return _extends({
        position: position
      }, data.styles);
    }
  }, {
    key: '_getPopperPlacement',
    value: function _getPopperPlacement() {
      return !!this.state.data ? this.state.data.placement : undefined;
    }
  }, {
    key: '_getArrowStyle',
    value: function _getArrowStyle() {
      if (!this.state.data || !this.state.data.offsets.arrow) {
        return {};
      } else {
        var _state$data$offsets$a = this.state.data.offsets.arrow,
            top = _state$data$offsets$a.top,
            left = _state$data$offsets$a.left;

        return { top: top, left: left };
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          component = _props2.component,
          innerRef = _props2.innerRef,
          placement = _props2.placement,
          eventsEnabled = _props2.eventsEnabled,
          modifiers = _props2.modifiers,
          children = _props2.children,
          restProps = _objectWithoutProperties(_props2, ['component', 'innerRef', 'placement', 'eventsEnabled', 'modifiers', 'children']);

      // Default props


      component = component || 'div';
      placement = placement || 'bottom';
      eventsEnabled === undefined ? true : eventsEnabled;
      modifiers = modifiers || {};

      var popperRef = function popperRef(node) {
        _this2._node = node;
        if (typeof innerRef === 'function') {
          innerRef(node);
        }
      };
      var popperStyle = this._getPopperStyle();
      var popperPlacement = this._getPopperPlacement();

      if (typeof children === 'function') {
        var popperProps = _defineProperty({
          ref: popperRef,
          style: popperStyle
        }, 'data-placement', popperPlacement);
        return children({
          popperProps: popperProps,
          restProps: restProps,
          scheduleUpdate: this._popper && this._popper.scheduleUpdate
        });
      }

      var componentProps = _extends({}, restProps, {
        style: _extends({}, restProps.style, popperStyle),
        'data-placement': popperPlacement
      });

      if (typeof component === 'string') {
        componentProps.ref = popperRef;
      } else {
        componentProps.innerRef = popperRef;
      }

      return (0, _infernoCreateElement.createElement)(component, componentProps, children);
    }
  }]);

  return Popper;
}(_inferno.Component);

exports.default = Popper;
module.exports = exports['default'];
//# sourceMappingURL=Popper.js.map

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _inferno = __webpack_require__(7);

var _infernoCreateElement = __webpack_require__(18);

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var Target = function Target(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'div' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popperManager = context.popperManager;

  var targetRef = function targetRef(node) {
    popperManager.setTargetNode(node);
    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };

  if (typeof children === 'function') {
    var targetProps = { ref: targetRef };
    return children({ targetProps: targetProps, restProps: restProps });
  }

  var componentProps = _extends({}, restProps);

  if (typeof component === 'string') {
    componentProps.ref = targetRef;
  } else {
    componentProps.innerRef = targetRef;
  }

  return (0, _infernoCreateElement.createElement)(component, componentProps, children);
};

exports.default = Target;
module.exports = exports['default'];
//# sourceMappingURL=Target.js.map

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _inferno = __webpack_require__(7);

var _infernoCreateElement = __webpack_require__(18);

var _compat = __webpack_require__(140);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var noop = function noop() {
  return null;
};

var Travel = function (_Component) {
  _inherits(Travel, _Component);

  function Travel(props) {
    _classCallCheck(this, Travel);

    var _this = _possibleConstructorReturn(this, (Travel.__proto__ || Object.getPrototypeOf(Travel)).call(this, props));

    _this._portalNode = null;
    return _this;
  }

  _createClass(Travel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._renderPortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroyPortal();
    }
  }, {
    key: '_getRenderToNode',
    value: function _getRenderToNode() {
      var renderTo = this.props.renderTo;

      if (typeof renderTo === 'string') {
        return document.querySelector(renderTo);
      } else {
        return renderTo || document.body;
      }
    }
  }, {
    key: '_getComponent',
    value: function _getComponent() {
      if (this.props.useArray) {
        return _compat.Children.toArray(this.props.children)[1];
      } else {
        return _compat.Children.only(this.props.children);
      }
    }
  }, {
    key: '_setupPortal',
    value: function _setupPortal() {
      var _props = this.props,
          renderTag = _props.renderTag,
          onMount = _props.onMount;

      // Default props

      renderTag = renderTag || 'div';
      onMount = onMount || noop;

      var renderToNode = this._getRenderToNode();

      // create a node that we can stick our component in
      this._portalNode = document.createElement(renderTag);

      // append node to the render node
      renderToNode.appendChild(this._portalNode);

      // store the instance passed back to allow work to be done on it
      this._portalInstance = typeof onMount === 'function' ? onMount(this._portalNode) : this._portalNode;
    }
  }, {
    key: '_renderPortal',
    value: function _renderPortal() {
      var _this2 = this;

      var component = this._getComponent();

      // if no component, bail out
      if (!component) {
        this._destroyPortal();
        return;
      }

      // if no portalNode found, create it
      if (!this._portalNode) {
        this._setupPortal();
      }

      // render component into the DOM
      (0, _compat.unstable_renderSubtreeIntoContainer)(this, component, this._portalNode, function () {
        // don't update until the subtree has finished rendering
        _this2._updatePortal();
      });
    }
  }, {
    key: '_updatePortal',
    value: function _updatePortal() {
      var _this3 = this;

      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          style = _props2.style,
          onUpdate = _props2.onUpdate;

      // Default props

      onUpdate = onUpdate || noop;

      if (id) {
        this._portalNode.id = id;
      }

      if (className) {
        this._portalNode.className = className;
      }

      if (style) {
        Object.keys(style).forEach(function (key) {
          _this3._portalNode.style[key] = style[key];
        });
      }

      if (typeof onUpdate === 'function') {
        this._portalInstance = onUpdate(this._portalInstance);
      }
    }
  }, {
    key: '_destroyPortal',
    value: function _destroyPortal() {
      if (this._portalNode) {
        (0, _compat.unmountComponentAtNode)(this._portalNode);
        this._portalNode.parentNode.removeChild(this._portalNode);
      }
      this._portalNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.useArray) {
        return _compat.Children.toArray(this.props.children)[0];
      } else {
        return null;
      }
    }
  }]);

  return Travel;
}(_inferno.Component);

exports.default = Travel;
module.exports = exports['default'];
//# sourceMappingURL=Travel.js.map

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Children = exports.WrapperComponent = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

exports.unmountComponentAtNode = unmountComponentAtNode;
exports.unstable_renderSubtreeIntoContainer = unstable_renderSubtreeIntoContainer;

var _inferno = __webpack_require__(7);

var _infernoShared = __webpack_require__(147);

var _infernoVnodeFlags = __webpack_require__(148);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* COMPATIBILITY */
// TODO: Rewrite implementation for Inferno

function unmountComponentAtNode(container) {
  (0, _inferno.render)(null, container);
  return true;
}

function unstable_renderSubtreeIntoContainer(parentComponent, vNode, container, callback) {
  var wrapperVNode = (0, _inferno.createComponentVNode)(_infernoVnodeFlags.VNodeFlags.ComponentClass, WrapperComponent, {
    children: vNode,
    context: parentComponent.context
  });
  (0, _inferno.render)(wrapperVNode, container);
  var component = vNode.children;

  if (callback) {
    // callback gets the component as context, no other argument.
    callback.call(component);
  }
  return component;
}

var WrapperComponent = exports.WrapperComponent = function (_Component) {
  _inherits(WrapperComponent, _Component);

  function WrapperComponent() {
    _classCallCheck(this, WrapperComponent);

    return _possibleConstructorReturn(this, (WrapperComponent.__proto__ || Object.getPrototypeOf(WrapperComponent)).apply(this, arguments));
  }

  _createClass(WrapperComponent, [{
    key: 'getChildContext',
    value: function getChildContext() {
      // tslint:disable-next-line
      return this.props.contex;
    }
  }, {
    key: 'render',
    value: function render(props) {
      return props.children;
    }
  }]);

  return WrapperComponent;
}(_inferno.Component);

function flatten(arr, result) {
  for (var i = 0, len = arr.length; i < len; i++) {
    var value = arr[i];
    if ((0, _infernoShared.isArray)(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
}

var ARR = [];

var Children = exports.Children = {
  only: function only(children) {
    children = Children.toArray(children);
    if (children.length !== 1) {
      throw new Error("Children.only() expects only one child.");
    }
    return children[0];
  },

  toArray: function toArray(children) {
    if ((0, _infernoShared.isNullOrUndef)(children)) {
      return [];
    }
    // We need to flatten arrays here,
    // because React does it also and application level code might depend on that behavior
    if ((0, _infernoShared.isArray)(children)) {
      var result = [];

      flatten(children, result);

      return result;
    }
    return ARR.concat(children);
  }
};

/* /COMPATIBILITY */
//# sourceMappingURL=compat.js.map

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-equal-shallow <https://github.com/jonschlinkert/is-equal-shallow>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isPrimitive = __webpack_require__(142);

module.exports = function isEqual(a, b) {
  if (!a && !b) {
    return true;
  }
  if (!a && b || a && !b) {
    return false;
  }

  var numKeysA = 0,
      numKeysB = 0,
      key;
  for (key in b) {
    numKeysB++;
    if (!isPrimitive(b[key]) || !a.hasOwnProperty(key) || a[key] !== b[key]) {
      return false;
    }
  }
  for (key in a) {
    numKeysA++;
  }
  return numKeysA === numKeysB;
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



// see http://jsperf.com/testing-value-is-primitive/7

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function isPrimitive(value) {
  return value == null || typeof value !== 'function' && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object';
};

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Component; });
/* unused harmony export EMPTY_OBJ */
/* unused harmony export NO_OP */
/* unused harmony export createComponentVNode */
/* unused harmony export createPortal */
/* unused harmony export createRenderer */
/* unused harmony export createTextVNode */
/* unused harmony export createVNode */
/* unused harmony export directClone */
/* unused harmony export getFlagsForElementVnode */
/* unused harmony export getNumberStyleValue */
/* unused harmony export hydrate */
/* unused harmony export linkEvent */
/* unused harmony export normalizeProps */
/* unused harmony export options */
/* unused harmony export render */
/* unused harmony export version */
var NO_OP = '$NO_OP';
var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== 'undefined' && window.document);
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
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
function isDefined(o) {
    return o !== void 0;
}
function isObject(o) {
    return typeof o === 'object';
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error(("Inferno Error: " + message));
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

var keyPrefix = '$';
function getVNode(childFlags, children, className, flags, key, props, ref, type) {
    {
        return {
            childFlags: childFlags,
            children: children,
            className: className,
            dom: null,
            flags: flags,
            key: key === void 0 ? null : key,
            parentVNode: null,
            props: props === void 0 ? null : props,
            ref: ref === void 0 ? null : ref,
            type: type
        };
    }
    return {
        childFlags: childFlags,
        children: children,
        className: className,
        dom: null,
        flags: flags,
        isValidated: false,
        key: key === void 0 ? null : key,
        parentVNode: null,
        props: props === void 0 ? null : props,
        ref: ref === void 0 ? null : ref,
        type: type
    };
}
function createVNode(flags, type, className, children, childFlags, props, key, ref) {
    var childFlag = childFlags === void 0 ? 1 /* HasInvalidChildren */ : childFlags;
    var vNode = getVNode(childFlag, children, className, flags, key, props, ref, type);
    var optsVNode = options.createVNode;
    if (typeof optsVNode === 'function') {
        optsVNode(vNode);
    }
    if (childFlag === 0 /* UnknownChildren */) {
        normalizeChildren(vNode, vNode.children);
    }
    return vNode;
}
function createComponentVNode(flags, type, props, key, ref) {
    if ((flags & 2 /* ComponentUnknown */) > 0) {
        flags = isDefined(type.prototype) && isFunction(type.prototype.render) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
    }
    // set default props
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
    if ((flags & 8 /* ComponentFunction */) > 0) {
        var defaultHooks = type.defaultHooks;
        if (!isNullOrUndef(defaultHooks)) {
            if (!ref) {
                // As ref cannot be referenced from application level, we can use the same refs object
                ref = defaultHooks;
            }
            else {
                for (var prop$1 in defaultHooks) {
                    if (isUndefined(ref[prop$1])) {
                        ref[prop$1] = defaultHooks[prop$1];
                    }
                }
            }
        }
    }
    var vNode = getVNode(1 /* HasInvalidChildren */, null, null, flags, key, props, ref, type);
    var optsVNode = options.createVNode;
    if (isFunction(optsVNode)) {
        optsVNode(vNode);
    }
    return vNode;
}
function createTextVNode(text, key) {
    return getVNode(1 /* HasInvalidChildren */, isNullOrUndef(text) ? '' : text, null, 16 /* Text */, key, null, null, null);
}
function normalizeProps(vNode) {
    var props = vNode.props;
    if (props) {
        if (vNode.flags & 481 /* Element */) {
            if (isDefined(props.children) && isNullOrUndef(vNode.children)) {
                normalizeChildren(vNode, props.children);
            }
            if (isDefined(props.className)) {
                vNode.className = props.className || null;
                props.className = undefined;
            }
        }
        if (isDefined(props.key)) {
            vNode.key = props.key;
            props.key = undefined;
        }
        if (isDefined(props.ref)) {
            vNode.ref = props.ref;
            props.ref = undefined;
        }
    }
    return vNode;
}
function directClone(vNodeToClone) {
    var newVNode;
    var flags = vNodeToClone.flags;
    if (flags & 14 /* Component */) {
        var props;
        var propsToClone = vNodeToClone.props;
        if (!isNull(propsToClone)) {
            props = {};
            for (var key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
        newVNode = createComponentVNode(flags, vNodeToClone.type, props, vNodeToClone.key, vNodeToClone.ref);
    }
    else if (flags & 481 /* Element */) {
        var children = vNodeToClone.children;
        newVNode = createVNode(flags, vNodeToClone.type, vNodeToClone.className, children, 0 /* UnknownChildren */, vNodeToClone.props, vNodeToClone.key, vNodeToClone.ref);
    }
    else if (flags & 16 /* Text */) {
        newVNode = createTextVNode(vNodeToClone.children, vNodeToClone.key);
    }
    else if (flags & 1024 /* Portal */) {
        newVNode = vNodeToClone;
    }
    return newVNode;
}
function createVoidVNode() {
    return createTextVNode('', null);
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        if (!isInvalid(n)) {
            var newKey = currentKey + keyPrefix + index;
            if (isArray(n)) {
                _normalizeVNodes(n, result, 0, newKey);
            }
            else {
                if (isStringOrNumber(n)) {
                    n = createTextVNode(n, newKey);
                }
                else {
                    var oldKey = n.key;
                    var isPrefixedKey = isString(oldKey) && oldKey[0] === keyPrefix;
                    if (!isNull(n.dom) || isPrefixedKey) {
                        n = directClone(n);
                    }
                    if (isNull(oldKey) || isPrefixedKey) {
                        n.key = newKey;
                    }
                    else {
                        n.key = currentKey + oldKey;
                    }
                }
                result.push(n);
            }
        }
    }
}
function getFlagsForElementVnode(type) {
    if (type === 'svg') {
        return 32 /* SvgElement */;
    }
    if (type === 'input') {
        return 64 /* InputElement */;
    }
    if (type === 'select') {
        return 256 /* SelectElement */;
    }
    if (type === 'textarea') {
        return 128 /* TextareaElement */;
    }
    return 1 /* HtmlElement */;
}
function normalizeChildren(vNode, children) {
    var newChildren;
    var newChildFlags;
    // Don't change children to match strict equal (===) true in patching
    if (isInvalid(children)) {
        newChildFlags = 1 /* HasInvalidChildren */;
        newChildren = children;
    }
    else if (isString(children)) {
        newChildFlags = 2 /* HasVNodeChildren */;
        newChildren = createTextVNode(children);
    }
    else if (isNumber(children)) {
        newChildFlags = 2 /* HasVNodeChildren */;
        newChildren = createTextVNode(children + '');
    }
    else if (isArray(children)) {
        var len = children.length;
        if (len === 0) {
            newChildren = null;
            newChildFlags = 1 /* HasInvalidChildren */;
        }
        else {
            // we assign $ which basically means we've flagged this array for future note
            // if it comes back again, we need to clone it, as people are using it
            // in an immutable way
            // tslint:disable-next-line
            if (Object.isFrozen(children) || children['$'] === true) {
                children = children.slice();
            }
            newChildFlags = 8 /* HasKeyedChildren */;
            for (var i = 0; i < len; i++) {
                var n = children[i];
                if (isInvalid(n) || isArray(n)) {
                    newChildren = newChildren || children.slice(0, i);
                    _normalizeVNodes(children, newChildren, i, '');
                    break;
                }
                else if (isStringOrNumber(n)) {
                    newChildren = newChildren || children.slice(0, i);
                    newChildren.push(createTextVNode(n, keyPrefix + i));
                }
                else {
                    var key = n.key;
                    var isNullDom = isNull(n.dom);
                    var isNullKey = isNull(key);
                    var isPrefixed = !isNullKey && key[0] === keyPrefix;
                    if (!isNullDom || isNullKey || isPrefixed) {
                        newChildren = newChildren || children.slice(0, i);
                        if (!isNullDom || isPrefixed) {
                            n = directClone(n);
                        }
                        if (isNullKey || isPrefixed) {
                            n.key = keyPrefix + i;
                        }
                        newChildren.push(n);
                    }
                    else if (newChildren) {
                        newChildren.push(n);
                    }
                }
            }
            newChildren = newChildren || children;
            newChildren.$ = true;
        }
    }
    else {
        newChildren = children;
        if (!isNull(children.dom)) {
            newChildren = directClone(children);
        }
        newChildFlags = 2 /* HasVNodeChildren */;
    }
    vNode.children = newChildren;
    vNode.childFlags = newChildFlags;
    return vNode;
}
var options = {
    afterMount: null,
    afterRender: null,
    afterUpdate: null,
    beforeRender: null,
    beforeUnmount: null,
    createVNode: null,
    roots: []
};

/**
 * Links given data to event as first parameter
 * @param {*} data data to be linked, it will be available in function as first parameter
 * @param {Function} event Function to be called when event occurs
 * @returns {{data: *, event: Function}}
 */
function linkEvent(data, event) {
    if (isFunction(event)) {
        return { data: data, event: event };
    }
    return null; // Return null when event is invalid, to avoid creating unnecessary event handlers
}

var xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = 'http://www.w3.org/XML/1998/namespace';
var svgNS = 'http://www.w3.org/2000/svg';
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

// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
var EMPTY_OBJ = {};
var LIFECYCLE = [];
function appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
function insertOrAppend(parentDom, newNode, nextNode) {
    if (isNullOrUndef(nextNode)) {
        appendChild(parentDom, newNode);
    }
    else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(svgNS, tag);
    }
    return document.createElement(tag);
}
function replaceChild(parentDom, newDom, lastDom) {
    parentDom.replaceChild(newDom, lastDom);
}
function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
function callAll(arrayFn) {
    var listener;
    while ((listener = arrayFn.shift()) !== undefined) {
        listener();
    }
}

var attachedEventCounts = {};
var attachedEvents = {};
function handleEvent(name, nextEvent, dom) {
    var eventsLeft = attachedEventCounts[name];
    var eventsObject = dom.$EV;
    if (nextEvent) {
        if (!eventsLeft) {
            attachedEvents[name] = attachEventToDocument(name);
            attachedEventCounts[name] = 0;
        }
        if (!eventsObject) {
            eventsObject = dom.$EV = {};
        }
        if (!eventsObject[name]) {
            attachedEventCounts[name]++;
        }
        eventsObject[name] = nextEvent;
    }
    else if (eventsObject && eventsObject[name]) {
        attachedEventCounts[name]--;
        if (eventsLeft === 1) {
            document.removeEventListener(normalizeEventName(name), attachedEvents[name]);
            attachedEvents[name] = null;
        }
        eventsObject[name] = nextEvent;
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
                }
                else {
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
    this.stopImmediatePropagation();
}
function attachEventToDocument(name) {
    var docEvent = function (event) {
        var type = event.type;
        var isClick = type === 'click' || type === 'dblclick';
        if (isClick && event.button !== 0) {
            // Firefox incorrectly triggers click event for mid/right mouse buttons.
            // This bug has been active for 12 years.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=184051
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
        event.stopPropagation = stopPropagation;
        // Event data needs to be object to save reference to currentTarget getter
        var eventData = {
            dom: document
        };
        try {
            Object.defineProperty(event, 'currentTarget', {
                configurable: true,
                get: function get() {
                    return eventData.dom;
                }
            });
        }
        catch (e) {
            /* safari7 and phantomJS will crash */
        }
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
function isSamePropsInnerHTML(dom, props) {
    return Boolean(props && props.dangerouslySetInnerHTML && props.dangerouslySetInnerHTML.__html && isSameInnerHTML(dom, props.dangerouslySetInnerHTML.__html));
}

function triggerEventListener(props, methodName, e) {
    if (props[methodName]) {
        var listener = props[methodName];
        if (listener.event) {
            listener.event(listener.data, e);
        }
        else {
            listener(e);
        }
    }
    else {
        var nativeListenerName = methodName.toLowerCase();
        if (props[nativeListenerName]) {
            props[nativeListenerName](e);
        }
    }
}
function createWrappedFunction(methodName, applyValue) {
    var fnMethod = function (e) {
        e.stopPropagation();
        var vNode = this.$V;
        // If vNode is gone by the time event fires, no-op
        if (!vNode) {
            return;
        }
        var props = vNode.props || EMPTY_OBJ;
        var dom = vNode.dom;
        if (isString(methodName)) {
            triggerEventListener(props, methodName, e);
        }
        else {
            for (var i = 0; i < methodName.length; i++) {
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
    }
    else {
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
    }
    else {
        if (hasValue && dom.value !== value) {
            dom.defaultValue = value;
            dom.value = value;
        }
        else if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
}

function updateChildOptionGroup(vNode, value) {
    var type = vNode.type;
    if (type === 'optgroup') {
        var children = vNode.children;
        var childFlags = vNode.childFlags;
        if (childFlags & 12 /* MultipleChildren */) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOption(children[i], value);
            }
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            updateChildOption(children, value);
        }
    }
    else {
        updateChildOption(vNode, value);
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if ((isArray(value) && value.indexOf(props.value) !== -1) || props.value === value) {
        dom.selected = true;
    }
    else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {
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
    if ((childFlags & 1 /* HasInvalidChildren */) === 0) {
        var children = vNode.children;
        var value = nextPropsOrEmpty.value;
        if (mounting && isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        if (childFlags & 12 /* MultipleChildren */) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOptionGroup(children[i], value);
            }
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            updateChildOptionGroup(children, value);
        }
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
    }
    else if (domValue !== value) {
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
    if (flags & 64 /* InputElement */) {
        applyValueInput(nextPropsOrEmpty, dom);
    }
    else if (flags & 256 /* SelectElement */) {
        applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode);
    }
    else if (flags & 128 /* TextareaElement */) {
        applyValueTextArea(nextPropsOrEmpty, dom, mounting);
    }
    if (isControlled) {
        dom.$V = vNode;
    }
}
function addFormElementEventHandlers(flags, dom, nextPropsOrEmpty) {
    if (flags & 64 /* InputElement */) {
        inputEvents(dom, nextPropsOrEmpty);
    }
    else if (flags & 256 /* SelectElement */) {
        selectEvents(dom);
    }
    else if (flags & 128 /* TextareaElement */) {
        textAreaEvents(dom, nextPropsOrEmpty);
    }
}
function isControlledFormElement(nextPropsOrEmpty) {
    return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type) ? !isNullOrUndef(nextPropsOrEmpty.checked) : !isNullOrUndef(nextPropsOrEmpty.value);
}

function remove(vNode, parentDom) {
    unmount(vNode);
    if (!isNull(parentDom)) {
        removeChild(parentDom, vNode.dom);
        // Let carbage collector free memory
        vNode.dom = null;
    }
}
function unmount(vNode) {
    var flags = vNode.flags;
    if (flags & 481 /* Element */) {
        var ref = vNode.ref;
        var props = vNode.props;
        if (isFunction(ref)) {
            ref(null);
        }
        var children = vNode.children;
        var childFlags = vNode.childFlags;
        if (childFlags & 12 /* MultipleChildren */) {
            unmountAllChildren(children);
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            unmount(children);
        }
        if (!isNull(props)) {
            for (var name in props) {
                switch (name) {
                    case 'onClick':
                    case 'onDblClick':
                    case 'onFocusIn':
                    case 'onFocusOut':
                    case 'onKeyDown':
                    case 'onKeyPress':
                    case 'onKeyUp':
                    case 'onMouseDown':
                    case 'onMouseMove':
                    case 'onMouseUp':
                    case 'onSubmit':
                    case 'onTouchEnd':
                    case 'onTouchMove':
                    case 'onTouchStart':
                        handleEvent(name, null, vNode.dom);
                        break;
                    default:
                        break;
                }
            }
        }
    }
    else if (flags & 14 /* Component */) {
        var instance = vNode.children;
        var ref$1 = vNode.ref;
        if (flags & 4 /* ComponentClass */) {
            if (isFunction(options.beforeUnmount)) {
                options.beforeUnmount(vNode);
            }
            if (isFunction(instance.componentWillUnmount)) {
                instance.componentWillUnmount();
            }
            if (isFunction(ref$1)) {
                ref$1(null);
            }
            instance.$UN = true;
            unmount(instance.$LI);
        }
        else {
            if (!isNullOrUndef(ref$1) && isFunction(ref$1.onComponentWillUnmount)) {
                ref$1.onComponentWillUnmount(vNode.dom, vNode.props || EMPTY_OBJ);
            }
            unmount(instance);
        }
    }
    else if (flags & 1024 /* Portal */) {
        var children$1 = vNode.children;
        if (!isNull(children$1) && isObject(children$1)) {
            remove(children$1, vNode.type);
        }
    }
}
function unmountAllChildren(children) {
    for (var i = 0, len = children.length; i < len; i++) {
        unmount(children[i]);
    }
}
function removeAllChildren(dom, children) {
    unmountAllChildren(children);
    dom.textContent = '';
}

function createLinkEvent(linkEvent, nextValue) {
    return function (e) {
        linkEvent(nextValue.data, e);
    };
}
function patchEvent(name, lastValue, nextValue, dom) {
    var nameLowerCase = name.toLowerCase();
    if (!isFunction(nextValue) && !isNullOrUndef(nextValue)) {
        var linkEvent = nextValue.event;
        if (linkEvent && isFunction(linkEvent)) {
            dom[nameLowerCase] = createLinkEvent(linkEvent, nextValue);
        }
        else {
        }
    }
    else {
        var domEvent = dom[nameLowerCase];
        // if the function is wrapped, that means it's been controlled by a wrapper
        if (!domEvent || !domEvent.wrapped) {
            dom[nameLowerCase] = nextValue;
        }
    }
}
function getNumberStyleValue(style, value) {
    switch (style) {
        case 'animationIterationCount':
        case 'borderImageOutset':
        case 'borderImageSlice':
        case 'borderImageWidth':
        case 'boxFlex':
        case 'boxFlexGroup':
        case 'boxOrdinalGroup':
        case 'columnCount':
        case 'fillOpacity':
        case 'flex':
        case 'flexGrow':
        case 'flexNegative':
        case 'flexOrder':
        case 'flexPositive':
        case 'flexShrink':
        case 'floodOpacity':
        case 'fontWeight':
        case 'gridColumn':
        case 'gridRow':
        case 'lineClamp':
        case 'lineHeight':
        case 'opacity':
        case 'order':
        case 'orphans':
        case 'stopOpacity':
        case 'strokeDasharray':
        case 'strokeDashoffset':
        case 'strokeMiterlimit':
        case 'strokeOpacity':
        case 'strokeWidth':
        case 'tabSize':
        case 'widows':
        case 'zIndex':
        case 'zoom':
            return value;
        default:
            return value + 'px';
    }
}
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
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
                domStyle[style] = isNumber(value) ? getNumberStyleValue(style, value) : value;
            }
        }
        for (style in lastAttrValue) {
            if (isNullOrUndef(nextAttrValue[style])) {
                domStyle[style] = '';
            }
        }
    }
    else {
        for (style in nextAttrValue) {
            value = nextAttrValue[style];
            domStyle[style] = isNumber(value) ? getNumberStyleValue(style, value) : value;
        }
    }
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode) {
    switch (prop) {
        case 'onClick':
        case 'onDblClick':
        case 'onFocusIn':
        case 'onFocusOut':
        case 'onKeyDown':
        case 'onKeyPress':
        case 'onKeyUp':
        case 'onMouseDown':
        case 'onMouseMove':
        case 'onMouseUp':
        case 'onSubmit':
        case 'onTouchEnd':
        case 'onTouchMove':
        case 'onTouchStart':
            handleEvent(prop, nextValue, dom);
            break;
        case 'children':
        case 'childrenType':
        case 'className':
        case 'defaultValue':
        case 'key':
        case 'multiple':
        case 'ref':
            return;
        case 'allowfullscreen':
        case 'autoFocus':
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
            prop = prop === 'autoFocus' ? prop.toLowerCase() : prop;
            dom[prop] = !!nextValue;
            break;
        case 'defaultChecked':
        case 'value':
        case 'volume':
            if (hasControlledValue && prop === 'value') {
                return;
            }
            var value = isNullOrUndef(nextValue) ? '' : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
            break;
        case 'dangerouslySetInnerHTML':
            var lastHtml = (lastValue && lastValue.__html) || '';
            var nextHtml = (nextValue && nextValue.__html) || '';
            if (lastHtml !== nextHtml) {
                if (!isNullOrUndef(nextHtml) && !isSameInnerHTML(dom, nextHtml)) {
                    if (!isNull(lastVNode)) {
                        if (lastVNode.childFlags & 12 /* MultipleChildren */) {
                            unmountAllChildren(lastVNode.children);
                        }
                        else if (lastVNode.childFlags === 2 /* HasVNodeChildren */) {
                            unmount(lastVNode.children);
                        }
                        lastVNode.children = null;
                        lastVNode.childFlags = 1 /* HasInvalidChildren */;
                    }
                    dom.innerHTML = nextHtml;
                }
            }
            break;
        default:
            if (prop[0] === 'o' && prop[1] === 'n') {
                patchEvent(prop, lastValue, nextValue, dom);
            }
            else if (isNullOrUndef(nextValue)) {
                dom.removeAttribute(prop);
            }
            else if (prop === 'style') {
                patchStyle(lastValue, nextValue, dom);
            }
            else if (isSVG && namespaces[prop]) {
                // We optimize for NS being boolean. Its 99.9% time false
                // If we end up in this path we can read property again
                dom.setAttributeNS(namespaces[prop], prop, nextValue);
            }
            else {
                dom.setAttribute(prop, nextValue);
            }
            break;
    }
}
function mountProps(vNode, flags, props, dom, isSVG) {
    var hasControlledValue = false;
    var isFormElement = (flags & 448 /* FormElement */) > 0;
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

function createClassComponentInstance(vNode, Component, props, context) {
    var instance = new Component(props, context);
    vNode.children = instance;
    instance.$V = vNode;
    instance.$BS = false;
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    instance.$UN = false;
    if (isFunction(instance.componentWillMount)) {
        instance.$BR = true;
        instance.componentWillMount();
        if (instance.$PSS) {
            var state = instance.state;
            var pending = instance.$PS;
            if (isNull(state)) {
                instance.state = pending;
            }
            else {
                for (var key in pending) {
                    state[key] = pending[key];
                }
            }
            instance.$PSS = false;
            instance.$PS = null;
        }
        instance.$BR = false;
    }
    if (isFunction(options.beforeRender)) {
        options.beforeRender(instance);
    }
    var input = handleComponentInput(instance.render(props, instance.state, context), vNode);
    var childContext;
    if (isFunction(instance.getChildContext)) {
        childContext = instance.getChildContext();
    }
    if (isNullOrUndef(childContext)) {
        instance.$CX = context;
    }
    else {
        instance.$CX = combineFrom(context, childContext);
    }
    if (isFunction(options.afterRender)) {
        options.afterRender(instance);
    }
    instance.$LI = input;
    return instance;
}
function handleComponentInput(input, componentVNode) {
    if (isInvalid(input)) {
        input = createVoidVNode();
    }
    else if (isStringOrNumber(input)) {
        input = createTextVNode(input, null);
    }
    else {
        if (input.dom) {
            input = directClone(input);
        }
        if (input.flags & 14 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = componentVNode;
        }
    }
    return input;
}

function mount(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 481 /* Element */) {
        return mountElement(vNode, parentDom, lifecycle, context, isSVG);
    }
    if (flags & 14 /* Component */) {
        return mountComponent(vNode, parentDom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    if (flags & 512 /* Void */ || flags & 16 /* Text */) {
        return mountText(vNode, parentDom);
    }
    if (flags & 1024 /* Portal */) {
        mount(vNode.children, vNode.type, lifecycle, context, false);
        return (vNode.dom = mountText(createVoidVNode(), parentDom));
    }
}
function mountText(vNode, parentDom) {
    var dom = (vNode.dom = document.createTextNode(vNode.children));
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var ref = vNode.ref;
    var childFlags = vNode.childFlags;
    isSVG = isSVG || (flags & 32 /* SvgElement */) > 0;
    var dom = documentCreateElement(vNode.type, isSVG);
    vNode.dom = dom;
    if (!isNullOrUndef(className) && className !== '') {
        if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
    }
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    if ((childFlags & 1 /* HasInvalidChildren */) === 0) {
        var childrenIsSVG = isSVG === true && vNode.type !== 'foreignObject';
        if (childFlags === 2 /* HasVNodeChildren */) {
            mount(children, dom, lifecycle, context, childrenIsSVG);
        }
        else if (childFlags & 12 /* MultipleChildren */) {
            mountArrayChildren(children, dom, lifecycle, context, childrenIsSVG);
        }
    }
    if (!isNull(props)) {
        mountProps(vNode, flags, props, dom, isSVG);
    }
    if (isFunction(ref)) {
        mountRef(dom, ref, lifecycle);
    }
    return dom;
}
function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        if (!isNull(child.dom)) {
            children[i] = child = directClone(child);
        }
        mount(child, dom, lifecycle, context, isSVG);
    }
}
function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
    var dom;
    var type = vNode.type;
    var props = vNode.props || EMPTY_OBJ;
    var ref = vNode.ref;
    if (isClass) {
        var instance = createClassComponentInstance(vNode, type, props, context);
        vNode.dom = dom = mount(instance.$LI, null, lifecycle, instance.$CX, isSVG);
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance.$UPD = false;
    }
    else {
        var input = handleComponentInput(type(props, context), vNode);
        vNode.children = input;
        vNode.dom = dom = mount(input, null, lifecycle, context, isSVG);
        mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
    }
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function createClassMountCallback(instance, hasAfterMount, afterMount, vNode, hasDidMount) {
    return function () {
        instance.$UPD = true;
        if (hasAfterMount) {
            afterMount(vNode);
        }
        if (hasDidMount) {
            instance.componentDidMount();
        }
        instance.$UPD = false;
    };
}
function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
    if (isFunction(ref)) {
        ref(instance);
    }
    else {
    }
    var hasDidMount = isFunction(instance.componentDidMount);
    var afterMount = options.afterMount;
    var hasAfterMount = isFunction(afterMount);
    if (hasDidMount || hasAfterMount) {
        lifecycle.push(createClassMountCallback(instance, hasAfterMount, afterMount, vNode, hasDidMount));
    }
}
// Create did mount callback lazily to avoid creating function context if not needed
function createOnMountCallback(ref, dom, props) {
    return function () { return ref.onComponentDidMount(dom, props); };
}
function mountFunctionalComponentCallbacks(props, ref, dom, lifecycle) {
    if (!isNullOrUndef(ref)) {
        if (isFunction(ref.onComponentWillMount)) {
            ref.onComponentWillMount(props);
        }
        if (isFunction(ref.onComponentDidMount)) {
            lifecycle.push(createOnMountCallback(ref, dom, props));
        }
    }
}
function mountRef(dom, value, lifecycle) {
    lifecycle.push(function () { return value(dom); });
}

function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
    var type = vNode.type;
    var ref = vNode.ref;
    var props = vNode.props || EMPTY_OBJ;
    if (isClass) {
        var instance = createClassComponentInstance(vNode, type, props, context);
        var input = instance.$LI;
        hydrateVNode(input, dom, lifecycle, instance.$CX, isSVG);
        vNode.dom = input.dom;
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance.$UPD = false; // Mount finished allow going sync
    }
    else {
        var input$1 = handleComponentInput(type(props, context), vNode);
        hydrateVNode(input$1, dom, lifecycle, context, isSVG);
        vNode.children = input$1;
        vNode.dom = input$1.dom;
        mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
    }
}
function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var flags = vNode.flags;
    var ref = vNode.ref;
    isSVG = isSVG || (flags & 32 /* SvgElement */) > 0;
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.type) {
        var newDom = mountElement(vNode, null, lifecycle, context, isSVG);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
    }
    else {
        vNode.dom = dom;
        var childNode = dom.firstChild;
        var childFlags = vNode.childFlags;
        if ((childFlags & 1 /* HasInvalidChildren */) === 0) {
            var nextSibling = null;
            while (childNode) {
                nextSibling = childNode.nextSibling;
                if (childNode.nodeType === 8) {
                    if (childNode.data === '!') {
                        dom.replaceChild(document.createTextNode(''), childNode);
                    }
                    else {
                        dom.removeChild(childNode);
                    }
                }
                childNode = nextSibling;
            }
            childNode = dom.firstChild;
            if (childFlags === 2 /* HasVNodeChildren */) {
                if (isNull(childNode)) {
                    mount(children, dom, lifecycle, context, isSVG);
                }
                else {
                    nextSibling = childNode.nextSibling;
                    hydrateVNode(children, childNode, lifecycle, context, isSVG);
                    childNode = nextSibling;
                }
            }
            else if (childFlags & 12 /* MultipleChildren */) {
                for (var i = 0, len = children.length; i < len; i++) {
                    var child = children[i];
                    if (isNull(childNode)) {
                        mount(child, dom, lifecycle, context, isSVG);
                    }
                    else {
                        nextSibling = childNode.nextSibling;
                        hydrateVNode(child, childNode, lifecycle, context, isSVG);
                        childNode = nextSibling;
                    }
                }
            }
            // clear any other DOM nodes, there should be only a single entry for the root
            while (childNode) {
                nextSibling = childNode.nextSibling;
                dom.removeChild(childNode);
                childNode = nextSibling;
            }
        }
        else if (!isNull(dom.firstChild) && !isSamePropsInnerHTML(dom, props)) {
            dom.textContent = ''; // dom has content, but VNode has no children remove everything from DOM
            if (flags & 448 /* FormElement */) {
                // If element is form element, we need to clear defaultValue also
                dom.defaultValue = '';
            }
        }
        if (!isNull(props)) {
            mountProps(vNode, flags, props, dom, isSVG);
        }
        if (isNullOrUndef(className)) {
            if (dom.className !== '') {
                dom.removeAttribute('class');
            }
        }
        else if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
        if (isFunction(ref)) {
            mountRef(dom, ref, lifecycle);
        }
        else {
        }
    }
}
function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = mountText(vNode, null);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
    }
    else {
        var text = vNode.children;
        if (dom.nodeValue !== text) {
            dom.nodeValue = text;
        }
        vNode.dom = dom;
    }
}
function hydrateVNode(vNode, dom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 14 /* Component */) {
        hydrateComponent(vNode, dom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    else if (flags & 481 /* Element */) {
        hydrateElement(vNode, dom, lifecycle, context, isSVG);
    }
    else if (flags & 16 /* Text */) {
        hydrateText(vNode, dom);
    }
    else if (flags & 512 /* Void */) {
        vNode.dom = dom;
    }
    else {
        throwError();
    }
}
function hydrate(input, parentDom, callback) {
    var dom = parentDom.firstChild;
    if (!isNull(dom)) {
        if (!isInvalid(input)) {
            hydrateVNode(input, dom, LIFECYCLE, EMPTY_OBJ, false);
        }
        dom = parentDom.firstChild;
        // clear any other DOM nodes, there should be only a single entry for the root
        while ((dom = dom.nextSibling)) {
            parentDom.removeChild(dom);
        }
    }
    if (LIFECYCLE.length > 0) {
        callAll(LIFECYCLE);
    }
    if (!parentDom.$V) {
        options.roots.push(parentDom);
    }
    parentDom.$V = input;
    if (isFunction(callback)) {
        callback();
    }
}

function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG) {
    unmount(lastNode);
    replaceChild(parentDom, mount(nextNode, null, lifecycle, context, isSVG), lastNode.dom);
}
function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG) {
    if (lastVNode !== nextVNode) {
        var nextFlags = nextVNode.flags;
        if (lastVNode.flags !== nextFlags || nextFlags & 2048 /* ReCreate */) {
            replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG);
        }
        else if (nextFlags & 481 /* Element */) {
            patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG);
        }
        else if (nextFlags & 14 /* Component */) {
            patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, (nextFlags & 4 /* ComponentClass */) > 0);
        }
        else if (nextFlags & 16 /* Text */) {
            patchText(lastVNode, nextVNode, parentDom);
        }
        else if (nextFlags & 512 /* Void */) {
            nextVNode.dom = lastVNode.dom;
        }
        else {
            // Portal
            patchPortal(lastVNode, nextVNode, lifecycle, context);
        }
    }
}
function patchPortal(lastVNode, nextVNode, lifecycle, context) {
    var lastContainer = lastVNode.type;
    var nextContainer = nextVNode.type;
    var nextChildren = nextVNode.children;
    patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, lastContainer, lifecycle, context, false);
    nextVNode.dom = lastVNode.dom;
    if (lastContainer !== nextContainer && !isInvalid(nextChildren)) {
        var node = nextChildren.dom;
        lastContainer.removeChild(node);
        nextContainer.appendChild(node);
    }
}
function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG) {
    var nextTag = nextVNode.type;
    if (lastVNode.type !== nextTag) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG);
    }
    else {
        var dom = lastVNode.dom;
        var nextFlags = nextVNode.flags;
        var lastProps = lastVNode.props;
        var nextProps = nextVNode.props;
        var isFormElement = false;
        var hasControlledValue = false;
        var nextPropsOrEmpty;
        nextVNode.dom = dom;
        isSVG = isSVG || (nextFlags & 32 /* SvgElement */) > 0;
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
            nextPropsOrEmpty = nextProps || EMPTY_OBJ;
            if (nextPropsOrEmpty !== EMPTY_OBJ) {
                isFormElement = (nextFlags & 448 /* FormElement */) > 0;
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
                    // do not add a hasOwnProperty check here, it affects performance
                    if (!nextPropsOrEmpty.hasOwnProperty(prop$1) && !isNullOrUndef(lastPropsOrEmpty[prop$1])) {
                        patchProp(prop$1, lastPropsOrEmpty[prop$1], null, dom, isSVG, hasControlledValue, lastVNode);
                    }
                }
            }
        }
        var lastChildren = lastVNode.children;
        var nextChildren = nextVNode.children;
        var nextRef = nextVNode.ref;
        var lastClassName = lastVNode.className;
        var nextClassName = nextVNode.className;
        if (lastChildren !== nextChildren) {
            patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG && nextTag !== 'foreignObject');
        }
        if (isFormElement) {
            processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, false, hasControlledValue);
        }
        // inlined patchProps  -- ends --
        if (lastClassName !== nextClassName) {
            if (isNullOrUndef(nextClassName)) {
                dom.removeAttribute('class');
            }
            else if (isSVG) {
                dom.setAttribute('class', nextClassName);
            }
            else {
                dom.className = nextClassName;
            }
        }
        if (isFunction(nextRef) && lastVNode.ref !== nextRef) {
            mountRef(dom, nextRef, lifecycle);
        }
        else {
        }
    }
}
function patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, lifecycle, context, isSVG) {
    switch (lastChildFlags) {
        case 2 /* HasVNodeChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    patch(lastChildren, nextChildren, parentDOM, lifecycle, context, isSVG);
                    break;
                case 1 /* HasInvalidChildren */:
                    remove(lastChildren, parentDOM);
                    break;
                default:
                    remove(lastChildren, parentDOM);
                    mountArrayChildren(nextChildren, parentDOM, lifecycle, context, isSVG);
                    break;
            }
            break;
        case 1 /* HasInvalidChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    mount(nextChildren, parentDOM, lifecycle, context, isSVG);
                    break;
                case 1 /* HasInvalidChildren */:
                    break;
                default:
                    mountArrayChildren(nextChildren, parentDOM, lifecycle, context, isSVG);
                    break;
            }
            break;
        default:
            if (nextChildFlags & 12 /* MultipleChildren */) {
                var lastLength = lastChildren.length;
                var nextLength = nextChildren.length;
                // Fast path's for both algorithms
                if (lastLength === 0) {
                    if (nextLength > 0) {
                        mountArrayChildren(nextChildren, parentDOM, lifecycle, context, isSVG);
                    }
                }
                else if (nextLength === 0) {
                    removeAllChildren(parentDOM, lastChildren);
                }
                else if (nextChildFlags === 8 /* HasKeyedChildren */ && lastChildFlags === 8 /* HasKeyedChildren */) {
                    patchKeyedChildren(lastChildren, nextChildren, parentDOM, lifecycle, context, isSVG, lastLength, nextLength);
                }
                else {
                    patchNonKeyedChildren(lastChildren, nextChildren, parentDOM, lifecycle, context, isSVG, lastLength, nextLength);
                }
            }
            else if (nextChildFlags === 1 /* HasInvalidChildren */) {
                removeAllChildren(parentDOM, lastChildren);
            }
            else {
                removeAllChildren(parentDOM, lastChildren);
                mount(nextChildren, parentDOM, lifecycle, context, isSVG);
            }
            break;
    }
}
function updateClassComponent(instance, nextState, nextVNode, nextProps, parentDom, lifecycle, context, isSVG, force, fromSetState) {
    var lastState = instance.state;
    var lastProps = instance.props;
    nextVNode.children = instance;
    var lastInput = instance.$LI;
    var renderOutput;
    if (instance.$UN) {
        return;
    }
    if (lastProps !== nextProps || nextProps === EMPTY_OBJ) {
        if (!fromSetState && isFunction(instance.componentWillReceiveProps)) {
            instance.$BR = true;
            instance.componentWillReceiveProps(nextProps, context);
            // If instance component was removed during its own update do nothing...
            if (instance.$UN) {
                return;
            }
            instance.$BR = false;
        }
        if (instance.$PSS) {
            nextState = combineFrom(nextState, instance.$PS);
            instance.$PSS = false;
            instance.$PS = null;
        }
    }
    /* Update if scu is not defined, or it returns truthy value or force */
    var hasSCU = isFunction(instance.shouldComponentUpdate);
    if (force || !hasSCU || (hasSCU && instance.shouldComponentUpdate(nextProps, nextState, context))) {
        if (isFunction(instance.componentWillUpdate)) {
            instance.$BS = true;
            instance.componentWillUpdate(nextProps, nextState, context);
            instance.$BS = false;
        }
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
        if (isFunction(options.beforeRender)) {
            options.beforeRender(instance);
        }
        renderOutput = instance.render(nextProps, nextState, context);
        if (isFunction(options.afterRender)) {
            options.afterRender(instance);
        }
        var didUpdate = renderOutput !== NO_OP;
        var childContext;
        if (isFunction(instance.getChildContext)) {
            childContext = instance.getChildContext();
        }
        if (isNullOrUndef(childContext)) {
            childContext = context;
        }
        else {
            childContext = combineFrom(context, childContext);
        }
        instance.$CX = childContext;
        if (didUpdate) {
            var nextInput = (instance.$LI = handleComponentInput(renderOutput, nextVNode));
            patch(lastInput, nextInput, parentDom, lifecycle, childContext, isSVG);
            if (isFunction(instance.componentDidUpdate)) {
                instance.componentDidUpdate(lastProps, lastState);
            }
            if (isFunction(options.afterUpdate)) {
                options.afterUpdate(nextVNode);
            }
        }
    }
    else {
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
    }
    nextVNode.dom = instance.$LI.dom;
}
function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass) {
    var nextType = nextVNode.type;
    var lastKey = lastVNode.key;
    var nextKey = nextVNode.key;
    if (lastVNode.type !== nextType || lastKey !== nextKey) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG);
    }
    else {
        var nextProps = nextVNode.props || EMPTY_OBJ;
        if (isClass) {
            var instance = lastVNode.children;
            instance.$UPD = true;
            updateClassComponent(instance, instance.state, nextVNode, nextProps, parentDom, lifecycle, context, isSVG, false, false);
            instance.$V = nextVNode;
            instance.$UPD = false;
        }
        else {
            var shouldUpdate = true;
            var lastProps = lastVNode.props;
            var nextHooks = nextVNode.ref;
            var nextHooksDefined = !isNullOrUndef(nextHooks);
            var lastInput = lastVNode.children;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = lastInput;
            if (nextHooksDefined && isFunction(nextHooks.onComponentShouldUpdate)) {
                shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps, nextProps);
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined && isFunction(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(lastProps, nextProps);
                }
                var nextInput = nextType(nextProps, context);
                if (nextInput !== NO_OP) {
                    nextInput = handleComponentInput(nextInput, nextVNode);
                    patch(lastInput, nextInput, parentDom, lifecycle, context, isSVG);
                    nextVNode.children = nextInput;
                    nextVNode.dom = nextInput.dom;
                    if (nextHooksDefined && isFunction(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(lastProps, nextProps);
                    }
                }
            }
            else if (lastInput.flags & 14 /* Component */) {
                lastInput.parentVNode = nextVNode;
            }
        }
    }
}
function patchText(lastVNode, nextVNode, parentDom) {
    var nextText = nextVNode.children;
    var textNode = parentDom.firstChild;
    var dom;
    // Guard against external change on DOM node.
    if (isNull(textNode)) {
        parentDom.textContent = nextText;
        dom = parentDom.firstChild;
    }
    else {
        dom = lastVNode.dom;
        if (nextText !== lastVNode.children) {
            dom.nodeValue = nextText;
        }
    }
    nextVNode.dom = dom;
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, lastChildrenLength, nextChildrenLength) {
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    for (; i < commonLength; i++) {
        var nextChild = nextChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = directClone(nextChild);
        }
        patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG);
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            var nextChild$1 = nextChildren[i];
            if (nextChild$1.dom) {
                nextChild$1 = nextChildren[i] = directClone(nextChild$1);
            }
            mount(nextChild$1, dom, lifecycle, context, isSVG);
        }
    }
    else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            remove(lastChildren[i], dom);
        }
    }
}
function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, aLength, bLength) {
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var aStart = 0;
    var bStart = 0;
    var i;
    var j;
    var aNode;
    var bNode;
    var nextNode;
    var nextPos;
    var node;
    var aStartNode = a[aStart];
    var bStartNode = b[bStart];
    var aEndNode = a[aEnd];
    var bEndNode = b[bEnd];
    if (bStartNode.dom) {
        b[bStart] = bStartNode = directClone(bStartNode);
    }
    if (bEndNode.dom) {
        b[bEnd] = bEndNode = directClone(bEndNode);
    }
    // Step 1
    // tslint:disable-next-line
    outer: {
        // Sync nodes with the same key at the beginning.
        while (aStartNode.key === bStartNode.key) {
            patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG);
            aStart++;
            bStart++;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aStartNode = a[aStart];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = directClone(bStartNode);
            }
        }
        // Sync nodes with the same key at the end.
        while (aEndNode.key === bEndNode.key) {
            patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG);
            aEnd--;
            bEnd--;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aEndNode = a[aEnd];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = directClone(bEndNode);
            }
        }
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < bLength ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = directClone(node);
                }
                bStart++;
                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
            }
        }
    }
    else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            remove(a[aStart++], dom);
        }
    }
    else {
        var aLeft = aEnd - aStart + 1;
        var bLeft = bEnd - bStart + 1;
        var sources = new Array(bLeft);
        for (i = 0; i < bLeft; i++) {
            sources[i] = -1;
        }
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if (bLeft <= 4 || aLeft * bLeft <= 16) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLeft) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            }
                            else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = directClone(bNode);
                            }
                            patch(aNode, bNode, dom, lifecycle, context, isSVG);
                            patched++;
                            a[i] = null;
                            break;
                        }
                    }
                }
            }
        }
        else {
            var keyIndex = {};
            // Map keys by their index in array
            for (i = bStart; i <= bEnd; i++) {
                keyIndex[b[i].key] = i;
            }
            // Try to patch same keys
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLeft) {
                    j = keyIndex[aNode.key];
                    if (isDefined(j)) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        }
                        else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = directClone(bNode);
                        }
                        patch(aNode, bNode, dom, lifecycle, context, isSVG);
                        patched++;
                        a[i] = null;
                    }
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (aLeft === aLength && patched === 0) {
            removeAllChildren(dom, a);
            mountArrayChildren(b, dom, lifecycle, context, isSVG);
        }
        else {
            i = aLeft - patched;
            while (i > 0) {
                aNode = a[aStart++];
                if (!isNull(aNode)) {
                    remove(aNode, dom);
                    i--;
                }
            }
            if (moved) {
                var seq = lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLeft - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = directClone(node);
                        }
                        nextPos = pos + 1;
                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextPos < bLength ? b[nextPos].dom : null);
                    }
                    else if (j < 0 || i !== seq[j]) {
                        pos = i + bStart;
                        node = b[pos];
                        nextPos = pos + 1;
                        insertOrAppend(dom, node.dom, nextPos < bLength ? b[nextPos].dom : null);
                    }
                    else {
                        j--;
                    }
                }
            }
            else if (patched !== bLeft) {
                // when patched count doesn't match b length we need to insert those new ones
                // loop backwards so we can use insertBefore
                for (i = bLeft - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = directClone(node);
                        }
                        nextPos = pos + 1;
                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextPos < bLength ? b[nextPos].dom : null);
                    }
                }
            }
        }
    }
}
// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var p = arr.slice();
    var result = [0];
    var i;
    var j;
    var u;
    var v;
    var c;
    var len = arr.length;
    for (i = 0; i < len; i++) {
        var arrI = arr[i];
        if (arrI !== -1) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = ((u + v) / 2) | 0;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
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

var roots = options.roots;
var documentBody = isBrowser ? document.body : null;
function render(input, parentDom, callback) {
    if (input === NO_OP) {
        return;
    }
    var rootLen = roots.length;
    var rootInput;
    var index;
    for (index = 0; index < rootLen; index++) {
        if (roots[index] === parentDom) {
            rootInput = parentDom.$V;
            break;
        }
    }
    if (isUndefined(rootInput)) {
        if (!isInvalid(input)) {
            if (input.dom) {
                input = directClone(input);
            }
            if (isNull(parentDom.firstChild)) {
                mount(input, parentDom, LIFECYCLE, EMPTY_OBJ, false);
                parentDom.$V = input;
                roots.push(parentDom);
            }
            else {
                hydrate(input, parentDom);
            }
            rootInput = input;
        }
    }
    else {
        if (isNullOrUndef(input)) {
            remove(rootInput, parentDom);
            roots.splice(index, 1);
        }
        else {
            if (input.dom) {
                input = directClone(input);
            }
            patch(rootInput, input, parentDom, LIFECYCLE, EMPTY_OBJ, false);
            rootInput = parentDom.$V = input;
        }
    }
    if (LIFECYCLE.length > 0) {
        callAll(LIFECYCLE);
    }
    if (isFunction(callback)) {
        callback();
    }
    if (rootInput && rootInput.flags & 14 /* Component */) {
        return rootInput.children;
    }
}
function createRenderer(parentDom) {
    return function renderer(lastInput, nextInput) {
        if (!parentDom) {
            parentDom = lastInput;
        }
        render(nextInput, parentDom);
    };
}
function createPortal(children, container) {
    return createVNode(1024 /* Portal */, container, null, children, 0 /* UnknownChildren */, null, isInvalid(children) ? null : children.key, null);
}

var resolvedPromise = typeof Promise === 'undefined' ? null : Promise.resolve();
var fallbackMethod = typeof requestAnimationFrame === 'undefined' ? setTimeout : requestAnimationFrame;
function nextTick(fn) {
    if (resolvedPromise) {
        return resolvedPromise.then(fn);
    }
    return fallbackMethod(fn);
}
function queueStateChanges(component, newState, callback) {
    if (isFunction(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    var pending = component.$PS;
    if (isNullOrUndef(pending)) {
        component.$PS = newState;
    }
    else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (!component.$PSS && !component.$BR) {
        if (!component.$UPD) {
            component.$PSS = true;
            component.$UPD = true;
            applyState(component, false, callback);
            component.$UPD = false;
        }
        else {
            // Async
            var queue = component.$QU;
            if (isNull(queue)) {
                queue = component.$QU = [];
                nextTick(promiseCallback(component, queue));
            }
            if (isFunction(callback)) {
                queue.push(callback);
            }
        }
    }
    else {
        component.$PSS = true;
        if (component.$BR && isFunction(callback)) {
            LIFECYCLE.push(callback.bind(component));
        }
    }
}
function promiseCallback(component, queue) {
    return function () {
        component.$QU = null;
        component.$UPD = true;
        applyState(component, false, function () {
            for (var i = 0, len = queue.length; i < len; i++) {
                queue[i].call(component);
            }
        });
        component.$UPD = false;
    };
}
function applyState(component, force, callback) {
    if (component.$UN) {
        return;
    }
    if (force || !component.$BR) {
        component.$PSS = false;
        var pendingState = component.$PS;
        var prevState = component.state;
        var nextState = combineFrom(prevState, pendingState);
        var props = component.props;
        var context = component.context;
        component.$PS = null;
        var vNode = component.$V;
        var lastInput = component.$LI;
        var parentDom = lastInput.dom && lastInput.dom.parentNode;
        updateClassComponent(component, nextState, vNode, props, parentDom, LIFECYCLE, context, (vNode.flags & 32 /* SvgElement */) > 0, force, true);
        if (component.$UN) {
            return;
        }
        if ((component.$LI.flags & 1024 /* Portal */) === 0) {
            var dom = component.$LI.dom;
            while (!isNull((vNode = vNode.parentVNode))) {
                if ((vNode.flags & 14 /* Component */) > 0) {
                    vNode.dom = dom;
                }
            }
        }
        if (LIFECYCLE.length > 0) {
            callAll(LIFECYCLE);
        }
    }
    else {
        component.state = component.$PS;
        component.$PS = null;
    }
    if (isFunction(callback)) {
        callback.call(component);
    }
}
var Component = function Component(props, context) {
    this.state = null;
    // Internal properties
    this.$BR = false; // BLOCK RENDER
    this.$BS = true; // BLOCK STATE
    this.$PSS = false; // PENDING SET STATE
    this.$PS = null; // PENDING STATE (PARTIAL or FULL)
    this.$LI = null; // LAST INPUT
    this.$V = null; // VNODE
    this.$UN = false; // UNMOUNTED
    this.$CX = null; // CHILDCONTEXT
    this.$UPD = true; // UPDATING
    this.$QU = null; // QUEUE
    /** @type {object} */
    this.props = props || EMPTY_OBJ;
    /** @type {object} */
    this.context = context || EMPTY_OBJ; // context should not be mutable
};
Component.prototype.forceUpdate = function forceUpdate (callback) {
    if (this.$UN) {
        return;
    }
    applyState(this, true, callback);
};
Component.prototype.setState = function setState (newState, callback) {
    if (this.$UN) {
        return;
    }
    if (!this.$BS) {
        queueStateChanges(this, newState, callback);
    }
    else {
        return;
    }
};
// tslint:disable-next-line:no-empty
Component.prototype.render = function render (nextProps, nextState, nextContext) { };
// Public
Component.defaultProps = null;

var version = "4.0.4";




/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__ = __webpack_require__(143);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_index_mjs__["a"]; });


if (process.env.NODE_ENV !== 'production') {
  console.warn('You are running production build of Inferno in development mode. Use dev:module entry point.');
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IndexLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return IndexRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MemoryRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Prompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return StaticRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return matchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return withRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_history__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path_to_regexp_es6__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path_to_regexp_es6___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path_to_regexp_es6__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hoist_non_inferno_statics__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hoist_non_inferno_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hoist_non_inferno_statics__);





/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */





function __rest(s, e) {
    var t = {};
    for (var p in s) { if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        { t[p] = s[p]; } }
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        { for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) { if (e.indexOf(p[i]) < 0)
            { t[p[i]] = s[p[i]]; } } }
    return t;
}

// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== 'undefined' && window.document);
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = Array.isArray;
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isNull(o) {
    return o === null;
}
function isUndefined(o) {
    return o === void 0;
}
function isObject(o) {
    return typeof o === 'object';
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

function warning$1(condition, message) {
    if (!condition) {
        // tslint:disable-next-line:no-console
        console.error(message);
    }
}
function isValidElement(obj) {
    var isNotANullObject = isObject(obj) && isNull(obj) === false;
    if (isNotANullObject === false) {
        return false;
    }
    var flags = obj.flags;
    return (flags & (14 /* Component */ | 481 /* Element */)) > 0;
}
function invariant(condition, format, a, b, c, d, e, f) {
    if (!condition) {
        var error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        }
        else {
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
var ARR = [];
var Children = {
    forEach: function forEach(children, fn) {
        if (isNullOrUndef(children)) {
            return;
        }
        children = Children.toArray(children);
        for (var i = 0, len = children.length; i < len; i++) {
            fn(children[i], i, children);
        }
    },
    count: function count(children) {
        return Children.toArray(children).length;
    },
    only: function only(children) {
        children = Children.toArray(children);
        if (children.length !== 1) {
            throw new Error('Children.only() expects only one child.');
        }
        return children[0];
    },
    toArray: function toArray$$1(children) {
        return isNullOrUndef(children) ? [] : isArray(children) ? children : ARR.concat(children);
    }
};

/**
 * The public API for putting history on context.
 */
var Router = (function (Component$$1) {
    function Router(props, context) {
        Component$$1.call(this, props, context);
        this.state = {
            match: this.computeMatch(props.history.location.pathname)
        };
    }

    if ( Component$$1 ) Router.__proto__ = Component$$1;
    Router.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Router.prototype.constructor = Router;
    Router.prototype.getChildContext = function getChildContext () {
        return {
            router: Object.assign({}, this.context.router, { history: this.props.history, route: {
                    location: this.props.history.location,
                    match: this.state.match
                } })
        };
    };
    Router.prototype.computeMatch = function computeMatch (pathname) {
        return {
            isExact: pathname === '/',
            params: {},
            path: '/',
            url: '/'
        };
    };
    Router.prototype.componentWillMount = function componentWillMount () {
        var this$1 = this;

        var ref = this.props;
        var children = ref.children;
        var history = ref.history;
        invariant(children == null || Children.count(children) === 1, 'A <Router> may have only one child element');
        // Do this here so we can setState when a <Redirect> changes the
        // location in componentWillMount. This happens e.g. when doing
        // server rendering using a <StaticRouter>.
        this.unlisten = history.listen(function () {
            this$1.setState({
                match: this$1.computeMatch(history.location.pathname)
            });
        });
    };
    Router.prototype.componentWillReceiveProps = function componentWillReceiveProps (nextProps) {
        warning$1(this.props.history === nextProps.history, 'You cannot change <Router history>');
    };
    Router.prototype.componentWillUnmount = function componentWillUnmount () {
        this.unlisten();
    };
    Router.prototype.render = function render (props) {
        return props.children;
    };

    return Router;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["Component"]));

function addLeadingSlash(path) {
    return path.charAt(0) === '/' ? path : '/' + path;
}
// tslint:disable-next-line:no-empty
var noop = function () { };
var StaticRouter = (function (Component$$1) {
    function StaticRouter() {
        var this$1 = this;

        Component$$1.apply(this, arguments);
        this.createHref = function (path) { return addLeadingSlash(this$1.props.basename + createURL(path)); };
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
        };
        // tslint:disable-next-line:no-empty
        this.handleListen = function () { return noop; };
        // tslint:disable-next-line:no-empty
        this.handleBlock = function () { return noop; };
    }

    if ( Component$$1 ) StaticRouter.__proto__ = Component$$1;
    StaticRouter.prototype = Object.create( Component$$1 && Component$$1.prototype );
    StaticRouter.prototype.constructor = StaticRouter;
    StaticRouter.prototype.getChildContext = function getChildContext () {
        return {
            router: {
                staticContext: this.props.context
            }
        };
    };
    StaticRouter.prototype.render = function render () {
        var _a = this.props;
        var basename = _a.basename;
        var context = _a.context;
        var location = _a.location;
        var props = __rest(_a, ["basename", "context", "location"]);
        var history = {
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
        };
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["createComponentVNode"])(4 /* ComponentClass */, Router, Object.assign({}, props, { history: history }));
    };

    return StaticRouter;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["Component"]));
StaticRouter.defaultProps = {
    basename: '',
    location: '/'
};
function normalizeLocation(ref) {
    var pathname = ref.pathname; if ( pathname === void 0 ) pathname = '/';
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
    return Object.assign({}, location, { pathname: addLeadingSlash(basename) + location.pathname });
}
function stripBasename(basename, location) {
    if (!basename) {
        return location;
    }
    var base = addLeadingSlash(basename);
    if (location.pathname.indexOf(base) !== 0) {
        return location;
    }
    return Object.assign({}, location, { pathname: location.pathname.substr(base.length) });
}
function createLocation$1(location) {
    return typeof location === 'string' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_history__["parsePath"])(location) : normalizeLocation(location);
}
function createURL(location) {
    return typeof location === 'string' ? location : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_history__["createPath"])(location);
}
function staticHandler(methodName) {
    return function () {
        invariant(false, 'You cannot %s with <StaticRouter>', methodName);
    };
}

var BrowserRouter = (function (Component$$1) {
    function BrowserRouter(props, context) {
        Component$$1.call(this, props, context);
        this.history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_history__["createBrowserHistory"])(props);
    }

    if ( Component$$1 ) BrowserRouter.__proto__ = Component$$1;
    BrowserRouter.prototype = Object.create( Component$$1 && Component$$1.prototype );
    BrowserRouter.prototype.constructor = BrowserRouter;
    BrowserRouter.prototype.render = function render () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["createComponentVNode"])(4 /* ComponentClass */, Router, {
            children: this.props.children,
            history: this.history
        });
    };

    return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["Component"]));

var HashRouter = (function (Component$$1) {
    function HashRouter(props, context) {
        Component$$1.call(this, props, context);
        this.history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_history__["createHashHistory"])(props);
    }

    if ( Component$$1 ) HashRouter.__proto__ = Component$$1;
    HashRouter.prototype = Object.create( Component$$1 && Component$$1.prototype );
    HashRouter.prototype.constructor = HashRouter;
    HashRouter.prototype.render = function render () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["createComponentVNode"])(4 /* ComponentClass */, Router, {
            children: this.props.children,
            history: this.history
        });
    };

    return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["Component"]));

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;
var compilePath = function (pattern, options) {
    var cacheKey = "" + (options.end) + (options.strict) + (options.sensitive);
    var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
    if (cache[pattern]) {
        return cache[pattern];
    }
    var keys = [];
    var re = __WEBPACK_IMPORTED_MODULE_2_path_to_regexp_es6___default()(pattern, keys, options);
    var compiledPattern = { re: re, keys: keys };
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
        options = { path: options };
    }
    var path = options.path; if ( path === void 0 ) path = '/';
    var exact = options.exact; if ( exact === void 0 ) exact = false;
    var strict = options.strict; if ( strict === void 0 ) strict = false;
    var sensitive = options.sensitive; if ( sensitive === void 0 ) sensitive = false;
    var ref = compilePath(path, { end: exact, strict: strict, sensitive: sensitive });
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

var isEmptyChildren = function (children) { return Children.count(children) === 0; };
/**
 * The public API for matching a single path and rendering.
 */
var Route = (function (Component$$1) {
    function Route(props, context) {
        Component$$1.call(this, props, context);
        this.state = {
            match: this.computeMatch(props, context.router)
        };
    }

    if ( Component$$1 ) Route.__proto__ = Component$$1;
    Route.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Route.prototype.constructor = Route;
    Route.prototype.getChildContext = function getChildContext () {
        return {
            router: Object.assign({}, this.context.router, { route: {
                    location: this.props.location || this.context.router.route.location,
                    match: this.state.match
                } })
        };
    };

    Route.prototype.computeMatch = function computeMatch (ref, router) {
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
        invariant(router, 'You should not use <Route> or withRouter() outside a <Router>');
        var route = router.route;
        var pathname = (location || route.location).pathname;
        return path ? matchPath(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }) : route.match;
    };
    Route.prototype.componentWillReceiveProps = function componentWillReceiveProps (nextProps, nextContext) {
        this.setState({
            match: this.computeMatch(nextProps, nextContext.router)
        });
    };
    Route.prototype.render = function render () {
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
        var props = { match: match, location: location, history: history, staticContext: staticContext };
        if (component) {
            return match ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["createComponentVNode"])(2 /* ComponentUnknown */, component, props) : null;
        }
        if (render) {
            return match ? render(props) : null;
        }
        if (typeof children === 'function') {
            return children(props);
        }
        if (children && !isEmptyChildren(children)) {
            return Children.only(children);
        }
        return null;
    };

    return Route;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["Component"]));

var isModifiedEvent = function (event) { return Boolean(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey); };
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
        var replace = props.replace; if ( replace === void 0 ) replace = false;
        var to = props.to;
        if (replace) {
            history.replace(to);
        }
        else {
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
    var to = props.to; if ( to === void 0 ) to = '';
    var innerRef = props.innerRef;
    var rest = __rest(props, ["replace", "children", "className", "to", "innerRef"]);
    invariant(context.router, 'You should not use <Link> outside a <Router>');
    var href = context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["createVNode"])(1 /* HtmlElement */, 'a', className, children, 0 /* UnknownChildren */, Object.assign({}, rest, { href: href, onClick: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["linkEvent"])({
            context: context,
            props: props
        }, handleClick) }), null, innerRef ? function (x) { return innerRef(x); } : null);
}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
function NavLink(_a) {
    var to = _a.to;
    var exact = _a.exact;
    var strict = _a.strict;
    var onClick = _a.onClick;
    var linkLocation = _a.location;
    var activeClassName = _a.activeClassName; if ( activeClassName === void 0 ) activeClassName = 'active';
    var className = _a.className;
    var activeStyle = _a.activeStyle;
    var style = _a.style;
    var getIsActive = _a.isActive;
    var ariaCurrent = _a.ariaCurrent; if ( ariaCurrent === void 0 ) ariaCurrent = 'true';
    var rest = __rest(_a, ["to", "exact", "strict", "onClick", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "ariaCurrent"]);
    function linkComponent(ref) {
        var location = ref.location;
        var match = ref.match;

        var isActive = !!(getIsActive ? getIsActive(match, location) : match);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["createComponentVNode"])(8 /* ComponentFunction */, Link, Object.assign({ 'aria-current': isActive && ariaCurrent, className: isActive ? [className, activeClassName].filter(function (i) { return i; }).join(' ') : className, exact: exact,
            onClick: onClick, style: isActive ? Object.assign({}, style, activeStyle) : style, to: to }, rest));
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["createComponentVNode"])(4 /* ComponentClass */, Route, {
        children: linkComponent,
        exact: exact,
        location: linkLocation,
        path: typeof to === 'object' ? to.pathname : to,
        strict: strict
    });
}

/**
 * @deprecated
 */
function IndexLink(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["createComponentVNode"])(8 /* ComponentFunction */, NavLink, props);
}

/**
 * @deprecated
 */
function IndexRoute(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["createComponentVNode"])(4 /* ComponentClass */, Route, props);
}

var MemoryRouter = (function (Component$$1) {
    function MemoryRouter(props, context) {
        Component$$1.call(this, props, context);
        this.history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_history__["createMemoryHistory"])(props);
    }

    if ( Component$$1 ) MemoryRouter.__proto__ = Component$$1;
    MemoryRouter.prototype = Object.create( Component$$1 && Component$$1.prototype );
    MemoryRouter.prototype.constructor = MemoryRouter;
    MemoryRouter.prototype.render = function render () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["createComponentVNode"])(4 /* ComponentClass */, Router, {
            children: this.props.children,
            history: this.history
        });
    };

    return MemoryRouter;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["Component"]));

/**
 * The public API for rendering the first <Route> that matches.
 */
var Switch = (function (Component$$1) {
    function Switch () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) Switch.__proto__ = Component$$1;
    Switch.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Switch.prototype.constructor = Switch;

    Switch.prototype.componentWillMount = function componentWillMount () {
        invariant(this.context.router, 'You should not use <Switch> outside a <Router>');
    };
    Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps (nextProps) {
        warning$1(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');
        warning$1(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
    };
    Switch.prototype.render = function render () {
        var ref = this.context.router;
        var route = ref.route;
        var ref$1 = this.props;
        var children = ref$1.children;
        var location = this.props.location || route.location;
        var match;
        var child;
        // optimization: Better to use for loop here so we can return when match found, instead looping through everything
        Children.forEach(children, function (element) {
            if (!isValidElement(element)) {
                return;
            }
            var ref = element.props;
            var pathProp = ref.path;
            var exact = ref.exact;
            var strict = ref.strict;
            var sensitive = ref.sensitive;
            var from = ref.from;
            var path = pathProp || from;
            if (match == null) {
                child = element;
                match = path ? matchPath(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }) : route.match;
            }
        });
        return match ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["createComponentVNode"])(child.flags, child.type, combineFrom(child.props, { location: location, computedMatch: match }), null, child.ref) : null;
    };

    return Switch;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["Component"]));

/**
 * The public API for matching a single path and rendering.
 */
var Prompt = (function (Component$$1) {
    function Prompt () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) Prompt.__proto__ = Component$$1;
    Prompt.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Prompt.prototype.constructor = Prompt;

    Prompt.prototype.enable = function enable (message) {
        if (this.unblock) {
            this.unblock();
        }
        this.unblock = this.context.router.history.block(message);
    };
    Prompt.prototype.disable = function disable () {
        if (this.unblock) {
            this.unblock();
            this.unblock = null;
        }
    };
    Prompt.prototype.componentWillMount = function componentWillMount () {
        invariant(this.context.router, 'You should not use <Prompt> outside a <Router>');
        if (this.props.when) {
            this.enable(this.props.message);
        }
    };
    Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps (nextProps) {
        if (nextProps.when) {
            if (!this.props.when || this.props.message !== nextProps.message) {
                this.enable(nextProps.message);
            }
        }
        else {
            this.disable();
        }
    };
    Prompt.prototype.componentWillUnmount = function componentWillUnmount () {
        this.disable();
    };
    Prompt.prototype.render = function render () {
        return null;
    };

    return Prompt;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["Component"]));

var Redirect = (function (Component$$1) {
    function Redirect () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) Redirect.__proto__ = Component$$1;
    Redirect.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Redirect.prototype.constructor = Redirect;

    Redirect.prototype.isStatic = function isStatic () {
        return this.context.router && this.context.router.staticContext;
    };
    Redirect.prototype.componentWillMount = function componentWillMount () {
        invariant(this.context.router, 'You should not use <Redirect> outside a <Router>');
        if (this.isStatic()) {
            this.perform();
        }
    };
    Redirect.prototype.componentDidMount = function componentDidMount () {
        if (!this.isStatic()) {
            this.perform();
        }
    };
    Redirect.prototype.componentDidUpdate = function componentDidUpdate (prevProps) {
        var prevTo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_history__["createLocation"])(prevProps.to);
        var nextTo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_history__["createLocation"])(this.props.to);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_history__["locationsAreEqual"])(prevTo, nextTo)) {
            // tslint:disable-next-line:no-console
            console.error(("You tried to redirect to the same route you're currently on: \"" + (nextTo.pathname) + (nextTo.search) + "\""));
            return;
        }
        this.perform();
    };
    Redirect.prototype.perform = function perform () {
        var ref = this.context.router;
        var history = ref.history;
        var ref$1 = this.props;
        var push = ref$1.push; if ( push === void 0 ) push = false;
        var to = ref$1.to;
        if (push) {
            history.push(to);
        }
        else {
            history.replace(to);
        }
    };
    Redirect.prototype.render = function render () {
        return null;
    };

    return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_inferno__["Component"]));

/**
 * A public higher-order component to access the imperative API
 */
function withRouter(Com) {
    var C = function (props) {
        var wrappedComponentRef = props.wrappedComponentRef;
        var remainingProps = __rest(props, ["wrappedComponentRef"]);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["createComponentVNode"])(4 /* ComponentClass */, Route, {
            render: function render(routeComponentProps) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["createComponentVNode"])(2 /* ComponentUnknown */, Com, Object.assign({}, remainingProps, routeComponentProps), null, wrappedComponentRef);
            }
        });
    };
    C.displayName = "withRouter(" + (Com.displayName || Com.name) + ")";
    C.WrappedComponent = Com;
    return __WEBPACK_IMPORTED_MODULE_3_hoist_non_inferno_statics___default()(C, Com);
}




/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VNodeFlags", function() { return VNodeFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildFlags", function() { return ChildFlags; });
/* If editing these values check babel-plugin-also */
var VNodeFlags;
(function (VNodeFlags) {
    /* First set of bits define shape of vNode */
    VNodeFlags[VNodeFlags["HtmlElement"] = 1] = "HtmlElement";
    VNodeFlags[VNodeFlags["ComponentUnknown"] = 2] = "ComponentUnknown";
    VNodeFlags[VNodeFlags["ComponentClass"] = 4] = "ComponentClass";
    VNodeFlags[VNodeFlags["ComponentFunction"] = 8] = "ComponentFunction";
    VNodeFlags[VNodeFlags["Text"] = 16] = "Text";
    /* Special flags */
    VNodeFlags[VNodeFlags["SvgElement"] = 32] = "SvgElement";
    VNodeFlags[VNodeFlags["InputElement"] = 64] = "InputElement";
    VNodeFlags[VNodeFlags["TextareaElement"] = 128] = "TextareaElement";
    VNodeFlags[VNodeFlags["SelectElement"] = 256] = "SelectElement";
    VNodeFlags[VNodeFlags["Void"] = 512] = "Void";
    VNodeFlags[VNodeFlags["Portal"] = 1024] = "Portal";
    VNodeFlags[VNodeFlags["ReCreate"] = 2048] = "ReCreate";
    /* Masks */
    VNodeFlags[VNodeFlags["FormElement"] = 448] = "FormElement";
    VNodeFlags[VNodeFlags["Element"] = 481] = "Element";
    VNodeFlags[VNodeFlags["Component"] = 14] = "Component";
    VNodeFlags[VNodeFlags["VNodeShape"] = 1565] = "VNodeShape";
})(VNodeFlags || (VNodeFlags = {}));
// Combinations are not possible, its bitwise only to reduce vNode size
var ChildFlags;
(function (ChildFlags) {
    ChildFlags[ChildFlags["UnknownChildren"] = 0] = "UnknownChildren";
    /* Second set of bits define shape of children */
    ChildFlags[ChildFlags["HasInvalidChildren"] = 1] = "HasInvalidChildren";
    ChildFlags[ChildFlags["HasVNodeChildren"] = 2] = "HasVNodeChildren";
    ChildFlags[ChildFlags["HasNonKeyedChildren"] = 4] = "HasNonKeyedChildren";
    ChildFlags[ChildFlags["HasKeyedChildren"] = 8] = "HasKeyedChildren";
    ChildFlags[ChildFlags["MultipleChildren"] = 12] = "MultipleChildren";
})(ChildFlags || (ChildFlags = {}));




/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_OP", function() { return NO_OP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_MSG", function() { return ERROR_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStringOrNumber", function() { return isStringOrNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndef", function() { return isNullOrUndef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInvalid", function() { return isInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTrue", function() { return isTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return throwError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineFrom", function() { return combineFrom; });
var NO_OP = '$NO_OP';
var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== 'undefined' && window.document);
function toArray(children) {
    return isArray(children) ? children : children ? [children] : children;
}
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
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
function isDefined(o) {
    return o !== void 0;
}
function isObject(o) {
    return typeof o === 'object';
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error(("Inferno Error: " + message));
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
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VNodeFlags", function() { return VNodeFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildFlags", function() { return ChildFlags; });
/* If editing these values check babel-plugin-also */
var VNodeFlags;
(function (VNodeFlags) {
    /* First set of bits define shape of vNode */
    VNodeFlags[VNodeFlags["HtmlElement"] = 1] = "HtmlElement";
    VNodeFlags[VNodeFlags["ComponentUnknown"] = 2] = "ComponentUnknown";
    VNodeFlags[VNodeFlags["ComponentClass"] = 4] = "ComponentClass";
    VNodeFlags[VNodeFlags["ComponentFunction"] = 8] = "ComponentFunction";
    VNodeFlags[VNodeFlags["Text"] = 16] = "Text";
    /* Special flags */
    VNodeFlags[VNodeFlags["SvgElement"] = 32] = "SvgElement";
    VNodeFlags[VNodeFlags["InputElement"] = 64] = "InputElement";
    VNodeFlags[VNodeFlags["TextareaElement"] = 128] = "TextareaElement";
    VNodeFlags[VNodeFlags["SelectElement"] = 256] = "SelectElement";
    VNodeFlags[VNodeFlags["Void"] = 512] = "Void";
    VNodeFlags[VNodeFlags["Portal"] = 1024] = "Portal";
    VNodeFlags[VNodeFlags["ReCreate"] = 2048] = "ReCreate";
    /* Masks */
    VNodeFlags[VNodeFlags["FormElement"] = 448] = "FormElement";
    VNodeFlags[VNodeFlags["Element"] = 481] = "Element";
    VNodeFlags[VNodeFlags["Component"] = 14] = "Component";
    VNodeFlags[VNodeFlags["VNodeShape"] = 1565] = "VNodeShape";
})(VNodeFlags || (VNodeFlags = {}));
// Combinations are not possible, its bitwise only to reduce vNode size
var ChildFlags;
(function (ChildFlags) {
    ChildFlags[ChildFlags["UnknownChildren"] = 0] = "UnknownChildren";
    /* Second set of bits define shape of children */
    ChildFlags[ChildFlags["HasInvalidChildren"] = 1] = "HasInvalidChildren";
    ChildFlags[ChildFlags["HasVNodeChildren"] = 2] = "HasVNodeChildren";
    ChildFlags[ChildFlags["HasNonKeyedChildren"] = 4] = "HasNonKeyedChildren";
    ChildFlags[ChildFlags["HasKeyedChildren"] = 8] = "HasKeyedChildren";
    ChildFlags[ChildFlags["MultipleChildren"] = 12] = "MultipleChildren";
})(ChildFlags || (ChildFlags = {}));




/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EMPTY_OBJ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NO_OP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createComponentVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createTextVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return directClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getFlagsForElementVnode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getNumberStyleValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return linkEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return normalizeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return version; });
var NO_OP = '$NO_OP';
var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== 'undefined' && window.document);
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
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
function isDefined(o) {
    return o !== void 0;
}
function isObject(o) {
    return typeof o === 'object';
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error(("Inferno Error: " + message));
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

var keyPrefix = '$';
function getVNode(childFlags, children, className, flags, key, props, ref, type) {
    {
        return {
            childFlags: childFlags,
            children: children,
            className: className,
            dom: null,
            flags: flags,
            key: key === void 0 ? null : key,
            parentVNode: null,
            props: props === void 0 ? null : props,
            ref: ref === void 0 ? null : ref,
            type: type
        };
    }
    return {
        childFlags: childFlags,
        children: children,
        className: className,
        dom: null,
        flags: flags,
        isValidated: false,
        key: key === void 0 ? null : key,
        parentVNode: null,
        props: props === void 0 ? null : props,
        ref: ref === void 0 ? null : ref,
        type: type
    };
}
function createVNode(flags, type, className, children, childFlags, props, key, ref) {
    var childFlag = childFlags === void 0 ? 1 /* HasInvalidChildren */ : childFlags;
    var vNode = getVNode(childFlag, children, className, flags, key, props, ref, type);
    var optsVNode = options.createVNode;
    if (typeof optsVNode === 'function') {
        optsVNode(vNode);
    }
    if (childFlag === 0 /* UnknownChildren */) {
        normalizeChildren(vNode, vNode.children);
    }
    return vNode;
}
function createComponentVNode(flags, type, props, key, ref) {
    if ((flags & 2 /* ComponentUnknown */) > 0) {
        flags = isDefined(type.prototype) && isFunction(type.prototype.render) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
    }
    // set default props
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
    if ((flags & 8 /* ComponentFunction */) > 0) {
        var defaultHooks = type.defaultHooks;
        if (!isNullOrUndef(defaultHooks)) {
            if (!ref) {
                // As ref cannot be referenced from application level, we can use the same refs object
                ref = defaultHooks;
            }
            else {
                for (var prop$1 in defaultHooks) {
                    if (isUndefined(ref[prop$1])) {
                        ref[prop$1] = defaultHooks[prop$1];
                    }
                }
            }
        }
    }
    var vNode = getVNode(1 /* HasInvalidChildren */, null, null, flags, key, props, ref, type);
    var optsVNode = options.createVNode;
    if (isFunction(optsVNode)) {
        optsVNode(vNode);
    }
    return vNode;
}
function createTextVNode(text, key) {
    return getVNode(1 /* HasInvalidChildren */, isNullOrUndef(text) ? '' : text, null, 16 /* Text */, key, null, null, null);
}
function normalizeProps(vNode) {
    var props = vNode.props;
    if (props) {
        if (vNode.flags & 481 /* Element */) {
            if (isDefined(props.children) && isNullOrUndef(vNode.children)) {
                normalizeChildren(vNode, props.children);
            }
            if (isDefined(props.className)) {
                vNode.className = props.className || null;
                props.className = undefined;
            }
        }
        if (isDefined(props.key)) {
            vNode.key = props.key;
            props.key = undefined;
        }
        if (isDefined(props.ref)) {
            vNode.ref = props.ref;
            props.ref = undefined;
        }
    }
    return vNode;
}
function directClone(vNodeToClone) {
    var newVNode;
    var flags = vNodeToClone.flags;
    if (flags & 14 /* Component */) {
        var props;
        var propsToClone = vNodeToClone.props;
        if (!isNull(propsToClone)) {
            props = {};
            for (var key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
        newVNode = createComponentVNode(flags, vNodeToClone.type, props, vNodeToClone.key, vNodeToClone.ref);
    }
    else if (flags & 481 /* Element */) {
        var children = vNodeToClone.children;
        newVNode = createVNode(flags, vNodeToClone.type, vNodeToClone.className, children, 0 /* UnknownChildren */, vNodeToClone.props, vNodeToClone.key, vNodeToClone.ref);
    }
    else if (flags & 16 /* Text */) {
        newVNode = createTextVNode(vNodeToClone.children, vNodeToClone.key);
    }
    else if (flags & 1024 /* Portal */) {
        newVNode = vNodeToClone;
    }
    return newVNode;
}
function createVoidVNode() {
    return createTextVNode('', null);
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        if (!isInvalid(n)) {
            var newKey = currentKey + keyPrefix + index;
            if (isArray(n)) {
                _normalizeVNodes(n, result, 0, newKey);
            }
            else {
                if (isStringOrNumber(n)) {
                    n = createTextVNode(n, newKey);
                }
                else {
                    var oldKey = n.key;
                    var isPrefixedKey = isString(oldKey) && oldKey[0] === keyPrefix;
                    if (!isNull(n.dom) || isPrefixedKey) {
                        n = directClone(n);
                    }
                    if (isNull(oldKey) || isPrefixedKey) {
                        n.key = newKey;
                    }
                    else {
                        n.key = currentKey + oldKey;
                    }
                }
                result.push(n);
            }
        }
    }
}
function getFlagsForElementVnode(type) {
    if (type === 'svg') {
        return 32 /* SvgElement */;
    }
    if (type === 'input') {
        return 64 /* InputElement */;
    }
    if (type === 'select') {
        return 256 /* SelectElement */;
    }
    if (type === 'textarea') {
        return 128 /* TextareaElement */;
    }
    return 1 /* HtmlElement */;
}
function normalizeChildren(vNode, children) {
    var newChildren;
    var newChildFlags;
    // Don't change children to match strict equal (===) true in patching
    if (isInvalid(children)) {
        newChildFlags = 1 /* HasInvalidChildren */;
        newChildren = children;
    }
    else if (isString(children)) {
        newChildFlags = 2 /* HasVNodeChildren */;
        newChildren = createTextVNode(children);
    }
    else if (isNumber(children)) {
        newChildFlags = 2 /* HasVNodeChildren */;
        newChildren = createTextVNode(children + '');
    }
    else if (isArray(children)) {
        var len = children.length;
        if (len === 0) {
            newChildren = null;
            newChildFlags = 1 /* HasInvalidChildren */;
        }
        else {
            // we assign $ which basically means we've flagged this array for future note
            // if it comes back again, we need to clone it, as people are using it
            // in an immutable way
            // tslint:disable-next-line
            if (Object.isFrozen(children) || children['$'] === true) {
                children = children.slice();
            }
            newChildFlags = 8 /* HasKeyedChildren */;
            for (var i = 0; i < len; i++) {
                var n = children[i];
                if (isInvalid(n) || isArray(n)) {
                    newChildren = newChildren || children.slice(0, i);
                    _normalizeVNodes(children, newChildren, i, '');
                    break;
                }
                else if (isStringOrNumber(n)) {
                    newChildren = newChildren || children.slice(0, i);
                    newChildren.push(createTextVNode(n, keyPrefix + i));
                }
                else {
                    var key = n.key;
                    var isNullDom = isNull(n.dom);
                    var isNullKey = isNull(key);
                    var isPrefixed = !isNullKey && key[0] === keyPrefix;
                    if (!isNullDom || isNullKey || isPrefixed) {
                        newChildren = newChildren || children.slice(0, i);
                        if (!isNullDom || isPrefixed) {
                            n = directClone(n);
                        }
                        if (isNullKey || isPrefixed) {
                            n.key = keyPrefix + i;
                        }
                        newChildren.push(n);
                    }
                    else if (newChildren) {
                        newChildren.push(n);
                    }
                }
            }
            newChildren = newChildren || children;
            newChildren.$ = true;
        }
    }
    else {
        newChildren = children;
        if (!isNull(children.dom)) {
            newChildren = directClone(children);
        }
        newChildFlags = 2 /* HasVNodeChildren */;
    }
    vNode.children = newChildren;
    vNode.childFlags = newChildFlags;
    return vNode;
}
var options = {
    afterMount: null,
    afterRender: null,
    afterUpdate: null,
    beforeRender: null,
    beforeUnmount: null,
    createVNode: null,
    roots: []
};

/**
 * Links given data to event as first parameter
 * @param {*} data data to be linked, it will be available in function as first parameter
 * @param {Function} event Function to be called when event occurs
 * @returns {{data: *, event: Function}}
 */
function linkEvent(data, event) {
    if (isFunction(event)) {
        return { data: data, event: event };
    }
    return null; // Return null when event is invalid, to avoid creating unnecessary event handlers
}

var xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = 'http://www.w3.org/XML/1998/namespace';
var svgNS = 'http://www.w3.org/2000/svg';
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

// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
var EMPTY_OBJ = {};
var LIFECYCLE = [];
function appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
function insertOrAppend(parentDom, newNode, nextNode) {
    if (isNullOrUndef(nextNode)) {
        appendChild(parentDom, newNode);
    }
    else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(svgNS, tag);
    }
    return document.createElement(tag);
}
function replaceChild(parentDom, newDom, lastDom) {
    parentDom.replaceChild(newDom, lastDom);
}
function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
function callAll(arrayFn) {
    var listener;
    while ((listener = arrayFn.shift()) !== undefined) {
        listener();
    }
}

var attachedEventCounts = {};
var attachedEvents = {};
function handleEvent(name, nextEvent, dom) {
    var eventsLeft = attachedEventCounts[name];
    var eventsObject = dom.$EV;
    if (nextEvent) {
        if (!eventsLeft) {
            attachedEvents[name] = attachEventToDocument(name);
            attachedEventCounts[name] = 0;
        }
        if (!eventsObject) {
            eventsObject = dom.$EV = {};
        }
        if (!eventsObject[name]) {
            attachedEventCounts[name]++;
        }
        eventsObject[name] = nextEvent;
    }
    else if (eventsObject && eventsObject[name]) {
        attachedEventCounts[name]--;
        if (eventsLeft === 1) {
            document.removeEventListener(normalizeEventName(name), attachedEvents[name]);
            attachedEvents[name] = null;
        }
        eventsObject[name] = nextEvent;
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
                }
                else {
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
    this.stopImmediatePropagation();
}
function attachEventToDocument(name) {
    var docEvent = function (event) {
        var type = event.type;
        var isClick = type === 'click' || type === 'dblclick';
        if (isClick && event.button !== 0) {
            // Firefox incorrectly triggers click event for mid/right mouse buttons.
            // This bug has been active for 12 years.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=184051
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
        event.stopPropagation = stopPropagation;
        // Event data needs to be object to save reference to currentTarget getter
        var eventData = {
            dom: document
        };
        try {
            Object.defineProperty(event, 'currentTarget', {
                configurable: true,
                get: function get() {
                    return eventData.dom;
                }
            });
        }
        catch (e) {
            /* safari7 and phantomJS will crash */
        }
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
function isSamePropsInnerHTML(dom, props) {
    return Boolean(props && props.dangerouslySetInnerHTML && props.dangerouslySetInnerHTML.__html && isSameInnerHTML(dom, props.dangerouslySetInnerHTML.__html));
}

function triggerEventListener(props, methodName, e) {
    if (props[methodName]) {
        var listener = props[methodName];
        if (listener.event) {
            listener.event(listener.data, e);
        }
        else {
            listener(e);
        }
    }
    else {
        var nativeListenerName = methodName.toLowerCase();
        if (props[nativeListenerName]) {
            props[nativeListenerName](e);
        }
    }
}
function createWrappedFunction(methodName, applyValue) {
    var fnMethod = function (e) {
        e.stopPropagation();
        var vNode = this.$V;
        // If vNode is gone by the time event fires, no-op
        if (!vNode) {
            return;
        }
        var props = vNode.props || EMPTY_OBJ;
        var dom = vNode.dom;
        if (isString(methodName)) {
            triggerEventListener(props, methodName, e);
        }
        else {
            for (var i = 0; i < methodName.length; i++) {
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
    }
    else {
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
    }
    else {
        if (hasValue && dom.value !== value) {
            dom.defaultValue = value;
            dom.value = value;
        }
        else if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
}

function updateChildOptionGroup(vNode, value) {
    var type = vNode.type;
    if (type === 'optgroup') {
        var children = vNode.children;
        var childFlags = vNode.childFlags;
        if (childFlags & 12 /* MultipleChildren */) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOption(children[i], value);
            }
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            updateChildOption(children, value);
        }
    }
    else {
        updateChildOption(vNode, value);
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if ((isArray(value) && value.indexOf(props.value) !== -1) || props.value === value) {
        dom.selected = true;
    }
    else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {
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
    if ((childFlags & 1 /* HasInvalidChildren */) === 0) {
        var children = vNode.children;
        var value = nextPropsOrEmpty.value;
        if (mounting && isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        if (childFlags & 12 /* MultipleChildren */) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOptionGroup(children[i], value);
            }
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            updateChildOptionGroup(children, value);
        }
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
    }
    else if (domValue !== value) {
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
    if (flags & 64 /* InputElement */) {
        applyValueInput(nextPropsOrEmpty, dom);
    }
    else if (flags & 256 /* SelectElement */) {
        applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode);
    }
    else if (flags & 128 /* TextareaElement */) {
        applyValueTextArea(nextPropsOrEmpty, dom, mounting);
    }
    if (isControlled) {
        dom.$V = vNode;
    }
}
function addFormElementEventHandlers(flags, dom, nextPropsOrEmpty) {
    if (flags & 64 /* InputElement */) {
        inputEvents(dom, nextPropsOrEmpty);
    }
    else if (flags & 256 /* SelectElement */) {
        selectEvents(dom);
    }
    else if (flags & 128 /* TextareaElement */) {
        textAreaEvents(dom, nextPropsOrEmpty);
    }
}
function isControlledFormElement(nextPropsOrEmpty) {
    return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type) ? !isNullOrUndef(nextPropsOrEmpty.checked) : !isNullOrUndef(nextPropsOrEmpty.value);
}

function remove(vNode, parentDom) {
    unmount(vNode);
    if (!isNull(parentDom)) {
        removeChild(parentDom, vNode.dom);
        // Let carbage collector free memory
        vNode.dom = null;
    }
}
function unmount(vNode) {
    var flags = vNode.flags;
    if (flags & 481 /* Element */) {
        var ref = vNode.ref;
        var props = vNode.props;
        if (isFunction(ref)) {
            ref(null);
        }
        var children = vNode.children;
        var childFlags = vNode.childFlags;
        if (childFlags & 12 /* MultipleChildren */) {
            unmountAllChildren(children);
        }
        else if (childFlags === 2 /* HasVNodeChildren */) {
            unmount(children);
        }
        if (!isNull(props)) {
            for (var name in props) {
                switch (name) {
                    case 'onClick':
                    case 'onDblClick':
                    case 'onFocusIn':
                    case 'onFocusOut':
                    case 'onKeyDown':
                    case 'onKeyPress':
                    case 'onKeyUp':
                    case 'onMouseDown':
                    case 'onMouseMove':
                    case 'onMouseUp':
                    case 'onSubmit':
                    case 'onTouchEnd':
                    case 'onTouchMove':
                    case 'onTouchStart':
                        handleEvent(name, null, vNode.dom);
                        break;
                    default:
                        break;
                }
            }
        }
    }
    else if (flags & 14 /* Component */) {
        var instance = vNode.children;
        var ref$1 = vNode.ref;
        if (flags & 4 /* ComponentClass */) {
            if (isFunction(options.beforeUnmount)) {
                options.beforeUnmount(vNode);
            }
            if (isFunction(instance.componentWillUnmount)) {
                instance.componentWillUnmount();
            }
            if (isFunction(ref$1)) {
                ref$1(null);
            }
            instance.$UN = true;
            unmount(instance.$LI);
        }
        else {
            if (!isNullOrUndef(ref$1) && isFunction(ref$1.onComponentWillUnmount)) {
                ref$1.onComponentWillUnmount(vNode.dom, vNode.props || EMPTY_OBJ);
            }
            unmount(instance);
        }
    }
    else if (flags & 1024 /* Portal */) {
        var children$1 = vNode.children;
        if (!isNull(children$1) && isObject(children$1)) {
            remove(children$1, vNode.type);
        }
    }
}
function unmountAllChildren(children) {
    for (var i = 0, len = children.length; i < len; i++) {
        unmount(children[i]);
    }
}
function removeAllChildren(dom, children) {
    unmountAllChildren(children);
    dom.textContent = '';
}

function createLinkEvent(linkEvent, nextValue) {
    return function (e) {
        linkEvent(nextValue.data, e);
    };
}
function patchEvent(name, lastValue, nextValue, dom) {
    var nameLowerCase = name.toLowerCase();
    if (!isFunction(nextValue) && !isNullOrUndef(nextValue)) {
        var linkEvent = nextValue.event;
        if (linkEvent && isFunction(linkEvent)) {
            dom[nameLowerCase] = createLinkEvent(linkEvent, nextValue);
        }
        else {
            // Development warning
            
        }
    }
    else {
        var domEvent = dom[nameLowerCase];
        // if the function is wrapped, that means it's been controlled by a wrapper
        if (!domEvent || !domEvent.wrapped) {
            dom[nameLowerCase] = nextValue;
        }
    }
}
function getNumberStyleValue(style, value) {
    switch (style) {
        case 'animationIterationCount':
        case 'borderImageOutset':
        case 'borderImageSlice':
        case 'borderImageWidth':
        case 'boxFlex':
        case 'boxFlexGroup':
        case 'boxOrdinalGroup':
        case 'columnCount':
        case 'fillOpacity':
        case 'flex':
        case 'flexGrow':
        case 'flexNegative':
        case 'flexOrder':
        case 'flexPositive':
        case 'flexShrink':
        case 'floodOpacity':
        case 'fontWeight':
        case 'gridColumn':
        case 'gridRow':
        case 'lineClamp':
        case 'lineHeight':
        case 'opacity':
        case 'order':
        case 'orphans':
        case 'stopOpacity':
        case 'strokeDasharray':
        case 'strokeDashoffset':
        case 'strokeMiterlimit':
        case 'strokeOpacity':
        case 'strokeWidth':
        case 'tabSize':
        case 'widows':
        case 'zIndex':
        case 'zoom':
            return value;
        default:
            return value + 'px';
    }
}
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
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
                domStyle[style] = isNumber(value) ? getNumberStyleValue(style, value) : value;
            }
        }
        for (style in lastAttrValue) {
            if (isNullOrUndef(nextAttrValue[style])) {
                domStyle[style] = '';
            }
        }
    }
    else {
        for (style in nextAttrValue) {
            value = nextAttrValue[style];
            domStyle[style] = isNumber(value) ? getNumberStyleValue(style, value) : value;
        }
    }
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode) {
    switch (prop) {
        case 'onClick':
        case 'onDblClick':
        case 'onFocusIn':
        case 'onFocusOut':
        case 'onKeyDown':
        case 'onKeyPress':
        case 'onKeyUp':
        case 'onMouseDown':
        case 'onMouseMove':
        case 'onMouseUp':
        case 'onSubmit':
        case 'onTouchEnd':
        case 'onTouchMove':
        case 'onTouchStart':
            handleEvent(prop, nextValue, dom);
            break;
        case 'children':
        case 'childrenType':
        case 'className':
        case 'defaultValue':
        case 'key':
        case 'multiple':
        case 'ref':
            return;
        case 'allowfullscreen':
        case 'autoFocus':
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
            prop = prop === 'autoFocus' ? prop.toLowerCase() : prop;
            dom[prop] = !!nextValue;
            break;
        case 'defaultChecked':
        case 'value':
        case 'volume':
            if (hasControlledValue && prop === 'value') {
                return;
            }
            var value = isNullOrUndef(nextValue) ? '' : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
            break;
        case 'dangerouslySetInnerHTML':
            var lastHtml = (lastValue && lastValue.__html) || '';
            var nextHtml = (nextValue && nextValue.__html) || '';
            if (lastHtml !== nextHtml) {
                if (!isNullOrUndef(nextHtml) && !isSameInnerHTML(dom, nextHtml)) {
                    if (!isNull(lastVNode)) {
                        if (lastVNode.childFlags & 12 /* MultipleChildren */) {
                            unmountAllChildren(lastVNode.children);
                        }
                        else if (lastVNode.childFlags === 2 /* HasVNodeChildren */) {
                            unmount(lastVNode.children);
                        }
                        lastVNode.children = null;
                        lastVNode.childFlags = 1 /* HasInvalidChildren */;
                    }
                    dom.innerHTML = nextHtml;
                }
            }
            break;
        default:
            if (prop[0] === 'o' && prop[1] === 'n') {
                patchEvent(prop, lastValue, nextValue, dom);
            }
            else if (isNullOrUndef(nextValue)) {
                dom.removeAttribute(prop);
            }
            else if (prop === 'style') {
                patchStyle(lastValue, nextValue, dom);
            }
            else if (isSVG && namespaces[prop]) {
                // We optimize for NS being boolean. Its 99.9% time false
                // If we end up in this path we can read property again
                dom.setAttributeNS(namespaces[prop], prop, nextValue);
            }
            else {
                dom.setAttribute(prop, nextValue);
            }
            break;
    }
}
function mountProps(vNode, flags, props, dom, isSVG) {
    var hasControlledValue = false;
    var isFormElement = (flags & 448 /* FormElement */) > 0;
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

function createClassComponentInstance(vNode, Component, props, context) {
    var instance = new Component(props, context);
    vNode.children = instance;
    instance.$V = vNode;
    instance.$BS = false;
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    instance.$UN = false;
    if (isFunction(instance.componentWillMount)) {
        instance.$BR = true;
        instance.componentWillMount();
        if (instance.$PSS) {
            var state = instance.state;
            var pending = instance.$PS;
            if (isNull(state)) {
                instance.state = pending;
            }
            else {
                for (var key in pending) {
                    state[key] = pending[key];
                }
            }
            instance.$PSS = false;
            instance.$PS = null;
        }
        instance.$BR = false;
    }
    if (isFunction(options.beforeRender)) {
        options.beforeRender(instance);
    }
    var input = handleComponentInput(instance.render(props, instance.state, context), vNode);
    var childContext;
    if (isFunction(instance.getChildContext)) {
        childContext = instance.getChildContext();
    }
    if (isNullOrUndef(childContext)) {
        instance.$CX = context;
    }
    else {
        instance.$CX = combineFrom(context, childContext);
    }
    if (isFunction(options.afterRender)) {
        options.afterRender(instance);
    }
    instance.$LI = input;
    return instance;
}
function handleComponentInput(input, componentVNode) {
    // Development validation
    if (isInvalid(input)) {
        input = createVoidVNode();
    }
    else if (isStringOrNumber(input)) {
        input = createTextVNode(input, null);
    }
    else {
        if (input.dom) {
            input = directClone(input);
        }
        if (input.flags & 14 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = componentVNode;
        }
    }
    return input;
}

function mount(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 481 /* Element */) {
        return mountElement(vNode, parentDom, lifecycle, context, isSVG);
    }
    if (flags & 14 /* Component */) {
        return mountComponent(vNode, parentDom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    if (flags & 512 /* Void */ || flags & 16 /* Text */) {
        return mountText(vNode, parentDom);
    }
    if (flags & 1024 /* Portal */) {
        mount(vNode.children, vNode.type, lifecycle, context, false);
        return (vNode.dom = mountText(createVoidVNode(), parentDom));
    }
    // Development validation, in production we don't need to throw because it crashes anyway
    
}
function mountText(vNode, parentDom) {
    var dom = (vNode.dom = document.createTextNode(vNode.children));
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var ref = vNode.ref;
    var childFlags = vNode.childFlags;
    isSVG = isSVG || (flags & 32 /* SvgElement */) > 0;
    var dom = documentCreateElement(vNode.type, isSVG);
    vNode.dom = dom;
    if (!isNullOrUndef(className) && className !== '') {
        if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
    }
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    if ((childFlags & 1 /* HasInvalidChildren */) === 0) {
        var childrenIsSVG = isSVG === true && vNode.type !== 'foreignObject';
        if (childFlags === 2 /* HasVNodeChildren */) {
            mount(children, dom, lifecycle, context, childrenIsSVG);
        }
        else if (childFlags & 12 /* MultipleChildren */) {
            mountArrayChildren(children, dom, lifecycle, context, childrenIsSVG);
        }
    }
    if (!isNull(props)) {
        mountProps(vNode, flags, props, dom, isSVG);
    }
    if (isFunction(ref)) {
        mountRef(dom, ref, lifecycle);
    }
    return dom;
}
function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        if (!isNull(child.dom)) {
            children[i] = child = directClone(child);
        }
        mount(child, dom, lifecycle, context, isSVG);
    }
}
function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
    var dom;
    var type = vNode.type;
    var props = vNode.props || EMPTY_OBJ;
    var ref = vNode.ref;
    if (isClass) {
        var instance = createClassComponentInstance(vNode, type, props, context);
        var input = instance.$LI;
        vNode.dom = dom = mount(input, null, lifecycle, instance.$CX, isSVG);
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance.$UPD = false;
    }
    else {
        var input$1 = handleComponentInput(type(props, context), vNode);
        vNode.dom = dom = mount(input$1, null, lifecycle, context, isSVG);
        vNode.children = input$1;
        mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
    }
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function createClassMountCallback(instance, hasAfterMount, afterMount, vNode, hasDidMount) {
    return function () {
        instance.$UPD = true;
        if (hasAfterMount) {
            afterMount(vNode);
        }
        if (hasDidMount) {
            instance.componentDidMount();
        }
        instance.$UPD = false;
    };
}
function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
    if (isFunction(ref)) {
        ref(instance);
    }
    else {
        
    }
    var hasDidMount = isFunction(instance.componentDidMount);
    var afterMount = options.afterMount;
    var hasAfterMount = isFunction(afterMount);
    if (hasDidMount || hasAfterMount) {
        lifecycle.push(createClassMountCallback(instance, hasAfterMount, afterMount, vNode, hasDidMount));
    }
}
// Create did mount callback lazily to avoid creating function context if not needed
function createOnMountCallback(ref, dom, props) {
    return function () { return ref.onComponentDidMount(dom, props); };
}
function mountFunctionalComponentCallbacks(props, ref, dom, lifecycle) {
    if (!isNullOrUndef(ref)) {
        if (isFunction(ref.onComponentWillMount)) {
            ref.onComponentWillMount(props);
        }
        if (isFunction(ref.onComponentDidMount)) {
            lifecycle.push(createOnMountCallback(ref, dom, props));
        }
    }
}
function mountRef(dom, value, lifecycle) {
    lifecycle.push(function () { return value(dom); });
}

function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
    var type = vNode.type;
    var ref = vNode.ref;
    var props = vNode.props || EMPTY_OBJ;
    if (isClass) {
        var instance = createClassComponentInstance(vNode, type, props, context);
        var input = instance.$LI;
        hydrateVNode(input, dom, lifecycle, instance.$CX, isSVG);
        vNode.dom = input.dom;
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance.$UPD = false; // Mount finished allow going sync
    }
    else {
        var input$1 = handleComponentInput(type(props, context), vNode);
        hydrateVNode(input$1, dom, lifecycle, context, isSVG);
        vNode.children = input$1;
        vNode.dom = input$1.dom;
        mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
    }
}
function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var flags = vNode.flags;
    var ref = vNode.ref;
    isSVG = isSVG || (flags & 32 /* SvgElement */) > 0;
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.type) {
        var newDom = mountElement(vNode, null, lifecycle, context, isSVG);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
    }
    else {
        vNode.dom = dom;
        var childNode = dom.firstChild;
        var childFlags = vNode.childFlags;
        if ((childFlags & 1 /* HasInvalidChildren */) === 0) {
            var nextSibling = null;
            while (childNode) {
                nextSibling = childNode.nextSibling;
                if (childNode.nodeType === 8) {
                    if (childNode.data === '!') {
                        dom.replaceChild(document.createTextNode(''), childNode);
                    }
                    else {
                        dom.removeChild(childNode);
                    }
                }
                childNode = nextSibling;
            }
            childNode = dom.firstChild;
            if (childFlags === 2 /* HasVNodeChildren */) {
                if (isNull(childNode)) {
                    mount(children, dom, lifecycle, context, isSVG);
                }
                else {
                    nextSibling = childNode.nextSibling;
                    hydrateVNode(children, childNode, lifecycle, context, isSVG);
                    childNode = nextSibling;
                }
            }
            else if (childFlags & 12 /* MultipleChildren */) {
                for (var i = 0, len = children.length; i < len; i++) {
                    var child = children[i];
                    if (isNull(childNode)) {
                        mount(child, dom, lifecycle, context, isSVG);
                    }
                    else {
                        nextSibling = childNode.nextSibling;
                        hydrateVNode(child, childNode, lifecycle, context, isSVG);
                        childNode = nextSibling;
                    }
                }
            }
            // clear any other DOM nodes, there should be only a single entry for the root
            while (childNode) {
                nextSibling = childNode.nextSibling;
                dom.removeChild(childNode);
                childNode = nextSibling;
            }
        }
        else if (!isNull(dom.firstChild) && !isSamePropsInnerHTML(dom, props)) {
            dom.textContent = ''; // dom has content, but VNode has no children remove everything from DOM
            if (flags & 448 /* FormElement */) {
                // If element is form element, we need to clear defaultValue also
                dom.defaultValue = '';
            }
        }
        if (!isNull(props)) {
            mountProps(vNode, flags, props, dom, isSVG);
        }
        if (isNullOrUndef(className)) {
            if (dom.className !== '') {
                dom.removeAttribute('class');
            }
        }
        else if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
        if (isFunction(ref)) {
            mountRef(dom, ref, lifecycle);
        }
        else {
            
        }
    }
}
function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = mountText(vNode, null);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
    }
    else {
        var text = vNode.children;
        if (dom.nodeValue !== text) {
            dom.nodeValue = text;
        }
        vNode.dom = dom;
    }
}
function hydrateVNode(vNode, dom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 14 /* Component */) {
        hydrateComponent(vNode, dom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    else if (flags & 481 /* Element */) {
        hydrateElement(vNode, dom, lifecycle, context, isSVG);
    }
    else if (flags & 16 /* Text */) {
        hydrateText(vNode, dom);
    }
    else if (flags & 512 /* Void */) {
        vNode.dom = dom;
    }
    else {
        throwError();
    }
}
function hydrate(input, parentDom, callback) {
    var dom = parentDom.firstChild;
    if (!isNull(dom)) {
        if (!isInvalid(input)) {
            hydrateVNode(input, dom, LIFECYCLE, EMPTY_OBJ, false);
        }
        dom = parentDom.firstChild;
        // clear any other DOM nodes, there should be only a single entry for the root
        while ((dom = dom.nextSibling)) {
            parentDom.removeChild(dom);
        }
    }
    if (LIFECYCLE.length > 0) {
        callAll(LIFECYCLE);
    }
    if (!parentDom.$V) {
        options.roots.push(parentDom);
    }
    parentDom.$V = input;
    if (isFunction(callback)) {
        callback();
    }
}

function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG) {
    unmount(lastNode);
    replaceChild(parentDom, mount(nextNode, null, lifecycle, context, isSVG), lastNode.dom);
}
function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG) {
    if (lastVNode !== nextVNode) {
        var nextFlags = nextVNode.flags;
        if (lastVNode.flags !== nextFlags || nextFlags & 2048 /* ReCreate */) {
            replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG);
        }
        else if (nextFlags & 481 /* Element */) {
            patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG);
        }
        else if (nextFlags & 14 /* Component */) {
            patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, (nextFlags & 4 /* ComponentClass */) > 0);
        }
        else if (nextFlags & 16 /* Text */) {
            patchText(lastVNode, nextVNode, parentDom);
        }
        else if (nextFlags & 512 /* Void */) {
            nextVNode.dom = lastVNode.dom;
        }
        else {
            // Portal
            patchPortal(lastVNode, nextVNode, lifecycle, context);
        }
    }
}
function patchPortal(lastVNode, nextVNode, lifecycle, context) {
    var lastContainer = lastVNode.type;
    var nextContainer = nextVNode.type;
    var nextChildren = nextVNode.children;
    patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, lastContainer, lifecycle, context, false);
    nextVNode.dom = lastVNode.dom;
    if (lastContainer !== nextContainer && !isInvalid(nextChildren)) {
        var node = nextChildren.dom;
        lastContainer.removeChild(node);
        nextContainer.appendChild(node);
    }
}
function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG) {
    var nextTag = nextVNode.type;
    if (lastVNode.type !== nextTag) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG);
    }
    else {
        var dom = lastVNode.dom;
        var nextFlags = nextVNode.flags;
        var lastProps = lastVNode.props;
        var nextProps = nextVNode.props;
        var isFormElement = false;
        var hasControlledValue = false;
        var nextPropsOrEmpty;
        nextVNode.dom = dom;
        isSVG = isSVG || (nextFlags & 32 /* SvgElement */) > 0;
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
            nextPropsOrEmpty = nextProps || EMPTY_OBJ;
            if (nextPropsOrEmpty !== EMPTY_OBJ) {
                isFormElement = (nextFlags & 448 /* FormElement */) > 0;
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
                    // do not add a hasOwnProperty check here, it affects performance
                    if (!nextPropsOrEmpty.hasOwnProperty(prop$1) && !isNullOrUndef(lastPropsOrEmpty[prop$1])) {
                        patchProp(prop$1, lastPropsOrEmpty[prop$1], null, dom, isSVG, hasControlledValue, lastVNode);
                    }
                }
            }
        }
        var lastChildren = lastVNode.children;
        var nextChildren = nextVNode.children;
        var nextRef = nextVNode.ref;
        var lastClassName = lastVNode.className;
        var nextClassName = nextVNode.className;
        if (lastChildren !== nextChildren) {
            patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG && nextTag !== 'foreignObject');
        }
        if (isFormElement) {
            processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, false, hasControlledValue);
        }
        // inlined patchProps  -- ends --
        if (lastClassName !== nextClassName) {
            if (isNullOrUndef(nextClassName)) {
                dom.removeAttribute('class');
            }
            else if (isSVG) {
                dom.setAttribute('class', nextClassName);
            }
            else {
                dom.className = nextClassName;
            }
        }
        if (isFunction(nextRef) && lastVNode.ref !== nextRef) {
            mountRef(dom, nextRef, lifecycle);
        }
        else {
            
        }
    }
}
function patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, lifecycle, context, isSVG) {
    switch (lastChildFlags) {
        case 2 /* HasVNodeChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    patch(lastChildren, nextChildren, parentDOM, lifecycle, context, isSVG);
                    break;
                case 1 /* HasInvalidChildren */:
                    remove(lastChildren, parentDOM);
                    break;
                default:
                    remove(lastChildren, parentDOM);
                    mountArrayChildren(nextChildren, parentDOM, lifecycle, context, isSVG);
                    break;
            }
            break;
        case 1 /* HasInvalidChildren */:
            switch (nextChildFlags) {
                case 2 /* HasVNodeChildren */:
                    mount(nextChildren, parentDOM, lifecycle, context, isSVG);
                    break;
                case 1 /* HasInvalidChildren */:
                    break;
                default:
                    mountArrayChildren(nextChildren, parentDOM, lifecycle, context, isSVG);
                    break;
            }
            break;
        default:
            if (nextChildFlags & 12 /* MultipleChildren */) {
                var lastLength = lastChildren.length;
                var nextLength = nextChildren.length;
                // Fast path's for both algorithms
                if (lastLength === 0) {
                    if (nextLength > 0) {
                        mountArrayChildren(nextChildren, parentDOM, lifecycle, context, isSVG);
                    }
                }
                else if (nextLength === 0) {
                    removeAllChildren(parentDOM, lastChildren);
                }
                else {
                    if (nextChildFlags === 8 /* HasKeyedChildren */ && lastChildFlags === 8 /* HasKeyedChildren */) {
                        patchKeyedChildren(lastChildren, nextChildren, parentDOM, lifecycle, context, isSVG, lastLength, nextLength);
                    }
                    else {
                        patchNonKeyedChildren(lastChildren, nextChildren, parentDOM, lifecycle, context, isSVG, lastLength, nextLength);
                    }
                }
            }
            else if (nextChildFlags === 1 /* HasInvalidChildren */) {
                removeAllChildren(parentDOM, lastChildren);
            }
            else {
                removeAllChildren(parentDOM, lastChildren);
                mount(nextChildren, parentDOM, lifecycle, context, isSVG);
            }
            break;
    }
}
function updateClassComponent(instance, nextState, nextVNode, nextProps, parentDom, lifecycle, context, isSVG, force, fromSetState) {
    var lastState = instance.state;
    var lastProps = instance.props;
    nextVNode.children = instance;
    var lastInput = instance.$LI;
    var renderOutput;
    if (instance.$UN) {
        return;
    }
    if (lastProps !== nextProps || nextProps === EMPTY_OBJ) {
        if (!fromSetState && isFunction(instance.componentWillReceiveProps)) {
            instance.$BR = true;
            instance.componentWillReceiveProps(nextProps, context);
            // If instance component was removed during its own update do nothing...
            if (instance.$UN) {
                return;
            }
            instance.$BR = false;
        }
        if (instance.$PSS) {
            nextState = combineFrom(nextState, instance.$PS);
            instance.$PSS = false;
            instance.$PS = null;
        }
    }
    /* Update if scu is not defined, or it returns truthy value or force */
    var hasSCU = isFunction(instance.shouldComponentUpdate);
    if (force || !hasSCU || (hasSCU && instance.shouldComponentUpdate(nextProps, nextState, context))) {
        if (isFunction(instance.componentWillUpdate)) {
            instance.$BS = true;
            instance.componentWillUpdate(nextProps, nextState, context);
            instance.$BS = false;
        }
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
        if (isFunction(options.beforeRender)) {
            options.beforeRender(instance);
        }
        renderOutput = instance.render(nextProps, nextState, context);
        if (isFunction(options.afterRender)) {
            options.afterRender(instance);
        }
        var didUpdate = renderOutput !== NO_OP;
        var childContext;
        if (isFunction(instance.getChildContext)) {
            childContext = instance.getChildContext();
        }
        if (isNullOrUndef(childContext)) {
            childContext = context;
        }
        else {
            childContext = combineFrom(context, childContext);
        }
        instance.$CX = childContext;
        if (didUpdate) {
            var nextInput = (instance.$LI = handleComponentInput(renderOutput, nextVNode));
            patch(lastInput, nextInput, parentDom, lifecycle, childContext, isSVG);
            if (isFunction(instance.componentDidUpdate)) {
                instance.componentDidUpdate(lastProps, lastState);
            }
            if (isFunction(options.afterUpdate)) {
                options.afterUpdate(nextVNode);
            }
        }
    }
    else {
        instance.props = nextProps;
        instance.state = nextState;
        instance.context = context;
    }
    nextVNode.dom = instance.$LI.dom;
}
function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass) {
    var nextType = nextVNode.type;
    var lastKey = lastVNode.key;
    var nextKey = nextVNode.key;
    if (lastVNode.type !== nextType || lastKey !== nextKey) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG);
    }
    else {
        var nextProps = nextVNode.props || EMPTY_OBJ;
        if (isClass) {
            var instance = lastVNode.children;
            instance.$UPD = true;
            updateClassComponent(instance, instance.state, nextVNode, nextProps, parentDom, lifecycle, context, isSVG, false, false);
            instance.$V = nextVNode;
            instance.$UPD = false;
        }
        else {
            var shouldUpdate = true;
            var lastProps = lastVNode.props;
            var nextHooks = nextVNode.ref;
            var nextHooksDefined = !isNullOrUndef(nextHooks);
            var lastInput = lastVNode.children;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = lastInput;
            if (nextHooksDefined && isFunction(nextHooks.onComponentShouldUpdate)) {
                shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps, nextProps);
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined && isFunction(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(lastProps, nextProps);
                }
                var nextInput = nextType(nextProps, context);
                if (nextInput !== NO_OP) {
                    nextInput = handleComponentInput(nextInput, nextVNode);
                    patch(lastInput, nextInput, parentDom, lifecycle, context, isSVG);
                    nextVNode.children = nextInput;
                    nextVNode.dom = nextInput.dom;
                    if (nextHooksDefined && isFunction(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(lastProps, nextProps);
                    }
                }
            }
            else if (lastInput.flags & 14 /* Component */) {
                lastInput.parentVNode = nextVNode;
            }
        }
    }
}
function patchText(lastVNode, nextVNode, parentDom) {
    var nextText = nextVNode.children;
    var textNode = parentDom.firstChild;
    var dom;
    // Guard against external change on DOM node.
    if (isNull(textNode)) {
        parentDom.textContent = nextText;
        dom = parentDom.firstChild;
    }
    else {
        dom = lastVNode.dom;
        if (nextText !== lastVNode.children) {
            dom.nodeValue = nextText;
        }
    }
    nextVNode.dom = dom;
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, lastChildrenLength, nextChildrenLength) {
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    for (; i < commonLength; i++) {
        var nextChild = nextChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = directClone(nextChild);
        }
        patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG);
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            var nextChild$1 = nextChildren[i];
            if (nextChild$1.dom) {
                nextChild$1 = nextChildren[i] = directClone(nextChild$1);
            }
            appendChild(dom, mount(nextChild$1, null, lifecycle, context, isSVG));
        }
    }
    else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            remove(lastChildren[i], dom);
        }
    }
}
function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, aLength, bLength) {
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var aStart = 0;
    var bStart = 0;
    var i;
    var j;
    var aNode;
    var bNode;
    var nextNode;
    var nextPos;
    var node;
    var aStartNode = a[aStart];
    var bStartNode = b[bStart];
    var aEndNode = a[aEnd];
    var bEndNode = b[bEnd];
    if (bStartNode.dom) {
        b[bStart] = bStartNode = directClone(bStartNode);
    }
    if (bEndNode.dom) {
        b[bEnd] = bEndNode = directClone(bEndNode);
    }
    // Step 1
    // tslint:disable-next-line
    outer: {
        // Sync nodes with the same key at the beginning.
        while (aStartNode.key === bStartNode.key) {
            patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG);
            aStart++;
            bStart++;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aStartNode = a[aStart];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = directClone(bStartNode);
            }
        }
        // Sync nodes with the same key at the end.
        while (aEndNode.key === bEndNode.key) {
            patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG);
            aEnd--;
            bEnd--;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aEndNode = a[aEnd];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = directClone(bEndNode);
            }
        }
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < bLength ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = directClone(node);
                }
                bStart++;
                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
            }
        }
    }
    else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            remove(a[aStart++], dom);
        }
    }
    else {
        var aLeft = aEnd - aStart + 1;
        var bLeft = bEnd - bStart + 1;
        var sources = new Array(bLeft);
        for (i = 0; i < bLeft; i++) {
            sources[i] = -1;
        }
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if (bLeft <= 4 || aLeft * bLeft <= 16) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLeft) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            }
                            else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = directClone(bNode);
                            }
                            patch(aNode, bNode, dom, lifecycle, context, isSVG);
                            patched++;
                            a[i] = null;
                            break;
                        }
                    }
                }
            }
        }
        else {
            var keyIndex = {};
            // Map keys by their index in array
            for (i = bStart; i <= bEnd; i++) {
                keyIndex[b[i].key] = i;
            }
            // Try to patch same keys
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLeft) {
                    j = keyIndex[aNode.key];
                    if (isDefined(j)) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        }
                        else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = directClone(bNode);
                        }
                        patch(aNode, bNode, dom, lifecycle, context, isSVG);
                        patched++;
                        a[i] = null;
                    }
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (aLeft === aLength && patched === 0) {
            removeAllChildren(dom, a);
            mountArrayChildren(b, dom, lifecycle, context, isSVG);
        }
        else {
            i = aLeft - patched;
            while (i > 0) {
                aNode = a[aStart++];
                if (!isNull(aNode)) {
                    remove(aNode, dom);
                    i--;
                }
            }
            if (moved) {
                var seq = lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLeft - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = directClone(node);
                        }
                        nextPos = pos + 1;
                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextPos < bLength ? b[nextPos].dom : null);
                    }
                    else if (j < 0 || i !== seq[j]) {
                        pos = i + bStart;
                        node = b[pos];
                        nextPos = pos + 1;
                        insertOrAppend(dom, node.dom, nextPos < bLength ? b[nextPos].dom : null);
                    }
                    else {
                        j--;
                    }
                }
            }
            else if (patched !== bLeft) {
                // when patched count doesn't match b length we need to insert those new ones
                // loop backwards so we can use insertBefore
                for (i = bLeft - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = directClone(node);
                        }
                        nextPos = pos + 1;
                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextPos < bLength ? b[nextPos].dom : null);
                    }
                }
            }
        }
    }
}
// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var p = arr.slice();
    var result = [0];
    var i;
    var j;
    var u;
    var v;
    var c;
    var len = arr.length;
    for (i = 0; i < len; i++) {
        var arrI = arr[i];
        if (arrI !== -1) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = ((u + v) / 2) | 0;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
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

var roots = options.roots;
var documentBody = isBrowser ? document.body : null;
function render(input, parentDom, callback) {
    // Development warning
    if (input === NO_OP) {
        return;
    }
    var rootLen = roots.length;
    var rootInput;
    var index;
    for (index = 0; index < rootLen; index++) {
        if (roots[index] === parentDom) {
            rootInput = parentDom.$V;
            break;
        }
    }
    if (isUndefined(rootInput)) {
        if (!isInvalid(input)) {
            if (input.dom) {
                input = directClone(input);
            }
            if (isNull(parentDom.firstChild)) {
                mount(input, parentDom, LIFECYCLE, EMPTY_OBJ, false);
                parentDom.$V = input;
                roots.push(parentDom);
            }
            else {
                hydrate(input, parentDom);
            }
            rootInput = input;
        }
    }
    else {
        if (isNullOrUndef(input)) {
            remove(rootInput, parentDom);
            roots.splice(index, 1);
        }
        else {
            if (input.dom) {
                input = directClone(input);
            }
            patch(rootInput, input, parentDom, LIFECYCLE, EMPTY_OBJ, false);
            rootInput = parentDom.$V = input;
        }
    }
    if (LIFECYCLE.length > 0) {
        callAll(LIFECYCLE);
    }
    if (isFunction(callback)) {
        callback();
    }
    if (rootInput && rootInput.flags & 14 /* Component */) {
        return rootInput.children;
    }
}
function createRenderer(parentDom) {
    return function renderer(lastInput, nextInput) {
        if (!parentDom) {
            parentDom = lastInput;
        }
        render(nextInput, parentDom);
    };
}
function createPortal(children, container) {
    return createVNode(1024 /* Portal */, container, null, children, 0 /* UnknownChildren */, null, isInvalid(children) ? null : children.key, null);
}

var resolvedPromise = typeof Promise === 'undefined' ? null : Promise.resolve();
var fallbackMethod = typeof requestAnimationFrame === 'undefined' ? setTimeout : requestAnimationFrame;
function nextTick(fn) {
    if (resolvedPromise) {
        return resolvedPromise.then(fn);
    }
    return fallbackMethod(fn);
}
function queueStateChanges(component, newState, callback) {
    if (isFunction(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    var pending = component.$PS;
    if (isNullOrUndef(pending)) {
        component.$PS = newState;
    }
    else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (!component.$PSS && !component.$BR) {
        if (!component.$UPD) {
            component.$PSS = true;
            component.$UPD = true;
            applyState(component, false, callback);
            component.$UPD = false;
        }
        else {
            // Async
            var queue = component.$QU;
            if (isNull(queue)) {
                queue = component.$QU = [];
                nextTick(promiseCallback(component, queue));
            }
            if (isFunction(callback)) {
                queue.push(callback);
            }
        }
    }
    else {
        component.$PSS = true;
        if (component.$BR && isFunction(callback)) {
            LIFECYCLE.push(callback.bind(component));
        }
    }
}
function promiseCallback(component, queue) {
    return function () {
        component.$QU = null;
        component.$UPD = true;
        applyState(component, false, function () {
            for (var i = 0, len = queue.length; i < len; i++) {
                queue[i].call(component);
            }
        });
        component.$UPD = false;
    };
}
function applyState(component, force, callback) {
    if (component.$UN) {
        return;
    }
    if (force || !component.$BR) {
        component.$PSS = false;
        var pendingState = component.$PS;
        var prevState = component.state;
        var nextState = combineFrom(prevState, pendingState);
        var props = component.props;
        var context = component.context;
        component.$PS = null;
        var vNode = component.$V;
        var lastInput = component.$LI;
        var parentDom = lastInput.dom && lastInput.dom.parentNode;
        updateClassComponent(component, nextState, vNode, props, parentDom, LIFECYCLE, context, (vNode.flags & 32 /* SvgElement */) > 0, force, true);
        if (component.$UN) {
            return;
        }
        if ((component.$LI.flags & 1024 /* Portal */) === 0) {
            var dom = component.$LI.dom;
            while (!isNull((vNode = vNode.parentVNode))) {
                if ((vNode.flags & 14 /* Component */) > 0) {
                    vNode.dom = dom;
                }
            }
        }
        if (LIFECYCLE.length > 0) {
            callAll(LIFECYCLE);
        }
    }
    else {
        component.state = component.$PS;
        component.$PS = null;
    }
    if (isFunction(callback)) {
        callback.call(component);
    }
}
var Component = function Component(props, context) {
    this.state = null;
    // Internal properties
    this.$BR = false; // BLOCK RENDER
    this.$BS = true; // BLOCK STATE
    this.$PSS = false; // PENDING SET STATE
    this.$PS = null; // PENDING STATE (PARTIAL or FULL)
    this.$LI = null; // LAST INPUT
    this.$V = null; // VNODE
    this.$UN = false; // UNMOUNTED
    this.$CX = null; // CHILDCONTEXT
    this.$UPD = true; // UPDATING
    this.$QU = null; // QUEUE
    /** @type {object} */
    this.props = props || EMPTY_OBJ;
    /** @type {object} */
    this.context = context || EMPTY_OBJ; // context should not be mutable
};
Component.prototype.forceUpdate = function forceUpdate (callback) {
    if (this.$UN) {
        return;
    }
    applyState(this, true, callback);
};
Component.prototype.setState = function setState (newState, callback) {
    if (this.$UN) {
        return;
    }
    if (!this.$BS) {
        queueStateChanges(this, newState, callback);
    }
    else {
        // Development warning
        return;
    }
};
// tslint:disable-next-line:no-empty
Component.prototype.render = function render (nextProps, nextState, nextContext) { };
// Public
Component.defaultProps = null;

var version = "4.0.3";




/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animateModalOnRemove = animateModalOnRemove;
exports.animateModalOnAdd = animateModalOnAdd;
exports.Animated = Animated;

var _inferno = __webpack_require__(0);

var _infernoCreateElement = __webpack_require__(3);

var _utils = __webpack_require__(37);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * These are the open and close animation helpers
 */
function animateModalOnRemove(node, callback) {
  var clone = node.cloneNode(true);
  (0, _utils.setDisplay)(node, 'none !important');
  node.insertAdjacentElement('beforebegin', clone);

  (0, _utils.registerTransitionListener)(clone, function () {
    // *** Cleanup ***
    callback && callback(clone);
    clone.remove();
  });

  setTimeout(function () {
    (0, _utils.removeClassName)(clone, 'show');
  }, 5);
}

function animateModalOnAdd(node, callback) {
  (0, _utils.setDisplay)(node, 'none');
  (0, _utils.addClassName)(node, 'fade');
  (0, _utils.forceReflow)(node);
  (0, _utils.setDisplay)(node, 'block');

  (0, _utils.registerTransitionListener)([node, node.children[0]], function () {
    // *** Cleanup ***
    callback && callback(node);
  });

  (0, _utils.addClassName)(node, 'show');
}

function Animated(props) {
  var Tag = props.tag,
      children = props.children,
      attrs = _objectWithoutProperties(props, ['tag', 'children']);

  return (0, _infernoCreateElement.createElement)(Tag || 'div', attrs, children);
}

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map