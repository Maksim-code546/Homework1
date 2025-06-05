//task1

const str = 'js';
const upperStr = str.toUpperCase();

console.log(upperStr);

//task2

function filterStringsStartingWith(array, str) {
  const lowerStr = str.toLowerCase();
  return array.filter(item => 
    item.toLowerCase().startsWith(lowerStr)
  );
}

const fruits = ['apple', 'Banana', 'grape', 'apricot', 'Pineapple'];
const result = filterStringsStartingWith(fruits, 'ap');
console.log(result);

//task3

let methodMath = 32.58884;

console.log(Math.floor(methodMath));
console.log(Math.ceil(methodMath));
console.log(Math.round(methodMath));

//task4

const numbers = [52, 53, 49, 77, 21, 32];

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(`${min}`);
console.log(`${max}`);