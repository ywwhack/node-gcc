'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _configure = require('./configure');

var _utils = require('./utils');

exports['default'] = function callee$0$0(fileName) {
  var imples = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
  var libs = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
  var compileCommand, implestr, libstr;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        compileCommand = 'gcc ' + fileName + ' -I ' + _configure.INCLUDE_PATH + ' -L ' + _configure.LIB_PATH + ' ';
        implestr = '';
        libstr = '';

        if (imples.length) {
          implestr = imples.join(' ');
        }
        if (libs.length) {
          libs.forEach(function (lib) {
            libstr += '-l' + lib + ' ';
          });
        }

        compileCommand += implestr + ' ' + libstr;
        context$1$0.prev = 6;
        context$1$0.next = 9;
        return _regeneratorRuntime.awrap((0, _utils.exec_p)(compileCommand));

      case 9:
        context$1$0.next = 14;
        break;

      case 11:
        context$1$0.prev = 11;
        context$1$0.t0 = context$1$0['catch'](6);

        console.log(context$1$0.t0);

      case 14:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[6, 11]]);
};

module.exports = exports['default'];