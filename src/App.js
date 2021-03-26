import React, {useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';



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

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos:{
      marca: '',
      year:'',
      plan:''
    }
  });

  //extraer datos
  const {cotizacion,datos} = resumen;


  return (
    <Contenedor>
      <Header
        titulo='Cotizador de Seguro'
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
        />

        <Resumen
          datos={datos}
        />
        <Resultado
          cotizacion = {cotizacion}
        />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
