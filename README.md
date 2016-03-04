# errorable-session [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> errors for session

## Installation

```sh
$ npm install --save errorable-session
```

## Usage

```js
var errorable = require('errorable');
var errorableSession = require('errorable-session');
var Generator = errorable.Generator;
var cnErrors = new Generator(errorableSession, 'zh-CN').errors;
var enUsErrors = new Generator(errorableSession, 'en-US').errors;

```
## License

Apache-2.0 © [calidion](calidion.github.io)


[npm-image]: https://badge.fury.io/js/errorable-session.svg
[npm-url]: https://npmjs.org/package/errorable-session
[travis-image]: https://travis-ci.org/Errorable/errorable-session.svg?branch=master
[travis-url]: https://travis-ci.org/Errorable/errorable-session
[daviddm-image]: https://david-dm.org/Errorable/errorable-session.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Errorable/errorable-session
[coveralls-image]: https://coveralls.io/repos/Errorable/errorable-session/badge.svg
[coveralls-url]: https://coveralls.io/r/Errorable/errorable-session
