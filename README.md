# Team One Programming Basic Project

This project has a library of functions. It is divided in two sets of functions, **String functions** and **Object functions** that are stored in the files [**String.mjs**](./String.mjs) and [**Object.mjs**](./Object.mjs) respectively.
Examples of usage are displayed in the files [**string-examples.mjs**](./string-examples.mjs) and [**object-examples.mjs**](./object-examples.mjs).

## String functions:

1. Function to truncate a string to a certain number of words:

```js
console.log(truncate("The quick brown fox jumps over the lazy dog", 4)); // "The quick brown fox"
```

2. Function to alphabetize a given string:

- Note : Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.

```js
console.log(alphabetize_string("United States"));
//"adeeinsStttU"
```

3. Function to convert ASCII to Hexadecimal format:

```js
console.log(ascii_to_hexa("12")); //3132
console.log(ascii_to_hexa("100")); //313030
```

4. Function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th:

```js
console.log(humanize(1)); //"1st"
console.log(humanize(20)); //"20th"
console.log(humanize(302)); //"302nd"
```

5. Function to get the successor of a string:

```js
string.successor("abcd"); // "abce"
string.successor("THX1138"); // "THX1139"
string.successor("< >"); // "< >"
string.successor("1999zzz"); // "2000aaa"
string.successor("ZZZ9999"); // "AAAA0000"
```

## Object functions:

6. Function to sort the following array of objects by a given value:

```js
var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];
//sorted
/*/* {
  author: "Suzanne Collins",
  libraryID: 3245,
  title:"Mockingjay:The Final Book of The Hunger Games"
}, [object Object] {
  author: "Bill Gates",
  libraryID: 1254,
  title: "The Road Ahead"
}, [object Object] {
  author: "Steve Jobs",
  libraryID: 4264,
  title: "Walter Isaacson"
}]*/
```

7. Function to fill an array with values (numeric, string with one character) on supplied bounds:

```js
console.log(num_string_range("a", "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
```

8. Function to print all the properties in an JavaScript object:

```js
console.log(all_properties(Math));
["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"]
console.log(all_properties(Array));
["length", "name", "prototype", "isArray", "from", "of"]
```

9. Function to print all the methods in an JavaScript object:

```js
console.log(all_methods(Array));
["isArray", "from", "of"]
console.log(all_methods(Math));
["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]

```

10. Function to start a Clock and output every second:

```js
"14:37:42";
"14:37:43";
"14:37:44";
"14:37:45";
"14:37:46";
"14:37:47";

```