import { GET_DIETS,GET_RECIPES, GET_TITLE} from "../actions/constants";
//se inicia los estados 
var initialState={
    recipes: [],
    diets: [],
    busqueda:[]
}

export default function reducer(state=initialState, action){
    switch(action.type){
        //se agrega todo lo que venga de action en los estados
        case GET_RECIPES:
            return {
                ...state,
                recipes: [...action.payload]
            }
        case GET_DIETS:
            return{
                ...state,
                diets: [...action.payload]
            }
        case GET_TITLE:
            return{
                ...state,
                busqueda:[action.payload]
            }
        default: 
        return {...state}
    }
} 