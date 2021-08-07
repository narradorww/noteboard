import React from 'react';
import './App.css';
import ListadeNotas from './components/listadenotas/ListaDeNotas'
import { FormularioCadastro } from './components/formulario-cadastro/FormularioCadastro';




function App() {
  return (
  <section>
        <FormularioCadastro />
        <ListadeNotas />
  </section>
  );
}

export default App;
