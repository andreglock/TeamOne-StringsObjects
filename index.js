// 1 Write a JavaScript function to truncate a string to a certain number of words.
let str1 = "The quick brown fox jumps over the lazy dog";

function truncate(str, maxLength = 7) {
    let strToArray = str.split(" ");
    return strToArray.length > maxLength
        ? strToArray.slice(0, maxLength).join(" ") + `…`
        : str;
}

console.log(truncate(str1)); // => "The quick brown fox jumps over the lazy…"
console.log(truncate(str1, 3)); // => "The quick brown…"
console.log(truncate(str1, 5)); // => "The quick brown fox jumps…"

// 2 Write a JavaScript function to alphabetize a given string.
const alphabetize_string = (string) => {
    lettersArray = string.split(/['' ' ']*/);
    lettersArray.sort(function(a, b){
        if(a.toLowerCase() < b.toLowerCase()) { return -1; };
        if(a.toLowerCase() > b.toLowerCase()) { return 1; };
    })
    return lettersArray.join('');
}

// 3 Write a JavaScript function to convert ASCII to Hexadecimal format.

function ascii_to_hexa(str) {
    let arrStorage = [];
    for (let i = 0; i < str.length; i++) {
        const hexa = Number(str.codePointAt(i)).toString(16);
        arrStorage.push(hexa);
    }
    return arrStorage.join("");
}

console.log(ascii_to_hexa("12")); //3132
console.log(ascii_to_hexa("100")); //313030

console.log();

// 4 Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r
const humanize = (number) => {
    if (number % 1 !== 0 || typeof number !== 'number') {
        return 'Invalid input';
    }
    switch (number.toFixed().slice(-1)){
        case '1':
            return `${number}st`;
        case '2':
            return `${number}nd`;
        case '3':
            return `${number}rd`;
        default:
            return `${number}th`;
    }
}

// 5 Write a JavaScript function to get the successor of a string.

// Object

// 6 Write a JavaScript function to sort the following array of objects by title value.

var library = [
    { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        libraryID: 3245,
    },
];

const sorted = (obj) => {
    return obj.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
    });
};

console.log(sorted(library));

// 7 Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

// 8 Write a JavaScript program to create a Clock. Note: The output will come every second.
const clock = () => {
    const printDate = () => {
        let date = `${new Date()}`;
        console.log(date.slice(16, 24));
    }
    setInterval(printDate, 999.8);
}

// 9 Write a JavaScript function to print all the methods in an JavaScript object.

// 10 Write a JavaScript function to print all the properties in an JavaScript object.
const all_properties = (input) => {
    return Object.getOwnPropertyNames(input);
}
