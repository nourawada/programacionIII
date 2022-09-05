import React,{Component} from 'react';
import {Link} from "react-router-dom"
import "./list.css"

class List extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <article className='character-card'>
                <Link to={`/detail/series/id/${this.props.datosSerie.id}`}>
                <img src= {`https://image.tmdb.org/t/p/w342/${this.props.datosSerie.poster_path}`} alt=""/>
                </Link>
                <h2>{this.props.datosSerie.original_name}</h2>
                <p>{this.props.datosSerie.overview}</p>
                
            </article>
        )
    }

    //Link o botón "ver más" que debe mostrar/ ocultar la descripción.
    //Link o botón “ir a detalle” para ir a la página de detalle del elemento.
    //Link, botón o ícono "agregar/ quitar de favoritos".

}
export default List