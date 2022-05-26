const fs = require('fs');
const path = require ('path')


const productsPath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'))
const productController = {
    productDetail: (req,res)=>{
        let id = req.params.id;
        
        const product = products.find(product=>{
            if (product.id === +id){
                return product
            }
        })
        res.render('productDetail', {product:product})
    },
    productsList: (req,res)=>{
        res.render('productsList', {products:products})
    }
}
module.exports = productController;