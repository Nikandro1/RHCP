import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DiscoEsp } from './discoEl.jsx';
import { useState, useEffect } from "react";
import { Footer } from "./footer";
import { Navegador } from "./navegador";
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


export function Disco(props) {

    const [data, setData] = useState(null)
    const [mostrarInfo, setMostrarInfo] = useState(false);
    console.log("props.discos:", props.disco);

    const disco = `https://raw.githubusercontent.com/Nikandro1/discosJson/main/${encodeURIComponent(props.disco)}.json`;

    useEffect(() => {
        console.log("Solicitud a la API:", disco);
        fetch(disco)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }
                return response.json();
            })
            .then((data) => {
                console.log("Datos recibidos:", data); // Verificar los datos recibidos
                setData(data);
            })
            .catch(error => console.error("error", error));
    }, [disco])
    if (!data) {
        return <div>Cargando...</div>;
    }
    // Verificar si data.nombre está definido antes de intentar acceder a él
    if (!data.nombre) {
        console.log("Datos recibidos sin nombre del disco:", data);
        return <div>No se encontró el nombre del disco.</div>;
    }

    const Tapa = () => {
        return (
            <>
                <img className='tapaDisco'
                    src={`../src/imagenes/${props.disco}.jpg`}
                    alt={props.disco}
                    title={data.nombre}
                    onClick={() => setMostrarInfo(true)}
                />
            </>
        );
    }
    const Info = () => {
        return (
            <div>
                <div className="contDisco">
                    <Container>
                        <Row>
                            <Col md={9}>
                                <h1>{data.nombre}</h1>
                            </Col>
                            <Col md={3}>
                                <img src={data.imagen} alt="" />
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col md={9}><p>{data.info}</p>
                                <button onClick={() => setMostrarInfo(false)}>Mostrar menos</button></Col>
                            <Col md={3}><Tabla data={data.temas} /></Col>
                        </Row>
                    </Container>

                </div>
            </div>
        );
    }
    function Tabla(props) {
        return (
            <div className="tablaTemas">
                <table>
                    <thead>
                        <tr>CANCIONES</tr>
                    </thead>
                    <tbody>
                        {props.data.map((item, index) => (
                            <tr key={index}>
                                <td>{item}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
    return (
        <div>
            {mostrarInfo ? <Info /> : <Tapa />}
        </div>
    );

}
