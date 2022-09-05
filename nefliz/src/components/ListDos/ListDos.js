import React,{Component} from 'react';
import {Link} from "react-router-dom"
import "./listdos.css"

class ListDos extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <article className='character-card'>
                <Link to={`/detail/peliculas/id/${this.props.datosPelicula.id}`}>
                <img src= {`https://image.tmdb.org/t/p/w342/${this.props.datosPelicula.poster_path}`} alt=""/>
                </Link>
                <h2>{this.props.datosPelicula.original_title}</h2>
                <p>{this.props.datosPelicula.overview}</p>
            </article>
        )
    }
    
    //Link o botón "ver más" que debe mostrar/ ocultar la descripción.
    //Link o botón “ir a detalle” para ir a la página de detalle del elemento.
    //Link, botón o ícono "agregar/ quitar de favoritos".

}
export default ListDos