import { createRequire } from 'module';

import validator  from './module/validator.mjs';
import convertHelp from './module/convert-help.mjs';


// Create function "require" for import *.json.
const require = createRequire(import.meta.url);
const fs = require('fs');

const standatr = require('./data/units/standart.json');
const input = require('./data/input/input.json');

// Validator data ... 

let data = JSON.stringify(convertHelp.result(input, standatr));
// fs.writeFile('./data/output/output.json', data);
