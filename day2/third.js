/****
 *
 *
 *  Write a program to print the below pattern
 */

//  \*****/
//  *\***/*
//  **\*/**
//  ***/***
//  **/*\**
//  */***\*
//  /*****\

function createPattern(row) {
  if (isNaN(row)) return "Please enter a valid number!";
  let rowValue = "";
  for (let i = 1; i <= row; i += 2) {
    for (let j = 1; j <= i - 1; j += 2) {
      rowValue += "*";
    }
    rowValue += "\\";
    for (let j = i; j <= row; j++) {
      rowValue += "*";
    }
    rowValue += "/";
    for (let j = 1; j <= i - 1; j += 2) {
      rowValue += "*";
    }
    rowValue += "\n";
  }

  for (let i = 1; i <= row; i += 2) {
    for (j = i; j <= row - 1; j += 2) {
      rowValue += "*";
    }
    rowValue += "/";
    for (let j = 1; j <= i; j++) {
      rowValue += "*";
    }
    rowValue += "\\";
    for (let j = i; j <= row - 1; j += 2) {
      rowValue += "*";
    }
    rowValue += "\n";
  }

  return rowValue;
}

let result = createPattern(5);
console.log(result);
