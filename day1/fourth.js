/******
 *
 * Write a function Boolean isValidURL(String url)
 *
 ****/

function isValidURL(url) {
  var pattern = new RegExp("/^([a-z0-9]{5,})$/");

  if (!pattern.test(url)) return "Please enter a valid URL!";

  return url;
}

const result = isValidURL("https://site.com");
console.log(result);

//validate
