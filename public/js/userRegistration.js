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

    let password = document.querySelector("#password")
    let passowrdError = document.querySelector("#passwordError")

    password.addEventListener('change', function(){
        if(password.value.length < 4){
            passowrdError.innerText = "La contraseña no puede tener menos de 4 caracteres";
            password.classList.remove('input-correct-data');
            password.classList.add('input-wrong-data');
        }else{
            password.classList.remove('input-wrong-data');
            password.classList.add('input-correct-data');
            passowrdError.innerText = ""
        }
    })
    
    let phone = document.querySelector("#phone")
    let phoneError = document.querySelector("#phoneError")

    phone.addEventListener('change', function(){
        if(phone.value.length < 10){
            phoneError.innerText = "El numero de telefono debe tener al menos 10 numeros";
            phone.classList.remove('input-correct-data');
            phone.classList.add('input-wrong-data');
        }else{
            phone.classList.remove('input-wrong-data');
            phone.classList.add('input-correct-data');
            phoneError.innerText = ""
        }
    })


})

