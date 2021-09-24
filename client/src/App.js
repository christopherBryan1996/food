//import './App.css';
import {Route} from 'react-router-dom'
import { useEffect } from 'react';
import { getRecipes } from './actions';
import Inicial from './componts/inicial';
import Nav from './componts/nav/nav';
import Detalles from './componts/detalles/detalles';
import Principal from './componts/principal';
import { useDispatch } from 'react-redux';
//iniciamos desde un principio todo lo que traiga la api de recetas 
function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getRecipes())
  }, [])
  return (
    //creamos las rutas para desplazarnos entre paqinas
    <div className="App">
      <Route exact path='/'>
        <Inicial/>
      </Route>
      <Route path='/home' component={Nav}/>
      <Route exact path='/home' >
        <Principal/>
      </Route>
      <Route exact path='/home/resetadetalles/:id' component={Detalles}/>
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
