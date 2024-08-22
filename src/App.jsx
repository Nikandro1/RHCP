import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Navegador} from './componentes/navegador';
import {Carrusel} from './componentes/carrusel';
import {AsideMusica} from './componentes/aside';
import { CardIntegrante } from './componentes/integrante';
import { Disco} from './componentes/discos';
import {DiscoEsp} from './componentes/discoEl';
import {MasInfo} from './componentes/masInfo';
import {Footer} from './componentes/footer';

function App() {
  return (
    <>
      <Navegador />
      <Routes>
        <Route path="/" element={
          <>
            <div className='carrusel-aside'>
              <Carrusel />
              <AsideMusica />
            </div>
            <div id="integrantes" className='integrantes'>
              <h1>INTEGRANTES</h1>
              <div className='cardInt'>
                <CardIntegrante name="Flea" />
                <CardIntegrante name="Frusciante" />
                <CardIntegrante name="Antony" />
                <CardIntegrante name="Chad" />
              </div>
            </div>
            <div>
              <h1 className='tituloDiscos'>DISCOGRAFIA COMPLETA</h1>
              <div id="discos" className='discos'>
                <div className='todosDiscos'>
                  <Disco disco="rotdc" />
                  <Disco disco="unlimited" />
                  <Disco disco="getaway" />
                  <Disco disco="with" />
                  <Disco disco="stadium" />
                  <Disco disco="btw" />
                  <Disco disco="ohm" />
                  <Disco disco="cali" />
                  <Disco disco="bssm" />
                  <Disco disco="mother" />
                  <Disco disco="uplift" />
                  <Disco disco="freaky" />
                  <Disco disco="rhcpa" />
                </div>
              </div>
            </div>
            <MasInfo />
            <Footer />
          </>
        } />
        {/* Agrega rutas adicionales aquí si es necesario */}
        <Route path="/disco/:id" element={<DiscoEsp />} />
      </Routes>
    </>
  );
}

export default App;
