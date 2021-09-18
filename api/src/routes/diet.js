const { Diet } = require('../db');
const express = require('express')
const router = express.Router()
const  { v4: uuidv4} =require('uuid')
//ver todo
router.get('/',(req,res)=>{
    Diet.findAll()
    .then((diet)=>{
        res.json(diet)
    })
})
//agregar
router.post('/agregar',(req,res)=>{
    const {name}= req.body
    Diet.findAll({
        where:{
            name:name
        }
    }).then(existente=>{
        if(existente.length==0){
            Diet.create({
                id: uuidv4(),
                name:name
            }).then(nuevo=>{
                res.json({existe:'se creo',nuevo})
            }).catch(error=>res.json(error))
        }else{
            res.json({existe:'ya existe',existente})
        }
        
    })
})

module.exports = router