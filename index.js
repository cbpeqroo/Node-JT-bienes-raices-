const express = require('express')

// Crear la app
const app = express()



// Definir el puerto y arrancar el proyecto
const port = 3000;

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})