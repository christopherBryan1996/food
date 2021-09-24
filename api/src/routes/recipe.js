const express = require('express')
const router = express.Router()
const  { v4: uuidv4} =require('uuid')
const axios = require('axios')
const {key} = process.env
const {Recipe, Diet} = require('../db')
const { json } = require('body-parser')
//ver todo
router.get('/',async(req,res)=>{
    let apifood = await axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${key}&addRecipeInformation=true`)
    let apiResul=apifood.data.results
    let dbRecipe=  Recipe.findAll({
        include: {
            model:Diet,
            attributes:['id','name']
        },
        attributes: ['id','title','image','abstract','weightWatcherSmartPoints','nutritionlevel','guide']
    })
    Promise.all([
        apiResul,
        dbRecipe
    ]).then(result=>{
        let apiResult= result[0]
        let dbResult=result[1]
        let allRecipe=apiResult.concat(dbResult)
        res.json(allRecipe)
    })

    
})
//crear
router.post('/agregar',async(req,res)=>{
    const {title,image,abstract,weightWatcherSmartPoints,nutritionlevel,guide,diet}=req.body
    let apifood = await axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${key}`)
    let apiresul=apifood.data.results
    let estado=apiresul.filter(e=>{
        return e.title == title
    })
    if(estado.length==0){
        Recipe.findAll({
            where:{
                title:title
            },
        }).then(async nuevo=>{
            if(nuevo.length==0){
                let recite= await Recipe.create({
                    id:uuidv4(),
                    title: title,
                    image:image,
                    abstract:abstract,
                    weightWatcherSmartPoints:weightWatcherSmartPoints,
                    nutritionlevel:nutritionlevel,
                    guide:guide
                })
                let agregado = await recite.addDiets(diet)
                res.json({existe:'se creo',agregado})
            }else{
                res.json({existe:'existe',nuevo})
            }
        })
    }else{
        res.json({existe:'existe',estado})
    }
    
    
})

//busqueda por query
router.get('/name',async(req,res)=>{
    const title=req.query.name

    let apifood = await axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${key}`)
    let apiresul=apifood.data.results
    let existeApi= apiresul.filter(e=>e.title == title)

    if(existeApi.length==0){
        let existedb= await Recipe.findAll({
            where:{
                title:title
            },
            include:{
                model:Diet,
                attributes:['id','name']
            }
        }).then(e=> e)

        if(existedb.length==0){
            res.json({existe:'no existe'})
        }else{
            res.json({existe:'existe',existedb})
        }
    
    }else{
        res.json({existe:'existe',existeApi})
    }
   
    
    
})
//buscar por id
//GET /recipes/{idReceta}
router.get('/:id',async(req,res)=>{
    const id = req.params.id
    const newId= parseInt(id)
    console.log(newId)
    console.log(typeof newId)
    if(typeof newId === 'number' && id >0){
        console.log('dentro')
        let apifood =await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=0333a70bf12d4836a6086fccb3572746`).catch(e=>res.json(e))
        res.json(apifood)
    }else{
        console.log('afuera')
        let dbfood = await Recipe.findByPk(id).catch(e=>res.json(e))
        res.json(dbfood|| ' d')
    }
    
    
})

module.exports= router