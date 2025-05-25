//task4

const result = [];

for (let i = 0; i < 3; i++) {
    const innerArray = [];

    for (let j = 0; j < 3; j++) {
        innerArray.push(1);
    }

    result.push(innerArray);
}

console.log(result);