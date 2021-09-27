import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getDiets } from "../../actions"
import axios from 'axios'
import './crear.css'
export default function CreateRecipe(){
    const diets = useSelector(state=> state.diets)
    const [registro, setregistro] = useState({
        title:'',
        image:'',
        summary:'',
        weightWatcherSmartPoints:'',
        healthScorel:'',
        guide:'',
        diet:[]
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDiets())
    }, [])
    console.log(registro)
    function inputChange(e){
        setregistro((prevState)=>{
            return{
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }
    function selecionardietas(id){
        registro.diet.map(e=>{
            if(e==id){
                return alert('ya se agrego')
            }else{
                return setregistro({
                    ...registro,
                    diet:[...registro.diet, id ]
                })
            }
        })
        return setregistro({
            ...registro,
            diet:[...registro.diet, id ]
        })
        
    }
    function vistaDiets(){
        let die=[]
        if(registro.diet.length===0){
            return 'Sin agregar'
        }else{
            registro.diet.map(e=>{
                diets.map(e2=>{
                    if(e==e2.id){
                        die.push(e2.name)
                    }
                })
            })
            return die.join(', ')
        }
    }
    async function handleSubmit(e){
        e.preventDefault()
        await axios.post('http://localhost:3001/api/recipe/agregar',registro)
        alert('Se Agrego la Receta')
    }
    console.log(registro)
    return <div className='principal'>
        <div>
            <h1>Muetra de inicio</h1>
        <div className='card-container'>
                    <div className="card u-clearfix">
                        <div className="card-body">
                            <h2 className="card-title">{registro.title}</h2>
                            <span className="card-description subtle">{}</span>
                            <div className="card-read">Read</div>
                            <span className="card-tag card-circle subtle">P{registro.weightWatcherSmartPoints}</span>
                        </div>
                        <img src={registro.image.length?registro.image:'https://drm2ecjli5gr8.cloudfront.net/efectos/grandes/marco-bob-esponja-caras.jpg'} alt="" className="card-media" />
                    </div>
                    <div className="card-shadow"></div>
                </div>
        </div>
        <div>
            <h1>Crea una receta </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor=''>title</label>
                <input type='text' name='title' value={registro.title} onChange={inputChange} required/>
                <br/>
                <label htmlFor=''>image</label>
                <input type='text' name='image' value={registro.image} onChange={inputChange}/>
                <br/>
                <label htmlFor=''>summary</label>
                <input type='text' name='summary' value={registro.summary} onChange={inputChange} required/>
                <br/>
                <label htmlFor=''>weightWatcherSmartPoints</label>
                <input type='number' name='weightWatcherSmartPoints' value={registro.weightWatcherSmartPoints} onChange={inputChange}/>
                <br/>
                <label htmlFor=''>healthScorel</label>
                <input type='text' name='healthScorel' value={registro.healthScorel} onChange={inputChange}/>
                <br/>
                <label htmlFor=''>guide</label>
                <input type='text' name='guide' value={registro.guide} onChange={inputChange}/>
                <input type='submit'/>
                <p>Agregado: {vistaDiets()}</p>
                {
                    diets.map(diet=>{

                        return <div>
                            <label htmlFor=''>{diet.name}</label>
                            <input type='radio' name='diet' value={diet.id} onClick={()=>selecionardietas(diet.id)} />
                            </div>
                    })
                }
            </form>
            
        </div>
        
    </div>
}