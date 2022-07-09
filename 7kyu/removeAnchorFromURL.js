/*
Complete the function/method so that it returns the url with anything
after the anchor (#) removed.
Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

//Input: string
//Output: string without characters after # otherwise return string
//Plan:
//iterate overstring, if doesn't have '#' return string
//else only add characters before '#'

function removeUrlAnchor(url) {
  let string = "";

  for (let i = 0; i < url.length; i++) {
    if (url[i] === "#") {
      break;
    } else {
      string += url[i];
    }
  }

  return string;
}
