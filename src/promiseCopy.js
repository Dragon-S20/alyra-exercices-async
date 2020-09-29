import fs from 'fs/promises'

// destination.txt will be created or overwritten by default.

const fsPromises = fs.promises

fsPromises
    .copyFile('./file1.txt', './file2.txt')
    .then(() => console.log('source.txt was copied to destination.txt'))
    .catch(() => console.log('The file could not be copied'))
