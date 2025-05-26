//task6

const result = [9, 8, 7, 'a', 6, 5];
result.sort();
const filteredResult = result.filter(item => typeof item === 'number');

console.log(filteredResult);
