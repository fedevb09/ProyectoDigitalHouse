const fs = require('fs');
const path = require ('path')


const productsPath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'))

const mainController = {
    index: (req, res) => {
        res.render("index", {products:products})
    },

    cart: (req, res) => {
        res.render("shoppingCart")
    }
}

module.exports = mainController