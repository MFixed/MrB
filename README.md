# Started-Express


## Instalacion
Primero que nada se debe instalar los modulos necesario para crear nuestra REST API

# Inicializar NPM 
```bash
npm init
``` 
# Instalar Express
```bash
npm install express cors morgan 
```
# Modulos de desarrollo 

```bash
npm i dotenv nodemon -D
``` 

El modulo dontenv necesita un archivo .env donde se pongas todas las variables de entorno .
Este modulo no es recomendado subir en produccion

El modulo nodemon se utiliza para no tener que resetear el server al hacer una modificacion al codigo para ser ejecutado de necesita crear un script en package.json
```json
"scripts": {
    "start": "node src/index.js && set DEV='FALSE'",
    "dev": "nodemon src/index.js && set DEV='TRUE'"
  },
```

---------------
Crear archivo index.js 

Ejemplo de la pagina oficial de express
[Ejemplo Hello world](https://expressjs.com/es/starter/hello-world.html).

###### Ecmascript ES6

Si se utiliza las nuevas características de Ecmascript ES6
agregar las lineas al package.json
```json
"type": "module",
```

Al importar archivos se necesitara agregarle la extencion .js

---------------

```js
//import 'dotenv/config'
//import morgan from "morgan";
//import express from "express";
//import cors from "cors";
const express = require('express')
const cors = require('cors');
const morgan = require('morgan')

const app = express()



/* Variables de entorno y configuracion

if (process.env.DEV==="FALSE")
{ 
  console.log("EN PRODUCCION")
}
else {
  console.log("EN DESARROLLO")
   require('dotenv').config()
}
*/
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

```
# Fuentes
[ExpressJS (Pagina Oficial)](https://expressjs.com/es/).

[NPM DOTENV](https://www.npmjs.com/package/dotenv).

[NPM Cors](https://www.npmjs.com/package/cors).

[NPM Morgan](https://www.npmjs.com/package/morgan).


Testea tu api con Rest Client una extencion de Visual Studio Code
[RESTCLIENT VSC](https://www.youtube.com/watch?v=3QLcHjNp-08).



# Mi propia documentacion de Modulos ORM 
[Mongoose](#).
[Sequelize](#).
