/**
 * Lets do some math!
 * Some rules first:
 *   - Replace the strings to the right of the = with the math expression they describe.
 *   - Do not manually enter the answers to the equations. For example, `const a = 9` would be incorrect as 9 is the answer to the equation you're being asked to write out
 */

const a = 8+1
const b = 22*3
const c = 5 % 4;
const d = a - 17;
const e = a+b+c+d

if (a === 9) {
  console.log("'a' is correct!")
} else {
  console.log(`'a' is incorrect, got ${a}, expected 9`)
}
console.log("\n");

if (b === 66) {
  console.log("'b' is correct!")
} else {
  console.log(`'b' is incorrect, got ${b}, expected 66`)
}
console.log("\n");

if (c === 1) {
  console.log("'c' is correct!")
} else {
  console.log(`'c' is incorrect, got ${c}, expected 1`)
}
console.log("\n");

if (d === -8) {
  console.log("'d' is correct!")
} else {
  console.log(`'d' is incorrect, got ${d}, expected -8`)
}
console.log("\n");

if (e === 68) {
  console.log("'e' is correct!")
  console.log("\n Congrats! You may move onto the next exercise")
} else {
  console.log(`'e' is incorrect, got ${e}, expected 68`)
}
