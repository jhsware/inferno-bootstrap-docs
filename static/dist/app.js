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
/******/ 	return __webpack_require__(__webpack_require__.s = 103);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(33).default;
module.exports.default = module.exports;

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
	} else if ("function" === 'function' && _typeof(__webpack_require__(52)) === 'object' && __webpack_require__(52)) {
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
exports.getTetherAttachments = getTetherAttachments;
exports.getScrollbarWidth = getScrollbarWidth;
exports.setScrollbarWidth = setScrollbarWidth;
exports.isBodyOverflowing = isBodyOverflowing;
exports.getOriginalBodyPadding = getOriginalBodyPadding;
exports.conditionallyUpdateScrollbar = conditionallyUpdateScrollbar;
exports.mapToCssModules = mapToCssModules;
exports.omit = omit;
function getTetherAttachments(placement) {
  var attachments = {};
  switch (placement) {
    case 'top':
    case 'top center':
      attachments = {
        attachment: 'bottom center',
        targetAttachment: 'top center'
      };
      break;
    case 'bottom':
    case 'bottom center':
      attachments = {
        attachment: 'top center',
        targetAttachment: 'bottom center'
      };
      break;
    case 'left':
    case 'left center':
      attachments = {
        attachment: 'middle right',
        targetAttachment: 'middle left'
      };
      break;
    case 'right':
    case 'right center':
      attachments = {
        attachment: 'middle left',
        targetAttachment: 'middle right'
      };
      break;
    case 'top left':
      attachments = {
        attachment: 'bottom left',
        targetAttachment: 'top left'
      };
      break;
    case 'top right':
      attachments = {
        attachment: 'bottom right',
        targetAttachment: 'top right'
      };
      break;
    case 'bottom left':
      attachments = {
        attachment: 'top left',
        targetAttachment: 'bottom left'
      };
      break;
    case 'bottom right':
      attachments = {
        attachment: 'top right',
        targetAttachment: 'bottom right'
      };
      break;
    case 'right top':
      attachments = {
        attachment: 'top left',
        targetAttachment: 'top right'
      };
      break;
    case 'right bottom':
      attachments = {
        attachment: 'bottom left',
        targetAttachment: 'bottom right'
      };
      break;
    case 'left top':
      attachments = {
        attachment: 'top right',
        targetAttachment: 'top left'
      };
      break;
    case 'left bottom':
      attachments = {
        attachment: 'bottom right',
        targetAttachment: 'bottom left'
      };
      break;
    default:
      attachments = {
        attachment: 'top center',
        targetAttachment: 'bottom center'
      };
  }

  return attachments;
}

var tetherAttachements = exports.tetherAttachements = ['top', 'bottom', 'left', 'right', 'top left', 'top center', 'top right', 'right top', 'right middle', 'right bottom', 'bottom right', 'bottom center', 'bottom left', 'left top', 'left middle', 'left bottom'];

// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443
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
  // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L420
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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(28).default;
module.exports.default = module.exports;

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

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _infernoRouter = __webpack_require__(34);

var _prismjs = __webpack_require__(125);

var _prismjs2 = _interopRequireDefault(_prismjs);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(124);

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

      return (0, _inferno.createVNode)(2, 'div', (0, _classnames2.default)(this.props.className, "ExampleSection"), [title && (0, _inferno.createVNode)(2, 'h2', null, title), children], {
        'id': this.props.title.toLowerCase()
      });
    }
  }]);

  return Section;
}(_infernoComponent2.default);

function Stage(_ref2) {
  var children = _ref2.children;

  return (0, _inferno.createVNode)(2, 'div', 'ExampleStage', children);
}

function Scene(_ref3) {
  var children = _ref3.children;

  return (0, _inferno.createVNode)(2, 'div', 'ExampleScene', children);
}

function Narrative(_ref4) {
  var children = _ref4.children;

  return (0, _inferno.createVNode)(2, 'div', 'ExampleNarrative', children);
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
      return (0, _inferno.createVNode)(2, 'div', 'ExampleScene-Code', (0, _inferno.createVNode)(2, 'pre', null, (0, _inferno.createVNode)(2, 'code', languageCls, children, null, null, function (domNode) {
        return _this3._domNode = domNode;
      })));
    }
  }]);

  return Code;
}(_infernoComponent2.default);

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
  return (0, _inferno.createVNode)(2, 'div', 'PageMenuContainer', (0, _inferno.createVNode)(2, 'ul', 'PageMenu nav flex-column', [(0, _inferno.createVNode)(2, 'li', 'nav-item', (0, _inferno.createVNode)(2, 'h4', 'PageMenu-Header', 'Components')), (0, _inferno.createVNode)(2, 'li', 'nav-item', (0, _inferno.createVNode)(16, _infernoRouter.Link, null, null, {
    'className': 'nav-link PageLink',
    'to': '/inferno-bootstrap-docs/basic',
    children: 'Basic'
  })), (0, _inferno.createVNode)(2, 'li', 'nav-item', (0, _inferno.createVNode)(16, _infernoRouter.Link, null, null, {
    'className': 'nav-link PageLink',
    'to': '/inferno-bootstrap-docs/card',
    children: 'Card'
  })), (0, _inferno.createVNode)(2, 'li', 'nav-item', (0, _inferno.createVNode)(16, _infernoRouter.Link, null, null, {
    'className': 'nav-link PageLink',
    'to': '/inferno-bootstrap-docs/form',
    children: 'Form'
  })), (0, _inferno.createVNode)(2, 'li', 'nav-item', (0, _inferno.createVNode)(16, _infernoRouter.Link, null, null, {
    'className': 'nav-link PageLink',
    'to': '/inferno-bootstrap-docs/modal',
    children: 'Modal'
  })), (0, _inferno.createVNode)(2, 'li', 'nav-item', (0, _inferno.createVNode)(16, _infernoRouter.Link, null, null, {
    'className': 'nav-link PageLink',
    'to': '/inferno-bootstrap-docs/navigation',
    children: 'Navigation'
  })), props.pageSections.sort(function (a, b) {
    return a.title == b.title ? 0 : a.title < b.title ? -1 : 1;
  }).map(function (item) {
    return (0, _inferno.createVNode)(2, 'li', 'nav-item', (0, _inferno.createVNode)(2, 'a', 'nav-link SectionLink', item.title, {
      'href': '#' + item.anchor,
      'onClick': function onClick(e) {
        e.preventDefault();
        var el = document.getElementById(e.target.hash.split('#')[1]);
        var y = el.offsetTop;
        // smoothScrollVertTo(y, 500)
        smoothScrollVertTo(y, 500);
      }
    }));
  })]));
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
      var tmp = this.state.pageSections;
      tmp.push({ title: title, anchor: anchor });
      this.setState({
        pageSections: tmp
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var cls = {
        PageContent: true,
        'InfernoAnimation--noAnim': !this.state.active
      };

      return (0, _inferno.createVNode)(2, 'div', (0, _classnames2.default)(cls), [(0, _inferno.createVNode)(16, PageMenu, null, null, {
        'pageSections': this.state.pageSections
      }), this.props.children]);
    }
  }]);

  return Page;
}(_infernoComponent2.default);

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

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
          className = _props.className,
          cssModule = _props.cssModule,
          color = _props.color,
          outline = _props.outline,
          size = _props.size,
          Tag = _props.tag,
          getRef = _props.getRef,
          attributes = _objectWithoutProperties(_props, ['active', 'block', 'className', 'cssModule', 'color', 'outline', 'size', 'tag', 'getRef']);

      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'btn', 'btn' + (outline ? '-outline' : '') + '-' + color, size ? 'btn-' + size : false, block ? 'btn-block' : false, { active: active, disabled: this.props.disabled }), cssModule);

      if (attributes.href && Tag === 'button') {
        Tag = 'a';
      }

      return (0, _inferno.createVNode)(16, Tag, null, null, _extends({
        'type': Tag === 'button' && attributes.onClick ? 'button' : undefined
      }, attributes, {
        'className': classes,
        'onClick': this.onClick
      }), null, getRef);
    }
  }]);

  return Button;
}(_infernoComponent2.default);

Button.defaultProps = defaultProps;

exports.default = Button;

/***/ }),
/* 7 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var DropdownMenu = function DropdownMenu(props, context) {
  var className = props.className,
      cssModule = props.cssModule,
      right = props.right,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'right', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'dropdown-menu', { 'dropdown-menu-right': right }), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'tabIndex': '-1',
    'aria-hidden': !context.isOpen,
    'role': 'menu',
    'className': classes
  }));
};

DropdownMenu.defaultProps = defaultProps;

exports.default = DropdownMenu;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'ul'
};

var Nav = function Nav(props) {
  var className = props.className,
      cssModule = props.cssModule,
      tabs = props.tabs,
      pills = props.pills,
      vertical = props.vertical,
      justified = props.justified,
      navbar = props.navbar,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tabs', 'pills', 'vertical', 'justified', 'navbar', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, navbar ? 'navbar-nav' : 'nav', {
    'nav-tabs': tabs,
    'nav-pills': pills,
    'nav-justified': justified,
    'flex-column': vertical
  }), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

Nav.defaultProps = defaultProps;

exports.default = Nav;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'li'
};

var NavItem = function NavItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'nav-item'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

NavItem.defaultProps = defaultProps;

exports.default = NavItem;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _inferno = __webpack_require__(0);

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
          className = _props.className,
          cssModule = _props.cssModule,
          active = _props.active,
          Tag = _props.tag,
          getRef = _props.getRef,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'active', 'tag', 'getRef']);

      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'nav-link', {
        disabled: attributes.disabled,
        active: active
      }), cssModule);

      return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
        'onClick': this.onClick,
        'className': classes
      }), null, getRef);
    }
  }]);

  return NavLink;
}(_infernoComponent2.default);

NavLink.defaultProps = defaultProps;

exports.default = NavLink;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(32).default;
module.exports.default = module.exports;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(29);
module.exports.default = module.exports;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _infernoShared = __webpack_require__(119);

var _TetherContent = __webpack_require__(40);

var _TetherContent2 = _interopRequireDefault(_TetherContent);

var _DropdownMenu = __webpack_require__(7);

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/no-find-dom-node: 0 */
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md

/* REACT COMPAT */
// TODO: Rewrite implementation for Inferno
var ARR = [];

var Children = {
  map: function map(children, fn, ctx) {
    if ((0, _infernoShared.isNullOrUndef)(children)) {
      return children;
    }
    children = Children.toArray(children);
    if (ctx && ctx !== children) {
      fn = fn.bind(ctx);
    }
    return children.map(fn);
  },

  /*
  forEach(children, fn, ctx) {
      if (isNullOrUndef(children)) {
          return;
      }
      children = Children.toArray(children);
      if (ctx && ctx !== children) {
          fn = fn.bind(ctx);
      }
      for (let i = 0, len = children.length; i < len; i++) {
          fn(children[i], i, children);
      }
  },
  count(children) {
      children = Children.toArray(children);
      return children.length;
  },
  only(children) {
      children = Children.toArray(children);
      if (children.length !== 1) {
          throw new Error('Children.only() expects only one child.');
      }
      return children[0];
  },
  */
  toArray: function toArray(children) {
    if ((0, _infernoShared.isNullOrUndef)(children)) {
      return [];
    }
    return (0, _infernoShared.isArray)(children) ? children : ARR.concat(children);
  }
};

/* /REACT COMPAT */

var defaultProps = {
  isOpen: false,
  tag: 'div'
};

var defaultTetherConfig = {
  classPrefix: 'bs-tether',
  classes: { element: 'dropdown', enabled: 'show' },
  constraints: [{ to: 'scrollParent', attachment: 'together none' }, { to: 'window', attachment: 'together none' }]
};

var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.addEvents = _this.addEvents.bind(_this);
    _this.getTetherConfig = _this.getTetherConfig.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.removeEvents = _this.removeEvents.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        toggle: this.props.toggle,
        isOpen: this.props.isOpen
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
    key: 'getTetherTarget',
    value: function getTetherTarget() {
      var container = this._vNode.dom;

      return container.querySelector('[data-toggle="dropdown"]');
    }
  }, {
    key: 'getTetherConfig',
    value: function getTetherConfig(childProps) {
      var _this2 = this;

      var target = function target() {
        return _this2.getTetherTarget();
      };
      var vElementAttach = 'top';
      var hElementAttach = 'left';
      var vTargetAttach = 'bottom';
      var hTargetAttach = 'left';

      if (childProps.right) {
        hElementAttach = 'right';
        hTargetAttach = 'right';
      }

      if (this.props.dropup) {
        vElementAttach = 'bottom';
        vTargetAttach = 'top';
      }

      return _extends({}, defaultTetherConfig, {
        attachment: vElementAttach + ' ' + hElementAttach,
        targetAttachment: vTargetAttach + ' ' + hTargetAttach,
        target: target
      }, this.props.tether);
    }
  }, {
    key: 'addEvents',
    value: function addEvents() {
      document.addEventListener('click', this.handleDocumentClick, true);
    }
  }, {
    key: 'removeEvents',
    value: function removeEvents() {
      document.removeEventListener('click', this.handleDocumentClick, true);
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      var container = this._vNode.dom;

      if (container.contains(e.target) && container !== e.target) {
        return;
      }

      this.toggle();
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.tether) {
        return;
      }

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

      return this.props.toggle();
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this3 = this;

      var _props = this.props,
          tether = _props.tether,
          children = _props.children,
          attrs = _objectWithoutProperties(_props, ['tether', 'children']);

      attrs.toggle = this.toggle;

      return Children.map(Children.toArray(children), function (child) {
        if (tether && child.type === _DropdownMenu2.default) {
          var tetherConfig = _this3.getTetherConfig(child.props);
          return (0, _inferno.createVNode)(16, _TetherContent2.default, null, null, _extends({}, attrs, {
            'tether': tetherConfig,
            children: child
          }));
        }

        return child;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _omit = (0, _utils.omit)(this.props, ['toggle', 'tether']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          group = _omit.group,
          size = _omit.size,
          Tag = _omit.tag,
          isOpen = _omit.isOpen,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'dropup', 'group', 'size', 'tag', 'isOpen']);

      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, (_classNames = {
        'btn-group': group
      }, _defineProperty(_classNames, 'btn-group-' + size, !!size), _defineProperty(_classNames, 'dropdown', !group), _defineProperty(_classNames, 'show', isOpen), _defineProperty(_classNames, 'dropup', dropup), _classNames)), cssModule);

      return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
        'className': classes,
        children: this.renderChildren()
      }));
    }
  }]);

  return Dropdown;
}(_infernoComponent2.default);

Dropdown.defaultProps = defaultProps;

exports.default = Dropdown;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _inferno = __webpack_require__(0);

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
          className = _omit.className,
          cssModule = _omit.cssModule,
          divider = _omit.divider,
          Tag = _omit.tag,
          header = _omit.header,
          active = _omit.active,
          props = _objectWithoutProperties(_omit, ['className', 'cssModule', 'divider', 'tag', 'header', 'active']);

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

      return (0, _inferno.createVNode)(16, Tag, null, null, _extends({
        'type': Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
      }, props, {
        'tabIndex': tabIndex,
        'className': classes,
        'onClick': this.onClick
      }));
    }
  }]);

  return DropdownItem;
}(_infernoComponent2.default);

DropdownItem.defaultProps = defaultProps;

exports.default = DropdownItem;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _inferno = __webpack_require__(0);

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

      this.context.toggle();
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
        active: this.context.isOpen,
        'nav-link': nav
      }), cssModule);
      var children = props.children || (0, _inferno.createVNode)(2, 'span', 'sr-only', ariaLabel);

      var Tag = void 0;

      if (nav && !tag) {
        Tag = 'a';
        props.href = '#';
      } else if (!tag) {
        Tag = _Button2.default;
        props.color = color;
      } else {
        Tag = tag;
      }

      return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, props, {
        'className': classes,
        'onClick': this.onClick,
        'aria-haspopup': 'true',
        'aria-expanded': this.context.isOpen,
        'children': children
      }));
    }
  }]);

  return DropdownToggle;
}(_infernoComponent2.default);

DropdownToggle.defaultProps = defaultProps;

exports.default = DropdownToggle;

/***/ }),
/* 16 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'form'
};

var Form = function Form(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      getRef = props.getRef,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'getRef']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }), null, getRef);
};

Form.defaultProps = defaultProps;

exports.default = Form;

/***/ }),
/* 17 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var FormGroup = function FormGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      row = props.row,
      disabled = props.disabled,
      color = props.color,
      check = props.check,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'row', 'disabled', 'color', 'check', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, color ? 'has-' + color : false, row ? 'row' : false, check ? 'form-check' : 'form-group', check && disabled ? 'disabled' : false), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

FormGroup.defaultProps = defaultProps;

exports.default = FormGroup;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

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
          size = _props.size,
          state = _props.state,
          tag = _props.tag,
          addon = _props.addon,
          staticInput = _props.static,
          getRef = _props.getRef,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'type', 'size', 'state', 'tag', 'addon', 'static', 'getRef']);

      var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;

      var fileInput = type === 'file';
      var textareaInput = type === 'textarea';
      var selectInput = type === 'select';
      var Tag = selectInput || textareaInput ? type : 'input';

      var formControlClass = 'form-control';

      if (staticInput) {
        formControlClass = formControlClass + '-static';
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

      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, state ? 'form-control-' + state : false, size ? 'form-control-' + size : false, formControlClass), cssModule);

      if (Tag === 'input') {
        attributes.type = type;
      }

      return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
        'className': classes
      }), null, getRef);
    }
  }]);

  return Input;
}(_infernoComponent2.default);

Input.defaultProps = defaultProps;

exports.default = Input;

/***/ }),
/* 19 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'label'
};

var Label = function Label(props) {
  var className = props.className,
      cssModule = props.cssModule,
      hidden = props.hidden,
      Tag = props.tag,
      check = props.check,
      disabled = props.disabled,
      htmlFor = props.htmlFor,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'hidden', 'tag', 'check', 'disabled', 'htmlFor']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, hidden ? 'sr-only' : false, check ? 'form-check-label' : 'form-control-label', check && disabled ? 'disabled' : false), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({
    'htmlFor': htmlFor
  }, attributes, {
    'className': classes
  }));
};

Label.defaultProps = defaultProps;

exports.default = Label;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animateOnAdd = exports.animateOnRemove = undefined;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _inferno = __webpack_require__(21);

function _addClassName(node, className) {
  if (className) {
    var tmp = className.split(' ');
    for (var i = 0; i < tmp.length; i++) {
      node.classList.add(tmp[i]);
    }
  }
}

function _removeClassName(node, className) {
  if (className) {
    var tmp = className.split(' ');
    for (var i = 0; i < tmp.length; i++) {
      node.classList.remove(tmp[i]);
    }
  }
}

var animateOnRemove = exports.animateOnRemove = function animateOnRemove(component, animationName, callback) {
  var domEl = component._vNode.dom;
  // Do not animate if this class is set (should I do this by passing prop through context?)
  if (domEl.closest && domEl.closest('.InfernoAnimation--noAnim')) {
    return;
  }

  var animCls = {};
  if ((typeof animationName === 'undefined' ? 'undefined' : _typeof(animationName)) === 'object') {
    animCls = animationName;
  } else {
    animCls['start'] = animationName + '-leave';
    animCls['active'] = animationName + '-leave-active';
    animCls['end'] = animationName + '-leave-end';
  }

  // 1. Clone DOM node, inject it and hide original
  var clone = domEl.cloneNode(true);

  var height = domEl.offsetHeight;
  var width = domEl.offsetWidth;

  clone.style.height = height + 'px';
  clone.style.width = width + 'px';
  _addClassName(clone, animCls.start);

  // Leaving original element so it can be removed in the normal way
  domEl.style['display'] = 'none !important';
  domEl.insertAdjacentElement('beforebegin', clone);

  // 2. Set an animation listener, code at end
  var done = false;
  var nrofTransitionsLeft;
  var onTransitionEnd = function onTransitionEnd(event) {
    // Make sure it isn't a child that is triggering the event
    if (event && event.target !== clone) {
      return;
    }
    if (event !== undefined && nrofTransitionsLeft > 0) {
      nrofTransitionsLeft--;
      return;
    }
    if (done) return;
    done = true;

    // 5. Call callback to allow stuff to happen
    callback && callback(clone);

    // 6. Remove the element
    // Note: If I don't declare an anonymous function immediately here this callback isn't called!
    // const parent = clone.parentElement
    // parent.removeChild(clone)
    // Why does inferno use removeChild?
    clone.remove();
    // console.log('----- removed')
  };

  clone.addEventListener("transitionend", onTransitionEnd, false);
  // 3. Activate transitions
  _addClassName(clone, animCls.active);
  // The following is needed so we can prevent nested animations from playing slower
  // than parent animation causing a jump (in for example a cross-fade)
  clone.classList.add('InfernoAnimation-active');

  var cs = window.getComputedStyle(clone);
  var dur = cs.getPropertyValue('transition-duration').split(',');
  var del = cs.getPropertyValue('transition-delay').split(',');
  var animTimeout = dur.map(function (v, index) {
    return parseFloat(v) + parseFloat(del[index]);
  }).reduce(function (prev, curr) {
    return prev > curr ? prev : curr;
  }, 0);
  nrofTransitionsLeft = dur.length - 1;
  setTimeout(onTransitionEnd, Math.round(animTimeout * 1000) + 50); // Fallback if transitionend fails

  /*
  console.log('----- transition-duration', cs.getPropertyValue('transition-duration'))
  console.log('----- transition-delay', cs.getPropertyValue('transition-delay'))
  console.log('----- animTimeout', Math.round(animTimeout * 1000) + 50)
  */

  // 4. Activate target state
  setTimeout(function () {
    _addClassName(clone, animCls.end);
    _removeClassName(clone, animCls.start);
    clone.style.height = clone.style.width = '';
  }, 5);
};

var animateOnAdd = exports.animateOnAdd = function animateOnAdd(component, animationName, callback) {
  var node = component._vNode.dom;

  // Do not animate if this class is set (should I do this by passing prop through context?)
  if (node.closest && node.closest('.InfernoAnimation--noAnim')) {
    return;
  }

  var animCls = {};
  if ((typeof animationName === 'undefined' ? 'undefined' : _typeof(animationName)) === 'object') {
    animCls = animationName;
  } else {
    animCls['start'] = animationName + '-enter';
    animCls['active'] = animationName + '-enter-active';
    animCls['end'] = animationName + '-enter-end';
  }

  var isDisplayNone = window.getComputedStyle(node).getPropertyValue('display') === 'none';

  // 1. Get height and set start of animation
  var height = node.offsetHeight;
  var width = node.offsetWidth;
  _addClassName(node, animCls.start);

  // 2. Set an animation listener, code at end
  var done = false;
  var nrofTransitionsLeft;
  var onTransitionEnd = function onTransitionEnd(event) {
    // Make sure it isn't a child that is triggering the event
    if (event && event.target !== node) {
      return;
    }
    if (event !== undefined && nrofTransitionsLeft > 0) {
      nrofTransitionsLeft--;
      return;
    }
    if (done) return;
    done = true;
    // 5. Remove the element
    // Note: If I don't declare an anonymous function immediately here this callback isn't called!
    node.style.height = node.style.width = '';
    _removeClassName(node, animCls.active);
    _removeClassName(node, animCls.end);
    node.classList.remove('InfernoAnimation-active');

    // 6. Call callback to allow stuff to happen
    callback && callback(node);
  };
  node.addEventListener("transitionend", onTransitionEnd, false);
  var dummy = node.clientHeight;

  // 3. Activate transition
  _addClassName(node, animCls.active);
  // The following is needed so we can prevent nested animations from playing slower
  // than parent animation causing a jump (in for example a cross-fade)
  node.classList.add('InfernoAnimation-active');

  var cs = window.getComputedStyle(node);
  var dur = cs.getPropertyValue('transition-duration').split(',');
  var del = cs.getPropertyValue('transition-delay').split(',');
  var animTimeout = dur.map(function (v, index) {
    return parseFloat(v) + parseFloat(del[index]);
  }).reduce(function (prev, curr) {
    return prev > curr ? prev : curr;
  }, 0);
  nrofTransitionsLeft = dur.length - 1;
  setTimeout(onTransitionEnd, Math.round(animTimeout * 1000) + 50); // Fallback if transitionend fails

  /*
  console.log('----- transition-duration', cs.getPropertyValue('transition-duration'))
  console.log('----- transition-delay', cs.getPropertyValue('transition-delay'))
  console.log('----- animTimeout', Math.round(animTimeout * 1000) + 50)
  */

  // 4. Activate target state
  setTimeout(function () {
    if (!isDisplayNone) {
      node.style.height = height + 'px';
      node.style.width = width + 'px';
    }
    _addClassName(node, animCls.end);
    _removeClassName(node, animCls.start);
  }, 5);
};
//# sourceMappingURL=animatedComponent.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(109).default;
module.exports.default = module.exports;

/***/ }),
/* 22 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div',
  role: 'group'
};

var ButtonGroup = function ButtonGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      vertical = props.vertical,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'size', 'vertical', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

ButtonGroup.defaultProps = defaultProps;

exports.default = ButtonGroup;

/***/ }),
/* 23 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var Card = function Card(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      block = props.block,
      inverse = props.inverse,
      outline = props.outline,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'color', 'block', 'inverse', 'outline', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'card', inverse ? 'card-inverse' : false, block ? 'card-block' : false, color ? 'card' + (outline ? '-outline' : '') + '-' + color : false), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

Card.defaultProps = defaultProps;

exports.default = Card;

/***/ }),
/* 24 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'p'
};

var CardText = function CardText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'card-text'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

CardText.defaultProps = defaultProps;

exports.default = CardText;

/***/ }),
/* 25 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'h4'
};

var CardTitle = function CardTitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'card-title'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

CardTitle.defaultProps = defaultProps;

exports.default = CardTitle;

/***/ }),
/* 26 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var InputGroup = function InputGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      size = props.size,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'size']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'input-group', size ? 'input-group-' + size : null), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

InputGroup.defaultProps = defaultProps;

exports.default = InputGroup;

/***/ }),
/* 27 */
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

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var InputGroupButton = function InputGroupButton(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      children = props.children,
      groupClassName = props.groupClassName,
      groupAttributes = props.groupAttributes,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'children', 'groupClassName', 'groupAttributes']);

  if (typeof children === 'string') {
    var groupClasses = (0, _utils.mapToCssModules)((0, _classnames2.default)(groupClassName, 'input-group-btn'), cssModule);

    return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, groupAttributes, {
      'className': groupClasses,
      children: (0, _inferno.createVNode)(16, _Button2.default, null, null, _extends({}, attributes, {
        'className': className,
        'children': children
      }))
    }));
  }

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'input-group-btn'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes,
    'children': children
  }));
};

InputGroupButton.defaultProps = defaultProps;

exports.default = InputGroupButton;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

var inferno = __webpack_require__(0);

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
var NO_OP = "$NO_OP";
var ERROR_MSG = "a runtime error occured! Use Inferno in development environment to find the error.";
// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== "undefined" && window.document);
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = Array.isArray;
function isStringOrNumber(o) {
    var type = typeof o === 'undefined' ? 'undefined' : _typeof(o);
    return type === "string" || type === "number";
}
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
function isFunction(o) {
    return typeof o === "function";
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
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error("Inferno Error: " + message);
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

/**
 * @module Inferno-Component
 */ /** TypeDoc Comment */
// Make sure u use EMPTY_OBJ from 'inferno', otherwise it'll be a different reference
var noOp = ERROR_MSG;
if (process.env.NODE_ENV !== "production") {
    noOp = "Inferno Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op.";
}
var componentCallbackQueue = new Map();
// when a components root VNode is also a component, we can run into issues
// this will recursively look for vNode.parentNode if the VNode is a component
function updateParentComponentVNodes(vNode, dom) {
    if (vNode.flags & 28 /* Component */) {
            var parentVNode = vNode.parentVNode;
            if (parentVNode) {
                parentVNode.dom = dom;
                updateParentComponentVNodes(parentVNode, dom);
            }
        }
}
var resolvedPromise = Promise.resolve();
function addToQueue(component, force, callback) {
    var queue = componentCallbackQueue.get(component);
    if (queue === void 0) {
        queue = [];
        componentCallbackQueue.set(component, queue);
        resolvedPromise.then(function () {
            componentCallbackQueue.delete(component);
            component._updating = true;
            applyState(component, force, function () {
                for (var i = 0, len = queue.length; i < len; i++) {
                    queue[i].call(component);
                }
            });
            component._updating = false;
        });
    }
    if (!isNullOrUndef(callback)) {
        queue.push(callback);
    }
}
function queueStateChanges(component, newState, callback) {
    if (isFunction(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    var pending = component._pendingState;
    if (isNullOrUndef(pending)) {
        component._pendingState = pending = newState;
    } else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (isBrowser && !component._pendingSetState && !component._blockRender) {
        if (!component._updating) {
            component._pendingSetState = true;
            component._updating = true;
            applyState(component, false, callback);
            component._updating = false;
        } else {
            addToQueue(component, false, callback);
        }
    } else {
        var state = component.state;
        if (state === null) {
            component.state = pending;
        } else {
            for (var key in pending) {
                state[key] = pending[key];
            }
        }
        component._pendingState = null;
        if (!isNullOrUndef(callback) && component._blockRender) {
            component._lifecycle.addListener(callback.bind(component));
        }
    }
}
function applyState(component, force, callback) {
    if (component._unmounted) {
        return;
    }
    if (force || !component._blockRender) {
        component._pendingSetState = false;
        var pendingState = component._pendingState;
        var prevState = component.state;
        var nextState = combineFrom(prevState, pendingState);
        var props = component.props;
        var context = component.context;
        component._pendingState = null;
        var nextInput = component._updateComponent(prevState, nextState, props, props, context, force, true);
        var didUpdate = true;
        if (isInvalid(nextInput)) {
            nextInput = inferno.createVNode(4096 /* Void */, null);
        } else if (nextInput === NO_OP) {
            nextInput = component._lastInput;
            didUpdate = false;
        } else if (isStringOrNumber(nextInput)) {
            nextInput = inferno.createVNode(1 /* Text */, null, null, nextInput);
        } else if (isArray(nextInput)) {
            if (process.env.NODE_ENV !== "production") {
                throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
            }
            throwError();
        }
        var lastInput = component._lastInput;
        var vNode = component._vNode;
        var parentDom = lastInput.dom && lastInput.dom.parentNode || (lastInput.dom = vNode.dom);
        component._lastInput = nextInput;
        if (didUpdate) {
            var childContext;
            if (!isNullOrUndef(component.getChildContext)) {
                childContext = component.getChildContext();
            }
            if (isNullOrUndef(childContext)) {
                childContext = component._childContext;
            } else {
                childContext = combineFrom(context, childContext);
            }
            var lifeCycle = component._lifecycle;
            inferno.internal_patch(lastInput, nextInput, parentDom, lifeCycle, childContext, component._isSVG, false);
            lifeCycle.trigger();
            if (!isNullOrUndef(component.componentDidUpdate)) {
                component.componentDidUpdate(props, prevState, context);
            }
            if (!isNull(inferno.options.afterUpdate)) {
                inferno.options.afterUpdate(vNode);
            }
        }
        var dom = vNode.dom = nextInput.dom;
        if (inferno.options.findDOMNodeEnabled) {
            inferno.internal_DOMNodeMap.set(component, nextInput.dom);
        }
        updateParentComponentVNodes(vNode, dom);
    } else {
        component.state = component._pendingState;
        component._pendingState = null;
    }
    if (!isNullOrUndef(callback)) {
        callback.call(component);
    }
}
var alreadyWarned = false;
var Component = function Component(props, context) {
    this.state = null;
    this._blockRender = false;
    this._blockSetState = true;
    this._pendingSetState = false;
    this._pendingState = null;
    this._lastInput = null;
    this._vNode = null;
    this._unmounted = false;
    this._lifecycle = null;
    this._childContext = null;
    this._isSVG = false;
    this._updating = true;
    /** @type {object} */
    this.props = props || inferno.EMPTY_OBJ;
    /** @type {object} */
    this.context = context || inferno.EMPTY_OBJ; // context should not be mutable
};
Component.prototype.forceUpdate = function forceUpdate(callback) {
    if (this._unmounted || !isBrowser) {
        return;
    }
    applyState(this, true, callback);
};
Component.prototype.setState = function setState(newState, callback) {
    if (this._unmounted) {
        return;
    }
    if (!this._blockSetState) {
        queueStateChanges(this, newState, callback);
    } else {
        if (process.env.NODE_ENV !== "production") {
            throwError("cannot update state via setState() in componentWillUpdate() or constructor.");
        }
        throwError();
    }
};
Component.prototype.setStateSync = function setStateSync(newState) {
    if (process.env.NODE_ENV !== "production") {
        if (!alreadyWarned) {
            alreadyWarned = true;
            // tslint:disable-next-line:no-console
            console.warn("Inferno WARNING: setStateSync has been deprecated and will be removed in next release. Use setState instead.");
        }
    }
    this.setState(newState);
};
Component.prototype._updateComponent = function _updateComponent(prevState, nextState, prevProps, nextProps, context, force, fromSetState) {
    if (this._unmounted === true) {
        if (process.env.NODE_ENV !== "production") {
            throwError(noOp);
        }
        throwError();
    }
    if (prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ || prevState !== nextState || force) {
        if (prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ) {
            if (!isNullOrUndef(this.componentWillReceiveProps) && !fromSetState) {
                // keep a copy of state before componentWillReceiveProps
                var beforeState = combineFrom(this.state);
                this._blockRender = true;
                this.componentWillReceiveProps(nextProps, context);
                this._blockRender = false;
                var afterState = this.state;
                if (beforeState !== afterState) {
                    // if state changed in componentWillReceiveProps, reassign the beforeState
                    this.state = beforeState;
                    // set the afterState as pending state so the change gets picked up below
                    this._pendingSetState = true;
                    this._pendingState = afterState;
                }
            }
            if (this._pendingSetState) {
                nextState = combineFrom(nextState, this._pendingState);
                this._pendingSetState = false;
                this._pendingState = null;
            }
        }
        /* Update if scu is not defined, or it returns truthy value or force */
        if (force || isNullOrUndef(this.shouldComponentUpdate) || this.shouldComponentUpdate && this.shouldComponentUpdate(nextProps, nextState, context)) {
            if (!isNullOrUndef(this.componentWillUpdate)) {
                this._blockSetState = true;
                this.componentWillUpdate(nextProps, nextState, context);
                this._blockSetState = false;
            }
            this.props = nextProps;
            this.state = nextState;
            this.context = context;
            if (inferno.options.beforeRender) {
                inferno.options.beforeRender(this);
            }
            var render = this.render(nextProps, nextState, context);
            if (inferno.options.afterRender) {
                inferno.options.afterRender(this);
            }
            return render;
        } else {
            this.props = nextProps;
            this.state = nextState;
            this.context = context;
        }
    }
    return NO_OP;
};
// tslint:disable-next-line:no-empty
Component.prototype.render = function render(nextProps, nextState, nextContext) {};

exports['default'] = Component;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
    return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var inferno = __webpack_require__(11);
var Component = _interopDefault(__webpack_require__(31));

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = Array.isArray;
function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}
function isStringOrNumber(o) {
    var type = typeof o === 'undefined' ? 'undefined' : _typeof(o);
    return type === "string" || type === "number";
}
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
function isObject(o) {
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === "object";
}

/**
 * @module Inferno-Devtools
 */ /** TypeDoc Comment */
function findVNodeFromDom(vNode, dom) {
    if (!vNode) {
        var roots = inferno.options.roots;
        for (var i = 0, len = roots.length; i < len; i++) {
            var root = roots[i];
            var result = findVNodeFromDom(root.input, dom);
            if (result) {
                return result;
            }
        }
    } else {
        if (vNode.dom === dom) {
            return vNode;
        }
        var flags = vNode.flags;
        var children = vNode.children;
        if (flags & 28 /* Component */) {
                children = children._lastInput || children;
            }
        if (children) {
            if (isArray(children)) {
                for (var i$1 = 0, len$1 = children.length; i$1 < len$1; i$1++) {
                    var child = children[i$1];
                    if (child) {
                        var result$1 = findVNodeFromDom(child, dom);
                        if (result$1) {
                            return result$1;
                        }
                    }
                }
            } else if (isObject(children)) {
                var result$2 = findVNodeFromDom(children, dom);
                if (result$2) {
                    return result$2;
                }
            }
        }
    }
}
var instanceMap = new Map();
function getKeyForVNode(vNode) {
    var flags = vNode.flags;
    if (flags & 4 /* ComponentClass */) {
            return vNode.children;
        } else {
        return vNode.dom;
    }
}
function getInstanceFromVNode(vNode) {
    var key = getKeyForVNode(vNode);
    return instanceMap.get(key);
}
function createInstanceFromVNode(vNode, instance) {
    var key = getKeyForVNode(vNode);
    instanceMap.set(key, instance);
}
function deleteInstanceForVNode(vNode) {
    var key = getKeyForVNode(vNode);
    instanceMap.delete(key);
}
/**
 * Create a bridge for exposing Inferno's component tree to React DevTools.
 *
 * It creates implementations of the interfaces that ReactDOM passes to
 * devtools to enable it to query the component tree and hook into component
 * updates.
 *
 * See https://github.com/facebook/react/blob/59ff7749eda0cd858d5ee568315bcba1be75a1ca/src/renderers/dom/ReactDOM.js
 * for how ReactDOM exports its internals for use by the devtools and
 * the `attachRenderer()` function in
 * https://github.com/facebook/react-devtools/blob/e31ec5825342eda570acfc9bcb43a44258fceb28/backend/attachRenderer.js
 * for how the devtools consumes the resulting objects.
 */
function createDevToolsBridge() {
    var ComponentTree = {
        getNodeFromInstance: function getNodeFromInstance(instance) {
            return instance.node;
        },
        getClosestInstanceFromNode: function getClosestInstanceFromNode(dom) {
            var vNode = findVNodeFromDom(null, dom);
            return vNode ? updateReactComponent(vNode, null) : null;
        }
    };
    // Map of root ID (the ID is unimportant) to component instance.
    var roots = {};
    findRoots(roots);
    var Mount = {
        _instancesByReactRootID: roots,
        // tslint:disable-next-line:no-empty
        _renderNewRootComponent: function _renderNewRootComponent(instance) {}
    };
    var Reconciler = {
        // tslint:disable-next-line:no-empty
        mountComponent: function mountComponent(instance) {},
        // tslint:disable-next-line:no-empty
        performUpdateIfNecessary: function performUpdateIfNecessary(instance) {},
        // tslint:disable-next-line:no-empty
        receiveComponent: function receiveComponent(instance) {},
        // tslint:disable-next-line:no-empty
        unmountComponent: function unmountComponent(instance) {}
    };
    var queuedMountComponents = new Map();
    var queuedReceiveComponents = new Map();
    var queuedUnmountComponents = new Map();
    var queueUpdate = function queueUpdate(updater, map, component) {
        if (!map.has(component)) {
            map.set(component, true);
            requestAnimationFrame(function () {
                updater(component);
                map.delete(component);
            });
        }
    };
    var queueMountComponent = function queueMountComponent(component) {
        return queueUpdate(Reconciler.mountComponent, queuedMountComponents, component);
    };
    var queueReceiveComponent = function queueReceiveComponent(component) {
        return queueUpdate(Reconciler.receiveComponent, queuedReceiveComponents, component);
    };
    var queueUnmountComponent = function queueUnmountComponent(component) {
        return queueUpdate(Reconciler.unmountComponent, queuedUnmountComponents, component);
    };
    /** Notify devtools that a new component instance has been mounted into the DOM. */
    var componentAdded = function componentAdded(vNode) {
        var instance = updateReactComponent(vNode, null);
        if (isRootVNode(vNode)) {
            instance._rootID = nextRootKey(roots);
            roots[instance._rootID] = instance;
            Mount._renderNewRootComponent(instance);
        }
        visitNonCompositeChildren(instance, function (childInst) {
            if (childInst) {
                childInst._inDevTools = true;
                queueMountComponent(childInst);
            }
        });
        queueMountComponent(instance);
    };
    /** Notify devtools that a component has been updated with new props/state. */
    var componentUpdated = function componentUpdated(vNode) {
        var prevRenderedChildren = [];
        visitNonCompositeChildren(getInstanceFromVNode(vNode), function (childInst) {
            prevRenderedChildren.push(childInst);
        });
        // Notify devtools about updates to this component and any non-composite
        // children
        var instance = updateReactComponent(vNode, null);
        queueReceiveComponent(instance);
        visitNonCompositeChildren(instance, function (childInst) {
            if (!childInst._inDevTools) {
                // New DOM child component
                childInst._inDevTools = true;
                queueMountComponent(childInst);
            } else {
                // Updated DOM child component
                queueReceiveComponent(childInst);
            }
        });
        // For any non-composite children that were removed by the latest render,
        // remove the corresponding ReactDOMComponent-like instances and notify
        // the devtools
        prevRenderedChildren.forEach(function (childInst) {
            if (!document.body.contains(childInst.node)) {
                deleteInstanceForVNode(childInst.vNode);
                queueUnmountComponent(childInst);
            }
        });
    };
    /** Notify devtools that a component has been unmounted from the DOM. */
    var componentRemoved = function componentRemoved(vNode) {
        var instance = updateReactComponent(vNode, null);
        visitNonCompositeChildren(function (childInst) {
            deleteInstanceForVNode(childInst.vNode);
            queueUnmountComponent(childInst);
        });
        queueUnmountComponent(instance);
        deleteInstanceForVNode(vNode);
        if (instance._rootID) {
            delete roots[instance._rootID];
        }
    };
    return {
        ComponentTree: ComponentTree,
        Mount: Mount,
        Reconciler: Reconciler,
        componentAdded: componentAdded,
        componentRemoved: componentRemoved,
        componentUpdated: componentUpdated
    };
}
function isRootVNode(vNode) {
    for (var i = 0, len = inferno.options.roots.length; i < len; i++) {
        var root = inferno.options.roots[i];
        if (root.input === vNode) {
            return true;
        }
    }
}
/**
 * Update (and create if necessary) the ReactDOMComponent|ReactCompositeComponent-like
 * instance for a given Inferno component instance or DOM Node.
 */
function updateReactComponent(vNode, parentDom) {
    if (!vNode) {
        return null;
    }
    var flags = vNode.flags;
    var oldInstance = getInstanceFromVNode(vNode);
    var newInstance;
    if (flags & 28 /* Component */) {
            newInstance = createReactCompositeComponent(vNode, isUndefined(oldInstance));
        } else {
        newInstance = createReactDOMComponent(vNode, parentDom);
    }
    if (oldInstance) {
        for (var key in newInstance) {
            oldInstance[key] = newInstance[key];
        }
        return oldInstance;
    }
    createInstanceFromVNode(vNode, newInstance);
    return newInstance;
}
function isInvalidChild(child) {
    return isInvalid(child) || child === "";
}
function normalizeChildren(children, dom) {
    if (isArray(children)) {
        return children.filter(function (child) {
            return !isInvalidChild(child);
        }).map(function (child) {
            return updateReactComponent(child, dom);
        });
    } else {
        return !(isInvalidChild(children) || children === "") ? [updateReactComponent(children, dom)] : [];
    }
}
/**
 * Create a ReactDOMComponent-compatible object for a given DOM node rendered
 * by Inferno.
 *
 * This implements the subset of the ReactDOMComponent interface that
 * React DevTools requires in order to display DOM nodes in the inspector with
 * the correct type and properties.
 */
function createReactDOMComponent(vNode, parentDom) {
    var flags = vNode.flags;
    if (flags & 4096 /* Void */) {
            return null;
        }
    var type = vNode.type;
    var children = vNode.children === 0 ? vNode.children.toString() : vNode.children;
    var props = vNode.props;
    var dom = vNode.dom;
    var isText = flags & 1 /* Text */ || isStringOrNumber(vNode);
    return {
        _currentElement: isText ? children || vNode : {
            props: props,
            type: type
        },
        _inDevTools: false,
        _renderedChildren: !isText && normalizeChildren(children, dom),
        _stringText: isText ? (children || vNode).toString() : null,
        node: dom || parentDom,
        vNode: vNode
    };
}
function normalizeKey(key) {
    if (key && key[0] === ".") {
        return null;
    }
}
/**
 * Return a ReactCompositeComponent-compatible object for a given Inferno
 * component instance.
 *
 * This implements the subset of the ReactCompositeComponent interface that
 * the DevTools requires in order to walk the component tree and inspect the
 * component's properties.
 *
 * See https://github.com/facebook/react-devtools/blob/e31ec5825342eda570acfc9bcb43a44258fceb28/backend/getData.js
 */
function createReactCompositeComponent(vNode, isFirstCreation) {
    var type = vNode.type;
    var instance = vNode.children;
    var lastInput = instance._lastInput || instance;
    var dom = vNode.dom;
    var compositeComponent = {
        _currentElement: {
            key: normalizeKey(vNode.key),
            props: vNode.props,
            ref: null,
            type: type
        },
        _instance: instance,
        _renderedComponent: updateReactComponent(lastInput, dom),
        getName: function getName() {
            return typeName(type);
        },
        node: dom,
        props: instance.props,
        setState: instance.setState.bind(instance),
        state: instance.state,
        vNode: vNode
    };
    if (isFirstCreation) {
        var forceInstanceUpdate = instance.forceUpdate.bind(instance); // Save off for use below.
        instance.forceUpdate = function () {
            instance.props = vNode.props = Object.assign(
            // These are the regular Inferno props.
            instance.props,
            // This is what gets updated by the React devtools when props are edited.
            compositeComponent._currentElement.props);
            forceInstanceUpdate();
        };
    }
    return compositeComponent;
}
function nextRootKey(roots) {
    return "." + Object.keys(roots).length;
}
/**
 * Visit all child instances of a ReactCompositeComponent-like object that are
 * not composite components (ie. they represent DOM elements or text)
 */
function visitNonCompositeChildren(component, visitor) {
    if (component._renderedComponent) {
        if (!component._renderedComponent._component) {
            visitor(component._renderedComponent);
            visitNonCompositeChildren(component._renderedComponent, visitor);
        }
    } else if (component._renderedChildren) {
        component._renderedChildren.forEach(function (child) {
            if (child) {
                visitor(child);
                if (!child._component) {
                    visitNonCompositeChildren(child, visitor);
                }
            }
        });
    }
}
/**
 * Return the name of a component created by a `ReactElement`-like object.
 */
function typeName(type) {
    if (typeof type === "function") {
        return type.displayName || type.name;
    }
    return type;
}
/**
 * Find all root component instances rendered by Inferno in `node`'s children
 * and add them to the `roots` map.
 */
function findRoots(roots) {
    inferno.options.roots.forEach(function (root) {
        roots[nextRootKey(roots)] = updateReactComponent(root.input, null);
    });
}

/**
 * @module Inferno-Devtools
 */ /** TypeDoc Comment */
var functionalComponentWrappers = new Map();
function wrapFunctionalComponent(vNode) {
    var originalRender = vNode.type;
    var name = vNode.type.name || "Function (anonymous)";
    var wrappers = functionalComponentWrappers;
    if (!wrappers.has(originalRender)) {
        var wrapper = function (Component$$1) {
            function wrapper() {
                Component$$1.apply(this, arguments);
            }

            if (Component$$1) wrapper.__proto__ = Component$$1;
            wrapper.prototype = Object.create(Component$$1 && Component$$1.prototype);
            wrapper.prototype.constructor = wrapper;

            wrapper.prototype.render = function render(props, state, context) {
                return originalRender(props, context);
            };

            return wrapper;
        }(Component);
        // Expose the original component name. React Dev Tools will use
        // this property if it exists or fall back to Function.name
        // otherwise.
        /* tslint:disable */
        wrapper["displayName"] = name;
        /* tslint:enable */
        wrappers.set(originalRender, wrapper);
    }
    vNode.type = wrappers.get(originalRender);
    vNode.type.defaultProps = originalRender.defaultProps;
    vNode.ref = null;
    vNode.flags = 4 /* ComponentClass */;
}
// Credit: this based on on the great work done with Preact and its devtools
// https://github.com/developit/preact/blob/master/devtools/devtools.js
function initDevTools() {
    /* tslint:disable */
    if (typeof window["__REACT_DEVTOOLS_GLOBAL_HOOK__"] === "undefined") {
        /* tslint:enable */
        // React DevTools are not installed
        return;
    }
    var nextVNode = inferno.options.createVNode;
    inferno.options.createVNode = function (vNode) {
        var flags = vNode.flags;
        if (flags & 28 /* Component */ && !isStatefulComponent(vNode.type)) {
            wrapFunctionalComponent(vNode);
        }
        if (nextVNode) {
            return nextVNode(vNode);
        }
    };
    // Notify devtools when preact components are mounted, updated or unmounted
    var bridge = createDevToolsBridge();
    var nextAfterMount = inferno.options.afterMount;
    inferno.options.afterMount = function (vNode) {
        bridge.componentAdded(vNode);
        if (nextAfterMount) {
            nextAfterMount(vNode);
        }
    };
    var nextAfterUpdate = inferno.options.afterUpdate;
    inferno.options.afterUpdate = function (vNode) {
        bridge.componentUpdated(vNode);
        if (nextAfterUpdate) {
            nextAfterUpdate(vNode);
        }
    };
    var nextBeforeUnmount = inferno.options.beforeUnmount;
    inferno.options.beforeUnmount = function (vNode) {
        bridge.componentRemoved(vNode);
        if (nextBeforeUnmount) {
            nextBeforeUnmount(vNode);
        }
    };
    // Notify devtools about this instance of "React"
    /* tslint:disable */
    window["__REACT_DEVTOOLS_GLOBAL_HOOK__"].inject(bridge);
    /* tslint:enable */
    return function () {
        inferno.options.afterMount = nextAfterMount;
        inferno.options.afterUpdate = nextAfterUpdate;
        inferno.options.beforeUnmount = nextBeforeUnmount;
    };
}

/**
 * @module Inferno-Devtools
 */ /** TypeDoc Comment */
initDevTools();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

var inferno = __webpack_require__(11);

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
var NO_OP = "$NO_OP";
var ERROR_MSG = "a runtime error occured! Use Inferno in development environment to find the error.";
// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== "undefined" && window.document);
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = Array.isArray;
function isStringOrNumber(o) {
    var type = typeof o === 'undefined' ? 'undefined' : _typeof(o);
    return type === "string" || type === "number";
}
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
function isFunction(o) {
    return typeof o === "function";
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
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error("Inferno Error: " + message);
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

/**
 * @module Inferno-Component
 */ /** TypeDoc Comment */
// Make sure u use EMPTY_OBJ from 'inferno', otherwise it'll be a different reference
var noOp = ERROR_MSG;
if (process.env.NODE_ENV !== "production") {
    noOp = "Inferno Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op.";
}
var componentCallbackQueue = new Map();
// when a components root VNode is also a component, we can run into issues
// this will recursively look for vNode.parentNode if the VNode is a component
function updateParentComponentVNodes(vNode, dom) {
    if (vNode.flags & 28 /* Component */) {
            var parentVNode = vNode.parentVNode;
            if (parentVNode) {
                parentVNode.dom = dom;
                updateParentComponentVNodes(parentVNode, dom);
            }
        }
}
var resolvedPromise = Promise.resolve();
function addToQueue(component, force, callback) {
    var queue = componentCallbackQueue.get(component);
    if (queue === void 0) {
        queue = [];
        componentCallbackQueue.set(component, queue);
        resolvedPromise.then(function () {
            componentCallbackQueue.delete(component);
            component._updating = true;
            applyState(component, force, function () {
                for (var i = 0, len = queue.length; i < len; i++) {
                    queue[i].call(component);
                }
            });
            component._updating = false;
        });
    }
    if (!isNullOrUndef(callback)) {
        queue.push(callback);
    }
}
function queueStateChanges(component, newState, callback) {
    if (isFunction(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    var pending = component._pendingState;
    if (isNullOrUndef(pending)) {
        component._pendingState = pending = newState;
    } else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (isBrowser && !component._pendingSetState && !component._blockRender) {
        if (!component._updating) {
            component._pendingSetState = true;
            component._updating = true;
            applyState(component, false, callback);
            component._updating = false;
        } else {
            addToQueue(component, false, callback);
        }
    } else {
        var state = component.state;
        if (state === null) {
            component.state = pending;
        } else {
            for (var key in pending) {
                state[key] = pending[key];
            }
        }
        component._pendingState = null;
        if (!isNullOrUndef(callback) && component._blockRender) {
            component._lifecycle.addListener(callback.bind(component));
        }
    }
}
function applyState(component, force, callback) {
    if (component._unmounted) {
        return;
    }
    if (force || !component._blockRender) {
        component._pendingSetState = false;
        var pendingState = component._pendingState;
        var prevState = component.state;
        var nextState = combineFrom(prevState, pendingState);
        var props = component.props;
        var context = component.context;
        component._pendingState = null;
        var nextInput = component._updateComponent(prevState, nextState, props, props, context, force, true);
        var didUpdate = true;
        if (isInvalid(nextInput)) {
            nextInput = inferno.createVNode(4096 /* Void */, null);
        } else if (nextInput === NO_OP) {
            nextInput = component._lastInput;
            didUpdate = false;
        } else if (isStringOrNumber(nextInput)) {
            nextInput = inferno.createVNode(1 /* Text */, null, null, nextInput);
        } else if (isArray(nextInput)) {
            if (process.env.NODE_ENV !== "production") {
                throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
            }
            throwError();
        }
        var lastInput = component._lastInput;
        var vNode = component._vNode;
        var parentDom = lastInput.dom && lastInput.dom.parentNode || (lastInput.dom = vNode.dom);
        component._lastInput = nextInput;
        if (didUpdate) {
            var childContext;
            if (!isNullOrUndef(component.getChildContext)) {
                childContext = component.getChildContext();
            }
            if (isNullOrUndef(childContext)) {
                childContext = component._childContext;
            } else {
                childContext = combineFrom(context, childContext);
            }
            var lifeCycle = component._lifecycle;
            inferno.internal_patch(lastInput, nextInput, parentDom, lifeCycle, childContext, component._isSVG, false);
            lifeCycle.trigger();
            if (!isNullOrUndef(component.componentDidUpdate)) {
                component.componentDidUpdate(props, prevState, context);
            }
            if (!isNull(inferno.options.afterUpdate)) {
                inferno.options.afterUpdate(vNode);
            }
        }
        var dom = vNode.dom = nextInput.dom;
        if (inferno.options.findDOMNodeEnabled) {
            inferno.internal_DOMNodeMap.set(component, nextInput.dom);
        }
        updateParentComponentVNodes(vNode, dom);
    } else {
        component.state = component._pendingState;
        component._pendingState = null;
    }
    if (!isNullOrUndef(callback)) {
        callback.call(component);
    }
}
var alreadyWarned = false;
var Component = function Component(props, context) {
    this.state = null;
    this._blockRender = false;
    this._blockSetState = true;
    this._pendingSetState = false;
    this._pendingState = null;
    this._lastInput = null;
    this._vNode = null;
    this._unmounted = false;
    this._lifecycle = null;
    this._childContext = null;
    this._isSVG = false;
    this._updating = true;
    /** @type {object} */
    this.props = props || inferno.EMPTY_OBJ;
    /** @type {object} */
    this.context = context || inferno.EMPTY_OBJ; // context should not be mutable
};
Component.prototype.forceUpdate = function forceUpdate(callback) {
    if (this._unmounted || !isBrowser) {
        return;
    }
    applyState(this, true, callback);
};
Component.prototype.setState = function setState(newState, callback) {
    if (this._unmounted) {
        return;
    }
    if (!this._blockSetState) {
        queueStateChanges(this, newState, callback);
    } else {
        if (process.env.NODE_ENV !== "production") {
            throwError("cannot update state via setState() in componentWillUpdate() or constructor.");
        }
        throwError();
    }
};
Component.prototype.setStateSync = function setStateSync(newState) {
    if (process.env.NODE_ENV !== "production") {
        if (!alreadyWarned) {
            alreadyWarned = true;
            // tslint:disable-next-line:no-console
            console.warn("Inferno WARNING: setStateSync has been deprecated and will be removed in next release. Use setState instead.");
        }
    }
    this.setState(newState);
};
Component.prototype._updateComponent = function _updateComponent(prevState, nextState, prevProps, nextProps, context, force, fromSetState) {
    if (this._unmounted === true) {
        if (process.env.NODE_ENV !== "production") {
            throwError(noOp);
        }
        throwError();
    }
    if (prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ || prevState !== nextState || force) {
        if (prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ) {
            if (!isNullOrUndef(this.componentWillReceiveProps) && !fromSetState) {
                // keep a copy of state before componentWillReceiveProps
                var beforeState = combineFrom(this.state);
                this._blockRender = true;
                this.componentWillReceiveProps(nextProps, context);
                this._blockRender = false;
                var afterState = this.state;
                if (beforeState !== afterState) {
                    // if state changed in componentWillReceiveProps, reassign the beforeState
                    this.state = beforeState;
                    // set the afterState as pending state so the change gets picked up below
                    this._pendingSetState = true;
                    this._pendingState = afterState;
                }
            }
            if (this._pendingSetState) {
                nextState = combineFrom(nextState, this._pendingState);
                this._pendingSetState = false;
                this._pendingState = null;
            }
        }
        /* Update if scu is not defined, or it returns truthy value or force */
        if (force || isNullOrUndef(this.shouldComponentUpdate) || this.shouldComponentUpdate && this.shouldComponentUpdate(nextProps, nextState, context)) {
            if (!isNullOrUndef(this.componentWillUpdate)) {
                this._blockSetState = true;
                this.componentWillUpdate(nextProps, nextState, context);
                this._blockSetState = false;
            }
            this.props = nextProps;
            this.state = nextState;
            this.context = context;
            if (inferno.options.beforeRender) {
                inferno.options.beforeRender(this);
            }
            var render = this.render(nextProps, nextState, context);
            if (inferno.options.afterRender) {
                inferno.options.afterRender(this);
            }
            return render;
        } else {
            this.props = nextProps;
            this.state = nextState;
            this.context = context;
        }
    }
    return NO_OP;
};
// tslint:disable-next-line:no-empty
Component.prototype.render = function render(nextProps, nextState, nextContext) {};

exports['default'] = Component;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(30).default;
module.exports.default = module.exports;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
var NO_OP = "$NO_OP";
var ERROR_MSG = "a runtime error occured! Use Inferno in development environment to find the error.";
// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== "undefined" && window.document);
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = Array.isArray;
function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}
function isStringOrNumber(o) {
    var type = typeof o === 'undefined' ? 'undefined' : _typeof(o);
    return type === "string" || type === "number";
}
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
function isFunction(o) {
    return typeof o === "function";
}
function isString(o) {
    return typeof o === "string";
}
function isNumber(o) {
    return typeof o === "number";
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
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === "object";
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error("Inferno Error: " + message);
}
function warning(message) {
    // tslint:disable-next-line:no-console
    console.warn(message);
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
function Lifecycle() {
    this.listeners = [];
}
Lifecycle.prototype.addListener = function addListener(callback) {
    this.listeners.push(callback);
};
Lifecycle.prototype.trigger = function trigger() {
    var listeners = this.listeners;
    var listener;
    // We need to remove current listener from array when calling it, because more listeners might be added
    while (listener = listeners.shift()) {
        listener();
    }
};

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var options = {
    afterMount: null,
    afterRender: null,
    afterUpdate: null,
    beforeRender: null,
    beforeUnmount: null,
    createVNode: null,
    findDOMNodeEnabled: false,
    recyclingEnabled: false,
    roots: []
};

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var xlinkNS = "http://www.w3.org/1999/xlink";
var xmlNS = "http://www.w3.org/XML/1998/namespace";
var svgNS = "http://www.w3.org/2000/svg";
var strictProps = new Set();
strictProps.add("volume");
strictProps.add("defaultChecked");
var booleanProps = new Set();
booleanProps.add("muted");
booleanProps.add("scoped");
booleanProps.add("loop");
booleanProps.add("open");
booleanProps.add("checked");
booleanProps.add("default");
booleanProps.add("capture");
booleanProps.add("disabled");
booleanProps.add("readOnly");
booleanProps.add("required");
booleanProps.add("autoplay");
booleanProps.add("controls");
booleanProps.add("seamless");
booleanProps.add("reversed");
booleanProps.add("allowfullscreen");
booleanProps.add("novalidate");
booleanProps.add("hidden");
booleanProps.add("autoFocus");
booleanProps.add("selected");
booleanProps.add("indeterminate");
var namespaces = new Map();
namespaces.set("xlink:href", xlinkNS);
namespaces.set("xlink:arcrole", xlinkNS);
namespaces.set("xlink:actuate", xlinkNS);
namespaces.set("xlink:show", xlinkNS);
namespaces.set("xlink:role", xlinkNS);
namespaces.set("xlink:title", xlinkNS);
namespaces.set("xlink:type", xlinkNS);
namespaces.set("xml:base", xmlNS);
namespaces.set("xml:lang", xmlNS);
namespaces.set("xml:space", xmlNS);
var isUnitlessNumber = new Set();
isUnitlessNumber.add("animationIterationCount");
isUnitlessNumber.add("borderImageOutset");
isUnitlessNumber.add("borderImageSlice");
isUnitlessNumber.add("borderImageWidth");
isUnitlessNumber.add("boxFlex");
isUnitlessNumber.add("boxFlexGroup");
isUnitlessNumber.add("boxOrdinalGroup");
isUnitlessNumber.add("columnCount");
isUnitlessNumber.add("flex");
isUnitlessNumber.add("flexGrow");
isUnitlessNumber.add("flexPositive");
isUnitlessNumber.add("flexShrink");
isUnitlessNumber.add("flexNegative");
isUnitlessNumber.add("flexOrder");
isUnitlessNumber.add("gridRow");
isUnitlessNumber.add("gridColumn");
isUnitlessNumber.add("fontWeight");
isUnitlessNumber.add("lineClamp");
isUnitlessNumber.add("lineHeight");
isUnitlessNumber.add("opacity");
isUnitlessNumber.add("order");
isUnitlessNumber.add("orphans");
isUnitlessNumber.add("tabSize");
isUnitlessNumber.add("widows");
isUnitlessNumber.add("zIndex");
isUnitlessNumber.add("zoom");
isUnitlessNumber.add("fillOpacity");
isUnitlessNumber.add("floodOpacity");
isUnitlessNumber.add("stopOpacity");
isUnitlessNumber.add("strokeDasharray");
isUnitlessNumber.add("strokeDashoffset");
isUnitlessNumber.add("strokeMiterlimit");
isUnitlessNumber.add("strokeOpacity");
isUnitlessNumber.add("strokeWidth");
var skipProps = new Set();
skipProps.add("children");
skipProps.add("childrenType");
skipProps.add("defaultValue");
skipProps.add("ref");
skipProps.add("key");
skipProps.add("checked");
skipProps.add("multiple");
var delegatedEvents = new Set();
delegatedEvents.add("onClick");
delegatedEvents.add("onMouseDown");
delegatedEvents.add("onMouseUp");
delegatedEvents.add("onMouseMove");
delegatedEvents.add("onSubmit");
delegatedEvents.add("onDblClick");
delegatedEvents.add("onKeyDown");
delegatedEvents.add("onKeyUp");
delegatedEvents.add("onKeyPress");

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var isiOS = isBrowser && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var delegatedEvents$1 = new Map();
function handleEvent(name, lastEvent, nextEvent, dom) {
    var delegatedRoots = delegatedEvents$1.get(name);
    if (nextEvent) {
        if (!delegatedRoots) {
            delegatedRoots = { items: new Map(), docEvent: null };
            delegatedRoots.docEvent = attachEventToDocument(name, delegatedRoots);
            delegatedEvents$1.set(name, delegatedRoots);
        }
        if (!lastEvent) {
            if (isiOS && name === "onClick") {
                trapClickOnNonInteractiveElement(dom);
            }
        }
        delegatedRoots.items.set(dom, nextEvent);
    } else if (delegatedRoots) {
        var items = delegatedRoots.items;
        if (items.delete(dom)) {
            // If any items were deleted, check if listener need to be removed
            if (items.size === 0) {
                document.removeEventListener(normalizeEventName(name), delegatedRoots.docEvent);
                delegatedEvents$1.delete(name);
            }
        }
    }
}
function dispatchEvents(event, target, items, count, isClick, eventData) {
    var dom = target;
    while (count > 0) {
        var eventsToTrigger = items.get(dom);
        if (eventsToTrigger) {
            count--;
            // linkEvent object
            eventData.dom = dom;
            if (eventsToTrigger.event) {
                eventsToTrigger.event(eventsToTrigger.data, event);
            } else {
                eventsToTrigger(event);
            }
            if (event.cancelBubble) {
                return;
            }
        }
        dom = dom.parentNode;
        // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
        // because the event listener is on document.body
        // Don't process clicks on disabled elements
        if (dom === null || isClick && dom.disabled) {
            return;
        }
    }
}
function normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function stopPropagation() {
    this.cancelBubble = true;
    this.stopImmediatePropagation();
}
function attachEventToDocument(name, delegatedRoots) {
    var docEvent = function docEvent(event) {
        var count = delegatedRoots.items.size;
        if (count > 0) {
            event.stopPropagation = stopPropagation;
            // Event data needs to be object to save reference to currentTarget getter
            var eventData = {
                dom: document
            };
            try {
                Object.defineProperty(event, "currentTarget", {
                    configurable: true,
                    get: function get() {
                        return eventData.dom;
                    }
                });
            } catch (e) {
                /* safari7 and phantomJS will crash */
            }
            dispatchEvents(event, event.target, delegatedRoots.items, count, event.type === "click", eventData);
        }
    };
    document.addEventListener(normalizeEventName(name), docEvent);
    return docEvent;
}
// tslint:disable-next-line:no-empty
function emptyFn() {}
function trapClickOnNonInteractiveElement(dom) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
    // Just set it using the onclick property so that we don't have to manage any
    // bookkeeping for it. Not sure if we need to clear it when the listener is
    // removed.
    // TODO: Only do this for the relevant Safaris maybe?
    dom.onclick = emptyFn;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function isCheckedType(type) {
    return type === "checkbox" || type === "radio";
}
function onTextInputChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onInput) {
        var event = props.onInput;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue(newProps, dom);
    }
}
function wrappedOnChange(e) {
    var props = this.vNode.props || EMPTY_OBJ;
    var event = props.onChange;
    if (event.event) {
        event.event(event.data, e);
    } else {
        event(e);
    }
}
function onCheckboxChange(e) {
    e.stopPropagation(); // This click should not propagate its for internal use
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    if (props.onClick) {
        var event = props.onClick;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (props.onclick) {
        props.onclick(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    applyValue(newProps, dom);
}
function processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue(nextPropsOrEmpty, dom);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            if (isCheckedType(nextPropsOrEmpty.type)) {
                dom.onclick = onCheckboxChange;
                dom.onclick.wrapped = true;
            } else {
                dom.oninput = onTextInputChange;
                dom.oninput.wrapped = true;
            }
            if (nextPropsOrEmpty.onChange) {
                dom.onchange = wrappedOnChange;
                dom.onchange.wrapped = true;
            }
        }
    }
}
function applyValue(nextPropsOrEmpty, dom) {
    var type = nextPropsOrEmpty.type;
    var value = nextPropsOrEmpty.value;
    var checked = nextPropsOrEmpty.checked;
    var multiple = nextPropsOrEmpty.multiple;
    var defaultValue = nextPropsOrEmpty.defaultValue;
    var hasValue = !isNullOrUndef(value);
    if (type && type !== dom.type) {
        dom.setAttribute("type", type);
    }
    if (multiple && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!isNullOrUndef(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + "";
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

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function updateChildOptionGroup(vNode, value) {
    var type = vNode.type;
    if (type === "optgroup") {
        var children = vNode.children;
        if (isArray(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOption(children[i], value);
            }
        } else if (isVNode(children)) {
            updateChildOption(children, value);
        }
    } else {
        updateChildOption(vNode, value);
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if (isArray(value) && value.indexOf(props.value) !== -1 || props.value === value) {
        dom.selected = true;
    } else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {
        dom.selected = props.selected || false;
    }
}
function onSelectChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onChange) {
        var event = props.onChange;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (props.onchange) {
        props.onchange(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue$1(newVNode, dom, newProps, false);
    }
}
function processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue$1(vNode, dom, nextPropsOrEmpty, mounting);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            dom.onchange = onSelectChange;
            dom.onchange.wrapped = true;
        }
    }
}
function applyValue$1(vNode, dom, nextPropsOrEmpty, mounting) {
    if (nextPropsOrEmpty.multiple !== dom.multiple) {
        dom.multiple = nextPropsOrEmpty.multiple;
    }
    var children = vNode.children;
    if (!isInvalid(children)) {
        var value = nextPropsOrEmpty.value;
        if (mounting && isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        if (isArray(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOptionGroup(children[i], value);
            }
        } else if (isVNode(children)) {
            updateChildOptionGroup(children, value);
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function wrappedOnChange$1(e) {
    var props = this.vNode.props || EMPTY_OBJ;
    var event = props.onChange;
    if (event.event) {
        event.event(event.data, e);
    } else {
        event(e);
    }
}
function onTextareaInputChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var previousValue = props.value;
    if (props.onInput) {
        var event = props.onInput;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue$2(newVNode, vNode.dom, false);
    }
}
function processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue$2(nextPropsOrEmpty, dom, mounting);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            dom.oninput = onTextareaInputChange;
            dom.oninput.wrapped = true;
            if (nextPropsOrEmpty.onChange) {
                dom.onchange = wrappedOnChange$1;
                dom.onchange.wrapped = true;
            }
        }
    }
}
function applyValue$2(nextPropsOrEmpty, dom, mounting) {
    var value = nextPropsOrEmpty.value;
    var domValue = dom.value;
    if (isNullOrUndef(value)) {
        if (mounting) {
            var defaultValue = nextPropsOrEmpty.defaultValue;
            if (!isNullOrUndef(defaultValue)) {
                if (defaultValue !== domValue) {
                    dom.defaultValue = defaultValue;
                    dom.value = defaultValue;
                }
            } else if (domValue !== "") {
                dom.defaultValue = "";
                dom.value = "";
            }
        }
    } else {
        /* There is value so keep it controlled */
        if (domValue !== value) {
            dom.defaultValue = value;
            dom.value = value;
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
/**
 * There is currently no support for switching same input between controlled and nonControlled
 * If that ever becomes a real issue, then re design controlled elements
 * Currently user must choose either controlled or non-controlled and stick with that
 */
function processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    if (flags & 512 /* InputElement */) {
            processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
        }
    if (flags & 2048 /* SelectElement */) {
            processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
        }
    if (flags & 1024 /* TextareaElement */) {
            processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
        }
}
function isControlledFormElement(nextPropsOrEmpty) {
    return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type) ? !isNullOrUndef(nextPropsOrEmpty.checked) : !isNullOrUndef(nextPropsOrEmpty.value);
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function normalizeChildNodes(parentDom) {
    var dom = parentDom.firstChild;
    while (dom) {
        if (dom.nodeType === 8) {
            if (dom.data === "!") {
                var placeholder = document.createTextNode("");
                parentDom.replaceChild(placeholder, dom);
                dom = dom.nextSibling;
            } else {
                var lastDom = dom.previousSibling;
                parentDom.removeChild(dom);
                dom = lastDom || parentDom.firstChild;
            }
        } else {
            dom = dom.nextSibling;
        }
    }
}
function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
    var type = vNode.type;
    var ref = vNode.ref;
    var props = vNode.props || EMPTY_OBJ;
    if (isClass) {
        var _isSVG = dom.namespaceURI === svgNS;
        var instance = createClassComponentInstance(vNode, type, props, context, _isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vNode = vNode;
        hydrate(input, dom, lifecycle, instance._childContext, _isSVG);
        vNode.dom = input.dom;
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false; // Mount finished allow going sync
        if (options.findDOMNodeEnabled) {
            componentToDOMNodeMap.set(instance, dom);
        }
    } else {
        var input$1 = createFunctionalComponentInput(vNode, type, props, context);
        hydrate(input$1, dom, lifecycle, context, isSVG);
        vNode.children = input$1;
        vNode.dom = input$1.dom;
        mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
    }
    return dom;
}
function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var flags = vNode.flags;
    var ref = vNode.ref;
    isSVG = isSVG || (flags & 128 /* SvgElement */) > 0;
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.type) {
        if (process.env.NODE_ENV !== "production") {
            warning("Inferno hydration: Server-side markup doesn't match client-side markup or Initial render target is not empty");
        }
        var newDom = mountElement(vNode, null, lifecycle, context, isSVG);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    vNode.dom = dom;
    if (!isInvalid(children)) {
        hydrateChildren(children, dom, lifecycle, context, isSVG);
    } else if (dom.firstChild !== null) {
        dom.textContent = ""; // dom has content, but VNode has no children remove everything from DOM
    }
    if (props) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (!isNullOrUndef(className)) {
        if (isSVG) {
            dom.setAttribute("class", className);
        } else {
            dom.className = className;
        }
    } else {
        if (dom.className !== "") {
            dom.removeAttribute("class");
        }
    }
    if (ref) {
        mountRef(dom, ref, lifecycle);
    }
    return dom;
}
function hydrateChildren(children, parentDom, lifecycle, context, isSVG) {
    normalizeChildNodes(parentDom);
    var dom = parentDom.firstChild;
    if (isStringOrNumber(children)) {
        if (!isNull(dom) && dom.nodeType === 3) {
            if (dom.nodeValue !== children) {
                dom.nodeValue = children;
            }
        } else if (children === "") {
            parentDom.appendChild(document.createTextNode(""));
        } else {
            parentDom.textContent = children;
        }
        if (!isNull(dom)) {
            dom = dom.nextSibling;
        }
    } else if (isArray(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!isNull(child) && isObject(child)) {
                if (!isNull(dom)) {
                    var nextSibling = dom.nextSibling;
                    hydrate(child, dom, lifecycle, context, isSVG);
                    dom = nextSibling;
                } else {
                    mount(child, parentDom, lifecycle, context, isSVG);
                }
            }
        }
    } else {
        // It's VNode
        if (!isNull(dom)) {
            hydrate(children, dom, lifecycle, context, isSVG);
            dom = dom.nextSibling;
        } else {
            mount(children, parentDom, lifecycle, context, isSVG);
        }
    }
    // clear any other DOM nodes, there should be only a single entry for the root
    while (dom) {
        var nextSibling$1 = dom.nextSibling;
        parentDom.removeChild(dom);
        dom = nextSibling$1;
    }
}
function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = mountText(vNode, null);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    var text = vNode.children;
    if (dom.nodeValue !== text) {
        dom.nodeValue = text;
    }
    vNode.dom = dom;
    return dom;
}
function hydrateVoid(vNode, dom) {
    vNode.dom = dom;
    return dom;
}
function hydrate(vNode, dom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
            hydrateComponent(vNode, dom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
        } else if (flags & 3970 /* Element */) {
            hydrateElement(vNode, dom, lifecycle, context, isSVG);
        } else if (flags & 1 /* Text */) {
            hydrateText(vNode, dom);
        } else if (flags & 4096 /* Void */) {
            hydrateVoid(vNode, dom);
        } else {
        if (process.env.NODE_ENV !== "production") {
            throwError("hydrate() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) + "\".");
        }
        throwError();
    }
}
function hydrateRoot(input, parentDom, lifecycle) {
    if (!isNull(parentDom)) {
        var dom = parentDom.firstChild;
        if (!isNull(dom)) {
            hydrate(input, dom, lifecycle, EMPTY_OBJ, false);
            dom = parentDom.firstChild;
            // clear any other DOM nodes, there should be only a single entry for the root
            while (dom = dom.nextSibling) {
                parentDom.removeChild(dom);
            }
            return true;
        }
    }
    return false;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var componentPools = new Map();
var elementPools = new Map();
function recycleElement(vNode, lifecycle, context, isSVG) {
    var tag = vNode.type;
    var pools = elementPools.get(tag);
    if (!isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!isUndefined(recycledVNode)) {
                patchElement(recycledVNode, vNode, null, lifecycle, context, isSVG, true);
                return vNode.dom;
            }
        }
    }
    return null;
}
function poolElement(vNode) {
    var tag = vNode.type;
    var key = vNode.key;
    var pools = elementPools.get(tag);
    if (isUndefined(pools)) {
        pools = {
            keyed: new Map(),
            nonKeyed: []
        };
        elementPools.set(tag, pools);
    }
    if (isNull(key)) {
        pools.nonKeyed.push(vNode);
    } else {
        var pool = pools.keyed.get(key);
        if (isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}
function recycleComponent(vNode, lifecycle, context, isSVG) {
    var type = vNode.type;
    var pools = componentPools.get(type);
    if (!isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!isUndefined(recycledVNode)) {
                var flags = vNode.flags;
                var failed = patchComponent(recycledVNode, vNode, null, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0, true);
                if (!failed) {
                    return vNode.dom;
                }
            }
        }
    }
    return null;
}
function poolComponent(vNode) {
    var hooks = vNode.ref;
    var nonRecycleHooks = hooks && (hooks.onComponentWillMount || hooks.onComponentWillUnmount || hooks.onComponentDidMount || hooks.onComponentWillUpdate || hooks.onComponentDidUpdate);
    if (nonRecycleHooks) {
        return;
    }
    var type = vNode.type;
    var key = vNode.key;
    var pools = componentPools.get(type);
    if (isUndefined(pools)) {
        pools = {
            keyed: new Map(),
            nonKeyed: []
        };
        componentPools.set(type, pools);
    }
    if (isNull(key)) {
        pools.nonKeyed.push(vNode);
    } else {
        var pool = pools.keyed.get(key);
        if (isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function unmount(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
            unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling);
        } else if (flags & 3970 /* Element */) {
            unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling);
        } else if (flags & (1 /* Text */ | 4096 /* Void */)) {
        unmountVoidOrText(vNode, parentDom);
    }
}
function unmountVoidOrText(vNode, parentDom) {
    if (!isNull(parentDom)) {
        removeChild(parentDom, vNode.dom);
    }
}
function unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var instance = vNode.children;
    var flags = vNode.flags;
    var isStatefulComponent$$1 = flags & 4;
    var props = vNode.props || EMPTY_OBJ;
    var ref = vNode.ref;
    var dom = vNode.dom;
    if (!isRecycling) {
        if (isStatefulComponent$$1) {
            if (!instance._unmounted) {
                if (!isNull(options.beforeUnmount)) {
                    options.beforeUnmount(vNode);
                }
                if (!isUndefined(instance.componentWillUnmount)) {
                    instance.componentWillUnmount();
                }
                if (ref && !isRecycling) {
                    ref(null);
                }
                instance._unmounted = true;
                if (options.findDOMNodeEnabled) {
                    componentToDOMNodeMap.delete(instance);
                }
                unmount(instance._lastInput, null, instance._lifecycle, false, isRecycling);
            }
        } else {
            if (!isNullOrUndef(ref)) {
                if (!isNullOrUndef(ref.onComponentWillUnmount)) {
                    ref.onComponentWillUnmount(dom, props);
                }
            }
            unmount(instance, null, lifecycle, false, isRecycling);
        }
    }
    if (parentDom) {
        removeChild(parentDom, dom);
    }
    if (options.recyclingEnabled && !isStatefulComponent$$1 && (parentDom || canRecycle)) {
        poolComponent(vNode);
    }
}
function unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var dom = vNode.dom;
    var ref = vNode.ref;
    var props = vNode.props;
    if (ref && !isRecycling) {
        unmountRef(ref);
    }
    var children = vNode.children;
    if (!isNullOrUndef(children)) {
        unmountChildren$1(children, lifecycle, isRecycling);
    }
    if (!isNull(props)) {
        for (var name in props) {
            // do not add a hasOwnProperty check here, it affects performance
            if (props[name] !== null && isAttrAnEvent(name)) {
                patchEvent(name, props[name], null, dom);
                // We need to set this null, because same props otherwise come back if SCU returns false and we are recyling
                props[name] = null;
            }
        }
    }
    if (!isNull(parentDom)) {
        removeChild(parentDom, dom);
    }
    if (options.recyclingEnabled && (parentDom || canRecycle)) {
        poolElement(vNode);
    }
}
function unmountChildren$1(children, lifecycle, isRecycling) {
    if (isArray(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!isInvalid(child) && isObject(child)) {
                unmount(child, null, lifecycle, false, isRecycling);
            }
        }
    } else if (isObject(children)) {
        unmount(children, null, lifecycle, false, isRecycling);
    }
}
function unmountRef(ref) {
    if (isFunction(ref)) {
        ref(null);
    } else {
        if (isInvalid(ref)) {
            return;
        }
        if (process.env.NODE_ENV !== "production") {
            throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        throwError();
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
// rather than use a Map, like we did before, we can use an array here
// given there shouldn't be THAT many roots on the page, the difference
// in performance is huge: https://esbench.com/bench/5802a691330ab09900a1a2da
var componentToDOMNodeMap = new Map();
var roots = options.roots;
/**
 * When inferno.options.findDOMNOdeEnabled is true, this function will return DOM Node by component instance
 * @param ref Component instance
 * @returns {*|null} returns dom node
 */
function findDOMNode(ref) {
    if (!options.findDOMNodeEnabled) {
        if (process.env.NODE_ENV !== "production") {
            throwError("findDOMNode() has been disabled, use Inferno.options.findDOMNodeEnabled = true; enabled findDOMNode(). Warning this can significantly impact performance!");
        }
        throwError();
    }
    var dom = ref && ref.nodeType ? ref : null;
    return componentToDOMNodeMap.get(ref) || dom;
}
function getRoot(dom) {
    for (var i = 0, len = roots.length; i < len; i++) {
        var root = roots[i];
        if (root.dom === dom) {
            return root;
        }
    }
    return null;
}
function setRoot(dom, input, lifecycle) {
    var root = {
        dom: dom,
        input: input,
        lifecycle: lifecycle
    };
    roots.push(root);
    return root;
}
function removeRoot(root) {
    for (var i = 0, len = roots.length; i < len; i++) {
        if (roots[i] === root) {
            roots.splice(i, 1);
            return;
        }
    }
}
if (process.env.NODE_ENV !== "production") {
    if (isBrowser && document.body === null) {
        warning('Inferno warning: you cannot initialize inferno without "document.body". Wait on "DOMContentLoaded" event, add script to bottom of body, or use async/defer attributes on script tag.');
    }
}
var documentBody = isBrowser ? document.body : null;
/**
 * Renders virtual node tree into parent node.
 * @param {VNode | null | string | number} input vNode to be rendered
 * @param parentDom DOM node which content will be replaced by virtual node
 * @returns {InfernoChildren} rendered virtual node
 */
function render(input, parentDom) {
    if (documentBody === parentDom) {
        if (process.env.NODE_ENV !== "production") {
            throwError('you cannot render() to the "document.body". Use an empty element as a container instead.');
        }
        throwError();
    }
    if (input === NO_OP) {
        return;
    }
    var root = getRoot(parentDom);
    if (isNull(root)) {
        var lifecycle = new Lifecycle();
        if (!isInvalid(input)) {
            if (input.dom) {
                input = directClone(input);
            }
            if (!hydrateRoot(input, parentDom, lifecycle)) {
                mount(input, parentDom, lifecycle, EMPTY_OBJ, false);
            }
            root = setRoot(parentDom, input, lifecycle);
            lifecycle.trigger();
        }
    } else {
        var lifecycle$1 = root.lifecycle;
        lifecycle$1.listeners = [];
        if (isNullOrUndef(input)) {
            unmount(root.input, parentDom, lifecycle$1, false, false);
            removeRoot(root);
        } else {
            if (input.dom) {
                input = directClone(input);
            }
            patch(root.input, input, parentDom, lifecycle$1, EMPTY_OBJ, false, false);
        }
        root.input = input;
        lifecycle$1.trigger();
    }
    if (root) {
        var rootInput = root.input;
        if (rootInput && rootInput.flags & 28 /* Component */) {
                return rootInput.children;
            }
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

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    if (lastVNode !== nextVNode) {
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        if (nextFlags & 28 /* Component */) {
                var isClass = (nextFlags & 4 /* ComponentClass */) > 0;
                if (lastFlags & 28 /* Component */) {
                        patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling);
                    } else {
                    replaceVNode(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, isClass), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 3970 /* Element */) {
                if (lastFlags & 3970 /* Element */) {
                        patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
                    } else {
                    replaceVNode(parentDom, mountElement(nextVNode, null, lifecycle, context, isSVG), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 1 /* Text */) {
                if (lastFlags & 1 /* Text */) {
                        patchText(lastVNode, nextVNode);
                    } else {
                    replaceVNode(parentDom, mountText(nextVNode, null), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 4096 /* Void */) {
                if (lastFlags & 4096 /* Void */) {
                        patchVoid(lastVNode, nextVNode);
                    } else {
                    replaceVNode(parentDom, mountVoid(nextVNode, null), lastVNode, lifecycle, isRecycling);
                }
            } else {
            // Error case: mount new one replacing old one
            replaceLastChildAndUnmount(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function unmountChildren(children, dom, lifecycle, isRecycling) {
    if (isVNode(children)) {
        unmount(children, dom, lifecycle, true, isRecycling);
    } else if (isArray(children)) {
        removeAllChildren(dom, children, lifecycle, isRecycling);
    } else {
        dom.textContent = "";
    }
}
function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    var nextTag = nextVNode.type;
    var lastTag = lastVNode.type;
    if (lastTag !== nextTag) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
    } else {
        var dom = lastVNode.dom;
        var lastProps = lastVNode.props;
        var nextProps = nextVNode.props;
        var lastChildren = lastVNode.children;
        var nextChildren = nextVNode.children;
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        var nextRef = nextVNode.ref;
        var lastClassName = lastVNode.className;
        var nextClassName = nextVNode.className;
        nextVNode.dom = dom;
        isSVG = isSVG || (nextFlags & 128 /* SvgElement */) > 0;
        if (lastChildren !== nextChildren) {
            var childrenIsSVG = isSVG === true && nextVNode.type !== "foreignObject";
            patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, childrenIsSVG, isRecycling);
        }
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
            var nextPropsOrEmpty = nextProps || EMPTY_OBJ;
            var hasControlledValue = false;
            if (nextPropsOrEmpty !== EMPTY_OBJ) {
                var isFormElement = (nextFlags & 3584 /* FormElement */) > 0;
                if (isFormElement) {
                    hasControlledValue = isControlledFormElement(nextPropsOrEmpty);
                }
                for (var prop in nextPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    var nextValue = nextPropsOrEmpty[prop];
                    var lastValue = lastPropsOrEmpty[prop];
                    patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue);
                }
                if (isFormElement) {
                    // When inferno is recycling form element, we need to process it like it would be mounting
                    processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, isRecycling, hasControlledValue);
                }
            }
            if (lastPropsOrEmpty !== EMPTY_OBJ) {
                for (var prop$1 in lastPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    if (isNullOrUndef(nextPropsOrEmpty[prop$1]) && !isNullOrUndef(lastPropsOrEmpty[prop$1])) {
                        removeProp(prop$1, lastPropsOrEmpty[prop$1], dom, nextFlags);
                    }
                }
            }
        }
        // inlined patchProps  -- ends --
        if (lastClassName !== nextClassName) {
            if (isNullOrUndef(nextClassName)) {
                dom.removeAttribute("class");
            } else {
                if (isSVG) {
                    dom.setAttribute("class", nextClassName);
                } else {
                    dom.className = nextClassName;
                }
            }
        }
        if (nextRef) {
            if (lastVNode.ref !== nextRef || isRecycling) {
                mountRef(dom, nextRef, lifecycle);
            }
        }
    }
}
function patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var patchArray = false;
    var patchKeyed = false;
    if (nextFlags & 64 /* HasNonKeyedChildren */) {
            patchArray = true;
        } else if ((lastFlags & 32 /* HasKeyedChildren */) > 0 && (nextFlags & 32 /* HasKeyedChildren */) > 0) {
        patchKeyed = true;
        patchArray = true;
    } else if (isInvalid(nextChildren)) {
        unmountChildren(lastChildren, dom, lifecycle, isRecycling);
    } else if (isInvalid(lastChildren)) {
        if (isStringOrNumber(nextChildren)) {
            setTextContent(dom, nextChildren);
        } else {
            if (isArray(nextChildren)) {
                mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
            } else {
                mount(nextChildren, dom, lifecycle, context, isSVG);
            }
        }
    } else if (isStringOrNumber(nextChildren)) {
        if (isStringOrNumber(lastChildren)) {
            updateTextContent(dom, nextChildren);
        } else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            setTextContent(dom, nextChildren);
        }
    } else if (isArray(nextChildren)) {
        if (isArray(lastChildren)) {
            patchArray = true;
            if (isKeyed(lastChildren, nextChildren)) {
                patchKeyed = true;
            }
        } else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
        }
    } else if (isArray(lastChildren)) {
        removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
        mount(nextChildren, dom, lifecycle, context, isSVG);
    } else if (isVNode(nextChildren)) {
        if (isVNode(lastChildren)) {
            patch(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        } else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mount(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    if (patchArray) {
        if (patchKeyed) {
            patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        } else {
            patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling) {
    var lastType = lastVNode.type;
    var nextType = nextVNode.type;
    var lastKey = lastVNode.key;
    var nextKey = nextVNode.key;
    if (lastType !== nextType || lastKey !== nextKey) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        return false;
    } else {
        var nextProps = nextVNode.props || EMPTY_OBJ;
        if (isClass) {
            var instance = lastVNode.children;
            instance._updating = true;
            if (instance._unmounted) {
                if (isNull(parentDom)) {
                    return true;
                }
                replaceChild(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, (nextVNode.flags & 4 /* ComponentClass */) > 0), lastVNode.dom);
            } else {
                var hasComponentDidUpdate = !isUndefined(instance.componentDidUpdate);
                var nextState = instance.state;
                // When component has componentDidUpdate hook, we need to clone lastState or will be modified by reference during update
                var lastState = hasComponentDidUpdate ? combineFrom(nextState, null) : nextState;
                var lastProps = instance.props;
                var childContext;
                if (!isNullOrUndef(instance.getChildContext)) {
                    childContext = instance.getChildContext();
                }
                nextVNode.children = instance;
                instance._isSVG = isSVG;
                if (isNullOrUndef(childContext)) {
                    childContext = context;
                } else {
                    childContext = combineFrom(context, childContext);
                }
                var lastInput = instance._lastInput;
                var nextInput = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false, false);
                var didUpdate = true;
                instance._childContext = childContext;
                if (isInvalid(nextInput)) {
                    nextInput = createVoidVNode();
                } else if (nextInput === NO_OP) {
                    nextInput = lastInput;
                    didUpdate = false;
                } else if (isStringOrNumber(nextInput)) {
                    nextInput = createTextVNode(nextInput, null);
                } else if (isArray(nextInput)) {
                    if (process.env.NODE_ENV !== "production") {
                        throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
                    }
                    throwError();
                } else if (isObject(nextInput)) {
                    if (!isNull(nextInput.dom)) {
                        nextInput = directClone(nextInput);
                    }
                }
                if (nextInput.flags & 28 /* Component */) {
                        nextInput.parentVNode = nextVNode;
                    } else if (lastInput.flags & 28 /* Component */) {
                        lastInput.parentVNode = nextVNode;
                    }
                instance._lastInput = nextInput;
                instance._vNode = nextVNode;
                if (didUpdate) {
                    patch(lastInput, nextInput, parentDom, lifecycle, childContext, isSVG, isRecycling);
                    if (hasComponentDidUpdate && instance.componentDidUpdate) {
                        instance.componentDidUpdate(lastProps, lastState);
                    }
                    if (!isNull(options.afterUpdate)) {
                        options.afterUpdate(nextVNode);
                    }
                    if (options.findDOMNodeEnabled) {
                        componentToDOMNodeMap.set(instance, nextInput.dom);
                    }
                }
                nextVNode.dom = nextInput.dom;
            }
            instance._updating = false;
        } else {
            var shouldUpdate = true;
            var lastProps$1 = lastVNode.props;
            var nextHooks = nextVNode.ref;
            var nextHooksDefined = !isNullOrUndef(nextHooks);
            var lastInput$1 = lastVNode.children;
            var nextInput$1 = lastInput$1;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = lastInput$1;
            if (lastKey !== nextKey) {
                shouldUpdate = true;
            } else {
                if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentShouldUpdate)) {
                    shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps$1, nextProps);
                }
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(lastProps$1, nextProps);
                }
                nextInput$1 = nextType(nextProps, context);
                if (isInvalid(nextInput$1)) {
                    nextInput$1 = createVoidVNode();
                } else if (isStringOrNumber(nextInput$1) && nextInput$1 !== NO_OP) {
                    nextInput$1 = createTextVNode(nextInput$1, null);
                } else if (isArray(nextInput$1)) {
                    if (process.env.NODE_ENV !== "production") {
                        throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
                    }
                    throwError();
                } else if (isObject(nextInput$1)) {
                    if (!isNull(nextInput$1.dom)) {
                        nextInput$1 = directClone(nextInput$1);
                    }
                }
                if (nextInput$1 !== NO_OP) {
                    patch(lastInput$1, nextInput$1, parentDom, lifecycle, context, isSVG, isRecycling);
                    nextVNode.children = nextInput$1;
                    if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(lastProps$1, nextProps);
                    }
                    nextVNode.dom = nextInput$1.dom;
                }
            }
            if (nextInput$1.flags & 28 /* Component */) {
                    nextInput$1.parentVNode = nextVNode;
                } else if (lastInput$1.flags & 28 /* Component */) {
                    lastInput$1.parentVNode = nextVNode;
                }
        }
    }
    return false;
}
function patchText(lastVNode, nextVNode) {
    var nextText = nextVNode.children;
    var dom = lastVNode.dom;
    nextVNode.dom = dom;
    if (lastVNode.children !== nextText) {
        dom.nodeValue = nextText;
    }
}
function patchVoid(lastVNode, nextVNode) {
    nextVNode.dom = lastVNode.dom;
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var lastChildrenLength = lastChildren.length;
    var nextChildrenLength = nextChildren.length;
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    for (; i < commonLength; i++) {
        var nextChild = nextChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = directClone(nextChild);
        }
        patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG, isRecycling);
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            var nextChild$1 = nextChildren[i];
            if (nextChild$1.dom) {
                nextChild$1 = nextChildren[i] = directClone(nextChild$1);
            }
            appendChild(dom, mount(nextChild$1, null, lifecycle, context, isSVG));
        }
    } else if (nextChildrenLength === 0) {
        removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
    } else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            unmount(lastChildren[i], dom, lifecycle, false, isRecycling);
        }
    }
}
function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, isRecycling) {
    var aLength = a.length;
    var bLength = b.length;
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
    if (aLength === 0) {
        if (bLength > 0) {
            mountArrayChildren(b, dom, lifecycle, context, isSVG);
        }
        return;
    } else if (bLength === 0) {
        removeAllChildren(dom, a, lifecycle, isRecycling);
        return;
    }
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
    /* eslint no-constant-condition: 0 */
    outer: while (true) {
        // Sync nodes with the same key at the beginning.
        while (aStartNode.key === bStartNode.key) {
            patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
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
            patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
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
        // Move and sync nodes from right to left.
        if (aEndNode.key === bStartNode.key) {
            patch(aEndNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            insertOrAppend(dom, bStartNode.dom, aStartNode.dom);
            aEnd--;
            bStart++;
            aEndNode = a[aEnd];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = directClone(bStartNode);
            }
            continue;
        }
        // Move and sync nodes from left to right.
        if (aStartNode.key === bEndNode.key) {
            patch(aStartNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            insertOrAppend(dom, bEndNode.dom, nextNode);
            aStart++;
            bEnd--;
            aStartNode = a[aStart];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = directClone(bEndNode);
            }
            continue;
        }
        break;
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = directClone(node);
                }
                bStart++;
                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
            }
        }
    } else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            unmount(a[aStart++], dom, lifecycle, false, isRecycling);
        }
    } else {
        aLength = aEnd - aStart + 1;
        bLength = bEnd - bStart + 1;
        var sources = new Array(bLength);
        // Mark all nodes as inserted.
        for (i = 0; i < bLength; i++) {
            sources[i] = -1;
        }
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if (bLength <= 4 || aLength * bLength <= 16) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            } else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = directClone(bNode);
                            }
                            patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                            patched++;
                            a[i] = null;
                            break;
                        }
                    }
                }
            }
        } else {
            var keyIndex = new Map();
            // Map keys by their index in array
            for (i = bStart; i <= bEnd; i++) {
                keyIndex.set(b[i].key, i);
            }
            // Try to patch same keys
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    j = keyIndex.get(aNode.key);
                    if (!isUndefined(j)) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        } else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = directClone(bNode);
                        }
                        patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                        patched++;
                        a[i] = null;
                    }
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (aLength === a.length && patched === 0) {
            removeAllChildren(dom, a, lifecycle, isRecycling);
            while (bStart < bLength) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = directClone(node);
                }
                bStart++;
                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), null);
            }
        } else {
            i = aLength - patched;
            while (i > 0) {
                aNode = a[aStart++];
                if (!isNull(aNode)) {
                    unmount(aNode, dom, lifecycle, true, isRecycling);
                    i--;
                }
            }
            if (moved) {
                var seq = lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = directClone(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
                    } else {
                        if (j < 0 || i !== seq[j]) {
                            pos = i + bStart;
                            node = b[pos];
                            nextPos = pos + 1;
                            nextNode = nextPos < b.length ? b[nextPos].dom : null;
                            insertOrAppend(dom, node.dom, nextNode);
                        } else {
                            j--;
                        }
                    }
                }
            } else if (patched !== bLength) {
                // when patched count doesn't match b length we need to insert those new ones
                // loop backwards so we can use insertBefore
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = directClone(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
                    }
                }
            }
        }
    }
}
// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var p = arr.slice(0);
    var result = [0];
    var i;
    var j;
    var u;
    var v;
    var c;
    var len = arr.length;
    for (i = 0; i < len; i++) {
        var arrI = arr[i];
        if (arrI === -1) {
            continue;
        }
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
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}
function isAttrAnEvent(attr) {
    return attr[0] === "o" && attr[1] === "n";
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue) {
    if (lastValue !== nextValue) {
        if (skipProps.has(prop) || hasControlledValue && prop === "value") {
            return;
        } else if (booleanProps.has(prop)) {
            prop = prop === "autoFocus" ? prop.toLowerCase() : prop;
            dom[prop] = !!nextValue;
        } else if (strictProps.has(prop)) {
            var value = isNullOrUndef(nextValue) ? "" : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
        } else if (isAttrAnEvent(prop)) {
            patchEvent(prop, lastValue, nextValue, dom);
        } else if (isNullOrUndef(nextValue)) {
            dom.removeAttribute(prop);
        } else if (prop === "style") {
            patchStyle(lastValue, nextValue, dom);
        } else if (prop === "dangerouslySetInnerHTML") {
            var lastHtml = lastValue && lastValue.__html;
            var nextHtml = nextValue && nextValue.__html;
            if (lastHtml !== nextHtml) {
                if (!isNullOrUndef(nextHtml)) {
                    dom.innerHTML = nextHtml;
                }
            }
        } else {
            // We optimize for NS being boolean. Its 99.9% time false
            if (isSVG && namespaces.has(prop)) {
                // If we end up in this path we can read property again
                dom.setAttributeNS(namespaces.get(prop), prop, nextValue);
            } else {
                dom.setAttribute(prop, nextValue);
            }
        }
    }
}
function patchEvent(name, lastValue, nextValue, dom) {
    if (lastValue !== nextValue) {
        if (delegatedEvents.has(name)) {
            handleEvent(name, lastValue, nextValue, dom);
        } else {
            var nameLowerCase = name.toLowerCase();
            var domEvent = dom[nameLowerCase];
            // if the function is wrapped, that means it's been controlled by a wrapper
            if (domEvent && domEvent.wrapped) {
                return;
            }
            if (!isFunction(nextValue) && !isNullOrUndef(nextValue)) {
                var linkEvent = nextValue.event;
                if (linkEvent && isFunction(linkEvent)) {
                    dom[nameLowerCase] = function (e) {
                        linkEvent(nextValue.data, e);
                    };
                } else {
                    if (process.env.NODE_ENV !== "production") {
                        throwError("an event on a VNode \"" + name + "\". was not a function or a valid linkEvent.");
                    }
                    throwError();
                }
            } else {
                dom[nameLowerCase] = nextValue;
            }
        }
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
                domStyle[style] = !isNumber(value) || isUnitlessNumber.has(style) ? value : value + "px";
            }
        }
        for (style in lastAttrValue) {
            if (isNullOrUndef(nextAttrValue[style])) {
                domStyle[style] = "";
            }
        }
    } else {
        for (style in nextAttrValue) {
            value = nextAttrValue[style];
            domStyle[style] = !isNumber(value) || isUnitlessNumber.has(style) ? value : value + "px";
        }
    }
}
function removeProp(prop, lastValue, dom, nextFlags) {
    if (prop === "value") {
        // When removing value of select element, it needs to be set to null instead empty string, because empty string is valid value for option which makes that option selected
        // MS IE/Edge don't follow html spec for textArea and input elements and we need to set empty string to value in those cases to avoid "null" and "undefined" texts
        dom.value = nextFlags & 2048 /* SelectElement */ ? null : "";
    } else if (prop === "style") {
        dom.removeAttribute("style");
    } else if (isAttrAnEvent(prop)) {
        handleEvent(prop, lastValue, null, dom);
    } else {
        dom.removeAttribute(prop);
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function mount(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 3970 /* Element */) {
            return mountElement(vNode, parentDom, lifecycle, context, isSVG);
        } else if (flags & 28 /* Component */) {
            return mountComponent(vNode, parentDom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
        } else if (flags & 4096 /* Void */) {
            return mountVoid(vNode, parentDom);
        } else if (flags & 1 /* Text */) {
            return mountText(vNode, parentDom);
        } else {
        if (process.env.NODE_ENV !== "production") {
            if ((typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) === "object") {
                throwError("mount() received an object that's not a valid VNode, you should stringify it first. Object: \"" + JSON.stringify(vNode) + "\".");
            } else {
                throwError("mount() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) + "\".");
            }
        }
        throwError();
    }
}
function mountText(vNode, parentDom) {
    var dom = document.createTextNode(vNode.children);
    vNode.dom = dom;
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountVoid(vNode, parentDom) {
    var dom = document.createTextNode("");
    vNode.dom = dom;
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
    var dom;
    if (options.recyclingEnabled) {
        dom = recycleElement(vNode, lifecycle, context, isSVG);
        if (!isNull(dom)) {
            if (!isNull(parentDom)) {
                appendChild(parentDom, dom);
            }
            return dom;
        }
    }
    var flags = vNode.flags;
    isSVG = isSVG || (flags & 128 /* SvgElement */) > 0;
    dom = documentCreateElement(vNode.type, isSVG);
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var ref = vNode.ref;
    vNode.dom = dom;
    if (!isInvalid(children)) {
        if (isStringOrNumber(children)) {
            setTextContent(dom, children);
        } else {
            var childrenIsSVG = isSVG === true && vNode.type !== "foreignObject";
            if (isArray(children)) {
                mountArrayChildren(children, dom, lifecycle, context, childrenIsSVG);
            } else if (isVNode(children)) {
                mount(children, dom, lifecycle, context, childrenIsSVG);
            }
        }
    }
    if (!isNull(props)) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (className !== null) {
        if (isSVG) {
            dom.setAttribute("class", className);
        } else {
            dom.className = className;
        }
    }
    if (!isNull(ref)) {
        mountRef(dom, ref, lifecycle);
    }
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        // Verify can string/number be here. might cause de-opt. - Normalization takes care of it.
        if (!isInvalid(child)) {
            if (child.dom) {
                children[i] = child = directClone(child);
            }
            mount(children[i], dom, lifecycle, context, isSVG);
        }
    }
}
function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
    var dom;
    if (options.recyclingEnabled) {
        dom = recycleComponent(vNode, lifecycle, context, isSVG);
        if (!isNull(dom)) {
            if (!isNull(parentDom)) {
                appendChild(parentDom, dom);
            }
            return dom;
        }
    }
    var type = vNode.type;
    var props = vNode.props || EMPTY_OBJ;
    var ref = vNode.ref;
    if (isClass) {
        var instance = createClassComponentInstance(vNode, type, props, context, isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vNode = vNode;
        vNode.dom = dom = mount(input, null, lifecycle, instance._childContext, isSVG);
        if (!isNull(parentDom)) {
            appendChild(parentDom, dom);
        }
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false;
        if (options.findDOMNodeEnabled) {
            componentToDOMNodeMap.set(instance, dom);
        }
    } else {
        var input$1 = createFunctionalComponentInput(vNode, type, props, context);
        vNode.dom = dom = mount(input$1, null, lifecycle, context, isSVG);
        vNode.children = input$1;
        mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
        if (!isNull(parentDom)) {
            appendChild(parentDom, dom);
        }
    }
    return dom;
}
function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
    if (ref) {
        if (isFunction(ref)) {
            ref(instance);
        } else {
            if (process.env.NODE_ENV !== "production") {
                if (isStringOrNumber(ref)) {
                    throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
                } else if (isObject(ref) && vNode.flags & 4 /* ComponentClass */) {
                        throwError("functional component lifecycle events are not supported on ES2015 class components.");
                    } else {
                    throwError("a bad value for \"ref\" was used on component: \"" + JSON.stringify(ref) + "\"");
                }
            }
            throwError();
        }
    }
    var hasDidMount = !isUndefined(instance.componentDidMount);
    var afterMount = options.afterMount;
    if (hasDidMount || !isNull(afterMount)) {
        lifecycle.addListener(function () {
            instance._updating = true;
            if (afterMount) {
                afterMount(vNode);
            }
            if (hasDidMount) {
                instance.componentDidMount();
            }
            instance._updating = false;
        });
    }
}
function mountFunctionalComponentCallbacks(props, ref, dom, lifecycle) {
    if (ref) {
        if (!isNullOrUndef(ref.onComponentWillMount)) {
            ref.onComponentWillMount(props);
        }
        if (!isNullOrUndef(ref.onComponentDidMount)) {
            lifecycle.addListener(function () {
                return ref.onComponentDidMount(dom, props);
            });
        }
    }
}
function mountRef(dom, value, lifecycle) {
    if (isFunction(value)) {
        lifecycle.addListener(function () {
            return value(dom);
        });
    } else {
        if (isInvalid(value)) {
            return;
        }
        if (process.env.NODE_ENV !== "production") {
            throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        throwError();
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
var EMPTY_OBJ = {};
if (process.env.NODE_ENV !== "production") {
    Object.freeze(EMPTY_OBJ);
}
function createClassComponentInstance(vNode, Component, props, context, isSVG, lifecycle) {
    if (isUndefined(context)) {
        context = EMPTY_OBJ; // Context should not be mutable
    }
    var instance = new Component(props, context);
    vNode.children = instance;
    instance._blockSetState = false;
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    // setState callbacks must fire after render is done when called from componentWillReceiveProps or componentWillMount
    instance._lifecycle = lifecycle;
    instance._unmounted = false;
    instance._pendingSetState = true;
    instance._isSVG = isSVG;
    if (!isNullOrUndef(instance.componentWillMount)) {
        instance._blockRender = true;
        instance.componentWillMount();
        instance._blockRender = false;
    }
    var childContext;
    if (!isNullOrUndef(instance.getChildContext)) {
        childContext = instance.getChildContext();
    }
    if (isNullOrUndef(childContext)) {
        instance._childContext = context;
    } else {
        instance._childContext = combineFrom(context, childContext);
    }
    if (!isNull(options.beforeRender)) {
        options.beforeRender(instance);
    }
    var input = instance.render(props, instance.state, context);
    if (!isNull(options.afterRender)) {
        options.afterRender(instance);
    }
    if (isArray(input)) {
        if (process.env.NODE_ENV !== "production") {
            throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
        }
        throwError();
    } else if (isInvalid(input)) {
        input = createVoidVNode();
    } else if (isStringOrNumber(input)) {
        input = createTextVNode(input, null);
    } else {
        if (input.dom) {
            input = directClone(input);
        }
        if (input.flags & 28 /* Component */) {
                // if we have an input that is also a component, we run into a tricky situation
                // where the root vNode needs to always have the correct DOM entry
                // so we break monomorphism on our input and supply it our vNode as parentVNode
                // we can optimise this in the future, but this gets us out of a lot of issues
                input.parentVNode = vNode;
            }
    }
    instance._pendingSetState = false;
    instance._lastInput = input;
    return instance;
}
function replaceLastChildAndUnmount(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling) {
    replaceVNode(parentDom, mount(nextInput, null, lifecycle, context, isSVG), lastInput, lifecycle, isRecycling);
}
function replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
    unmount(vNode, null, lifecycle, false, isRecycling);
    replaceChild(parentDom, dom, vNode.dom);
}
function createFunctionalComponentInput(vNode, component, props, context) {
    var input = component(props, context);
    if (isArray(input)) {
        if (process.env.NODE_ENV !== "production") {
            throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
        }
        throwError();
    } else if (isInvalid(input)) {
        input = createVoidVNode();
    } else if (isStringOrNumber(input)) {
        input = createTextVNode(input, null);
    } else {
        if (input.dom) {
            input = directClone(input);
        }
        if (input.flags & 28 /* Component */) {
                // if we have an input that is also a component, we run into a tricky situation
                // where the root vNode needs to always have the correct DOM entry
                // so we break monomorphism on our input and supply it our vNode as parentVNode
                // we can optimise this in the future, but this gets us out of a lot of issues
                input.parentVNode = vNode;
            }
    }
    return input;
}
function setTextContent(dom, text) {
    if (text !== "") {
        dom.textContent = text;
    } else {
        dom.appendChild(document.createTextNode(""));
    }
}
function updateTextContent(dom, text) {
    dom.firstChild.nodeValue = text;
}
function appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
function insertOrAppend(parentDom, newNode, nextNode) {
    if (isNullOrUndef(nextNode)) {
        appendChild(parentDom, newNode);
    } else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(svgNS, tag);
    } else {
        return document.createElement(tag);
    }
}
function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    unmount(lastNode, null, lifecycle, false, isRecycling);
    var dom = mount(nextNode, null, lifecycle, context, isSVG);
    nextNode.dom = dom;
    replaceChild(parentDom, dom, lastNode.dom);
}
function replaceChild(parentDom, nextDom, lastDom) {
    if (!parentDom) {
        parentDom = lastDom.parentNode;
    }
    parentDom.replaceChild(nextDom, lastDom);
}
function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
function removeAllChildren(dom, children, lifecycle, isRecycling) {
    if (!options.recyclingEnabled || options.recyclingEnabled && !isRecycling) {
        removeChildren(null, children, lifecycle, isRecycling);
    }
    dom.textContent = "";
}
function removeChildren(dom, children, lifecycle, isRecycling) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        if (!isInvalid(child)) {
            unmount(child, dom, lifecycle, true, isRecycling);
        }
    }
}
function isKeyed(lastChildren, nextChildren) {
    return nextChildren.length > 0 && !isNullOrUndef(nextChildren[0]) && !isNullOrUndef(nextChildren[0].key) && lastChildren.length > 0 && !isNullOrUndef(lastChildren[0]) && !isNullOrUndef(lastChildren[0].key);
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function VNode(children, className, flags, key, props, ref, type) {
    this.children = children;
    this.className = className;
    this.dom = null;
    this.flags = flags;
    this.key = key;
    this.props = props;
    this.ref = ref;
    this.type = type;
}
/**
 * Creates virtual node
 * @param {number} flags
 * @param {string|Function|null} type
 * @param {string|null=} className
 * @param {object=} children
 * @param {object=} props
 * @param {*=} key
 * @param {object|Function=} ref
 * @param {boolean=} noNormalise
 * @returns {VNode} returns new virtual node
 */
function createVNode(flags, type, className, children, props, key, ref, noNormalise) {
    if (flags & 16 /* ComponentUnknown */) {
            flags = isStatefulComponent(type) ? 4 /* ComponentClass */
            : 8 /* ComponentFunction */;
        }
    var vNode = new VNode(children === void 0 ? null : children, className === void 0 ? null : className, flags, key === void 0 ? null : key, props === void 0 ? null : props, ref === void 0 ? null : ref, type);
    if (noNormalise !== true) {
        normalize(vNode);
    }
    if (options.createVNode !== null) {
        options.createVNode(vNode);
    }
    return vNode;
}
function directClone(vNodeToClone) {
    var newVNode;
    var flags = vNodeToClone.flags;
    if (flags & 28 /* Component */) {
            var props;
            var propsToClone = vNodeToClone.props;
            if (isNull(propsToClone)) {
                props = EMPTY_OBJ;
            } else {
                props = {};
                for (var key in propsToClone) {
                    props[key] = propsToClone[key];
                }
            }
            newVNode = createVNode(flags, vNodeToClone.type, null, null, props, vNodeToClone.key, vNodeToClone.ref, true);
            var newProps = newVNode.props;
            var newChildren = newProps.children;
            // we need to also clone component children that are in props
            // as the children may also have been hoisted
            if (newChildren) {
                if (isArray(newChildren)) {
                    var len = newChildren.length;
                    if (len > 0) {
                        var tmpArray = [];
                        for (var i = 0; i < len; i++) {
                            var child = newChildren[i];
                            if (isStringOrNumber(child)) {
                                tmpArray.push(child);
                            } else if (!isInvalid(child) && isVNode(child)) {
                                tmpArray.push(directClone(child));
                            }
                        }
                        newProps.children = tmpArray;
                    }
                } else if (isVNode(newChildren)) {
                    newProps.children = directClone(newChildren);
                }
            }
            newVNode.children = null;
        } else if (flags & 3970 /* Element */) {
            var children = vNodeToClone.children;
            var props$1;
            var propsToClone$1 = vNodeToClone.props;
            if (propsToClone$1 === null) {
                props$1 = EMPTY_OBJ;
            } else {
                props$1 = {};
                for (var key$1 in propsToClone$1) {
                    props$1[key$1] = propsToClone$1[key$1];
                }
            }
            newVNode = createVNode(flags, vNodeToClone.type, vNodeToClone.className, children, props$1, vNodeToClone.key, vNodeToClone.ref, !children);
        } else if (flags & 1 /* Text */) {
            newVNode = createTextVNode(vNodeToClone.children, vNodeToClone.key);
        }
    return newVNode;
}
/*
 directClone is preferred over cloneVNode and used internally also.
 This function makes Inferno backwards compatible.
 And can be tree-shaked by modern bundlers

 Would be nice to combine this with directClone but could not do it without breaking change
 */
/**
 * Clones given virtual node by creating new instance of it
 * @param {VNode} vNodeToClone virtual node to be cloned
 * @param {Props=} props additional props for new virtual node
 * @param {...*} _children new children for new virtual node
 * @returns {VNode} new virtual node
 */
function cloneVNode(vNodeToClone, props) {
    var _children = [],
        len$2 = arguments.length - 2;
    while (len$2-- > 0) {
        _children[len$2] = arguments[len$2 + 2];
    }var children = _children;
    var childrenLen = _children.length;
    if (childrenLen > 0 && !isUndefined(_children[0])) {
        if (!props) {
            props = {};
        }
        if (childrenLen === 1) {
            children = _children[0];
        }
        if (!isUndefined(children)) {
            props.children = children;
        }
    }
    var newVNode;
    if (isArray(vNodeToClone)) {
        var tmpArray = [];
        for (var i = 0, len = vNodeToClone.length; i < len; i++) {
            tmpArray.push(directClone(vNodeToClone[i]));
        }
        newVNode = tmpArray;
    } else {
        var flags = vNodeToClone.flags;
        var className = vNodeToClone.className;
        var key = vNodeToClone.key;
        var ref = vNodeToClone.ref;
        if (props) {
            if (props.hasOwnProperty("className")) {
                className = props.className;
            }
            if (props.hasOwnProperty("ref")) {
                ref = props.ref;
            }
            if (props.hasOwnProperty("key")) {
                key = props.key;
            }
        }
        if (flags & 28 /* Component */) {
                newVNode = createVNode(flags, vNodeToClone.type, className, null, !vNodeToClone.props && !props ? EMPTY_OBJ : combineFrom(vNodeToClone.props, props), key, ref, true);
                var newProps = newVNode.props;
                if (newProps) {
                    var newChildren = newProps.children;
                    // we need to also clone component children that are in props
                    // as the children may also have been hoisted
                    if (newChildren) {
                        if (isArray(newChildren)) {
                            var len$1 = newChildren.length;
                            if (len$1 > 0) {
                                var tmpArray$1 = [];
                                for (var i$1 = 0; i$1 < len$1; i$1++) {
                                    var child = newChildren[i$1];
                                    if (isStringOrNumber(child)) {
                                        tmpArray$1.push(child);
                                    } else if (!isInvalid(child) && isVNode(child)) {
                                        tmpArray$1.push(directClone(child));
                                    }
                                }
                                newProps.children = tmpArray$1;
                            }
                        } else if (isVNode(newChildren)) {
                            newProps.children = directClone(newChildren);
                        }
                    }
                }
                newVNode.children = null;
            } else if (flags & 3970 /* Element */) {
                children = props && !isUndefined(props.children) ? props.children : vNodeToClone.children;
                newVNode = createVNode(flags, vNodeToClone.type, className, children, !vNodeToClone.props && !props ? EMPTY_OBJ : combineFrom(vNodeToClone.props, props), key, ref, false);
            } else if (flags & 1 /* Text */) {
                newVNode = createTextVNode(vNodeToClone.children, key);
            }
    }
    return newVNode;
}
function createVoidVNode() {
    return createVNode(4096 /* Void */, null);
}
function createTextVNode(text, key) {
    return createVNode(1 /* Text */, null, null, text, null, key);
}
function isVNode(o) {
    return !!o.flags;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function applyKey(key, vNode) {
    vNode.key = key;
    return vNode;
}
function applyKeyIfMissing(key, vNode) {
    if (isNumber(key)) {
        key = "." + key;
    }
    if (isNull(vNode.key) || vNode.key[0] === ".") {
        return applyKey(key, vNode);
    }
    return vNode;
}
function applyKeyPrefix(key, vNode) {
    vNode.key = key + vNode.key;
    return vNode;
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        var key = currentKey + "." + index;
        if (!isInvalid(n)) {
            if (isArray(n)) {
                _normalizeVNodes(n, result, 0, key);
            } else {
                if (isStringOrNumber(n)) {
                    n = createTextVNode(n, null);
                } else if (isVNode(n) && n.dom || n.key && n.key[0] === ".") {
                    n = directClone(n);
                }
                if (isNull(n.key) || n.key[0] === ".") {
                    n = applyKey(key, n);
                } else {
                    n = applyKeyPrefix(currentKey, n);
                }
                result.push(n);
            }
        }
    }
}
function normalizeVNodes(nodes) {
    var newNodes;
    // we assign $ which basically means we've flagged this array for future note
    // if it comes back again, we need to clone it, as people are using it
    // in an immutable way
    // tslint:disable
    if (nodes["$"] === true) {
        nodes = nodes.slice();
    } else {
        nodes["$"] = true;
    }
    // tslint:enable
    for (var i = 0, len = nodes.length; i < len; i++) {
        var n = nodes[i];
        if (isInvalid(n) || isArray(n)) {
            var result = (newNodes || nodes).slice(0, i);
            _normalizeVNodes(nodes, result, i, "");
            return result;
        } else if (isStringOrNumber(n)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, createTextVNode(n, null)));
        } else if (isVNode(n) && n.dom !== null || isNull(n.key) && (n.flags & 64 /* HasNonKeyedChildren */) === 0) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, directClone(n)));
        } else if (newNodes) {
            newNodes.push(applyKeyIfMissing(i, directClone(n)));
        }
    }
    return newNodes || nodes;
}
function normalizeChildren(children) {
    if (isArray(children)) {
        return normalizeVNodes(children);
    } else if (isVNode(children) && children.dom !== null) {
        return directClone(children);
    }
    return children;
}
function normalizeProps(vNode, props, children) {
    if (vNode.flags & 3970 /* Element */) {
            if (isNullOrUndef(children) && props.hasOwnProperty("children")) {
                vNode.children = props.children;
            }
            if (props.hasOwnProperty("className")) {
                vNode.className = props.className || null;
                delete props.className;
            }
        }
    if (props.hasOwnProperty("ref")) {
        vNode.ref = props.ref;
        delete props.ref;
    }
    if (props.hasOwnProperty("key")) {
        vNode.key = props.key;
        delete props.key;
    }
}
function getFlagsForElementVnode(type) {
    if (type === "svg") {
        return 128 /* SvgElement */;
    } else if (type === "input") {
        return 512 /* InputElement */;
    } else if (type === "select") {
        return 2048 /* SelectElement */;
    } else if (type === "textarea") {
        return 1024 /* TextareaElement */;
    } else if (type === "media") {
        return 256 /* MediaElement */;
    }
    return 2 /* HtmlElement */;
}
function normalize(vNode) {
    var props = vNode.props;
    var children = vNode.children;
    // convert a wrongly created type back to element
    // Primitive node doesn't have defaultProps, only Component
    if (vNode.flags & 28 /* Component */) {
            // set default props
            var type = vNode.type;
            var defaultProps = type.defaultProps;
            if (!isNullOrUndef(defaultProps)) {
                if (!props) {
                    props = vNode.props = defaultProps; // Create new object if only defaultProps given
                } else {
                    for (var prop in defaultProps) {
                        if (isUndefined(props[prop])) {
                            props[prop] = defaultProps[prop];
                        }
                    }
                }
            }
            if (isString(type)) {
                vNode.flags = getFlagsForElementVnode(type);
                if (props && props.children) {
                    vNode.children = props.children;
                    children = props.children;
                }
            }
        }
    if (props) {
        normalizeProps(vNode, props, children);
        if (!isInvalid(props.children)) {
            props.children = normalizeChildren(props.children);
        }
    }
    if (!isInvalid(children)) {
        vNode.children = normalizeChildren(children);
    }
    if (process.env.NODE_ENV !== "production") {
        // This code will be stripped out from production CODE
        // It helps users to track errors in their applications.
        var verifyKeys = function verifyKeys(vNodes) {
            var keyValues = vNodes.map(function (vnode) {
                return vnode.key;
            });
            keyValues.some(function (item, idx) {
                var hasDuplicate = keyValues.indexOf(item) !== idx;
                if (hasDuplicate) {
                    warning("Inferno normalisation(...): Encountered two children with same key, all keys must be unique within its siblings. Duplicated key is:" + item);
                }
                return hasDuplicate;
            });
        };
        if (vNode.children && Array.isArray(vNode.children)) {
            verifyKeys(vNode.children);
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
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

/**
 * @module Inferno
 */ /** TypeDoc Comment */
/* tslint:disable:object-literal-sort-keys */
if (process.env.NODE_ENV !== "production") {
    /* tslint:disable-next-line:no-empty */
    var testFunc = function testFn() {};
    if ((testFunc.name || testFunc.toString()).indexOf("testFn") === -1) {
        warning("It looks like you're using a minified copy of the development build " + "of Inferno. When deploying Inferno apps to production, make sure to use " + "the production build which skips development warnings and is faster. " + "See http://infernojs.org for more details.");
    }
}
var version = "3.7.1";
// we duplicate it so it plays nicely with different module loading systems
var index = {
    EMPTY_OBJ: EMPTY_OBJ,
    NO_OP: NO_OP,
    cloneVNode: cloneVNode,
    createRenderer: createRenderer,
    createVNode: createVNode,
    findDOMNode: findDOMNode,
    getFlagsForElementVnode: getFlagsForElementVnode,
    internal_DOMNodeMap: componentToDOMNodeMap,
    internal_isUnitlessNumber: isUnitlessNumber,
    internal_normalize: normalize,
    internal_patch: patch,
    linkEvent: linkEvent,
    options: options,
    render: render,
    version: version
};

exports['default'] = index;
exports.EMPTY_OBJ = EMPTY_OBJ;
exports.NO_OP = NO_OP;
exports.cloneVNode = cloneVNode;
exports.createRenderer = createRenderer;
exports.createVNode = createVNode;
exports.findDOMNode = findDOMNode;
exports.getFlagsForElementVnode = getFlagsForElementVnode;
exports.internal_DOMNodeMap = componentToDOMNodeMap;
exports.internal_isUnitlessNumber = isUnitlessNumber;
exports.internal_normalize = normalize;
exports.internal_patch = patch;
exports.linkEvent = linkEvent;
exports.options = options;
exports.render = render;
exports.version = version;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
var NO_OP = "$NO_OP";
var ERROR_MSG = "a runtime error occured! Use Inferno in development environment to find the error.";
// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== "undefined" && window.document);
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = Array.isArray;
function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}
function isStringOrNumber(o) {
    var type = typeof o === 'undefined' ? 'undefined' : _typeof(o);
    return type === "string" || type === "number";
}
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
function isFunction(o) {
    return typeof o === "function";
}
function isString(o) {
    return typeof o === "string";
}
function isNumber(o) {
    return typeof o === "number";
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
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === "object";
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error("Inferno Error: " + message);
}
function warning(message) {
    // tslint:disable-next-line:no-console
    console.warn(message);
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
function Lifecycle() {
    this.listeners = [];
}
Lifecycle.prototype.addListener = function addListener(callback) {
    this.listeners.push(callback);
};
Lifecycle.prototype.trigger = function trigger() {
    var listeners = this.listeners;
    var listener;
    // We need to remove current listener from array when calling it, because more listeners might be added
    while (listener = listeners.shift()) {
        listener();
    }
};

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var options = {
    afterMount: null,
    afterRender: null,
    afterUpdate: null,
    beforeRender: null,
    beforeUnmount: null,
    createVNode: null,
    findDOMNodeEnabled: false,
    recyclingEnabled: false,
    roots: []
};

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var xlinkNS = "http://www.w3.org/1999/xlink";
var xmlNS = "http://www.w3.org/XML/1998/namespace";
var svgNS = "http://www.w3.org/2000/svg";
var strictProps = new Set();
strictProps.add("volume");
strictProps.add("defaultChecked");
var booleanProps = new Set();
booleanProps.add("muted");
booleanProps.add("scoped");
booleanProps.add("loop");
booleanProps.add("open");
booleanProps.add("checked");
booleanProps.add("default");
booleanProps.add("capture");
booleanProps.add("disabled");
booleanProps.add("readOnly");
booleanProps.add("required");
booleanProps.add("autoplay");
booleanProps.add("controls");
booleanProps.add("seamless");
booleanProps.add("reversed");
booleanProps.add("allowfullscreen");
booleanProps.add("novalidate");
booleanProps.add("hidden");
booleanProps.add("autoFocus");
booleanProps.add("selected");
var namespaces = new Map();
namespaces.set("xlink:href", xlinkNS);
namespaces.set("xlink:arcrole", xlinkNS);
namespaces.set("xlink:actuate", xlinkNS);
namespaces.set("xlink:show", xlinkNS);
namespaces.set("xlink:role", xlinkNS);
namespaces.set("xlink:title", xlinkNS);
namespaces.set("xlink:type", xlinkNS);
namespaces.set("xml:base", xmlNS);
namespaces.set("xml:lang", xmlNS);
namespaces.set("xml:space", xmlNS);
var isUnitlessNumber = new Set();
isUnitlessNumber.add("animationIterationCount");
isUnitlessNumber.add("borderImageOutset");
isUnitlessNumber.add("borderImageSlice");
isUnitlessNumber.add("borderImageWidth");
isUnitlessNumber.add("boxFlex");
isUnitlessNumber.add("boxFlexGroup");
isUnitlessNumber.add("boxOrdinalGroup");
isUnitlessNumber.add("columnCount");
isUnitlessNumber.add("flex");
isUnitlessNumber.add("flexGrow");
isUnitlessNumber.add("flexPositive");
isUnitlessNumber.add("flexShrink");
isUnitlessNumber.add("flexNegative");
isUnitlessNumber.add("flexOrder");
isUnitlessNumber.add("gridRow");
isUnitlessNumber.add("gridColumn");
isUnitlessNumber.add("fontWeight");
isUnitlessNumber.add("lineClamp");
isUnitlessNumber.add("lineHeight");
isUnitlessNumber.add("opacity");
isUnitlessNumber.add("order");
isUnitlessNumber.add("orphans");
isUnitlessNumber.add("tabSize");
isUnitlessNumber.add("widows");
isUnitlessNumber.add("zIndex");
isUnitlessNumber.add("zoom");
isUnitlessNumber.add("fillOpacity");
isUnitlessNumber.add("floodOpacity");
isUnitlessNumber.add("stopOpacity");
isUnitlessNumber.add("strokeDasharray");
isUnitlessNumber.add("strokeDashoffset");
isUnitlessNumber.add("strokeMiterlimit");
isUnitlessNumber.add("strokeOpacity");
isUnitlessNumber.add("strokeWidth");
var skipProps = new Set();
skipProps.add("children");
skipProps.add("childrenType");
skipProps.add("defaultValue");
skipProps.add("ref");
skipProps.add("key");
skipProps.add("checked");
skipProps.add("multiple");
var delegatedEvents = new Set();
delegatedEvents.add("onClick");
delegatedEvents.add("onMouseDown");
delegatedEvents.add("onMouseUp");
delegatedEvents.add("onMouseMove");
delegatedEvents.add("onSubmit");
delegatedEvents.add("onDblClick");
delegatedEvents.add("onKeyDown");
delegatedEvents.add("onKeyUp");
delegatedEvents.add("onKeyPress");

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var isiOS = isBrowser && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var delegatedEvents$1 = new Map();
function handleEvent(name, lastEvent, nextEvent, dom) {
    var delegatedRoots = delegatedEvents$1.get(name);
    if (nextEvent) {
        if (!delegatedRoots) {
            delegatedRoots = { items: new Map(), docEvent: null };
            delegatedRoots.docEvent = attachEventToDocument(name, delegatedRoots);
            delegatedEvents$1.set(name, delegatedRoots);
        }
        if (!lastEvent) {
            if (isiOS && name === "onClick") {
                trapClickOnNonInteractiveElement(dom);
            }
        }
        delegatedRoots.items.set(dom, nextEvent);
    } else if (delegatedRoots) {
        var items = delegatedRoots.items;
        if (items.delete(dom)) {
            // If any items were deleted, check if listener need to be removed
            if (items.size === 0) {
                document.removeEventListener(normalizeEventName(name), delegatedRoots.docEvent);
                delegatedEvents$1.delete(name);
            }
        }
    }
}
function dispatchEvent(event, target, items, count, isClick, eventData) {
    var eventsToTrigger = items.get(target);
    if (eventsToTrigger) {
        count--;
        // linkEvent object
        eventData.dom = target;
        if (eventsToTrigger.event) {
            eventsToTrigger.event(eventsToTrigger.data, event);
        } else {
            eventsToTrigger(event);
        }
        if (event.cancelBubble) {
            return;
        }
    }
    if (count > 0) {
        var parentDom = target.parentNode;
        // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
        // because the event listener is on document.body
        // Don't process clicks on disabled elements
        if (parentDom === null || isClick && parentDom.nodeType === 1 && parentDom.disabled) {
            return;
        }
        dispatchEvent(event, parentDom, items, count, isClick, eventData);
    }
}
function normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function stopPropagation() {
    this.cancelBubble = true;
    this.stopImmediatePropagation();
}
function attachEventToDocument(name, delegatedRoots) {
    var docEvent = function docEvent(event) {
        var count = delegatedRoots.items.size;
        if (count > 0) {
            event.stopPropagation = stopPropagation;
            // Event data needs to be object to save reference to currentTarget getter
            var eventData = {
                dom: document
            };
            try {
                Object.defineProperty(event, "currentTarget", {
                    configurable: true,
                    get: function get() {
                        return eventData.dom;
                    }
                });
            } catch (e) {
                /* safari7 and phantomJS will crash */
            }
            dispatchEvent(event, event.target, delegatedRoots.items, count, event.type === "click", eventData);
        }
    };
    document.addEventListener(normalizeEventName(name), docEvent);
    return docEvent;
}
// tslint:disable-next-line:no-empty
function emptyFn() {}
function trapClickOnNonInteractiveElement(dom) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
    // Just set it using the onclick property so that we don't have to manage any
    // bookkeeping for it. Not sure if we need to clear it when the listener is
    // removed.
    // TODO: Only do this for the relevant Safaris maybe?
    dom.onclick = emptyFn;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function isCheckedType(type) {
    return type === "checkbox" || type === "radio";
}
function onTextInputChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onInput) {
        var event = props.onInput;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue(newProps, dom);
    }
}
function wrappedOnChange(e) {
    var props = this.vNode.props || EMPTY_OBJ;
    var event = props.onChange;
    if (event.event) {
        event.event(event.data, e);
    } else {
        event(e);
    }
}
function onCheckboxChange(e) {
    e.stopPropagation(); // This click should not propagate its for internal use
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    if (props.onClick) {
        var event = props.onClick;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (props.onclick) {
        props.onclick(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    applyValue(newProps, dom);
}
function processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue(nextPropsOrEmpty, dom);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            if (isCheckedType(nextPropsOrEmpty.type)) {
                dom.onclick = onCheckboxChange;
                dom.onclick.wrapped = true;
            } else {
                dom.oninput = onTextInputChange;
                dom.oninput.wrapped = true;
            }
            if (nextPropsOrEmpty.onChange) {
                dom.onchange = wrappedOnChange;
                dom.onchange.wrapped = true;
            }
        }
    }
}
function applyValue(nextPropsOrEmpty, dom) {
    var type = nextPropsOrEmpty.type;
    var value = nextPropsOrEmpty.value;
    var checked = nextPropsOrEmpty.checked;
    var multiple = nextPropsOrEmpty.multiple;
    var defaultValue = nextPropsOrEmpty.defaultValue;
    var hasValue = !isNullOrUndef(value);
    if (type && type !== dom.type) {
        dom.setAttribute("type", type);
    }
    if (multiple && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!isNullOrUndef(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + "";
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

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function updateChildOptionGroup(vNode, value) {
    var type = vNode.type;
    if (type === "optgroup") {
        var children = vNode.children;
        if (isArray(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOption(children[i], value);
            }
        } else if (isVNode(children)) {
            updateChildOption(children, value);
        }
    } else {
        updateChildOption(vNode, value);
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if (isArray(value) && value.indexOf(props.value) !== -1 || props.value === value) {
        dom.selected = true;
    } else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {
        dom.selected = props.selected || false;
    }
}
function onSelectChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onChange) {
        var event = props.onChange;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (props.onchange) {
        props.onchange(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue$1(newVNode, dom, newProps, false);
    }
}
function processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue$1(vNode, dom, nextPropsOrEmpty, mounting);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            dom.onchange = onSelectChange;
            dom.onchange.wrapped = true;
        }
    }
}
function applyValue$1(vNode, dom, nextPropsOrEmpty, mounting) {
    if (nextPropsOrEmpty.multiple !== dom.multiple) {
        dom.multiple = nextPropsOrEmpty.multiple;
    }
    var children = vNode.children;
    if (!isInvalid(children)) {
        var value = nextPropsOrEmpty.value;
        if (mounting && isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        if (isArray(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOptionGroup(children[i], value);
            }
        } else if (isVNode(children)) {
            updateChildOptionGroup(children, value);
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function wrappedOnChange$1(e) {
    var props = this.vNode.props || EMPTY_OBJ;
    var event = props.onChange;
    if (event.event) {
        event.event(event.data, e);
    } else {
        event(e);
    }
}
function onTextareaInputChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var previousValue = props.value;
    if (props.onInput) {
        var event = props.onInput;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue$2(newVNode, vNode.dom, false);
    }
}
function processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue$2(nextPropsOrEmpty, dom, mounting);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            dom.oninput = onTextareaInputChange;
            dom.oninput.wrapped = true;
            if (nextPropsOrEmpty.onChange) {
                dom.onchange = wrappedOnChange$1;
                dom.onchange.wrapped = true;
            }
        }
    }
}
function applyValue$2(nextPropsOrEmpty, dom, mounting) {
    var value = nextPropsOrEmpty.value;
    var domValue = dom.value;
    if (isNullOrUndef(value)) {
        if (mounting) {
            var defaultValue = nextPropsOrEmpty.defaultValue;
            if (!isNullOrUndef(defaultValue)) {
                if (defaultValue !== domValue) {
                    dom.defaultValue = defaultValue;
                    dom.value = defaultValue;
                }
            } else if (domValue !== "") {
                dom.defaultValue = "";
                dom.value = "";
            }
        }
    } else {
        /* There is value so keep it controlled */
        if (domValue !== value) {
            dom.defaultValue = value;
            dom.value = value;
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
/**
 * There is currently no support for switching same input between controlled and nonControlled
 * If that ever becomes a real issue, then re design controlled elements
 * Currently user must choose either controlled or non-controlled and stick with that
 */
function processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    if (flags & 512 /* InputElement */) {
            processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
        }
    if (flags & 2048 /* SelectElement */) {
            processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
        }
    if (flags & 1024 /* TextareaElement */) {
            processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
        }
}
function isControlledFormElement(nextPropsOrEmpty) {
    return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type) ? !isNullOrUndef(nextPropsOrEmpty.checked) : !isNullOrUndef(nextPropsOrEmpty.value);
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function normalizeChildNodes(parentDom) {
    var dom = parentDom.firstChild;
    while (dom) {
        if (dom.nodeType === 8) {
            if (dom.data === "!") {
                var placeholder = document.createTextNode("");
                parentDom.replaceChild(placeholder, dom);
                dom = dom.nextSibling;
            } else {
                var lastDom = dom.previousSibling;
                parentDom.removeChild(dom);
                dom = lastDom || parentDom.firstChild;
            }
        } else {
            dom = dom.nextSibling;
        }
    }
}
function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
    var type = vNode.type;
    var ref = vNode.ref;
    var props = vNode.props || EMPTY_OBJ;
    if (isClass) {
        var _isSVG = dom.namespaceURI === svgNS;
        var instance = createClassComponentInstance(vNode, type, props, context, _isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vNode = vNode;
        hydrate(input, dom, lifecycle, instance._childContext, _isSVG);
        vNode.dom = input.dom;
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false; // Mount finished allow going sync
        if (options.findDOMNodeEnabled) {
            componentToDOMNodeMap.set(instance, dom);
        }
    } else {
        var input$1 = createFunctionalComponentInput(vNode, type, props, context);
        hydrate(input$1, dom, lifecycle, context, isSVG);
        vNode.children = input$1;
        vNode.dom = input$1.dom;
        mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
    }
    return dom;
}
function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var flags = vNode.flags;
    var ref = vNode.ref;
    isSVG = isSVG || (flags & 128 /* SvgElement */) > 0;
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.type) {
        if (process.env.NODE_ENV !== "production") {
            warning("Inferno hydration: Server-side markup doesn't match client-side markup or Initial render target is not empty");
        }
        var newDom = mountElement(vNode, null, lifecycle, context, isSVG);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    vNode.dom = dom;
    if (!isInvalid(children)) {
        hydrateChildren(children, dom, lifecycle, context, isSVG);
    } else if (dom.firstChild !== null) {
        dom.textContent = ""; // dom has content, but VNode has no children remove everything from DOM
    }
    if (props) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (!isNullOrUndef(className)) {
        if (isSVG) {
            dom.setAttribute("class", className);
        } else {
            dom.className = className;
        }
    } else {
        if (dom.className !== "") {
            dom.removeAttribute("class");
        }
    }
    if (ref) {
        mountRef(dom, ref, lifecycle);
    }
    return dom;
}
function hydrateChildren(children, parentDom, lifecycle, context, isSVG) {
    normalizeChildNodes(parentDom);
    var dom = parentDom.firstChild;
    if (isStringOrNumber(children)) {
        if (!isNull(dom) && dom.nodeType === 3) {
            if (dom.nodeValue !== children) {
                dom.nodeValue = children;
            }
        } else if (children === "") {
            parentDom.appendChild(document.createTextNode(""));
        } else {
            parentDom.textContent = children;
        }
        if (!isNull(dom)) {
            dom = dom.nextSibling;
        }
    } else if (isArray(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!isNull(child) && isObject(child)) {
                if (!isNull(dom)) {
                    var nextSibling = dom.nextSibling;
                    hydrate(child, dom, lifecycle, context, isSVG);
                    dom = nextSibling;
                } else {
                    mount(child, parentDom, lifecycle, context, isSVG);
                }
            }
        }
    } else {
        // It's VNode
        if (!isNull(dom)) {
            hydrate(children, dom, lifecycle, context, isSVG);
            dom = dom.nextSibling;
        } else {
            mount(children, parentDom, lifecycle, context, isSVG);
        }
    }
    // clear any other DOM nodes, there should be only a single entry for the root
    while (dom) {
        var nextSibling$1 = dom.nextSibling;
        parentDom.removeChild(dom);
        dom = nextSibling$1;
    }
}
function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = mountText(vNode, null);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    var text = vNode.children;
    if (dom.nodeValue !== text) {
        dom.nodeValue = text;
    }
    vNode.dom = dom;
    return dom;
}
function hydrateVoid(vNode, dom) {
    vNode.dom = dom;
    return dom;
}
function hydrate(vNode, dom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
            hydrateComponent(vNode, dom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
        } else if (flags & 3970 /* Element */) {
            hydrateElement(vNode, dom, lifecycle, context, isSVG);
        } else if (flags & 1 /* Text */) {
            hydrateText(vNode, dom);
        } else if (flags & 4096 /* Void */) {
            hydrateVoid(vNode, dom);
        } else {
        if (process.env.NODE_ENV !== "production") {
            throwError("hydrate() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) + "\".");
        }
        throwError();
    }
}
function hydrateRoot(input, parentDom, lifecycle) {
    if (!isNull(parentDom)) {
        var dom = parentDom.firstChild;
        if (!isNull(dom)) {
            hydrate(input, dom, lifecycle, EMPTY_OBJ, false);
            dom = parentDom.firstChild;
            // clear any other DOM nodes, there should be only a single entry for the root
            while (dom = dom.nextSibling) {
                parentDom.removeChild(dom);
            }
            return true;
        }
    }
    return false;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var componentPools = new Map();
var elementPools = new Map();
function recycleElement(vNode, lifecycle, context, isSVG) {
    var tag = vNode.type;
    var pools = elementPools.get(tag);
    if (!isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!isUndefined(recycledVNode)) {
                patchElement(recycledVNode, vNode, null, lifecycle, context, isSVG, true);
                return vNode.dom;
            }
        }
    }
    return null;
}
function poolElement(vNode) {
    var tag = vNode.type;
    var key = vNode.key;
    var pools = elementPools.get(tag);
    if (isUndefined(pools)) {
        pools = {
            keyed: new Map(),
            nonKeyed: []
        };
        elementPools.set(tag, pools);
    }
    if (isNull(key)) {
        pools.nonKeyed.push(vNode);
    } else {
        var pool = pools.keyed.get(key);
        if (isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}
function recycleComponent(vNode, lifecycle, context, isSVG) {
    var type = vNode.type;
    var pools = componentPools.get(type);
    if (!isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!isUndefined(recycledVNode)) {
                var flags = vNode.flags;
                var failed = patchComponent(recycledVNode, vNode, null, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0, true);
                if (!failed) {
                    return vNode.dom;
                }
            }
        }
    }
    return null;
}
function poolComponent(vNode) {
    var hooks = vNode.ref;
    var nonRecycleHooks = hooks && (hooks.onComponentWillMount || hooks.onComponentWillUnmount || hooks.onComponentDidMount || hooks.onComponentWillUpdate || hooks.onComponentDidUpdate);
    if (nonRecycleHooks) {
        return;
    }
    var type = vNode.type;
    var key = vNode.key;
    var pools = componentPools.get(type);
    if (isUndefined(pools)) {
        pools = {
            keyed: new Map(),
            nonKeyed: []
        };
        componentPools.set(type, pools);
    }
    if (isNull(key)) {
        pools.nonKeyed.push(vNode);
    } else {
        var pool = pools.keyed.get(key);
        if (isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function unmount(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
            unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling);
        } else if (flags & 3970 /* Element */) {
            unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling);
        } else if (flags & (1 /* Text */ | 4096 /* Void */)) {
        unmountVoidOrText(vNode, parentDom);
    }
}
function unmountVoidOrText(vNode, parentDom) {
    if (!isNull(parentDom)) {
        removeChild(parentDom, vNode.dom);
    }
}
function unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var instance = vNode.children;
    var flags = vNode.flags;
    var isStatefulComponent$$1 = flags & 4;
    var props = vNode.props || EMPTY_OBJ;
    var ref = vNode.ref;
    var dom = vNode.dom;
    if (!isRecycling) {
        if (isStatefulComponent$$1) {
            if (!instance._unmounted) {
                if (!isNull(options.beforeUnmount)) {
                    options.beforeUnmount(vNode);
                }
                if (!isUndefined(instance.componentWillUnmount)) {
                    instance.componentWillUnmount();
                }
                if (ref && !isRecycling) {
                    ref(null);
                }
                instance._unmounted = true;
                if (options.findDOMNodeEnabled) {
                    componentToDOMNodeMap.delete(instance);
                }
                unmount(instance._lastInput, null, instance._lifecycle, false, isRecycling);
            }
        } else {
            if (!isNullOrUndef(ref)) {
                if (!isNullOrUndef(ref.onComponentWillUnmount)) {
                    ref.onComponentWillUnmount(dom, props);
                }
            }
            unmount(instance, null, lifecycle, false, isRecycling);
        }
    }
    if (parentDom) {
        var lastInput = instance._lastInput;
        if (isNullOrUndef(lastInput)) {
            lastInput = instance;
        }
        removeChild(parentDom, dom);
    }
    if (options.recyclingEnabled && !isStatefulComponent$$1 && (parentDom || canRecycle)) {
        poolComponent(vNode);
    }
}
function unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var dom = vNode.dom;
    var ref = vNode.ref;
    var props = vNode.props;
    if (ref && !isRecycling) {
        unmountRef(ref);
    }
    var children = vNode.children;
    if (!isNullOrUndef(children)) {
        unmountChildren$1(children, lifecycle, isRecycling);
    }
    if (!isNull(props)) {
        for (var name in props) {
            // do not add a hasOwnProperty check here, it affects performance
            if (props[name] !== null && isAttrAnEvent(name)) {
                patchEvent(name, props[name], null, dom);
                // We need to set this null, because same props otherwise come back if SCU returns false and we are recyling
                props[name] = null;
            }
        }
    }
    if (!isNull(parentDom)) {
        removeChild(parentDom, dom);
    }
    if (options.recyclingEnabled && (parentDom || canRecycle)) {
        poolElement(vNode);
    }
}
function unmountChildren$1(children, lifecycle, isRecycling) {
    if (isArray(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!isInvalid(child) && isObject(child)) {
                unmount(child, null, lifecycle, false, isRecycling);
            }
        }
    } else if (isObject(children)) {
        unmount(children, null, lifecycle, false, isRecycling);
    }
}
function unmountRef(ref) {
    if (isFunction(ref)) {
        ref(null);
    } else {
        if (isInvalid(ref)) {
            return;
        }
        if (process.env.NODE_ENV !== "production") {
            throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        throwError();
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
// rather than use a Map, like we did before, we can use an array here
// given there shouldn't be THAT many roots on the page, the difference
// in performance is huge: https://esbench.com/bench/5802a691330ab09900a1a2da
var componentToDOMNodeMap = new Map();
var roots = options.roots;
/**
 * When inferno.options.findDOMNOdeEnabled is true, this function will return DOM Node by component instance
 * @param ref Component instance
 * @returns {*|null} returns dom node
 */
function findDOMNode(ref) {
    if (!options.findDOMNodeEnabled) {
        if (process.env.NODE_ENV !== "production") {
            throwError("findDOMNode() has been disabled, use Inferno.options.findDOMNodeEnabled = true; enabled findDOMNode(). Warning this can significantly impact performance!");
        }
        throwError();
    }
    var dom = ref && ref.nodeType ? ref : null;
    return componentToDOMNodeMap.get(ref) || dom;
}
function getRoot(dom) {
    for (var i = 0, len = roots.length; i < len; i++) {
        var root = roots[i];
        if (root.dom === dom) {
            return root;
        }
    }
    return null;
}
function setRoot(dom, input, lifecycle) {
    var root = {
        dom: dom,
        input: input,
        lifecycle: lifecycle
    };
    roots.push(root);
    return root;
}
function removeRoot(root) {
    for (var i = 0, len = roots.length; i < len; i++) {
        if (roots[i] === root) {
            roots.splice(i, 1);
            return;
        }
    }
}
if (process.env.NODE_ENV !== "production") {
    if (isBrowser && document.body === null) {
        warning('Inferno warning: you cannot initialize inferno without "document.body". Wait on "DOMContentLoaded" event, add script to bottom of body, or use async/defer attributes on script tag.');
    }
}
var documentBody = isBrowser ? document.body : null;
/**
 * Renders virtual node tree into parent node.
 * @param {VNode | null | string | number} input vNode to be rendered
 * @param parentDom DOM node which content will be replaced by virtual node
 * @returns {InfernoChildren} rendered virtual node
 */
function render(input, parentDom) {
    if (documentBody === parentDom) {
        if (process.env.NODE_ENV !== "production") {
            throwError('you cannot render() to the "document.body". Use an empty element as a container instead.');
        }
        throwError();
    }
    if (input === NO_OP) {
        return;
    }
    var root = getRoot(parentDom);
    if (isNull(root)) {
        var lifecycle = new Lifecycle();
        if (!isInvalid(input)) {
            if (input.dom) {
                input = directClone(input);
            }
            if (!hydrateRoot(input, parentDom, lifecycle)) {
                mount(input, parentDom, lifecycle, EMPTY_OBJ, false);
            }
            root = setRoot(parentDom, input, lifecycle);
            lifecycle.trigger();
        }
    } else {
        var lifecycle$1 = root.lifecycle;
        lifecycle$1.listeners = [];
        if (isNullOrUndef(input)) {
            unmount(root.input, parentDom, lifecycle$1, false, false);
            removeRoot(root);
        } else {
            if (input.dom) {
                input = directClone(input);
            }
            patch(root.input, input, parentDom, lifecycle$1, EMPTY_OBJ, false, false);
        }
        root.input = input;
        lifecycle$1.trigger();
    }
    if (root) {
        var rootInput = root.input;
        if (rootInput && rootInput.flags & 28 /* Component */) {
                return rootInput.children;
            }
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

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    if (lastVNode !== nextVNode) {
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        if (nextFlags & 28 /* Component */) {
                var isClass = (nextFlags & 4 /* ComponentClass */) > 0;
                if (lastFlags & 28 /* Component */) {
                        patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling);
                    } else {
                    replaceVNode(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, isClass), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 3970 /* Element */) {
                if (lastFlags & 3970 /* Element */) {
                        patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
                    } else {
                    replaceVNode(parentDom, mountElement(nextVNode, null, lifecycle, context, isSVG), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 1 /* Text */) {
                if (lastFlags & 1 /* Text */) {
                        patchText(lastVNode, nextVNode);
                    } else {
                    replaceVNode(parentDom, mountText(nextVNode, null), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 4096 /* Void */) {
                if (lastFlags & 4096 /* Void */) {
                        patchVoid(lastVNode, nextVNode);
                    } else {
                    replaceVNode(parentDom, mountVoid(nextVNode, null), lastVNode, lifecycle, isRecycling);
                }
            } else {
            // Error case: mount new one replacing old one
            replaceLastChildAndUnmount(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function unmountChildren(children, dom, lifecycle, isRecycling) {
    if (isVNode(children)) {
        unmount(children, dom, lifecycle, true, isRecycling);
    } else if (isArray(children)) {
        removeAllChildren(dom, children, lifecycle, isRecycling);
    } else {
        dom.textContent = "";
    }
}
function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    var nextTag = nextVNode.type;
    var lastTag = lastVNode.type;
    if (lastTag !== nextTag) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
    } else {
        var dom = lastVNode.dom;
        var lastProps = lastVNode.props;
        var nextProps = nextVNode.props;
        var lastChildren = lastVNode.children;
        var nextChildren = nextVNode.children;
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        var nextRef = nextVNode.ref;
        var lastClassName = lastVNode.className;
        var nextClassName = nextVNode.className;
        nextVNode.dom = dom;
        isSVG = isSVG || (nextFlags & 128 /* SvgElement */) > 0;
        if (lastChildren !== nextChildren) {
            var childrenIsSVG = isSVG === true && nextVNode.type !== "foreignObject";
            patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, childrenIsSVG, isRecycling);
        }
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
            var nextPropsOrEmpty = nextProps || EMPTY_OBJ;
            var hasControlledValue = false;
            if (nextPropsOrEmpty !== EMPTY_OBJ) {
                var isFormElement = (nextFlags & 3584 /* FormElement */) > 0;
                if (isFormElement) {
                    hasControlledValue = isControlledFormElement(nextPropsOrEmpty);
                }
                for (var prop in nextPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    var nextValue = nextPropsOrEmpty[prop];
                    var lastValue = lastPropsOrEmpty[prop];
                    patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue);
                }
                if (isFormElement) {
                    // When inferno is recycling form element, we need to process it like it would be mounting
                    processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, isRecycling, hasControlledValue);
                }
            }
            if (lastPropsOrEmpty !== EMPTY_OBJ) {
                for (var prop$1 in lastPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    if (isNullOrUndef(nextPropsOrEmpty[prop$1]) && !isNullOrUndef(lastPropsOrEmpty[prop$1])) {
                        removeProp(prop$1, lastPropsOrEmpty[prop$1], dom, nextFlags);
                    }
                }
            }
        }
        // inlined patchProps  -- ends --
        if (lastClassName !== nextClassName) {
            if (isNullOrUndef(nextClassName)) {
                dom.removeAttribute("class");
            } else {
                if (isSVG) {
                    dom.setAttribute("class", nextClassName);
                } else {
                    dom.className = nextClassName;
                }
            }
        }
        if (nextRef) {
            if (lastVNode.ref !== nextRef || isRecycling) {
                mountRef(dom, nextRef, lifecycle);
            }
        }
    }
}
function patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var patchArray = false;
    var patchKeyed = false;
    if (nextFlags & 64 /* HasNonKeyedChildren */) {
            patchArray = true;
        } else if ((lastFlags & 32 /* HasKeyedChildren */) > 0 && (nextFlags & 32 /* HasKeyedChildren */) > 0) {
        patchKeyed = true;
        patchArray = true;
    } else if (isInvalid(nextChildren)) {
        unmountChildren(lastChildren, dom, lifecycle, isRecycling);
    } else if (isInvalid(lastChildren)) {
        if (isStringOrNumber(nextChildren)) {
            setTextContent(dom, nextChildren);
        } else {
            if (isArray(nextChildren)) {
                mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
            } else {
                mount(nextChildren, dom, lifecycle, context, isSVG);
            }
        }
    } else if (isStringOrNumber(nextChildren)) {
        if (isStringOrNumber(lastChildren)) {
            updateTextContent(dom, nextChildren);
        } else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            setTextContent(dom, nextChildren);
        }
    } else if (isArray(nextChildren)) {
        if (isArray(lastChildren)) {
            patchArray = true;
            if (isKeyed(lastChildren, nextChildren)) {
                patchKeyed = true;
            }
        } else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
        }
    } else if (isArray(lastChildren)) {
        removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
        mount(nextChildren, dom, lifecycle, context, isSVG);
    } else if (isVNode(nextChildren)) {
        if (isVNode(lastChildren)) {
            patch(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        } else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mount(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    if (patchArray) {
        if (patchKeyed) {
            patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        } else {
            patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling) {
    var lastType = lastVNode.type;
    var nextType = nextVNode.type;
    var lastKey = lastVNode.key;
    var nextKey = nextVNode.key;
    if (lastType !== nextType || lastKey !== nextKey) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        return false;
    } else {
        var nextProps = nextVNode.props || EMPTY_OBJ;
        if (isClass) {
            var instance = lastVNode.children;
            instance._updating = true;
            if (instance._unmounted) {
                if (isNull(parentDom)) {
                    return true;
                }
                replaceChild(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, (nextVNode.flags & 4 /* ComponentClass */) > 0), lastVNode.dom);
            } else {
                var hasComponentDidUpdate = !isUndefined(instance.componentDidUpdate);
                var nextState = instance.state;
                // When component has componentDidUpdate hook, we need to clone lastState or will be modified by reference during update
                var lastState = hasComponentDidUpdate ? combineFrom(nextState, null) : nextState;
                var lastProps = instance.props;
                var childContext;
                if (!isNullOrUndef(instance.getChildContext)) {
                    childContext = instance.getChildContext();
                }
                nextVNode.children = instance;
                instance._isSVG = isSVG;
                if (isNullOrUndef(childContext)) {
                    childContext = context;
                } else {
                    childContext = combineFrom(context, childContext);
                }
                var lastInput = instance._lastInput;
                var nextInput = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false, false);
                var didUpdate = true;
                instance._childContext = childContext;
                if (isInvalid(nextInput)) {
                    nextInput = createVoidVNode();
                } else if (nextInput === NO_OP) {
                    nextInput = lastInput;
                    didUpdate = false;
                } else if (isStringOrNumber(nextInput)) {
                    nextInput = createTextVNode(nextInput, null);
                } else if (isArray(nextInput)) {
                    if (process.env.NODE_ENV !== "production") {
                        throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
                    }
                    throwError();
                } else if (isObject(nextInput)) {
                    if (!isNull(nextInput.dom)) {
                        nextInput = directClone(nextInput);
                    }
                }
                if (nextInput.flags & 28 /* Component */) {
                        nextInput.parentVNode = nextVNode;
                    } else if (lastInput.flags & 28 /* Component */) {
                        lastInput.parentVNode = nextVNode;
                    }
                instance._lastInput = nextInput;
                instance._vNode = nextVNode;
                if (didUpdate) {
                    patch(lastInput, nextInput, parentDom, lifecycle, childContext, isSVG, isRecycling);
                    if (hasComponentDidUpdate && instance.componentDidUpdate) {
                        instance.componentDidUpdate(lastProps, lastState);
                    }
                    if (!isNull(options.afterUpdate)) {
                        options.afterUpdate(nextVNode);
                    }
                    if (options.findDOMNodeEnabled) {
                        componentToDOMNodeMap.set(instance, nextInput.dom);
                    }
                }
                nextVNode.dom = nextInput.dom;
            }
            instance._updating = false;
        } else {
            var shouldUpdate = true;
            var lastProps$1 = lastVNode.props;
            var nextHooks = nextVNode.ref;
            var nextHooksDefined = !isNullOrUndef(nextHooks);
            var lastInput$1 = lastVNode.children;
            var nextInput$1 = lastInput$1;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = lastInput$1;
            if (lastKey !== nextKey) {
                shouldUpdate = true;
            } else {
                if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentShouldUpdate)) {
                    shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps$1, nextProps);
                }
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(lastProps$1, nextProps);
                }
                nextInput$1 = nextType(nextProps, context);
                if (isInvalid(nextInput$1)) {
                    nextInput$1 = createVoidVNode();
                } else if (isStringOrNumber(nextInput$1) && nextInput$1 !== NO_OP) {
                    nextInput$1 = createTextVNode(nextInput$1, null);
                } else if (isArray(nextInput$1)) {
                    if (process.env.NODE_ENV !== "production") {
                        throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
                    }
                    throwError();
                } else if (isObject(nextInput$1)) {
                    if (!isNull(nextInput$1.dom)) {
                        nextInput$1 = directClone(nextInput$1);
                    }
                }
                if (nextInput$1 !== NO_OP) {
                    patch(lastInput$1, nextInput$1, parentDom, lifecycle, context, isSVG, isRecycling);
                    nextVNode.children = nextInput$1;
                    if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(lastProps$1, nextProps);
                    }
                    nextVNode.dom = nextInput$1.dom;
                }
            }
            if (nextInput$1.flags & 28 /* Component */) {
                    nextInput$1.parentVNode = nextVNode;
                } else if (lastInput$1.flags & 28 /* Component */) {
                    lastInput$1.parentVNode = nextVNode;
                }
        }
    }
    return false;
}
function patchText(lastVNode, nextVNode) {
    var nextText = nextVNode.children;
    var dom = lastVNode.dom;
    nextVNode.dom = dom;
    if (lastVNode.children !== nextText) {
        dom.nodeValue = nextText;
    }
}
function patchVoid(lastVNode, nextVNode) {
    nextVNode.dom = lastVNode.dom;
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var lastChildrenLength = lastChildren.length;
    var nextChildrenLength = nextChildren.length;
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    for (; i < commonLength; i++) {
        var nextChild = nextChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = directClone(nextChild);
        }
        patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG, isRecycling);
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            var nextChild$1 = nextChildren[i];
            if (nextChild$1.dom) {
                nextChild$1 = nextChildren[i] = directClone(nextChild$1);
            }
            appendChild(dom, mount(nextChild$1, null, lifecycle, context, isSVG));
        }
    } else if (nextChildrenLength === 0) {
        removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
    } else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            unmount(lastChildren[i], dom, lifecycle, false, isRecycling);
        }
    }
}
function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, isRecycling) {
    var aLength = a.length;
    var bLength = b.length;
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
    if (aLength === 0) {
        if (bLength > 0) {
            mountArrayChildren(b, dom, lifecycle, context, isSVG);
        }
        return;
    } else if (bLength === 0) {
        removeAllChildren(dom, a, lifecycle, isRecycling);
        return;
    }
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
    /* eslint no-constant-condition: 0 */
    outer: while (true) {
        // Sync nodes with the same key at the beginning.
        while (aStartNode.key === bStartNode.key) {
            patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
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
            patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
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
        // Move and sync nodes from right to left.
        if (aEndNode.key === bStartNode.key) {
            patch(aEndNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            insertOrAppend(dom, bStartNode.dom, aStartNode.dom);
            aEnd--;
            bStart++;
            aEndNode = a[aEnd];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = directClone(bStartNode);
            }
            continue;
        }
        // Move and sync nodes from left to right.
        if (aStartNode.key === bEndNode.key) {
            patch(aStartNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            insertOrAppend(dom, bEndNode.dom, nextNode);
            aStart++;
            bEnd--;
            aStartNode = a[aStart];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = directClone(bEndNode);
            }
            continue;
        }
        break;
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = directClone(node);
                }
                bStart++;
                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
            }
        }
    } else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            unmount(a[aStart++], dom, lifecycle, false, isRecycling);
        }
    } else {
        aLength = aEnd - aStart + 1;
        bLength = bEnd - bStart + 1;
        var sources = new Array(bLength);
        // Mark all nodes as inserted.
        for (i = 0; i < bLength; i++) {
            sources[i] = -1;
        }
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if (bLength <= 4 || aLength * bLength <= 16) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            } else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = directClone(bNode);
                            }
                            patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                            patched++;
                            a[i] = null;
                            break;
                        }
                    }
                }
            }
        } else {
            var keyIndex = new Map();
            // Map keys by their index in array
            for (i = bStart; i <= bEnd; i++) {
                keyIndex.set(b[i].key, i);
            }
            // Try to patch same keys
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    j = keyIndex.get(aNode.key);
                    if (!isUndefined(j)) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        } else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = directClone(bNode);
                        }
                        patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                        patched++;
                        a[i] = null;
                    }
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (aLength === a.length && patched === 0) {
            removeAllChildren(dom, a, lifecycle, isRecycling);
            while (bStart < bLength) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = directClone(node);
                }
                bStart++;
                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), null);
            }
        } else {
            i = aLength - patched;
            while (i > 0) {
                aNode = a[aStart++];
                if (!isNull(aNode)) {
                    unmount(aNode, dom, lifecycle, true, isRecycling);
                    i--;
                }
            }
            if (moved) {
                var seq = lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = directClone(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
                    } else {
                        if (j < 0 || i !== seq[j]) {
                            pos = i + bStart;
                            node = b[pos];
                            nextPos = pos + 1;
                            nextNode = nextPos < b.length ? b[nextPos].dom : null;
                            insertOrAppend(dom, node.dom, nextNode);
                        } else {
                            j--;
                        }
                    }
                }
            } else if (patched !== bLength) {
                // when patched count doesn't match b length we need to insert those new ones
                // loop backwards so we can use insertBefore
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = directClone(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
                    }
                }
            }
        }
    }
}
// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var p = arr.slice(0);
    var result = [0];
    var i;
    var j;
    var u;
    var v;
    var c;
    var len = arr.length;
    for (i = 0; i < len; i++) {
        var arrI = arr[i];
        if (arrI === -1) {
            continue;
        }
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
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}
function isAttrAnEvent(attr) {
    return attr[0] === "o" && attr[1] === "n";
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue) {
    if (lastValue !== nextValue) {
        if (skipProps.has(prop) || hasControlledValue && prop === "value") {
            return;
        } else if (booleanProps.has(prop)) {
            prop = prop === "autoFocus" ? prop.toLowerCase() : prop;
            dom[prop] = !!nextValue;
        } else if (strictProps.has(prop)) {
            var value = isNullOrUndef(nextValue) ? "" : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
        } else if (isAttrAnEvent(prop)) {
            patchEvent(prop, lastValue, nextValue, dom);
        } else if (isNullOrUndef(nextValue)) {
            dom.removeAttribute(prop);
        } else if (prop === "style") {
            patchStyle(lastValue, nextValue, dom);
        } else if (prop === "dangerouslySetInnerHTML") {
            var lastHtml = lastValue && lastValue.__html;
            var nextHtml = nextValue && nextValue.__html;
            if (lastHtml !== nextHtml) {
                if (!isNullOrUndef(nextHtml)) {
                    dom.innerHTML = nextHtml;
                }
            }
        } else {
            // We optimize for NS being boolean. Its 99.9% time false
            if (isSVG && namespaces.has(prop)) {
                // If we end up in this path we can read property again
                dom.setAttributeNS(namespaces.get(prop), prop, nextValue);
            } else {
                dom.setAttribute(prop, nextValue);
            }
        }
    }
}
function patchEvent(name, lastValue, nextValue, dom) {
    if (lastValue !== nextValue) {
        if (delegatedEvents.has(name)) {
            handleEvent(name, lastValue, nextValue, dom);
        } else {
            var nameLowerCase = name.toLowerCase();
            var domEvent = dom[nameLowerCase];
            // if the function is wrapped, that means it's been controlled by a wrapper
            if (domEvent && domEvent.wrapped) {
                return;
            }
            if (!isFunction(nextValue) && !isNullOrUndef(nextValue)) {
                var linkEvent = nextValue.event;
                if (linkEvent && isFunction(linkEvent)) {
                    dom[nameLowerCase] = function (e) {
                        linkEvent(nextValue.data, e);
                    };
                } else {
                    if (process.env.NODE_ENV !== "production") {
                        throwError("an event on a VNode \"" + name + "\". was not a function or a valid linkEvent.");
                    }
                    throwError();
                }
            } else {
                dom[nameLowerCase] = nextValue;
            }
        }
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
                domStyle[style] = !isNumber(value) || isUnitlessNumber.has(style) ? value : value + "px";
            }
        }
        for (style in lastAttrValue) {
            if (isNullOrUndef(nextAttrValue[style])) {
                domStyle[style] = "";
            }
        }
    } else {
        for (style in nextAttrValue) {
            value = nextAttrValue[style];
            domStyle[style] = !isNumber(value) || isUnitlessNumber.has(style) ? value : value + "px";
        }
    }
}
function removeProp(prop, lastValue, dom, nextFlags) {
    if (prop === "value") {
        // When removing value of select element, it needs to be set to null instead empty string, because empty string is valid value for option which makes that option selected
        // MS IE/Edge don't follow html spec for textArea and input elements and we need to set empty string to value in those cases to avoid "null" and "undefined" texts
        dom.value = nextFlags & 2048 /* SelectElement */ ? null : "";
    } else if (prop === "style") {
        dom.removeAttribute("style");
    } else if (isAttrAnEvent(prop)) {
        handleEvent(prop, lastValue, null, dom);
    } else {
        dom.removeAttribute(prop);
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function mount(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 3970 /* Element */) {
            return mountElement(vNode, parentDom, lifecycle, context, isSVG);
        } else if (flags & 28 /* Component */) {
            return mountComponent(vNode, parentDom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
        } else if (flags & 4096 /* Void */) {
            return mountVoid(vNode, parentDom);
        } else if (flags & 1 /* Text */) {
            return mountText(vNode, parentDom);
        } else {
        if (process.env.NODE_ENV !== "production") {
            if ((typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) === "object") {
                throwError("mount() received an object that's not a valid VNode, you should stringify it first. Object: \"" + JSON.stringify(vNode) + "\".");
            } else {
                throwError("mount() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) + "\".");
            }
        }
        throwError();
    }
}
function mountText(vNode, parentDom) {
    var dom = document.createTextNode(vNode.children);
    vNode.dom = dom;
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountVoid(vNode, parentDom) {
    var dom = document.createTextNode("");
    vNode.dom = dom;
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
    var dom;
    if (options.recyclingEnabled) {
        dom = recycleElement(vNode, lifecycle, context, isSVG);
        if (!isNull(dom)) {
            if (!isNull(parentDom)) {
                appendChild(parentDom, dom);
            }
            return dom;
        }
    }
    var flags = vNode.flags;
    isSVG = isSVG || (flags & 128 /* SvgElement */) > 0;
    dom = documentCreateElement(vNode.type, isSVG);
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var ref = vNode.ref;
    vNode.dom = dom;
    if (!isInvalid(children)) {
        if (isStringOrNumber(children)) {
            setTextContent(dom, children);
        } else {
            var childrenIsSVG = isSVG === true && vNode.type !== "foreignObject";
            if (isArray(children)) {
                mountArrayChildren(children, dom, lifecycle, context, childrenIsSVG);
            } else if (isVNode(children)) {
                mount(children, dom, lifecycle, context, childrenIsSVG);
            }
        }
    }
    if (!isNull(props)) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (className !== null) {
        if (isSVG) {
            dom.setAttribute("class", className);
        } else {
            dom.className = className;
        }
    }
    if (!isNull(ref)) {
        mountRef(dom, ref, lifecycle);
    }
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        // Verify can string/number be here. might cause de-opt. - Normalization takes care of it.
        if (!isInvalid(child)) {
            if (child.dom) {
                children[i] = child = directClone(child);
            }
            mount(children[i], dom, lifecycle, context, isSVG);
        }
    }
}
function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
    var dom;
    if (options.recyclingEnabled) {
        dom = recycleComponent(vNode, lifecycle, context, isSVG);
        if (!isNull(dom)) {
            if (!isNull(parentDom)) {
                appendChild(parentDom, dom);
            }
            return dom;
        }
    }
    var type = vNode.type;
    var props = vNode.props || EMPTY_OBJ;
    var ref = vNode.ref;
    if (isClass) {
        var instance = createClassComponentInstance(vNode, type, props, context, isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vNode = vNode;
        vNode.dom = dom = mount(input, null, lifecycle, instance._childContext, isSVG);
        if (!isNull(parentDom)) {
            appendChild(parentDom, dom);
        }
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false;
        if (options.findDOMNodeEnabled) {
            componentToDOMNodeMap.set(instance, dom);
        }
    } else {
        var input$1 = createFunctionalComponentInput(vNode, type, props, context);
        vNode.dom = dom = mount(input$1, null, lifecycle, context, isSVG);
        vNode.children = input$1;
        mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
        if (!isNull(parentDom)) {
            appendChild(parentDom, dom);
        }
    }
    return dom;
}
function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
    if (ref) {
        if (isFunction(ref)) {
            ref(instance);
        } else {
            if (process.env.NODE_ENV !== "production") {
                if (isStringOrNumber(ref)) {
                    throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
                } else if (isObject(ref) && vNode.flags & 4 /* ComponentClass */) {
                        throwError("functional component lifecycle events are not supported on ES2015 class components.");
                    } else {
                    throwError("a bad value for \"ref\" was used on component: \"" + JSON.stringify(ref) + "\"");
                }
            }
            throwError();
        }
    }
    var hasDidMount = !isUndefined(instance.componentDidMount);
    var afterMount = options.afterMount;
    if (hasDidMount || !isNull(afterMount)) {
        lifecycle.addListener(function () {
            instance._updating = true;
            if (afterMount) {
                afterMount(vNode);
            }
            if (hasDidMount) {
                instance.componentDidMount();
            }
            instance._updating = false;
        });
    }
}
function mountFunctionalComponentCallbacks(props, ref, dom, lifecycle) {
    if (ref) {
        if (!isNullOrUndef(ref.onComponentWillMount)) {
            ref.onComponentWillMount(props);
        }
        if (!isNullOrUndef(ref.onComponentDidMount)) {
            lifecycle.addListener(function () {
                return ref.onComponentDidMount(dom, props);
            });
        }
    }
}
function mountRef(dom, value, lifecycle) {
    if (isFunction(value)) {
        lifecycle.addListener(function () {
            return value(dom);
        });
    } else {
        if (isInvalid(value)) {
            return;
        }
        if (process.env.NODE_ENV !== "production") {
            throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        throwError();
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
var EMPTY_OBJ = {};
if (process.env.NODE_ENV !== "production") {
    Object.freeze(EMPTY_OBJ);
}
function createClassComponentInstance(vNode, Component, props, context, isSVG, lifecycle) {
    if (isUndefined(context)) {
        context = EMPTY_OBJ; // Context should not be mutable
    }
    var instance = new Component(props, context);
    vNode.children = instance;
    instance._blockSetState = false;
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    // setState callbacks must fire after render is done when called from componentWillReceiveProps or componentWillMount
    instance._lifecycle = lifecycle;
    instance._unmounted = false;
    instance._pendingSetState = true;
    instance._isSVG = isSVG;
    if (!isNullOrUndef(instance.componentWillMount)) {
        instance._blockRender = true;
        instance.componentWillMount();
        instance._blockRender = false;
    }
    var childContext;
    if (!isNullOrUndef(instance.getChildContext)) {
        childContext = instance.getChildContext();
    }
    if (isNullOrUndef(childContext)) {
        instance._childContext = context;
    } else {
        instance._childContext = combineFrom(context, childContext);
    }
    if (!isNull(options.beforeRender)) {
        options.beforeRender(instance);
    }
    var input = instance.render(props, instance.state, context);
    if (!isNull(options.afterRender)) {
        options.afterRender(instance);
    }
    if (isArray(input)) {
        if (process.env.NODE_ENV !== "production") {
            throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
        }
        throwError();
    } else if (isInvalid(input)) {
        input = createVoidVNode();
    } else if (isStringOrNumber(input)) {
        input = createTextVNode(input, null);
    } else {
        if (input.dom) {
            input = directClone(input);
        }
        if (input.flags & 28 /* Component */) {
                // if we have an input that is also a component, we run into a tricky situation
                // where the root vNode needs to always have the correct DOM entry
                // so we break monomorphism on our input and supply it our vNode as parentVNode
                // we can optimise this in the future, but this gets us out of a lot of issues
                input.parentVNode = vNode;
            }
    }
    instance._pendingSetState = false;
    instance._lastInput = input;
    return instance;
}
function replaceLastChildAndUnmount(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling) {
    replaceVNode(parentDom, mount(nextInput, null, lifecycle, context, isSVG), lastInput, lifecycle, isRecycling);
}
function replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
    unmount(vNode, null, lifecycle, false, isRecycling);
    replaceChild(parentDom, dom, vNode.dom);
}
function createFunctionalComponentInput(vNode, component, props, context) {
    var input = component(props, context);
    if (isArray(input)) {
        if (process.env.NODE_ENV !== "production") {
            throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
        }
        throwError();
    } else if (isInvalid(input)) {
        input = createVoidVNode();
    } else if (isStringOrNumber(input)) {
        input = createTextVNode(input, null);
    } else {
        if (input.dom) {
            input = directClone(input);
        }
        if (input.flags & 28 /* Component */) {
                // if we have an input that is also a component, we run into a tricky situation
                // where the root vNode needs to always have the correct DOM entry
                // so we break monomorphism on our input and supply it our vNode as parentVNode
                // we can optimise this in the future, but this gets us out of a lot of issues
                input.parentVNode = vNode;
            }
    }
    return input;
}
function setTextContent(dom, text) {
    if (text !== "") {
        dom.textContent = text;
    } else {
        dom.appendChild(document.createTextNode(""));
    }
}
function updateTextContent(dom, text) {
    dom.firstChild.nodeValue = text;
}
function appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
function insertOrAppend(parentDom, newNode, nextNode) {
    if (isNullOrUndef(nextNode)) {
        appendChild(parentDom, newNode);
    } else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(svgNS, tag);
    } else {
        return document.createElement(tag);
    }
}
function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    unmount(lastNode, null, lifecycle, false, isRecycling);
    var dom = mount(nextNode, null, lifecycle, context, isSVG);
    nextNode.dom = dom;
    replaceChild(parentDom, dom, lastNode.dom);
}
function replaceChild(parentDom, nextDom, lastDom) {
    if (!parentDom) {
        parentDom = lastDom.parentNode;
    }
    parentDom.replaceChild(nextDom, lastDom);
}
function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
function removeAllChildren(dom, children, lifecycle, isRecycling) {
    if (!options.recyclingEnabled || options.recyclingEnabled && !isRecycling) {
        removeChildren(null, children, lifecycle, isRecycling);
    }
    dom.textContent = "";
}
function removeChildren(dom, children, lifecycle, isRecycling) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        if (!isInvalid(child)) {
            unmount(child, dom, lifecycle, true, isRecycling);
        }
    }
}
function isKeyed(lastChildren, nextChildren) {
    return nextChildren.length > 0 && !isNullOrUndef(nextChildren[0]) && !isNullOrUndef(nextChildren[0].key) && lastChildren.length > 0 && !isNullOrUndef(lastChildren[0]) && !isNullOrUndef(lastChildren[0].key);
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function VNode(children, className, flags, key, props, ref, type) {
    this.children = children;
    this.className = className;
    this.dom = null;
    this.flags = flags;
    this.key = key;
    this.props = props;
    this.ref = ref;
    this.type = type;
}
/**
 * Creates virtual node
 * @param {number} flags
 * @param {string|Function|null} type
 * @param {string|null=} className
 * @param {object=} children
 * @param {object=} props
 * @param {*=} key
 * @param {object|Function=} ref
 * @param {boolean=} noNormalise
 * @returns {VNode} returns new virtual node
 */
function createVNode(flags, type, className, children, props, key, ref, noNormalise) {
    if (flags & 16 /* ComponentUnknown */) {
            flags = isStatefulComponent(type) ? 4 /* ComponentClass */
            : 8 /* ComponentFunction */;
        }
    var vNode = new VNode(children === void 0 ? null : children, className === void 0 ? null : className, flags, key === void 0 ? null : key, props === void 0 ? null : props, ref === void 0 ? null : ref, type);
    if (noNormalise !== true) {
        normalize(vNode);
    }
    if (options.createVNode !== null) {
        options.createVNode(vNode);
    }
    return vNode;
}
function directClone(vNodeToClone) {
    var newVNode;
    var flags = vNodeToClone.flags;
    if (flags & 28 /* Component */) {
            var props;
            var propsToClone = vNodeToClone.props;
            if (isNull(propsToClone)) {
                props = EMPTY_OBJ;
            } else {
                props = {};
                for (var key in propsToClone) {
                    props[key] = propsToClone[key];
                }
            }
            newVNode = createVNode(flags, vNodeToClone.type, null, null, props, vNodeToClone.key, vNodeToClone.ref, true);
            var newProps = newVNode.props;
            var newChildren = newProps.children;
            // we need to also clone component children that are in props
            // as the children may also have been hoisted
            if (newChildren) {
                if (isArray(newChildren)) {
                    var len = newChildren.length;
                    if (len > 0) {
                        var tmpArray = [];
                        for (var i = 0; i < len; i++) {
                            var child = newChildren[i];
                            if (isStringOrNumber(child)) {
                                tmpArray.push(child);
                            } else if (!isInvalid(child) && isVNode(child)) {
                                tmpArray.push(directClone(child));
                            }
                        }
                        newProps.children = tmpArray;
                    }
                } else if (isVNode(newChildren)) {
                    newProps.children = directClone(newChildren);
                }
            }
            newVNode.children = null;
        } else if (flags & 3970 /* Element */) {
            var children = vNodeToClone.children;
            var props$1;
            var propsToClone$1 = vNodeToClone.props;
            if (propsToClone$1 === null) {
                props$1 = EMPTY_OBJ;
            } else {
                props$1 = {};
                for (var key$1 in propsToClone$1) {
                    props$1[key$1] = propsToClone$1[key$1];
                }
            }
            newVNode = createVNode(flags, vNodeToClone.type, vNodeToClone.className, children, props$1, vNodeToClone.key, vNodeToClone.ref, !children);
        } else if (flags & 1 /* Text */) {
            newVNode = createTextVNode(vNodeToClone.children, vNodeToClone.key);
        }
    return newVNode;
}
/*
 directClone is preferred over cloneVNode and used internally also.
 This function makes Inferno backwards compatible.
 And can be tree-shaked by modern bundlers

 Would be nice to combine this with directClone but could not do it without breaking change
 */
/**
 * Clones given virtual node by creating new instance of it
 * @param {VNode} vNodeToClone virtual node to be cloned
 * @param {Props=} props additional props for new virtual node
 * @param {...*} _children new children for new virtual node
 * @returns {VNode} new virtual node
 */
function cloneVNode(vNodeToClone, props) {
    var _children = [],
        len$2 = arguments.length - 2;
    while (len$2-- > 0) {
        _children[len$2] = arguments[len$2 + 2];
    }var children = _children;
    var childrenLen = _children.length;
    if (childrenLen > 0 && !isUndefined(_children[0])) {
        if (!props) {
            props = {};
        }
        if (childrenLen === 1) {
            children = _children[0];
        }
        if (!isUndefined(children)) {
            props.children = children;
        }
    }
    var newVNode;
    if (isArray(vNodeToClone)) {
        var tmpArray = [];
        for (var i = 0, len = vNodeToClone.length; i < len; i++) {
            tmpArray.push(directClone(vNodeToClone[i]));
        }
        newVNode = tmpArray;
    } else {
        var flags = vNodeToClone.flags;
        var className = vNodeToClone.className;
        var key = vNodeToClone.key;
        var ref = vNodeToClone.ref;
        if (props) {
            if (props.hasOwnProperty("className")) {
                className = props.className;
            }
            if (props.hasOwnProperty("ref")) {
                ref = props.ref;
            }
            if (props.hasOwnProperty("key")) {
                key = props.key;
            }
        }
        if (flags & 28 /* Component */) {
                newVNode = createVNode(flags, vNodeToClone.type, className, null, !vNodeToClone.props && !props ? EMPTY_OBJ : combineFrom(vNodeToClone.props, props), key, ref, true);
                var newProps = newVNode.props;
                if (newProps) {
                    var newChildren = newProps.children;
                    // we need to also clone component children that are in props
                    // as the children may also have been hoisted
                    if (newChildren) {
                        if (isArray(newChildren)) {
                            var len$1 = newChildren.length;
                            if (len$1 > 0) {
                                var tmpArray$1 = [];
                                for (var i$1 = 0; i$1 < len$1; i$1++) {
                                    var child = newChildren[i$1];
                                    if (isStringOrNumber(child)) {
                                        tmpArray$1.push(child);
                                    } else if (!isInvalid(child) && isVNode(child)) {
                                        tmpArray$1.push(directClone(child));
                                    }
                                }
                                newProps.children = tmpArray$1;
                            }
                        } else if (isVNode(newChildren)) {
                            newProps.children = directClone(newChildren);
                        }
                    }
                }
                newVNode.children = null;
            } else if (flags & 3970 /* Element */) {
                children = props && !isUndefined(props.children) ? props.children : vNodeToClone.children;
                newVNode = createVNode(flags, vNodeToClone.type, className, children, !vNodeToClone.props && !props ? EMPTY_OBJ : combineFrom(vNodeToClone.props, props), key, ref, false);
            } else if (flags & 1 /* Text */) {
                newVNode = createTextVNode(vNodeToClone.children, key);
            }
    }
    return newVNode;
}
function createVoidVNode() {
    return createVNode(4096 /* Void */, null);
}
function createTextVNode(text, key) {
    return createVNode(1 /* Text */, null, null, text, null, key);
}
function isVNode(o) {
    return !!o.flags;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function applyKey(key, vNode) {
    vNode.key = key;
    return vNode;
}
function applyKeyIfMissing(key, vNode) {
    if (isNumber(key)) {
        key = "." + key;
    }
    if (isNull(vNode.key) || vNode.key[0] === ".") {
        return applyKey(key, vNode);
    }
    return vNode;
}
function applyKeyPrefix(key, vNode) {
    vNode.key = key + vNode.key;
    return vNode;
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        var key = currentKey + "." + index;
        if (!isInvalid(n)) {
            if (isArray(n)) {
                _normalizeVNodes(n, result, 0, key);
            } else {
                if (isStringOrNumber(n)) {
                    n = createTextVNode(n, null);
                } else if (isVNode(n) && n.dom || n.key && n.key[0] === ".") {
                    n = directClone(n);
                }
                if (isNull(n.key) || n.key[0] === ".") {
                    n = applyKey(key, n);
                } else {
                    n = applyKeyPrefix(currentKey, n);
                }
                result.push(n);
            }
        }
    }
}
function normalizeVNodes(nodes) {
    var newNodes;
    // we assign $ which basically means we've flagged this array for future note
    // if it comes back again, we need to clone it, as people are using it
    // in an immutable way
    // tslint:disable
    if (nodes["$"] === true) {
        nodes = nodes.slice();
    } else {
        nodes["$"] = true;
    }
    // tslint:enable
    for (var i = 0, len = nodes.length; i < len; i++) {
        var n = nodes[i];
        if (isInvalid(n) || isArray(n)) {
            var result = (newNodes || nodes).slice(0, i);
            _normalizeVNodes(nodes, result, i, "");
            return result;
        } else if (isStringOrNumber(n)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, createTextVNode(n, null)));
        } else if (isVNode(n) && n.dom !== null || isNull(n.key) && (n.flags & 64 /* HasNonKeyedChildren */) === 0) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, directClone(n)));
        } else if (newNodes) {
            newNodes.push(applyKeyIfMissing(i, directClone(n)));
        }
    }
    return newNodes || nodes;
}
function normalizeChildren(children) {
    if (isArray(children)) {
        return normalizeVNodes(children);
    } else if (isVNode(children) && children.dom !== null) {
        return directClone(children);
    }
    return children;
}
function normalizeProps(vNode, props, children) {
    if (vNode.flags & 3970 /* Element */) {
            if (isNullOrUndef(children) && props.hasOwnProperty("children")) {
                vNode.children = props.children;
            }
            if (props.hasOwnProperty("className")) {
                vNode.className = props.className || null;
                delete props.className;
            }
        }
    if (props.hasOwnProperty("ref")) {
        vNode.ref = props.ref;
        delete props.ref;
    }
    if (props.hasOwnProperty("key")) {
        vNode.key = props.key;
        delete props.key;
    }
}
function getFlagsForElementVnode(type) {
    if (type === "svg") {
        return 128 /* SvgElement */;
    } else if (type === "input") {
        return 512 /* InputElement */;
    } else if (type === "select") {
        return 2048 /* SelectElement */;
    } else if (type === "textarea") {
        return 1024 /* TextareaElement */;
    } else if (type === "media") {
        return 256 /* MediaElement */;
    }
    return 2 /* HtmlElement */;
}
function normalize(vNode) {
    var props = vNode.props;
    var children = vNode.children;
    // convert a wrongly created type back to element
    // Primitive node doesn't have defaultProps, only Component
    if (vNode.flags & 28 /* Component */) {
            // set default props
            var type = vNode.type;
            var defaultProps = type.defaultProps;
            if (!isNullOrUndef(defaultProps)) {
                if (!props) {
                    props = vNode.props = defaultProps; // Create new object if only defaultProps given
                } else {
                    for (var prop in defaultProps) {
                        if (isUndefined(props[prop])) {
                            props[prop] = defaultProps[prop];
                        }
                    }
                }
            }
            if (isString(type)) {
                vNode.flags = getFlagsForElementVnode(type);
                if (props && props.children) {
                    vNode.children = props.children;
                    children = props.children;
                }
            }
        }
    if (props) {
        normalizeProps(vNode, props, children);
        if (!isInvalid(props.children)) {
            props.children = normalizeChildren(props.children);
        }
    }
    if (!isInvalid(children)) {
        vNode.children = normalizeChildren(children);
    }
    if (process.env.NODE_ENV !== "production") {
        // This code will be stripped out from production CODE
        // It helps users to track errors in their applications.
        var verifyKeys = function verifyKeys(vNodes) {
            var keyValues = vNodes.map(function (vnode) {
                return vnode.key;
            });
            keyValues.some(function (item, idx) {
                var hasDuplicate = keyValues.indexOf(item) !== idx;
                if (hasDuplicate) {
                    warning("Inferno normalisation(...): Encountered two children with same key, all keys must be unique within its siblings. Duplicated key is:" + item);
                }
                return hasDuplicate;
            });
        };
        if (vNode.children && Array.isArray(vNode.children)) {
            verifyKeys(vNode.children);
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
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

/**
 * @module Inferno
 */ /** TypeDoc Comment */
/* tslint:disable:object-literal-sort-keys */
if (process.env.NODE_ENV !== "production") {
    /* tslint:disable-next-line:no-empty */
    var testFunc = function testFn() {};
    if ((testFunc.name || testFunc.toString()).indexOf("testFn") === -1) {
        warning("It looks like you're using a minified copy of the development build " + "of Inferno. When deploying Inferno apps to production, make sure to use " + "the production build which skips development warnings and is faster. " + "See http://infernojs.org for more details.");
    }
}
var version = "3.7.0";
// we duplicate it so it plays nicely with different module loading systems
var index = {
    EMPTY_OBJ: EMPTY_OBJ,
    NO_OP: NO_OP,
    cloneVNode: cloneVNode,
    createRenderer: createRenderer,
    createVNode: createVNode,
    findDOMNode: findDOMNode,
    getFlagsForElementVnode: getFlagsForElementVnode,
    internal_DOMNodeMap: componentToDOMNodeMap,
    internal_isUnitlessNumber: isUnitlessNumber,
    internal_normalize: normalize,
    internal_patch: patch,
    linkEvent: linkEvent,
    options: options,
    render: render,
    version: version
};

exports['default'] = index;
exports.EMPTY_OBJ = EMPTY_OBJ;
exports.NO_OP = NO_OP;
exports.cloneVNode = cloneVNode;
exports.createRenderer = createRenderer;
exports.createVNode = createVNode;
exports.findDOMNode = findDOMNode;
exports.getFlagsForElementVnode = getFlagsForElementVnode;
exports.internal_DOMNodeMap = componentToDOMNodeMap;
exports.internal_isUnitlessNumber = isUnitlessNumber;
exports.internal_normalize = normalize;
exports.internal_patch = patch;
exports.linkEvent = linkEvent;
exports.options = options;
exports.render = render;
exports.version = version;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(115).default;
module.exports.default = module.exports;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Dropdown = __webpack_require__(13);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonDropdown = function ButtonDropdown(props) {
  return (0, _inferno.createVNode)(16, _Dropdown2.default, null, null, _extends({
    'group': true
  }, props));
};

exports.default = ButtonDropdown;

/***/ }),
/* 36 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var CardBlock = function CardBlock(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'card-block'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

CardBlock.defaultProps = defaultProps;

exports.default = CardBlock;

/***/ }),
/* 37 */
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

var _lodash = __webpack_require__(122);

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
  var className = props.className,
      cssModule = props.cssModule,
      widths = props.widths,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'widths', 'tag']);

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

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

Col.defaultProps = defaultProps;

exports.default = Col;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _Dropdown = __webpack_require__(13);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _inferno = __webpack_require__(0);

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

  return (0, _inferno.createVNode)(16, _Dropdown2.default, null, null, _extends({}, attributes, {
    'tag': Tag,
    'className': classes
  }));
};

NavDropdown.defaultProps = defaultProps;

exports.default = NavDropdown;

/***/ }),
/* 39 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var Row = function Row(props) {
  var className = props.className,
      cssModule = props.cssModule,
      noGutters = props.noGutters,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'noGutters', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, noGutters ? 'no-gutters' : null, 'row'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

Row.defaultProps = defaultProps;

exports.default = Row;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _lodash = __webpack_require__(121);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactstrapTether = __webpack_require__(126);

var _reactstrapTether2 = _interopRequireDefault(_reactstrapTether);

var _compat = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  isOpen: false,
  tetherRef: function tetherRef() {}
};

var TetherContent = function (_Component) {
  _inherits(TetherContent, _Component);

  function TetherContent(props) {
    _classCallCheck(this, TetherContent);

    var _this = _possibleConstructorReturn(this, (TetherContent.__proto__ || Object.getPrototypeOf(TetherContent)).call(this, props));

    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  _createClass(TetherContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      } else if (this._element) {
        // rerender
        this.renderIntoSubtree();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.hide();
    }
  }, {
    key: 'getTarget',
    value: function getTarget() {
      var target = this.props.tether.target;

      if ((0, _lodash2.default)(target)) {
        return target();
      }

      return target;
    }
  }, {
    key: 'getTetherConfig',
    value: function getTetherConfig() {
      var config = _extends({}, this.props.tether);

      config.element = this._element;
      config.target = this.getTarget();
      return config;
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(e) {
      var container = this._element;
      if (e.target === container || !container.contains(e.target)) {
        this.toggle();
      }
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
    key: 'hide',
    value: function hide() {
      document.removeEventListener('click', this.handleDocumentClick, true);

      if (this._element) {
        document.body.removeChild(this._element);
        (0, _compat.unmountComponentAtNode)(this._element);
        this._element = null;
      }

      if (this._tether) {
        this._tether.destroy();
        this._tether = null;
        this.props.tetherRef(this._tether);
      }
    }
  }, {
    key: 'show',
    value: function show() {
      document.addEventListener('click', this.handleDocumentClick, true);

      this._element = document.createElement('div');
      this._element.className = this.props.className;
      document.body.appendChild(this._element);
      this.renderIntoSubtree();
      this._tether = new _reactstrapTether2.default(this.getTetherConfig());
      this.props.tetherRef(this._tether);
      this._tether.position();
      this._element.childNodes[0].focus();
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
    key: 'renderIntoSubtree',
    value: function renderIntoSubtree() {
      (0, _compat.unstable_renderSubtreeIntoContainer)(this, this.renderChildren(), this._element);
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _props = this.props,
          children = _props.children,
          style = _props.style;
      // Was: return React.cloneElement( ?> const cloneElement = injectStringRefs(cloneVNode);

      return (0, _inferno.cloneVNode)(children, { style: style });
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return TetherContent;
}(_infernoComponent2.default);

TetherContent.defaultProps = defaultProps;

exports.default = TetherContent;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Badges',
    children: [(0, _inferno.createVNode)(16, _components.Narrative, null, null, {
      children: (0, _inferno.createVNode)(2, 'p', null, 'Small and adaptive tag for adding context to just about any content.')
    }), (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: [(0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(2, 'h2', null, ['Some nice text ', (0, _inferno.createVNode)(16, _Badge2.default, null, null, {
          children: 'new'
        })]), (0, _inferno.createVNode)(2, 'h3', null, ['Some nice text ', (0, _inferno.createVNode)(16, _Badge2.default, null, null, {
          children: 'new'
        })]), (0, _inferno.createVNode)(2, 'h4', null, ['Some nice text ', (0, _inferno.createVNode)(16, _Badge2.default, null, null, {
          children: 'new'
        })]), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<h2>Some nice text <Badge>new</Badge></h2>\n<h3>Some nice text <Badge>new</Badge></h3>\n<h4>Some nice text <Badge>new</Badge></h4>'
        })]
      }), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(2, 'h5', null, ['Some nice text ', (0, _inferno.createVNode)(16, _Badge2.default, null, null, {
          'pill': true,
          'color': 'danger',
          children: '10'
        })]), (0, _inferno.createVNode)(2, 'p', null, ['Some nice text ', (0, _inferno.createVNode)(16, _Badge2.default, null, null, {
          'pill': true,
          'color': 'danger',
          children: '10'
        })]), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<h5>Some nice text <Badge pill color="danger">10</Badge></h5>\n<p>Some nice text <Badge pill color="danger">10</Badge></p>'
        })]
      })]
    })]
  });
};

var _components = __webpack_require__(4);

var _Badge = __webpack_require__(60);

var _Badge2 = _interopRequireDefault(_Badge);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Breadcrumbs',
    children: [(0, _inferno.createVNode)(16, _components.Narrative, null, null, {
      children: (0, _inferno.createVNode)(2, 'p', null, ['Indicate the current page\u2019s location within a navigational hierarchy. Separators are automatically added in CSS through ', (0, _inferno.createVNode)(2, 'a', null, (0, _inferno.createVNode)(2, 'code', 'highlighter-rouge', '::before'), {
        'href': 'https://developer.mozilla.org/en-US/docs/Web/CSS/::before'
      }), ' and ', (0, _inferno.createVNode)(2, 'a', null, [' ', (0, _inferno.createVNode)(2, 'code', 'highlighter-rouge', 'content')], {
        'href': 'https://developer.mozilla.org/en-US/docs/Web/CSS/content'
      }), '.'])
    }), (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Breadcrumb2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _BreadcrumbItem2.default, null, null, {
            children: (0, _inferno.createVNode)(2, 'a', null, 'Home', {
              'href': '#'
            })
          }), (0, _inferno.createVNode)(16, _BreadcrumbItem2.default, null, null, {
            children: (0, _inferno.createVNode)(2, 'a', null, 'Section', {
              'href': '#'
            })
          }), (0, _inferno.createVNode)(16, _BreadcrumbItem2.default, null, null, {
            'active': 'true',
            children: 'This page'
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Breadcrumb>\n  <BreadcrumbItem>\n    <a href="#">Home</a>\n  </BreadcrumbItem>\n  <BreadcrumbItem>\n    <a href="#">Section</a>\n  </BreadcrumbItem>\n  <BreadcrumbItem active="true">\n    This page\n  </BreadcrumbItem>\n</Breadcrumb>'
        })]
      })
    })]
  });
};

var _components = __webpack_require__(4);

var _Breadcrumb = __webpack_require__(61);

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _BreadcrumbItem = __webpack_require__(62);

var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return (0, _inferno.createVNode)(2, 'div', null, [(0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Buttons',
    children: [(0, _inferno.createVNode)(16, _components.Narrative, null, null, {
      children: (0, _inferno.createVNode)(2, 'p', null, 'Use Bootstrap\u2019s custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.')
    }), (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: [(0, _inferno.createVNode)(2, 'h3', null, 'Standard Buttons'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'color': 'primary',
          children: 'primary'
        }), ' ', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'color': 'secondary',
          children: 'secondary'
        }), ' ', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'color': 'success',
          children: 'success'
        }), ' ', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'color': 'info',
          children: 'info'
        }), ' ', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'color': 'warning',
          children: 'warning'
        }), ' ', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'color': 'danger',
          children: 'danger'
        }), ' ', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'color': 'link',
          children: 'link'
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Button color="primary">primary</Button>\n<Button color="secondary">secondary</Button>\n<Button color="success">success</Button>\n<Button color="info">info</Button>\n<Button color="warning">warning</Button>\n<Button color="danger">danger</Button>\n<Button color="link">link</Button>'
        })]
      }), (0, _inferno.createVNode)(2, 'h3', null, 'Outline Buttons'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'outline': true,
          'color': 'primary',
          children: 'primary'
        }), ' ', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'outline': true,
          'color': 'secondary',
          children: 'secondary'
        }), ' ', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'outline': true,
          'color': 'success',
          children: 'success'
        }), ' ', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'outline': true,
          'color': 'info',
          children: 'info'
        }), ' ', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'outline': true,
          'color': 'warning',
          children: 'warning'
        }), ' ', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'outline': true,
          'color': 'danger',
          children: 'danger'
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Button outline color="primary">primary</Button>\n<Button outline color="secondary">secondary</Button>\n<Button outline color="success">success</Button>\n<Button outline color="info">info</Button>\n<Button outline color="warning">warning</Button>\n<Button outline color="danger">danger</Button>'
        })]
      }), (0, _inferno.createVNode)(2, 'h3', null, 'Different sizes'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'color': 'primary',
          'size': 'lg',
          children: 'Large Button'
        }), ' ', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'color': 'secondary',
          'size': 'lg',
          children: 'Large Button'
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Button color="primary" size="lg">Large Button</Button>\n<Button color="secondary" size="lg">Large Button</Button>'
        })]
      }), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'color': 'primary',
          'size': 'sm',
          children: 'Small Button'
        }), ' ', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'color': 'secondary',
          'size': 'sm',
          children: 'Small Button'
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Button color="primary" size="sm">Small Button</Button>\n<Button color="secondary" size="sm">Small Button</Button>'
        })]
      }), (0, _inferno.createVNode)(2, 'h3', null, 'Block Level Buttons'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'color': 'primary',
          'size': 'lg',
          'block': true,
          children: 'Block level button'
        }), (0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'color': 'secondary',
          'size': 'lg',
          'block': true,
          children: 'Block level button'
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Button color="primary" size="lg" block>Block level button</Button>\n<Button color="secondary" size="lg" block>Block level button</Button>'
        })]
      }), (0, _inferno.createVNode)(2, 'h3', null, 'Disabled Buttons'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'color': 'primary',
          'size': 'lg',
          'disabled': true,
          children: 'Primary button'
        }), ' ', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
          'color': 'secondary',
          'size': 'lg',
          'disabled': true,
          children: 'Button'
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Button color="primary" size="lg" disabled>Primary button</Button>\n<Button color="secondary" size="lg" disabled>Button</Button>'
        })]
      })]
    })]
  }), (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Radio Buttons',
    children: (0, _inferno.createVNode)(16, RadioButtonStage)
  }), (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Button Group',
    children: [(0, _inferno.createVNode)(16, _components.Narrative, null, null, {
      children: (0, _inferno.createVNode)(2, 'p', null, 'Group a series of buttons together on a single line with the button group.')
    }), (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _ButtonGroup2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _Button2.default, null, null, {
            children: 'Left'
          }), ' ', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
            children: 'Middle'
          }), ' ', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
            children: 'Right'
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<ButtonGroup>\n  <Button>Left</Button>\n  <Button>Middle</Button>\n  <Button>Right</Button>\n</ButtonGroup>'
        })]
      })
    })]
  }), (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Button Toolbar',
    children: [(0, _inferno.createVNode)(16, _components.Narrative, null, null, {
      children: (0, _inferno.createVNode)(2, 'p', null, 'Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.')
    }), (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _ButtonToolbar2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _ButtonGroup2.default, null, null, {
            'className': 'mr-2',
            children: [(0, _inferno.createVNode)(16, _Button2.default, null, null, {
              children: 'Store'
            }), (0, _inferno.createVNode)(16, _Button2.default, null, null, {
              children: 'Update'
            }), (0, _inferno.createVNode)(16, _Button2.default, null, null, {
              children: 'Stay'
            }), (0, _inferno.createVNode)(16, _Button2.default, null, null, {
              children: 'Flow'
            })]
          }), (0, _inferno.createVNode)(16, _ButtonGroup2.default, null, null, {
            'className': 'mr-2',
            children: [(0, _inferno.createVNode)(16, _Button2.default, null, null, {
              children: '5'
            }), (0, _inferno.createVNode)(16, _Button2.default, null, null, {
              children: '6'
            }), (0, _inferno.createVNode)(16, _Button2.default, null, null, {
              children: '7'
            })]
          }), (0, _inferno.createVNode)(16, _ButtonGroup2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _Button2.default, null, null, {
              children: '8'
            })
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<ButtonToolbar>\n  <ButtonGroup className="mr-2">\n    <Button>Store</Button>\n    <Button>Update</Button>\n    <Button>Stay</Button>\n    <Button>Flow</Button>\n  </ButtonGroup>\n  <ButtonGroup className="mr-2">\n    <Button>5</Button>\n    <Button>6</Button>\n    <Button>7</Button>\n  </ButtonGroup>\n  <ButtonGroup>\n    <Button>8</Button>\n  </ButtonGroup>\n</ButtonToolbar>'
        })]
      })
    })]
  }), (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Button Vertical',
    children: (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: [(0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _ButtonGroup2.default, null, null, {
          'vertical': true,
          children: [(0, _inferno.createVNode)(16, _Button2.default, null, null, {
            children: 'One'
          }), (0, _inferno.createVNode)(16, _Button2.default, null, null, {
            children: 'Two'
          }), (0, _inferno.createVNode)(16, SampleDropdownButton, null, null, {
            'caret': true,
            children: 'Drop me!'
          }), (0, _inferno.createVNode)(16, _ButtonGroup2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Button2.default, null, null, {
              children: 'Split drop!'
            }), (0, _inferno.createVNode)(16, SampleDropdownButton, null, null, {
              'split': true
            })]
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<ButtonGroup vertical>\n  <Button>One</Button>\n  <Button>Two</Button>\n  <SampleDropdownButton caret>Drop me!</SampleDropdownButton>\n  <ButtonGroup>\n    <Button>Split drop!</Button><SampleDropdownButton split />\n  </ButtonGroup>\n</ButtonGroup>'
        })]
      }), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _components.Narrative, null, null, {
          children: 'This is the code to create the dropdown button:'
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: 'class SampleDropdownButton extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      isOpen: false\n    }\n\n    this.doToggle = this.doToggle.bind(this)\n  }\n\n  doToggle() {\n    this.setState({\n      isOpen: !this.state.isOpen\n    })\n  }\n\n  render({ children, ...props }) {\n    return (\n      <ButtonDropdown isOpen={this.state.isOpen} toggle={this.doToggle}>\n        <DropdownToggle {...props}>{children}</DropdownToggle>\n        <DropdownMenu>\n          <DropdownItem>Item 1</DropdownItem>\n          <DropdownItem>Item 2</DropdownItem>\n          <DropdownItem>Item 3</DropdownItem>\n        </DropdownMenu>\n      </ButtonDropdown>\n    )\n  }\n}'
        })]
      })]
    })
  })]);
};

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _components = __webpack_require__(4);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = __webpack_require__(22);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _ButtonToolbar = __webpack_require__(63);

var _ButtonToolbar2 = _interopRequireDefault(_ButtonToolbar);

var _ButtonDropdown = __webpack_require__(35);

var _ButtonDropdown2 = _interopRequireDefault(_ButtonDropdown);

var _DropdownToggle = __webpack_require__(15);

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _DropdownMenu = __webpack_require__(7);

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownItem = __webpack_require__(14);

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _inferno = __webpack_require__(0);

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

      return (0, _inferno.createVNode)(16, _components.Stage, null, null, {
        children: [(0, _inferno.createVNode)(16, _components.Scene, null, null, {
          children: [(0, _inferno.createVNode)(2, 'h5', null, 'Radio Buttons'), (0, _inferno.createVNode)(16, _ButtonGroup2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Button2.default, null, null, {
              'color': 'primary',
              'onClick': function onClick() {
                return _this2.onRadioBtnClick(1);
              },
              'active': this.state.rSelected === 1,
              children: 'One'
            }), (0, _inferno.createVNode)(16, _Button2.default, null, null, {
              'color': 'primary',
              'onClick': function onClick() {
                return _this2.onRadioBtnClick(2);
              },
              'active': this.state.rSelected === 2,
              children: 'Two'
            }), (0, _inferno.createVNode)(16, _Button2.default, null, null, {
              'color': 'primary',
              'onClick': function onClick() {
                return _this2.onRadioBtnClick(3);
              },
              'active': this.state.rSelected === 3,
              children: 'Three'
            })]
          }), (0, _inferno.createVNode)(2, 'p', null, ['Selected: ', this.state.rSelected]), (0, _inferno.createVNode)(16, _components.Code, null, null, {
            children: '<ButtonGroup>\n  <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>\n  <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>\n  <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>\n</ButtonGroup>'
          })]
        }), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
          children: [(0, _inferno.createVNode)(2, 'h5', null, 'Checkbox Buttons'), (0, _inferno.createVNode)(16, _ButtonGroup2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Button2.default, null, null, {
              'color': 'primary',
              'onClick': function onClick() {
                return _this2.onCheckboxBtnClick(1);
              },
              'active': this.state.cSelected.includes(1),
              children: 'One'
            }), (0, _inferno.createVNode)(16, _Button2.default, null, null, {
              'color': 'primary',
              'onClick': function onClick() {
                return _this2.onCheckboxBtnClick(2);
              },
              'active': this.state.cSelected.includes(2),
              children: 'Two'
            }), (0, _inferno.createVNode)(16, _Button2.default, null, null, {
              'color': 'primary',
              'onClick': function onClick() {
                return _this2.onCheckboxBtnClick(3);
              },
              'active': this.state.cSelected.includes(3),
              children: 'Three'
            })]
          }), (0, _inferno.createVNode)(2, 'p', null, ['Selected: ', JSON.stringify(this.state.cSelected)]), (0, _inferno.createVNode)(16, _components.Code, null, null, {
            children: '<ButtonGroup>\n  <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>\n  <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>\n  <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>\n</ButtonGroup>'
          })]
        })]
      });
    }
  }]);

  return RadioButtonStage;
}(_infernoComponent2.default);

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

      return (0, _inferno.createVNode)(16, _ButtonDropdown2.default, null, null, {
        'isOpen': this.state.isOpen,
        'toggle': this.doToggle,
        children: [(0, _inferno.createVNode)(16, _DropdownToggle2.default, null, null, _extends({}, props, {
          children: children
        })), (0, _inferno.createVNode)(16, _DropdownMenu2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _DropdownItem2.default, null, null, {
            children: 'Item 1'
          }), (0, _inferno.createVNode)(16, _DropdownItem2.default, null, null, {
            children: 'Item 2'
          }), (0, _inferno.createVNode)(16, _DropdownItem2.default, null, null, {
            children: 'Item 3'
          })]
        })]
      });
    }
  }]);

  return SampleDropdownButton;
}(_infernoComponent2.default);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Jumbotron',
    children: [(0, _inferno.createVNode)(16, _components.Narrative, null, null, {
      children: (0, _inferno.createVNode)(2, 'p', null, 'The jumbotron or hero is a content section that gives a nice entry point to important content')
    }), (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Jumbotron2.default, null, null, {
          children: [(0, _inferno.createVNode)(2, 'h1', 'display-3', 'Hello, world!'), (0, _inferno.createVNode)(2, 'p', 'lead', 'This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.'), (0, _inferno.createVNode)(2, 'hr', 'my-2'), (0, _inferno.createVNode)(2, 'p', null, 'It uses utility classes for typgraphy and spacing to space content out within the larger container.'), (0, _inferno.createVNode)(2, 'p', 'lead', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
            'color': 'primary',
            children: 'Learn More'
          }))]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Jumbotron>\n  <h1 className="display-3">Hello, world!</h1>\n  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>\n  <hr className="my-2" />\n  <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>\n  <p className="lead">\n    <Button color="primary">Learn More</Button>\n  </p>\n</Jumbotron>'
        })]
      })
    })]
  });
};

var _components = __webpack_require__(4);

var _Jumbotron = __webpack_require__(72);

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Progress Bars',
    children: [(0, _inferno.createVNode)(16, _components.Narrative, null, null, {
      children: (0, _inferno.createVNode)(2, 'p', null, 'Use progress bars to give feedback on a process completing.')
    }), (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(2, 'div', 'text-center', '0%'), (0, _inferno.createVNode)(16, _Progress2.default), (0, _inferno.createVNode)(2, 'div', 'text-center', '25%'), (0, _inferno.createVNode)(16, _Progress2.default, null, null, {
          'value': '25'
        }), (0, _inferno.createVNode)(2, 'div', 'text-center', '50%'), (0, _inferno.createVNode)(16, _Progress2.default, null, null, {
          'value': 50
        }), (0, _inferno.createVNode)(2, 'div', 'text-center', '75%'), (0, _inferno.createVNode)(16, _Progress2.default, null, null, {
          'value': 75
        }), (0, _inferno.createVNode)(2, 'div', 'text-center', '100%'), (0, _inferno.createVNode)(16, _Progress2.default, null, null, {
          'value': '100'
        }), (0, _inferno.createVNode)(2, 'div', 'text-center', 'Multiple bars'), (0, _inferno.createVNode)(16, _Progress2.default, null, null, {
          'multi': true,
          children: [(0, _inferno.createVNode)(16, _Progress2.default, null, null, {
            'bar': true,
            'value': '15'
          }), (0, _inferno.createVNode)(16, _Progress2.default, null, null, {
            'bar': true,
            'color': 'success',
            'value': '30'
          }), (0, _inferno.createVNode)(16, _Progress2.default, null, null, {
            'bar': true,
            'color': 'info',
            'value': '25'
          }), (0, _inferno.createVNode)(16, _Progress2.default, null, null, {
            'bar': true,
            'color': 'warning',
            'value': '20'
          }), (0, _inferno.createVNode)(16, _Progress2.default, null, null, {
            'bar': true,
            'color': 'danger',
            'value': '5'
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<div className="text-center">0%</div>\n<Progress />\n<div className="text-center">25%</div>\n<Progress value="25" />\n<div className="text-center">50%</div>\n<Progress value={50} />\n<div className="text-center">75%</div>\n<Progress value={75} />\n<div className="text-center">100%</div>\n<Progress value="100" />\n<div className="text-center">Multiple bars</div>\n<Progress multi>\n  <Progress bar value="15" />\n  <Progress bar color="success" value="30" />\n  <Progress bar color="info" value="25" />\n  <Progress bar color="warning" value="20" />\n  <Progress bar color="danger" value="5" />\n</Progress>'
        })]
      })
    })]
  });
};

var _components = __webpack_require__(4);

var _Progress = __webpack_require__(83);

var _Progress2 = _interopRequireDefault(_Progress);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  animateOnAdd: __webpack_require__(20).animateOnAdd,
  animateOnRemove: __webpack_require__(20).animateOnRemove,
  Animated: __webpack_require__(105).default,
  CrossFade: __webpack_require__(106).default
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(107).default;
module.exports.default = module.exports;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(108).default;
module.exports.default = module.exports;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.unmountComponentAtNode = unmountComponentAtNode;
exports.unstable_renderSubtreeIntoContainer = unstable_renderSubtreeIntoContainer;

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var wrapperVNode = (0, _inferno.createVNode)(4, WrapperComponent, null, null, {
    children: vNode,
    context: parentComponent.context
  });
  var component = (0, _inferno.render)(wrapperVNode, container);

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
    key: "getChildContext",
    value: function getChildContext() {
      // tslint:disable-next-line
      return this.props["context"];
    }
  }, {
    key: "render",
    value: function render(props) {
      return props.children;
    }
  }]);

  return WrapperComponent;
}(_infernoComponent2.default);

/* /COMPATIBILITY */

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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
/* 51 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 52 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BasicPage;

var _components = __webpack_require__(4);

var _Alert = __webpack_require__(86);

var _Alert2 = _interopRequireDefault(_Alert);

var _Badge = __webpack_require__(41);

var _Badge2 = _interopRequireDefault(_Badge);

var _Breadcrumb = __webpack_require__(42);

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _Button = __webpack_require__(43);

var _Button2 = _interopRequireDefault(_Button);

var _Jumbotron = __webpack_require__(44);

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

var _Progress = __webpack_require__(45);

var _Progress2 = _interopRequireDefault(_Progress);

var _Collapse = __webpack_require__(87);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Layout = __webpack_require__(88);

var _Layout2 = _interopRequireDefault(_Layout);

var _Tabs = __webpack_require__(91);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Popovers = __webpack_require__(90);

var _Popovers2 = _interopRequireDefault(_Popovers);

var _Pagination = __webpack_require__(89);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _List = __webpack_require__(134);

var _List2 = _interopRequireDefault(_List);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Modal from '../../../lib/Modal.jsx'


function BasicPage(props) {
  return (0, _inferno.createVNode)(16, _components.Page, null, null, {
    children: [(0, _inferno.createVNode)(16, _Alert2.default), (0, _inferno.createVNode)(16, _Badge2.default), (0, _inferno.createVNode)(16, _Breadcrumb2.default), (0, _inferno.createVNode)(16, _Button2.default), (0, _inferno.createVNode)(16, _Jumbotron2.default), (0, _inferno.createVNode)(16, _Progress2.default), (0, _inferno.createVNode)(16, _Collapse2.default), (0, _inferno.createVNode)(16, _Layout2.default), (0, _inferno.createVNode)(16, _List2.default), (0, _inferno.createVNode)(16, _Tabs2.default), (0, _inferno.createVNode)(16, _Popovers2.default), (0, _inferno.createVNode)(16, _Pagination2.default)]
  });
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CardPage;

var _components = __webpack_require__(4);

var _TextCard = __webpack_require__(93);

var _TextCard2 = _interopRequireDefault(_TextCard);

var _HeaderCard = __webpack_require__(92);

var _HeaderCard2 = _interopRequireDefault(_HeaderCard);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardPage(props) {
  return (0, _inferno.createVNode)(16, _components.Page, null, null, {
    children: [(0, _inferno.createVNode)(16, _TextCard2.default), (0, _inferno.createVNode)(16, _HeaderCard2.default)]
  });
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormPage;

var _components = __webpack_require__(4);

var _Input = __webpack_require__(95);

var _Input2 = _interopRequireDefault(_Input);

var _InputGroup = __webpack_require__(96);

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _InputWithButton = __webpack_require__(97);

var _InputWithButton2 = _interopRequireDefault(_InputWithButton);

var _ButtonShorthand = __webpack_require__(94);

var _ButtonShorthand2 = _interopRequireDefault(_ButtonShorthand);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormPage(props) {
  return (0, _inferno.createVNode)(16, _components.Page, null, null, {
    children: [(0, _inferno.createVNode)(16, _Input2.default), (0, _inferno.createVNode)(16, _InputGroup2.default), (0, _inferno.createVNode)(16, _InputWithButton2.default), (0, _inferno.createVNode)(16, _ButtonShorthand2.default)]
  });
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BasicPage;

var _components = __webpack_require__(4);

var _BasicModal = __webpack_require__(98);

var _BasicModal2 = _interopRequireDefault(_BasicModal);

var _Badge = __webpack_require__(41);

var _Badge2 = _interopRequireDefault(_Badge);

var _Breadcrumb = __webpack_require__(42);

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _Button = __webpack_require__(43);

var _Button2 = _interopRequireDefault(_Button);

var _Jumbotron = __webpack_require__(44);

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

var _Progress = __webpack_require__(45);

var _Progress2 = _interopRequireDefault(_Progress);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Modal from '../../../lib/Modal.jsx'


function BasicPage(props) {
  return (0, _inferno.createVNode)(16, _components.Page, null, null, {
    children: (0, _inferno.createVNode)(16, _BasicModal2.default)
  });
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavigationPage;

var _components = __webpack_require__(4);

var _Horizontal = __webpack_require__(99);

var _Horizontal2 = _interopRequireDefault(_Horizontal);

var _Vertical = __webpack_require__(102);

var _Vertical2 = _interopRequireDefault(_Vertical);

var _Tabbed = __webpack_require__(101);

var _Tabbed2 = _interopRequireDefault(_Tabbed);

var _Pills = __webpack_require__(100);

var _Pills2 = _interopRequireDefault(_Pills);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Modal from '../../../lib/Modal.jsx'


function NavigationPage(props) {
  return (0, _inferno.createVNode)(16, _components.Page, null, null, {
    children: [(0, _inferno.createVNode)(16, _Horizontal2.default), (0, _inferno.createVNode)(16, _Vertical2.default), (0, _inferno.createVNode)(16, _Tabbed2.default), (0, _inferno.createVNode)(16, _Pills2.default)]
  });
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

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

var _warning = __webpack_require__(51);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(120);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(111);

var _PathUtils = __webpack_require__(50);

var _createTransitionManager = __webpack_require__(112);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(110);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

/***/ }),
/* 59 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  color: 'success',
  tag: 'div'
};

var Alert = function Alert(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      color = props.color,
      onClose = props.onClose,
      children = props.children,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'color', 'onClose', 'children']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'alert', 'alert-' + color, { 'alert-dismissible': onClose }), cssModule);

  var closeClasses = (0, _utils.mapToCssModules)('close', cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes,
    'role': 'alert',
    children: [onClose ? (0, _inferno.createVNode)(2, 'button', closeClasses, (0, _inferno.createVNode)(2, 'span', null, '\xD7', {
      'aria-hidden': 'true'
    }), {
      'type': 'button',
      'aria-label': 'Close',
      'onClick': onClose
    }) : null, children]
  }));
};

Alert.defaultProps = defaultProps;

exports.default = Alert;

/***/ }),
/* 60 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  color: 'default',
  pill: false,
  tag: 'span'
};

var Badge = function Badge(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      pill = props.pill,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'color', 'pill', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'badge', 'badge-' + color, pill ? 'badge-pill' : false), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

Badge.defaultProps = defaultProps;

exports.default = Badge;

/***/ }),
/* 61 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'ol'
};

var Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'breadcrumb'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

Breadcrumb.defaultProps = defaultProps;

exports.default = Breadcrumb;

/***/ }),
/* 62 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'li'
};

var BreadcrumbItem = function BreadcrumbItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      active = props.active,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'active', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

BreadcrumbItem.defaultProps = defaultProps;

exports.default = BreadcrumbItem;

/***/ }),
/* 63 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div',
  role: 'toolbar'
};

var ButtonToolbar = function ButtonToolbar(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'btn-toolbar'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

ButtonToolbar.defaultProps = defaultProps;

exports.default = ButtonToolbar;

/***/ }),
/* 64 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var CardFooter = function CardFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'card-footer'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

CardFooter.defaultProps = defaultProps;

exports.default = CardFooter;

/***/ }),
/* 65 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var CardHeader = function CardHeader(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'card-header'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

CardHeader.defaultProps = defaultProps;

exports.default = CardHeader;

/***/ }),
/* 66 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'img'
};

var CardImg = function CardImg(props) {
  var className = props.className,
      cssModule = props.cssModule,
      top = props.top,
      bottom = props.bottom,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'top', 'bottom', 'tag']);

  var cardImgClassName = 'card-img';
  if (top) {
    cardImgClassName = 'card-img-top';
  }
  if (bottom) {
    cardImgClassName = 'card-img-bottom';
  }

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, cardImgClassName), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

CardImg.defaultProps = defaultProps;

exports.default = CardImg;

/***/ }),
/* 67 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'a'
};

var CardLink = function CardLink(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      getRef = props.getRef,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'getRef']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'card-link'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }), null, getRef);
};

CardLink.defaultProps = defaultProps;

exports.default = CardLink;

/***/ }),
/* 68 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'h6'
};

var CardSubtitle = function CardSubtitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'card-subtitle'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

CardSubtitle.defaultProps = defaultProps;

exports.default = CardSubtitle;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _infernoAnimation = __webpack_require__(46);

var _utils = __webpack_require__(2);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      var _omit = (0, _utils.omit)(this.props, ['isOpen', 'delay', 'onOpened', 'onClosed', 'animationPrefix']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'tag']);

      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, !this.state.active && 'InfernoAnimation-noAnim'), cssModule);

      var prefix = this.props.animationPrefix || "CollapseAnimation";

      // If hidden
      if (!this.props.isOpen) return null;

      return (0, _inferno.createVNode)(16, _infernoAnimation.Animated, null, null, _extends({
        'el': Tag,
        'prefix': prefix
      }, attributes, {
        'className': classes,
        'onDidEnter': this.props.onOpened,
        'onDidLeave': this.props.onClosed
      }));
    }
  }]);

  return Collapse;
}(_infernoComponent2.default);

Collapse.defaultProps = defaultProps;
exports.default = Collapse;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var Container = function Container(props) {
  var className = props.className,
      cssModule = props.cssModule,
      fluid = props.fluid,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'fluid', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, fluid ? 'container-fluid' : 'container'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

Container.defaultProps = defaultProps;

exports.default = Container;

/***/ }),
/* 71 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var InputGroupAddon = function InputGroupAddon(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'input-group-addon'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

InputGroupAddon.defaultProps = defaultProps;

exports.default = InputGroupAddon;

/***/ }),
/* 72 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var Jumbotron = function Jumbotron(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      fluid = props.fluid,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'fluid']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

Jumbotron.defaultProps = defaultProps;

exports.default = Jumbotron;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _infernoAnimation = __webpack_require__(46);

var _utils = __webpack_require__(2);

var _compat = __webpack_require__(49);

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

      return (0, _inferno.createVNode)(2, 'div', (0, _utils.mapToCssModules)((0, _classnames2.default)('modal-dialog', this.props.className, _defineProperty({}, 'modal-' + this.props.size, this.props.size)), this.props.cssModule), (0, _inferno.createVNode)(2, 'div', (0, _utils.mapToCssModules)((0, _classnames2.default)('modal-content', this.props.contentClassName), this.props.cssModule), this.props.children), _extends({
        'role': 'document'
      }, attributes), null, function (c) {
        return _this2._dialog = c;
      });
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
        style: { display: 'block' },
        tabIndex: '-1'
      };

      var prefix = this.props.animationPrefix || "ModalFade";
      var backgroundPrefix = this.props.backgroundAnimationPrefix || "ModalBackdropFade";

      if (this.props.fade) {
        return (0, _inferno.createVNode)(34, 'div', (0, _utils.mapToCssModules)(wrapClassName), [(0, _inferno.createVNode)(16, AnimatedSpecial, null, null, _extends({
          'prefix': prefix,
          'isOpen': isOpen,
          'cssModule': cssModule,
          'className': (0, _utils.mapToCssModules)((0, _classnames2.default)('modal', 'show', modalClassName), cssModule),
          'onDidEnter': this.onOpened,
          'onDidLeave': this.onClosed
        }, modalAttributes, {
          children: this.renderModalDialog()
        }), 'modal-dialog'), (0, _inferno.createVNode)(16, AnimatedSpecial, null, null, {
          'prefix': backgroundPrefix,
          'isOpen': isOpen && backdrop,
          'cssModule': cssModule,
          'className': (0, _utils.mapToCssModules)((0, _classnames2.default)('modal-backdrop', 'show', backdropClassName), cssModule)
        }, 'modal-backdrop')]);
      }

      return (0, _inferno.createVNode)(2, 'div', (0, _utils.mapToCssModules)(wrapClassName), [isOpen && (0, _inferno.createVNode)(2, 'div', (0, _utils.mapToCssModules)((0, _classnames2.default)('modal', 'show', modalClassName), cssModule), this.renderModalDialog(), _extends({}, modalAttributes)), isOpen && backdrop && (0, _inferno.createVNode)(2, 'div', (0, _utils.mapToCssModules)((0, _classnames2.default)('modal-backdrop', 'show', backdropClassName), cssModule))]);
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
          children = _ref.children,
          props = _objectWithoutProperties(_ref, ['isOpen', 'children']);

      if (isOpen) {
        return (0, _inferno.createVNode)(16, _infernoAnimation.Animated, null, null, _extends({}, props, {
          children: children
        }));
      } else {
        return null;
      }
    }
  }]);

  return AnimatedSpecial;
}(_infernoComponent2.default);

exports.default = Modal;

/***/ }),
/* 74 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var ModalBody = function ModalBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'modal-body'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

ModalBody.defaultProps = defaultProps;

exports.default = ModalBody;

/***/ }),
/* 75 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var ModalFooter = function ModalFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'modal-footer'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

ModalFooter.defaultProps = defaultProps;

exports.default = ModalFooter;

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

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'h4',
  wrapTag: 'div'
};

var ModalHeader = function ModalHeader(props) {
  var closeButton = void 0;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'children', 'toggle', 'tag', 'wrapTag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'modal-header'), cssModule);

  if (toggle) {
    closeButton = (0, _inferno.createVNode)(2, 'button', 'close', (0, _inferno.createVNode)(2, 'span', null, String.fromCharCode(215), {
      'aria-hidden': 'true'
    }), {
      'type': 'button',
      'onClick': toggle,
      'aria-label': 'Close'
    });
  }

  return (0, _inferno.createVNode)(16, WrapTag, null, null, _extends({}, attributes, {
    'className': classes,
    children: [(0, _inferno.createVNode)(16, Tag, null, null, {
      'className': (0, _utils.mapToCssModules)('modal-title', cssModule),
      children: children
    }), closeButton]
  }));
};

ModalHeader.defaultProps = defaultProps;

exports.default = ModalHeader;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'ul'
};

var Pagination = function Pagination(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'size', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'pagination', _defineProperty({}, 'pagination-' + size, !!size)), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

Pagination.defaultProps = defaultProps;

exports.default = Pagination;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'li'
};

var PaginationItem = function PaginationItem(props) {
  var active = props.active,
      className = props.className,
      cssModule = props.cssModule,
      disabled = props.disabled,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['active', 'className', 'cssModule', 'disabled', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'page-item', {
    active: active,
    disabled: disabled
  }), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

PaginationItem.defaultProps = defaultProps;

exports.default = PaginationItem;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _inferno = __webpack_require__(0);

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
    children = [(0, _inferno.createVNode)(2, 'span', null, children || defaultCaret, {
      'aria-hidden': 'true'
    }, 'caret'), (0, _inferno.createVNode)(2, 'span', 'sr-only', ariaLabel, null, 'sr')];
  }

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes,
    'aria-label': ariaLabel,
    children: children
  }));
};

PaginationLink.defaultProps = defaultProps;

exports.default = PaginationLink;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _TetherContent = __webpack_require__(40);

var _TetherContent2 = _interopRequireDefault(_TetherContent);

var _utils = __webpack_require__(2);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var omitProps = ['placement', 'target', 'isOpen', 'tether', 'tetherRef', 'className', 'cssModule', 'toggle'];

var defaultProps = {
  isOpen: false,
  placement: 'bottom',
  toggle: function toggle() {}
};

var defaultTetherConfig = {
  classPrefix: 'bs-tether',
  classes: {
    element: false,
    enabled: 'show'
  },
  constraints: [{ to: 'scrollParent', attachment: 'together none' }, { to: 'window', attachment: 'together none' }]
};

var Popover = function (_Component) {
  _inherits(Popover, _Component);

  function Popover(props) {
    _classCallCheck(this, Popover);

    var _this = _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));

    _this.getTetherConfig = _this.getTetherConfig.bind(_this);
    return _this;
  }

  _createClass(Popover, [{
    key: 'getTetherConfig',
    value: function getTetherConfig() {
      var attachments = (0, _utils.getTetherAttachments)(this.props.placement);
      return _extends({}, defaultTetherConfig, attachments, {
        target: '#' + this.props.target
      }, this.props.tether);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }

      var tetherConfig = this.getTetherConfig();

      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)('popover-inner', this.props.className), this.props.cssModule);

      var attributes = (0, _utils.omit)(this.props, omitProps);

      return (0, _inferno.createVNode)(16, _TetherContent2.default, null, null, {
        'className': (0, _utils.mapToCssModules)('popover', this.props.cssModule),
        'tether': tetherConfig,
        'tetherRef': this.props.tetherRef,
        'isOpen': this.props.isOpen,
        'toggle': this.props.toggle,
        children: (0, _inferno.createVNode)(2, 'div', classes, null, _extends({}, attributes))
      });
    }
  }]);

  return Popover;
}(_infernoComponent2.default);

Popover.defaultProps = defaultProps;

exports.default = Popover;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

var PopoverContent = function PopoverContent(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'popover-content'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

PopoverContent.defaultProps = defaultProps;

exports.default = PopoverContent;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'h3'
};

var PopoverTitle = function PopoverTitle(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'popover-title'), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

PopoverTitle.defaultProps = defaultProps;

exports.default = PopoverTitle;

/***/ }),
/* 83 */
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

var _lodash = __webpack_require__(123);

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

  var ProgressBar = multi ? children : (0, _inferno.createVNode)(2, 'div', progressBarClasses, null, {
    'style': { width: percent + '%' },
    'role': 'progressbar',
    'aria-valuenow': value,
    'aria-valuemin': '0',
    'aria-valuemax': max,
    'children': children
  });

  if (bar) {
    return ProgressBar;
  }

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': progressClasses,
    'children': ProgressBar
  }));
};

Progress.defaultProps = defaultProps;

exports.default = Progress;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

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
  var domEl = this._vNode.dom;
  return {
    width: domEl.offsetWidth + 'px',
    height: domEl.offsetHeight + 'px'
  };
}

// This could probably be generalised in inferno-animation as part of animateOnAdd
function animateCrossFadeIn(component, currSize, animationName, callback) {
  var domEl = component._vNode.dom;

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
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag;


      var attributes = (0, _utils.omit)(this.props, omitProps);

      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)('tab-content', className), cssModule);

      return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
        'className': classes
      }));
    }
  }]);

  return TabContent;
}(_infernoComponent2.default);

exports.default = TabContent;

TabContent.defaultProps = defaultProps;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = TabPane;

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'div'
};

function TabPane(props, context) {
  var className = props.className,
      cssModule = props.cssModule,
      tabId = props.tabId,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tabId', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)('tab-pane', className, { active: tabId === context.activeTabId.activeTab }), cssModule);
  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
}
TabPane.defaultProps = defaultProps;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Alerts',
    children: [(0, _inferno.createVNode)(16, _components.Narrative, null, null, {
      children: (0, _inferno.createVNode)(2, 'p', null, 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.')
    }), (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: [(0, _inferno.createVNode)(2, 'h3', null, 'Standard alert box'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Alert2.default, null, null, {
          'color': 'success',
          children: ['Some cool text in a ', (0, _inferno.createVNode)(2, 'b', null, 'success'), ' alert box!']
        }), (0, _inferno.createVNode)(16, _Alert2.default, null, null, {
          'color': 'warning',
          children: ['Some cool text in a ', (0, _inferno.createVNode)(2, 'b', null, 'warning'), ' alert box!']
        }), (0, _inferno.createVNode)(16, _Alert2.default, null, null, {
          'color': 'danger',
          children: ['Some cool text in a ', (0, _inferno.createVNode)(2, 'b', null, 'danger'), ' alert box!']
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Alert color="success">\n  Some cool text in a <b>success</b> alert box!\n</Alert>\n<Alert color="warning">\n  Some cool text in a <b>warning</b> alert box!\n</Alert>\n<Alert color="danger">\n  Some cool text in a <b>danger</b> alert box!\n</Alert>'
        })]
      }), (0, _inferno.createVNode)(2, 'h3', null, 'Alert box with close button'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Alert2.default, null, null, {
          'onClose': function onClose() {},
          children: ['Some cool text in a ', (0, _inferno.createVNode)(2, 'b', null, 'danger'), ' alert box!']
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Alert onClose={() => {}}>\n  Some cool text in a <b>danger</b> alert box!\n</Alert>'
        })]
      })]
    })]
  });
};

var _components = __webpack_require__(4);

var _Alert = __webpack_require__(59);

var _Alert2 = _interopRequireDefault(_Alert);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Collapse',
    children: [(0, _inferno.createVNode)(16, _components.Narrative, null, null, {
      children: (0, _inferno.createVNode)(2, 'p', null, 'Toggle visibility of content with animation.')
    }), (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: [(0, _inferno.createVNode)(2, 'h3', null, 'Default open'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: (0, _inferno.createVNode)(16, ToggleCollapse, null, null, {
          'defaultOpen': true
        })
      }), (0, _inferno.createVNode)(2, 'h3', null, 'Default closed'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: (0, _inferno.createVNode)(16, ToggleCollapse, null, null, {
          'defaultOpen': false
        })
      }), (0, _inferno.createVNode)(2, 'h3', null, 'Example code:'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: 'class ToggleCollapse extends Component {\n  constructor(props) {\n    super(props)\n\n    this.state = {\n      isOpen: false\n    }\n\n    this.doToggle = this.doToggle.bind(this)\n  }\n\n  doToggle() {\n    this.setState({\n      isOpen: !this.state.isOpen\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.doToggle}>Do toggle!</Button>\n        <Collapse className="ExampleCollapseContainer" isOpen={this.state.isOpen}>\n          <p>Some cool content</p>\n        </Collapse>  \n      </div>  \n    )\n  }\n}'
        })
      }), (0, _inferno.createVNode)(2, 'h3', null, 'CSS for collapse transition:'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: (0, _inferno.createVNode)(16, _components.Code, null, null, {
          'language': 'css',
          children: '.ExampleCollapseContainer {\n  background-color: aliceblue;\n  padding: 1rem;\n}\n\n.CollapseAnimation-leave {\n}\n\n.CollapseAnimation-leave-active {\n  overflow: hidden;\n  transition: all 0.3s ease-in;\n}\n\n.CollapseAnimation-leave-end {\n  height: 0!important;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.CollapseAnimation-enter {\n  height: 0!important;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.CollapseAnimation-enter-active {\n  transition: all 0.3s ease-in;\n  overflow: hidden;\n}\n\n.CollapseAnimation-enter-end {\n}\n'
        })
      })]
    })]
  });
};

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _components = __webpack_require__(4);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _Collapse = __webpack_require__(69);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _inferno = __webpack_require__(0);

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
      return (0, _inferno.createVNode)(2, 'div', null, [(0, _inferno.createVNode)(16, _Button2.default, null, null, {
        'onClick': this.doToggle,
        children: 'Do toggle!'
      }), (0, _inferno.createVNode)(16, _Collapse2.default, null, null, {
        'className': 'ExampleCollapseContainer',
        'isOpen': this.state.isOpen,
        children: (0, _inferno.createVNode)(2, 'p', null, 'My phone number is only two digits off from a local pizzeria\u2019s. I\u2019ve spent my entire life getting occasional wrong-dials from people who accidentally fumbled and hit the wrong number, looking for pizza. One night, it is two am, and our phone rings. I let it go to machine, and am greeted by a rather amusing voicemail from a very drunk man called \u201CGordon\u201D, who is practically begging for pizza to be delivered to his dorm room at the local college. I try to go back to sleep, but \u201CGordon\u201D calls back again\u2026 and again. On the third call, I answer the phone.')
      })]);
    }
  }]);

  return ToggleCollapse;
}(_infernoComponent2.default);

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Layout',
    'className': 'ExampleLayout',
    children: [(0, _inferno.createVNode)(16, _components.Narrative, null, null, {
      children: (0, _inferno.createVNode)(2, 'p', null, 'Organise content in rows and columns.')
    }), (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: [(0, _inferno.createVNode)(2, 'h3', null, 'Standard alert box'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Container2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _Row2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _Col2.default, null, null, {
              children: '.col'
            })
          }), (0, _inferno.createVNode)(16, _Row2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Col2.default, null, null, {
              children: '.col'
            }), (0, _inferno.createVNode)(16, _Col2.default, null, null, {
              children: '.col'
            }), (0, _inferno.createVNode)(16, _Col2.default, null, null, {
              children: '.col'
            }), (0, _inferno.createVNode)(16, _Col2.default, null, null, {
              children: '.col'
            })]
          }), (0, _inferno.createVNode)(16, _Row2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Col2.default, null, null, {
              'xs': '3',
              children: '.col-3'
            }), (0, _inferno.createVNode)(16, _Col2.default, null, null, {
              'xs': 'auto',
              children: '.col-auto - variable width content'
            }), (0, _inferno.createVNode)(16, _Col2.default, null, null, {
              'xs': '3',
              children: '.col-3'
            })]
          }), (0, _inferno.createVNode)(16, _Row2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Col2.default, null, null, {
              'xs': '6',
              children: '.col-6'
            }), (0, _inferno.createVNode)(16, _Col2.default, null, null, {
              'xs': '6',
              children: '.col-6'
            })]
          }), (0, _inferno.createVNode)(16, _Row2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Col2.default, null, null, {
              'xs': '6',
              'sm': '4',
              children: '.col-6 .col-sm-4'
            }), (0, _inferno.createVNode)(16, _Col2.default, null, null, {
              'xs': '6',
              'sm': '4',
              children: '.col-6 .col-sm-4'
            }), (0, _inferno.createVNode)(16, _Col2.default, null, null, {
              'sm': '4',
              children: '.col .col-sm-4'
            })]
          }), (0, _inferno.createVNode)(16, _Row2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _Col2.default, null, null, {
              'sm': { size: 6, push: 2, pull: 2, offset: 1 },
              children: '.col .col-sm-6 .col-sm-push-2 .col-sm-pull-2 .col-sm-offset-2'
            })
          }), (0, _inferno.createVNode)(16, _Row2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _Col2.default, null, null, {
              'sm': '12',
              'md': { size: 8, offset: 2 },
              children: '.col .col-sm-12 .col-md-6 .col-md-offset-3'
            })
          }), (0, _inferno.createVNode)(16, _Row2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Col2.default, null, null, {
              'sm': { size: 'auto', offset: 1 },
              children: '.col .col-sm .col-sm-offset-1'
            }), (0, _inferno.createVNode)(16, _Col2.default, null, null, {
              'sm': { size: 'auto', offset: 1 },
              children: '.col .col-sm .col-sm-offset-1'
            })]
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Container>\n  <Row>\n    <Col>.col</Col>\n  </Row>\n  <Row>\n    <Col>.col</Col>\n    <Col>.col</Col>\n    <Col>.col</Col>\n    <Col>.col</Col>\n  </Row>\n  <Row>\n    <Col xs="3">.col-3</Col>\n    <Col xs="auto">.col-auto - variable width content</Col>\n    <Col xs="3">.col-3</Col>\n  </Row>\n  <Row>\n    <Col xs="6">.col-6</Col>\n    <Col xs="6">.col-6</Col>\n  </Row>\n  <Row>\n    <Col xs="6" sm="4">.col-6 .col-sm-4</Col>\n    <Col xs="6" sm="4">.col-6 .col-sm-4</Col>\n    <Col sm="4">.col .col-sm-4</Col>\n  </Row>\n  <Row>\n    <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>.col .col-sm-6 .col-sm-push-2 .col-sm-pull-2 .col-sm-offset-2</Col>\n  </Row>\n  <Row>\n    <Col sm="12" md={{ size: 8, offset: 2 }}>.col .col-sm-12 .col-md-6 .col-md-offset-3</Col>\n  </Row>\n  <Row>\n    <Col sm={{ size: \'auto\', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>\n    <Col sm={{ size: \'auto\', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>\n  </Row>\n</Container>'
        })]
      })]
    })]
  });
};

var _components = __webpack_require__(4);

var _Container = __webpack_require__(70);

var _Container2 = _interopRequireDefault(_Container);

var _Row = __webpack_require__(39);

var _Row2 = _interopRequireDefault(_Row);

var _Col = __webpack_require__(37);

var _Col2 = _interopRequireDefault(_Col);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Pagination',
    children: (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: [(0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Pagination2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'previous': true,
              'href': '#'
            })
          }), (0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'href': '#',
              children: '1'
            })
          }), (0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'href': '#',
              children: '2'
            })
          }), (0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'href': '#',
              children: '3'
            })
          }), (0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'href': '#',
              children: '4'
            })
          }), (0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'href': '#',
              children: '5'
            })
          }), (0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'next': true,
              'href': '#'
            })
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Pagination>\n  <PaginationItem>\n    <PaginationLink previous href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      1\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      2\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      3\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      4\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      5\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink next href="#" />\n  </PaginationItem>\n</Pagination>'
        })]
      }), (0, _inferno.createVNode)(2, 'h3', null, 'Disabled and Active State'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Pagination2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            'disabled': true,
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'previous': true,
              'href': '#'
            })
          }), (0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            'active': true,
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'href': '#',
              children: '1'
            })
          }), (0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'href': '#',
              children: '2'
            })
          }), (0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'href': '#',
              children: '3'
            })
          }), (0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'href': '#',
              children: '4'
            })
          }), (0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'href': '#',
              children: '5'
            })
          }), (0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'next': true,
              'href': '#'
            })
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Pagination>\n  <PaginationItem disabled>\n    <PaginationLink previous href="#" />\n  </PaginationItem>\n  <PaginationItem active>\n    <PaginationLink href="#">\n      1\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      2\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      3\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      4\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      5\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink next href="#" />\n  </PaginationItem>\n</Pagination>'
        })]
      }), (0, _inferno.createVNode)(2, 'h3', null, 'Sizing'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Pagination2.default, null, null, {
          'size': 'lg',
          children: [(0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'previous': true,
              'href': '#'
            })
          }), (0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'href': '#',
              children: '1'
            })
          }), (0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'href': '#',
              children: '2'
            })
          }), (0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'href': '#',
              children: '3'
            })
          }), (0, _inferno.createVNode)(16, _PaginationItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _PaginationLink2.default, null, null, {
              'next': true,
              'href': '#'
            })
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Pagination size="lg">\n  <PaginationItem>\n    <PaginationLink previous href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      1\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      2\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      3\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink next href="#" />\n  </PaginationItem>\n</Pagination>'
        })]
      })]
    })
  });
};

var _components = __webpack_require__(4);

var _Pagination = __webpack_require__(77);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _PaginationItem = __webpack_require__(78);

var _PaginationItem2 = _interopRequireDefault(_PaginationItem);

var _PaginationLink = __webpack_require__(79);

var _PaginationLink2 = _interopRequireDefault(_PaginationLink);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Popovers',
    children: [(0, _inferno.createVNode)(16, _components.Narrative, null, null, {
      children: (0, _inferno.createVNode)(2, 'p', null, ['Popovers are built with ', (0, _inferno.createVNode)(2, 'a', null, 'http://tether.io', {
        'href': 'http://tether.io/'
      }), '.'])
    }), (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: [(0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: (0, _inferno.createVNode)(16, ExamplePopover)
      }), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _components.Narrative, null, null, {
          children: 'This is the code to create a button with a popover:'
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: 'class ExamplePopover extends Component {\n  constructor(props) {\n    super(props);\n\n    this.toggle = this.toggle.bind(this);\n    this.state = {\n      popoverOpen: false\n    };\n  }\n\n  toggle() {\n    this.setState({\n      popoverOpen: !this.state.popoverOpen\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <Button id="Popover1" onClick={this.toggle}>\n          Launch Popover\n        </Button>\n        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>\n          <PopoverTitle>Popover Title</PopoverTitle>\n          <PopoverContent>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverContent>\n        </Popover>\n      </div>\n    );\n  }\n}'
        })]
      })]
    })]
  });
};

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _components = __webpack_require__(4);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _Popover = __webpack_require__(80);

var _Popover2 = _interopRequireDefault(_Popover);

var _PopoverTitle = __webpack_require__(82);

var _PopoverTitle2 = _interopRequireDefault(_PopoverTitle);

var _PopoverContent = __webpack_require__(81);

var _PopoverContent2 = _interopRequireDefault(_PopoverContent);

var _inferno = __webpack_require__(0);

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
      return (0, _inferno.createVNode)(2, 'div', null, [(0, _inferno.createVNode)(16, _Button2.default, null, null, {
        'id': 'Popover1',
        'onClick': this.toggle,
        children: 'Launch Popover'
      }), (0, _inferno.createVNode)(16, _Popover2.default, null, null, {
        'placement': 'bottom',
        'isOpen': this.state.popoverOpen,
        'target': 'Popover1',
        'toggle': this.toggle,
        children: [(0, _inferno.createVNode)(16, _PopoverTitle2.default, null, null, {
          children: 'Popover Title'
        }), (0, _inferno.createVNode)(16, _PopoverContent2.default, null, null, {
          children: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
        })]
      })]);
    }
  }]);

  return ExamplePopover;
}(_infernoComponent2.default);

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Tabs',
    children: (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: [(0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: (0, _inferno.createVNode)(16, TabExample)
      }), (0, _inferno.createVNode)(2, 'h3', null, 'Example Code:'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: 'class TabExample extends Component {\n  constructor(props) {\n    super(props);\n\n    this.toggle = this.toggle.bind(this);\n    this.state = {\n      activeTab: \'1\'\n    };\n  }\n\n  toggle(tab) {\n    if (this.state.activeTab !== tab) {\n      this.setState({\n        activeTab: tab\n      });\n    }\n  }\n  render() {\n    return (\n      <div>\n        <Nav tabs>\n          <NavItem>\n            <NavLink\n              className={classnames({ active: this.state.activeTab === \'1\' })}\n              onClick={() => { this.toggle(\'1\'); }}\n            >\n              Tab1\n            </NavLink>\n          </NavItem>\n          <NavItem>\n            <NavLink\n              className={classnames({ active: this.state.activeTab === \'2\' })}\n              onClick={() => { this.toggle(\'2\'); }}\n            >\n              Moar Tabs\n            </NavLink>\n          </NavItem>\n        </Nav>\n        <TabContent className="ExampleTab" fade activeTab={this.state.activeTab}>\n          <TabPane tabId="1">\n            <Row>\n              <Col sm="12">\n                <h4>Tab 1 Contents</h4>\n              </Col>\n            </Row>\n          </TabPane>\n          <TabPane tabId="2">\n            <Row>\n              <Col sm="6">\n                <Card block>\n                  <CardTitle>Special Title Treatment</CardTitle>\n                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>\n                  <Button>Go somewhere</Button>\n                </Card>\n              </Col>\n              <Col sm="6">\n                <Card block>\n                  <CardTitle>Special Title Treatment</CardTitle>\n                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>\n                  <Button>Go somewhere</Button>\n                </Card>\n              </Col>\n            </Row>\n          </TabPane>\n        </TabContent>\n      </div>\n    );\n  }\n}'
        })
      })]
    })
  });
};

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _components = __webpack_require__(4);

var _Nav = __webpack_require__(8);

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = __webpack_require__(9);

var _NavItem2 = _interopRequireDefault(_NavItem);

var _NavLink = __webpack_require__(10);

var _NavLink2 = _interopRequireDefault(_NavLink);

var _TabContent = __webpack_require__(84);

var _TabContent2 = _interopRequireDefault(_TabContent);

var _TabPane = __webpack_require__(85);

var _TabPane2 = _interopRequireDefault(_TabPane);

var _Row = __webpack_require__(39);

var _Row2 = _interopRequireDefault(_Row);

var _Col = __webpack_require__(37);

var _Col2 = _interopRequireDefault(_Col);

var _Card = __webpack_require__(23);

var _Card2 = _interopRequireDefault(_Card);

var _CardTitle = __webpack_require__(25);

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardText = __webpack_require__(24);

var _CardText2 = _interopRequireDefault(_CardText);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _inferno = __webpack_require__(0);

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

      return (0, _inferno.createVNode)(2, 'div', null, [(0, _inferno.createVNode)(16, _Nav2.default, null, null, {
        'tabs': true,
        children: [(0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
          children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'className': (0, _classnames2.default)({ active: this.state.activeTab === '1' }),
            'onClick': function onClick() {
              _this2.toggle('1');
            },
            children: 'Tab1'
          })
        }), (0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
          children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'className': (0, _classnames2.default)({ active: this.state.activeTab === '2' }),
            'onClick': function onClick() {
              _this2.toggle('2');
            },
            children: 'Moar Tabs'
          })
        })]
      }), (0, _inferno.createVNode)(16, _TabContent2.default, null, null, {
        'className': 'ExampleTab',
        'fade': true,
        'activeTab': this.state.activeTab,
        children: [(0, _inferno.createVNode)(16, _TabPane2.default, null, null, {
          'tabId': '1',
          children: (0, _inferno.createVNode)(16, _Row2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _Col2.default, null, null, {
              'sm': '12',
              children: (0, _inferno.createVNode)(2, 'h4', null, 'Tab 1 Contents')
            })
          })
        }), (0, _inferno.createVNode)(16, _TabPane2.default, null, null, {
          'tabId': '2',
          children: (0, _inferno.createVNode)(16, _Row2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Col2.default, null, null, {
              'sm': '6',
              children: (0, _inferno.createVNode)(16, _Card2.default, null, null, {
                'block': true,
                children: [(0, _inferno.createVNode)(16, _CardTitle2.default, null, null, {
                  children: 'Special Title Treatment'
                }), (0, _inferno.createVNode)(16, _CardText2.default, null, null, {
                  children: 'With supporting text below as a natural lead-in to additional content.'
                }), (0, _inferno.createVNode)(16, _Button2.default, null, null, {
                  children: 'Go somewhere'
                })]
              })
            }), (0, _inferno.createVNode)(16, _Col2.default, null, null, {
              'sm': '6',
              children: (0, _inferno.createVNode)(16, _Card2.default, null, null, {
                'block': true,
                children: [(0, _inferno.createVNode)(16, _CardTitle2.default, null, null, {
                  children: 'Special Title Treatment'
                }), (0, _inferno.createVNode)(16, _CardText2.default, null, null, {
                  children: 'With supporting text below as a natural lead-in to additional content.'
                }), (0, _inferno.createVNode)(16, _Button2.default, null, null, {
                  children: 'Go somewhere'
                })]
              })
            })]
          })
        })]
      })]);
    }
  }]);

  return TabExample;
}(_infernoComponent2.default);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Card With Header and Footer',
    children: [(0, _inferno.createVNode)(16, _components.Narrative, null, null, {
      children: (0, _inferno.createVNode)(2, 'p', null, 'Use a card to display content in an engaging and concise manner.')
    }), (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Card2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _CardHeader2.default, null, null, {
            children: 'The Header'
          }), (0, _inferno.createVNode)(16, _CardBlock2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _CardTitle2.default, null, null, {
              children: 'Special Title Treatment'
            }), (0, _inferno.createVNode)(16, _CardText2.default, null, null, {
              children: 'With supporting text below as a natural lead-in to additional content.'
            })]
          }), (0, _inferno.createVNode)(16, _CardFooter2.default, null, null, {
            'className': 'text-right',
            children: (0, _inferno.createVNode)(16, _Button2.default, null, null, {
              'color': 'link',
              children: 'Go now...'
            })
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Card>\n  <CardHeader>The Header</CardHeader>\n  <CardBlock>\n    <CardTitle>Special Title Treatment</CardTitle>\n    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>\n  </CardBlock>\n  <CardFooter className="text-right"><Button color="link">Go now...</Button></CardFooter>\n</Card>'
        })]
      })
    })]
  });
};

var _components = __webpack_require__(4);

var _Card = __webpack_require__(23);

var _Card2 = _interopRequireDefault(_Card);

var _CardBlock = __webpack_require__(36);

var _CardBlock2 = _interopRequireDefault(_CardBlock);

var _CardHeader = __webpack_require__(65);

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardFooter = __webpack_require__(64);

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _CardText = __webpack_require__(24);

var _CardText2 = _interopRequireDefault(_CardText);

var _CardTitle = __webpack_require__(25);

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Basic Card',
    children: [(0, _inferno.createVNode)(16, _components.Narrative, null, null, {
      children: (0, _inferno.createVNode)(2, 'p', null, 'Use a card to display content in an engaging and concise manner.')
    }), (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: [(0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Card2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _CardImg2.default, null, null, {
            'top': true,
            'width': '100%',
            'src': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
            'alt': 'Card image cap'
          }), (0, _inferno.createVNode)(16, _CardBlock2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _CardTitle2.default, null, null, {
              children: 'Card title'
            }), (0, _inferno.createVNode)(16, _CardText2.default, null, null, {
              children: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
            }), (0, _inferno.createVNode)(16, _Button2.default, null, null, {
              children: 'Button'
            })]
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Card>\n  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />\n  <CardBlock>\n    <CardTitle>Card title</CardTitle>\n    <CardText>Some quick example text to build on the card title and make up the bulk of the card\'s content.</CardText>\n    <Button>Button</Button>\n  </CardBlock>\n</Card>'
        })]
      }), (0, _inferno.createVNode)(2, 'h3', null, 'Card with different design'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Card2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _CardBlock2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _CardTitle2.default, null, null, {
              children: 'Card title'
            }), (0, _inferno.createVNode)(16, _CardSubtitle2.default, null, null, {
              children: 'Card subtitle goes here'
            })]
          }), (0, _inferno.createVNode)(2, 'img', null, null, {
            'width': '100%',
            'src': 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
            'alt': 'Card image cap'
          }), (0, _inferno.createVNode)(16, _CardBlock2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _CardText2.default, null, null, {
              children: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
            }), (0, _inferno.createVNode)(16, _CardLink2.default, null, null, {
              'href': '#',
              children: 'Card Link'
            }), (0, _inferno.createVNode)(16, _CardLink2.default, null, null, {
              'href': '#',
              children: 'Another Link'
            })]
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Card>\n  <CardBlock>\n    <CardTitle>Card title</CardTitle>\n    <CardSubtitle>Card subtitle goes here</CardSubtitle>\n  </CardBlock>\n  <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />\n  <CardBlock>\n    <CardText>Some quick example text to build on the card title and make up the bulk of the card\'s content.</CardText>\n    <CardLink href="#">Card Link</CardLink>\n    <CardLink href="#">Another Link</CardLink>\n  </CardBlock>\n</Card>'
        })]
      })]
    })]
  });
};

var _components = __webpack_require__(4);

var _Card = __webpack_require__(23);

var _Card2 = _interopRequireDefault(_Card);

var _CardImg = __webpack_require__(66);

var _CardImg2 = _interopRequireDefault(_CardImg);

var _CardBlock = __webpack_require__(36);

var _CardBlock2 = _interopRequireDefault(_CardBlock);

var _CardLink = __webpack_require__(67);

var _CardLink2 = _interopRequireDefault(_CardLink);

var _CardSubtitle = __webpack_require__(68);

var _CardSubtitle2 = _interopRequireDefault(_CardSubtitle);

var _CardText = __webpack_require__(24);

var _CardText2 = _interopRequireDefault(_CardText);

var _CardTitle = __webpack_require__(25);

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Button Shorthand',
    children: [(0, _inferno.createVNode)(16, _components.Narrative, null, null, {
      children: (0, _inferno.createVNode)(2, 'p', null, ['Button shorthand is a convenience method for adding just a button. It is triggered when only a single string is the child. A Button will be created and all of the props will be passed to it with the exception of', (0, _inferno.createVNode)(2, 'code', null, 'groupClassName'), ' and ', (0, _inferno.createVNode)(2, 'code', null, 'groupAttributes'), ', which are used to added classes and attributes to the wrapping container. This means you can add your ', (0, _inferno.createVNode)(2, 'code', null, 'onClick'), ' and other handlers directly to', (0, _inferno.createVNode)(2, 'code', null, 'InputGroupButton'), '. If you want your string to not be wrapped in a button, then you really want to use ', (0, _inferno.createVNode)(2, 'code', null, 'InputGroupAddon'), ' (see Addons above for that).'])
    }), (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Form2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _InputGroup2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _InputGroupButton2.default, null, null, {
              children: 'To the Left!'
            }), (0, _inferno.createVNode)(16, _Input2.default)]
          }), (0, _inferno.createVNode)(2, 'br'), (0, _inferno.createVNode)(16, _InputGroup2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Input2.default), (0, _inferno.createVNode)(16, _InputGroupButton2.default, null, null, {
              'color': 'secondary',
              children: 'To the Right!'
            })]
          }), (0, _inferno.createVNode)(2, 'br'), (0, _inferno.createVNode)(16, _InputGroup2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _InputGroupButton2.default, null, null, {
              'color': 'danger',
              children: 'To the Left!'
            }), (0, _inferno.createVNode)(16, _Input2.default, null, null, {
              'placeholder': 'and...'
            }), (0, _inferno.createVNode)(16, _InputGroupButton2.default, null, null, {
              'color': 'success',
              children: 'To the Right!'
            })]
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Form>\n  <InputGroup>\n    <InputGroupButton>To the Left!</InputGroupButton>\n    <Input />\n  </InputGroup>\n  <br />\n  <InputGroup>\n    <Input />\n    <InputGroupButton color="secondary">To the Right!</InputGroupButton>\n  </InputGroup>\n  <br />\n  <InputGroup>\n    <InputGroupButton color="danger">To the Left!</InputGroupButton>\n    <Input placeholder="and..." />\n    <InputGroupButton color="success">To the Right!</InputGroupButton>\n  </InputGroup>\n</Form>'
        })]
      })
    })]
  });
};

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _components = __webpack_require__(4);

var _Form = __webpack_require__(16);

var _Form2 = _interopRequireDefault(_Form);

var _FormGroup = __webpack_require__(17);

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Input = __webpack_require__(18);

var _Input2 = _interopRequireDefault(_Input);

var _InputGroup = __webpack_require__(26);

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _InputGroupButton = __webpack_require__(27);

var _InputGroupButton2 = _interopRequireDefault(_InputGroupButton);

var _Label = __webpack_require__(19);

var _Label2 = _interopRequireDefault(_Label);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Basic Input Elements',
    children: (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Form2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _FormGroup2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Label2.default, null, null, {
              children: 'Title:'
            }), (0, _inferno.createVNode)(16, _Input2.default, null, null, {
              'type': 'text',
              'name': 'title'
            })]
          }), (0, _inferno.createVNode)(16, _FormGroup2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Label2.default, null, null, {
              children: 'Age:'
            }), (0, _inferno.createVNode)(16, _Input2.default, null, null, {
              'type': 'number',
              'name': 'age'
            })]
          }), (0, _inferno.createVNode)(16, _FormGroup2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Label2.default, null, null, {
              children: 'Filter:'
            }), (0, _inferno.createVNode)(16, _Input2.default, null, null, {
              'type': 'text',
              'name': 'filter',
              'placeholder': 'Type here...'
            })]
          }), (0, _inferno.createVNode)(16, _FormGroup2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Label2.default, null, null, {
              children: 'Password:'
            }), (0, _inferno.createVNode)(16, _Input2.default, null, null, {
              'type': 'password',
              'name': 'password',
              'placeholder': 'Choose wisely...'
            })]
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Form>\n  <FormGroup>\n    <Label>Title:</Label>\n    <Input type="text" name="title" />\n  </FormGroup>\n  <FormGroup>\n    <Label>Age:</Label>\n    <Input type="number" name="age" />\n  </FormGroup>\n  <FormGroup>\n    <Label>Filter:</Label>\n    <Input type="text" name="filter" placeholder="Type here..." />\n  </FormGroup>\n  <FormGroup>\n    <Label>Password:</Label>\n    <Input type="password" name="password" placeholder="Choose wisely..." />\n  </FormGroup>\n</Form>'
        })]
      })
    })
  });
};

var _components = __webpack_require__(4);

var _Form = __webpack_require__(16);

var _Form2 = _interopRequireDefault(_Form);

var _FormGroup = __webpack_require__(17);

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Label = __webpack_require__(19);

var _Label2 = _interopRequireDefault(_Label);

var _Input = __webpack_require__(18);

var _Input2 = _interopRequireDefault(_Input);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Input With Addon',
    children: (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Form2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _FormGroup2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Label2.default, null, null, {
              children: 'Email:'
            }), (0, _inferno.createVNode)(16, _InputGroup2.default, null, null, {
              children: [(0, _inferno.createVNode)(16, _InputGroupAddon2.default, null, null, {
                children: '@'
              }), (0, _inferno.createVNode)(16, _Input2.default, null, null, {
                'type': 'email',
                'name': 'email',
                'placeholder': 'example@email.com'
              })]
            })]
          }), (0, _inferno.createVNode)(16, _FormGroup2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Label2.default, null, null, {
              children: 'Price:'
            }), (0, _inferno.createVNode)(16, _InputGroup2.default, null, null, {
              children: [(0, _inferno.createVNode)(16, _Input2.default, null, null, {
                'type': 'number',
                'name': 'Age'
              }), (0, _inferno.createVNode)(16, _InputGroupAddon2.default, null, null, {
                children: 'SEK'
              })]
            })]
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Form>\n  <FormGroup>\n    <Label>Email:</Label>\n    <InputGroup>\n      <InputGroupAddon>@</InputGroupAddon>\n      <Input type="email" name="email" placeholder="example@email.com" />\n    </InputGroup>\n  </FormGroup>\n  <FormGroup>\n    <Label>Price:</Label>\n    <InputGroup>\n      <Input type="number" name="Age" />\n      <InputGroupAddon>SEK</InputGroupAddon>\n    </InputGroup>\n  </FormGroup>\n</Form>'
        })]
      })
    })
  });
};

var _components = __webpack_require__(4);

var _Form = __webpack_require__(16);

var _Form2 = _interopRequireDefault(_Form);

var _FormGroup = __webpack_require__(17);

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Input = __webpack_require__(18);

var _Input2 = _interopRequireDefault(_Input);

var _InputGroup = __webpack_require__(26);

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _InputGroupAddon = __webpack_require__(71);

var _InputGroupAddon2 = _interopRequireDefault(_InputGroupAddon);

var _InputGroupButton = __webpack_require__(27);

var _InputGroupButton2 = _interopRequireDefault(_InputGroupButton);

var _Label = __webpack_require__(19);

var _Label2 = _interopRequireDefault(_Label);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Input With Button',
    children: (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Form2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _FormGroup2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Label2.default, null, null, {
              children: 'Email:'
            }), (0, _inferno.createVNode)(16, _InputGroup2.default, null, null, {
              children: [(0, _inferno.createVNode)(16, _InputGroupButton2.default, null, null, {
                children: (0, _inferno.createVNode)(16, _Button2.default, null, null, {
                  children: 'I\'m a button'
                })
              }), (0, _inferno.createVNode)(16, _Input2.default, null, null, {
                'type': 'email',
                'name': 'email',
                'placeholder': 'example@email.com'
              })]
            })]
          }), (0, _inferno.createVNode)(16, _FormGroup2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Label2.default, null, null, {
              children: 'Price:'
            }), (0, _inferno.createVNode)(16, _InputGroup2.default, null, null, {
              children: [(0, _inferno.createVNode)(16, _InputGroupButton2.default, null, null, {
                children: (0, _inferno.createVNode)(16, _Button2.default, null, null, {
                  children: 'Button life'
                })
              }), (0, _inferno.createVNode)(16, _Input2.default, null, null, {
                'type': 'number',
                'name': 'Age'
              }), (0, _inferno.createVNode)(16, _InputGroupButton2.default, null, null, {
                children: (0, _inferno.createVNode)(16, SampleDropdownButton, null, null, {
                  'color': 'primary',
                  'split': true
                })
              })]
            })]
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Form>\n  <FormGroup>\n    <Label>Email:</Label>\n    <InputGroup>\n      <InputGroupButton><Button>I\'m a button</Button></InputGroupButton>\n      <Input type="email" name="email" placeholder="example@email.com" />\n    </InputGroup>\n  </FormGroup>\n  <FormGroup>\n    <Label>Price:</Label>\n    <InputGroup>\n      <InputGroupButton><Button>Button life</Button></InputGroupButton>  \n      <Input type="number" name="Age" />\n      <InputGroupButton>\n        <SampleDropdownButton color="primary" split/>\n      </InputGroupButton>\n    </InputGroup>\n  </FormGroup>\n</Form>'
        })]
      })
    })
  });
};

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _components = __webpack_require__(4);

var _Form = __webpack_require__(16);

var _Form2 = _interopRequireDefault(_Form);

var _FormGroup = __webpack_require__(17);

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Input = __webpack_require__(18);

var _Input2 = _interopRequireDefault(_Input);

var _InputGroup = __webpack_require__(26);

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _InputGroupButton = __webpack_require__(27);

var _InputGroupButton2 = _interopRequireDefault(_InputGroupButton);

var _Label = __webpack_require__(19);

var _Label2 = _interopRequireDefault(_Label);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = __webpack_require__(22);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _ButtonDropdown = __webpack_require__(35);

var _ButtonDropdown2 = _interopRequireDefault(_ButtonDropdown);

var _DropdownToggle = __webpack_require__(15);

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _DropdownMenu = __webpack_require__(7);

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownItem = __webpack_require__(14);

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SampleDropdownButton = function (_Component) {
  _inherits(SampleDropdownButton, _Component);

  function SampleDropdownButton(props) {
    _classCallCheck(this, SampleDropdownButton);

    var _this = _possibleConstructorReturn(this, (SampleDropdownButton.__proto__ || Object.getPrototypeOf(SampleDropdownButton)).call(this, props));

    _this.state = {
      isOpen: false
    };

    _this.doToggle = _this.doToggle.bind(_this);
    return _this;
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

      return (0, _inferno.createVNode)(16, _ButtonDropdown2.default, null, null, {
        'isOpen': this.state.isOpen,
        'toggle': this.doToggle,
        children: [(0, _inferno.createVNode)(16, _DropdownToggle2.default, null, null, _extends({}, props, {
          children: children
        })), (0, _inferno.createVNode)(16, _DropdownMenu2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _DropdownItem2.default, null, null, {
            children: 'Item 1'
          }), (0, _inferno.createVNode)(16, _DropdownItem2.default, null, null, {
            children: 'Item 2'
          }), (0, _inferno.createVNode)(16, _DropdownItem2.default, null, null, {
            children: 'Item 3'
          })]
        })]
      });
    }
  }]);

  return SampleDropdownButton;
}(_infernoComponent2.default);

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Basic Modal',
    children: [(0, _inferno.createVNode)(16, _components.Narrative, null, null, {
      children: (0, _inferno.createVNode)(2, 'p', null, 'Use modals to present essential information that takes over the entire window.')
    }), (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: [(0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _ButtonGroup2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, ModalExample, null, null, {
            'buttonLabel': 'Show modal'
          }), (0, _inferno.createVNode)(16, ModalExample, null, null, {
            'buttonLabel': 'Show modal without fade',
            'fade': false
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<ButtonGroup>  \n  <ModalExample buttonLabel="Show modal" />\n  <ModalExample buttonLabel="Show modal (no fade)" fade={false} />\n</ButtonGroup>'
        })]
      }), (0, _inferno.createVNode)(2, 'h3', null, 'Implementation of <ModalExample> component:'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: 'class ModalExample extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      modal: false\n    };\n\n    this.toggle = this.toggle.bind(this);\n  }\n\n  toggle() {\n    this.setState({\n      modal: !this.state.modal\n    });\n  }\n\n  render() {\n    const fadeModal = (props.hasOwnProperty(\'fade\') ? this.props.fade : true)\n    return (\n      <Button onClick={this.toggle}>{this.props.buttonLabel}\n        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} fade={fadeModal}>\n          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>\n          <ModalBody>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          </ModalBody>\n          <ModalFooter>\n            <Button color="primary" onClick={this.toggle}>Do Something</Button>{\' \'}\n            <Button color="secondary" onClick={this.toggle}>Cancel</Button>\n          </ModalFooter>\n        </Modal>\n      </Button>\n    );\n  }\n}'
        })
      }), (0, _inferno.createVNode)(2, 'h3', null, 'CSS for modal transitions:'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: (0, _inferno.createVNode)(16, _components.Code, null, null, {
          'language': 'css',
          children: '/* You need to override Bootstrap .modal because inferno-animation does animations */\n\n.modal {\n  display: block;\n}\n\n/* The actual modal */\n\n.ModalFade-leave {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n.ModalFade-leave-active {\n  overflow: hidden;\n  transition: transform 0.5s ease-in, opacity 0.4s ease-in;\n}\n\n.ModalFade-leave-end {\n  transform: translateY(-150%);\n  opacity: 0;\n}\n\n.ModalFade-enter {\n  transform: translateY(-150%);\n  opacity: 0;\n}\n\n.ModalFade-enter-active {\n  transition: transform 0.5s ease-out, opacity 0.4s ease-in;\n}\n\n.ModalFade-enter-end {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n/* The modal background */\n\n.ModalBackdropFade-leave {\n  opacity: 0.5;\n}\n\n.ModalBackdropFade-leave-active {\n  overflow: hidden;\n  transition: opacity 0.3s ease-in;\n}\n\n.ModalBackdropFade-leave-end {\n  opacity: 0!important;\n}\n\n.ModalBackdropFade-enter {\n  opacity: 0!important;\n}\n\n.ModalBackdropFade-enter-active {\n  transition: opacity 0.3s ease-in;\n}\n\n.ModalBackdropFade-enter-end {\n  opacity: 0.5;\n}'
        })
      })]
    })]
  });
};

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _components = __webpack_require__(4);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = __webpack_require__(22);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Modal = __webpack_require__(73);

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalHeader = __webpack_require__(76);

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalBody = __webpack_require__(74);

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalFooter = __webpack_require__(75);

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

var _inferno = __webpack_require__(0);

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
      return (0, _inferno.createVNode)(16, _Button2.default, null, null, {
        'onClick': this.toggle,
        children: [this.props.buttonLabel, (0, _inferno.createVNode)(16, _Modal2.default, null, null, {
          'isOpen': this.state.modal,
          'toggle': this.toggle,
          'className': this.props.className,
          'fade': fadeModal,
          children: [(0, _inferno.createVNode)(16, _ModalHeader2.default, null, null, {
            'toggle': this.toggle,
            children: 'Modal title'
          }), (0, _inferno.createVNode)(16, _ModalBody2.default, null, null, {
            children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }), (0, _inferno.createVNode)(16, _ModalFooter2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _Button2.default, null, null, {
              'color': 'primary',
              'onClick': this.toggle,
              children: 'Do Something'
            }), ' ', (0, _inferno.createVNode)(16, _Button2.default, null, null, {
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
}(_infernoComponent2.default);

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Horizontal',
    children: (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: [(0, _inferno.createVNode)(2, 'h3', null, 'List Based NavBar'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Nav2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
              'href': '#',
              children: 'Link'
            })
          }), (0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
              'href': '#',
              children: 'Link'
            })
          }), (0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
              'href': '#',
              children: 'Another Link'
            })
          }), (0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
              'disabled': true,
              'href': '#',
              children: 'Disabled Link'
            })
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Nav>\n  <NavItem>\n    <NavLink href="#">Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink href="#">Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink href="#">Another Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink disabled href="#">Disabled Link</NavLink>\n  </NavItem>\n</Nav>'
        })]
      }), (0, _inferno.createVNode)(2, 'h3', null, 'Link Based NavBar'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Nav2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'href': '#',
            children: 'Link'
          }), ' ', (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'href': '#',
            children: 'Link'
          }), ' ', (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'href': '#',
            children: 'Another Link'
          }), ' ', (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'disabled': true,
            'href': '#',
            children: 'Disabled Link'
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Nav>\n  <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>\n</Nav>'
        })]
      })]
    })
  });
};

var _components = __webpack_require__(4);

var _Nav = __webpack_require__(8);

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = __webpack_require__(9);

var _NavItem2 = _interopRequireDefault(_NavItem);

var _NavLink = __webpack_require__(10);

var _NavLink2 = _interopRequireDefault(_NavLink);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Pills',
    children: (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, TabbedNavbar), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: 'class TabbedNavbar extends Component {\n  constructor(props) {\n    super(props)\n\n    this.state = {\n      dropdownOpen: false\n    }\n\n    this.doToggle = this.doToggle.bind(this)\n  }\n\n  doToggle() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen\n    })\n  }\n\n  render() {\n    return (\n      <Nav pills>\n        <NavItem>\n          <NavLink href="#" active>Link</NavLink>\n        </NavItem>\n        <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.doToggle}>\n          <DropdownToggle nav caret>\n            Dropdown\n          </DropdownToggle>\n          <DropdownMenu>\n            <DropdownItem header>Header</DropdownItem>\n            <DropdownItem disabled>Action</DropdownItem>\n            <DropdownItem>Another Action</DropdownItem>\n            <DropdownItem divider />\n            <DropdownItem>Another Action</DropdownItem>\n          </DropdownMenu>\n        </NavDropdown>\n        <NavItem>\n          <NavLink href="#">Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href="#">Another Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink disabled href="#">Disabled Link</NavLink>\n        </NavItem>\n      </Nav>\n    )\n  }\n}'
        })]
      })
    })
  });
};

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _components = __webpack_require__(4);

var _Nav = __webpack_require__(8);

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = __webpack_require__(9);

var _NavItem2 = _interopRequireDefault(_NavItem);

var _NavLink = __webpack_require__(10);

var _NavLink2 = _interopRequireDefault(_NavLink);

var _NavDropdown = __webpack_require__(38);

var _NavDropdown2 = _interopRequireDefault(_NavDropdown);

var _Dropdown = __webpack_require__(13);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DropdownMenu = __webpack_require__(7);

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownToggle = __webpack_require__(15);

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _DropdownItem = __webpack_require__(14);

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _inferno = __webpack_require__(0);

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
      return (0, _inferno.createVNode)(16, _Nav2.default, null, null, {
        'pills': true,
        children: [(0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
          children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'href': '#',
            'active': true,
            children: 'Link'
          })
        }), (0, _inferno.createVNode)(16, _NavDropdown2.default, null, null, {
          'isOpen': this.state.dropdownOpen,
          'toggle': this.doToggle,
          children: [(0, _inferno.createVNode)(16, _DropdownToggle2.default, null, null, {
            'nav': true,
            'caret': true,
            children: 'Dropdown'
          }), (0, _inferno.createVNode)(16, _DropdownMenu2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _DropdownItem2.default, null, null, {
              'header': true,
              children: 'Header'
            }), (0, _inferno.createVNode)(16, _DropdownItem2.default, null, null, {
              'disabled': true,
              children: 'Action'
            }), (0, _inferno.createVNode)(16, _DropdownItem2.default, null, null, {
              children: 'Another Action'
            }), (0, _inferno.createVNode)(16, _DropdownItem2.default, null, null, {
              'divider': true
            }), (0, _inferno.createVNode)(16, _DropdownItem2.default, null, null, {
              children: 'Another Action'
            })]
          })]
        }), (0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
          children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'href': '#',
            children: 'Link'
          })
        }), (0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
          children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'href': '#',
            children: 'Another Link'
          })
        }), (0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
          children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'disabled': true,
            'href': '#',
            children: 'Disabled Link'
          })
        })]
      });
    }
  }]);

  return TabbedNavbar;
}(_infernoComponent2.default);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Tabbed',
    children: (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, TabbedNavbar), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: 'class TabbedNavbar extends Component {\n  constructor(props) {\n    super(props)\n\n    this.state = {\n      dropdownOpen: false\n    }\n\n    this.doToggle = this.doToggle.bind(this)\n  }\n\n  doToggle() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen\n    })\n  }\n\n  render() {\n    return (\n      <Nav tabs>\n        <NavItem>\n          <NavLink href="#" active>Link</NavLink>\n        </NavItem>\n        <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.doToggle}>\n          <DropdownToggle nav caret>\n            Dropdown\n          </DropdownToggle>\n          <DropdownMenu>\n            <DropdownItem header>Header</DropdownItem>\n            <DropdownItem disabled>Action</DropdownItem>\n            <DropdownItem>Another Action</DropdownItem>\n            <DropdownItem divider />\n            <DropdownItem>Another Action</DropdownItem>\n          </DropdownMenu>\n        </NavDropdown>\n        <NavItem>\n          <NavLink href="#">Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href="#">Another Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink disabled href="#">Disabled Link</NavLink>\n        </NavItem>\n      </Nav>\n    )\n  }\n}'
        })]
      })
    })
  });
};

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _components = __webpack_require__(4);

var _Nav = __webpack_require__(8);

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = __webpack_require__(9);

var _NavItem2 = _interopRequireDefault(_NavItem);

var _NavLink = __webpack_require__(10);

var _NavLink2 = _interopRequireDefault(_NavLink);

var _NavDropdown = __webpack_require__(38);

var _NavDropdown2 = _interopRequireDefault(_NavDropdown);

var _Dropdown = __webpack_require__(13);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DropdownMenu = __webpack_require__(7);

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownToggle = __webpack_require__(15);

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _DropdownItem = __webpack_require__(14);

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _inferno = __webpack_require__(0);

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
      return (0, _inferno.createVNode)(16, _Nav2.default, null, null, {
        'tabs': true,
        children: [(0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
          children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'href': '#',
            'active': true,
            children: 'Link'
          })
        }), (0, _inferno.createVNode)(16, _NavDropdown2.default, null, null, {
          'isOpen': this.state.dropdownOpen,
          'toggle': this.doToggle,
          children: [(0, _inferno.createVNode)(16, _DropdownToggle2.default, null, null, {
            'nav': true,
            'caret': true,
            children: 'Dropdown'
          }), (0, _inferno.createVNode)(16, _DropdownMenu2.default, null, null, {
            children: [(0, _inferno.createVNode)(16, _DropdownItem2.default, null, null, {
              'header': true,
              children: 'Header'
            }), (0, _inferno.createVNode)(16, _DropdownItem2.default, null, null, {
              'disabled': true,
              children: 'Action'
            }), (0, _inferno.createVNode)(16, _DropdownItem2.default, null, null, {
              children: 'Another Action'
            }), (0, _inferno.createVNode)(16, _DropdownItem2.default, null, null, {
              'divider': true
            }), (0, _inferno.createVNode)(16, _DropdownItem2.default, null, null, {
              children: 'Another Action'
            })]
          })]
        }), (0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
          children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'href': '#',
            children: 'Link'
          })
        }), (0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
          children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'href': '#',
            children: 'Another Link'
          })
        }), (0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
          children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'disabled': true,
            'href': '#',
            children: 'Disabled Link'
          })
        })]
      });
    }
  }]);

  return TabbedNavbar;
}(_infernoComponent2.default);

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'Vertical',
    children: (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: [(0, _inferno.createVNode)(2, 'h3', null, 'List Based NavBar'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Nav2.default, null, null, {
          'vertical': true,
          children: [(0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
              'href': '#',
              children: 'Link'
            })
          }), (0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
              'href': '#',
              children: 'Link'
            })
          }), (0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
              'href': '#',
              children: 'Another Link'
            })
          }), (0, _inferno.createVNode)(16, _NavItem2.default, null, null, {
            children: (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
              'disabled': true,
              'href': '#',
              children: 'Disabled Link'
            })
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Nav vertical>\n  <NavItem>\n    <NavLink href="#">Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink href="#">Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink href="#">Another Link</NavLink>\n  </NavItem>\n  <NavItem>\n    <NavLink disabled href="#">Disabled Link</NavLink>\n  </NavItem>\n</Nav>'
        })]
      }), (0, _inferno.createVNode)(2, 'h3', null, 'Link Based NavBar'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _Nav2.default, null, null, {
          'vertical': true,
          children: [(0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'href': '#',
            children: 'Link'
          }), ' ', (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'href': '#',
            children: 'Link'
          }), ' ', (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'href': '#',
            children: 'Another Link'
          }), ' ', (0, _inferno.createVNode)(16, _NavLink2.default, null, null, {
            'disabled': true,
            'href': '#',
            children: 'Disabled Link'
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<Nav vertical>\n  <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>\n</Nav>'
        })]
      })]
    })
  });
};

var _components = __webpack_require__(4);

var _Nav = __webpack_require__(8);

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = __webpack_require__(9);

var _NavItem2 = _interopRequireDefault(_NavItem);

var _NavLink = __webpack_require__(10);

var _NavLink2 = _interopRequireDefault(_NavLink);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(3);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _infernoRouter = __webpack_require__(34);

var _createBrowserHistory = __webpack_require__(58);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _BasicPage = __webpack_require__(53);

var _BasicPage2 = _interopRequireDefault(_BasicPage);

var _CardPage = __webpack_require__(54);

var _CardPage2 = _interopRequireDefault(_CardPage);

var _FormPage = __webpack_require__(55);

var _FormPage2 = _interopRequireDefault(_FormPage);

var _ModalPage = __webpack_require__(56);

var _ModalPage2 = _interopRequireDefault(_ModalPage);

var _NavigationPage = __webpack_require__(57);

var _NavigationPage2 = _interopRequireDefault(_NavigationPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(12);


function AppLayout(props) {
  return (0, _inferno.createVNode)(2, 'div', 'Content', props.children);
}

if (typeof window !== 'undefined') {
  var browserHistory = (0, _createBrowserHistory2.default)();

  var appRoutes = (0, _inferno.createVNode)(16, _infernoRouter.Router, null, null, {
    'history': browserHistory,
    children: [(0, _inferno.createVNode)(16, _infernoRouter.Route, null, null, {
      'path': '/inferno-bootstrap-docs',
      'component': AppLayout,
      children: [(0, _inferno.createVNode)(16, _infernoRouter.IndexRoute, null, null, {
        'component': _BasicPage2.default
      }), (0, _inferno.createVNode)(16, _infernoRouter.Route, null, null, {
        'path': '/basic',
        'component': _BasicPage2.default
      }), (0, _inferno.createVNode)(16, _infernoRouter.Route, null, null, {
        'path': '/card',
        'component': _CardPage2.default
      }), (0, _inferno.createVNode)(16, _infernoRouter.Route, null, null, {
        'path': '/form',
        'component': _FormPage2.default
      }), (0, _inferno.createVNode)(16, _infernoRouter.Route, null, null, {
        'path': '/modal',
        'component': _ModalPage2.default
      }), (0, _inferno.createVNode)(16, _infernoRouter.Route, null, null, {
        'path': '/navigation',
        'component': _NavigationPage2.default
      })]
    }), (0, _inferno.createVNode)(16, _infernoRouter.Redirect, null, null, {
      'from': '/*',
      'to': '/inferno-bootstrap-docs'
    })]
  });
  _inferno2.default.render(appRoutes, document.getElementById('app'));
}

/***/ }),
/* 104 */,
/* 105 */
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

var _infernoComponent = __webpack_require__(47);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _infernoCreateElement = __webpack_require__(48);

var _infernoCreateElement2 = _interopRequireDefault(_infernoCreateElement);

var _animatedComponent = __webpack_require__(20);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

var Animated = function (_Component) {
  _inherits(Animated, _Component);

  function Animated() {
    _classCallCheck(this, Animated);

    return _possibleConstructorReturn(this, (Animated.__proto__ || Object.getPrototypeOf(Animated)).apply(this, arguments));
  }

  _createClass(Animated, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _animatedComponent.animateOnAdd)(this, this.props.prefix, this.props.onDidEnter);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _animatedComponent.animateOnRemove)(this, this.props.prefix, this.props.onDidLeave);
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _infernoCreateElement2.default)(this.props.el || 'div', this.props, this.props.children);
    }
  }]);

  return Animated;
}(_infernoComponent2.default);

exports.default = Animated;
//# sourceMappingURL=Animated.js.map

/***/ }),
/* 106 */
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

var _infernoComponent = __webpack_require__(47);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _infernoCreateElement = __webpack_require__(48);

var _infernoCreateElement2 = _interopRequireDefault(_infernoCreateElement);

var _animatedComponent = __webpack_require__(20);

var _inferno = __webpack_require__(21);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

var animateSizeChange = function animateSizeChange(component, animationName, sourceSize, targetSize) {
  var node = component._vNode.dom;
  // Do not animate if this class is set (should I do this by passing prop through context?)
  if (node.closest('.InfernoAnimation--noAnim')) {
    return;
  }

  // 1. Get height and set start of animation
  node.style.height = sourceSize.height + 'px';
  node.style.width = sourceSize.width + 'px';

  // 2. Set an animation listener, code at end
  var done = false;
  var nrofTransitionsLeft;
  var onTransitionEnd = function onTransitionEnd(event) {
    // Make sure it isn't a child that is triggering the event
    if (event && event.target !== node) {
      return;
    }
    if (event !== undefined && nrofTransitionsLeft > 0) {
      nrofTransitionsLeft--;
      return;
    }
    if (done) return;
    done = true;
    // 5. Remove the element
    // Note: If I don't declare an anonymous function immediately here this callback isn't called!
    node.style.height = node.style.width = '';
    node.classList.remove(animationName + '-cross-fade-active');
  };
  node.addEventListener("transitionend", onTransitionEnd, false);
  var dummy = node.clientHeight;

  // 3. Activate transition
  node.classList.add(animationName + '-cross-fade-active');

  var cs = window.getComputedStyle(node);
  var dur = cs.getPropertyValue('transition-duration').split(',');
  var del = cs.getPropertyValue('transition-delay').split(',');
  var animTimeout = dur.map(function (v, index) {
    return parseFloat(v) + parseFloat(del[index]);
  }).reduce(function (prev, curr) {
    return prev > curr ? prev : curr;
  }, 0);
  nrofTransitionsLeft = dur.length - 1;
  setTimeout(onTransitionEnd, Math.round(animTimeout * 1000) + 50); // Fallback if transitionend fails

  /*
  console.log('----- transition-duration', cs.getPropertyValue('transition-duration'))
  console.log('----- transition-delay', cs.getPropertyValue('transition-delay'))
  console.log('----- animTimeout', Math.round(animTimeout * 1000) + 50)
  */

  // 4. Activate target state
  setTimeout(function () {
    node.style.height = targetSize.height + 'px';
    node.style.width = targetSize.width + 'px';
  }, 5);
};

function _getSizeOfCrossFadeVnode(vNode) {
  var domEl = vNode.dom.parentElement;
  domEl.classList.add('InfernoAnimation--getSize');
  var height = domEl.offsetHeight;
  var width = domEl.offsetWidth;
  domEl.classList.remove('InfernoAnimation--getSize');
  return { width: width, height: height };
}

var CrossFade = function (_Component) {
  _inherits(CrossFade, _Component);

  function CrossFade(props) {
    _classCallCheck(this, CrossFade);

    var _this = _possibleConstructorReturn(this, (CrossFade.__proto__ || Object.getPrototypeOf(CrossFade)).call(this, props));

    _this.state = {
      active: false
    };

    _this.setTargetSize = _this.setTargetSize.bind(_this);
    _this.setSourceSize = _this.setSourceSize.bind(_this);
    _this._animationCheck = _this._animationCheck.bind(_this);
    return _this;
  }

  _createClass(CrossFade, [{
    key: '_animationCheck',
    value: function _animationCheck() {
      if (this.state.active && this.targetSize && this.sourceSize && this._vNode.dom) {
        animateSizeChange(this, this.props.prefix, this.sourceSize, this.targetSize);
        this.targetSize = this.sourceSize = undefined;
      }
    }
  }, {
    key: 'componentDidMount',
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
    key: 'setTargetSize',
    value: function setTargetSize(vNode) {
      this.targetSize = _getSizeOfCrossFadeVnode(vNode);
      this._animationCheck();
    }
  }, {
    key: 'setSourceSize',
    value: function setSourceSize(vNode) {
      this.sourceSize = _getSizeOfCrossFadeVnode(vNode);
      this._animationCheck();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var elProps = {};
      if (this.props.className) {
        // Using 'InfernoAnimation--noAnim' to block animations in children
        elProps['className'] = this.props.className + (!this.state.active ? ' InfernoAnimation--noAnim' : '');
      } else if (!this.state.active) {
        elProps['className'] = 'InfernoAnimation--noAnim';
      }

      var children = !Array.isArray(children) ? [this.props.children] : this.props.children;

      var childEls = children.map(function (childEl) {
        return (0, _infernoCreateElement2.default)(CrossFadeItem, {
          // onComponentDidMount: this.setTargetSize, onComponentWillUnmount: this.setSourceSize, key: childEl.key
          onEnter: _this3.setTargetSize, onLeave: _this3.setSourceSize, key: childEl && childEl.key, prefix: _this3.props.prefix
        }, childEl);
      });

      return (0, _infernoCreateElement2.default)(this.props.el || 'div', elProps, childEls);
    }
  }]);

  return CrossFade;
}(_infernoComponent2.default);

/*
function CrossFadeItem (props) {
  return (
    <div className="CrossFadeItem">
      {props.children}
    </div>
  )
}
*/

var CrossFadeItem = function (_Component2) {
  _inherits(CrossFadeItem, _Component2);

  function CrossFadeItem() {
    _classCallCheck(this, CrossFadeItem);

    return _possibleConstructorReturn(this, (CrossFadeItem.__proto__ || Object.getPrototypeOf(CrossFadeItem)).apply(this, arguments));
  }

  _createClass(CrossFadeItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onEnter(this._vNode);
      (0, _animatedComponent.animateOnAdd)(this, this.props.prefix);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.onLeave(this._vNode);
      (0, _animatedComponent.animateOnRemove)(this, this.props.prefix);
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _inferno.createVNode)(2, 'div', 'CrossFadeItem', this.props.children);
    }
  }]);

  return CrossFadeItem;
}(_infernoComponent2.default);

exports.default = CrossFade;
//# sourceMappingURL=CrossFade.js.map

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

var inferno = __webpack_require__(21);

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
var NO_OP = "$NO_OP";
var ERROR_MSG = "a runtime error occured! Use Inferno in development environment to find the error.";
// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== "undefined" && window.document);
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = Array.isArray;
function isStringOrNumber(o) {
    var type = typeof o === 'undefined' ? 'undefined' : _typeof(o);
    return type === "string" || type === "number";
}
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
function isFunction(o) {
    return typeof o === "function";
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
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error("Inferno Error: " + message);
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

/**
 * @module Inferno-Component
 */ /** TypeDoc Comment */
// Make sure u use EMPTY_OBJ from 'inferno', otherwise it'll be a different reference
var noOp = ERROR_MSG;
if (process.env.NODE_ENV !== "production") {
    noOp = "Inferno Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op.";
}
var componentCallbackQueue = new Map();
// when a components root VNode is also a component, we can run into issues
// this will recursively look for vNode.parentNode if the VNode is a component
function updateParentComponentVNodes(vNode, dom) {
    if (vNode.flags & 28 /* Component */) {
            var parentVNode = vNode.parentVNode;
            if (parentVNode) {
                parentVNode.dom = dom;
                updateParentComponentVNodes(parentVNode, dom);
            }
        }
}
var resolvedPromise = Promise.resolve();
function addToQueue(component, force, callback) {
    var queue = componentCallbackQueue.get(component);
    if (queue === void 0) {
        queue = [];
        componentCallbackQueue.set(component, queue);
        resolvedPromise.then(function () {
            componentCallbackQueue.delete(component);
            component._updating = true;
            applyState(component, force, function () {
                for (var i = 0, len = queue.length; i < len; i++) {
                    queue[i].call(component);
                }
            });
            component._updating = false;
        });
    }
    if (!isNullOrUndef(callback)) {
        queue.push(callback);
    }
}
function queueStateChanges(component, newState, callback) {
    if (isFunction(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    var pending = component._pendingState;
    if (isNullOrUndef(pending)) {
        component._pendingState = pending = newState;
    } else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (isBrowser && !component._pendingSetState && !component._blockRender) {
        if (!component._updating) {
            component._pendingSetState = true;
            component._updating = true;
            applyState(component, false, callback);
            component._updating = false;
        } else {
            addToQueue(component, false, callback);
        }
    } else {
        var state = component.state;
        if (state === null) {
            component.state = pending;
        } else {
            for (var key in pending) {
                state[key] = pending[key];
            }
        }
        component._pendingState = null;
        if (!isNullOrUndef(callback) && component._blockRender) {
            component._lifecycle.addListener(callback.bind(component));
        }
    }
}
function applyState(component, force, callback) {
    if (component._unmounted) {
        return;
    }
    if (force || !component._blockRender) {
        component._pendingSetState = false;
        var pendingState = component._pendingState;
        var prevState = component.state;
        var nextState = combineFrom(prevState, pendingState);
        var props = component.props;
        var context = component.context;
        component._pendingState = null;
        var nextInput = component._updateComponent(prevState, nextState, props, props, context, force, true);
        var didUpdate = true;
        if (isInvalid(nextInput)) {
            nextInput = inferno.createVNode(4096 /* Void */, null);
        } else if (nextInput === NO_OP) {
            nextInput = component._lastInput;
            didUpdate = false;
        } else if (isStringOrNumber(nextInput)) {
            nextInput = inferno.createVNode(1 /* Text */, null, null, nextInput);
        } else if (isArray(nextInput)) {
            if (process.env.NODE_ENV !== "production") {
                throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
            }
            throwError();
        }
        var lastInput = component._lastInput;
        var vNode = component._vNode;
        var parentDom = lastInput.dom && lastInput.dom.parentNode || (lastInput.dom = vNode.dom);
        component._lastInput = nextInput;
        if (didUpdate) {
            var childContext;
            if (!isNullOrUndef(component.getChildContext)) {
                childContext = component.getChildContext();
            }
            if (isNullOrUndef(childContext)) {
                childContext = component._childContext;
            } else {
                childContext = combineFrom(context, childContext);
            }
            var lifeCycle = component._lifecycle;
            inferno.internal_patch(lastInput, nextInput, parentDom, lifeCycle, childContext, component._isSVG, false);
            lifeCycle.trigger();
            if (!isNullOrUndef(component.componentDidUpdate)) {
                component.componentDidUpdate(props, prevState, context);
            }
            if (!isNull(inferno.options.afterUpdate)) {
                inferno.options.afterUpdate(vNode);
            }
        }
        var dom = vNode.dom = nextInput.dom;
        if (inferno.options.findDOMNodeEnabled) {
            inferno.internal_DOMNodeMap.set(component, nextInput.dom);
        }
        updateParentComponentVNodes(vNode, dom);
    } else {
        component.state = component._pendingState;
        component._pendingState = null;
    }
    if (!isNullOrUndef(callback)) {
        callback.call(component);
    }
}
var alreadyWarned = false;
var Component = function Component(props, context) {
    this.state = null;
    this._blockRender = false;
    this._blockSetState = true;
    this._pendingSetState = false;
    this._pendingState = null;
    this._lastInput = null;
    this._vNode = null;
    this._unmounted = false;
    this._lifecycle = null;
    this._childContext = null;
    this._isSVG = false;
    this._updating = true;
    /** @type {object} */
    this.props = props || inferno.EMPTY_OBJ;
    /** @type {object} */
    this.context = context || inferno.EMPTY_OBJ; // context should not be mutable
};
Component.prototype.forceUpdate = function forceUpdate(callback) {
    if (this._unmounted || !isBrowser) {
        return;
    }
    applyState(this, true, callback);
};
Component.prototype.setState = function setState(newState, callback) {
    if (this._unmounted) {
        return;
    }
    if (!this._blockSetState) {
        queueStateChanges(this, newState, callback);
    } else {
        if (process.env.NODE_ENV !== "production") {
            throwError("cannot update state via setState() in componentWillUpdate() or constructor.");
        }
        throwError();
    }
};
Component.prototype.setStateSync = function setStateSync(newState) {
    if (process.env.NODE_ENV !== "production") {
        if (!alreadyWarned) {
            alreadyWarned = true;
            // tslint:disable-next-line:no-console
            console.warn("Inferno WARNING: setStateSync has been deprecated and will be removed in next release. Use setState instead.");
        }
    }
    this.setState(newState);
};
Component.prototype._updateComponent = function _updateComponent(prevState, nextState, prevProps, nextProps, context, force, fromSetState) {
    if (this._unmounted === true) {
        if (process.env.NODE_ENV !== "production") {
            throwError(noOp);
        }
        throwError();
    }
    if (prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ || prevState !== nextState || force) {
        if (prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ) {
            if (!isNullOrUndef(this.componentWillReceiveProps) && !fromSetState) {
                // keep a copy of state before componentWillReceiveProps
                var beforeState = combineFrom(this.state);
                this._blockRender = true;
                this.componentWillReceiveProps(nextProps, context);
                this._blockRender = false;
                var afterState = this.state;
                if (beforeState !== afterState) {
                    // if state changed in componentWillReceiveProps, reassign the beforeState
                    this.state = beforeState;
                    // set the afterState as pending state so the change gets picked up below
                    this._pendingSetState = true;
                    this._pendingState = afterState;
                }
            }
            if (this._pendingSetState) {
                nextState = combineFrom(nextState, this._pendingState);
                this._pendingSetState = false;
                this._pendingState = null;
            }
        }
        /* Update if scu is not defined, or it returns truthy value or force */
        if (force || isNullOrUndef(this.shouldComponentUpdate) || this.shouldComponentUpdate && this.shouldComponentUpdate(nextProps, nextState, context)) {
            if (!isNullOrUndef(this.componentWillUpdate)) {
                this._blockSetState = true;
                this.componentWillUpdate(nextProps, nextState, context);
                this._blockSetState = false;
            }
            this.props = nextProps;
            this.state = nextState;
            this.context = context;
            if (inferno.options.beforeRender) {
                inferno.options.beforeRender(this);
            }
            var render = this.render(nextProps, nextState, context);
            if (inferno.options.afterRender) {
                inferno.options.afterRender(this);
            }
            return render;
        } else {
            this.props = nextProps;
            this.state = nextState;
            this.context = context;
        }
    }
    return NO_OP;
};
// tslint:disable-next-line:no-empty
Component.prototype.render = function render(nextProps, nextState, nextContext) {};

exports['default'] = Component;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

var inferno = __webpack_require__(21);

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
function isString(o) {
    return typeof o === "string";
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
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === "object";
}

/**
 * @module Inferno-Create-Element
 */ /** TypeDoc Comment */
var componentHooks = new Set();
componentHooks.add("onComponentWillMount");
componentHooks.add("onComponentDidMount");
componentHooks.add("onComponentWillUnmount");
componentHooks.add("onComponentShouldUpdate");
componentHooks.add("onComponentWillUpdate");
componentHooks.add("onComponentDidUpdate");
/**
 * Creates virtual node
 * @param {string|Function|Component<any, any>} type Type of node
 * @param {object=} props Optional props for virtual node
 * @param {...{object}=} _children Optional children for virtual node
 * @returns {VNode} new virtual ndoe
 */
function createElement(type, props) {
    var _children = [],
        len = arguments.length - 2;
    while (len-- > 0) {
        _children[len] = arguments[len + 2];
    }if (isInvalid(type) || isObject(type)) {
        throw new Error("Inferno Error: createElement() name parameter cannot be undefined, null, false or true, It must be a string, class or function.");
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
        } else if (_children.length === 0) {
            children = void 0;
        }
    }
    if (isString(type)) {
        flags = inferno.getFlagsForElementVnode(type);
        if (!isNullOrUndef(props)) {
            newProps = {};
            for (var prop in props) {
                if (prop === "className" || prop === "class") {
                    className = props[prop];
                } else if (prop === "key") {
                    key = props.key;
                } else if (prop === "children" && isUndefined(children)) {
                    children = props.children; // always favour children args, default to props
                } else if (prop === "ref") {
                    ref = props.ref;
                } else {
                    newProps[prop] = props[prop];
                }
            }
        }
    } else {
        flags = 16 /* ComponentUnknown */;
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
                if (componentHooks.has(prop$1)) {
                    if (!ref) {
                        ref = {};
                    }
                    ref[prop$1] = props[prop$1];
                } else if (prop$1 === "key") {
                    key = props.key;
                } else {
                    newProps[prop$1] = props[prop$1];
                }
            }
        }
    }
    return inferno.createVNode(flags, type, className, children, newProps, key, ref);
}

exports['default'] = createElement;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
var NO_OP = "$NO_OP";
var ERROR_MSG = "a runtime error occured! Use Inferno in development environment to find the error.";
// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== "undefined" && window.document);
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = Array.isArray;
function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}
function isStringOrNumber(o) {
    var type = typeof o === 'undefined' ? 'undefined' : _typeof(o);
    return type === "string" || type === "number";
}
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
function isFunction(o) {
    return typeof o === "function";
}
function isString(o) {
    return typeof o === "string";
}
function isNumber(o) {
    return typeof o === "number";
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
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === "object";
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error("Inferno Error: " + message);
}
function warning(message) {
    // tslint:disable-next-line:no-console
    console.warn(message);
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
function Lifecycle() {
    this.listeners = [];
}
Lifecycle.prototype.addListener = function addListener(callback) {
    this.listeners.push(callback);
};
Lifecycle.prototype.trigger = function trigger() {
    var listeners = this.listeners;
    var listener;
    // We need to remove current listener from array when calling it, because more listeners might be added
    while (listener = listeners.shift()) {
        listener();
    }
};

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var options = {
    afterMount: null,
    afterRender: null,
    afterUpdate: null,
    beforeRender: null,
    beforeUnmount: null,
    createVNode: null,
    findDOMNodeEnabled: false,
    recyclingEnabled: false,
    roots: []
};

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var xlinkNS = "http://www.w3.org/1999/xlink";
var xmlNS = "http://www.w3.org/XML/1998/namespace";
var svgNS = "http://www.w3.org/2000/svg";
var strictProps = new Set();
strictProps.add("volume");
strictProps.add("defaultChecked");
var booleanProps = new Set();
booleanProps.add("muted");
booleanProps.add("scoped");
booleanProps.add("loop");
booleanProps.add("open");
booleanProps.add("checked");
booleanProps.add("default");
booleanProps.add("capture");
booleanProps.add("disabled");
booleanProps.add("readOnly");
booleanProps.add("required");
booleanProps.add("autoplay");
booleanProps.add("controls");
booleanProps.add("seamless");
booleanProps.add("reversed");
booleanProps.add("allowfullscreen");
booleanProps.add("novalidate");
booleanProps.add("hidden");
booleanProps.add("autoFocus");
booleanProps.add("selected");
var namespaces = new Map();
namespaces.set("xlink:href", xlinkNS);
namespaces.set("xlink:arcrole", xlinkNS);
namespaces.set("xlink:actuate", xlinkNS);
namespaces.set("xlink:show", xlinkNS);
namespaces.set("xlink:role", xlinkNS);
namespaces.set("xlink:title", xlinkNS);
namespaces.set("xlink:type", xlinkNS);
namespaces.set("xml:base", xmlNS);
namespaces.set("xml:lang", xmlNS);
namespaces.set("xml:space", xmlNS);
var isUnitlessNumber = new Set();
isUnitlessNumber.add("animationIterationCount");
isUnitlessNumber.add("borderImageOutset");
isUnitlessNumber.add("borderImageSlice");
isUnitlessNumber.add("borderImageWidth");
isUnitlessNumber.add("boxFlex");
isUnitlessNumber.add("boxFlexGroup");
isUnitlessNumber.add("boxOrdinalGroup");
isUnitlessNumber.add("columnCount");
isUnitlessNumber.add("flex");
isUnitlessNumber.add("flexGrow");
isUnitlessNumber.add("flexPositive");
isUnitlessNumber.add("flexShrink");
isUnitlessNumber.add("flexNegative");
isUnitlessNumber.add("flexOrder");
isUnitlessNumber.add("gridRow");
isUnitlessNumber.add("gridColumn");
isUnitlessNumber.add("fontWeight");
isUnitlessNumber.add("lineClamp");
isUnitlessNumber.add("lineHeight");
isUnitlessNumber.add("opacity");
isUnitlessNumber.add("order");
isUnitlessNumber.add("orphans");
isUnitlessNumber.add("tabSize");
isUnitlessNumber.add("widows");
isUnitlessNumber.add("zIndex");
isUnitlessNumber.add("zoom");
isUnitlessNumber.add("fillOpacity");
isUnitlessNumber.add("floodOpacity");
isUnitlessNumber.add("stopOpacity");
isUnitlessNumber.add("strokeDasharray");
isUnitlessNumber.add("strokeDashoffset");
isUnitlessNumber.add("strokeMiterlimit");
isUnitlessNumber.add("strokeOpacity");
isUnitlessNumber.add("strokeWidth");
var skipProps = new Set();
skipProps.add("children");
skipProps.add("childrenType");
skipProps.add("defaultValue");
skipProps.add("ref");
skipProps.add("key");
skipProps.add("checked");
skipProps.add("multiple");
var delegatedEvents = new Set();
delegatedEvents.add("onClick");
delegatedEvents.add("onMouseDown");
delegatedEvents.add("onMouseUp");
delegatedEvents.add("onMouseMove");
delegatedEvents.add("onSubmit");
delegatedEvents.add("onDblClick");
delegatedEvents.add("onKeyDown");
delegatedEvents.add("onKeyUp");
delegatedEvents.add("onKeyPress");

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var isiOS = isBrowser && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var delegatedEvents$1 = new Map();
function handleEvent(name, lastEvent, nextEvent, dom) {
    var delegatedRoots = delegatedEvents$1.get(name);
    if (nextEvent) {
        if (!delegatedRoots) {
            delegatedRoots = { items: new Map(), docEvent: null };
            delegatedRoots.docEvent = attachEventToDocument(name, delegatedRoots);
            delegatedEvents$1.set(name, delegatedRoots);
        }
        if (!lastEvent) {
            if (isiOS && name === "onClick") {
                trapClickOnNonInteractiveElement(dom);
            }
        }
        delegatedRoots.items.set(dom, nextEvent);
    } else if (delegatedRoots) {
        var items = delegatedRoots.items;
        if (items.delete(dom)) {
            // If any items were deleted, check if listener need to be removed
            if (items.size === 0) {
                document.removeEventListener(normalizeEventName(name), delegatedRoots.docEvent);
                delegatedEvents$1.delete(name);
            }
        }
    }
}
function dispatchEvent(event, target, items, count, isClick, eventData) {
    var eventsToTrigger = items.get(target);
    if (eventsToTrigger) {
        count--;
        // linkEvent object
        eventData.dom = target;
        if (eventsToTrigger.event) {
            eventsToTrigger.event(eventsToTrigger.data, event);
        } else {
            eventsToTrigger(event);
        }
        if (event.cancelBubble) {
            return;
        }
    }
    if (count > 0) {
        var parentDom = target.parentNode;
        // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
        // because the event listener is on document.body
        // Don't process clicks on disabled elements
        if (parentDom === null || isClick && parentDom.nodeType === 1 && parentDom.disabled) {
            return;
        }
        dispatchEvent(event, parentDom, items, count, isClick, eventData);
    }
}
function normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function stopPropagation() {
    this.cancelBubble = true;
    this.stopImmediatePropagation();
}
function attachEventToDocument(name, delegatedRoots) {
    var docEvent = function docEvent(event) {
        var count = delegatedRoots.items.size;
        if (count > 0) {
            event.stopPropagation = stopPropagation;
            // Event data needs to be object to save reference to currentTarget getter
            var eventData = {
                dom: document
            };
            try {
                Object.defineProperty(event, "currentTarget", {
                    configurable: true,
                    get: function get() {
                        return eventData.dom;
                    }
                });
            } catch (e) {
                /* safari7 and phantomJS will crash */
            }
            dispatchEvent(event, event.target, delegatedRoots.items, count, event.type === "click", eventData);
        }
    };
    document.addEventListener(normalizeEventName(name), docEvent);
    return docEvent;
}
// tslint:disable-next-line:no-empty
function emptyFn() {}
function trapClickOnNonInteractiveElement(dom) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
    // Just set it using the onclick property so that we don't have to manage any
    // bookkeeping for it. Not sure if we need to clear it when the listener is
    // removed.
    // TODO: Only do this for the relevant Safaris maybe?
    dom.onclick = emptyFn;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function isCheckedType(type) {
    return type === "checkbox" || type === "radio";
}
function onTextInputChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onInput) {
        var event = props.onInput;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue(newProps, dom);
    }
}
function wrappedOnChange(e) {
    var props = this.vNode.props || EMPTY_OBJ;
    var event = props.onChange;
    if (event.event) {
        event.event(event.data, e);
    } else {
        event(e);
    }
}
function onCheckboxChange(e) {
    e.stopPropagation(); // This click should not propagate its for internal use
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    if (props.onClick) {
        var event = props.onClick;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (props.onclick) {
        props.onclick(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    applyValue(newProps, dom);
}
function processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue(nextPropsOrEmpty, dom);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            if (isCheckedType(nextPropsOrEmpty.type)) {
                dom.onclick = onCheckboxChange;
                dom.onclick.wrapped = true;
            } else {
                dom.oninput = onTextInputChange;
                dom.oninput.wrapped = true;
            }
            if (nextPropsOrEmpty.onChange) {
                dom.onchange = wrappedOnChange;
                dom.onchange.wrapped = true;
            }
        }
    }
}
function applyValue(nextPropsOrEmpty, dom) {
    var type = nextPropsOrEmpty.type;
    var value = nextPropsOrEmpty.value;
    var checked = nextPropsOrEmpty.checked;
    var multiple = nextPropsOrEmpty.multiple;
    var defaultValue = nextPropsOrEmpty.defaultValue;
    var hasValue = !isNullOrUndef(value);
    if (type && type !== dom.type) {
        dom.setAttribute("type", type);
    }
    if (multiple && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!isNullOrUndef(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + "";
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

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function updateChildOptionGroup(vNode, value) {
    var type = vNode.type;
    if (type === "optgroup") {
        var children = vNode.children;
        if (isArray(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOption(children[i], value);
            }
        } else if (isVNode(children)) {
            updateChildOption(children, value);
        }
    } else {
        updateChildOption(vNode, value);
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if (isArray(value) && value.indexOf(props.value) !== -1 || props.value === value) {
        dom.selected = true;
    } else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {
        dom.selected = props.selected || false;
    }
}
function onSelectChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onChange) {
        var event = props.onChange;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (props.onchange) {
        props.onchange(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue$1(newVNode, dom, newProps, false);
    }
}
function processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue$1(vNode, dom, nextPropsOrEmpty, mounting);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            dom.onchange = onSelectChange;
            dom.onchange.wrapped = true;
        }
    }
}
function applyValue$1(vNode, dom, nextPropsOrEmpty, mounting) {
    if (nextPropsOrEmpty.multiple !== dom.multiple) {
        dom.multiple = nextPropsOrEmpty.multiple;
    }
    var children = vNode.children;
    if (!isInvalid(children)) {
        var value = nextPropsOrEmpty.value;
        if (mounting && isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        if (isArray(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOptionGroup(children[i], value);
            }
        } else if (isVNode(children)) {
            updateChildOptionGroup(children, value);
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function wrappedOnChange$1(e) {
    var props = this.vNode.props || EMPTY_OBJ;
    var event = props.onChange;
    if (event.event) {
        event.event(event.data, e);
    } else {
        event(e);
    }
}
function onTextareaInputChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var previousValue = props.value;
    if (props.onInput) {
        var event = props.onInput;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue$2(newVNode, vNode.dom, false);
    }
}
function processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue$2(nextPropsOrEmpty, dom, mounting);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            dom.oninput = onTextareaInputChange;
            dom.oninput.wrapped = true;
            if (nextPropsOrEmpty.onChange) {
                dom.onchange = wrappedOnChange$1;
                dom.onchange.wrapped = true;
            }
        }
    }
}
function applyValue$2(nextPropsOrEmpty, dom, mounting) {
    var value = nextPropsOrEmpty.value;
    var domValue = dom.value;
    if (isNullOrUndef(value)) {
        if (mounting) {
            var defaultValue = nextPropsOrEmpty.defaultValue;
            if (!isNullOrUndef(defaultValue)) {
                if (defaultValue !== domValue) {
                    dom.defaultValue = defaultValue;
                    dom.value = defaultValue;
                }
            } else if (domValue !== "") {
                dom.defaultValue = "";
                dom.value = "";
            }
        }
    } else {
        /* There is value so keep it controlled */
        if (domValue !== value) {
            dom.defaultValue = value;
            dom.value = value;
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
/**
 * There is currently no support for switching same input between controlled and nonControlled
 * If that ever becomes a real issue, then re design controlled elements
 * Currently user must choose either controlled or non-controlled and stick with that
 */
function processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    if (flags & 512 /* InputElement */) {
            processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
        }
    if (flags & 2048 /* SelectElement */) {
            processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
        }
    if (flags & 1024 /* TextareaElement */) {
            processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
        }
}
function isControlledFormElement(nextPropsOrEmpty) {
    return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type) ? !isNullOrUndef(nextPropsOrEmpty.checked) : !isNullOrUndef(nextPropsOrEmpty.value);
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function normalizeChildNodes(parentDom) {
    var dom = parentDom.firstChild;
    while (dom) {
        if (dom.nodeType === 8) {
            if (dom.data === "!") {
                var placeholder = document.createTextNode("");
                parentDom.replaceChild(placeholder, dom);
                dom = dom.nextSibling;
            } else {
                var lastDom = dom.previousSibling;
                parentDom.removeChild(dom);
                dom = lastDom || parentDom.firstChild;
            }
        } else {
            dom = dom.nextSibling;
        }
    }
}
function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
    var type = vNode.type;
    var ref = vNode.ref;
    var props = vNode.props || EMPTY_OBJ;
    if (isClass) {
        var _isSVG = dom.namespaceURI === svgNS;
        var instance = createClassComponentInstance(vNode, type, props, context, _isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vNode = vNode;
        hydrate(input, dom, lifecycle, instance._childContext, _isSVG);
        vNode.dom = input.dom;
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false; // Mount finished allow going sync
        if (options.findDOMNodeEnabled) {
            componentToDOMNodeMap.set(instance, dom);
        }
    } else {
        var input$1 = createFunctionalComponentInput(vNode, type, props, context);
        hydrate(input$1, dom, lifecycle, context, isSVG);
        vNode.children = input$1;
        vNode.dom = input$1.dom;
        mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
    }
    return dom;
}
function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var flags = vNode.flags;
    var ref = vNode.ref;
    isSVG = isSVG || (flags & 128 /* SvgElement */) > 0;
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.type) {
        if (process.env.NODE_ENV !== "production") {
            warning("Inferno hydration: Server-side markup doesn't match client-side markup or Initial render target is not empty");
        }
        var newDom = mountElement(vNode, null, lifecycle, context, isSVG);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    vNode.dom = dom;
    if (!isInvalid(children)) {
        hydrateChildren(children, dom, lifecycle, context, isSVG);
    } else if (dom.firstChild !== null) {
        dom.textContent = ""; // dom has content, but VNode has no children remove everything from DOM
    }
    if (props) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (!isNullOrUndef(className)) {
        if (isSVG) {
            dom.setAttribute("class", className);
        } else {
            dom.className = className;
        }
    } else {
        if (dom.className !== "") {
            dom.removeAttribute("class");
        }
    }
    if (ref) {
        mountRef(dom, ref, lifecycle);
    }
    return dom;
}
function hydrateChildren(children, parentDom, lifecycle, context, isSVG) {
    normalizeChildNodes(parentDom);
    var dom = parentDom.firstChild;
    if (isStringOrNumber(children)) {
        if (!isNull(dom) && dom.nodeType === 3) {
            if (dom.nodeValue !== children) {
                dom.nodeValue = children;
            }
        } else if (children === "") {
            parentDom.appendChild(document.createTextNode(""));
        } else {
            parentDom.textContent = children;
        }
        if (!isNull(dom)) {
            dom = dom.nextSibling;
        }
    } else if (isArray(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!isNull(child) && isObject(child)) {
                if (!isNull(dom)) {
                    var nextSibling = dom.nextSibling;
                    hydrate(child, dom, lifecycle, context, isSVG);
                    dom = nextSibling;
                } else {
                    mount(child, parentDom, lifecycle, context, isSVG);
                }
            }
        }
    } else {
        // It's VNode
        if (!isNull(dom)) {
            hydrate(children, dom, lifecycle, context, isSVG);
            dom = dom.nextSibling;
        } else {
            mount(children, parentDom, lifecycle, context, isSVG);
        }
    }
    // clear any other DOM nodes, there should be only a single entry for the root
    while (dom) {
        var nextSibling$1 = dom.nextSibling;
        parentDom.removeChild(dom);
        dom = nextSibling$1;
    }
}
function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = mountText(vNode, null);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    var text = vNode.children;
    if (dom.nodeValue !== text) {
        dom.nodeValue = text;
    }
    vNode.dom = dom;
    return dom;
}
function hydrateVoid(vNode, dom) {
    vNode.dom = dom;
    return dom;
}
function hydrate(vNode, dom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
            hydrateComponent(vNode, dom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
        } else if (flags & 3970 /* Element */) {
            hydrateElement(vNode, dom, lifecycle, context, isSVG);
        } else if (flags & 1 /* Text */) {
            hydrateText(vNode, dom);
        } else if (flags & 4096 /* Void */) {
            hydrateVoid(vNode, dom);
        } else {
        if (process.env.NODE_ENV !== "production") {
            throwError("hydrate() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) + "\".");
        }
        throwError();
    }
}
function hydrateRoot(input, parentDom, lifecycle) {
    if (!isNull(parentDom)) {
        var dom = parentDom.firstChild;
        if (!isNull(dom)) {
            hydrate(input, dom, lifecycle, EMPTY_OBJ, false);
            dom = parentDom.firstChild;
            // clear any other DOM nodes, there should be only a single entry for the root
            while (dom = dom.nextSibling) {
                parentDom.removeChild(dom);
            }
            return true;
        }
    }
    return false;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var componentPools = new Map();
var elementPools = new Map();
function recycleElement(vNode, lifecycle, context, isSVG) {
    var tag = vNode.type;
    var pools = elementPools.get(tag);
    if (!isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!isUndefined(recycledVNode)) {
                patchElement(recycledVNode, vNode, null, lifecycle, context, isSVG, true);
                return vNode.dom;
            }
        }
    }
    return null;
}
function poolElement(vNode) {
    var tag = vNode.type;
    var key = vNode.key;
    var pools = elementPools.get(tag);
    if (isUndefined(pools)) {
        pools = {
            keyed: new Map(),
            nonKeyed: []
        };
        elementPools.set(tag, pools);
    }
    if (isNull(key)) {
        pools.nonKeyed.push(vNode);
    } else {
        var pool = pools.keyed.get(key);
        if (isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}
function recycleComponent(vNode, lifecycle, context, isSVG) {
    var type = vNode.type;
    var pools = componentPools.get(type);
    if (!isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!isUndefined(recycledVNode)) {
                var flags = vNode.flags;
                var failed = patchComponent(recycledVNode, vNode, null, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0, true);
                if (!failed) {
                    return vNode.dom;
                }
            }
        }
    }
    return null;
}
function poolComponent(vNode) {
    var hooks = vNode.ref;
    var nonRecycleHooks = hooks && (hooks.onComponentWillMount || hooks.onComponentWillUnmount || hooks.onComponentDidMount || hooks.onComponentWillUpdate || hooks.onComponentDidUpdate);
    if (nonRecycleHooks) {
        return;
    }
    var type = vNode.type;
    var key = vNode.key;
    var pools = componentPools.get(type);
    if (isUndefined(pools)) {
        pools = {
            keyed: new Map(),
            nonKeyed: []
        };
        componentPools.set(type, pools);
    }
    if (isNull(key)) {
        pools.nonKeyed.push(vNode);
    } else {
        var pool = pools.keyed.get(key);
        if (isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function unmount(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
            unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling);
        } else if (flags & 3970 /* Element */) {
            unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling);
        } else if (flags & (1 /* Text */ | 4096 /* Void */)) {
        unmountVoidOrText(vNode, parentDom);
    }
}
function unmountVoidOrText(vNode, parentDom) {
    if (!isNull(parentDom)) {
        removeChild(parentDom, vNode.dom);
    }
}
function unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var instance = vNode.children;
    var flags = vNode.flags;
    var isStatefulComponent$$1 = flags & 4;
    var props = vNode.props || EMPTY_OBJ;
    var ref = vNode.ref;
    var dom = vNode.dom;
    if (!isRecycling) {
        if (isStatefulComponent$$1) {
            if (!instance._unmounted) {
                if (!isNull(options.beforeUnmount)) {
                    options.beforeUnmount(vNode);
                }
                if (!isUndefined(instance.componentWillUnmount)) {
                    instance.componentWillUnmount();
                }
                if (ref && !isRecycling) {
                    ref(null);
                }
                instance._unmounted = true;
                if (options.findDOMNodeEnabled) {
                    componentToDOMNodeMap.delete(instance);
                }
                unmount(instance._lastInput, null, instance._lifecycle, false, isRecycling);
            }
        } else {
            if (!isNullOrUndef(ref)) {
                if (!isNullOrUndef(ref.onComponentWillUnmount)) {
                    ref.onComponentWillUnmount(dom, props);
                }
            }
            unmount(instance, null, lifecycle, false, isRecycling);
        }
    }
    if (parentDom) {
        var lastInput = instance._lastInput;
        if (isNullOrUndef(lastInput)) {
            lastInput = instance;
        }
        removeChild(parentDom, dom);
    }
    if (options.recyclingEnabled && !isStatefulComponent$$1 && (parentDom || canRecycle)) {
        poolComponent(vNode);
    }
}
function unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var dom = vNode.dom;
    var ref = vNode.ref;
    var props = vNode.props;
    if (ref && !isRecycling) {
        unmountRef(ref);
    }
    var children = vNode.children;
    if (!isNullOrUndef(children)) {
        unmountChildren$1(children, lifecycle, isRecycling);
    }
    if (!isNull(props)) {
        for (var name in props) {
            // do not add a hasOwnProperty check here, it affects performance
            if (props[name] !== null && isAttrAnEvent(name)) {
                patchEvent(name, props[name], null, dom);
                // We need to set this null, because same props otherwise come back if SCU returns false and we are recyling
                props[name] = null;
            }
        }
    }
    if (!isNull(parentDom)) {
        removeChild(parentDom, dom);
    }
    if (options.recyclingEnabled && (parentDom || canRecycle)) {
        poolElement(vNode);
    }
}
function unmountChildren$1(children, lifecycle, isRecycling) {
    if (isArray(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!isInvalid(child) && isObject(child)) {
                unmount(child, null, lifecycle, false, isRecycling);
            }
        }
    } else if (isObject(children)) {
        unmount(children, null, lifecycle, false, isRecycling);
    }
}
function unmountRef(ref) {
    if (isFunction(ref)) {
        ref(null);
    } else {
        if (isInvalid(ref)) {
            return;
        }
        if (process.env.NODE_ENV !== "production") {
            throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        throwError();
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
// rather than use a Map, like we did before, we can use an array here
// given there shouldn't be THAT many roots on the page, the difference
// in performance is huge: https://esbench.com/bench/5802a691330ab09900a1a2da
var componentToDOMNodeMap = new Map();
var roots = options.roots;
/**
 * When inferno.options.findDOMNOdeEnabled is true, this function will return DOM Node by component instance
 * @param ref Component instance
 * @returns {*|null} returns dom node
 */
function findDOMNode(ref) {
    if (!options.findDOMNodeEnabled) {
        if (process.env.NODE_ENV !== "production") {
            throwError("findDOMNode() has been disabled, use Inferno.options.findDOMNodeEnabled = true; enabled findDOMNode(). Warning this can significantly impact performance!");
        }
        throwError();
    }
    var dom = ref && ref.nodeType ? ref : null;
    return componentToDOMNodeMap.get(ref) || dom;
}
function getRoot(dom) {
    for (var i = 0, len = roots.length; i < len; i++) {
        var root = roots[i];
        if (root.dom === dom) {
            return root;
        }
    }
    return null;
}
function setRoot(dom, input, lifecycle) {
    var root = {
        dom: dom,
        input: input,
        lifecycle: lifecycle
    };
    roots.push(root);
    return root;
}
function removeRoot(root) {
    for (var i = 0, len = roots.length; i < len; i++) {
        if (roots[i] === root) {
            roots.splice(i, 1);
            return;
        }
    }
}
if (process.env.NODE_ENV !== "production") {
    if (isBrowser && document.body === null) {
        warning('Inferno warning: you cannot initialize inferno without "document.body". Wait on "DOMContentLoaded" event, add script to bottom of body, or use async/defer attributes on script tag.');
    }
}
var documentBody = isBrowser ? document.body : null;
/**
 * Renders virtual node tree into parent node.
 * @param {VNode | null | string | number} input vNode to be rendered
 * @param parentDom DOM node which content will be replaced by virtual node
 * @returns {InfernoChildren} rendered virtual node
 */
function render(input, parentDom) {
    if (documentBody === parentDom) {
        if (process.env.NODE_ENV !== "production") {
            throwError('you cannot render() to the "document.body". Use an empty element as a container instead.');
        }
        throwError();
    }
    if (input === NO_OP) {
        return;
    }
    var root = getRoot(parentDom);
    if (isNull(root)) {
        var lifecycle = new Lifecycle();
        if (!isInvalid(input)) {
            if (input.dom) {
                input = directClone(input);
            }
            if (!hydrateRoot(input, parentDom, lifecycle)) {
                mount(input, parentDom, lifecycle, EMPTY_OBJ, false);
            }
            root = setRoot(parentDom, input, lifecycle);
            lifecycle.trigger();
        }
    } else {
        var lifecycle$1 = root.lifecycle;
        lifecycle$1.listeners = [];
        if (isNullOrUndef(input)) {
            unmount(root.input, parentDom, lifecycle$1, false, false);
            removeRoot(root);
        } else {
            if (input.dom) {
                input = directClone(input);
            }
            patch(root.input, input, parentDom, lifecycle$1, EMPTY_OBJ, false, false);
        }
        root.input = input;
        lifecycle$1.trigger();
    }
    if (root) {
        var rootInput = root.input;
        if (rootInput && rootInput.flags & 28 /* Component */) {
                return rootInput.children;
            }
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

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    if (lastVNode !== nextVNode) {
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        if (nextFlags & 28 /* Component */) {
                var isClass = (nextFlags & 4 /* ComponentClass */) > 0;
                if (lastFlags & 28 /* Component */) {
                        patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling);
                    } else {
                    replaceVNode(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, isClass), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 3970 /* Element */) {
                if (lastFlags & 3970 /* Element */) {
                        patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
                    } else {
                    replaceVNode(parentDom, mountElement(nextVNode, null, lifecycle, context, isSVG), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 1 /* Text */) {
                if (lastFlags & 1 /* Text */) {
                        patchText(lastVNode, nextVNode);
                    } else {
                    replaceVNode(parentDom, mountText(nextVNode, null), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 4096 /* Void */) {
                if (lastFlags & 4096 /* Void */) {
                        patchVoid(lastVNode, nextVNode);
                    } else {
                    replaceVNode(parentDom, mountVoid(nextVNode, null), lastVNode, lifecycle, isRecycling);
                }
            } else {
            // Error case: mount new one replacing old one
            replaceLastChildAndUnmount(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function unmountChildren(children, dom, lifecycle, isRecycling) {
    if (isVNode(children)) {
        unmount(children, dom, lifecycle, true, isRecycling);
    } else if (isArray(children)) {
        removeAllChildren(dom, children, lifecycle, isRecycling);
    } else {
        dom.textContent = "";
    }
}
function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    var nextTag = nextVNode.type;
    var lastTag = lastVNode.type;
    if (lastTag !== nextTag) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
    } else {
        var dom = lastVNode.dom;
        var lastProps = lastVNode.props;
        var nextProps = nextVNode.props;
        var lastChildren = lastVNode.children;
        var nextChildren = nextVNode.children;
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        var nextRef = nextVNode.ref;
        var lastClassName = lastVNode.className;
        var nextClassName = nextVNode.className;
        nextVNode.dom = dom;
        isSVG = isSVG || (nextFlags & 128 /* SvgElement */) > 0;
        if (lastChildren !== nextChildren) {
            var childrenIsSVG = isSVG === true && nextVNode.type !== "foreignObject";
            patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, childrenIsSVG, isRecycling);
        }
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
            var nextPropsOrEmpty = nextProps || EMPTY_OBJ;
            var hasControlledValue = false;
            if (nextPropsOrEmpty !== EMPTY_OBJ) {
                var isFormElement = (nextFlags & 3584 /* FormElement */) > 0;
                if (isFormElement) {
                    hasControlledValue = isControlledFormElement(nextPropsOrEmpty);
                }
                for (var prop in nextPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    var nextValue = nextPropsOrEmpty[prop];
                    var lastValue = lastPropsOrEmpty[prop];
                    patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue);
                }
                if (isFormElement) {
                    // When inferno is recycling form element, we need to process it like it would be mounting
                    processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, isRecycling, hasControlledValue);
                }
            }
            if (lastPropsOrEmpty !== EMPTY_OBJ) {
                for (var prop$1 in lastPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    if (isNullOrUndef(nextPropsOrEmpty[prop$1]) && !isNullOrUndef(lastPropsOrEmpty[prop$1])) {
                        removeProp(prop$1, lastPropsOrEmpty[prop$1], dom, nextFlags);
                    }
                }
            }
        }
        // inlined patchProps  -- ends --
        if (lastClassName !== nextClassName) {
            if (isNullOrUndef(nextClassName)) {
                dom.removeAttribute("class");
            } else {
                if (isSVG) {
                    dom.setAttribute("class", nextClassName);
                } else {
                    dom.className = nextClassName;
                }
            }
        }
        if (nextRef) {
            if (lastVNode.ref !== nextRef || isRecycling) {
                mountRef(dom, nextRef, lifecycle);
            }
        }
    }
}
function patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var patchArray = false;
    var patchKeyed = false;
    if (nextFlags & 64 /* HasNonKeyedChildren */) {
            patchArray = true;
        } else if ((lastFlags & 32 /* HasKeyedChildren */) > 0 && (nextFlags & 32 /* HasKeyedChildren */) > 0) {
        patchKeyed = true;
        patchArray = true;
    } else if (isInvalid(nextChildren)) {
        unmountChildren(lastChildren, dom, lifecycle, isRecycling);
    } else if (isInvalid(lastChildren)) {
        if (isStringOrNumber(nextChildren)) {
            setTextContent(dom, nextChildren);
        } else {
            if (isArray(nextChildren)) {
                mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
            } else {
                mount(nextChildren, dom, lifecycle, context, isSVG);
            }
        }
    } else if (isStringOrNumber(nextChildren)) {
        if (isStringOrNumber(lastChildren)) {
            updateTextContent(dom, nextChildren);
        } else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            setTextContent(dom, nextChildren);
        }
    } else if (isArray(nextChildren)) {
        if (isArray(lastChildren)) {
            patchArray = true;
            if (isKeyed(lastChildren, nextChildren)) {
                patchKeyed = true;
            }
        } else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
        }
    } else if (isArray(lastChildren)) {
        removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
        mount(nextChildren, dom, lifecycle, context, isSVG);
    } else if (isVNode(nextChildren)) {
        if (isVNode(lastChildren)) {
            patch(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        } else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mount(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    if (patchArray) {
        if (patchKeyed) {
            patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        } else {
            patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling) {
    var lastType = lastVNode.type;
    var nextType = nextVNode.type;
    var lastKey = lastVNode.key;
    var nextKey = nextVNode.key;
    if (lastType !== nextType || lastKey !== nextKey) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        return false;
    } else {
        var nextProps = nextVNode.props || EMPTY_OBJ;
        if (isClass) {
            var instance = lastVNode.children;
            instance._updating = true;
            if (instance._unmounted) {
                if (isNull(parentDom)) {
                    return true;
                }
                replaceChild(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, (nextVNode.flags & 4 /* ComponentClass */) > 0), lastVNode.dom);
            } else {
                var hasComponentDidUpdate = !isUndefined(instance.componentDidUpdate);
                var nextState = instance.state;
                // When component has componentDidUpdate hook, we need to clone lastState or will be modified by reference during update
                var lastState = hasComponentDidUpdate ? combineFrom(nextState, null) : nextState;
                var lastProps = instance.props;
                var childContext;
                if (!isNullOrUndef(instance.getChildContext)) {
                    childContext = instance.getChildContext();
                }
                nextVNode.children = instance;
                instance._isSVG = isSVG;
                if (isNullOrUndef(childContext)) {
                    childContext = context;
                } else {
                    childContext = combineFrom(context, childContext);
                }
                var lastInput = instance._lastInput;
                var nextInput = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false, false);
                var didUpdate = true;
                instance._childContext = childContext;
                if (isInvalid(nextInput)) {
                    nextInput = createVoidVNode();
                } else if (nextInput === NO_OP) {
                    nextInput = lastInput;
                    didUpdate = false;
                } else if (isStringOrNumber(nextInput)) {
                    nextInput = createTextVNode(nextInput, null);
                } else if (isArray(nextInput)) {
                    if (process.env.NODE_ENV !== "production") {
                        throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
                    }
                    throwError();
                } else if (isObject(nextInput)) {
                    if (!isNull(nextInput.dom)) {
                        nextInput = directClone(nextInput);
                    }
                }
                if (nextInput.flags & 28 /* Component */) {
                        nextInput.parentVNode = nextVNode;
                    } else if (lastInput.flags & 28 /* Component */) {
                        lastInput.parentVNode = nextVNode;
                    }
                instance._lastInput = nextInput;
                instance._vNode = nextVNode;
                if (didUpdate) {
                    patch(lastInput, nextInput, parentDom, lifecycle, childContext, isSVG, isRecycling);
                    if (hasComponentDidUpdate && instance.componentDidUpdate) {
                        instance.componentDidUpdate(lastProps, lastState);
                    }
                    if (!isNull(options.afterUpdate)) {
                        options.afterUpdate(nextVNode);
                    }
                    if (options.findDOMNodeEnabled) {
                        componentToDOMNodeMap.set(instance, nextInput.dom);
                    }
                }
                nextVNode.dom = nextInput.dom;
            }
            instance._updating = false;
        } else {
            var shouldUpdate = true;
            var lastProps$1 = lastVNode.props;
            var nextHooks = nextVNode.ref;
            var nextHooksDefined = !isNullOrUndef(nextHooks);
            var lastInput$1 = lastVNode.children;
            var nextInput$1 = lastInput$1;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = lastInput$1;
            if (lastKey !== nextKey) {
                shouldUpdate = true;
            } else {
                if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentShouldUpdate)) {
                    shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps$1, nextProps);
                }
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(lastProps$1, nextProps);
                }
                nextInput$1 = nextType(nextProps, context);
                if (isInvalid(nextInput$1)) {
                    nextInput$1 = createVoidVNode();
                } else if (isStringOrNumber(nextInput$1) && nextInput$1 !== NO_OP) {
                    nextInput$1 = createTextVNode(nextInput$1, null);
                } else if (isArray(nextInput$1)) {
                    if (process.env.NODE_ENV !== "production") {
                        throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
                    }
                    throwError();
                } else if (isObject(nextInput$1)) {
                    if (!isNull(nextInput$1.dom)) {
                        nextInput$1 = directClone(nextInput$1);
                    }
                }
                if (nextInput$1 !== NO_OP) {
                    patch(lastInput$1, nextInput$1, parentDom, lifecycle, context, isSVG, isRecycling);
                    nextVNode.children = nextInput$1;
                    if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(lastProps$1, nextProps);
                    }
                    nextVNode.dom = nextInput$1.dom;
                }
            }
            if (nextInput$1.flags & 28 /* Component */) {
                    nextInput$1.parentVNode = nextVNode;
                } else if (lastInput$1.flags & 28 /* Component */) {
                    lastInput$1.parentVNode = nextVNode;
                }
        }
    }
    return false;
}
function patchText(lastVNode, nextVNode) {
    var nextText = nextVNode.children;
    var dom = lastVNode.dom;
    nextVNode.dom = dom;
    if (lastVNode.children !== nextText) {
        dom.nodeValue = nextText;
    }
}
function patchVoid(lastVNode, nextVNode) {
    nextVNode.dom = lastVNode.dom;
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var lastChildrenLength = lastChildren.length;
    var nextChildrenLength = nextChildren.length;
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    for (; i < commonLength; i++) {
        var nextChild = nextChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = directClone(nextChild);
        }
        patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG, isRecycling);
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            var nextChild$1 = nextChildren[i];
            if (nextChild$1.dom) {
                nextChild$1 = nextChildren[i] = directClone(nextChild$1);
            }
            appendChild(dom, mount(nextChild$1, null, lifecycle, context, isSVG));
        }
    } else if (nextChildrenLength === 0) {
        removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
    } else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            unmount(lastChildren[i], dom, lifecycle, false, isRecycling);
        }
    }
}
function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, isRecycling) {
    var aLength = a.length;
    var bLength = b.length;
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
    if (aLength === 0) {
        if (bLength > 0) {
            mountArrayChildren(b, dom, lifecycle, context, isSVG);
        }
        return;
    } else if (bLength === 0) {
        removeAllChildren(dom, a, lifecycle, isRecycling);
        return;
    }
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
    /* eslint no-constant-condition: 0 */
    outer: while (true) {
        // Sync nodes with the same key at the beginning.
        while (aStartNode.key === bStartNode.key) {
            patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
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
            patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
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
        // Move and sync nodes from right to left.
        if (aEndNode.key === bStartNode.key) {
            patch(aEndNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            insertOrAppend(dom, bStartNode.dom, aStartNode.dom);
            aEnd--;
            bStart++;
            aEndNode = a[aEnd];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = directClone(bStartNode);
            }
            continue;
        }
        // Move and sync nodes from left to right.
        if (aStartNode.key === bEndNode.key) {
            patch(aStartNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            insertOrAppend(dom, bEndNode.dom, nextNode);
            aStart++;
            bEnd--;
            aStartNode = a[aStart];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = directClone(bEndNode);
            }
            continue;
        }
        break;
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = directClone(node);
                }
                bStart++;
                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
            }
        }
    } else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            unmount(a[aStart++], dom, lifecycle, false, isRecycling);
        }
    } else {
        aLength = aEnd - aStart + 1;
        bLength = bEnd - bStart + 1;
        var sources = new Array(bLength);
        // Mark all nodes as inserted.
        for (i = 0; i < bLength; i++) {
            sources[i] = -1;
        }
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if (bLength <= 4 || aLength * bLength <= 16) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            } else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = directClone(bNode);
                            }
                            patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                            patched++;
                            a[i] = null;
                            break;
                        }
                    }
                }
            }
        } else {
            var keyIndex = new Map();
            // Map keys by their index in array
            for (i = bStart; i <= bEnd; i++) {
                keyIndex.set(b[i].key, i);
            }
            // Try to patch same keys
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    j = keyIndex.get(aNode.key);
                    if (!isUndefined(j)) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        } else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = directClone(bNode);
                        }
                        patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                        patched++;
                        a[i] = null;
                    }
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (aLength === a.length && patched === 0) {
            removeAllChildren(dom, a, lifecycle, isRecycling);
            while (bStart < bLength) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = directClone(node);
                }
                bStart++;
                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), null);
            }
        } else {
            i = aLength - patched;
            while (i > 0) {
                aNode = a[aStart++];
                if (!isNull(aNode)) {
                    unmount(aNode, dom, lifecycle, true, isRecycling);
                    i--;
                }
            }
            if (moved) {
                var seq = lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = directClone(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
                    } else {
                        if (j < 0 || i !== seq[j]) {
                            pos = i + bStart;
                            node = b[pos];
                            nextPos = pos + 1;
                            nextNode = nextPos < b.length ? b[nextPos].dom : null;
                            insertOrAppend(dom, node.dom, nextNode);
                        } else {
                            j--;
                        }
                    }
                }
            } else if (patched !== bLength) {
                // when patched count doesn't match b length we need to insert those new ones
                // loop backwards so we can use insertBefore
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = directClone(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
                    }
                }
            }
        }
    }
}
// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var p = arr.slice(0);
    var result = [0];
    var i;
    var j;
    var u;
    var v;
    var c;
    var len = arr.length;
    for (i = 0; i < len; i++) {
        var arrI = arr[i];
        if (arrI === -1) {
            continue;
        }
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
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}
function isAttrAnEvent(attr) {
    return attr[0] === "o" && attr[1] === "n";
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue) {
    if (lastValue !== nextValue) {
        if (skipProps.has(prop) || hasControlledValue && prop === "value") {
            return;
        } else if (booleanProps.has(prop)) {
            prop = prop === "autoFocus" ? prop.toLowerCase() : prop;
            dom[prop] = !!nextValue;
        } else if (strictProps.has(prop)) {
            var value = isNullOrUndef(nextValue) ? "" : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
        } else if (isAttrAnEvent(prop)) {
            patchEvent(prop, lastValue, nextValue, dom);
        } else if (isNullOrUndef(nextValue)) {
            dom.removeAttribute(prop);
        } else if (prop === "style") {
            patchStyle(lastValue, nextValue, dom);
        } else if (prop === "dangerouslySetInnerHTML") {
            var lastHtml = lastValue && lastValue.__html;
            var nextHtml = nextValue && nextValue.__html;
            if (lastHtml !== nextHtml) {
                if (!isNullOrUndef(nextHtml)) {
                    dom.innerHTML = nextHtml;
                }
            }
        } else {
            // We optimize for NS being boolean. Its 99.9% time false
            if (isSVG && namespaces.has(prop)) {
                // If we end up in this path we can read property again
                dom.setAttributeNS(namespaces.get(prop), prop, nextValue);
            } else {
                dom.setAttribute(prop, nextValue);
            }
        }
    }
}
function patchEvent(name, lastValue, nextValue, dom) {
    if (lastValue !== nextValue) {
        if (delegatedEvents.has(name)) {
            handleEvent(name, lastValue, nextValue, dom);
        } else {
            var nameLowerCase = name.toLowerCase();
            var domEvent = dom[nameLowerCase];
            // if the function is wrapped, that means it's been controlled by a wrapper
            if (domEvent && domEvent.wrapped) {
                return;
            }
            if (!isFunction(nextValue) && !isNullOrUndef(nextValue)) {
                var linkEvent = nextValue.event;
                if (linkEvent && isFunction(linkEvent)) {
                    dom[nameLowerCase] = function (e) {
                        linkEvent(nextValue.data, e);
                    };
                } else {
                    if (process.env.NODE_ENV !== "production") {
                        throwError("an event on a VNode \"" + name + "\". was not a function or a valid linkEvent.");
                    }
                    throwError();
                }
            } else {
                dom[nameLowerCase] = nextValue;
            }
        }
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
                domStyle[style] = !isNumber(value) || isUnitlessNumber.has(style) ? value : value + "px";
            }
        }
        for (style in lastAttrValue) {
            if (isNullOrUndef(nextAttrValue[style])) {
                domStyle[style] = "";
            }
        }
    } else {
        for (style in nextAttrValue) {
            value = nextAttrValue[style];
            domStyle[style] = !isNumber(value) || isUnitlessNumber.has(style) ? value : value + "px";
        }
    }
}
function removeProp(prop, lastValue, dom, nextFlags) {
    if (prop === "value") {
        // When removing value of select element, it needs to be set to null instead empty string, because empty string is valid value for option which makes that option selected
        // MS IE/Edge don't follow html spec for textArea and input elements and we need to set empty string to value in those cases to avoid "null" and "undefined" texts
        dom.value = nextFlags & 2048 /* SelectElement */ ? null : "";
    } else if (prop === "style") {
        dom.removeAttribute("style");
    } else if (isAttrAnEvent(prop)) {
        handleEvent(prop, lastValue, null, dom);
    } else {
        dom.removeAttribute(prop);
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function mount(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 3970 /* Element */) {
            return mountElement(vNode, parentDom, lifecycle, context, isSVG);
        } else if (flags & 28 /* Component */) {
            return mountComponent(vNode, parentDom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
        } else if (flags & 4096 /* Void */) {
            return mountVoid(vNode, parentDom);
        } else if (flags & 1 /* Text */) {
            return mountText(vNode, parentDom);
        } else {
        if (process.env.NODE_ENV !== "production") {
            if ((typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) === "object") {
                throwError("mount() received an object that's not a valid VNode, you should stringify it first. Object: \"" + JSON.stringify(vNode) + "\".");
            } else {
                throwError("mount() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) + "\".");
            }
        }
        throwError();
    }
}
function mountText(vNode, parentDom) {
    var dom = document.createTextNode(vNode.children);
    vNode.dom = dom;
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountVoid(vNode, parentDom) {
    var dom = document.createTextNode("");
    vNode.dom = dom;
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
    var dom;
    if (options.recyclingEnabled) {
        dom = recycleElement(vNode, lifecycle, context, isSVG);
        if (!isNull(dom)) {
            if (!isNull(parentDom)) {
                appendChild(parentDom, dom);
            }
            return dom;
        }
    }
    var flags = vNode.flags;
    isSVG = isSVG || (flags & 128 /* SvgElement */) > 0;
    dom = documentCreateElement(vNode.type, isSVG);
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var ref = vNode.ref;
    vNode.dom = dom;
    if (!isInvalid(children)) {
        if (isStringOrNumber(children)) {
            setTextContent(dom, children);
        } else {
            var childrenIsSVG = isSVG === true && vNode.type !== "foreignObject";
            if (isArray(children)) {
                mountArrayChildren(children, dom, lifecycle, context, childrenIsSVG);
            } else if (isVNode(children)) {
                mount(children, dom, lifecycle, context, childrenIsSVG);
            }
        }
    }
    if (!isNull(props)) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (className !== null) {
        if (isSVG) {
            dom.setAttribute("class", className);
        } else {
            dom.className = className;
        }
    }
    if (!isNull(ref)) {
        mountRef(dom, ref, lifecycle);
    }
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        // Verify can string/number be here. might cause de-opt. - Normalization takes care of it.
        if (!isInvalid(child)) {
            if (child.dom) {
                children[i] = child = directClone(child);
            }
            mount(children[i], dom, lifecycle, context, isSVG);
        }
    }
}
function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
    var dom;
    if (options.recyclingEnabled) {
        dom = recycleComponent(vNode, lifecycle, context, isSVG);
        if (!isNull(dom)) {
            if (!isNull(parentDom)) {
                appendChild(parentDom, dom);
            }
            return dom;
        }
    }
    var type = vNode.type;
    var props = vNode.props || EMPTY_OBJ;
    var ref = vNode.ref;
    if (isClass) {
        var instance = createClassComponentInstance(vNode, type, props, context, isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vNode = vNode;
        vNode.dom = dom = mount(input, null, lifecycle, instance._childContext, isSVG);
        if (!isNull(parentDom)) {
            appendChild(parentDom, dom);
        }
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false;
        if (options.findDOMNodeEnabled) {
            componentToDOMNodeMap.set(instance, dom);
        }
    } else {
        var input$1 = createFunctionalComponentInput(vNode, type, props, context);
        vNode.dom = dom = mount(input$1, null, lifecycle, context, isSVG);
        vNode.children = input$1;
        mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
        if (!isNull(parentDom)) {
            appendChild(parentDom, dom);
        }
    }
    return dom;
}
function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
    if (ref) {
        if (isFunction(ref)) {
            ref(instance);
        } else {
            if (process.env.NODE_ENV !== "production") {
                if (isStringOrNumber(ref)) {
                    throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
                } else if (isObject(ref) && vNode.flags & 4 /* ComponentClass */) {
                        throwError("functional component lifecycle events are not supported on ES2015 class components.");
                    } else {
                    throwError("a bad value for \"ref\" was used on component: \"" + JSON.stringify(ref) + "\"");
                }
            }
            throwError();
        }
    }
    var hasDidMount = !isUndefined(instance.componentDidMount);
    var afterMount = options.afterMount;
    if (hasDidMount || !isNull(afterMount)) {
        lifecycle.addListener(function () {
            instance._updating = true;
            if (afterMount) {
                afterMount(vNode);
            }
            if (hasDidMount) {
                instance.componentDidMount();
            }
            instance._updating = false;
        });
    }
}
function mountFunctionalComponentCallbacks(props, ref, dom, lifecycle) {
    if (ref) {
        if (!isNullOrUndef(ref.onComponentWillMount)) {
            ref.onComponentWillMount(props);
        }
        if (!isNullOrUndef(ref.onComponentDidMount)) {
            lifecycle.addListener(function () {
                return ref.onComponentDidMount(dom, props);
            });
        }
    }
}
function mountRef(dom, value, lifecycle) {
    if (isFunction(value)) {
        lifecycle.addListener(function () {
            return value(dom);
        });
    } else {
        if (isInvalid(value)) {
            return;
        }
        if (process.env.NODE_ENV !== "production") {
            throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        throwError();
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
var EMPTY_OBJ = {};
if (process.env.NODE_ENV !== "production") {
    Object.freeze(EMPTY_OBJ);
}
function createClassComponentInstance(vNode, Component, props, context, isSVG, lifecycle) {
    if (isUndefined(context)) {
        context = EMPTY_OBJ; // Context should not be mutable
    }
    var instance = new Component(props, context);
    vNode.children = instance;
    instance._blockSetState = false;
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    // setState callbacks must fire after render is done when called from componentWillReceiveProps or componentWillMount
    instance._lifecycle = lifecycle;
    instance._unmounted = false;
    instance._pendingSetState = true;
    instance._isSVG = isSVG;
    if (!isNullOrUndef(instance.componentWillMount)) {
        instance._blockRender = true;
        instance.componentWillMount();
        instance._blockRender = false;
    }
    var childContext;
    if (!isNullOrUndef(instance.getChildContext)) {
        childContext = instance.getChildContext();
    }
    if (isNullOrUndef(childContext)) {
        instance._childContext = context;
    } else {
        instance._childContext = combineFrom(context, childContext);
    }
    if (!isNull(options.beforeRender)) {
        options.beforeRender(instance);
    }
    var input = instance.render(props, instance.state, context);
    if (!isNull(options.afterRender)) {
        options.afterRender(instance);
    }
    if (isArray(input)) {
        if (process.env.NODE_ENV !== "production") {
            throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
        }
        throwError();
    } else if (isInvalid(input)) {
        input = createVoidVNode();
    } else if (isStringOrNumber(input)) {
        input = createTextVNode(input, null);
    } else {
        if (input.dom) {
            input = directClone(input);
        }
        if (input.flags & 28 /* Component */) {
                // if we have an input that is also a component, we run into a tricky situation
                // where the root vNode needs to always have the correct DOM entry
                // so we break monomorphism on our input and supply it our vNode as parentVNode
                // we can optimise this in the future, but this gets us out of a lot of issues
                input.parentVNode = vNode;
            }
    }
    instance._pendingSetState = false;
    instance._lastInput = input;
    return instance;
}
function replaceLastChildAndUnmount(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling) {
    replaceVNode(parentDom, mount(nextInput, null, lifecycle, context, isSVG), lastInput, lifecycle, isRecycling);
}
function replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
    unmount(vNode, null, lifecycle, false, isRecycling);
    replaceChild(parentDom, dom, vNode.dom);
}
function createFunctionalComponentInput(vNode, component, props, context) {
    var input = component(props, context);
    if (isArray(input)) {
        if (process.env.NODE_ENV !== "production") {
            throwError("a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.");
        }
        throwError();
    } else if (isInvalid(input)) {
        input = createVoidVNode();
    } else if (isStringOrNumber(input)) {
        input = createTextVNode(input, null);
    } else {
        if (input.dom) {
            input = directClone(input);
        }
        if (input.flags & 28 /* Component */) {
                // if we have an input that is also a component, we run into a tricky situation
                // where the root vNode needs to always have the correct DOM entry
                // so we break monomorphism on our input and supply it our vNode as parentVNode
                // we can optimise this in the future, but this gets us out of a lot of issues
                input.parentVNode = vNode;
            }
    }
    return input;
}
function setTextContent(dom, text) {
    if (text !== "") {
        dom.textContent = text;
    } else {
        dom.appendChild(document.createTextNode(""));
    }
}
function updateTextContent(dom, text) {
    dom.firstChild.nodeValue = text;
}
function appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
function insertOrAppend(parentDom, newNode, nextNode) {
    if (isNullOrUndef(nextNode)) {
        appendChild(parentDom, newNode);
    } else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(svgNS, tag);
    } else {
        return document.createElement(tag);
    }
}
function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    unmount(lastNode, null, lifecycle, false, isRecycling);
    var dom = mount(nextNode, null, lifecycle, context, isSVG);
    nextNode.dom = dom;
    replaceChild(parentDom, dom, lastNode.dom);
}
function replaceChild(parentDom, nextDom, lastDom) {
    if (!parentDom) {
        parentDom = lastDom.parentNode;
    }
    parentDom.replaceChild(nextDom, lastDom);
}
function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
function removeAllChildren(dom, children, lifecycle, isRecycling) {
    if (!options.recyclingEnabled || options.recyclingEnabled && !isRecycling) {
        removeChildren(null, children, lifecycle, isRecycling);
    }
    dom.textContent = "";
}
function removeChildren(dom, children, lifecycle, isRecycling) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        if (!isInvalid(child)) {
            unmount(child, dom, lifecycle, true, isRecycling);
        }
    }
}
function isKeyed(lastChildren, nextChildren) {
    return nextChildren.length > 0 && !isNullOrUndef(nextChildren[0]) && !isNullOrUndef(nextChildren[0].key) && lastChildren.length > 0 && !isNullOrUndef(lastChildren[0]) && !isNullOrUndef(lastChildren[0].key);
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function VNode(children, className, flags, key, props, ref, type) {
    this.children = children;
    this.className = className;
    this.dom = null;
    this.flags = flags;
    this.key = key;
    this.props = props;
    this.ref = ref;
    this.type = type;
}
/**
 * Creates virtual node
 * @param {number} flags
 * @param {string|Function|null} type
 * @param {string|null=} className
 * @param {object=} children
 * @param {object=} props
 * @param {*=} key
 * @param {object|Function=} ref
 * @param {boolean=} noNormalise
 * @returns {VNode} returns new virtual node
 */
function createVNode(flags, type, className, children, props, key, ref, noNormalise) {
    if (flags & 16 /* ComponentUnknown */) {
            flags = isStatefulComponent(type) ? 4 /* ComponentClass */
            : 8 /* ComponentFunction */;
        }
    var vNode = new VNode(children === void 0 ? null : children, className === void 0 ? null : className, flags, key === void 0 ? null : key, props === void 0 ? null : props, ref === void 0 ? null : ref, type);
    if (noNormalise !== true) {
        normalize(vNode);
    }
    if (options.createVNode !== null) {
        options.createVNode(vNode);
    }
    return vNode;
}
function directClone(vNodeToClone) {
    var newVNode;
    var flags = vNodeToClone.flags;
    if (flags & 28 /* Component */) {
            var props;
            var propsToClone = vNodeToClone.props;
            if (isNull(propsToClone)) {
                props = EMPTY_OBJ;
            } else {
                props = {};
                for (var key in propsToClone) {
                    props[key] = propsToClone[key];
                }
            }
            newVNode = createVNode(flags, vNodeToClone.type, null, null, props, vNodeToClone.key, vNodeToClone.ref, true);
            var newProps = newVNode.props;
            var newChildren = newProps.children;
            // we need to also clone component children that are in props
            // as the children may also have been hoisted
            if (newChildren) {
                if (isArray(newChildren)) {
                    var len = newChildren.length;
                    if (len > 0) {
                        var tmpArray = [];
                        for (var i = 0; i < len; i++) {
                            var child = newChildren[i];
                            if (isStringOrNumber(child)) {
                                tmpArray.push(child);
                            } else if (!isInvalid(child) && isVNode(child)) {
                                tmpArray.push(directClone(child));
                            }
                        }
                        newProps.children = tmpArray;
                    }
                } else if (isVNode(newChildren)) {
                    newProps.children = directClone(newChildren);
                }
            }
            newVNode.children = null;
        } else if (flags & 3970 /* Element */) {
            var children = vNodeToClone.children;
            var props$1;
            var propsToClone$1 = vNodeToClone.props;
            if (propsToClone$1 === null) {
                props$1 = EMPTY_OBJ;
            } else {
                props$1 = {};
                for (var key$1 in propsToClone$1) {
                    props$1[key$1] = propsToClone$1[key$1];
                }
            }
            newVNode = createVNode(flags, vNodeToClone.type, vNodeToClone.className, children, props$1, vNodeToClone.key, vNodeToClone.ref, !children);
        } else if (flags & 1 /* Text */) {
            newVNode = createTextVNode(vNodeToClone.children, vNodeToClone.key);
        }
    return newVNode;
}
/*
 directClone is preferred over cloneVNode and used internally also.
 This function makes Inferno backwards compatible.
 And can be tree-shaked by modern bundlers

 Would be nice to combine this with directClone but could not do it without breaking change
 */
/**
 * Clones given virtual node by creating new instance of it
 * @param {VNode} vNodeToClone virtual node to be cloned
 * @param {Props=} props additional props for new virtual node
 * @param {...*} _children new children for new virtual node
 * @returns {VNode} new virtual node
 */
function cloneVNode(vNodeToClone, props) {
    var _children = [],
        len$2 = arguments.length - 2;
    while (len$2-- > 0) {
        _children[len$2] = arguments[len$2 + 2];
    }var children = _children;
    var childrenLen = _children.length;
    if (childrenLen > 0 && !isUndefined(_children[0])) {
        if (!props) {
            props = {};
        }
        if (childrenLen === 1) {
            children = _children[0];
        }
        if (!isUndefined(children)) {
            props.children = children;
        }
    }
    var newVNode;
    if (isArray(vNodeToClone)) {
        var tmpArray = [];
        for (var i = 0, len = vNodeToClone.length; i < len; i++) {
            tmpArray.push(directClone(vNodeToClone[i]));
        }
        newVNode = tmpArray;
    } else {
        var flags = vNodeToClone.flags;
        var className = vNodeToClone.className;
        var key = vNodeToClone.key;
        var ref = vNodeToClone.ref;
        if (props) {
            if (props.hasOwnProperty("className")) {
                className = props.className;
            }
            if (props.hasOwnProperty("ref")) {
                ref = props.ref;
            }
            if (props.hasOwnProperty("key")) {
                key = props.key;
            }
        }
        if (flags & 28 /* Component */) {
                newVNode = createVNode(flags, vNodeToClone.type, className, null, !vNodeToClone.props && !props ? EMPTY_OBJ : combineFrom(vNodeToClone.props, props), key, ref, true);
                var newProps = newVNode.props;
                if (newProps) {
                    var newChildren = newProps.children;
                    // we need to also clone component children that are in props
                    // as the children may also have been hoisted
                    if (newChildren) {
                        if (isArray(newChildren)) {
                            var len$1 = newChildren.length;
                            if (len$1 > 0) {
                                var tmpArray$1 = [];
                                for (var i$1 = 0; i$1 < len$1; i$1++) {
                                    var child = newChildren[i$1];
                                    if (isStringOrNumber(child)) {
                                        tmpArray$1.push(child);
                                    } else if (!isInvalid(child) && isVNode(child)) {
                                        tmpArray$1.push(directClone(child));
                                    }
                                }
                                newProps.children = tmpArray$1;
                            }
                        } else if (isVNode(newChildren)) {
                            newProps.children = directClone(newChildren);
                        }
                    }
                }
                newVNode.children = null;
            } else if (flags & 3970 /* Element */) {
                children = props && !isUndefined(props.children) ? props.children : vNodeToClone.children;
                newVNode = createVNode(flags, vNodeToClone.type, className, children, !vNodeToClone.props && !props ? EMPTY_OBJ : combineFrom(vNodeToClone.props, props), key, ref, false);
            } else if (flags & 1 /* Text */) {
                newVNode = createTextVNode(vNodeToClone.children, key);
            }
    }
    return newVNode;
}
function createVoidVNode() {
    return createVNode(4096 /* Void */, null);
}
function createTextVNode(text, key) {
    return createVNode(1 /* Text */, null, null, text, null, key);
}
function isVNode(o) {
    return !!o.flags;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function applyKey(key, vNode) {
    vNode.key = key;
    return vNode;
}
function applyKeyIfMissing(key, vNode) {
    if (isNumber(key)) {
        key = "." + key;
    }
    if (isNull(vNode.key) || vNode.key[0] === ".") {
        return applyKey(key, vNode);
    }
    return vNode;
}
function applyKeyPrefix(key, vNode) {
    vNode.key = key + vNode.key;
    return vNode;
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        var key = currentKey + "." + index;
        if (!isInvalid(n)) {
            if (isArray(n)) {
                _normalizeVNodes(n, result, 0, key);
            } else {
                if (isStringOrNumber(n)) {
                    n = createTextVNode(n, null);
                } else if (isVNode(n) && n.dom || n.key && n.key[0] === ".") {
                    n = directClone(n);
                }
                if (isNull(n.key) || n.key[0] === ".") {
                    n = applyKey(key, n);
                } else {
                    n = applyKeyPrefix(currentKey, n);
                }
                result.push(n);
            }
        }
    }
}
function normalizeVNodes(nodes) {
    var newNodes;
    // we assign $ which basically means we've flagged this array for future note
    // if it comes back again, we need to clone it, as people are using it
    // in an immutable way
    // tslint:disable
    if (nodes["$"] === true) {
        nodes = nodes.slice();
    } else {
        nodes["$"] = true;
    }
    // tslint:enable
    for (var i = 0, len = nodes.length; i < len; i++) {
        var n = nodes[i];
        if (isInvalid(n) || isArray(n)) {
            var result = (newNodes || nodes).slice(0, i);
            _normalizeVNodes(nodes, result, i, "");
            return result;
        } else if (isStringOrNumber(n)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, createTextVNode(n, null)));
        } else if (isVNode(n) && n.dom !== null || isNull(n.key) && (n.flags & 64 /* HasNonKeyedChildren */) === 0) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, directClone(n)));
        } else if (newNodes) {
            newNodes.push(applyKeyIfMissing(i, directClone(n)));
        }
    }
    return newNodes || nodes;
}
function normalizeChildren(children) {
    if (isArray(children)) {
        return normalizeVNodes(children);
    } else if (isVNode(children) && children.dom !== null) {
        return directClone(children);
    }
    return children;
}
function normalizeProps(vNode, props, children) {
    if (vNode.flags & 3970 /* Element */) {
            if (isNullOrUndef(children) && props.hasOwnProperty("children")) {
                vNode.children = props.children;
            }
            if (props.hasOwnProperty("className")) {
                vNode.className = props.className || null;
                delete props.className;
            }
        }
    if (props.hasOwnProperty("ref")) {
        vNode.ref = props.ref;
        delete props.ref;
    }
    if (props.hasOwnProperty("key")) {
        vNode.key = props.key;
        delete props.key;
    }
}
function getFlagsForElementVnode(type) {
    if (type === "svg") {
        return 128 /* SvgElement */;
    } else if (type === "input") {
        return 512 /* InputElement */;
    } else if (type === "select") {
        return 2048 /* SelectElement */;
    } else if (type === "textarea") {
        return 1024 /* TextareaElement */;
    } else if (type === "media") {
        return 256 /* MediaElement */;
    }
    return 2 /* HtmlElement */;
}
function normalize(vNode) {
    var props = vNode.props;
    var children = vNode.children;
    // convert a wrongly created type back to element
    // Primitive node doesn't have defaultProps, only Component
    if (vNode.flags & 28 /* Component */) {
            // set default props
            var type = vNode.type;
            var defaultProps = type.defaultProps;
            if (!isNullOrUndef(defaultProps)) {
                if (!props) {
                    props = vNode.props = defaultProps; // Create new object if only defaultProps given
                } else {
                    for (var prop in defaultProps) {
                        if (isUndefined(props[prop])) {
                            props[prop] = defaultProps[prop];
                        }
                    }
                }
            }
            if (isString(type)) {
                vNode.flags = getFlagsForElementVnode(type);
                if (props && props.children) {
                    vNode.children = props.children;
                    children = props.children;
                }
            }
        }
    if (props) {
        normalizeProps(vNode, props, children);
        if (!isInvalid(props.children)) {
            props.children = normalizeChildren(props.children);
        }
    }
    if (!isInvalid(children)) {
        vNode.children = normalizeChildren(children);
    }
    if (process.env.NODE_ENV !== "production") {
        // This code will be stripped out from production CODE
        // It helps users to track errors in their applications.
        var verifyKeys = function verifyKeys(vNodes) {
            var keyValues = vNodes.map(function (vnode) {
                return vnode.key;
            });
            keyValues.some(function (item, idx) {
                var hasDuplicate = keyValues.indexOf(item) !== idx;
                if (hasDuplicate) {
                    warning("Inferno normalisation(...): Encountered two children with same key, all keys must be unique within its siblings. Duplicated key is:" + item);
                }
                return hasDuplicate;
            });
        };
        if (vNode.children && Array.isArray(vNode.children)) {
            verifyKeys(vNode.children);
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
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

/**
 * @module Inferno
 */ /** TypeDoc Comment */
/* tslint:disable:object-literal-sort-keys */
if (process.env.NODE_ENV !== "production") {
    /* tslint:disable-next-line:no-empty */
    var testFunc = function testFn() {};
    if ((testFunc.name || testFunc.toString()).indexOf("testFn") === -1) {
        warning("It looks like you're using a minified copy of the development build " + "of Inferno. When deploying Inferno apps to production, make sure to use " + "the production build which skips development warnings and is faster. " + "See http://infernojs.org for more details.");
    }
}
var version = "3.7.0";
// we duplicate it so it plays nicely with different module loading systems
var index = {
    EMPTY_OBJ: EMPTY_OBJ,
    NO_OP: NO_OP,
    cloneVNode: cloneVNode,
    createRenderer: createRenderer,
    createVNode: createVNode,
    findDOMNode: findDOMNode,
    getFlagsForElementVnode: getFlagsForElementVnode,
    internal_DOMNodeMap: componentToDOMNodeMap,
    internal_isUnitlessNumber: isUnitlessNumber,
    internal_normalize: normalize,
    internal_patch: patch,
    linkEvent: linkEvent,
    options: options,
    render: render,
    version: version
};

exports['default'] = index;
exports.EMPTY_OBJ = EMPTY_OBJ;
exports.NO_OP = NO_OP;
exports.cloneVNode = cloneVNode;
exports.createRenderer = createRenderer;
exports.createVNode = createVNode;
exports.findDOMNode = findDOMNode;
exports.getFlagsForElementVnode = getFlagsForElementVnode;
exports.internal_DOMNodeMap = componentToDOMNodeMap;
exports.internal_isUnitlessNumber = isUnitlessNumber;
exports.internal_normalize = normalize;
exports.internal_patch = patch;
exports.linkEvent = linkEvent;
exports.options = options;
exports.render = render;
exports.version = version;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _resolvePathname = __webpack_require__(127);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(128);

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(50);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(51);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

var inferno = __webpack_require__(0);

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
function isString(o) {
    return typeof o === "string";
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
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === "object";
}

/**
 * @module Inferno-Create-Element
 */ /** TypeDoc Comment */
var componentHooks = new Set();
componentHooks.add("onComponentWillMount");
componentHooks.add("onComponentDidMount");
componentHooks.add("onComponentWillUnmount");
componentHooks.add("onComponentShouldUpdate");
componentHooks.add("onComponentWillUpdate");
componentHooks.add("onComponentDidUpdate");
/**
 * Creates virtual node
 * @param {string|Function|Component<any, any>} type Type of node
 * @param {object=} props Optional props for virtual node
 * @param {...{object}=} _children Optional children for virtual node
 * @returns {VNode} new virtual ndoe
 */
function createElement(type, props) {
    var _children = [],
        len = arguments.length - 2;
    while (len-- > 0) {
        _children[len] = arguments[len + 2];
    }if (isInvalid(type) || isObject(type)) {
        throw new Error("Inferno Error: createElement() name parameter cannot be undefined, null, false or true, It must be a string, class or function.");
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
        } else if (_children.length === 0) {
            children = void 0;
        }
    }
    if (isString(type)) {
        flags = inferno.getFlagsForElementVnode(type);
        if (!isNullOrUndef(props)) {
            newProps = {};
            for (var prop in props) {
                if (prop === "className" || prop === "class") {
                    className = props[prop];
                } else if (prop === "key") {
                    key = props.key;
                } else if (prop === "children" && isUndefined(children)) {
                    children = props.children; // always favour children args, default to props
                } else if (prop === "ref") {
                    ref = props.ref;
                } else {
                    newProps[prop] = props[prop];
                }
            }
        }
    } else {
        flags = 16 /* ComponentUnknown */;
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
                if (componentHooks.has(prop$1)) {
                    if (!ref) {
                        ref = {};
                    }
                    ref[prop$1] = props[prop$1];
                } else if (prop$1 === "key") {
                    key = props.key;
                } else {
                    newProps[prop$1] = props[prop$1];
                }
            }
        }
    }
    return inferno.createVNode(flags, type, className, children, newProps, key, ref);
}

exports['default'] = createElement;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(113).default;
module.exports.default = module.exports;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
    return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var createElement = _interopDefault(__webpack_require__(114));
var Component = _interopDefault(__webpack_require__(3));
var Inferno = __webpack_require__(0);
var Inferno__default = _interopDefault(Inferno);
__webpack_require__(117);

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== "undefined" && window.document);
function toArray(children) {
    return isArray(children) ? children : children ? [children] : children;
}
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = Array.isArray;
function isString(o) {
    return typeof o === "string";
}
function warning(message) {
    // tslint:disable-next-line:no-console
    console.warn(message);
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

/**
 * @module Inferno-Router
 */ /** TypeDoc Comment */
var emptyObject = {};
function decode(val) {
    return typeof val !== "string" ? val : decodeURIComponent(val);
}
function isEmpty(children) {
    return !children || !(isArray(children) ? children : Object.keys(children)).length;
}
function flatten(oldArray) {
    var newArray = [];
    flattenArray(oldArray, newArray);
    return newArray;
}
function getURLString(location) {
    return isString(location) ? location : location.pathname + location.search;
}
/**
 * Maps a querystring to an object
 * Supports arrays and utf-8 characters
 * @param search
 * @returns {any}
 */
function mapSearchParams(search) {
    if (search === "") {
        return {};
    }
    // Create an object with no prototype
    var map = Object.create(null);
    var fragments = search.split("&");
    for (var i = 0, len = fragments.length; i < len; i++) {
        var fragment = fragments[i];
        var ref = fragment.split("=").map(mapFragment).map(decodeURIComponent);
        var k = ref[0];
        var v = ref[1];
        if (map[k]) {
            map[k] = isArray(map[k]) ? map[k] : [map[k]];
            map[k].push(v);
        } else {
            map[k] = v;
        }
    }
    return map;
}
/**
 * Gets the relevant part of the URL for matching
 * @param fullURL
 * @param partURL
 * @returns {string}
 */
function toPartialURL(fullURL, partURL) {
    if (fullURL.indexOf(partURL) === 0) {
        return fullURL.substr(partURL.length);
    }
    return fullURL;
}
/**
 * Simulates ... operator by returning first argument
 * with the keys in the second argument excluded
 * @param _args
 * @param excluded
 * @returns {{}}
 */
function rest(_args, excluded) {
    var t = {};
    for (var p in _args) {
        if (excluded.indexOf(p) < 0) {
            t[p] = _args[p];
        }
    }
    return t;
}
/**
 * Sorts an array according to its `path` prop length
 * @param a
 * @param b
 * @returns {number}
 */
function pathRankSort(a, b) {
    var aAttr = a.props || emptyObject;
    var bAttr = b.props || emptyObject;
    var diff = rank(bAttr.path) - rank(aAttr.path);
    return diff || (bAttr.path && aAttr.path ? bAttr.path.length - aAttr.path.length : 0);
}
/**
 * Helper function for parsing querystring arrays
 */
function mapFragment(p, isVal) {
    return decodeURIComponent(isVal | 0 ? p : p.replace("[]", ""));
}
function strip(url) {
    return url.replace(/(^\/+|\/+$)/g, "");
}
function rank(url) {
    if (url === void 0) url = "";

    return (strip(url).match(/\/+/g) || "").length;
}
function flattenArray(oldArray, newArray) {
    for (var i = 0, len = oldArray.length; i < len; i++) {
        var item = oldArray[i];
        if (isArray(item)) {
            flattenArray(item, newArray);
        } else {
            newArray.push(item);
        }
    }
}

/**
 * @module Inferno-Router
 */ /** TypeDoc Comment */
var resolvedPromise = Promise.resolve();
var Route = function (Component$$1) {
    function Route(props, context) {
        var this$1 = this;

        Component$$1.call(this, props, context);
        this._onComponentResolved = function (error, component) {
            this$1.setState({
                asyncComponent: component
            });
        };
        this.state = {
            asyncComponent: null
        };
    }

    if (Component$$1) Route.__proto__ = Component$$1;
    Route.prototype = Object.create(Component$$1 && Component$$1.prototype);
    Route.prototype.constructor = Route;
    Route.prototype.componentWillMount = function componentWillMount() {
        var this$1 = this;

        var ref = this.props;
        var onEnter = ref.onEnter;
        var ref$1 = this.context;
        var router = ref$1.router;
        if (onEnter) {
            resolvedPromise.then(function () {
                onEnter({ props: this$1.props, router: router });
            });
        }
        var ref$2 = this.props;
        var getComponent = ref$2.getComponent;
        if (getComponent) {
            resolvedPromise.then(function () {
                getComponent({ props: this$1.props, router: router }, this$1._onComponentResolved);
            });
        }
    };
    Route.prototype.onLeave = function onLeave(trigger) {
        if (trigger === void 0) trigger = false;

        var ref = this.props;
        var onLeave = ref.onLeave;
        var ref$1 = this.context;
        var router = ref$1.router;
        if (onLeave && trigger) {
            onLeave({ props: this.props, router: router });
        }
    };
    Route.prototype.onEnter = function onEnter(nextProps) {
        var onEnter = nextProps.onEnter;
        var ref = this.context;
        var router = ref.router;
        if (this.props.path !== nextProps.path && onEnter) {
            onEnter({ props: nextProps, router: router });
        }
    };
    Route.prototype.getComponent = function getComponent(nextProps) {
        var getComponent = nextProps.getComponent;
        var ref = this.context;
        var router = ref.router;
        if (this.props.path !== nextProps.path && getComponent) {
            getComponent({ props: nextProps, router: router }, this._onComponentResolved);
        }
    };
    Route.prototype.componentWillUnmount = function componentWillUnmount() {
        this.onLeave(true);
    };
    Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.getComponent(nextProps);
        this.onEnter(nextProps);
        this.onLeave(this.props.path !== nextProps.path);
    };
    Route.prototype.render = function render(_args) {
        var component = _args.component;
        var children = _args.children;
        var props = rest(_args, ["component", "children", "path", "getComponent"]);
        var ref = this.state;
        var asyncComponent = ref.asyncComponent;
        var resolvedComponent = component || asyncComponent;
        if (!resolvedComponent) {
            return !isArray(children) ? children : null;
        }
        return createElement(resolvedComponent, props, children);
    };

    return Route;
}(Component);

/**
 * @module Inferno-Router
 */ /** TypeDoc Comment */
var handleIndexRoute = function handleIndexRoute(indexRouteNode) {
    return createElement(Route, indexRouteNode);
};
var handleChildRoute = function handleChildRoute(childRouteNode) {
    return handleRouteNode(childRouteNode);
};
var handleChildRoutes = function handleChildRoutes(childRouteNodes) {
    return childRouteNodes.map(handleChildRoute);
};
function handleRouteNode(routeConfigNode) {
    if (routeConfigNode.indexRoute && !routeConfigNode.childRoutes) {
        return createElement(Route, routeConfigNode);
    }
    // create deep copy of config
    var node = {};
    for (var key in routeConfigNode) {
        node[key] = routeConfigNode[key];
    }
    node.children = [];
    // handle index route config
    if (node.indexRoute) {
        node.children.push(handleIndexRoute(node.indexRoute));
        delete node.indexRoute;
    }
    // handle child routes config
    if (node.childRoutes) {
        var nodes = isArray(node.childRoutes) ? node.childRoutes : [node.childRoutes];
        (ref = node.children).push.apply(ref, handleChildRoutes(nodes));
        delete node.childRoutes;
    }
    // cleanup to match native rendered result
    if (node.children.length === 1) {
        node.children = node.children[0];
    }
    if (isArray(node.children) && node.children.length === 0 || !isArray(node.children) && Object.keys(node.children).length === 0) {
        delete node.children;
    }
    return createElement(Route, node);
    var ref;
}
var createRoutes = function createRoutes(routeConfig) {
    return routeConfig.map(handleRouteNode);
};

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
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) {
            t[p] = s[p];
        }
    }
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0) {
                t[p[i]] = s[p[i]];
            }
        }
    }
    return t;
}

/**
 * @module Inferno-Router
 */ /** TypeDoc Comment */
function renderLink(classNm, children, otherProps) {
    return Inferno.createVNode(2 /* HtmlElement */, "a", classNm, children, otherProps);
}
function Link(props, ref) {
    var router = ref.router;

    var activeClassName = props.activeClassName;
    var activeStyle = props.activeStyle;
    var className = props.className;
    var onClick = props.onClick;
    var children = props.children;
    var to = props.to;
    var otherProps = __rest(props, ["activeClassName", "activeStyle", "className", "onClick", "children", "to"]);
    var classNm;
    if (className) {
        classNm = className;
    }
    if (!router) {
        if (process.env.NODE_ENV !== "production") {
            warning("<Link/> component used outside of <Router/>. Fallback to <a> tag.");
        }
        otherProps.href = to;
        otherProps.onClick = onClick;
        return renderLink(classNm, children, otherProps);
    }
    otherProps.href = isBrowser ? router.createHref({ pathname: to }) : router.location.baseUrl ? router.location.baseUrl + to : to;
    if (router.location.pathname === to) {
        if (activeClassName) {
            classNm = (className ? className + " " : "") + activeClassName;
        }
        if (activeStyle) {
            otherProps.style = combineFrom(props.style, activeStyle);
        }
    }
    otherProps.onclick = function navigate(e) {
        if (e.button !== 0 || e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) {
            return;
        }
        e.preventDefault();
        if (typeof onClick === "function") {
            onClick(e);
        }
        router.push(to, e.target.textContent);
    };
    return renderLink(classNm, children, otherProps);
}

/**
 * @module Inferno-Router
 */ /** TypeDoc Comment */
function IndexLink(props) {
    props.to = "/";
    return Inferno.createVNode(8 /* ComponentFunction */, Link, null, null, props);
}

/**
 * @module Inferno-Router
 */ /** TypeDoc Comment */
var IndexRoute = function (Route$$1) {
    function IndexRoute(props, context) {
        Route$$1.call(this, props, context);
        props.path = "/";
    }

    if (Route$$1) IndexRoute.__proto__ = Route$$1;
    IndexRoute.prototype = Object.create(Route$$1 && Route$$1.prototype);
    IndexRoute.prototype.constructor = IndexRoute;

    return IndexRoute;
}(Route);

function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index$5 = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index$2 = pathToRegexp$1;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

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

            if (index$5(value)) {
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
        parts.push(pathToRegexp$1(path[i], keys, options).source);
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
    if (!index$5(keys)) {
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
function pathToRegexp$1(path, keys, options) {
    if (!index$5(keys)) {
        options = /** @type {!Object} */keys || options;
        keys = [];
    }

    options = options || {};

    if (path instanceof RegExp) {
        return regexpToRegexp(path, /** @type {!Array} */keys);
    }

    if (index$5(path)) {
        return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
    }

    return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
}

index$2.parse = parse_1;
index$2.compile = compile_1;
index$2.tokensToFunction = tokensToFunction_1;
index$2.tokensToRegExp = tokensToRegExp_1;

var index$4 = Object.freeze({
    default: index$2,
    __moduleExports: index$2,
    parse: parse_1,
    compile: compile_1,
    tokensToFunction: tokensToFunction_1,
    tokensToRegExp: tokensToRegExp_1
});

var pathToRegExp$1 = index$4 && index$2 || index$4;

var index$1 = createCommonjsModule(function (module) {
    /**
     * Expose `pathToRegexp` as ES6 module
     */
    module.exports = pathToRegExp$1;
    module.exports.parse = pathToRegExp$1.parse;
    module.exports.compile = pathToRegExp$1.compile;
    module.exports.tokensToFunction = pathToRegExp$1.tokensToFunction;
    module.exports.tokensToRegExp = pathToRegExp$1.tokensToRegExp;
    module.exports['default'] = module.exports;
});

/**
 * @module Inferno-Router
 */ /** TypeDoc Comment */
var cache = new Map();
/**
 * Returns a node containing only the matched components
 * @param routes
 * @param currentURL
 * @returns {*}
 */
function match(routes, currentURL) {
    var location = getURLString(currentURL);
    return matchRoutes(toArray(routes), encodeURI(location), "/");
}
/**
 * Go through every route and create a new node
 * with the matched components
 * @param _routes
 * @param currentURL
 * @param parentPath
 * @param redirect
 * @returns {object}
 */
function matchRoutes(_routes, currentURL, parentPath, redirect) {
    if (currentURL === void 0) currentURL = "/";
    if (parentPath === void 0) parentPath = "/";
    if (redirect === void 0) redirect = false;

    var routes = isArray(_routes) ? flatten(_routes) : toArray(_routes);
    var ref = currentURL.split("?");
    var pathToMatch = ref[0];if (pathToMatch === void 0) pathToMatch = "/";
    var search = ref[1];if (search === void 0) search = "";
    var params = mapSearchParams(search);
    routes.sort(pathRankSort);
    for (var i = 0, len = routes.length; i < len; i++) {
        var route = routes[i];
        var props = route.props || emptyObject;
        var routePath = props.from || props.path || "/";
        var location = parentPath + toPartialURL(routePath, parentPath).replace(/\/\//g, "/");
        var isLast = isEmpty(props.children);
        var matchBase = matchPath(isLast, location, pathToMatch);
        if (matchBase) {
            var children = props.children;
            if (props.from) {
                redirect = props.to;
            }
            if (children) {
                var matchChild = matchRoutes(children, currentURL, location, redirect);
                if (matchChild) {
                    if (matchChild.redirect) {
                        return {
                            location: location,
                            redirect: matchChild.redirect
                        };
                    }
                    children = matchChild.matched;
                    var childProps = children.props.params;
                    for (var key in childProps) {
                        params[key] = childProps[key];
                    }
                } else {
                    children = null;
                }
            }
            var matched = Inferno__default.cloneVNode(route, {
                children: children,
                params: combineFrom(params, matchBase.params)
            });
            return {
                location: location,
                matched: matched,
                redirect: redirect
            };
        }
    }
}
/**
 * Converts path to a regex, if a match is found then we extract params from it
 * @param end
 * @param routePath
 * @param pathToMatch
 * @returns {any}
 */
function matchPath(end, routePath, pathToMatch) {
    var key = routePath + "|" + end;
    var regexp = cache.get(key);
    if (regexp === void 0) {
        var keys = [];
        regexp = { pattern: index$1(routePath, keys, { end: end }), keys: keys };
        cache.set(key, regexp);
    }
    var m = regexp.pattern.exec(pathToMatch);
    if (!m) {
        return null;
    }
    var path = m[0];
    var params = Object.create(null);
    for (var i = 1, len = m.length; i < len; i += 1) {
        params[regexp.keys[i - 1].name] = decode(m[i]);
    }
    return {
        params: params,
        path: path === "" ? "/" : path
    };
}

/**
 * @module Inferno-Router
 */ /** TypeDoc Comment */
var Redirect = function (Route$$1) {
    function Redirect(props, context) {
        Route$$1.call(this, props, context);
        if (!props.to) {
            props.to = "/";
        }
    }

    if (Route$$1) Redirect.__proto__ = Route$$1;
    Redirect.prototype = Object.create(Route$$1 && Route$$1.prototype);
    Redirect.prototype.constructor = Redirect;

    return Redirect;
}(Route);

/**
 * @module Inferno-Router
 */ /** TypeDoc Comment */
var RouterContext = function (Component$$1) {
    function RouterContext(props, context) {
        Component$$1.call(this, props, context);
        if (process.env.NODE_ENV !== "production") {
            if (!props.location || !props.matched) {
                throw new TypeError('"inferno-router" requires a "location" and "matched" props passed');
            }
        }
    }

    if (Component$$1) RouterContext.__proto__ = Component$$1;
    RouterContext.prototype = Object.create(Component$$1 && Component$$1.prototype);
    RouterContext.prototype.constructor = RouterContext;
    RouterContext.prototype.getChildContext = function getChildContext() {
        return {
            router: this.props.router || {
                location: {
                    baseUrl: this.props.baseUrl,
                    pathname: this.props.location
                }
            }
        };
    };
    RouterContext.prototype.render = function render(props) {
        return props.matched;
    };

    return RouterContext;
}(Component);

/**
 * @module Inferno-Router
 */ /** TypeDoc Comment */
function createrRouter(history) {
    if (!history) {
        throw new TypeError('Inferno: Error "inferno-router" requires a history prop passed');
    }
    return {
        createHref: history.createHref,
        listen: history.listen,
        push: history.push,
        replace: history.replace,
        isActive: function isActive(url) {
            return matchPath(true, url, this.url);
        },
        get location() {
            return history.location.pathname !== "blank" ? history.location : {
                pathname: "/",
                search: ""
            };
        },
        get url() {
            return this.location.pathname + this.location.search;
        }
    };
}
var Router = function (Component$$1) {
    function Router(props, context) {
        Component$$1.call(this, props, context);
        this.router = createrRouter(props.history);
        this.state = {
            url: props.url || this.router.url
        };
    }

    if (Component$$1) Router.__proto__ = Component$$1;
    Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
    Router.prototype.constructor = Router;
    Router.prototype.componentWillMount = function componentWillMount() {
        var this$1 = this;

        if (this.router) {
            this.unlisten = this.router.listen(function () {
                this$1.routeTo(this$1.router.url);
            });
        }
    };
    Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var this$1 = this;

        this.setState({ url: nextProps.url }, this.props.onUpdate ? function () {
            return this$1.props.onUpdate();
        } : void 0);
    };
    Router.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.unlisten) {
            this.unlisten();
        }
    };
    Router.prototype.routeTo = function routeTo(url) {
        var this$1 = this;

        this.setState({ url: url }, this.props.onUpdate ? function () {
            return this$1.props.onUpdate();
        } : void 0);
    };
    Router.prototype.render = function render(props) {
        var this$1 = this;

        var hit = match(props.children, this.state.url);
        if (hit.redirect) {
            setTimeout(function () {
                this$1.router.replace(hit.redirect);
            }, 0);
            return null;
        }
        return Inferno.createVNode(4 /* ComponentClass */, RouterContext, null, null, {
            location: this.state.url,
            matched: hit.matched,
            router: this.router
        });
    };

    return Router;
}(Component);

/**
 * @module Inferno-Router
 */ /** TypeDoc Comment */
var index = {
    IndexLink: IndexLink,
    IndexRedirect: Redirect,
    IndexRoute: IndexRoute,
    Link: Link,
    Redirect: Redirect,
    Route: Route,
    Router: Router,
    RouterContext: RouterContext,
    createRoutes: createRoutes,
    match: match
};

exports.IndexLink = IndexLink;
exports.IndexRedirect = Redirect;
exports.IndexRoute = IndexRoute;
exports.Link = Link;
exports.Redirect = Redirect;
exports.Route = Route;
exports.Router = Router;
exports.RouterContext = RouterContext;
exports.createRoutes = createRoutes;
exports.match = match;
exports['default'] = index;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isarray = __webpack_require__(116);

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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
var NO_OP = "$NO_OP";
var ERROR_MSG = "a runtime error occured! Use Inferno in development environment to find the error.";
// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== "undefined" && window.document);
function toArray(children) {
    return isArray(children) ? children : children ? [children] : children;
}
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = Array.isArray;
function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}
function isStringOrNumber(o) {
    var type = typeof o === 'undefined' ? 'undefined' : _typeof(o);
    return type === "string" || type === "number";
}
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
function isFunction(o) {
    return typeof o === "function";
}
function isString(o) {
    return typeof o === "string";
}
function isNumber(o) {
    return typeof o === "number";
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
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === "object";
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error("Inferno Error: " + message);
}
function warning(message) {
    // tslint:disable-next-line:no-console
    console.warn(message);
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
function Lifecycle() {
    this.listeners = [];
}
Lifecycle.prototype.addListener = function addListener(callback) {
    this.listeners.push(callback);
};
Lifecycle.prototype.trigger = function trigger() {
    var listeners = this.listeners;
    var listener;
    // We need to remove current listener from array when calling it, because more listeners might be added
    while (listener = listeners.shift()) {
        listener();
    }
};

exports.NO_OP = NO_OP;
exports.ERROR_MSG = ERROR_MSG;
exports.isBrowser = isBrowser;
exports.toArray = toArray;
exports.isArray = isArray;
exports.isStatefulComponent = isStatefulComponent;
exports.isStringOrNumber = isStringOrNumber;
exports.isNullOrUndef = isNullOrUndef;
exports.isInvalid = isInvalid;
exports.isFunction = isFunction;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isNull = isNull;
exports.isTrue = isTrue;
exports.isUndefined = isUndefined;
exports.isObject = isObject;
exports.throwError = throwError;
exports.warning = warning;
exports.combineFrom = combineFrom;
exports.Lifecycle = Lifecycle;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(118);
module.exports.default = module.exports;

/***/ }),
/* 120 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8 which returns 'object' for typed array constructors, and
  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

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

module.exports = isFunction;

/***/ }),
/* 122 */
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
/* 123 */
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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (Prism) {

	var javascript = Prism.util.clone(Prism.languages.javascript);

	Prism.languages.jsx = Prism.languages.extend('markup', javascript);
	Prism.languages.jsx.tag.pattern = /<\/?[\w\.:-]+\s*(?:\s+[\w\.:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i;

	Prism.languages.jsx.tag.inside['attr-value'].pattern = /=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i;

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
/* 125 */
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
						// Check for existence for IE8
						return o.map && o.map(function (v) {
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
			var env = {
				callback: callback,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};

			_.hooks.run("before-highlightall", env);

			var elements = env.elements || document.querySelectorAll(env.selector);

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

			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
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
					env.element.textContent = env.code;
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

		tokenize: function tokenize(text, grammar, language) {
			var Token = _.Token;

			var strarr = [text];

			var rest = grammar.rest;

			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			tokenloop: for (var token in grammar) {
				if (!grammar.hasOwnProperty(token) || !grammar[token]) {
					continue;
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
					for (var i = 0, pos = 0; i < strarr.length; pos += strarr[i].length, ++i) {

						var str = strarr[i];

						if (strarr.length > text.length) {
							// Something went terribly wrong, ABORT, ABORT!
							break tokenloop;
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

							for (var len = strarr.length; k < len && p < to; ++k) {
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
							args.push(before);
						}

						var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);

						args.push(wrapped);

						if (after) {
							args.push(after);
						}

						Array.prototype.splice.apply(strarr, args);
					}
				}
			}

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

		if (env.type == 'comment') {
			env.attributes['spellcheck'] = 'true';
		}

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

		return _self.Prism;
	}

	//Get current script and highlight
	var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

	if (script) {
		_.filename = script.src;

		if (document.addEventListener && !script.hasAttribute('data-manual')) {
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
	'comment': /<!--[\w\W]*?-->/,
	'prolog': /<\?[\w\W]+?\?>/,
	'doctype': /<!DOCTYPE[\w\W]+?>/i,
	'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
				inside: {
					'punctuation': /[=>"']/
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
	'comment': /\/\*[\w\W]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
	'string': {
		pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'property': /(\b|\B)[\w-]+(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
			lookbehind: true,
			inside: Prism.languages.css,
			alias: 'language-css'
		}
	});

	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|').*?\1/i,
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
		pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
		lookbehind: true
	}, {
		pattern: /(^|[^\\:])\/\/.*/,
		lookbehind: true
	}],
	'string': {
		pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /(\.|\\)/
		}
	},
	'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};

/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: true,
		greedy: true
	}
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\\\|\\?[^\\])*?`/,
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
			pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript'
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

		if (Array.prototype.forEach) {
			// Check to prevent error in IE8
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
		}
	};

	document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(129)))

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! tether 1.3.4 */
(function (f) {
  if (( false ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.Tether = f();
  }
})(function () {
  var define, module, exports;return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }return s;
  }({ 1: [function (require, module, exports) {
      'use strict';

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
      }

      var _utils = require('./utils');

      var _utils2 = _interopRequireDefault(_utils);

      var _TetherBase$Utils = _utils2['default'].Utils;
      var getBounds = _TetherBase$Utils.getBounds;
      var updateClasses = _TetherBase$Utils.updateClasses;
      var defer = _TetherBase$Utils.defer;

      _utils2['default'].modules.push({
        position: function position(_ref) {
          var _this = this;

          var top = _ref.top;
          var left = _ref.left;

          var _cache = this.cache('element-bounds', function () {
            return getBounds(_this.element);
          });

          var height = _cache.height;
          var width = _cache.width;

          var targetPos = this.getTargetBounds();

          var bottom = top + height;
          var right = left + width;

          var abutted = [];
          if (top <= targetPos.bottom && bottom >= targetPos.top) {
            ['left', 'right'].forEach(function (side) {
              var targetPosSide = targetPos[side];
              if (targetPosSide === left || targetPosSide === right) {
                abutted.push(side);
              }
            });
          }

          if (left <= targetPos.right && right >= targetPos.left) {
            ['top', 'bottom'].forEach(function (side) {
              var targetPosSide = targetPos[side];
              if (targetPosSide === top || targetPosSide === bottom) {
                abutted.push(side);
              }
            });
          }

          var allClasses = [];
          var addClasses = [];

          var sides = ['left', 'top', 'right', 'bottom'];
          allClasses.push(this.getClass('abutted'));
          sides.forEach(function (side) {
            allClasses.push(_this.getClass('abutted') + '-' + side);
          });

          if (abutted.length) {
            addClasses.push(this.getClass('abutted'));
          }

          abutted.forEach(function (side) {
            addClasses.push(_this.getClass('abutted') + '-' + side);
          });

          defer(function () {
            if (!(_this.options.addTargetClasses === false)) {
              updateClasses(_this.target, addClasses, allClasses);
            }
            updateClasses(_this.element, addClasses, allClasses);
          });

          return true;
        }
      });
    }, { "./utils": 5 }], 2: [function (require, module, exports) {
      'use strict';

      var _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;_e = err;
          } finally {
            try {
              if (!_n && _i['return']) _i['return']();
            } finally {
              if (_d) throw _e;
            }
          }return _arr;
        }return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          }
        };
      }();

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
      }

      var _utils = require('./utils');

      var _utils2 = _interopRequireDefault(_utils);

      var _TetherBase$Utils = _utils2['default'].Utils;
      var getBounds = _TetherBase$Utils.getBounds;
      var extend = _TetherBase$Utils.extend;
      var updateClasses = _TetherBase$Utils.updateClasses;
      var defer = _TetherBase$Utils.defer;

      var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

      function getBoundingRect(tether, to) {
        if (to === 'scrollParent') {
          to = tether.scrollParents[0];
        } else if (to === 'window') {
          to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
        }

        if (to === document) {
          to = to.documentElement;
        }

        if (typeof to.nodeType !== 'undefined') {
          (function () {
            var node = to;
            var size = getBounds(to);
            var pos = size;
            var style = getComputedStyle(to);

            to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

            // Account any parent Frames scroll offset
            if (node.ownerDocument !== document) {
              var win = node.ownerDocument.defaultView;
              to[0] += win.pageXOffset;
              to[1] += win.pageYOffset;
              to[2] += win.pageXOffset;
              to[3] += win.pageYOffset;
            }

            BOUNDS_FORMAT.forEach(function (side, i) {
              side = side[0].toUpperCase() + side.substr(1);
              if (side === 'Top' || side === 'Left') {
                to[i] += parseFloat(style['border' + side + 'Width']);
              } else {
                to[i] -= parseFloat(style['border' + side + 'Width']);
              }
            });
          })();
        }

        return to;
      }

      _utils2['default'].modules.push({
        position: function position(_ref) {
          var _this = this;

          var top = _ref.top;
          var left = _ref.left;
          var targetAttachment = _ref.targetAttachment;

          if (!this.options.constraints) {
            return true;
          }

          var _cache = this.cache('element-bounds', function () {
            return getBounds(_this.element);
          });

          var height = _cache.height;
          var width = _cache.width;

          if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
            var _lastSize = this.lastSize;

            // Handle the item getting hidden as a result of our positioning without glitching
            // the classes in and out
            width = _lastSize.width;
            height = _lastSize.height;
          }

          var targetSize = this.cache('target-bounds', function () {
            return _this.getTargetBounds();
          });

          var targetHeight = targetSize.height;
          var targetWidth = targetSize.width;

          var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

          this.options.constraints.forEach(function (constraint) {
            var outOfBoundsClass = constraint.outOfBoundsClass;
            var pinnedClass = constraint.pinnedClass;

            if (outOfBoundsClass) {
              allClasses.push(outOfBoundsClass);
            }
            if (pinnedClass) {
              allClasses.push(pinnedClass);
            }
          });

          allClasses.forEach(function (cls) {
            ['left', 'top', 'right', 'bottom'].forEach(function (side) {
              allClasses.push(cls + '-' + side);
            });
          });

          var addClasses = [];

          var tAttachment = extend({}, targetAttachment);
          var eAttachment = extend({}, this.attachment);

          this.options.constraints.forEach(function (constraint) {
            var to = constraint.to;
            var attachment = constraint.attachment;
            var pin = constraint.pin;

            if (typeof attachment === 'undefined') {
              attachment = '';
            }

            var changeAttachX = undefined,
                changeAttachY = undefined;
            if (attachment.indexOf(' ') >= 0) {
              var _attachment$split = attachment.split(' ');

              var _attachment$split2 = _slicedToArray(_attachment$split, 2);

              changeAttachY = _attachment$split2[0];
              changeAttachX = _attachment$split2[1];
            } else {
              changeAttachX = changeAttachY = attachment;
            }

            var bounds = getBoundingRect(_this, to);

            if (changeAttachY === 'target' || changeAttachY === 'both') {
              if (top < bounds[1] && tAttachment.top === 'top') {
                top += targetHeight;
                tAttachment.top = 'bottom';
              }

              if (top + height > bounds[3] && tAttachment.top === 'bottom') {
                top -= targetHeight;
                tAttachment.top = 'top';
              }
            }

            if (changeAttachY === 'together') {
              if (tAttachment.top === 'top') {
                if (eAttachment.top === 'bottom' && top < bounds[1]) {
                  top += targetHeight;
                  tAttachment.top = 'bottom';

                  top += height;
                  eAttachment.top = 'top';
                } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
                  top -= height - targetHeight;
                  tAttachment.top = 'bottom';

                  eAttachment.top = 'bottom';
                }
              }

              if (tAttachment.top === 'bottom') {
                if (eAttachment.top === 'top' && top + height > bounds[3]) {
                  top -= targetHeight;
                  tAttachment.top = 'top';

                  top -= height;
                  eAttachment.top = 'bottom';
                } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
                  top += height - targetHeight;
                  tAttachment.top = 'top';

                  eAttachment.top = 'top';
                }
              }

              if (tAttachment.top === 'middle') {
                if (top + height > bounds[3] && eAttachment.top === 'top') {
                  top -= height;
                  eAttachment.top = 'bottom';
                } else if (top < bounds[1] && eAttachment.top === 'bottom') {
                  top += height;
                  eAttachment.top = 'top';
                }
              }
            }

            if (changeAttachX === 'target' || changeAttachX === 'both') {
              if (left < bounds[0] && tAttachment.left === 'left') {
                left += targetWidth;
                tAttachment.left = 'right';
              }

              if (left + width > bounds[2] && tAttachment.left === 'right') {
                left -= targetWidth;
                tAttachment.left = 'left';
              }
            }

            if (changeAttachX === 'together') {
              if (left < bounds[0] && tAttachment.left === 'left') {
                if (eAttachment.left === 'right') {
                  left += targetWidth;
                  tAttachment.left = 'right';

                  left += width;
                  eAttachment.left = 'left';
                } else if (eAttachment.left === 'left') {
                  left += targetWidth;
                  tAttachment.left = 'right';

                  left -= width;
                  eAttachment.left = 'right';
                }
              } else if (left + width > bounds[2] && tAttachment.left === 'right') {
                if (eAttachment.left === 'left') {
                  left -= targetWidth;
                  tAttachment.left = 'left';

                  left -= width;
                  eAttachment.left = 'right';
                } else if (eAttachment.left === 'right') {
                  left -= targetWidth;
                  tAttachment.left = 'left';

                  left += width;
                  eAttachment.left = 'left';
                }
              } else if (tAttachment.left === 'center') {
                if (left + width > bounds[2] && eAttachment.left === 'left') {
                  left -= width;
                  eAttachment.left = 'right';
                } else if (left < bounds[0] && eAttachment.left === 'right') {
                  left += width;
                  eAttachment.left = 'left';
                }
              }
            }

            if (changeAttachY === 'element' || changeAttachY === 'both') {
              if (top < bounds[1] && eAttachment.top === 'bottom') {
                top += height;
                eAttachment.top = 'top';
              }

              if (top + height > bounds[3] && eAttachment.top === 'top') {
                top -= height;
                eAttachment.top = 'bottom';
              }
            }

            if (changeAttachX === 'element' || changeAttachX === 'both') {
              if (left < bounds[0]) {
                if (eAttachment.left === 'right') {
                  left += width;
                  eAttachment.left = 'left';
                } else if (eAttachment.left === 'center') {
                  left += width / 2;
                  eAttachment.left = 'left';
                }
              }

              if (left + width > bounds[2]) {
                if (eAttachment.left === 'left') {
                  left -= width;
                  eAttachment.left = 'right';
                } else if (eAttachment.left === 'center') {
                  left -= width / 2;
                  eAttachment.left = 'right';
                }
              }
            }

            if (typeof pin === 'string') {
              pin = pin.split(',').map(function (p) {
                return p.trim();
              });
            } else if (pin === true) {
              pin = ['top', 'left', 'right', 'bottom'];
            }

            pin = pin || [];

            var pinned = [];
            var oob = [];

            if (top < bounds[1]) {
              if (pin.indexOf('top') >= 0) {
                top = bounds[1];
                pinned.push('top');
              } else {
                oob.push('top');
              }
            }

            if (top + height > bounds[3]) {
              if (pin.indexOf('bottom') >= 0) {
                top = bounds[3] - height;
                pinned.push('bottom');
              } else {
                oob.push('bottom');
              }
            }

            if (left < bounds[0]) {
              if (pin.indexOf('left') >= 0) {
                left = bounds[0];
                pinned.push('left');
              } else {
                oob.push('left');
              }
            }

            if (left + width > bounds[2]) {
              if (pin.indexOf('right') >= 0) {
                left = bounds[2] - width;
                pinned.push('right');
              } else {
                oob.push('right');
              }
            }

            if (pinned.length) {
              (function () {
                var pinnedClass = undefined;
                if (typeof _this.options.pinnedClass !== 'undefined') {
                  pinnedClass = _this.options.pinnedClass;
                } else {
                  pinnedClass = _this.getClass('pinned');
                }

                addClasses.push(pinnedClass);
                pinned.forEach(function (side) {
                  addClasses.push(pinnedClass + '-' + side);
                });
              })();
            }

            if (oob.length) {
              (function () {
                var oobClass = undefined;
                if (typeof _this.options.outOfBoundsClass !== 'undefined') {
                  oobClass = _this.options.outOfBoundsClass;
                } else {
                  oobClass = _this.getClass('out-of-bounds');
                }

                addClasses.push(oobClass);
                oob.forEach(function (side) {
                  addClasses.push(oobClass + '-' + side);
                });
              })();
            }

            if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
              eAttachment.left = tAttachment.left = false;
            }
            if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
              eAttachment.top = tAttachment.top = false;
            }

            if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
              _this.updateAttachClasses(eAttachment, tAttachment);
              _this.trigger('update', {
                attachment: eAttachment,
                targetAttachment: tAttachment
              });
            }
          });

          defer(function () {
            if (!(_this.options.addTargetClasses === false)) {
              updateClasses(_this.target, addClasses, allClasses);
            }
            updateClasses(_this.element, addClasses, allClasses);
          });

          return { top: top, left: left };
        }
      });
    }, { "./utils": 5 }], 3: [function (require, module, exports) {
      'use strict';

      var _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;_e = err;
          } finally {
            try {
              if (!_n && _i['return']) _i['return']();
            } finally {
              if (_d) throw _e;
            }
          }return _arr;
        }return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          }
        };
      }();

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
      }

      var _utils = require('./utils');

      var _utils2 = _interopRequireDefault(_utils);

      _utils2['default'].modules.push({
        position: function position(_ref) {
          var top = _ref.top;
          var left = _ref.left;

          if (!this.options.shift) {
            return;
          }

          var shift = this.options.shift;
          if (typeof this.options.shift === 'function') {
            shift = this.options.shift.call(this, { top: top, left: left });
          }

          var shiftTop = undefined,
              shiftLeft = undefined;
          if (typeof shift === 'string') {
            shift = shift.split(' ');
            shift[1] = shift[1] || shift[0];

            var _shift = shift;

            var _shift2 = _slicedToArray(_shift, 2);

            shiftTop = _shift2[0];
            shiftLeft = _shift2[1];

            shiftTop = parseFloat(shiftTop, 10);
            shiftLeft = parseFloat(shiftLeft, 10);
          } else {
            shiftTop = shift.top;
            shiftLeft = shift.left;
          }

          top += shiftTop;
          left += shiftLeft;

          return { top: top, left: left };
        }
      });
    }, { "./utils": 5 }], 4: [function (require, module, exports) {
      /* globals performance */

      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;_e = err;
          } finally {
            try {
              if (!_n && _i['return']) _i['return']();
            } finally {
              if (_d) throw _e;
            }
          }return _arr;
        }return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          }
        };
      }();

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _get = function get(_x6, _x7, _x8) {
        var _again = true;_function: while (_again) {
          var object = _x6,
              property = _x7,
              receiver = _x8;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);if (parent === null) {
              return undefined;
            } else {
              _x6 = parent;_x7 = property;_x8 = receiver;_again = true;desc = parent = undefined;continue _function;
            }
          } else if ('value' in desc) {
            return desc.value;
          } else {
            var getter = desc.get;if (getter === undefined) {
              return undefined;
            }return getter.call(receiver);
          }
        }
      };

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
          throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var _utils = require('./utils');

      var _utils2 = _interopRequireDefault(_utils);

      require('./constraint');

      require('./abutment');

      require('./shift');

      var _TetherBase$Utils = _utils2['default'].Utils;
      var getScrollParents = _TetherBase$Utils.getScrollParents;
      var getBounds = _TetherBase$Utils.getBounds;
      var getOffsetParent = _TetherBase$Utils.getOffsetParent;
      var extend = _TetherBase$Utils.extend;
      var addClass = _TetherBase$Utils.addClass;
      var removeClass = _TetherBase$Utils.removeClass;
      var updateClasses = _TetherBase$Utils.updateClasses;
      var defer = _TetherBase$Utils.defer;
      var flush = _TetherBase$Utils.flush;
      var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
      var removeUtilElements = _TetherBase$Utils.removeUtilElements;
      var Evented = _TetherBase$Utils.Evented;

      function within(a, b) {
        var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

        return a + diff >= b && b >= a - diff;
      }

      var transformKey = function () {
        if (typeof document === 'undefined') {
          return '';
        }
        var el = document.createElement('div');

        var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
        for (var i = 0; i < transforms.length; ++i) {
          var key = transforms[i];
          if (el.style[key] !== undefined) {
            return key;
          }
        }
      }();

      var tethers = [];

      var position = function position() {
        tethers.forEach(function (tether) {
          tether.position(false);
        });
        flush();
      };

      function now() {
        if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
          return performance.now();
        }
        return +new Date();
      }

      (function () {
        var lastCall = null;
        var lastDuration = null;
        var pendingTimeout = null;

        var tick = function tick() {
          if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
            // We voluntarily throttle ourselves if we can't manage 60fps
            lastDuration = Math.min(lastDuration - 16, 250);

            // Just in case this is the last event, remember to position just once more
            pendingTimeout = setTimeout(tick, 250);
            return;
          }

          if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
            // Some browsers call events a little too frequently, refuse to run more than is reasonable
            return;
          }

          if (pendingTimeout != null) {
            clearTimeout(pendingTimeout);
            pendingTimeout = null;
          }

          lastCall = now();
          position();
          lastDuration = now() - lastCall;
        };

        if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
          ['resize', 'scroll', 'touchmove'].forEach(function (event) {
            window.addEventListener(event, tick);
          });
        }
      })();

      var MIRROR_LR = {
        center: 'center',
        left: 'right',
        right: 'left'
      };

      var MIRROR_TB = {
        middle: 'middle',
        top: 'bottom',
        bottom: 'top'
      };

      var OFFSET_MAP = {
        top: 0,
        left: 0,
        middle: '50%',
        center: '50%',
        bottom: '100%',
        right: '100%'
      };

      var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
        var left = attachment.left;
        var top = attachment.top;

        if (left === 'auto') {
          left = MIRROR_LR[relativeToAttachment.left];
        }

        if (top === 'auto') {
          top = MIRROR_TB[relativeToAttachment.top];
        }

        return { left: left, top: top };
      };

      var attachmentToOffset = function attachmentToOffset(attachment) {
        var left = attachment.left;
        var top = attachment.top;

        if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
          left = OFFSET_MAP[attachment.left];
        }

        if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
          top = OFFSET_MAP[attachment.top];
        }

        return { left: left, top: top };
      };

      function addOffset() {
        var out = { top: 0, left: 0 };

        for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
          offsets[_key] = arguments[_key];
        }

        offsets.forEach(function (_ref) {
          var top = _ref.top;
          var left = _ref.left;

          if (typeof top === 'string') {
            top = parseFloat(top, 10);
          }
          if (typeof left === 'string') {
            left = parseFloat(left, 10);
          }

          out.top += top;
          out.left += left;
        });

        return out;
      }

      function offsetToPx(offset, size) {
        if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
          offset.left = parseFloat(offset.left, 10) / 100 * size.width;
        }
        if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
          offset.top = parseFloat(offset.top, 10) / 100 * size.height;
        }

        return offset;
      }

      var parseOffset = function parseOffset(value) {
        var _value$split = value.split(' ');

        var _value$split2 = _slicedToArray(_value$split, 2);

        var top = _value$split2[0];
        var left = _value$split2[1];

        return { top: top, left: left };
      };
      var parseAttachment = parseOffset;

      var TetherClass = function (_Evented) {
        _inherits(TetherClass, _Evented);

        function TetherClass(options) {
          var _this = this;

          _classCallCheck(this, TetherClass);

          _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
          this.position = this.position.bind(this);

          tethers.push(this);

          this.history = [];

          this.setOptions(options, false);

          _utils2['default'].modules.forEach(function (module) {
            if (typeof module.initialize !== 'undefined') {
              module.initialize.call(_this);
            }
          });

          this.position();
        }

        _createClass(TetherClass, [{
          key: 'getClass',
          value: function getClass() {
            var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
            var classes = this.options.classes;

            if (typeof classes !== 'undefined' && classes[key]) {
              return this.options.classes[key];
            } else if (this.options.classPrefix) {
              return this.options.classPrefix + '-' + key;
            } else {
              return key;
            }
          }
        }, {
          key: 'setOptions',
          value: function setOptions(options) {
            var _this2 = this;

            var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

            var defaults = {
              offset: '0 0',
              targetOffset: '0 0',
              targetAttachment: 'auto auto',
              classPrefix: 'tether'
            };

            this.options = extend(defaults, options);

            var _options = this.options;
            var element = _options.element;
            var target = _options.target;
            var targetModifier = _options.targetModifier;

            this.element = element;
            this.target = target;
            this.targetModifier = targetModifier;

            if (this.target === 'viewport') {
              this.target = document.body;
              this.targetModifier = 'visible';
            } else if (this.target === 'scroll-handle') {
              this.target = document.body;
              this.targetModifier = 'scroll-handle';
            }

            ['element', 'target'].forEach(function (key) {
              if (typeof _this2[key] === 'undefined') {
                throw new Error('Tether Error: Both element and target must be defined');
              }

              if (typeof _this2[key].jquery !== 'undefined') {
                _this2[key] = _this2[key][0];
              } else if (typeof _this2[key] === 'string') {
                _this2[key] = document.querySelector(_this2[key]);
              }
            });

            addClass(this.element, this.getClass('element'));
            if (!(this.options.addTargetClasses === false)) {
              addClass(this.target, this.getClass('target'));
            }

            if (!this.options.attachment) {
              throw new Error('Tether Error: You must provide an attachment');
            }

            this.targetAttachment = parseAttachment(this.options.targetAttachment);
            this.attachment = parseAttachment(this.options.attachment);
            this.offset = parseOffset(this.options.offset);
            this.targetOffset = parseOffset(this.options.targetOffset);

            if (typeof this.scrollParents !== 'undefined') {
              this.disable();
            }

            if (this.targetModifier === 'scroll-handle') {
              this.scrollParents = [this.target];
            } else {
              this.scrollParents = getScrollParents(this.target);
            }

            if (!(this.options.enabled === false)) {
              this.enable(pos);
            }
          }
        }, {
          key: 'getTargetBounds',
          value: function getTargetBounds() {
            if (typeof this.targetModifier !== 'undefined') {
              if (this.targetModifier === 'visible') {
                if (this.target === document.body) {
                  return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
                } else {
                  var bounds = getBounds(this.target);

                  var out = {
                    height: bounds.height,
                    width: bounds.width,
                    top: bounds.top,
                    left: bounds.left
                  };

                  out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
                  out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
                  out.height = Math.min(innerHeight, out.height);
                  out.height -= 2;

                  out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
                  out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
                  out.width = Math.min(innerWidth, out.width);
                  out.width -= 2;

                  if (out.top < pageYOffset) {
                    out.top = pageYOffset;
                  }
                  if (out.left < pageXOffset) {
                    out.left = pageXOffset;
                  }

                  return out;
                }
              } else if (this.targetModifier === 'scroll-handle') {
                var bounds = undefined;
                var target = this.target;
                if (target === document.body) {
                  target = document.documentElement;

                  bounds = {
                    left: pageXOffset,
                    top: pageYOffset,
                    height: innerHeight,
                    width: innerWidth
                  };
                } else {
                  bounds = getBounds(target);
                }

                var style = getComputedStyle(target);

                var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

                var scrollBottom = 0;
                if (hasBottomScroll) {
                  scrollBottom = 15;
                }

                var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

                var out = {
                  width: 15,
                  height: height * 0.975 * (height / target.scrollHeight),
                  left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
                };

                var fitAdj = 0;
                if (height < 408 && this.target === document.body) {
                  fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
                }

                if (this.target !== document.body) {
                  out.height = Math.max(out.height, 24);
                }

                var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
                out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

                if (this.target === document.body) {
                  out.height = Math.max(out.height, 24);
                }

                return out;
              }
            } else {
              return getBounds(this.target);
            }
          }
        }, {
          key: 'clearCache',
          value: function clearCache() {
            this._cache = {};
          }
        }, {
          key: 'cache',
          value: function cache(k, getter) {
            // More than one module will often need the same DOM info, so
            // we keep a cache which is cleared on each position call
            if (typeof this._cache === 'undefined') {
              this._cache = {};
            }

            if (typeof this._cache[k] === 'undefined') {
              this._cache[k] = getter.call(this);
            }

            return this._cache[k];
          }
        }, {
          key: 'enable',
          value: function enable() {
            var _this3 = this;

            var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

            if (!(this.options.addTargetClasses === false)) {
              addClass(this.target, this.getClass('enabled'));
            }
            addClass(this.element, this.getClass('enabled'));
            this.enabled = true;

            this.scrollParents.forEach(function (parent) {
              if (parent !== _this3.target.ownerDocument) {
                parent.addEventListener('scroll', _this3.position);
              }
            });

            if (pos) {
              this.position();
            }
          }
        }, {
          key: 'disable',
          value: function disable() {
            var _this4 = this;

            removeClass(this.target, this.getClass('enabled'));
            removeClass(this.element, this.getClass('enabled'));
            this.enabled = false;

            if (typeof this.scrollParents !== 'undefined') {
              this.scrollParents.forEach(function (parent) {
                parent.removeEventListener('scroll', _this4.position);
              });
            }
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            var _this5 = this;

            this.disable();

            tethers.forEach(function (tether, i) {
              if (tether === _this5) {
                tethers.splice(i, 1);
              }
            });

            // Remove any elements we were using for convenience from the DOM
            if (tethers.length === 0) {
              removeUtilElements();
            }
          }
        }, {
          key: 'updateAttachClasses',
          value: function updateAttachClasses(elementAttach, targetAttach) {
            var _this6 = this;

            elementAttach = elementAttach || this.attachment;
            targetAttach = targetAttach || this.targetAttachment;
            var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

            if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
              // updateAttachClasses can be called more than once in a position call, so
              // we need to clean up after ourselves such that when the last defer gets
              // ran it doesn't add any extra classes from previous calls.
              this._addAttachClasses.splice(0, this._addAttachClasses.length);
            }

            if (typeof this._addAttachClasses === 'undefined') {
              this._addAttachClasses = [];
            }
            var add = this._addAttachClasses;

            if (elementAttach.top) {
              add.push(this.getClass('element-attached') + '-' + elementAttach.top);
            }
            if (elementAttach.left) {
              add.push(this.getClass('element-attached') + '-' + elementAttach.left);
            }
            if (targetAttach.top) {
              add.push(this.getClass('target-attached') + '-' + targetAttach.top);
            }
            if (targetAttach.left) {
              add.push(this.getClass('target-attached') + '-' + targetAttach.left);
            }

            var all = [];
            sides.forEach(function (side) {
              all.push(_this6.getClass('element-attached') + '-' + side);
              all.push(_this6.getClass('target-attached') + '-' + side);
            });

            defer(function () {
              if (!(typeof _this6._addAttachClasses !== 'undefined')) {
                return;
              }

              updateClasses(_this6.element, _this6._addAttachClasses, all);
              if (!(_this6.options.addTargetClasses === false)) {
                updateClasses(_this6.target, _this6._addAttachClasses, all);
              }

              delete _this6._addAttachClasses;
            });
          }
        }, {
          key: 'position',
          value: function position() {
            var _this7 = this;

            var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

            // flushChanges commits the changes immediately, leave true unless you are positioning multiple
            // tethers (in which case call Tether.Utils.flush yourself when you're done)

            if (!this.enabled) {
              return;
            }

            this.clearCache();

            // Turn 'auto' attachments into the appropriate corner or edge
            var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

            this.updateAttachClasses(this.attachment, targetAttachment);

            var elementPos = this.cache('element-bounds', function () {
              return getBounds(_this7.element);
            });

            var width = elementPos.width;
            var height = elementPos.height;

            if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
              var _lastSize = this.lastSize;

              // We cache the height and width to make it possible to position elements that are
              // getting hidden.
              width = _lastSize.width;
              height = _lastSize.height;
            } else {
              this.lastSize = { width: width, height: height };
            }

            var targetPos = this.cache('target-bounds', function () {
              return _this7.getTargetBounds();
            });
            var targetSize = targetPos;

            // Get an actual px offset from the attachment
            var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
            var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

            var manualOffset = offsetToPx(this.offset, { width: width, height: height });
            var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

            // Add the manually provided offset
            offset = addOffset(offset, manualOffset);
            targetOffset = addOffset(targetOffset, manualTargetOffset);

            // It's now our goal to make (element position + offset) == (target position + target offset)
            var left = targetPos.left + targetOffset.left - offset.left;
            var top = targetPos.top + targetOffset.top - offset.top;

            for (var i = 0; i < _utils2['default'].modules.length; ++i) {
              var _module2 = _utils2['default'].modules[i];
              var ret = _module2.position.call(this, {
                left: left,
                top: top,
                targetAttachment: targetAttachment,
                targetPos: targetPos,
                elementPos: elementPos,
                offset: offset,
                targetOffset: targetOffset,
                manualOffset: manualOffset,
                manualTargetOffset: manualTargetOffset,
                scrollbarSize: scrollbarSize,
                attachment: this.attachment
              });

              if (ret === false) {
                return false;
              } else if (typeof ret === 'undefined' || (typeof ret === "undefined" ? "undefined" : _typeof(ret)) !== 'object') {
                continue;
              } else {
                top = ret.top;
                left = ret.left;
              }
            }

            // We describe the position three different ways to give the optimizer
            // a chance to decide the best possible way to position the element
            // with the fewest repaints.
            var next = {
              // It's position relative to the page (absolute positioning when
              // the element is a child of the body)
              page: {
                top: top,
                left: left
              },

              // It's position relative to the viewport (fixed positioning)
              viewport: {
                top: top - pageYOffset,
                bottom: pageYOffset - top - height + innerHeight,
                left: left - pageXOffset,
                right: pageXOffset - left - width + innerWidth
              }
            };

            var doc = this.target.ownerDocument;
            var win = doc.defaultView;

            var scrollbarSize = undefined;
            if (doc.body.scrollWidth > win.innerWidth) {
              scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
              next.viewport.bottom -= scrollbarSize.height;
            }

            if (doc.body.scrollHeight > win.innerHeight) {
              scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
              next.viewport.right -= scrollbarSize.width;
            }

            if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
              // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
              next.page.bottom = doc.body.scrollHeight - top - height;
              next.page.right = doc.body.scrollWidth - left - width;
            }

            if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
              (function () {
                var offsetParent = _this7.cache('target-offsetparent', function () {
                  return getOffsetParent(_this7.target);
                });
                var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
                  return getBounds(offsetParent);
                });
                var offsetParentStyle = getComputedStyle(offsetParent);
                var offsetParentSize = offsetPosition;

                var offsetBorder = {};
                ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
                  offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
                });

                offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
                offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

                if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
                  if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
                    // We're within the visible part of the target's scroll parent
                    var scrollTop = offsetParent.scrollTop;
                    var scrollLeft = offsetParent.scrollLeft;

                    // It's position relative to the target's offset parent (absolute positioning when
                    // the element is moved to be a child of the target's offset parent).
                    next.offset = {
                      top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                      left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
                    };
                  }
                }
              })();
            }

            // We could also travel up the DOM and try each containing context, rather than only
            // looking at the body, but we're gonna get diminishing returns.

            this.move(next);

            this.history.unshift(next);

            if (this.history.length > 3) {
              this.history.pop();
            }

            if (flushChanges) {
              flush();
            }

            return true;
          }

          // THE ISSUE
        }, {
          key: 'move',
          value: function move(pos) {
            var _this8 = this;

            if (!(typeof this.element.parentNode !== 'undefined')) {
              return;
            }

            var same = {};

            for (var type in pos) {
              same[type] = {};

              for (var key in pos[type]) {
                var found = false;

                for (var i = 0; i < this.history.length; ++i) {
                  var point = this.history[i];
                  if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
                    found = true;
                    break;
                  }
                }

                if (!found) {
                  same[type][key] = true;
                }
              }
            }

            var css = { top: '', left: '', right: '', bottom: '' };

            var transcribe = function transcribe(_same, _pos) {
              var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
              var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
              if (gpu !== false) {
                var yPos = undefined,
                    xPos = undefined;
                if (_same.top) {
                  css.top = 0;
                  yPos = _pos.top;
                } else {
                  css.bottom = 0;
                  yPos = -_pos.bottom;
                }

                if (_same.left) {
                  css.left = 0;
                  xPos = _pos.left;
                } else {
                  css.right = 0;
                  xPos = -_pos.right;
                }

                css[transformKey] = 'translateX(' + Math.round(xPos) + 'px) translateY(' + Math.round(yPos) + 'px)';

                if (transformKey !== 'msTransform') {
                  // The Z transform will keep this in the GPU (faster, and prevents artifacts),
                  // but IE9 doesn't support 3d transforms and will choke.
                  css[transformKey] += " translateZ(0)";
                }
              } else {
                if (_same.top) {
                  css.top = _pos.top + 'px';
                } else {
                  css.bottom = _pos.bottom + 'px';
                }

                if (_same.left) {
                  css.left = _pos.left + 'px';
                } else {
                  css.right = _pos.right + 'px';
                }
              }
            };

            var moved = false;
            if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
              css.position = 'absolute';
              transcribe(same.page, pos.page);
            } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
              css.position = 'fixed';
              transcribe(same.viewport, pos.viewport);
            } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
              (function () {
                css.position = 'absolute';
                var offsetParent = _this8.cache('target-offsetparent', function () {
                  return getOffsetParent(_this8.target);
                });

                if (getOffsetParent(_this8.element) !== offsetParent) {
                  defer(function () {
                    _this8.element.parentNode.removeChild(_this8.element);
                    offsetParent.appendChild(_this8.element);
                  });
                }

                transcribe(same.offset, pos.offset);
                moved = true;
              })();
            } else {
              css.position = 'absolute';
              transcribe({ top: true, left: true }, pos.page);
            }

            if (!moved) {
              var offsetParentIsBody = true;
              var currentNode = this.element.parentNode;
              while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
                if (getComputedStyle(currentNode).position !== 'static') {
                  offsetParentIsBody = false;
                  break;
                }

                currentNode = currentNode.parentNode;
              }

              if (!offsetParentIsBody) {
                this.element.parentNode.removeChild(this.element);
                this.element.ownerDocument.body.appendChild(this.element);
              }
            }

            // Any css change will trigger a repaint, so let's avoid one if nothing changed
            var writeCSS = {};
            var write = false;
            for (var key in css) {
              var val = css[key];
              var elVal = this.element.style[key];

              if (elVal !== val) {
                write = true;
                writeCSS[key] = val;
              }
            }

            if (write) {
              defer(function () {
                extend(_this8.element.style, writeCSS);
                _this8.trigger('repositioned');
              });
            }
          }
        }]);

        return TetherClass;
      }(Evented);

      TetherClass.modules = [];

      _utils2['default'].position = position;

      var Tether = extend(TetherClass, _utils2['default']);

      exports['default'] = Tether;
      module.exports = exports['default'];
    }, { "./abutment": 1, "./constraint": 2, "./shift": 3, "./utils": 5 }], 5: [function (require, module, exports) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      var TetherBase = { modules: [] };

      var zeroElement = null;

      // Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
      // if the element lies within a nested document (<frame> or <iframe>-like).
      function getActualBoundingClientRect(node) {
        var boundingRect = node.getBoundingClientRect();

        // The original object returned by getBoundingClientRect is immutable, so we clone it
        // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
        var rect = {};
        for (var k in boundingRect) {
          rect[k] = boundingRect[k];
        }

        if (node.ownerDocument !== document) {
          var _frameElement = node.ownerDocument.defaultView.frameElement;
          if (_frameElement) {
            var frameRect = getActualBoundingClientRect(_frameElement);
            rect.top += frameRect.top;
            rect.bottom += frameRect.top;
            rect.left += frameRect.left;
            rect.right += frameRect.left;
          }
        }

        return rect;
      }

      function getScrollParents(el) {
        // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
        // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        var computedStyle = getComputedStyle(el) || {};
        var position = computedStyle.position;
        var parents = [];

        if (position === 'fixed') {
          return [el];
        }

        var parent = el;
        while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
          var style = undefined;
          try {
            style = getComputedStyle(parent);
          } catch (err) {}

          if (typeof style === 'undefined' || style === null) {
            parents.push(parent);
            return parents;
          }

          var _style = style;
          var overflow = _style.overflow;
          var overflowX = _style.overflowX;
          var overflowY = _style.overflowY;

          if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
            if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
              parents.push(parent);
            }
          }
        }

        parents.push(el.ownerDocument.body);

        // If the node is within a frame, account for the parent window scroll
        if (el.ownerDocument !== document) {
          parents.push(el.ownerDocument.defaultView);
        }

        return parents;
      }

      var uniqueId = function () {
        var id = 0;
        return function () {
          return ++id;
        };
      }();

      var zeroPosCache = {};
      var getOrigin = function getOrigin() {
        // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
        // jitter as the user scrolls that messes with our ability to detect if two positions
        // are equivilant or not.  We place an element at the top left of the page that will
        // get the same jitter, so we can cancel the two out.
        var node = zeroElement;
        if (!node) {
          node = document.createElement('div');
          node.setAttribute('data-tether-id', uniqueId());
          extend(node.style, {
            top: 0,
            left: 0,
            position: 'absolute'
          });

          document.body.appendChild(node);

          zeroElement = node;
        }

        var id = node.getAttribute('data-tether-id');
        if (typeof zeroPosCache[id] === 'undefined') {
          zeroPosCache[id] = getActualBoundingClientRect(node);

          // Clear the cache when this position call is done
          defer(function () {
            delete zeroPosCache[id];
          });
        }

        return zeroPosCache[id];
      };

      function removeUtilElements() {
        if (zeroElement) {
          document.body.removeChild(zeroElement);
        }
        zeroElement = null;
      };

      function getBounds(el) {
        var doc = undefined;
        if (el === document) {
          doc = document;
          el = document.documentElement;
        } else {
          doc = el.ownerDocument;
        }

        var docEl = doc.documentElement;

        var box = getActualBoundingClientRect(el);

        var origin = getOrigin();

        box.top -= origin.top;
        box.left -= origin.left;

        if (typeof box.width === 'undefined') {
          box.width = document.body.scrollWidth - box.left - box.right;
        }
        if (typeof box.height === 'undefined') {
          box.height = document.body.scrollHeight - box.top - box.bottom;
        }

        box.top = box.top - docEl.clientTop;
        box.left = box.left - docEl.clientLeft;
        box.right = doc.body.clientWidth - box.width - box.left;
        box.bottom = doc.body.clientHeight - box.height - box.top;

        return box;
      }

      function getOffsetParent(el) {
        return el.offsetParent || document.documentElement;
      }

      function getScrollBarSize() {
        var inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';

        var outer = document.createElement('div');
        extend(outer.style, {
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          visibility: 'hidden',
          width: '200px',
          height: '150px',
          overflow: 'hidden'
        });

        outer.appendChild(inner);

        document.body.appendChild(outer);

        var widthContained = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var widthScroll = inner.offsetWidth;

        if (widthContained === widthScroll) {
          widthScroll = outer.clientWidth;
        }

        document.body.removeChild(outer);

        var width = widthContained - widthScroll;

        return { width: width, height: width };
      }

      function extend() {
        var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var args = [];

        Array.prototype.push.apply(args, arguments);

        args.slice(1).forEach(function (obj) {
          if (obj) {
            for (var key in obj) {
              if ({}.hasOwnProperty.call(obj, key)) {
                out[key] = obj[key];
              }
            }
          }
        });

        return out;
      }

      function removeClass(el, name) {
        if (typeof el.classList !== 'undefined') {
          name.split(' ').forEach(function (cls) {
            if (cls.trim()) {
              el.classList.remove(cls);
            }
          });
        } else {
          var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
          var className = getClassName(el).replace(regex, ' ');
          setClassName(el, className);
        }
      }

      function addClass(el, name) {
        if (typeof el.classList !== 'undefined') {
          name.split(' ').forEach(function (cls) {
            if (cls.trim()) {
              el.classList.add(cls);
            }
          });
        } else {
          removeClass(el, name);
          var cls = getClassName(el) + (' ' + name);
          setClassName(el, cls);
        }
      }

      function hasClass(el, name) {
        if (typeof el.classList !== 'undefined') {
          return el.classList.contains(name);
        }
        var className = getClassName(el);
        return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
      }

      function getClassName(el) {
        // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
        // completely separately SVGAnimatedString base classes
        if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
          return el.className.baseVal;
        }
        return el.className;
      }

      function setClassName(el, className) {
        el.setAttribute('class', className);
      }

      function updateClasses(el, add, all) {
        // Of the set of 'all' classes, we need the 'add' classes, and only the
        // 'add' classes to be set.
        all.forEach(function (cls) {
          if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
            removeClass(el, cls);
          }
        });

        add.forEach(function (cls) {
          if (!hasClass(el, cls)) {
            addClass(el, cls);
          }
        });
      }

      var deferred = [];

      var defer = function defer(fn) {
        deferred.push(fn);
      };

      var flush = function flush() {
        var fn = undefined;
        while (fn = deferred.pop()) {
          fn();
        }
      };

      var Evented = function () {
        function Evented() {
          _classCallCheck(this, Evented);
        }

        _createClass(Evented, [{
          key: 'on',
          value: function on(event, handler, ctx) {
            var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

            if (typeof this.bindings === 'undefined') {
              this.bindings = {};
            }
            if (typeof this.bindings[event] === 'undefined') {
              this.bindings[event] = [];
            }
            this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
          }
        }, {
          key: 'once',
          value: function once(event, handler, ctx) {
            this.on(event, handler, ctx, true);
          }
        }, {
          key: 'off',
          value: function off(event, handler) {
            if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
              return;
            }

            if (typeof handler === 'undefined') {
              delete this.bindings[event];
            } else {
              var i = 0;
              while (i < this.bindings[event].length) {
                if (this.bindings[event][i].handler === handler) {
                  this.bindings[event].splice(i, 1);
                } else {
                  ++i;
                }
              }
            }
          }
        }, {
          key: 'trigger',
          value: function trigger(event) {
            if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
              var i = 0;

              for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              while (i < this.bindings[event].length) {
                var _bindings$event$i = this.bindings[event][i];
                var handler = _bindings$event$i.handler;
                var ctx = _bindings$event$i.ctx;
                var once = _bindings$event$i.once;

                var context = ctx;
                if (typeof context === 'undefined') {
                  context = this;
                }

                handler.apply(context, args);

                if (once) {
                  this.bindings[event].splice(i, 1);
                } else {
                  ++i;
                }
              }
            }
          }
        }]);

        return Evented;
      }();

      TetherBase.Utils = {
        getActualBoundingClientRect: getActualBoundingClientRect,
        getScrollParents: getScrollParents,
        getBounds: getBounds,
        getOffsetParent: getOffsetParent,
        extend: extend,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        updateClasses: updateClasses,
        defer: defer,
        flush: flush,
        uniqueId: uniqueId,
        Evented: Evented,
        getScrollBarSize: getScrollBarSize,
        removeUtilElements: removeUtilElements
      };

      exports['default'] = TetherBase;
      module.exports = exports['default'];
    }, {}] }, {}, [4])(4);
});

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsolute = function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
};

// About 1.5x faster than the two-arg version of Array#splice()
var spliceOne = function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }list.pop();
};

// This implementation is based heavily on node's url.parse
var resolvePathname = function resolvePathname(to) {
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
};

module.exports = resolvePathname;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var valueEqual = function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
    return valueEqual(item, b[index]);
  });

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
};

exports.default = valueEqual;

/***/ }),
/* 129 */
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
/* 130 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'ul'
};

var ListGroup = function ListGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      flush = props.flush,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'flush']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

ListGroup.defaultProps = defaultProps;

exports.default = ListGroup;

/***/ }),
/* 131 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'li'
};

var handleDisabledOnClick = function handleDisabledOnClick(e) {
  e.preventDefault();
};

var ListGroupItem = function ListGroupItem(props) {
  var className = props.className,
      Tag = props.tag,
      active = props.active,
      disabled = props.disabled,
      action = props.action,
      color = props.color,
      attributes = _objectWithoutProperties(props, ['className', 'tag', 'active', 'disabled', 'action', 'color']);

  var classes = (0, _classnames2.default)(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? 'list-group-item-' + color : false, 'list-group-item');

  // Prevent click event when disabled.
  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }
  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

ListGroupItem.defaultProps = defaultProps;

exports.default = ListGroupItem;

/***/ }),
/* 132 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'h5'
};

var ListGroupItemHeading = function ListGroupItemHeading(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'tag']);

  var classes = (0, _classnames2.default)(className, 'list-group-item-heading');

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

ListGroupItemHeading.defaultProps = defaultProps;

exports.default = ListGroupItemHeading;

/***/ }),
/* 133 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  tag: 'p'
};

var ListGroupItemText = function ListGroupItemText(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'tag']);

  var classes = (0, _classnames2.default)(className, 'list-group-item-text');

  return (0, _inferno.createVNode)(16, Tag, null, null, _extends({}, attributes, {
    'className': classes
  }));
};

ListGroupItemText.defaultProps = defaultProps;

exports.default = ListGroupItemText;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return (0, _inferno.createVNode)(16, _components.Section, null, null, {
    'title': 'List',
    children: [(0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: [(0, _inferno.createVNode)(2, 'h3', null, 'Standard List'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _ListGroup2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _ListGroupItem2.default, null, null, {
            children: 'Cras justo odio'
          }), (0, _inferno.createVNode)(16, _ListGroupItem2.default, null, null, {
            children: 'Dapibus ac facilisis in'
          }), (0, _inferno.createVNode)(16, _ListGroupItem2.default, null, null, {
            children: 'Morbi leo risus'
          }), (0, _inferno.createVNode)(16, _ListGroupItem2.default, null, null, {
            children: 'Porta ac consectetur ac'
          }), (0, _inferno.createVNode)(16, _ListGroupItem2.default, null, null, {
            children: 'Vestibulum at eros'
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<ListGroup>\n  <ListGroupItem>Cras justo odio</ListGroupItem>\n  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>\n  <ListGroupItem>Morbi leo risus</ListGroupItem>\n  <ListGroupItem>Porta ac consectetur ac</ListGroupItem>\n  <ListGroupItem>Vestibulum at eros</ListGroupItem>\n</ListGroup>'
        })]
      })]
    }), (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: [(0, _inferno.createVNode)(2, 'h3', null, 'List With Badges'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _ListGroup2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _ListGroupItem2.default, null, null, {
            'className': 'justify-content-between',
            children: ['Cras justo odio ', (0, _inferno.createVNode)(16, _Badge2.default, null, null, {
              'pill': true,
              children: '14'
            })]
          }), (0, _inferno.createVNode)(16, _ListGroupItem2.default, null, null, {
            'className': 'justify-content-between',
            children: ['Dapibus ac facilisis in ', (0, _inferno.createVNode)(16, _Badge2.default, null, null, {
              'pill': true,
              children: '2'
            })]
          }), (0, _inferno.createVNode)(16, _ListGroupItem2.default, null, null, {
            'className': 'justify-content-between',
            children: ['Morbi leo risus ', (0, _inferno.createVNode)(16, _Badge2.default, null, null, {
              'pill': true,
              children: '1'
            })]
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<ListGroup>\n  <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>\n  <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>\n  <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>\n</ListGroup>'
        })]
      })]
    }), (0, _inferno.createVNode)(16, _components.Stage, null, null, {
      children: [(0, _inferno.createVNode)(2, 'h3', null, 'List With Links and Buttons'), (0, _inferno.createVNode)(16, _components.Scene, null, null, {
        children: [(0, _inferno.createVNode)(16, _ListGroup2.default, null, null, {
          children: [(0, _inferno.createVNode)(16, _ListGroupItem2.default, null, null, {
            'disabled': true,
            'tag': 'a',
            'href': '#',
            children: 'Cras justo odio'
          }), (0, _inferno.createVNode)(16, _ListGroupItem2.default, null, null, {
            'tag': 'a',
            'href': '#',
            children: 'Dapibus ac facilisis in'
          }), (0, _inferno.createVNode)(16, _ListGroupItem2.default, null, null, {
            'tag': 'a',
            'href': '#',
            'action': true,
            children: 'Morbi leo risus'
          }), (0, _inferno.createVNode)(16, _ListGroupItem2.default, null, null, {
            'active': true,
            'tag': 'a',
            'href': '#',
            'action': true,
            children: 'Porta ac consectetur ac'
          }), (0, _inferno.createVNode)(16, _ListGroupItem2.default, null, null, {
            'tag': 'button',
            'action': true,
            children: 'Vestibulum at eros'
          })]
        }), (0, _inferno.createVNode)(16, _components.Code, null, null, {
          children: '<ListGroup>\n  <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>\n  <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>\n  <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>\n  <ListGroupItem active tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>\n  <ListGroupItem tag="button" action>Vestibulum at eros</ListGroupItem>\n</ListGroup>'
        })]
      })]
    })]
  });
};

var _components = __webpack_require__(4);

var _ListGroup = __webpack_require__(130);

var _ListGroup2 = _interopRequireDefault(_ListGroup);

var _ListGroupItem = __webpack_require__(131);

var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);

var _ListGroupItemHeading = __webpack_require__(132);

var _ListGroupItemHeading2 = _interopRequireDefault(_ListGroupItemHeading);

var _ListGroupItemText = __webpack_require__(133);

var _ListGroupItemText2 = _interopRequireDefault(_ListGroupItemText);

var _Badge = __webpack_require__(60);

var _Badge2 = _interopRequireDefault(_Badge);

var _inferno = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map