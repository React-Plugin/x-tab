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

	    _initialiseProps.call(_this);

	    var active = typeof props.active === 'undefined' ? props.defaultActive : props.active;;
	    if (typeof active === 'undefined') {
	      var children = _this.props.children;

	      active = _react2.default.Children.count(children) == 1 ? children.key : children[0].key;
	    }
	    _this.state = { active: active, tabs: [] };
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
	          if (item.type === _TabPane2.default) {
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
	          } else {
	            contents.push(item);
	          }
	        }
	      });
	      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'x-tabs-header' }, headers), contents);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log('tab didmount.');
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      console.log('will mount');
	    }
	    //子tab加载事件

	    //子tab移除事件

	  }, {
	    key: 'renderTabsHeader',
	    value: function renderTabsHeader() {
	      var _this3 = this;

	      var _state = this.state,
	          tabs = _state.tabs,
	          active = _state.active;

	      return tabs.map(function (item, index) {
	        var cls = 'x-tabs-header-item';
	        if (active == item.value) {
	          cls += " active";
	        }
	        return _react2.default.createElement('div', { className: cls, key: item.value, onClick: _this3.onSelect.bind(_this3, item.value) }, item.tab);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var _props = this.props,
	          className = _props.className,
	          children = _props.children;

	      var cls = typeof className === 'undefined' ? "x-tabs" : className + ' x-tabs';
	      var active = this.state.active;

	      return _react2.default.createElement('div', { className: cls }, _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'x-tabs-header' }, this.renderTabsHeader()), _react2.default.Children.map(children, function (item, index) {
	        return _react2.default.createElement(item.type, _extends({}, item.props, { active: active, value: item.key, onLoad: _this4.onLoad, index: index, onSelect: _this4.onSelect }));
	      })));
	    }
	  }]);

	  return Tabs;
	}(_react.Component);

	Tabs.TabPane = _TabPane2.default;

	var _initialiseProps = function _initialiseProps() {
	  var _this5 = this;

	  this.onSelect = function (key) {
	    if (key != _this5.state.active) {
	      _this5.setState({ active: key }, function () {
	        _this5.props.onChange && _this5.props.onChange.call(_this5, key);
	      });
	    }
	  };

	  this.onLoad = function (props) {
	    console.log('onload');
	    _this5.setState(function (state) {
	      state.tabs[props.index] = props;
	      return { tabs: state.tabs };
	    });
	  };

	  this.unLoad = function (props) {
	    _this5.setState(function (state) {
	      state.tabs.splice(props.index, 1);
	      return { tabs: state.tabs };
	    });
	  };
	};

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

	        var _this = _possibleConstructorReturn(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).call(this, props));

	        _this.props.onLoad(props);
	        return _this;
	    }

	    _createClass(TabPane, [{
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.props.unLoad(this.props);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                tab = _props.tab,
	                value = _props.value,
	                active = _props.active,
	                onSelect = _props.onSelect,
	                forceRender = _props.forceRender;

	            var cls = 'x-tabs-header-item';
	            var clsCon = 'x-tabs-item';
	            if (className) {
	                clsCon += ' ' + className;
	            }
	            if (active == value) {
	                cls += " active";
	                clsCon += " active";
	            }
	            // let headers = [];
	            var contents = null;
	            // headers.push(<div className={cls} key={value} onClick={onSelect.bind(this, value)}>{tab}</div>);
	            if (forceRender === true || active == value) {
	                contents = _react2.default.createElement('div', { className: clsCon, key: value }, children);
	            }
	            // return <div><div className="x-tabs-header">{headers}</div>{contents}</div>;
	            return contents;
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