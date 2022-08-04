window.onload = function () {

    let searchInput = document.querySelector('.header-searchbar-input')
    let resultsDiv = document.querySelector('#search-bar')
    let main = document.querySelector('main')
    
    
    main.addEventListener('click', function(){
            resultsDiv.innerHTML = ''
            resultsDiv.classList.remove('search-results')
    })

    fetch('http://localhost:8000/api/list')
        .then(response => response.json())
        .then(products => {
            let allProducts = products.data
            const search = ()=> {



                resultsDiv.classList.add('search-results')
                resultsDiv.innerHTML = '';
                let inputText = searchInput.value.toLowerCase();
                allProducts.forEach(product => {

                      

                    let lowerCaseProduct = product.productName.toLowerCase();
                    if (lowerCaseProduct.indexOf(inputText) !== -1) {
                        resultsDiv.innerHTML += `
    
                    <li id='lis'><a href='http://localhost:8000/products/${product.id}'>${product.productName}<p>${product.creatorName}</p></a></li>
    
                    `

                    }
                   
                   
                  

                });

                if(resultsDiv.innerHTML === ''){
                    resultsDiv.innerHTML += `
    
                    <li>No encontramos ese producto...</li>
    
                    `
                }

            }
                
                searchInput.addEventListener('keyup', search)


        })
}