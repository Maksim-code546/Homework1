//task1

const masiv = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < masiv.length; i++) {
  console.log(masiv[i]);
  if (masiv[i] === 10) {
    break;
  }
}

//task2

const arr = [1, 5, 4, 10, 0, 3];
const index = arr.indexOf(4);

console.log(index);

//task3

let numbs = [1, 3, 5, 10, 20];
let result = numbs.join(' ');

console.log(result);

//task4

const cycle = [];

for (let i = 0; i < 3; i++) {
    const innerArray = [];

    for (let j = 0; j < 3; j++) {
        innerArray.push(1);
    }

    cycle.push(innerArray);
}

console.log(cycle);

//task5

const methodPush = [1, 1, 1];

methodPush.push(2, 2, 2);

console.log(methodPush);

//task6

const methodSort = [9, 8, 7, 'a', 6, 5];
methodSort.sort();
const filteredResult = methodSort.filter(item => typeof item === 'number');

console.log(filteredResult);

//task7

const methodIncludes = [9, 8, 7, 6, 5];

const user = prompt("Угадайте число");

if (methodIncludes.includes(Number(user))) {
  alert("Угадал!");
} else {
  alert("Не угадал!");
}

//task8

const methodReverse = 'abcdef';
const reversResult = methodReverse.split('').reverse().join('');
console.log(reversResult);

//task9

const operatorSpread = [[1, 2, 3],[4, 5, 6]];

const flatArray = [...operatorSpread[0], ...operatorSpread[1]];
console.log(flatArray);

//task10

const cycleFor = [];
for (let i = 0; i < 5; i++) {
  cycleFor.push(Math.floor(Math.random() * 10) + 1);
}

console.log("Исходный массив:", cycleFor);

for (let i = 0; i < cycleFor.length; i++) {
  if (i < cycleFor.length - 1) {
    const sum = cycleFor[i] + cycleFor[i + 1];
    console.log(`Сумма элементов ${i} и ${i+1}: ${cycleFor[i]} + ${cycleFor[i+1]} = ${sum}`);
  } else {
    console.log(`Последний элемент ${i}: ${cycleFor[i]} (нет следующего элемента)`);
  }
}

//task11

function squareArray(numbers) {
  return numbers.map(num => num * num);
}

const inputArray = [1, 2, 3, 4, 5];
const squaredArray = squareArray(inputArray);
console.log(squaredArray);

//task12

function getLengthsOfStrings(stringsArray) {
    return stringsArray.map(str => str.length);
}

const inputStr = ["apple", "banana", "cherry", "date"];
const outputLongStr = getLengthsOfStrings(inputStr);
console.log(outputLongStr);

//task13

function getNegativeNumbers(numbers) {
    return numbers.filter(num => num < 0);
}

const input = [5, -3, 0, -8, 2, -1, 7];
const output = getNegativeNumbers(input);
console.log(output);

//task14

const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

const evenNumbers = randomNumbers.filter(num => num % 2 === 0); 

console.log("Исходный массив:", randomNumbers);
console.log("Массив четных чисел:", evenNumbers);

//task15

const numbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

console.log("Сгенерированный массив:", numbers);
console.log("Среднее арифметическое:", average);