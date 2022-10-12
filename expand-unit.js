import { createRequire } from 'module';

import validator  from './libs/validator.mjs';
import convertHelp from './libs/convert-help.mjs';


// Create function "require" for import *.json.
const require = createRequire(import.meta.url);

const standatr = require('./data/units/standart.json');
const expand = require('./data/input/expand.json');

// Validator expand data.
if (validator.expandData(expand)) {
    // Export data from output.json.
    const fs = require('fs');
    fs.writeFile('./data/units/standart.json',
                JSON.stringify(Object.assign(standatr, expand)), 
                (err, _output) => {if (err) throw err})
}
else {
    console.log('Input data is incorrect.')
}
