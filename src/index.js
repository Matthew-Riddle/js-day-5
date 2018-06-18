import { readFile, writeFile } from 'fs'
import { readFileSync, writeFileSync } from './lib.js'
import path from 'path'

readFile('build/text.json', (err, data) =>
  console.log(JSON.parse(data).message)
)

console.log('We are done!')

// readFile('package.json', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     const packageData = JSON.parse(data)
//     const { devDependencies = {}, dependencies = {} } = packageData
//     const babelDeps = Object.entries({ ...devDependencies, ...dependencies })
//       .filter(([k, v]) => k.includes('babel'))
//       .reduce((resultObj, [k, v]) => ({ ...resultObj, ...{ [k]: v } }), {})
//     writeFile(
//       'babeldependencies.json',
//       JSON.stringify(babelDeps),
//       (err, data) => {
//         if (err) {
//           console.log(err)
//         } else {
//           console.log('File saved successfully')
//         }
//       }
//     )
//   }
// })

const packageData = readFileSync('package.json')

console.log(writeFileSync('anotherpackage.json', packageData))
