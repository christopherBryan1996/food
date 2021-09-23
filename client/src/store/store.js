// se crea el store para usarce en la app
//applyMiddleware es un potenciador de store para acciones asincronocas
import {createStore,applyMiddleware} from 'redux'
// thunk puede ser usado para retrasar el envio de acciones hasta que se cumplan unas linea de codigo asincronas
import thunk from 'redux-thunk'
import reducer from '../reducer'

var store = createStore(reducer,applyMiddleware(thunk))

export default store