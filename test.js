import test from 'ava';
import uniqueRandomArray from '.';

const fixture = [1, 2, 3, 4];
const iterableFixture = new Set([1, 2, 3, 4]);

function testRandom(t, random) {
	let current;
	let previous;
	let i = 100;
	while (i--) {
		current = random();
		t.not(current, previous);
		previous = current;
	}
}

test('plain array', t => {
	testRandom(t, uniqueRandomArray(fixture));
});

test('iterable', t => {
	testRandom(t, uniqueRandomArray(iterableFixture));
});
