import {GET_DIETS,GET_RECIPES, GET_BUSCAR} from './constants'
import axios from 'axios'
// llamamos a las apis para traer la informacion de la base de datos y que se guarden en los estados correspondientes 
export function getRecipes(){
    return function (dispatch){
        return axios.get('http://localhost:3001/api/recipe')
        .then(recipe=>{
            dispatch({
                type:GET_RECIPES,
                payload: recipe.data
            })
        })
    }
}

export function getDiets(){
    return function(dispatch){
        return axios.get('http://localhost:3001/api/types')
        .then(diet=>{
            dispatch({
                type: GET_DIETS,
                payload: diet.data
            })
        })
    }
}
export function getBuscar(name){
    return function(dispatch){
        return axios.get(`http://localhost:3001/api/recipe/name?name=${name}`)
        .then(buscar=>{
            dispatch({
                type: GET_BUSCAR,
                payload: buscar.data
            })
        })
    }
}