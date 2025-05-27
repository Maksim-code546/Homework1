//task14

const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

const evenNumbers = randomNumbers.filter(num => num % 2 === 0); 

console.log("Исходный массив:", randomNumbers);
console.log("Массив четных чисел:", evenNumbers);