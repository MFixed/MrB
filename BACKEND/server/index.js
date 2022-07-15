//import 'dotenv/config'
//import morgan from "morgan";
//import express from "express";
//import cors from "cors";
const express = require('express')
const cors = require('cors');
const morgan = require('morgan')
require('dotenv').config()
const app = express()



// Variables de entorno y configuracion


const port = process.env.PORT || 3000

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

// Router
//app.use("/api",require(''));
var path = require('path');
app.use('/public', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.json({msg:"Bienvenido a mi api rest "})
})

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)


try {
  //Se puede agregar las configuraciones de base de datos en este callback
  //Se recomienda utilizar variables de entorno 

} catch (error) {
  console.error(error);
}


})
