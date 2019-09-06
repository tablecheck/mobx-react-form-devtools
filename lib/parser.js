'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduce2 = require('lodash/reduce');

var _reduce3 = _interopRequireDefault(_reduce2);

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _mobx = require('mobx');

var _props = require('./props');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var parseFormData = function parseFormData(form) {
  return (0, _mobx.toJS)((0, _pick3.default)(form, _props.formPropsToPick));
};

var getObservableMapValues = function getObservableMapValues(observableMap) {
  return _mobx.values ? (0, _mobx.values)(observableMap) : observableMap.values();
};

var parseFieldsData = function parseFieldsData(fields) {
  return (0, _reduce3.default)(getObservableMapValues(fields), function (obj, field) {
    var $nested = function $nested($fields) {
      return $fields.size !== 0 ? parseFieldsData($fields) : undefined;
    };

    var data = (0, _mobx.toJS)((0, _pick3.default)(field, _props.fieldPropsToPick));

    Object.assign(obj, _defineProperty({}, field.key, Object.assign(data, {
      fields: $nested(field.fields)
    })));

    return obj;
  }, {});
};

exports.default = {
  parseFormData: parseFormData,
  parseFieldsData: parseFieldsData
};
module.exports = exports['default'];