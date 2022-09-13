import React,{Component} from 'react';
import {Link} from "react-router-dom"
import "./list.css"

class List extends Component {
    constructor(props){
        super(props)
        this.state={
            descripcion :"ocultar",
            texto: "ver descripcion",
            favMensajito : 'Agregar a Favoritos',

        }
    }
    //si esta que cambie el texto, sino que lo deje como agregar a favs 
    //la tarjeta no sabe si esta en el array y para eso usamos componentDidMount
    componentDidMount(){
        let favoritos = [];
        let recuperoStorage= localStorage.getItem('favoritos')

        if(localStorage.getItem('favoritos') !== null){
            let favoritosToArray = JSON.parse(recuperoStorage)
            favoritos = favoritosToArray
        }
        if(favoritos.includes(this.props.datosMovie.id)){
            this.setState({
                favMensajito: 'Quitar de Favoritos'
            })
            
        }

    }
    descripcion (){
        if(this.state.descripcion === 'ocultar'){
            this.setState({
                descripcion: 'mostrar', texto:'ocultar descripcion'
            })
        }else{
            this.setState({
                descripcion: 'ocultar', texto: 'ver descripcion'
            })
        }
    }
    agregaryQuitarDeFavs(id){
        //esta funcion tiene que agregar un id dentro de un array y guardarlo en localStorage 
        //chequear si el id ya existe, ofrecer al usuario la posibilidad de sacarlo de favs 
        let favoritos = [];
        //preguntamos si tiene algo adentro ya de localStorage
        let recuperoStorage= localStorage.getItem('favoritos')
        //si hay algo dentro del favoritos, que lo agregue y no lo quite
        if(localStorage.getItem('favoritos') !== null){
            //me trae lo que ya tengo
            let favoritosToArray = JSON.parse(recuperoStorage)
            //favoritos ahora pasa a ser lo que tengamos en el storage
            favoritos = favoritosToArray
        }
        //preguntemos si el id ya esta en el array 
        //si esta en el array lo vamos a sacar
        if(favoritos.includes(id)){//includes retorna un booleano (me retorna true o false)
            //si el id esta lo sacamos, y sino se queda (lo hacemos con filter)
            //primer parametro cada elemento del array (elId)
            //por cada elemento lo va a comparar con el arrow function
            //mientras sea distinto la comparacion sea true voy a guardar en el nuevo array 
            //cuando el id sea igual al que entro en el parametro va a sacar el id del array
            favoritos = favoritos.filter(elId => elId !== id)
            //en el caso de que de falso, mostramos al usuario un nuevo texto (quitar de favs)
            this.setState({
                favMensajito: 'Agregar a Favoritos'
            })
        }else{
            favoritos.push(id)
            this.setState({
                favMensajito:'Quitar de Favoritos'
            })
        }
        //transformamos en cadena de texto
        //transforrmaos el array en cadena de texto
        let favoritosToString = JSON.stringify(favoritos) 
        //lo metemos en localStorage 
        localStorage.setItem('favoritos',favoritosToString)
        console.log(localStorage);
    }
    render(){
        return(
            <article className='character-card'>
            <p onClick={()=>this.agregaryQuitarDeFavs(this.props.datosMovie.id)}>{this.state.favMensajito}</p>
            
                <Link to={`/detail/movies/id/${this.props.datosMovie.id}`}>
                <img src= {`https://image.tmdb.org/t/p/w342/${this.props.datosMovie.poster_path}`} alt=""/>
                </Link>
                <h2>{this.props.datosMovie.original_title}</h2>
                
                <div className='description'>
                <p onClick={()=> this.descripcion()} className='card'>{this.state.texto}</p>
                <p className={this.state.descripcion} onClick={this.state.descripcion}>{this.props.datosMovie.overview}</p>
            </div>

            </article>
        )
    }

    //Link o botón "ver más" que debe mostrar/ ocultar la descripción.



}
export default List