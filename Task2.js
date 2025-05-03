//task2

function evenIsNotEven(number) {
    if (number % 2 === 0) {
        return 'Число чётное';
    }
    else {
        return 'Число не чётное';
    }
}

console.log(evenIsNotEven(5));
console.log(evenIsNotEven(2));