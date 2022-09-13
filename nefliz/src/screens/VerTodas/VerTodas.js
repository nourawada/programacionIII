import React, {Component} from 'react';
import List from '../../components/List/List'
import Form from "../Form/Form"
import './VerTodas.css'



class VerTodas extends Component{
    constructor(props){
        super(props)
        this.state = {
            movies: [],
            movies2:[],
            pagina:1,
            form: '',
            

        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b8041f10f73b7178ac9637ccbb409920&page=${this.state.pagina}`)
        .then(res => res.json())          
        .then(data => this.setState({
            movies:data.results,
            movies2:data.results,
            pagina: 2

        }))
        .catch()
    }

    cargarMas(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b8041f10f73b7178ac9637ccbb409920&page=${this.state.pagina}`)
        .then(res => res.json())          
        .then(data => this.setState({
            movies: data.results.concat(this.state.movies),
            movies2: data.results.concat(this.state.movies2),
            pagina: this.state.pagina +1,
        }))
        .catch()


    };

    
    filtrarMovies(Fil) { 
        let filtrarMovies = this.state.movies.filter( oneMovie => oneMovie.title.toLowerCase().includes(Fil.toLowerCase()))
        this.setState({
            movies2: filtrarMovies,
        }, ()=>console.log(this.state))
    }
    
                    
    render() {
        return(
            <React.Fragment>
            <main className='main'>
           <div>
           <Form filtrarMovies={(Fil)=>this.filtrarMovies(Fil)}></Form>
            <button className='cargar' type="button" onClick={ ()=>this.cargarMas()}>Cargar más </button>
           </div> 
            <h1 className='peliculastitle'>Peliculas</h1>
            <section className='card-container'>
                {this.state.movies2.map((oneMovie, idx) => <List key={oneMovie.title + idx}  datosMovie={oneMovie} />)}
            </section>
            </main>
            </React.Fragment>
            )}}




            
        

export default VerTodas