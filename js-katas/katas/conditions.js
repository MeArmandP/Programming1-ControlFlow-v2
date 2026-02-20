// Conditions kata: FizzBuzz-style function that returns an array for 1..n

function fizzBuzz(n = 100) {
  // TODO: write your solution here (replace the line below).
  // Return an array of values for 1..n following FizzBuzz rules.
  // Example: fizzBuzz(5) -> [1, 2, "Fizz", 4, "Buzz"]
  // Explain your logic choices in comments as you code.
 if (n < 1){
}
const result = []
    for(let i=1; i <= n; i+=1){
      if(i %15 ===0){
        result.push("FizzBuzz");
      }
      else if(i % 3 ===0){
        result.push("Fizz");
      }else if (i % 5 === 0){
        result.push("Buzz");
      } else{
        result.push(i)
      }
     
    }
 
    return result
 
}
fizzBuzz(5);
 
globalThis.__katas = globalThis.__katas || {};
globalThis.__katas.fizzBuzz = fizzBuzz;
