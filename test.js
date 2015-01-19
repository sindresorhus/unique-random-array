'use strict';
var test = require('ava');
var uniqueRandomArray = require('./');

test(function (t) {
	var curr;
	var prev;
	var rand = uniqueRandomArray([1, 2, 3, 4]);
	var i = 100;

	while (i--) {
		curr = rand();
		t.assert(curr !== prev);
		prev = curr;
	}

	t.end();
});
