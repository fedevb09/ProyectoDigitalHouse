window.addEventListener('load', function(){



    let carrito=JSON.parse(localStorage.getItem('carrito'))
    const productList = document.getElementById('product-list')

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

                    const productList = document.getElementById('product-list')
                    const element = document.createElement('div')
                    element.classList.add(`id${producto1.id}`)
                    element.innerHTML = `
                    <div class='card text-center mb-4'>
                        <div class='card-body'>
                            <strong><img src="/images/${product.data.img1}"></strong>
                            <strong>${product.data.productName}</strong>
                            <strong>$${product.data.price}</strong>
                            <strong><input type='number' value='${producto1.quantity}'> </strong>
                            <strong id='totalPrice'>$${product.data.price*producto1.quantity}</strong>

                            <a href='#' class='btn btn-danger' id='${producto1.id}' name='delete'>Delete</a>
                        </div>
                    </div>`
                    productList.appendChild(element)
                })


        }

            deleteProduct(element){

                let idToDelete = element.getAttribute('id')
     
      
                   let newCart = carrito.filter(product =>product.id !== idToDelete)

                   if(element.name === 'delete'){
                   element.parentElement.parentElement.parentElement.remove();
                   }

                   localStorage.setItem('carrito', JSON.stringify(newCart))

            }
     }


    //aqui se llama al carrito que trae el usuario
   


     //se genera la tabla del carrito
     carrito.forEach(function(element){
        let producto=new Product(element.id,element.name, element.quantity)
        let ui = new UI()
        ui.addProduct(producto)
     })




     productList.addEventListener('click', function(e){
        let ui = new UI();
        ui.deleteProduct(e.target);

        carrito=JSON.parse(localStorage.getItem('carrito'))

        let cartTotalAmount = document.querySelector('.cart-total-amount')

        let total = 0;

        carrito.forEach(element => {
            
            total = total+element.quantity
        });

        cartTotalAmount.innerHTML= `<p class='cart-amout-number'>${total}</p>`;
        
     })
     

     

  

})