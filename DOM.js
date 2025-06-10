//task1

        const headingEl = document.querySelector('.heading');
        const btnEl = document.querySelector('.btn');
        
        btnEl.addEventListener('click', () => {
            headingEl.textContent = 'Привет мир!'
        })

//task2

        const textEl = document.querySelector('.text');
        const btnTextEl = document.querySelector('.btn-text');

        btnTextEl.addEventListener('click', () => {
            textEl.style.color = 'blue';
        })