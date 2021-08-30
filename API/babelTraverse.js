// babel-traverse is used for updating or removing our nodes in AST

const traverse = require('@babel/traverse');
const parser = require('@babel/parser');

const code  = `
  function sum (a,b){
    return a + b;
  }
`
const ast = parser.parse(code);
console.log(ast)
traverse(ast,{
  enter(path){
    console.log("Hello, I'm here");
  }
})

