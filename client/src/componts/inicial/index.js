import './inicial.css'
import { Link } from 'react-router-dom'
export default function Inicial(){
    // se crea la pagina inicial con una imagen de fondo y una boton que mas que nada por imagen y facilidad 
    //es un span 
    return <div className='Inicial'>
        <Link to='/home' style={{ textDecoration: 'none' }}>            
           <span> Home</span>
        </Link>
    </div>
}