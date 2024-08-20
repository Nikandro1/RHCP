import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
export function Carrusel() {
    return (
        <Carousel className= 'carrusel' data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='../src/imagenes/rhcp21.jpg'
                    alt="Banda 13"
                />
                <Carousel.Caption>
                    <h1>Unlimited Love Tour</h1>
                    <a href="https://redhotchilipeppers.com/tour/"><button className='boton'>ver fechas</button></a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../src/imagenes/banda15.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1></h1>
                    <a href="https://shop.redhotchilipeppers.com/"><button className='boton' variant="outline-primary">Ir a tienda oficial</button></a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../src/imagenes/banda14.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrusel;