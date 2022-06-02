const fs = require('fs');
const path = require('path')


const productsPath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'))
const productController = {
    productDetail: (req, res) => {
        let id = req.params.id;

        const product = products.find(product => {
            if (product.id === +id) {
                return product
            }
        })
        res.render('productDetail', { product: product })
    },
    productsList: (req, res) => {
        res.render('productsList', { products: products })
    },

    productRegister: (req, res) => {
        res.render('productRegister')
    },
    productCreate: (req, res) => {
        console.log(req.files);
        const newId = (products[products.length - 1].id) + 1;
        let img1
        let img2
        let img3
        if (req.files.length == 3) {
            img1 = req.files[0].filename;
            img2 = req.files[1].filename;
            img3 = req.files[2].filename;
        }
        else if (req.files.length == 2) {
            img1 = req.files[0].filename
            img2 = req.files[1].filename
            img3 = req.files[1].filename
        }
        else {
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

    productEdit: (req, res) => {

        const id = req.params.id;
        let productToEdit = products.find(product => {
            if (product.id === +id) {
                return product
            }
        })


        //else{

        // Usar el "name" del imput de la vista para encontrar o identificar la imagen que el usuario desea cambiar.
        productToEdit = {
            id: productToEdit.id,
            ...req.body,
            img1: productToEdit.img1,
            img2: productToEdit.img2,
            img3: productToEdit.img3
        }

        if (req.files.length) {
            req.files.forEach(file => {
                let { fieldname } = file
                switch (fieldname) {
                    case "img1":
                        productToEdit.img1 = file.filename
                        break;
                    case "img2":
                        productToEdit.img2 = file.filename
                        break;
                    case "img3":
                        productToEdit.img3 = file.filename
                        break;
                    default:
                        break;
                }
            })
        }

        let productEdited = products.map(product => {

            if (product.id == productToEdit.id) {
                return product = { ...productToEdit }
            }

            return product
        })

        fs.writeFileSync(productsPath, JSON.stringify(productEdited))

        res.redirect("/products")
    },

    edit: (req, res) => {
        const id = req.params.id;
        let product = products.find(product => product.id == id);

        res.render("productEdit", { product })
    },

    delete: (req, res) => {
        const id = req.params.id;
        let product = products.find(product => product.id == id);

        res.render("productDelete", { product })
    },
    
    
    destroy : (req, res) => {
		
		let idproducto = req.params.id;
		let newProducts=products.filter(product => product.id != idproducto);
	
		fs.writeFileSync(productsPath, JSON.stringify(newProducts))

		res.redirect('/');

	}

}
module.exports = productController;