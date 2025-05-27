//task13

function getNegativeNumbers(numbers) {
    return numbers.filter(num => num < 0);
}

const input = [5, -3, 0, -8, 2, -1, 7];
const output = getNegativeNumbers(input);
console.log(output);