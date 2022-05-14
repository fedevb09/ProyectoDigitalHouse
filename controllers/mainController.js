const mainController = {
    index: (req, res) => {
        res.render("index")
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
    }
}

module.exports = mainController