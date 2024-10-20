
import {fileURLToPath} from 'url';
console.log("importing")
import {dirname} from 'path';


const __filename = fileURLToPath(import.meta.url);
const __direname = dirname(__filename)

//if we are using node version above 20 then we dont need to use url or path 
//filename, dirname are present there by d

console.log(__filename);
console.log(__direname)

 
