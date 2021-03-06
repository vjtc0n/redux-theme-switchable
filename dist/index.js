'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTheme = exports.i18nThemeState = exports.default = undefined;

var _reducer = require('./reducer');

Object.defineProperty(exports, 'i18nThemeState', {
  enumerable: true,
  get: function get() {
    return _reducer.i18nThemeState;
  }
});

var _actions = require('./actions');

Object.defineProperty(exports, 'setTheme', {
  enumerable: true,
  get: function get() {
    return _actions.setTheme;
  }
});

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default; /*
                                        * Project: redux-i18n
                                        * File: index.js
                                        */