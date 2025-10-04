import React from "react";
import '../css/Navbar.css'
import { useState } from "react";

function Navbar() {
    const [paginaActual, setPagina] = useState("Inicio")

    const irAPagina = (pagina) => {
        setPagina(pagina);
    };

    const visualizarPagina = () => {
        switch (paginaActual) {
            case "inicio":
                return <h1> inicio </h1>
            // return <Inicio></Inicio>;
            case "productos":
                return <h1> productos </h1>
            // return <Productos></Productos>;
            case "carrito":
                return <h1> carrito </h1>
            // return <Carrito></Carrito>;
            case "contacto":
                return <h1> contacto </h1>
            // return <Contacto></Contacto>;

        }
    }
    return (
        <>
        <nav className="navbar">
            <img src="https://raw.githubusercontent.com/fromero34/img-frontend/093bd10a251a63e0cf51e0f38237d102f37d5c04/logo.svg" alt="Logo" id="logo"></img>
            <div className="navbar-botones">
            <button onClick={() => irAPagina('inicio')}>Inicio</button>
            <button onClick={() => irAPagina('productos')}>Producto</button>
            <button onClick={() => irAPagina('carrito')}>Carrito</button>
            <button onClick={() => irAPagina('contacto')}>Contacto</button>
            </div>
        </nav>
        <main>
            {visualizarPagina()}
        </main>
        </>
    )
}

/* 
*/
export default Navbar;