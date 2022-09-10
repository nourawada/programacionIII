import React, {Component} from 'react';
import List from '../../components/List/List'
import Form from "../Form/Form"



class VerTodas extends Component{
    constructor(props){
        super(props)
        this.state = {
            movies: [],
            movies2:[],
            pagina:'',
            form: '',
            

        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b8041f10f73b7178ac9637ccbb409920`)
        .then(res => res.json())          
        .then(data => this.setState({
            movies:data.results,
            movies2:data.results,
            pagina: data.page

        }))
        .catch()
    }

    cargarMas(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b8041f10f73b7178ac9637ccbb409920&page=${this.state.pagina+1}`)
        .then(res => res.json())          
        .then(data => this.setState({
            movies: this.state.movies.concat(data.results),
            movies2: this.state.movies.concat(data.results),
            pagina: data.page +1,
        }))
        .catch()


    };

    
    filtrarPelis(Fil) { 
        let filtrarPeli = this.state.movies.filter( movies => movies.title.toLowerCase().include(Fil.toLowerCase()))
        this.setState({
            movies2: filtrarPeli,
        })
    }
    
                    
    render() {
        return(
            <React.Fragment>
            <main className='main'>
           <div>
           <Form filtrarPelis={(Fil)=>this.filtrarPelis(Fil)}></Form>
            <button className='cargar' type="button" onClick={ ()=>this.cargarMas()}>Cargar más </button>
           </div> 
            <h1>Peliculas</h1>
            <section className='cardContainer'>
                {this.state.movies2.map((oneMovie, idx) => <List key={oneMovie.name + idx}  datosMovie={oneMovie} />)}
            </section>
            </main>
            </React.Fragment>
            )}}




            
        

export default VerTodas