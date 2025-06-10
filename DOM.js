//task1

        const headingEl = document.querySelector('.heading');
        const btnEl = document.querySelector('.btn');
        
        btnEl.addEventListener('click', () => {
            headingEl.textContent = 'Привет мир!'
        })