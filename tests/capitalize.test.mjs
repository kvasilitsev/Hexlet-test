import { strict as assert } from 'assert';
import capitalize from '../src/capitalize.mjs';
assert.equal(capitalize(''), '');
assert.equal(capitalize('hello'), 'Hello');

console.log('Все тесты пройдены!');
