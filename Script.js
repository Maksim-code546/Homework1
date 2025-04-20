//task6

const firstFriday = 1;
const totalMonth = 31;

for (let day = 1; day <= totalMonth; day++) {
    if ((day - firstFriday) % 7 === 0) {
        console.log(`Сегодня пятница, ${day} -е число. Необходимо подготовить отчет.`);
    }
    
}