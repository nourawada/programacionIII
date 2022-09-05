import React, {Component} from 'react';
import List from '../List/List';
import ListDos from '../ListDos/ListDos';
import "./home.css"


class Home extends Component{
    constructor(){
        super()
        this.state = {
            series: [],
            peliculas: [],

        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b8041f10f73b7178ac9637ccbb409920`)
        .then(res => res.json())          
        .then(data => this.setState({
            series:data.results,

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
            <h1>Peliculas</h1>
            <section className='cardContainer'>
                {this.state.series.map((unaSerie, idx) => <List key={unaSerie.name + idx} datosSerie={unaSerie} ></List>)}
            </section>
            <h1>Peliculas Top Rated</h1>
            <section>
            {this.state.peliculas.map((unaPelicula, idx) => <ListDos key={unaPelicula.name + idx}  datosPelicula={unaPelicula}></ListDos>)}
            </section>
            </main>
            </React.Fragment>
        )
    }

    //formulario de busqueda
}
export default Home