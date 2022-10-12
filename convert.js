import { createRequire } from 'module';

import validator  from './libs/validator.mjs';
import convertHelp from './libs/convert-help.mjs';


// Create function "require" for import *.json.
const require = createRequire(import.meta.url);

const standatr = require('./data/units/standart.json');
const input = require('./data/input/input.json');

// Validator input data.
if (validator.inputData(input)) {
    // Export data from output.json.
    const fs = require('fs');
    fs.writeFile('./data/output/output.json',
                JSON.stringify(convertHelp.result(input, standatr)), 
                (err, _output) => {if (err) throw err})
}
else {
    console.log('Input data is incorrect.')
}
