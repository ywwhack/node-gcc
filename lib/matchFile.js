'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.fetchHeaders = fetchHeaders;
exports.fetchImplementations = fetchImplementations;
exports.getAllCFilesInDir = getAllCFilesInDir;

var _fsPromise = require('fs-promise');

var _fsPromise2 = _interopRequireDefault(_fsPromise);

var _path = require('path');

var quotesHeader = /#include\s+"(.*)"/g;
exports.quotesHeader = quotesHeader;
// get all "xx.h" in a array

function fetchHeaders(content, headerReg) {
  var matchedHeaderFiles = [];
  var match = undefined;
  while (match = headerReg.exec(content)) {
    matchedHeaderFiles.push(match[1]);
  }
  return matchedHeaderFiles;
}

// get all "xx.c" in a array

function fetchImplementations(headers) {
  return headers.map(function (header) {
    return header.slice(0, -2) + '.c';
  });
}

function getAllCFilesInDir(curDir) {
  var foundCFiles, files, statsPromises, stats, i, subDir;
  return _regeneratorRuntime.async(function getAllCFilesInDir$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        foundCFiles = [];
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(_fsPromise2['default'].readdir(curDir));

      case 3:
        files = context$1$0.sent;
        statsPromises = files.map(function (file) {
          return _fsPromise2['default'].stat(curDir + '/' + file);
        });
        context$1$0.next = 7;
        return _regeneratorRuntime.awrap(_Promise.all(statsPromises));

      case 7:
        stats = context$1$0.sent;
        i = 0;

      case 9:
        if (!(i < stats.length)) {
          context$1$0.next = 29;
          break;
        }

        if ((0, _path.extname)(files[i]) == '.c') {
          foundCFiles.push((0, _path.resolve)(curDir, files[i]));
        }

        if (!(stats[i].isDirectory() && files[i] != 'node_modules')) {
          context$1$0.next = 26;
          break;
        }

        context$1$0.prev = 12;
        subDir = (0, _path.resolve)(curDir, files[i]);
        context$1$0.t0 = foundCFiles.push;
        context$1$0.t1 = foundCFiles;
        context$1$0.next = 18;
        return _regeneratorRuntime.awrap(getAllCFilesInDir(subDir));

      case 18:
        context$1$0.t2 = context$1$0.sent;
        context$1$0.t3 = _toConsumableArray(context$1$0.t2);
        context$1$0.t0.apply.call(context$1$0.t0, context$1$0.t1, context$1$0.t3);
        context$1$0.next = 26;
        break;

      case 23:
        context$1$0.prev = 23;
        context$1$0.t4 = context$1$0['catch'](12);

        console.log(context$1$0.t4);

      case 26:
        i++;
        context$1$0.next = 9;
        break;

      case 29:
        return context$1$0.abrupt('return', foundCFiles);

      case 30:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[12, 23]]);
}