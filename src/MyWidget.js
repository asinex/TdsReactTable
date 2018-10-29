'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\nbackground-color:white;\nborder:1px solid grey;\ncolor:black;\nfont-style:italic;\nz-index:9999;\nwidth:80px;\ntop:10px;\nleft:30px;\nheight:auto;\nposition:absolute;\npadding:2px;\nmargin:3px;\n'], ['\n\nbackground-color:white;\nborder:1px solid grey;\ncolor:black;\nfont-style:italic;\nz-index:9999;\nwidth:80px;\ntop:10px;\nleft:30px;\nheight:auto;\nposition:absolute;\npadding:2px;\nmargin:3px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactBootstrap = require('react-bootstrap');

var _tdsReactcontextmenu = require('tds-reactcontextmenu');

var _tdsReactcontextmenu2 = _interopRequireDefault(_tdsReactcontextmenu);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledContainer = _styledComponents2.default.div(_templateObject);

var MyWidget = function MyWidget(props) {

    function sortAsc() {
        alert("sortAsc ");
    }

    function sortDesc() {
        alert("sortDesc ");
    }

    function onClose() {
        var container = document.getElementById("columnContextMenu");
        document.body.removeChild(container);
        _reactDom2.default.unmountComponentAtNode(container);
    }

    // const ContextMenu = ({ onClose }) => <StyledContainer>
    var ContextMenu = function ContextMenu() {
        return _react2.default.createElement(
            StyledContainer,
            null,
            _react2.default.createElement(
                'small',
                null,
                props.filterItem,
                '\xA0',
                _react2.default.createElement(
                    'b',
                    null,
                    'Filter'
                )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            props.item,
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
                'small',
                null,
                _react2.default.createElement(
                    'button',
                    { className: 'btn btn-danger', onClick: onClose },
                    _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'glyphicon glyphicon-remove-circle' })
                )
            )
        );
    };

    return _react2.default.createElement(
        'div',
        { ref: _tdsReactcontextmenu2.default.createContextMenu(true, "columnContextMenu", ContextMenu) },
        _react2.default.createElement('label', null)
    );
};

exports.default = MyWidget;