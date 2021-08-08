import React, { Component } from "react";
import ListaDeNotas from "./components/listadenotas";
import FormularioCadastro from "./components/formulario-cadastro";
import ListadeCategorias from "./components/lista-categorias"


import "./assets/App.css";
import './assets/index.css';







class App extends Component {

  constructor(){
    super();
//Objeto que determina os estados (statefull) do componente App.js est
//A partir da determinação desse estado é que é determinada a renderização de todo o componente
    this.state = {
      notas:[],
      categorias:[],
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategoria =[...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayCategoria };
    this.setState(novoEstado)
  }

  deletarNota(index){
    let arrayNotas =this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas})

  }

  


  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <main className="classeprincipal">
        <ListadeCategorias 
        adicionarCategoria ={this.adicionarCategoria.bind(this)}
        categorias= {this.state.categorias}/>
        <ListaDeNotas
        notas={this.state.notas}
        apagarNota={this.deletarNota.bind(this)}/>
        </main>

      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;


