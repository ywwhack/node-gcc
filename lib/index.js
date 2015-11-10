#!/usr/bin/env node
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _fsPromise = require('fs-promise');

var _fsPromise2 = _interopRequireDefault(_fsPromise);

var _pack = require('./pack');

var _pack2 = _interopRequireDefault(_pack);

var _compile = require('./compile');

var _compile2 = _interopRequireDefault(_compile);

var _matchFile = require('./matchFile');

var operation = process.argv[2];
var CWD = process.cwd();

if (operation == 'pack') {
  var moduleName = process.argv[3];
  (0, _pack2['default'])(moduleName);
} else if (operation == 'compile') {
  (function () {
    var compileFileName = process.argv[3];
    (0, _matchFile.getAllCFilesInDir)(CWD).then(function (c_files) {
      var compileFileIndex = c_files.indexOf(compileFileName);
      c_files.splice(compileFileIndex, 1);
      (0, _compile2['default'])(compileFileName, c_files);
    })['catch'](function (reason) {
      console.log(reason);
    });
  })();
} else {
  console.log('Unkown Operation');
}