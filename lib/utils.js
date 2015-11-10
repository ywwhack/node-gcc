'use strict';

var _Promise = require('babel-runtime/core-js/promise')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.exec_p = exec_p;

var _child_process = require('child_process');

// promsify exec

function exec_p(command) {
  return new _Promise(function (resolve, reject) {
    (0, _child_process.exec)(command, function (err, stdout, stderr) {
      if (err) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
}