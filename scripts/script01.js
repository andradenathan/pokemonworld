(function(){
  "use strict";
  /* Start of your code */
  function greetMe(yourName) {
    alert('Hello ' + yourName);
  }
  
  greetMe('World');
  /* End of your code */
})();

/*var a;
console.log('The value of a is ' + a); // It'll return The value of a is undefined because a doesn't have a setted value
console.log(a + 2) // It'll return NaN because "a" is undefined 

var n = null;
console.log(n * 32) // Will log 0 to the console because null value behaves as 0.

if(true){
    var x = 5
}
console.log(x) // x is 5*/


/* Variable Hoisting */

console.log(x === undefined); // true
var x = 3;

/* Function hoisting */
foo(); // "bar"

function foo(){
  console.log('bar');
}


/* You can't declare a constant with the same name as a function or variable */
// e.g
function f(){
  const f = 5;
} // This will cause an error

/* The properties of objects assigned to constants are not protected */
const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';

const MY_ARRAY = ['HTML', 'CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); // logs ['HTML, 'CSS', 'JAVASCRIPT']

/* In JavaScript you don't have to specify the data type of a variable when you declare it
    It also converts the data type as needed during script execution */

var answer = 42;
console.log(answer);
answer = 'Thanks for everything...';
console.log(answer);

console.log('37' - 7) // 30
console.log('37' + 7) // 377

console.log(+1.1 + +1.1) // 2.2





