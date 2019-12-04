// Literal way
let regExpLit = /ab+c$/; // "abc"
console.log(regExpLit);

let regExpObj = new RegExp("ab+c");
console.log(regExpObj);

// abc
// abbc
// abbbbbbbc
// kjshkjdhabbbbckjdkjdabbbbbbbcksldjlsjd

// Obj: test()

console.log(regExpObj.exec("abc"));
console.log(regExpObj.exec("abbBbbbbc"));
console.log(regExpObj.exec("kjshabbbbbbc"));
console.log(regExpObj.exec("kjshabbbbbbcksjhdkjhabbbc"));

// String: search()

let str = "abc";

console.log(str.match(/ab+c$/));
console.log("abbBbbbbc".match(regExpLit));
console.log("kjshabbbbbbc".match(regExpLit));
console.log("kjshabbbbbbcksjhdkjhabbbc".match(regExpLit));

console.log("kjshabbbbbbcksjhdkjhabbbc".matchAll(regExpLit));

