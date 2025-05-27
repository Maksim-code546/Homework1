//task12

function getLengthsOfStrings(stringsArray) {
    return stringsArray.map(str => str.length);
}

const input = ["apple", "banana", "cherry", "date"];
const output = getLengthsOfStrings(input);
console.log(output); 