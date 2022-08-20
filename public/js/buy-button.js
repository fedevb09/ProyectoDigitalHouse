window.addEventListener('load', function(){
    let btn=document.querySelector('.buy-button');
    let id=document.querySelector('.productId').innerHTML;
    let name=document.querySelector('.productName').innerHTML;
    let carrito=JSON.parse(localStorage.getItem('carrito'))
    console.log(carrito)

    if(carrito == null){
        localStorage.setItem('carrito','[]')
        console.log('nuevo carrito activado')
    }else{

    }

    if(carrito==null){
        console.log('el carrito está vacio')
    }else{
        console.log('el carrito tiene productos')
    }

    btn.addEventListener('click', function() {

        carrito=JSON.parse(localStorage.getItem('carrito'))
        console.log('boton agregado')
        let productFind=carrito.find((producto => producto.id))

        if(productFind == undefined ){
            let producto={
                id:id,
                name:name,
                quantity:1
            }

            if(carrito != null){
                let nuevoCarrito = JSON.parse(localStorage.getItem('carrito'))
                nuevoCarrito.push(producto)
                localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))
                console.log('se guardo en carrito')
    
            }else{
                carrito.push(producto)
                localStorage.setItem('carrito', JSON.stringify(carrito))
                console.log('se guardo en carrito')
            }

        }

        if(productFind != undefined){
            let nuevoCarrito=carrito.map((producto) => {
                console.log('este es el id guardado',producto.id)
                console.log('este es el id por click',id)
                if(producto.id==id){
                    console.log('entro al if',producto.id)
                    return producto={... quantity=producto.quantity+1}
                }
                return producto
            })
            console.log(nuevoCarrito)
            if(carrito != null){
                localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))
                console.log('se guardo en carrito')
    
            }else{
                carrito.push(producto)
                localStorage.setItem('carrito', JSON.stringify(carrito))
                console.log('se guardo en carrito')
            }
        }

    });
})