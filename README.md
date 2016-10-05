# opener-for-webpack

A simple plugin to open the app in browser after compiling the code by webpack

## Installation

  `npm install -D opener-for-webpack`

## Usage

```js
    const OpenerForWebpack = require('opener-for-webpack');
    module.exports = {
      entry: "./app.js",
      output: {
      },
      plugins: [
        new OpenerForWebpack({url: 'http://localhost:8090'})
      ]
    };
```

### With webpack-multi-configurator plugin with angularity

```js
var angularity = require('webpack-angularity-solution');
var opener     = require('opener-for-webpack');

const PORT = '3000';

module.exports = angularity(process.env, {port: PORT})
  .append(openTheApp)
  .otherwise('app+test')
  .resolve();


function openTheApp(configurator, options) {
  var url = 'http://localhost' + (options.port ? ':' + options.port : '');
  return configurator
    .plugin('opener-for-webpack', opener, [{url: url}]);
}
```

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

[npm-badge]: https://img.shields.io/npm/v/opener-for-webpack.svg?style=flat-square
[npm]: https://www.npmjs.com/package/opener-for-webpack

