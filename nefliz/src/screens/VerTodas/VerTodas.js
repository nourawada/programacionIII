import React, {Component} from 'react';
import List from '../../components/List/List'



class VerTodas extends Component{
    constructor(){
        super()
        this.state = {
            movies: [],
            pagina:'',
            form: '',
            

        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b8041f10f73b7178ac9637ccbb409920`)
        .then(res => res.json())          
        .then(data => this.setState({
            movies:data.results,
            pagina: data.page

        }))
        .catch()
    }

    cargarMas(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b8041f10f73b7178ac9637ccbb409920&page=${this.state.pagina+1}`)
        .then(res => res.json())          
        .then(data => this.setState({
            movies: data.results.concat(this.state.movies),
            pagina: data.page
        }))
        .catch()


    };












    prevenirRecarga(prevenir) {
            prevenir.preventDefault();
        };
    guardarCambios(prevenir) {
            this.setState({valor: prevenir.target.movies}, () => console.log(this.state.valor) );
            
        };
    
    filtroPeliculas(Fil) { 
        let filtrarPli = this.state.movies.filter( movie => movie.title.toLowerCase().include(Fil.tiLowerCase()))
        this.setState({
            movies: filtrarPli,
        })

        };
   

                    
    render() {
        return(
            <React.Fragment>
            <main className='main'>
            <form onSubmit={(prevenir)=> this.prevenirRecarga(prevenir)}>
                <input placeholder='Buscar Pelicula 'type='text' onChange={ (prevenir)=> this.guardarCambios(prevenir)} value={this.state.valor}  />
            </form>
            <button  type='button' onClick={ ()=> this.cargarMas()}> Cargar Más </button>
            <h1>Peliculas</h1>
            
            <section className='cardContainer'>
                {this.state.movies.map((oneMovie, idx) => <List key={oneMovie.name + idx}  datosMovie={oneMovie} ></List>)}
            </section>
            </main>
            </React.Fragment>
            )}}
    

export default VerTodas