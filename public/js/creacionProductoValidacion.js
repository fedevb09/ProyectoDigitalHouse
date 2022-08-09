window.onload = function(){
    
    let form = document.querySelector('.form');

    form.addEventListener('submit',(e)=>{

        let errors=[]

        let name = form.productName
        let description = form.description
        let price = form.price

        if(name.value=="" || name.value.length<5 ){
            errors.push('campo obligatorio con minimo 5 caracteres')
            document.querySelector('#message-error').innerText = 'campo obligatorio con mínimo 5 caracteres';
        
        }else if(isNaN(price.value)==true){
            errors.push('Debe ser un número')
            document.querySelector('#message-error3').innerText = 'Debe ser un número';

        }else if(description.value.length<20){
            errors.push('min 20 caracteres')
            document.querySelector('#message-error2').innerText = 'min 20 caracteres';
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