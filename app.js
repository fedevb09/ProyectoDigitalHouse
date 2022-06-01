const express = require('express');
const app = express();
const path = require('path');
const router = require("./routes/main")
const productsRouter = require("./routes/productsRouter")
// override

app.use(express.static('./public'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const port=8000
app.listen(port, ()=> {
    console.log('Servidor corriendo en puerto ' + port)
})

app.use("/", router)
app.use("/products", productsRouter)