// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
// n will always be greater than 2.
//The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.

function sumPolygon(n) {
	return (n - 2) * 180;
}
var result = sumPolygon(10);
console.log(result);