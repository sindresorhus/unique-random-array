import {expectType} from 'tsd';
import uniqueRandomArray from './index.js';

expectType<() => number>(uniqueRandomArray([1, 2, 3, 4]));
expectType<() => string | number>(uniqueRandomArray(['1', 2, 3, 4]));
