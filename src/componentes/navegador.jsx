import '../App.css'

export function Navegador() {
    return (
        <div>
            <section>
                <nav className="navegador-Inicio">
                    <img className='img-nav' src="/RHCP/src/imagenes/logo.png" alt="" />
                    <ul className='nav-items'>
                        <li><a href="">INTEGRANTES</a></li>
                        <li><a href="#integrantes">DISCOS</a></li>
                        <li><a href="#discos">MAS INFO </a></li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}