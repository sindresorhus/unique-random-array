import test from 'ava';
import uniqueRandomArray from '.';

test('main', t => {
	const random = uniqueRandomArray([1, 2, 3, 4]);

	let current;
	let previous;
	let i = 100;
	while (i--) {
		current = random();
		t.not(current, previous);
		previous = current;
	}
});
