import { useEffect, useState } from "react"
import axios from 'axios'
export default function CrearDiets(){
    const [name, setname] = useState({
        name:''
    })
    const [estado, setestado] = useState()
    
    function inputChange(e){
        setname((prevState)=>{
            return{
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }
    async function postnsetname(name){
        setestado('')
        await axios.post('http://localhost:3001/api/types/agregar',name)
        await Promise.resolve('ya existe').then(e=>setestado(true)).catch(e=>setestado(false))
    }
   
    function handleSubmit(e){
        e.preventDefault()
        postnsetname(name)
        alert('se agrego')
    }
    
    console.log(estado)
    return <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor=''>Name</label>
            <input type='text' name='name' value={name.name} onChange={inputChange}></input>
            <input type='submit'/>
        </form>
    </div>
}