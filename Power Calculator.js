// Create a function that takes voltage and current and returns the calculated power.

function circuitPower(voltage, current) {
	return voltage * current;
}
// Create a function that takes voltage and current and returns the calculated energy.
let voltage = 120;
let current = 5;
let power = circuitPower(voltage, current);
console.log(power);