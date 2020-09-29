/*Ecrivez un programme qui copie le fichier file1.txt vers le fichier file2.txt en utilisant les api asynchrones basées sur des promises du module fs de node.js. */

import fs from 'fs/promises'

// destination.txt will be created or overwritten by default.

/*const fsPromises = fs.promises

fsPromises
fs.copyFile('./file1.txt', './file2.txt')
    .then(() => console.log('file1.txt was copied to file2.txt'))
    .catch(() => console.log('The file could not be copied'))*/

console.log('START PROGRAM')

let copyFile1 = await fs.copyFile('./file1.txt', './file2.txt')
console.log(copyFile1)

console.log('END PROGRAM')
