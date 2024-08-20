import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';



export function Artista() {
    return (
        <>
        <br />
        <br />
        <br />
        <br />
            <Container>
                <Row>
                    <Col xs={4} md={3}>
                        <Image src="../src/imagenes/a-Antony.jpg" thumbnail />
                        <h1>ANTONY</h1>
                    </Col>
                    <Col xs={4} md={3}>
                        <Image src="../src/imagenes/a-Chad.jpg" thumbnail />
                        <h1>ANTONY</h1>
                    </Col>
                    <Col xs={4} md={3}>
                        <Image src="../src/imagenes/a-Flea.jpg" thumbnail />
                        <h1>ANTONY</h1>
                    </Col>
                    <Col xs={4} md={3}>
                        <Image src="../src/imagenes/a-Frusciante.jpg" thumbnail />
                        <h1>ANTONY</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}