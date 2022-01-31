/**

i) Write down a method boolean isNameValid(String  name).
A name is valid if following conditions are satisfied:
• It does not contain any vowel more than once.
• If the name contains two ‘S’, then there is not any ‘T’ in between them (both in capital cases).
//  if 2  Capital S and  one T then return false
**/
// Write Javascript code!

function isNameValid(name) {
  let vowels = "aeiou";
  let vowelCount = 0;
  let countS = 0;
  let countT = 0;

  let letterS = "S";
  let letterT = "T";

  for (let i = 0; i < name.length; i++) {
    if (vowels.toLowerCase().indexOf(name[i].toLowerCase()) > -1) {
      vowelCount++;
    }

    //check if string contains more than one capital S and Capital T
    if (name[i] === letterS.toUpperCase()) {
      countS++;
    }
  }
  //check if string has more then one vowel
  if (vowelCount > 1) return false;

  let firstIndexOfS = name.indexOf(letterS.toUpperCase());
  let lastIndexOfS = name.lastIndexOf(letterS.toUpperCase());

  for (let i = firstIndexOfS; i < lastIndexOfS; i++) {
    if (name[i] === letterT.toUpperCase()) countT++;
  }

  if (countS > 1 && countT > 0) return false;
  return true;
}
let result = isNameValid("ishfqStTSST");
console.log(result);
