// Create a function that takes the age in years and returns the age in days.
/* 
Use 365 days as the length of a year for this challenge.
Ignore leap years and days between last birthday and now.
Expect only positive integer inputs.
*/

function AgesInDays(Age){
    if (Age > 0 ){
        return Age * 365;
    }
   
}
var result = AgesInDays(10)
console.log(result);