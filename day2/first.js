/***Write a program to remove duplicate values from an array
 * and returns an array of unique values.
 * int[] removeDuplicates(int[]values)
 *
 ***/
const array = [1, 2, 5, 6, "name", "name", 1, 3, 4, 3, 5];

const removeDuplicates = (array) =>
  array.filter((el, index) => array.indexOf(el) == index);

const result = removeDuplicates(array);
console.log(result);
