window.addEventListener('load', function(){

    let name = document.querySelector('#fullName');
    let nameError = document.querySelector('#fullNameError')

    name.addEventListener('change', function(){

        if(name.value.length <2){
            nameError.innerText = 'Debes ingresar un nombre de al menos 2 caractéres'
            name.classList.remove('input-correct-data')
            name.classList.add('input-wrong-data')
        }
        if(name.value.length >=2){
            name.classList.remove('input-wrong-data')
            name.classList.add('input-correct-data')
            nameError.innerText = ""
        }

    })

})