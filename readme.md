# unique-random-array [![Build Status](https://travis-ci.org/sindresorhus/unique-random-array.svg?branch=master)](https://travis-ci.org/sindresorhus/unique-random-array)

> Get consecutively unique elements from an array

Useful for things like slideshows where you don't want to have the same slide twice in a row.


## Install

```sh
$ npm install --save unique-random-array
```


## Usage

```js
var uniqueRandomArray = require('unique-random-array');
var rand = uniqueRandomArray([1, 2, 3, 4]);

console.log(rand(), rand(), rand(), rand());
//=> 4 2 1 4
```


## API

### uniqueRandomArray(input)

Returns a function that when called will return a random element that's never the same as the previous.

#### input

*Required*  
Type: `array`


## Related

- [`unique-random`](https://github.com/sindresorhus/unique-random) - Generate random numbers that are consecutively unique


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
