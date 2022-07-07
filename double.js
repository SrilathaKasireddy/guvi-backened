

//no dom ,no window & no document 
//instead of window we have global

//all asyc operations present inside global object
//console.log(global)

const dbl=(n) => n * 2;

//console.log("hello world!🌏",dbl(10));

//global object present inside node.js---
//(process.argv)
// console.log(dbl(process.argv[2]));
// console.log(process.argv)
const[ , , num]=process.argv;
console.log(dbl(num));
