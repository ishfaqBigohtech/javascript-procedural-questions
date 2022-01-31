/***
 *
 * Write a program to find the smallest number divisible by all the numbers between 1 to 9
 *
 */

function findSmallestNumber(number) {
  for (let i = 1; i <= 9; i++) {
    if (number % i != 0) return false;

    return true;
  }
}

let result = findSmallestNumber(9);
console.log(result);

//find a number
