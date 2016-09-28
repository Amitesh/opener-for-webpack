var opener = require('opener');

export default class OpenerForWebpack {

  constructor(options = {}) {
    this.options = options || {
      url: 'http://localhost:3000'
    };
    this.isOpen = false;
  }

  apply(compiler) {
    var self = this;
    compiler.plugin('done', function() {
      // console.log('\033[32m=== Hello World! ===\33[m');
      // console.log('Build path to open =>', self.options.url);
      if (!self.isOpen) {
        opener(self.options.url);
      }
      self.isOpen = true;
    });
  }
}
