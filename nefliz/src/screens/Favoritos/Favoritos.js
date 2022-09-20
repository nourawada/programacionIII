import React, {Component} from 'react';
import List from "../../components/List/List"

class Favoritos extends Component {

    constructor(){
        super();
        this.state = {
            movies : [] 
        }
    }

    componentDidMount(){
        let favs = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            favs = JSON.parse(recuperoStorage)
            let movie = [];
            console.log(favs);

            favs.forEach(id => {
                //pedir por cada id los datos de peliculas --> fetch
                let url = `https://api.themoviedb.org/3/movie/${id}?api_key=b8041f10f73b7178ac9637ccbb409920`
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    movie.push(data)
                    this.setState({
                        movies : movie
                    })
                })
                .catch(e => console.log(e))
            })
        }
        
    }

    render(){
        return(
            <React.Fragment>
                <h2>Mis favoritos</h2>
                <section className='cardContainer'>
                {this.state.movies.map((oneMovie, idx) => <List key={oneMovie.name + idx}  datosMovie={oneMovie} ></List>)}
            </section>
            </React.Fragment>
        )
    }
}
export default Favoritos