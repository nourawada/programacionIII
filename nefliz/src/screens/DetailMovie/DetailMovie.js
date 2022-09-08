import React, {Component} from 'react';
import "./detail.css"


class DetailMovie extends Component{  
    constructor(props){
        super(props);
        this.state = {
            peliculas: '',
        }
    }
    
    componentDidMount () {
        const id = this.props.match.params.id;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b8041f10f73b7178ac9637ccbb409920`)
        .then(response=>response.json())
        .then(data=> {
            this.setState({peliculas: data})
        })
        .catch(error=>console.log('El error fue: ' + error))
    }

    render () {
        return (
           
            <React.Fragment>
                {
                    this.state.peliculas === ""?
                    <h4>Cargando</h4>:
                    <article className='articlemovies'>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.state.peliculas.poster_path}`} alt=""/>
                        <div>
                            <h2> {this.state.peliculas.title}</h2>
                            <div>
                            <p>Descripcion: {this.state.peliculas.overview}</p>
                                <p>Fecha de estreno: {this.state.peliculas.release_date}</p>
                                <p>Rating: {this.state.peliculas.vote_average}</p>
                                <p>Duracion: {this.state.peliculas.runtime} min</p>
                            </div>
                        </div>
                    </article>
                }
            </React.Fragment>
        )

    }
}

export default DetailMovie;