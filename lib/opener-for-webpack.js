'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var opener = require('opener');

var OpenerForWebpack = function () {
  function OpenerForWebpack() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, OpenerForWebpack);

    this.options = options || { url: 'http://localhost:3000' };
    this.isOpen = false;
  }

  _createClass(OpenerForWebpack, [{
    key: 'apply',
    value: function apply(compiler) {
      var self = this;
      compiler.plugin('done', function (stats) {
        if (!self.isOpen && !stats.hasErrors()) {
          opener(self.options.url);
          self.isOpen = true; // open only first time
        }
      });
    }
  }]);

  return OpenerForWebpack;
}();

exports.default = OpenerForWebpack;
module.exports = exports['default'];