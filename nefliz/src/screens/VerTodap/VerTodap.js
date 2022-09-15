import React, {Component} from 'react';
import ListDos from '../../components/ListDos/ListDos';
import Form  from "../Form/Form"


class VerTodap extends Component{
    constructor(props){
        super(props)
        this.state = {
            movies: [],
            peliculas: [],
            pagina:1,
            form:'',
        }
    }
    componentDidMount(){
     

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=b8041f10f73b7178ac9637ccbb409920&page=${this.state.pagina}`)
        .then(res => res.json())          
        .then(data => this.setState({
            movies:data.results,
            peliculas:data.results,
            pagina: 2
        }))
        .catch()



    }
    cargarMass(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=b8041f10f73b7178ac9637ccbb409920&page=${this.state.pagina}`)
        .then(res => res.json())          
        .then(data => this.setState({
            movies:data.results.concat(this.state.movies),
            peliculas:data.results.concat(this.state.peliculas),
            pagina: this.state.pagina +1,
        }))
        .catch()

    }
    filtrarMovies(Fil) { 
        let filtrarMovies = this.state.movies.filter( oneMovie => oneMovie.title.toLowerCase().includes(Fil.toLowerCase()))
        this.setState({
            peliculas: filtrarMovies,
        }, ()=>console.log(this.state))
    }
    



    render(){
        return(
            <React.Fragment>
            <main className='main'>
            <div>
            <Form filtrarMovies={(Fil) => this.filtrarMovies(Fil)}></Form>
            <button type='button' onClick={ ()=> this.cargarMass()}> Cargar Más </button>
            </div>
            <h1>Peliculas</h1>
            <section className='card-container'>
            {this.state.peliculas === 0 ? <h1>Cargando...</h1> : this.state.peliculas.map((unaPelicula, idx) => <ListDos key={unaPelicula.title + idx}  datosPelicula={unaPelicula}></ListDos>)}
            </section>
            </main>
            </React.Fragment>
        )
    }

    //formulario de busqueda
}
export default VerTodap