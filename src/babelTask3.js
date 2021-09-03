// Task 3
// In this babel plugin we'll convert an arrow function into ES2015 regular function. 

const babel = require('@babel/core');
const types = require('@babel/types');

const code = `
 const sum = (a,b) => { 
    console.log(a,b);
    return 1+ 2;
}
`
const output  = babel.transformSync(code,{
  plugins:[
    // Write plugin function here
  ]
})

console.log(output.code)
