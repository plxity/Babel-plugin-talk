// babel-template to convert a string of code into AST.

const template = require('@babel/template').default

const stringOfCode = `
  function sum (a,b){
    return a + b;
  }
`

const ast = template.ast(stringOfCode);

console.log(ast);

