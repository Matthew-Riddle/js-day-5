'use strict';

var _fs = require('fs');

var _lib = require('./lib.js');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _fs.readFile)('build/text.json', function (err, data) {
  return console.log(JSON.parse(data).message);
});

console.log('We are done!');

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

var packageData = (0, _lib.readFileSync)('package.json');

console.log((0, _lib.writeFileSync)('anotherpackage.json', packageData));