import {useSelector} from 'react-redux'
import { useState,useEffect } from 'react'
import './principal.css'
import {Link} from 'react-router-dom'

export default function Principal(){
    //llamamos todo lo que esta es el estado recipientes
    const recipes = useSelector(state=> state.recipes)
    //creamos un estado para ordenarlos
    const [order, setOrder] = useState([])
    // llenamos el estado cada vez que cambie
    useEffect(() => {
        setOrder(recipes)
    }, [recipes])
    // ordenamos asendente
    function onclikAz(){
        let aux=[...recipes]
        aux.sort((a,b)=>{
            if(a.title>b.title){
                return 1
            }else{
                return -1
            }
        })
        setOrder([...aux])
    }
    //ordenamos desendente
    function onclikDc(){
        let aux=[...recipes]
        aux.sort((a,b)=>{
            if(a.title>b.title){
                return -1
            }else{
                return 1
            }
        })
        setOrder([...aux])
    }

    // ordenamos asendente
    function onclikAsPoint(){
        let aux=[...recipes]
        aux.sort((a,b)=>{
            if(a.weightWatcherSmartPoints>b.weightWatcherSmartPoints){
                return 1
            }else{
                return -1
            }
        })
        setOrder([...aux])
    }
    //ordenamos desendente
    function onclikDcPont(){
        let aux=[...recipes]
        aux.sort((a,b)=>{
            if(a.weightWatcherSmartPoints>b.weightWatcherSmartPoints){
                return -1
            }else{
                return 1
            }
        })
        setOrder([...aux])
    }
    
    //hacemos una funcion para mostar lo que viene de la api de comida y de nuestra base de datos 
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
    
    return <div>
        <div className='order'>
            {/*creamos los botones de ordenamiento*/}
            <button onClick={onclikAz} className='bOreder' >A - Z</button>
            <button onClick={onclikAsPoint}className='bOreder' >++</button>
            {/* <button> {'<'} </button>
            <button> {'>'} </button> */}
            <button onClick={onclikDc} className='bOreder'>Z - A</button>
            <button onClick={onclikDcPont} className='bOreder' >--</button>
        </div>
        {
            order.map(recipe=>{
                var key=recipe.id
                return <div className='card-container'>
                    <div className="card u-clearfix">
                        <div className="card-body">
                            <h2 className="card-title">{recipe.title}</h2>
                            <span className="card-description subtle">{muestra(recipe)}</span>
                            <div className="card-read"><Link to={`/home/resetadetalles/${key}`}style={{ textDecoration: 'none', color:'black' }}>Read</Link></div>
                            <span className="card-tag card-circle subtle">P{recipe.weightWatcherSmartPoints}</span>
                        </div>
                        <img src={recipe.image} alt="" className="card-media" />
                    </div>
                    <div className="card-shadow"></div>
                </div>

            })
        }
        

  

    </div>

}
