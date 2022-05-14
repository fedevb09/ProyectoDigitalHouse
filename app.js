const express = require('express');
const app = express();
const path = require('path');
const router = require("./routes/main")

app.use(express.static('./public'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(8000, ()=> {
    console.log('Servidor corriendo en puerto 8000')
})

app.use("/", router)