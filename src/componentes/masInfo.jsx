import "../App.css"
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import { Otros } from "../otros";
import { Link } from "react-router-dom";


export function MasInfo() {
    return (
        <div className="masInfo">
            <div className="h1Info">
                <h1>Más acerca de la banda</h1>
                <Container className="containerInfo" fluid >
                    <Row>
                        <Col md={6}>
                            <div className="otrosInte">
                                <Link to={"/otros"}>
                                    <img src="/RHCP/src/imagenes/otrosIntegrantes.jpg" alt="" />
                                    <p>Un poco de la historia de otros miembros que pasaron por la banda californiana.</p>
                                </Link>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="shows">
                                <img src="/RHCP/src/imagenes/dvd.jpg" alt="Card image" className="otrosI" />
                                <p>Repaso de los dvds y show más importantes de los Red Hot.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}