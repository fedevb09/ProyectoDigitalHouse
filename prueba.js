let db = require('./src/database/models')

let result = db.User.findByPk(1)
    .then((result)=>{
        console.log(result);
    })  

console.log(result);