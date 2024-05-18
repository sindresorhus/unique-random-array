import {consecutiveUniqueRandom} from 'unique-random';

export default function uniqueRandomArray(array) {
	const random = consecutiveUniqueRandom(0, array.length - 1);
	return () => array[random()];
}
