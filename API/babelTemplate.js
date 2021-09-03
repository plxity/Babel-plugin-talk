// babel-template to convert a string of code into AST.

const template = require('@babel/template').default
const generate = require('@babel/generator').default;
const t = require('@babel/types');

// Example 1
const stringOfCode = `
  function sum (a,b){
    return a + b;
  }
`

const ast = template.ast(stringOfCode);

console.log(ast);


// Example 2

const buildVariable = template(`
  let VARIABLE_NAME = VALUE
`)

const ast2 = buildVariable({
  VARIABLE_NAME: t.identifier("temp"),
  VALUE: t.numericLiteral(2)
})

console.log(generate(ast2).code);
