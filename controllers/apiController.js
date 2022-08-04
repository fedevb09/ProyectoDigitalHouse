const path = require ('path')
const db = require('../src/database/models');

const Products = db.Product;

const apiController = {

    list:(req, res) => {
        Products.findAll()
        .then(products=>(
            res.status(200).json({
                total: products.length,
                data: products,
                status: 200
            })))
    },

}

module.exports = apiController