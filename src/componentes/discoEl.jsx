import { useEffect, useState } from "react";
import { Footer } from "./footer"
import { Navegador } from "./navegador"
import { BrowserRouter as Router, Route } from 'react-router-dom';
export function DiscoEsp(props) {

    

    const Info = () =>{
        function Tabla(props) {
            return (
                <div className="tablaTemas">
                    <h2>Lista de temas</h2>
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
                <Navegador />
                <div className="contDisco">
                    <h1>{data.nombre}</h1>
                    <img src={data.imagen} alt="" />
                    <p>{data.info}</p>
                    <Tabla data={data.temas} />
                </div>
                <Footer />
            </div>
        );
    }
    
}
