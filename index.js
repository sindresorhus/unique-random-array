'use strict';
const uniqueRandom = require('unique-random');

module.exports = iterable => {
	const array = Array.isArray(iterable) ? iterable : [...iterable];
	const random = uniqueRandom(0, array.length - 1);
	return () => array[random()];
};
