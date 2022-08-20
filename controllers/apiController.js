const path = require ('path')
const db = require('../src/database/models');

const Products = db.Product;

const apiController = {

    list:(req, res) => {
        Products.findAll()
        .then(products=>(
            res.status(200).json({
                count: products.length,
                status: 200,
                data: products
            })))
    },

    products:(req, res) => {

        async function asignacion () {
            let prueba1= await Products.count({
                attributes: ["categoryId"],
                group: "categoryId" })
            let prueba2 = await Products.findAll()

            countByCategory=prueba1
            dataProducts=prueba2
        }

        asignacion()
        .then(()=>{res.status(200).json({
            status: 200,
            count: dataProducts.length,
            countByCategory:countByCategory,
            data: dataProducts
        })})

    },

    product:(req, res) => {
        let productId = req.params.id;

        Products.findByPk(productId)
        .then((productId)=>{
            res.status(200).json({
            status: 200,
            data: productId
        })})
    }

}

module.exports = apiController