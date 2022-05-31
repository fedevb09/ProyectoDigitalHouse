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
    },

    productRegister: (req, res) => {
        res.render('productRegister')
    },
    productCreate: (req,res)=>{
        console.log(req.files);
        const newId = (products[products.length-1].id)+1;
        let img1 
        let img2
        let img3
        if(req.files.length==3){
           img1 = req.files[0].filename;
            img2 = req.files[1].filename;
            img3 = req.files[2].filename;
        }
        else if (req.files.length == 2){
            img1 = req.files[0].filename
            img2 = req.files[1].filename
            img3 = req.files[1].filename
        }
        else{
            img1 = req.files[0].filename
            img2 = req.files[0].filename
            img3 = req.files[0].filename
        }


        const newProduct = {
            id: newId,
            ...req.body,
            img1: img1,
            img2: img2,
            img3: img3,
            popularity: 3
        }
        
        products.push(newProduct)
        fs.writeFileSync(productsPath, JSON.stringify(products));
        res.redirect('/')
     },

     edit: (req, res) =>{
        let id = req.params.id;
        
        let product = products.find(product => product.id == id);

        res.render('productEdit', {product})

     }

}
module.exports = productController;