# opener-for-webpack <!-- [![npm package][npm-badge]][npm]
[![Build Status](https://travis-ci.org/Amitesh/opener-for-webpack.svg?branch=master)](https://travis-ci.org/Amitesh/opener-for-webpack)
[![Coverage Status](https://coveralls.io/repos/github/Amitesh/opener-for-webpack/badge.svg)](https://coveralls.io/github/Amitesh/opener-for-webpack) -->

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

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

[npm-badge]: https://img.shields.io/npm/v/opener-for-webpack.svg?style=flat-square
[npm]: https://www.npmjs.com/package/opener-for-webpack

