const express = require('express')

// Crear la app
const app = express()

// Routing
app.get('/', function(req, res){
    res.send('Hola mundo desde express')
})

// Definir el puerto y arrancar el proyecto
const port = 3000;

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})