import { useState } from "react"
import './nav.css'
import { Link } from "react-router-dom"



function Nav(){
    //creamos state para usarlo en input
    const [name, setname] = useState('')
    function onchangeStado(e){
        setname(e.target.value)
    }
    console.log(name)
    function handleSubmit(e){
        e.preventDefault()
        setname('')//para limpiar 
    }
    return <div>
        <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/home/creacionResetas'>News</Link></li>
        <li><input type='text' name='buscar' value={name} onChange={onchangeStado} placeholder='Buscar...'/></li>
        
        <li onClick={handleSubmit}><Link to={`/home/resetadetalle/${name}`} >buscar</Link></li>
        
</ul>
    </div>
}

export default Nav