window.addEventListener('load', function(){
    let carrito=JSON.parse(localStorage.getItem('carrito'))
    console.log(typeof(carrito))
    console.log(carrito)

    if(carrito.length==0){
        console.log('el carrito está vacio')
    }else{
        console.log('el carrito tiene productos')
        console.log(carrito)
    }

    //muestra los valores únicos
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
      }
    const uniqueProducts = carrito.filter(unique)
    console.log(uniqueProducts)


    //cuenta los valores únicos
    const countUnique = arr => {
        const counts = {};
        for (let i = 0; i < arr.length; i++) {
           counts[arr[i]] = 1 + (counts[arr[i]] || 0);
        };
        return counts;
     };

     productsCount=countUnique(carrito)
     console.log(productsCount);




})