import React, {Component} from 'react';
import List from '../../components/List/List'
import Form from '../Form/Form'


class VerTodas extends Component{
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

     

    }
    render(){
        return(
            <React.Fragment>
            <main className='main'>
            <h1>Peliculas</h1>
            <section className='cardContainer'>
                {this.state.movies.map((oneMovie, idx) => <List key={oneMovie.name + idx}  datosMovie={oneMovie} ></List>)}
            </section>
            </main>
            </React.Fragment>
            )}
    
}
export default VerTodas