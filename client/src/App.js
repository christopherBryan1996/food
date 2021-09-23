//import './App.css';
import {Route} from 'react-router-dom'
import { useEffect } from 'react';
import { getRecipes } from './actions';

function App() {
  useEffect(() => {
    getRecipes()
  }, [])
  return (
    <div className="App">
      <Route exact path='/'>
        hola soy ruta inicial
      </Route>
      <Route path='/home'>
        soy nav
      </Route>
      <Route exact path='/home' >
        hola soy ruta principal
      </Route>
      <Route exact path='/home/resetadetalles'>
        soy ruta de detalles
      </Route>
      <Route exact path='/home/creacionResetas'>
        soy creacion de recetas
      </Route>
      <Route exact path='/home/creaciondietas'>
        soy creacion de dietas
      </Route>

    </div>
  );
}

export default App;
