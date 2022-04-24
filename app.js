const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./public'))

app.listen(8000, ()=> {
    console.log('Servidor corriendo en puerto 8000')
})

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})

app.get('/producto', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/productDetail.html'))
})

app.get('/registro', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/signup.html'))
})

app.get('/footer', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/footer.html'))
})