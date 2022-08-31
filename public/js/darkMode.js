window.addEventListener('load', function(){



    let darkMode =JSON.parse(localStorage.getItem('darkMode'));
    if(!darkMode){

        localStorage.setItem('darkMode', JSON.stringify(false));
    }
    console.log(darkMode);

    let body = document.querySelector('body');
    let cards = document.querySelectorAll('.product');
    let activeButton = document.querySelector('#activeDarkMode');
    let titles = document.querySelectorAll('.featured');
    let innerBox = document.querySelector('.inner-border');
    let icon = document.querySelector('#activeDarkMode i');
    let carrusel = document.querySelector('.productCarousel');
    let profileTexts = document.querySelectorAll('.profile-texts')





    if(darkMode){

        body.classList.add('darkBody')
        body.classList.add('detail-dark-mode')
        cards.forEach(card => {
            card.classList.add('darkCard')
        });
        titles.forEach(title => {
            title.classList.add('darkTitles')
        });
        
        activeButton.classList.add('ligth-mode')
        icon.classList.add('fa-moon')
        icon.classList.add('fa-sun')
        if(carrusel){
            carrusel.classList.add('dark-carrusel')
        }

        profileTexts.forEach(element => {
            element.classList.add('dark-profile')
        });

      

        
        
    }


    
    
    
    activeButton.addEventListener('click', function(e){
        
        if(darkMode){

            darkMode = false;
        }
        else{
            darkMode = true;
        }

        localStorage.setItem('darkMode', JSON.stringify(darkMode));



        
        
        body.classList.toggle('darkBody')
        cards.forEach(card => {
            card.classList.toggle('darkCard')
        });
        titles.forEach(title => {
            title.classList.toggle('darkTitles')
        });
        activeButton.classList.toggle('dark-ligth-mode')
        activeButton.classList.toggle('ligth-mode')
        icon.classList.toggle('fa-moon')
        icon.classList.toggle('fa-sun')
        if(carrusel){
            carrusel.classList.toggle('dark-carrusel')
        }

        profileTexts.forEach(element => {
            element.classList.toggle('dark-profile')
        });

        if(darkMode){
        
        }
    })



})
