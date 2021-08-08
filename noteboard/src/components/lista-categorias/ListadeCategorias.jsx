import React, { Component } from 'react';
import "./styled.css";

class  ListadeCategorias extends Component {
    _handleEventoInput(e){
        if(e.key == "Enter"){ 
            let valorCategoria =e.target.value;
            this.props.adicionarCategoria(valorCategoria);
//não esquecer de adicionar a função adicionarCategoria na App.js para ser renderizada
        }
    }





    state = {  }
    render() { 
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.map((categoria,indice)=>{
                        return <li key={indice} className="lista-categorias_item">{categoria}</li>; 
                    })}             
                                        
                </ul>
                <input
                 type="text"
                 className="lista-categorias_input"
                 placeholder="Adicionar Categoria"
                 onKeyUp={this._handleEventoInput.bind(this)}
                 ></input>
            </section>
          );
    }
}
 
export default ListadeCategorias; ;
