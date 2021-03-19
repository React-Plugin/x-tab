(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Dialog"] = factory(require("react"));
	else
		root["Dialog"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Tabs = __webpack_require__(1);

	var _Tabs2 = _interopRequireDefault(_Tabs);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	module.exports = _Tabs2.default; //使用module.exports时，从es6到es5生成的dist不会出现export.default的问题.
	/*
	 * Created with Visual Studio Code.
	 * github: https://github.com/React-Plugin/x-tabs
	 * User: 田想兵
	 * Date: 2019-04-03
	 * Time: 20:00:00
	 * Contact: 55342775@qq.com
	 */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

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

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _TabPane = __webpack_require__(3);

	var _TabPane2 = _interopRequireDefault(_TabPane);

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
	} /*
	   * Created with Visual Studio Code.
	   * github: https://github.com/React-xui/x-tabs
	   * User: 田想兵
	   * Date: 2019-04-03
	   * Time: 20:00:00
	   * Contact: 55342775@qq.com
	   */

	var Tabs = function (_Component) {
	  _inherits(Tabs, _Component);

	  function Tabs(props) {
	    _classCallCheck(this, Tabs);

	    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

	    _this.onSelect = function (key) {
	      if (key != _this.state.active) {
	        _this.setState({ active: key }, function () {
	          _this.props.onChange && _this.props.onChange.call(_this, key);
	        });
	      }
	    };

	    var active = typeof props.active === 'undefined' ? props.defaultActive : props.active;;
	    if (typeof active === 'undefined') {
	      var children = _this.props.children;

	      active = _react2.default.Children.count(children) == 1 ? children.key : children[0].key;
	    }
	    _this.state = { active: active };
	    return _this;
	  }

	  _createClass(Tabs, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newprops) {
	      if (typeof newprops.active !== 'undefined' && newprops.active != this.state.active) {
	        this.setState({ active: newprops.active });
	      }
	    }
	  }, {
	    key: 'formatTabs',
	    value: function formatTabs() {
	      var _this2 = this;

	      // console.log(React.Children)
	      var headers = [];
	      var contents = [];
	      var active = this.state.active;

	      _react2.default.Children.forEach(this.props.children, function (item, k) {
	        if (item) {
	          var _item$props = item.props,
	              children = _item$props.children,
	              tab = _item$props.tab,
	              className = _item$props.className;

	          var cls = 'x-tabs-header-item';
	          var clsCon = 'x-tabs-item';
	          if (className) {
	            clsCon += ' ' + className;
	          }
	          var key = item.key;

	          if (active == key) {
	            cls += " active";
	            clsCon += " active";
	          }
	          headers.push(_react2.default.createElement('div', { className: cls, key: key, onClick: _this2.onSelect.bind(_this2, key) }, tab));
	          if (item.props.forceRender === true || active == key) {
	            contents.push(_react2.default.createElement('div', { className: clsCon, key: key }, _react2.default.createElement(item.type, item.props)));
	          }
	        }
	      });
	      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'x-tabs-header' }, headers), contents);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var className = this.props.className;

	      var cls = typeof className === 'undefined' ? "x-tabs" : className + ' x-tabs';
	      return _react2.default.createElement('div', { className: cls }, this.formatTabs());
	    }
	  }]);

	  return Tabs;
	}(_react.Component);

	Tabs.TabPane = _TabPane2.default;
	exports.default = Tabs;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

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

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

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

	var TabPane = function (_Component) {
	    _inherits(TabPane, _Component);

	    function TabPane(props) {
	        _classCallCheck(this, TabPane);

	        return _possibleConstructorReturn(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).call(this, props));
	    }

	    _createClass(TabPane, [{
	        key: 'render',
	        value: function render() {
	            var children = this.props.children;

	            return _react2.default.createElement('div', null, children);
	        }
	    }]);

	    return TabPane;
	}(_react.Component);

	TabPane.defaultProps = {
	    forceRender: true
	};
	exports.default = TabPane;

/***/ })
/******/ ])
});
;