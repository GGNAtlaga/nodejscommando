//sync read and write

const fs = require('fs');

const first = fs.readFileSync('./text101/readmetxt.txt','utf-8')
const second = fs.readFileSync('./text101/readmetxtv2.txt','utf-8')

fs.writeFileSync('./text101/text01.txt',`hello by adele ${first , second}: `,
{flag: 'a' })