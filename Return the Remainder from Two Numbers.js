/* 
There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
Two numbers are passed as parameters. 
The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

The tests only use positive and negative integers.
*/

function findRemainder(a, b) {
    return a % b;
  }
  // Test the function
  var result =  findRemainder(10,20);
  console.log(result);