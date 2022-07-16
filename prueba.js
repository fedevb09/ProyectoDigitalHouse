let db = require('./src/database/models')

// let result = db.User.create({
//     email: 'nacho@admin.com',
//     countryId: 1,
//     password: 'galloclaudio',
//     birthDate: '2020-10-10',
//     fullName: 'Nacho Alquati',
//     admin: 1,
//     profileImage: '/obiwan.png',
//     adress: 'lo de nacho',
//     postalCode: '7600',
//     phone: '1234546',

// })
//     .then((result)=>{
//         console.log(result);
//     })  

// console.log(result);

// db.Order.create({
//     userId: 4,
//     subtotal: 2990,
//     discount: 0,
//     total: 2990,
//     proofOfPayment: 10978628
// })
//     .then(result => console.log(result))

// db.Product.create({
//     categoryId: 1,
//     description: 'Un gran producto',
//     price: 399,
//     img1: 'Cuadro-boba-render-1.png',
//     img2: 'Cuadro-boba-render-1.png',
//     img3: 'Cuadro-boba-render-1.png',
//     sizes: '10X10X40',
//     creatorName: 'JJ Abrams',
//     stock: 159
// })
//     .then(result=> console.log(result))

// db.Country.create({
//     name: 'colombia'
// })
//     .then(result => console.log(result))

// db.Category.create({
//     name: 'Todo'
// })
//     .then(r => console.log(r))

// db.User.findAll()
//     .then(r => console.log(r))

// db.User.findByPk(4, {
// include: [{association: 'pais'}, {association: 'orders'},]
// })
//     .then(r=> console.log(r));

db.Order.findByPk(16, {
    include: [{association: 'hasproducts'}]
})
    .then(r=> console.log(r))