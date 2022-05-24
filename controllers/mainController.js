const fs = require('fs');
const path = require ('path')


const productsPath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'))

const mainController = {
    index: (req, res) => {
        res.render("index", {products:products})
    },

    productDetail: (req, res) => {
        res.render("productDetail")
    },

    cart: (req, res) => {
        res.render("shoppingCart")
    },

    signUp: (req, res) => {
        res.render("signUp")
    },

    logIn: (req, res) => {
        res.render("logIn")
    },

    productRegister: (req, res) => {
        res.render("productRegister")
    },

    productEdit: (req, res) => {
        res.render("productEdit")
    }

}

module.exports = mainController