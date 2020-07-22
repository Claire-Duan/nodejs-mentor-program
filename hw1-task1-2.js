const csv = require('csvtojson')
const fs = require('fs')

const csvFilePath = './csv/hw1-ex1.csv'
const txtFilePath = './hw1-task1-2.txt'

csv()
  .fromFile(csvFilePath)
  .preFileLine((jsonLine, lineId) => {
    console.log(jsonLine)
    fs.appendFileSync(txtFilePath, jsonLine + '\n')
  })