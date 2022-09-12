import React, {Component} from "react";

class Buscador extends Component{
constructor(){
    super();
    this.state= {
        value: '',
    };
}
    evitarSubmit(event) {
        event.preventDefault();
    };
    controlarCambios(event) {
        this.setState({
            value: event.target.value
        }, () => this.props.filtrarMovies(this.state.value) );}

    render() {
        
        return(
            <form onSubmit={(event)=> this.evitarSubmit(event)}>
            <input type='text'  onChange={ (event)=> this.controlarCambios(event)} placeholder="Buscar Pelicula" name="usuario" value={this.state.value}  />
            </form>
        )
    }
}

export default Buscador;