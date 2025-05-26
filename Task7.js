//task7

const result = [9, 8, 7, 6, 5];

const user = prompt("Угадайте число");

if (result.includes(Number(user))) {
  alert("Угадал!");
} else {
  alert("Не угадал!");
}
