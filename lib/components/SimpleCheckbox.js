'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _SimpleCheckbox = require('../styles/SimpleCheckbox');

var _SimpleCheckbox2 = _interopRequireDefault(_SimpleCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _mobxReact.observer)(function (_ref) {
  var field = _ref.field;
  return _react2.default.createElement(
    'label',
    { htmlFor: field.id, className: _SimpleCheckbox2.default.label },
    _react2.default.createElement('input', _extends({}, field.bind(), { className: _SimpleCheckbox2.default.input })),
    ' ',
    field.label || field.name
  );
});
module.exports = exports['default'];