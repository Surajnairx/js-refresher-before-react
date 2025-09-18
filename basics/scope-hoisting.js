// Scope & Hoisting
function testScope() {
  if (true) {
    var x = "var is function scoped";
    let y = "let is block scoped";
    console.log(y);
  }
  console.log(x); // works
  // console.log(y); // error
}
testScope();

// Hoisting Example
console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted!";
