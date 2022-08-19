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

}

module.exports = apiController