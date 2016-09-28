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
    compiler.plugin('done', function(stats) {
      if (!self.isOpen && !stats.hasErrors()) {
        opener(self.options.url);
        self.isOpen = true; // open only first time
      }
    });
  }
}
