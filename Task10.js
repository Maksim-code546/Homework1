//task10

const numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(Math.floor(Math.random() * 10) + 1);
}

console.log("Исходный массив:", numbers);

for (let i = 0; i < numbers.length; i++) {
  if (i < numbers.length - 1) {
    const sum = numbers[i] + numbers[i + 1];
    console.log(`Сумма элементов ${i} и ${i+1}: ${numbers[i]} + ${numbers[i+1]} = ${sum}`);
  } else {
    console.log(`Последний элемент ${i}: ${numbers[i]} (нет следующего элемента)`);
  }
}