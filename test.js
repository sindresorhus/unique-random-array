import test from 'ava';
import fn from './';

test(t => {
	const rand = fn([1, 2, 3, 4]);
	let curr;
	let prev;
	let i = 100;

	while (i--) {
		curr = rand();
		t.not(curr, prev);
		prev = curr;
	}
});
