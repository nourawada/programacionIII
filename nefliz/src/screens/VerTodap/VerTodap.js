import React, {Component} from 'react';

import ListDos from '../../components/ListDos/ListDos';


class VerTodap extends Component{
    constructor(){
        super()
        this.state = {
            
            peliculas: [],
            pagina:'',
        }
    }
    componentDidMount(){
     

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=b8041f10f73b7178ac9637ccbb409920`)
        .then(res => res.json())          
        .then(data => this.setState({
            peliculas:data.results,
            pagina: data.page
        }))
        .catch()



    }
    cargarMass(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=b8041f10f73b7178ac9637ccbb409920&page=${this.state.pagina+1}`)
        .then(res => res.json())          
        .then(data => this.setState({
            peliculas:data.results.concat(this.state.peliculas),
            pagina: data.page
        }))
        .catch()

    }



    render(){
        return(
            <React.Fragment>
            <main>
            <button type='button' onClick={ ()=> this.cargarMass()}> Cargar Más </button>
            <section>
            <h1>Peliculas</h1>
            {this.state.peliculas.map((unaPelicula, idx) => <ListDos key={unaPelicula.name + idx}  datosPelicula={unaPelicula}></ListDos>)}
            </section>
            </main>
            </React.Fragment>
        )
    }

    //formulario de busqueda
}
export default VerTodap