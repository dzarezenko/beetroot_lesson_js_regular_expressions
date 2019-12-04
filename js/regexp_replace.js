let ucfirst = (s) => {
  return s[0].toUpperCase() + s.slice(1);
}

// Literal way
let regExpLit = /(ab+c)/gi; // "abc"
console.log(regExpLit);

let str = "kjshkjdhabBbbckjdkjdabbbbbbbcksldjlsjd";
console.log(str);

let result = str.replace(regExpLit, "---");
console.log(result);

result = str.replace(regExpLit, "-$1-");
console.log(result);

result = str.replace(regExpLit, e => e.toUpperCase());
console.log(result);

result = str.replace(regExpLit, ucfirst);
console.log(result);
