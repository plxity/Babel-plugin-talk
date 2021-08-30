// babel-parser 

const parser = require('@babel/parser');

const code = `
  function sum () {
    return 1 + 2;
  }
`
console.log(parser.parse(code));