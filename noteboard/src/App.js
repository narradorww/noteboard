import React from 'react';
import './assets/App.css';
import ListadeNotas from './components/listadenotas'
import FormularioCadastro from './components/formulario-cadastro';




function App() {
  return (
  <section className="conteudo">
        <FormularioCadastro />
        <ListadeNotas />
  </section>
  );
}

export default App;
