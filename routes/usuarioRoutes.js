import express from "express";

const router = express.Router();


// Routing
router.get('/', (req, res) =>{
    res.json('Hola mundo desde express')
});


router.post('/', (req, res) =>{
    res.json({msg: 'Respuesta de tipo Post'})
});








export default router