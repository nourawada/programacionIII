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

        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b8041f10f73b7178ac9637ccbb409920`)
        .then(res => res.json())          
        .then(data => this.setState({
            movies:data.results,

        }))
        .catch()

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=b8041f10f73b7178ac9637ccbb409920`)
        .then(res => res.json())          
        .then(data => this.setState({
            peliculas:data.results,

        }))
        .catch()

    }
    render(){
        return(
            <React.Fragment>
            <main className='main'>
            <h1 className='peliculasname'>Peliculas</h1>
            <section className='cardContainer'>
                {this.state.movies.map((oneMovie, idx) => <List key={oneMovie.name + idx}  datosMovie={oneMovie} ></List>)}
            </section>
            <h1 className='peliculasname'>Peliculas Top Rated</h1>
            <section className='cardContainer'>
            {this.state.peliculas.map((unaPelicula, idx) => <ListDos key={unaPelicula.name + idx}  datosPelicula={unaPelicula}></ListDos>)}
            </section>
            </main>
            </React.Fragment>
        )
    }

    //formulario de busqueda
}
export default Home