window.addEventListener('load', function(){
    let carrito=JSON.parse(localStorage.getItem('carrito'))

    if(carrito.length==0){
        console.log('el carrito está vacio')
    }else{
        console.log('el carrito tiene productos')
        console.log(carrito)
    }

    const unique = (value, index, self) => {
        return self.indexOf(value) === index
      }
    const uniqueProducts = carrito.filter(unique)
    console.log(uniqueProducts)

    

})