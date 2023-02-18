/*
Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

To illustrate:

profitableGamble(0.2, 50, 9)
... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
*/

function checkPayout(prob, prize, pay) {
    return (prob * prize > pay) ? true : false;
} 
var result = checkPayout(1,0,0)
console.log(result);