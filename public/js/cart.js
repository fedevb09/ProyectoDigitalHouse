window.addEventListener('load', function(){
    let cart=[]
    let btn=document.querySelector('.buy-button');
    let id=document.querySelector('.productId').innerHTML;
    let carrito=JSON.parse(localStorage.getItem('carrito'))
    console.log(carrito)
    if(carrito == null){
        console.log('el carrito está vacio')
    }else{
        console.log('el carrito tiene productos')
    }

    btn.addEventListener('click', function() {

        if(carrito != null){
            let nuevoCarrito = cart.push(carrito)
            console.log(cart)
            console.log(typeof(cart))
            nuevoCarrito.push(id)
            console.log(nuevoCarrito)
            localStorage.setItem('carrito',JSON.stringify(nuevoCarrito))
            console.log(nuevoCarrito)
            console.log('se guardo en carrito viejo')

        }else{
            console.log(id)
            cart.push(id)
            console.log(cart)
            console.log(typeof(cart))
            localStorage.setItem('carrito', JSON.stringify(cart))
            console.log('se guardo en carrito nuevo')
            let nuevoCarro=JSON.parse(localStorage.getItem('carrito', carrito))
            console.log(nuevoCarro)
            console.log(typeof(nuevoCarro))
            
        }
    });
})