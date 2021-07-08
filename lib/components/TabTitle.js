'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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

      return _react2.default.createElement(
        'div',
        { className: className, style: style, ref: this.dom, key: value },
        children
      );
    }
  }]);

  return TabTitle;
}(_react.Component);

exports.default = TabTitle;