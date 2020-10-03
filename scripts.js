(function(){
  "use strict";
  /* Start of your code */
  function greetMe(yourName) {
    alert('Hello ' + yourName);
  }
  
  greetMe('World');
  /* End of your code */
})();

var a;
console.log('The value of a is ' + a); // It'll return The value of a is undefined because a doesn't have a setted value
console.log(a + 2) // It'll return NaN because "a" is undefined 

var n = null;
console.log(n * 32) // Will log 0 to the console because null value behaves as 0.

if(true){
    var x = 5
}
console.log(x) // x is 5

if (true){
    let y = 5
}
console.log(y) // ReferenceError because y isn't defined out the block




