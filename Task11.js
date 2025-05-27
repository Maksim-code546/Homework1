//task11

function squareArray(numbers) {
  return numbers.map(num => num * num);
}

const inputArray = [1, 2, 3, 4, 5];
const squaredArray = squareArray(inputArray);
console.log(squaredArray);