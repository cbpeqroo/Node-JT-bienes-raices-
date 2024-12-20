import express from "express";

const router = express.Router();


// Routing
router.get('/', function(req, res){
    res.send('Hola mundo desde express')
});


router.get('/nosotros', function(req, res){
    res.send('Información de nosotros')
});


export default router