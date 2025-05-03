//task6

function calcCube() {
    const userInput = prompt("Пожалуйста, введите число:");

    if (userInput === null || userInput.trim() === "" || isNaN(userInput)) {
        return "Переданный параметр не является числом";
    }

    const number = Number(userInput);

    const cube = Math.pow(number, 3);
    return `${number} в кубе равняется ${cube}`;
}

for (let i = 0; i <= 10; i++) {
    console.log(calcCube());
}