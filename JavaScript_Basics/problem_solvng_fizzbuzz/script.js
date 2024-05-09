//Writing a FizzBuzz program 
//TODO: when a user inputs number - loop from 1 to the entered number
//TODO: if the current number is divisible by 3 then print "Fizz"
//TODO: if the current number is divisible by 5 then print "Buzz"
//TODO: if the current number is divisible by 3 and 5 then print "FizzBuzz"
//TODO: otherwise print the current number

// console.log("Checking if the script is working")

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}