//task5

function multiplyNumber(a, b) {
    const namA = Number(a);
    const namB = Number(b);

    if (isNaN(namA) || isNaN(namB)) {
     return 'Одно или оба значения не являются числом';   
    }

    return namA * namB;
}

console.log(multiplyNumber(3, 4));
console.log(multiplyNumber(true, 4));
console.log(multiplyNumber(3, null));
console.log(multiplyNumber(3, "текст"));
console.log(multiplyNumber("текст", 3));