// Literal way
let regExpLit = /(ab+c)/i; // "abc"
console.log(regExpLit);

let str = "kjshkjdhabBbbckjdkjdabbbbbbbcksldjlsjd";
console.log(str);

result = str.split(regExpLit, 3);
console.log(result);

str = "    Jone              Doe     , hello ..... kjsdhksjhd";
console.log(str);

let getName = (s) => {
  let arr = s.trim().split(/\s+/, 2);

  return arr.join(" ");
}

console.log(getName(str));
