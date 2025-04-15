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