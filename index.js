const fs = require('fs');
const getRandomInteger = require('./getRandomNumber');
const generateNames = require('./generateNames');


let resultNumber = process.argv[2] || getRandomInteger();


fs.writeFileSync(`./results/${resultNumber}-names.txt`, `${generateNames(resultNumber)}`)