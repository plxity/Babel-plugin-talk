// babel-parser is used to parse the code. Used in the actuall babel module.

const parser = require('@babel/parser');

const code = `
  function sum () {
    return 1 + 2;
  }
`
console.log(parser.parse(code));

