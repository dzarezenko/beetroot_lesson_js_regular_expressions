// Literal way
let regExpLit = /ab+c$/; // "abc"
console.log(regExpLit);

let regExpObj = new RegExp("ab+c$");
console.log(regExpObj);

// abc
// abbc
// abbbbbbbc
// kjshkjdhabbbbckjdkjdabbbbbbbcksldjlsjd

// Obj: test()

console.log(regExpObj.test("abc"));
console.log(regExpObj.test("abbBbbbbc"));
console.log(regExpObj.test("kjshabbbbbbc"));

// String: search()

console.log("abc".search(regExpLit));
console.log("abbBbbbbc".search(regExpLit));
console.log("kjshabbbbbbc".search(regExpLit));

let testRegExp = (str, regExp) => {
  if (str.search(regExp) === -1) {
    return false;
  }

  return true;
}

console.log(testRegExp("abc", regExpLit));
console.log(testRegExp("abbBbbbbc", regExpLit));
console.log(testRegExp("kjshabbbbbbc", regExpLit));
