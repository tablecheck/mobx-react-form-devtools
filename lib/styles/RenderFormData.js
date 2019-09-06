'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamor = require('glamor');

var _ = require('./_.theme');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  container: (0, _glamor.style)({
    marginLeft: '10px'
  }),
  heading: (0, _glamor.style)({
    color: _2.default.base00,
    padding: '10px',
    margin: '44px 0 0 0',
    background: _2.default.base03,
    fontSize: '15px',
    textTransform: 'uppercase'
  }),
  select: (0, _glamor.style)({
    textAlign: 'right'
  }),
  icon: (0, _glamor.style)({
    marginTop: '-3px'
  }),
  controls: {
    button: (0, _glamor.style)({
      'borderRadius': 0,
      'width': '25%',
      'display': 'block',
      'float': 'left',
      'fontSize': '20px',
      'padding': '3px 0 6px 0',
      'background': _2.default.base01,
      'color': _2.default.base00,
      ':hover': {
        background: _2.default.base03,
        color: _2.default.base00
      },
      ':hover g': {
        color: _2.default.base00
      }
    }),
    icon: (0, _glamor.style)({
      color: _2.default.base00
    }),
    iconOptionsActive: (0, _glamor.style)({
      'color': _2.default.base0B,
      ':hover': {
        color: _2.default.base00
      }
    })
  }
};
module.exports = exports['default'];