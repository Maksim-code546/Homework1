//task15

const numbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

console.log("Сгенерированный массив:", numbers);
console.log("Среднее арифметическое:", average);