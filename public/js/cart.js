window.addEventListener('load', function(){

    //en esta parte se crean las clases que se van a usar
    class Product {
        constructor(id,name,quantity){
            this.id=id;
            this.name=name;
            this.quantity=quantity;
        }
     }
     class UI{
        addProduct(producto1){


            fetch(`http://localhost:8000/api/product/${producto1.id}`)
                .then(response => response.json())
                .then(product => {
                    console.log(product);
                    const productList = document.getElementById('product-list')
                    const element = document.createElement('div')
                    element.innerHTML = `
                    <div class='card text-center mb-4'>
                        <div class='card-body'>
                            <strong><img src="/images/${product.data.img1}"></strong>
                            <strong>${product.data.productName}</strong>
                            <strong>$${product.data.price}</strong>
                            <strong>${producto1.quantity}</strong>
                            <strong>$${product.data.price*producto1.quantity}</strong>

                            <a href='#' class='btn btn-danger' name='delete'>Delete</a>
                        </div>
                    </div>`
        
                    productList.appendChild(element)
                })


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
        let producto=new Product(element.id,element.name, element.quantity)
        let ui = new UI()
        ui.addProduct(producto)
     })

})