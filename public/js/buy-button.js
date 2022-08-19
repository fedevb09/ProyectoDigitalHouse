window.addEventListener('load', function(){
    let btn=document.querySelector('.buy-button');
    let id=document.querySelector('.productId').innerHTML;
    let carrito=JSON.parse(localStorage.getItem('carrito'))

    if(carrito == null){
        localStorage.setItem('carrito','[]')
        console.log('nuevo carrito activado')
    }

    if(carrito.length==0){
        console.log('el carrito está vacio')
    }else{
        console.log('el carrito tiene productos')
    }

    btn.addEventListener('click', function() {

        if(carrito != null){
            let nuevoCarrito = JSON.parse(localStorage.getItem('carrito'))
            nuevoCarrito.push(id)
            localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))
            console.log('se guardo en carrito')

        }else{
            carrito.push(id)
            localStorage.setItem('carrito', JSON.stringify(carrito))
            console.log('se guardo en carrito')
        }
    });
})