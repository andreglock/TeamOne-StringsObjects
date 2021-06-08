//import functions from index
import { alphabetize_string } from index.js
import { truncate } from index.js

console.log(truncate(str1)); // => "The quick brown fox jumps over the lazy…"
console.log(truncate(str1, 3)); // => "The quick brown…"
console.log(truncate(str1, 5)); // => "The quick brown fox jumps…"

console.log(alphabetize_string("United States")); 