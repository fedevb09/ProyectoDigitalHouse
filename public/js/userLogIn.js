window.addEventListener('load', function(){

    let mail = document.querySelector('#email');
    let mailError = document.querySelector('#emailError')

    mail.addEventListener('change', function(){

        if(mail.value.length < 0){
            mailError.innerText = 'Hay un error en el correo.'
            mail.classList.remove('input-correct-data')
            mail.classList.add('input-wrong-data')
        }
        if(mail.value.length >=2){
            mailError.classList.remove('input-wrong-data')
            mail.classList.add('input-correct-data')
            nameError.innerText = ""
        }

    }) 

    let password = document.querySelector("#password")
    let passowrdError = document.querySelector("#passwordError")

    password.addEventListener('change', function(){
        if(password.value(0)){
            passowrdError.innerText = "La contraseña es incorrecta";
            password.classList.remove('input-correct-data');
            password.classList.add('input-wrong-data');
        }else{
            password.classList.remove('input-wrong-data');
            password.classList.add('input-correct-data');
            passowrdError.innerText = ""
        }
    })

})