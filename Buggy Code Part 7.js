// Tajul wants to swap two given numbers!.It is not returning the right values. Can you help him fix it?

/* 
a = 100
b = 200
a, b = swap(a, b)
print(a, b) // Should print out "200, 100", but the function prints out "100, 100"
*/


function swap(a, b) {
    let temp = a
    a = b
    b = temp
    return [a, b]
}

var result = swap(10,20);
console.log(result);