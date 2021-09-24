import { useParams } from "react-router"
import axios from 'axios'
import { useState,useEffect } from "react"
import './detalles.css'
export default function Detalles(){
    const [detalles, setdetalles] = useState({})
    const{id} =useParams()
    function getRecipesId(id){
        axios.get(`http://localhost:3001/api/recipe/${id}`)
        .then(detalle=>{
            setdetalles(detalle.data[0])
        })
    }
    useEffect(() => {
        getRecipesId(id)
    }, [])
    console.log(detalles)
    function muestra(e){
        let diets = []
        if(e.vegetarian){
            diets.push('Vegetarian')
        }
        if(e.vegan){
            diets.push('Vegan')
        }
        if(e.glutenFree){
            diets.push('GlutenFree')
        }
        if(e.ketogenic){
            diets.push('Ketogenic')
        }
        if(e.lactoVegetarian){
            diets.push('Lacto-Vegetarian')
        }
        if(e.ovoVegetarian){
            diets.push('Ovo-Vegetarian')
        }
        if(e.pescetarian){
            diets.push('Pescetarian')
        }
        if(e.paleo){
            diets.push('Paleo')
        }
        if(e.primal){
            diets.push('Primal')
        }
        if(e.whole30){
            diets.push('Whole30')
        }
        if(e.diets){
            e.diets.map(e2=>{
                diets.push(e2.name)
            })
        }
        return diets.join(' ')
    }
    return <div className='divprincipal'>
        <svg class="svg">
            <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M0.5,0.957 L0.462,1,0.431,0.951,0.386,0.988,0.363,0.935,0.313,0.965,0.298,0.909,0.245,0.931,0.238,0.874,0.182,0.887,0.184,0.829,0.127,0.834,0.138,0.777,0.08,0.773,0.1,0.719,0.044,0.706,0.072,0.655,0.018,0.633,0.053,0.588,0.003,0.558,0.045,0.518,0,0.482,0.048,0.448,0.009,0.405,0.061,0.38,0.029,0.331,0.085,0.314,0.061,0.262,0.118,0.253,0.102,0.197,0.16,0.197,0.153,0.14,0.211,0.149,0.212,0.091,0.268,0.109,0.278,0.052,0.33,0.078,0.349,0.023,0.397,0.057,0.424,0.006,0.465,0.046,0.5,0,0.535,0.046,0.577,0.006,0.604,0.057,0.651,0.023,0.671,0.078,0.722,0.052,0.733,0.109,0.788,0.091,0.79,0.149,0.847,0.14,0.84,0.197,0.898,0.197,0.883,0.253,0.94,0.262,0.916,0.314,0.971,0.331,0.94,0.38,0.992,0.405,0.953,0.448,1,0.482,0.956,0.518,0.997,0.558,0.948,0.588,0.983,0.633,0.929,0.655,0.957,0.706,0.901,0.719,0.92,0.773,0.863,0.777,0.874,0.834,0.816,0.829,0.819,0.887,0.762,0.874,0.756,0.931,0.702,0.909,0.687,0.965,0.638,0.935,0.614,0.988,0.57,0.951,0.539,1"></path></clipPath>
        </svg>

        <div class="wrapper">
            <div class="container">
                <div class="header">
                    <h1>{detalles.title}</h1>
                </div>

            <img class="img img--food" src={detalles.image} alt=""/>
            <h2>summary</h2>
            <p>
                {detalles.summary}
            </p>
            <p>
                <h2>guide</h2>
                {detalles.guide}
            </p>
            <p>
                <h2>diets</h2>
                {muestra(detalles)}
            </p>

            <p>
                weightWatcherSmartPoints:{detalles.weightWatcherSmartPoints}
            </p>

            <p>
                healthScorel:{detalles.healthScorel?true:'√'}
            </p>

             
            </div>
        </div>
    </div>
}