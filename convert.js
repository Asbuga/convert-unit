import { createRequire } from 'module';

import validator  from './module/validator.mjs';
import convertHelp from './module/convert-help.mjs';


// Create function "require" for import *.json.
const require = createRequire(import.meta.url);

// Import data from *.json.
const standatr = require('./data/units/standart.json');
const input = require('./data/input/input.json');

// Validator data ... 


// Export data from output.json.
const output = JSON.stringify(convertHelp.result(input, standatr));

const fs = require('fs');
fs.writeFile('./data/output/output.json', output, (err, _output) => {
    if (err) throw err})
