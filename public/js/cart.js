window.addEventListener('load', function(){

    //en esta parte se crean las clases que se van a usar
    class Product {
        constructor(id,name){
            this.id=id;
            this.name=name;
        }
     }
     class UI{
        addProduct(producto1){
            const productList = document.getElementById('product-list')
            const element = document.createElement('div')
            element.innerHTML = `
            <div class='card text-center mb-4'>
                <div class='card-body'>
                    <strong>id:</strong>${producto1.id}
                    <strong>Nombre:</strong>${producto1.name}
                    <a href='#' class='btn btn-danger' name='delete'>Delete</a>
                </div>
            </div>`

            productList.appendChild(element)

        }

        deleteProduct(){

        }
     }


    //aqui se llama al carrito que trae el usuario
    let carrito=JSON.parse(localStorage.getItem('carrito'))
    console.log(carrito)

    //muestra los valores únicos del carrito
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
      }
    const uniqueProducts = carrito.filter(unique)
    console.log(uniqueProducts)


    //cuenta los valores únicos del carrito
    const countUnique = arr => {
        const counts = {};
        for (let i = 0; i < arr.length; i++) {
           counts[arr[i]] = 1 + (counts[arr[i]] || 0);
        };
        return counts;
     };

     //se genera la tabla del carrito
     uniqueProducts.forEach(function(element){
        let producto=new Product(element.id,element.name)
        let ui = new UI()
        ui.addProduct(producto)
     })

})