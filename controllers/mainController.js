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
    },

    productRegister: (req, res) => {
        res.render("productRegister")
    },

    productEdit: (req, res) => {
        res.render("productEdit")
    }

}

module.exports = mainController