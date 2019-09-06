'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _glamor = require('glamor');

var _utils = require('../utils');

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

var _ = require('../styles/_.utils');

var _2 = _interopRequireDefault(_);

var _SelectInitialForm = require('../styles/SelectInitialForm');

var _SelectInitialForm2 = _interopRequireDefault(_SelectInitialForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _mobxReact.observer)(function (_ref) {
  var store = _ref.store,
      handlers = _ref.handlers;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'SELECT A FORM'
    ),
    (0, _utils.mapo)(store.menu, function (key, val) {
      return (
        // eslint-disable-next-line
        _react2.default.createElement(
          'button',
          {
            key: key,
            value: key,
            className: (0, _glamor.merge)(_2.default.button, _SelectInitialForm2.default.btn),
            onClick: handlers.handleInitialFormSelect
          },
          _react2.default.createElement(_icons2.default.FaCircleO, { className: _SelectInitialForm2.default.icon }),
          ' ',
          val
        )
      );
    })
  );
});
module.exports = exports['default'];