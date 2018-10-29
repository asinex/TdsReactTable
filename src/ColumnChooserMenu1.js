'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColumnChooserMenu1 = function (_Component) {
    _inherits(ColumnChooserMenu1, _Component);

    function ColumnChooserMenu1(props) {
        _classCallCheck(this, ColumnChooserMenu1);

        return _possibleConstructorReturn(this, (ColumnChooserMenu1.__proto__ || Object.getPrototypeOf(ColumnChooserMenu1)).call(this, props));
    }

    _createClass(ColumnChooserMenu1, [{
        key: 'handleClick',
        value: function handleClick() {
            this.props.onClick({ showColumnChooser: !this.props.showColumnChooser });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'button',
                { onClick: this.handleClick.bind(this), className: 'menuIcon' },
                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'glyphicon glyphicon-align-justify' })
            );
        }
    }]);

    return ColumnChooserMenu1;
}(_react.Component);

exports.default = ColumnChooserMenu1;