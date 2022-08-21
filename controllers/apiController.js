const path = require ('path')
const db = require('../src/database/models');

const Products = db.Product;
const Users = db.User

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
    },

    users: (req, res) => {
        Users.findAll()
        .then(users => {
            let apiResponse = users.map(user => {
                return {
                    email: user.dataValues.email,
                    fullName: user.dataValues.fullName,
                    id: user.dataValues.id,
                    detail: `/users/profile/${user.dataValues.id}`
                }
            })
            res.status(200).json({
                count: users.length,
                data: apiResponse
            })
        })
    },

    usersDetail: (req, res) => {
        Users.findByPk(req.params.id)
        .then(user => {
            delete user.dataValues.password
            delete user.dataValues.adress
            delete user.dataValues.phone
            delete user.dataValues.admin
            user.dataValues.profileImage = `http://localhost:8000/images/users/${user.dataValues.profileImage}`
            res.status(200).json({
                data: user 
            })
        })
    }

}

module.exports = apiController