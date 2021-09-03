// Task 1
// In this task we'll be removing console.log() from our code with the help of babel plugin.

const babel = require('@babel/core');


// Sample piece of code which we'll use
const code = `function sum (a,b) {
    console.log(a,b);
    return a+b;
}
`


const output  = babel.transformSync(code,{
  plugins:[
    // Write plugin function here
  ]
})

console.log(output.code);
