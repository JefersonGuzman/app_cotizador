import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

import styled from '@emotion/styled';

//  Estos son componentes de estilos 
// tienes apertura de cierre ya que es un div
//  de lo contrario solo tendria etiqueta de apertura si a la
// etiqueta que le aplicaras el componente no la utilice
const Contenedor = styled.div`
  max-width:600px;
  margin:0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color:#ffffff;
  padding:3rem;
`;

function App() {
  return (
    <Contenedor>
      <Header
        titulo='Cotizador de Seguro'
      />
      <ContenedorFormulario>
        <Formulario/>
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
