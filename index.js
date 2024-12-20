import express from 'express'
import usuariosRoutes from './routes/usuarioRoutes.js';

// Crear la app
const app = express()

// Routing
app.use('/', usuariosRoutes);

// Definir el puerto y arrancar el proyecto
const port = 3000;

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})