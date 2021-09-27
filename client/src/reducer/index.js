import { GET_DIETS,GET_RECIPES} from "../actions/constants";
//se inicia los estados 
var initialState={
    recipes: [],
    diets: []
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
        default: 
        return {...state}
    }
} 