//task1

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

//task2

function isPositive(num) {
  return num > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(array, ruleFunction) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (ruleFunction(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peopleTestTask2 = [
  {name: 'Глеб', gender: 'male'},
  {name: 'Анна', gender: 'female'},
  {name: 'Олег', gender: 'male'},
  {name: 'Оксана', gender: 'female'}
];

console.log(filter(peopleTestTask2, isMale));

//task3

const interval = setInterval(() => {
    console.log(new Date().toLocaleString());
}, 3000);

setTimeout(() => {
    clearInterval(interval);
    console.log("30 секунд прошло");
}, 30000);