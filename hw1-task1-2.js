const csv = require('csvtojson')
const fs = require('fs')
const { pipeline } = require('stream')
const readline = require('readline')

const csvFilePath = './csv/hw1-ex1.csv'
const txtFilePath = './hw1-task1-2.txt'
const readStream = fs.createReadStream(csvFilePath)
const writeStream = fs.createWriteStream(txtFilePath)
const rl = readline.createInterface({
  input: readStream,
  output: writeStream
})

// csv({
//   output: 'line'
// })
//   .fromStream(readStream)
//   .subscribe(jsonLine => {
//     console.log('one line: ', json)
//     writeStream.write(jsonLine)
//   })

readStream.pipe(csv()).pipe(writeStream)

// rl.on('line', csvLine => {
//   csv()
//     .fromString(csvLine)
//     .then(json => {
//       console.log('one line: ', json)
//       writeStream.write(json)
//     })
// })

// pipeline(
//   readStream,
//   writeStream,
//   // () => {
//     // rl.on('line', csvLine => {
//     //   // csv()
//     //   //   .fromString(csvLine)
//     //   //   .then(json => {
//     //   //     console.log('one line: ', json)
//     //   //     writeStream.write(json)
//     //   //   })
//     // })
//   // }
// )
