import App from './App.jsx'
import React from 'react'
import { Navegador } from './componentes/navegador.jsx'
import { Footer } from './componentes/footer.jsx'
import { Disco } from './componentes/discos.jsx'
import { Artista } from './componentes/artista.jsx'

export function Otros() {
    return (
        <>
            <Navegador />
            <Artista />
            <Footer />
        </>
    )
}