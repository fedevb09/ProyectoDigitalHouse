window.onload = function(){
    

    let form = document.querySelector('.form');

    form.addEventListener('submit',(e)=>{

        let errors=[]

        let name = form.productName

        if(name.value==""){
            errors.push('campo obligatorio')
            document.querySelector('#message-error').innerText = 'campo obligatorio';
        }

        if(errors.length>0){
            e.preventDefault()
        }else{
            form.submit()
        }

    })
    
}