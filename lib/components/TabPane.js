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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
                contents = _react2.default.createElement(
                    'div',
                    { className: clsCon, key: value },
                    children
                );
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