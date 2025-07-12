//task1

        const topEl = document.querySelector('.top');
        const btnTopEl = document.querySelector('.btn-top');

        btnTopEl.addEventListener('click', function () {
            topEl.classList.toggle('top_hidden');

            if (topEl.classList.contains('top_hidden')) {
                btnTopEl.textContent = 'Показать текст';
            } else {
                btnTopEl.textContent = 'Скрыть текст';
            }
        })
        

//task2

        const textEl = document.querySelector('.text');
        const btnTextEl = document.querySelector('.btn-text');

        btnTextEl.addEventListener('click', () => {
            textEl.style.color = 'blue';
        })

//task3

        const headingEl = document.querySelector('.heading');
        const btnEl = document.querySelector('.btn');
        
        btnEl.addEventListener('click', () => {
            headingEl.textContent = 'Привет мир!'
        })


//task4

       const descriptionEl = document.querySelectorAll('.description');

       descriptionEl.forEach(element => {
        element.textContent = 'Измененный текст';
       });

//task5

       const descriptionsEl = document.querySelectorAll('.descriptions');

       descriptionsEl.forEach(element => {
        element.textContent = 'Новый текст';
       });

//task6

        const btnNewEl = document.querySelector('.btnNewElement');

        btnNewEl.addEventListener('click', function(e) {

            const newElement = document.createElement('p');
            newElement.textContent = 'Новый элемент';
            newElement.classList.add('new-paragraph');

            document.body.appendChild(newElement);
        } );

//task7

        const btnRemoveEl = document.querySelector('.btn-remove');

        btnRemoveEl.addEventListener('click', function() {
            const elements = document.querySelectorAll('p.descriptions');
            
            if(elements.length > 0) {
                elements[0].remove();
                
                const remainingElements = document.querySelectorAll('p.descriptions');
                if(remainingElements.length === 0) {
                    btnRemoveEl.textContent = 'Элементы закончились!';
                    btnRemoveEl.disabled = true;
                    console.log('Элементы удалены');
                }
            } 
        });