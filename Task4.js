//task4

function checkUserAge() {
    let age = prompt("Сколько вам лет?");

if (age === null || age.trim() === "" || isNaN(age)) {
    alert("Вы ввели неправильное значение");
    return;
}

age = Number(age);

if (age < 0) {
    alert("Вы ввели неправильное значение");
} else if(age >= 0 && age <=12) {
    alert("Привет друг!");
} else {
    alert("Добро пожаловать!");
}
}

checkUserAge();