/**
Get consecutively unique elements from an array or an iterable.

@returns A function that when called will return a random element that's never the same as the previous.

@example
```
import uniqueRandomArray = require('unique-random-array');
const random = uniqueRandomArray([1, 2, 3, 4]);

console.log(random(), random(), random(), random());
//=> 4 2 1 4

const randomIterable = uniqueRandomArray(new Set([1, 2, 3, 4]);

console.log(randomIterable(), randomIterable(), randomIterable(), randomIterable());
//=> 4 2 1 4
```
*/
declare function uniqueRandomArray<ValueType>(
	input: Iterable<ValueType>
): () => ValueType;

export = uniqueRandomArray;
