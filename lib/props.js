'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var base = ['size', 'submitted', 'validated', 'submitting', 'validating'];

var shared = ['clearing', 'resetting', 'isValid', 'isDirty', 'isPristine', 'isDefault', 'isEmpty', 'disabled', 'deleted', 'touched', 'focused', 'blurred', 'changed', 'hasError', 'error'];

var fieldPropsToPick = ['path', 'type', 'bindings', 'options', 'default', 'initial', 'value', 'label', 'placeholder', 'autoFocus', 'related', 'rules'].concat(shared, base);

var formPropsToPick = [].concat(base, shared);

exports.default = {
  fieldPropsToPick: fieldPropsToPick,
  formPropsToPick: formPropsToPick
};
module.exports = exports['default'];