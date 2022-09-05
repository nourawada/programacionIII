import React, {Component} from 'react';
import List from '../../components/List/List'
import Form from '../Form/Form'


class VerTodas extends Component{
    constructor(){
        super()
        this.state = {
            series: [],
            

        }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=b8041f10f73b7178ac9637ccbb409920`)
        .then(res => res.json())          
        .then(data => this.setState({
            series:data.results,

        }))
        .catch()

     

    }
    render(){
        return(
            <React.Fragment>
            <main>
            <Form/>
            <h1>Series</h1>
            <section className='cardContainer'>
                {this.state.series.map((unaSerie, idx) => <List key={unaSerie.name + idx} datosSerie={unaSerie} ></List>)}
            </section>
           </main>
            </React.Fragment>
        )
    }

    
}
export default VerTodas