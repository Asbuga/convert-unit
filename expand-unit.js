import { createRequire } from 'module';

import validator  from './module/validator.mjs';


const require = createRequire(import.meta.url);
const input = require('./data/input/input.json');

console.log(validator.inputData(input))
console.log(validator.nameKey(input.unit))
