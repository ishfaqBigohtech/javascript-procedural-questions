/****
 *
 * Write a function that takes in a non-empty array of distinct integers and an integer representing a      target sum.
 *
 * The function should find all triplets in the array that sum up to the target sum and return
 * a two-dimensional array of all these triplets.
 *
 * The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be
 * ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the
 * target sum, the function should return an empty array
 *
 */

let array = [1, 2, 2, 3, 5, 6, 7, 7, 9];

const findDuplicates = (array) => {
  if (!array) return "Please enter valid integers!";

  return array.filter((el, index) => array.indexOf(el) == index);
};

const filteredArray = findDuplicates(array);
console.log("duplicates", filteredArray);

// Prints all triplets in arr[] with given sum
function findTriplets(filteredArray, n, sum) {
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (filteredArray[i] + filteredArray[j] + filteredArray[k] == sum) {
          console.log(
            filteredArray[i] +
              " " +
              filteredArray[j] +
              " " +
              filteredArray[k] +
              "<br>"
          );
        }
      }
    }
  }
}

let n = filteredArray.length;
findTriplets(filteredArray, n, -2);
