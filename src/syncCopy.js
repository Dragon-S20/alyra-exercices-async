import fs from 'fs'

// destination.txt will be created or overwritten by default.
fs.copyFileSync('./file1.txt', './file2.txt')
console.log('file1.txt was copied to file2.txt')
