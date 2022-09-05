import React, {Component} from 'react';

import ListDos from '../../components/ListDos/ListDos';
import Formp from '../Form/Formp'

class VerTodap extends Component{
    constructor(){
        super()
        this.state = {
        
            peliculas: [],

        }
    }
    componentDidMount(){
     

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
            <main>
            <Formp/>
            <h1>Peliculas</h1>
            <section>
            {this.state.peliculas.map((unaPelicula, idx) => <ListDos key={unaPelicula.name + idx}  datosPelicula={unaPelicula}></ListDos>)}
            </section>
            </main>
            </React.Fragment>
        )
    }

    //formulario de busqueda
}
export default VerTodap