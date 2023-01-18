/*const fs=require('fs');
fs.readFile('/../public/assets/img/Turquia',(err,result)=>{
    if(err){
        console.error(err)
    }
    console.log(result);
});*/
//import fs from 'node:fs';
const express = require('express');
const app = express();
const cors = require('cors')
const fs = require('fs')
const morgan = require('morgan');
app.use(morgan('tiny'));
app.use(cors())
app.listen(3000);
console.log('Servidor Express escuhando en el puerto 3000');


app.get('/getImgs', function (req,res) {
const dir='public/assets/img/Turquia';
const files=fs.readdirSync(dir);
    let imagenes=files;
    res.send(imagenes);
});