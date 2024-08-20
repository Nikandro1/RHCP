import './App.css'
import './componentes/navegador'
import { Navegador } from './componentes/navegador'
import './componentes/carrusel'
import { Carrusel } from './componentes/carrusel'
import './componentes/footer'
import { Footer } from './componentes/footer'
import './componentes/aside'
import { AsideMusica } from './componentes/aside'
import 'bootstrap/dist/css/bootstrap.min.css'
import './componentes/integrante'
import { CardIntegrante } from './componentes/integrante'
import './componentes/discos'
import { Disco } from './componentes/discos'
import './componentes/discoEl'
import { DiscoEsp } from './componentes/discoEl'
import { MasInfo } from './componentes/masInfo'
import { Otros } from './otros'

function App() {
  return (
    <>
      <Otros />
    </>
    /*
    <>
      <Navegador/>
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
        <div />
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
    */
  )
}

export default App
