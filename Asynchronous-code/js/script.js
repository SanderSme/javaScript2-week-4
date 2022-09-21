//synchronous code examples
// console.log("i");
// console.log("eat");
// console.log("ice cream");
// //one after another

// const a = 10;
// const b = 20;

// console.log(a);
// console.log(b);
// console.log(a + b);
// console.log(a / b);

//asynchronous code
//loads together, at the same time
//Example:
console.log("I");

setTimeout(() => {
  console.log("eat");
}, 3000);

console.log("ice cream");
