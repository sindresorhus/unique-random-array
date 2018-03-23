import test from 'ava';
import m from '.';

test('main', t => {
	const random = m([1, 2, 3, 4]);

	let current;
	let previous;
	let i = 100;
	while (i--) {
		current = random();
		t.not(current, previous);
		previous = current;
	}
});
