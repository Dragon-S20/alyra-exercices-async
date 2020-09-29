/* Réecrivez le programme promiseCopy.js afin qu'il puisse accepter 2 arguments de la ligne de commande:

un fichier source, qui est le fichier à copier
un fichier dest, qui sera la destination de la copie
Comme pour l'exercice précedent utiliser les api asynchrones basées sur des promises du module fs de node.js. */

import fsPromises from 'fs/promises'
import { COPYFILE_EXCL } from 'constants'
import { stat } from 'fs'

const src = process.argv[2]
const dest = process.argv[3]

/*if (process.argv.length !== 4) {
    console.log('Usage: node asyncPromise.js src dest')
}
fsPromises
    .copyFile(src, dest, COPYFILE_EXCL)
    .then(() => console.log('source.txt was copied to destination.txt'))
    .catch(() => console.log('The file could not be copied'))*/

try {
    let stats = await fsPromises.stat(fileSrc)
    if (stat.isFile()) {
        await isFinite.copyFile(fileSrc, fileDest)
        console.log(`Alert: file src n'est pas un fichier`)
    }
} catch (e) {
    console.error(e)
}

console.log('END PROGRAM')
