import { createRequire } from 'module';

import validator  from './module/validator.mjs';
import convertHelp from './module/convert-help.mjs';


// Create function "require" for import *.json.
const require = createRequire(import.meta.url);
const fs = require('fs');

fs.readFile()