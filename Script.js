//Task1
let a = 10;
alert(a);
a = 20;
alert(a);

//Task2
const firstIPhoneYear = 2007;
alert(firstIPhoneYear);

//Task3
const creatorOfJavaScript = "Brendan Eich";
alert(creatorOfJavaScript);

//Task4
let x = 10;
let y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

//Task5
let degree = 2 ** 5;
let result = degree;
alert(result);

//Task6
let c = 9;
let d = 2;
let remains = c % d;
alert(remains);

//Task7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

//Task8
let age = prompt("Сколько вам лет?")
alert(age);

//Task9
const user = {
    name: 'Вася',
    age: 10,
    isAdmin: true
};

//Task10
const userName = prompt("Ваше имя?")
alert(`Привет: ${userName}`);

//conditional branching

//task1
let password = 'пароль';

let enterPassword = prompt('введите пароль');

if (password === 'пароль'){
    alert ("Пароль введен верно");
}
else {
alert("Пароль введен неправильно");
}

//task2
let number = 2;

if (number > 0 &&  number < 10) {
    console.log("Верно");
}
else{
    console.log("Не верно");
}

//task3
let e = 120;
let f = 80;
if (d > 100 || e > 100) {
    console.log('Верно');
}
else {
    console.log('Не верно');
}

//task4
let number1 = '2';
let number2 = '3';

alert (Number(number1) + Number(number2));

//task5
let monthNumber = Number(prompt('Введите номер месяца (1-12)'));

if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
    console.log('Ошибка: введите число от 1 до 12');
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
    }
}