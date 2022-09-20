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
    //Utilizamos un componentDidMount que es un método que se ejecuta inmediatamente después del primer renderizado del componente.
    componentDidMount(){
        let favoritos = [];
        let recuperoStorage= localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage)
            favoritos = favoritosToArray
        }
        if(favoritos.includes(this.props.datosMovie.id)){
            this.setState({
                favMensajito: 'Quitar de Favoritos'
            })
            
        }

    }
    agregaryQuitarDeFavs(id){
        
        let favoritos = [];
        let recuperoStorage= localStorage.getItem('favoritos')


        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage)
            favoritos = favoritosToArray
        }
        if(favoritos.includes(id)){
            favoritos = favoritos.filter(elId => elId !== id)
            this.setState({
                favMensajito: 'Agregar a Favoritos'
            })
        }else{
            favoritos.push(id)
            this.setState({
                favMensajito:'Quitar de Favoritos'
            })
        }
 
        let favoritosToString = JSON.stringify(favoritos) 
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




}
export default List