const express = require('express') //creamos constante QUE HACE LLAMADO AL FRAMEWORK QUE DESCARGAMOS
const mysql = require('mysql') // creamos constante refiriendonos al paquete instalado
const myconn = require('express-myconnection')

const cors = require('cors'); 

const routes = require ('./routes') // creamos constante de rutas para hacer llamado de las rutas que tenemos en el archivos routes.js

const app = express()//creamos constante para aplicacion hacia el metodo express
app.use(cors());
app.set('port',process.env.PORT || 3000)//se establece el puerto de escucha

const dbOptions= { // Creamos la constante de las opciones de coneccion de la BD
    host:'localhost',
    port: 3306, // puerto por defecto de coneccion mysql
    user: 'root',
    password: '123ABC123',
    database: 'prueba1',
}
//middleware--------------------------------------------------
app.use(myconn(mysql, dbOptions, 'single')) // BUSCAR INFO
app.use(express.json())

//routes-----------------------------------------
app.get('/', (req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.send('welcome to my API')
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.send('cors problem fixed:)');
})
app.use('/api' , routes) //hace el llamado a la ruta configurada en el route.js
//server running----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))//CON GET HACEMOS EL LLAMADO AL PUERTO QUE ESTABLECIMOS
})// numero de la puerta 9000, creamos funcion para saber si el servidor esta corriendo
//EN TERMINAL EJECUTAMOS EL COMANDO node server.js que es el nombre de este archivo