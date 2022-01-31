/*****
 *  Find the largest number less than N whose each digit is prime number
 *
 */

function checkPrimeNumber(number) {
  for (let i = 1; i <= number; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) console.log(i);
  }
}

checkPrimeNumber(100);
