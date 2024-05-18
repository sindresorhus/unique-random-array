import test from 'ava';
import uniqueRandomArray from './index.js';

test('main', t => {
	const random = uniqueRandomArray([1, 2, 3, 4]);

	let current;
	let previous;
	let index = 100;
	while (index--) {
		current = random();
		t.not(current, previous);
		previous = current;
	}
});

test('empty array', t => {
	const random = uniqueRandomArray([]);
	t.is(random(), undefined);
	t.is(random(), undefined);
	t.is(random(), undefined);
});
