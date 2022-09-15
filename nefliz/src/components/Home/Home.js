import React, {Component} from 'react';
import List from '../List/List';
import ListDos from '../ListDos/ListDos';
import "./home.css"


class Home extends Component{
    constructor(){
        super()
        this.state = {
            movies: [],
            peliculas: [],
            peliculasFiltradas: [],
            value:'',
            data:[] //elementos de busqueda 

        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b8041f10f73b7178ac9637ccbb409920`)
        .then(res => res.json())          
        .then(data => {
            console.log(data);
            this.setState({
            movies:data.results,
            moviesBackup: data.results
        })
    })
        .catch(e=>console.log(e))
        
        
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=b8041f10f73b7178ac9637ccbb409920`)
        .then(res => res.json())          
        .then(data => this.setState({
            peliculas:data.results,
            

        }))
        .catch(e=>console.log(e))
// Funcion que con un filter agarra el array que vos tenes arriba y guarda lo que vos buscas(el texto que te pasa el usuario)
};

    evitarSubmit(e) {
    e.preventDefault()
    }


    controlarCambios(e) {
        this.setState({value: e.target.value}, () => {{}
        console.log(this.state.value)
        this.busqueda()})};

    busqueda () {
        if(this.state.value !== ''){ {/*esto es porque cuando borraba y ecribia se me salia y entonces si el input esta vacio no hago el fetch */}
        
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b8041f10f73b7178ac9637ccbb409920&language=en-US&page=1&query=${this.state.value}`)
        .then(res => res.json())
        .then(data => {
        this.setState({data: data.results}, () => console.log(data.results))
            })
        .catch(e => console.log(e))}}





    
    render(){
        return(
<React.Fragment>
            {this.state.value.length === 0 ? 
            
            <main className='main'>
            
            <form onSubmit={(event)=> this.evitarSubmit(event)}>
            <input type='text'  onChange={ (event)=> this.controlarCambios(event)} placeholder="Buscar Pelicula" name="usuario" value={this.state.value}  />
            </form>

            
            
            <h1 className='peliculasname'>Peliculas</h1>
            <section className='cardContainer'>
            {this.state.movies === 0 ? <h1>Cargando...</h1> : this.state.movies.map((oneMovie, idx) => <List datosMovie={oneMovie} key={oneMovie.title + idx}   ></List>)}
            </section>
            <h1 className='peliculasname'>Peliculas Top Rated</h1>
            <section className='cardContainer'>

            {this.state.peliculas === 0 ? <h1>Cargando...</h1> : this.state.peliculas.map((unaPelicula, idx) => <ListDos key={unaPelicula.title + idx}  datosPelicula={unaPelicula}></ListDos>)}
            </section>
            </main>

             :    <main className='main'> 
            <form onSubmit={(event)=> this.evitarSubmit(event)}>
            <input type='text'  onChange={ (event)=> this.controlarCambios(event)} placeholder="Buscar Pelicula" name="usuario" value={this.state.value}  />
            </form>  
            {this.state.data === 0 ? <h1>Cargando...</h1> : this.state.data.map((oneMovie, idx)=> <List datosMovie={oneMovie} key={oneMovie.title + idx}   /> ) }
            
            </main>  } 
             
</React.Fragment>
        )
    }

    //formulario de busqueda
}
export default Home