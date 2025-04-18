//task4

const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
    };
    
    for (const name in obj) {
        console.log(`${name} - Зарплата ${obj[name]} долларов`);
    }