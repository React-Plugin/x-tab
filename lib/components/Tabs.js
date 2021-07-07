'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TabPane = require('./TabPane');

var _TabPane2 = _interopRequireDefault(_TabPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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
            headers.push(_react2.default.createElement(
              'div',
              { className: cls, key: key, onClick: _this2.onSelect.bind(_this2, key) },
              tab
            ));
            if (item.props.forceRender === true || active == key) {
              contents.push(_react2.default.createElement(
                'div',
                { className: clsCon, key: key },
                _react2.default.createElement(item.type, item.props)
              ));
            }
          } else {
            contents.push(item);
          }
        }
      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'x-tabs-header' },
          headers
        ),
        contents
      );
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

      return tabs.map(function (item, index) {
        var cls = 'x-tabs-header-item';
        if (active == item.value) {
          cls += " active";
        }
        return _react2.default.createElement(
          'div',
          { className: cls, key: item.value, onClick: _this3.onSelect.bind(_this3, item.value) },
          item.tab
        );
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

      return _react2.default.createElement(
        'div',
        { className: cls },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'x-tabs-header' },
            this.renderTabsHeader()
          ),
          _react2.default.Children.map(children, function (item, index) {
            return _react2.default.createElement(item.type, _extends({}, item.props, { active: active, value: item.key, onLoad: _this4.onLoad.bind(_this4), unLoad: _this4.unLoad.bind(_this4), index: index, onSelect: _this4.onSelect }));
          })
        )
      );
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.TabPane = _TabPane2.default;
exports.default = Tabs;