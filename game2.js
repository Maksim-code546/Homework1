       function generateProblem() {
            // Генерируем случайные числа от 1 до 10
            const num1 = Math.floor(Math.random() * 10) + 1;
            const num2 = Math.floor(Math.random() * 10) + 1;
            
            // Выбираем случайную операцию
            const operations = ['+', '-', '*', '/'];
            const operation = operations[Math.floor(Math.random() * operations.length)];
            
            let problem;
            let answer;
            
            // Формируем задачу и вычисляем ответ
            switch(operation) {
                case '+':
                    problem = `${num1} + ${num2}`;
                    answer = num1 + num2;
                    break;
                case '-':
                    // Убедимся, что результат вычитания не отрицательный
                    problem = `${Math.max(num1, num2)} - ${Math.min(num1, num2)}`;
                    answer = Math.max(num1, num2) - Math.min(num1, num2);
                    break;
                case '*':
                    problem = `${num1} * ${num2}`;
                    answer = num1 * num2;
                    break;
                case '/':
                    // Умножим числа, чтобы деление было без остатка
                    const product = num1 * num2;
                    problem = `${product} / ${num1}`;
                    answer = num2;
                    break;
            }
            
            return { problem, answer };
        }
        
        function startGame() {
            // Генерируем новую задачу
            const { problem, answer } = generateProblem();
            
            // Показываем задачу
            document.getElementById('task').textContent = problem;
            
            // Запрашиваем ответ у пользователя
            const userAnswer = prompt(`Решите пример: ${problem}`);
            
            // Проверяем ответ
            const resultElement = document.getElementById('result');
            
            if (userAnswer === null) {
                resultElement.textContent = 'Вы отменили ввод';
                resultElement.className = 'result';
                return;
            }
            
            const parsedAnswer = parseFloat(userAnswer);
            
            if (isNaN(parsedAnswer)) {
                resultElement.textContent = 'Пожалуйста, введите число!';
                resultElement.className = 'result incorrect';
            } else if (Math.abs(parsedAnswer - answer) < 0.0001) {
                resultElement.textContent = 'Правильно! 👍';
                resultElement.className = 'result correct';
            } else {
                resultElement.textContent = `Неправильно! Правильный ответ: ${answer}`;
                resultElement.className = 'result incorrect';
            }
        }
        
        // Начинаем игру при загрузке страницы
        window.onload = startGame;