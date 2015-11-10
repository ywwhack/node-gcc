'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.generateStaticLib = generateStaticLib;

var _configure = require('./configure');

var _utils = require('./utils');

function generateStaticLib(libName) {
  return _regeneratorRuntime.async(function generateStaticLib$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.prev = 0;
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap((0, _utils.exec_p)('gcc -o ' + libName + '.o -c ' + libName + '.c'));

      case 3:
        context$1$0.next = 5;
        return _regeneratorRuntime.awrap((0, _utils.exec_p)('ar -rcs lib' + libName + '.a ' + libName + '.o'));

      case 5:
        context$1$0.next = 11;
        break;

      case 7:
        context$1$0.prev = 7;
        context$1$0.t0 = context$1$0['catch'](0);

        console.log(context$1$0.t0);
        process.exit(1);

      case 11:
        return context$1$0.abrupt('return', 'lib' + libName + '.a');

      case 12:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[0, 7]]);
}