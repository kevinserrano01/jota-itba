import React from "react";
import '../css/Navbar.css'
import { useState } from "react";

function Navbar({ setPagina , itemsEnCarrito}) {
  return (
    <nav className="navbar">
      <img
        src="https://raw.githubusercontent.com/fromero34/img-frontend/093bd10a251a63e0cf51e0f38237d102f37d5c04/logo.svg"
        alt="Logo"
        id="logo"
        onClick={() => setPagina("productos")}
        style={{ cursor: "pointer" }}
      />
      <div className="navbar-botones">
        <button onClick={() => setPagina("productos")}>Productos</button>
        <button onClick={() => setPagina("carrito")}>Carrito ({itemsEnCarrito})</button>
        <button onClick={() => setPagina("contacto")}>Contacto</button>
      </div>
    </nav>
  );
}
export default Navbar;