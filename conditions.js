function fizzBuzz(n = 100){
//No negative numbers
//Example: fizzBuzz(5) -> [1, 2, "Fizz", 4, "Buzz"]
//Explain your logic choices in comments as you code.
//Conditions kata: FizzBuzz-style function that returns an array 
if (n < 1){
     throw new Error('n must be positive');
}
const result = [];
// iterate from 1 to n inclusive
for (let i = 1; i <= n; i += 1) {
    // numbers divisible by 15 -> "fizzbuzz"
    if (i % 15 === 0) {
        result.push("fizzbuzz");
    } else if (i % 3 === 0) {
        // divisible by 3 -> "fizz"
        result.push("fizz");
    } else if (i % 5 === 0) {
        // divisible by 5 -> "buzz"
        result.push("buzz");
    } else {
        // otherwise push the number
        result.push(i);
    }
}

return result;


