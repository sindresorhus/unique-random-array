import {expectType} from 'tsd';
import uniqueRandomArray = require('.');

expectType<() => number>(uniqueRandomArray([1, 2, 3, 4]));
expectType<() => string | number>(uniqueRandomArray(['1', 2, 3, 4]));
expectType<() => string | number>(uniqueRandomArray(new Set(['1', 2, 3, 4])));
