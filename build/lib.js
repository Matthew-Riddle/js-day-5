'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeFileSync = exports.readFileSync = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _url = require('url');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readFileSync = exports.readFileSync = function readFileSync(fileName) {
  return JSON.parse(_fs2.default.readFileSync(fileName));
};

var writeFileSync = exports.writeFileSync = function writeFileSync(fileName, data) {
  return _fs2.default.writeFileSync(fileName, JSON.stringify(data)) || 'File ' + fileName + ' saved successfully';
};