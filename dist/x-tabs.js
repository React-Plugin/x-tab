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

	var _TabTitle = __webpack_require__(4);

	var _TabTitle2 = _interopRequireDefault(_TabTitle);

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
	    // componentDidMount() {
	    //   console.log('tab didmount.')
	    // }
	    // componentWillMount() {
	    //   console.log('will mount')
	    // }
	    //子tab加载事件

	  }, {
	    key: 'onLoad',
	    value: function onLoad(props) {
	      // console.log('onload')
	      this.setState(function (state) {
	        state.tabs[props.index] = props;
	        return { tabs: state.tabs };
	      });
	    }
	    //子tab移除事件

	  }, {
	    key: 'unLoad',
	    value: function unLoad(props) {
	      this.setState(function (state) {
	        state.tabs.splice(props.index, 1);
	        return { tabs: state.tabs };
	      });
	    }
	  }, {
	    key: 'renderTabsHeader',
	    value: function renderTabsHeader() {
	      var _this3 = this;

	      var _state = this.state,
	          tabs = _state.tabs,
	          active = _state.active;
	      var _props = this.props,
	          _props$headerItemStyl = _props.headerItemStyle,
	          headerItemStyle = _props$headerItemStyl === undefined ? {} : _props$headerItemStyl,
	          _props$headerActiveSt = _props.headerActiveStyle,
	          headerActiveStyle = _props$headerActiveSt === undefined ? {} : _props$headerActiveSt;

	      return tabs.map(function (item, index) {
	        var cls = 'x-tabs-header-item';
	        var style = headerItemStyle;
	        if (active == item.value) {
	          cls += " active";
	          style = headerActiveStyle;
	        }
	        // return <div className={cls} key={item.value} onClick={this.onSelect.bind(this, item.value)}>{item.tab}</div>
	        return _react2.default.createElement(_TabTitle2.default, { style: style, className: cls, value: item.value, key: item.value, onClick: _this3.onSelect.bind(_this3, item.value) }, item.tab);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var _props2 = this.props,
	          className = _props2.className,
	          children = _props2.children,
	          _props2$style = _props2.style,
	          style = _props2$style === undefined ? {} : _props2$style,
	          _props2$headerStyle = _props2.headerStyle,
	          headerStyle = _props2$headerStyle === undefined ? {} : _props2$headerStyle;

	      var cls = typeof className === 'undefined' ? "x-tabs" : className + ' x-tabs';
	      var active = this.state.active;

	      return _react2.default.createElement('div', { className: cls, style: style }, _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'x-tabs-header', style: headerStyle }, this.renderTabsHeader()), _react2.default.Children.map(children, function (item, index) {
	        return _react2.default.createElement(item.type, _extends({}, item.props, { active: active, value: item.key, onLoad: _this4.onLoad.bind(_this4), unLoad: _this4.unLoad.bind(_this4), index: index, onSelect: _this4.onSelect }));
	      })));
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
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            if (prevProps.value !== this.props.value || prevProps.tab !== this.props.tab) {
	                this.props.onLoad(this.props);
	            }
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
	                forceRender = _props.forceRender,
	                style = _props.style;

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
	                contents = _react2.default.createElement('div', { className: clsCon, style: style }, children);
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

/***/ }),
/* 4 */
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
	} /*
	   * @Author: 田想兵
	   * @Date: 2021-07-08 09:50:45
	   * @LastEditTime: 2021-07-08 14:18:56
	   * @github: https://github.com/tianxiangbing
	   * @Contact: 55342775@qq.com
	   * @Desc: 选项卡头
	   */

	var TabTitle = function (_Component) {
	  _inherits(TabTitle, _Component);

	  function TabTitle(props) {
	    _classCallCheck(this, TabTitle);

	    var _this = _possibleConstructorReturn(this, (TabTitle.__proto__ || Object.getPrototypeOf(TabTitle)).call(this, props));

	    _this.dom = _react2.default.createRef();
	    return _this;
	  }

	  _createClass(TabTitle, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // console.log(this.dom)
	      this.dom.current.addEventListener('click', this.props.onClick, false);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.dom.current.removeEventListener('click', this.props.onClick, false);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          value = _props.value,
	          onClick = _props.onClick,
	          children = _props.children,
	          _props$style = _props.style,
	          style = _props$style === undefined ? {} : _props$style;

	      return _react2.default.createElement('div', { className: className, style: style, ref: this.dom, key: value }, children);
	    }
	  }]);

	  return TabTitle;
	}(_react.Component);

	exports.default = TabTitle;

/***/ })
/******/ ])
});
;