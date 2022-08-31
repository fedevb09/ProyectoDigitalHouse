window.onload = function(){

    let form = document.querySelector('.iraPagar');

    form.addEventListener('submit',(e)=>{

        let errors=[]

        let profileImage = document.querySelector('.miniature-img-box-overflowH')
        console.log(profileImage)

        if(profileImage==null){
            errors.push('debes registrate primero')
        }

        if(errors.length>0){
            e.preventDefault()
            swal({
                title: "Debes iniciar sesión",
                text: "Recuerda que para poder comprar debes estar registrado y haber iniciado sesión",
              });
        }else{
                e.preventDefault()
                swal({
                    title: "compra exitosa",
                    text: "Pronto llegarán tus productos. Gracias por comprar en ArtPlace",
                })
                localStorage.setItem('carrito',JSON.stringify([]))
                let boton = document.querySelector('.swal-button--confirm')
                boton.addEventListener('click',function(){
                    form.submit()
                })
        }
    })
}