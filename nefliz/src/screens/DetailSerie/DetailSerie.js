import React, {Component} from 'react';


class DetailSerie extends Component{  
    constructor(props){
        super(props);
        this.state = {
            series: '',
        }
    }
    
    componentDidMount () {
        const id = this.props.match.params.id;
        fetch(`https://api.themoviedb.org/3/tv/popular${id}?api_key=b8041f10f73b7178ac9637ccbb409920`)
        .then(response=>response.json())
        .then(data=> {
            this.setState({series: data})
        })
        .catch(error=>console.log('El error fue: ' + error))
    }

    render () {
        return (
           
            <React.Fragment>
                {
                    this.state.series === ""?
                    <h4>Cargando</h4>:
                    <article>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.state.series.poster_path}`} alt=""/>
                        <div>
                            <h2> {this.state.series.title}</h2>
                            <div>
                                <p>Fecha de estreno: {this.state.series.release_date}</p>
                                <p>Rating: {this.state.series.vote_average}</p>
                                <p>Duracion: {this.state.series.runtime} min</p>
                            </div>
                        </div>
                    </article>
                }
            </React.Fragment>
        )

    }
}

export default DetailSerie;