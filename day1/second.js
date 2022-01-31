/*** Write a program (without using inbuilt functions
 *
 * and not using Strings or array)
 *
 * to swap first and last digits of any number
 *
 * ****/

function swapNumbers(numbers) {
  let number = numbers.toString();
  let swapedNumber = number % 10;
  let lastNumber = 0;
  for (let i = 1; i < number.length - 1; i++) {
    lastNumber = number[0];
    swapedNumber += number[i];
  }
  swapedNumber += lastNumber;

  return swapedNumber;
}

let result = swapNumbers(1278348);
console.log(result);
