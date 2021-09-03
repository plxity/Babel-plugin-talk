// Task 2
// In this task we'll change the 'n' to any other variable using path properties.
const babel = require('@babel/core');

const code =  `
  function square(n){
    return n * n;
  }
`


const output  = babel.transformSync(code,{
  plugins:[
    // Write plugin function here
  ]
})

console.log(output.code);

