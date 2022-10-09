import { createRequire } from 'module';

import validator  from './validator/validator.mjs';
import convertHelp from './module/convert-help.mjs';


// Create function "require" for import *.json.
const require = createRequire(import.meta.url);
const fs = require('fs');

const standatr = require('./data/units/standart.json');
const input = require('./data/input/input.json');

// Validator data ... 


// Convert units.
const result = {
    unit: input.convert_to,
    value: convertHelp.convertUnits(input, standatr),
};

let data = JSON.stringify(result)
fs.writeFile('./data/output/output.json', data);
