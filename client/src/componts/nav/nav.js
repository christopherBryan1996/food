import React from "react"
import { useState } from "react"
import { getBuscar } from "../../actions/index"

function Nav(props){
    //creamos state para usarlo en input
    const [name, setname] = useState('')
    //llenar state
    function onInputChange(e){
        setname(e.target.value)
    }
    //mandar lo que tenga el state y limpiar
    async function handleSubmit(e){
        e.preventDefault()
        props.history.push('/home/resetadetalles')
        setname('')//limpia
    }
    //console.log(props)
    return <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={onInputChange}/>
            <input type='submit' value='Buscar'/>
        </form>
    </div>
}

export default Nav