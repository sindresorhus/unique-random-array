import uniqueRandom from 'unique-random';

export default function uniqueRandomArray(array) {
	const random = uniqueRandom(0, array.length - 1);
	return () => array[random()];
}
