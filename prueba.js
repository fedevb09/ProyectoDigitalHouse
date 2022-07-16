let db = require('./src/database/models')

console.log(db.Country.findAll().then(function(generos){return generos})
);          