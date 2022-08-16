window.onload = function(){

    let form = document.querySelector('.form');

    form.addEventListener('submit',(e)=>{

        let errors=[]

        let name = form.productName
        let description = form.description
        let price = form.price
        let img1 = form.productImage1
        let img2 = form.productImage2
        let img3 = form.productImage3

        if(name.value=="" || name.value.length<5 ){
            errors.push('campo obligatorio con minimo 5 caracteres')
            document.querySelector('#message-error').innerText = 'Campo obligatorio con mínimo 5 caracteres';
        }else{
            document.querySelector('#message-error').innerText = '';
        }
        if(price.value == '' || isNaN(price.value)==true ){
            errors.push('Debe ser un número')
            document.querySelector('#message-error3').innerText = 'Debe ser un número';
        }else{
            document.querySelector('#message-error3').innerText = '';
        }
        if(description.value.length<20){
            errors.push('min 20 caracteres')
            document.querySelector('#message-error2').innerText = 'Debe tener mínimo 20 caracteres';
        }else{
            document.querySelector('#message-error2').innerText = '';
        }

        if(errors.length>0){
            e.preventDefault()
            swal({
                title: "Hemos encontrado un error en el formulario",
                text: "Algunos campos no cumplen los requerimientos",
              });
        }else{
            form.submit()
        }

    })
}