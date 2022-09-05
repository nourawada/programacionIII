import React, {Component} from "react";

class Form extends Component{
constructor(){
    super();
    this.state= {
        valor: '',
    };
}
    prevenirRecarga(prevenir) {
        prevenir.preventDefault();
    };
    guardarCambios(prevenir) {
        this.setState({valor: prevenir.target.value}, () => console.log(this.state.valor) );
        
    };
    render() {
        return(
            <form onSubmit={(prevenir)=> this.prevenirRecarga(prevenir)}>
                <input type='text' onChange={ (prevenir)=> this.guardarCambios(prevenir)} value={this.state.valor}  />

            </form>
        )
    }
}

export default Form