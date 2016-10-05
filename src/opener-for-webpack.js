const opener = require('opener');

export default class OpenerForWebpack {

  constructor(options = {}) {
    this.options = options || { url: 'http://localhost:3000' };
    this.isOpen = false;
  }

  apply(compiler) {
    const self = this;
    compiler.plugin('done', (stats) => {
      if (!self.isOpen && !stats.hasErrors()) {
        opener(self.options.url);
        self.isOpen = true; // open only first time
      }
    });
  }
}
