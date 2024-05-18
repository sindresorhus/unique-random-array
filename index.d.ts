type EmptyArray = readonly never[] & {length: 0};
type NonEmptyArray<T> = readonly [T, ...T[]] | readonly [...T[], T] | readonly [T, ...T[], T];

/**
Get consecutively unique elements from an array.

@returns A function, that when called, will return a random element that is never the same as the previous.

@example
```
import uniqueRandomArray from 'unique-random-array';

const random = uniqueRandomArray([1, 2, 3, 4]);

console.log(random(), random(), random(), random());
//=> 4 2 1 4
```
*/
export default function uniqueRandomArray<T>(array: EmptyArray): () => undefined;
export default function uniqueRandomArray<T>(array: NonEmptyArray<T>): () => T;
export default function uniqueRandomArray<T>(array: readonly T[]): () => T | undefined;
