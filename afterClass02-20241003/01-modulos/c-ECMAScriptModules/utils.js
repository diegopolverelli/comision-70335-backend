import {fileURLToPath} from 'url';
import url from "url"
import { dirname } from 'path';
import path from "path"

const __filename = fileURLToPath(import.meta.url);
// url.fileURLToPath()
console.log(import.meta.url)
console.log(__filename)
const __dirname = dirname(__filename);
console.log("__dirname", __dirname)
// path.dirname

export default __dirname;

// console.log("first")
// console.log('');
// console.log('');



