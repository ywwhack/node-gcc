'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _fsPromise = require('fs-promise');

var _fsPromise2 = _interopRequireDefault(_fsPromise);

var _utils = require('./utils');

var _configure = require('./configure');

var _generateLib = require('./generateLib');

exports['default'] = function pack(moduleName) {
  var stat, cpHeader, cpLib, rmLib;
  return _regeneratorRuntime.async(function pack$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        stat = undefined;
        context$1$0.prev = 1;
        context$1$0.next = 4;
        return _regeneratorRuntime.awrap(_fsPromise2['default'].stat(_configure.C_MODULES));

      case 4:
        stat = context$1$0.sent;
        context$1$0.next = 11;
        break;

      case 7:
        context$1$0.prev = 7;
        context$1$0.t0 = context$1$0['catch'](1);

        console.log(_configure.C_MODULES + ' not exits.');
        process.exit(1);

      case 11:
        if (!stat) {
          context$1$0.next = 31;
          break;
        }

        cpHeader = 'cp ./' + moduleName + '.h ' + _configure.INCLUDE_PATH + '/' + moduleName + '.h';
        cpLib = 'cp ./lib' + moduleName + '.a ' + _configure.LIB_PATH + '/lib' + moduleName + '.a';
        rmLib = 'rm ./' + moduleName + '.o ./lib' + moduleName + '.a';
        context$1$0.prev = 15;
        context$1$0.next = 18;
        return _regeneratorRuntime.awrap((0, _generateLib.generateStaticLib)(moduleName));

      case 18:
        context$1$0.next = 20;
        return _regeneratorRuntime.awrap((0, _utils.exec_p)(cpHeader));

      case 20:
        context$1$0.next = 22;
        return _regeneratorRuntime.awrap((0, _utils.exec_p)(cpLib));

      case 22:
        context$1$0.next = 24;
        return _regeneratorRuntime.awrap((0, _utils.exec_p)(rmLib));

      case 24:
        console.log('sucess!');
        context$1$0.next = 31;
        break;

      case 27:
        context$1$0.prev = 27;
        context$1$0.t1 = context$1$0['catch'](15);

        console.log(context$1$0.t1);
        process.exit(2);

      case 31:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[1, 7], [15, 27]]);
};

module.exports = exports['default'];