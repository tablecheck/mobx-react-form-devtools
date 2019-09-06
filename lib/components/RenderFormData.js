'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _glamor = require('glamor');

var _reactJsonTree = require('react-json-tree');

var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);

var _SelectMenu = require('./SelectMenu');

var _SelectMenu2 = _interopRequireDefault(_SelectMenu);

var _FormControls = require('./FormControls');

var _FormControls2 = _interopRequireDefault(_FormControls);

var _FormOptions = require('./FormOptions');

var _FormOptions2 = _interopRequireDefault(_FormOptions);

var _parser = require('../parser');

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

var _ = require('../styles/_.utils');

var _2 = _interopRequireDefault(_);

var _RenderFormData = require('../styles/RenderFormData');

var _RenderFormData2 = _interopRequireDefault(_RenderFormData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _mobxReact.observer)(function (_ref) {
  var store = _ref.store,
      handlers = _ref.handlers;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      { className: (0, _glamor.merge)(_RenderFormData2.default.heading, _2.default.clearfix) },
      _react2.default.createElement(
        'div',
        { className: _2.default.left },
        _react2.default.createElement(_icons2.default.FaTh, { className: _RenderFormData2.default.icon }),
        ' Form'
      ),
      _react2.default.createElement(
        'div',
        { className: (0, _glamor.merge)(_2.default.right, _RenderFormData2.default.select) },
        _react2.default.createElement(_SelectMenu2.default, { store: store, handlers: handlers })
      )
    ),
    _react2.default.createElement(_FormControls2.default, { handlers: handlers, store: store }),
    store.showOptions ? _react2.default.createElement(_FormOptions2.default, { form: store.formOptions }) : _react2.default.createElement(_reactJsonTree2.default, {
      className: _2.default.hidden,
      hideRoot: true,
      data: (0, _parser.parseFormData)(store.selected.form),
      theme: store.theme,
      invertTheme: false
    }),
    _react2.default.createElement(
      'h4',
      { className: _RenderFormData2.default.heading },
      _react2.default.createElement(_icons2.default.FaBars, { className: _RenderFormData2.default.icon }),
      ' Fields'
    ),
    _react2.default.createElement(
      'div',
      { className: _RenderFormData2.default.container },
      _react2.default.createElement(_reactJsonTree2.default, {
        hideRoot: true,
        data: (0, _parser.parseFieldsData)(store.selected.form.fields),
        theme: store.theme,
        invertTheme: false
      })
    )
  );
});
module.exports = exports['default'];