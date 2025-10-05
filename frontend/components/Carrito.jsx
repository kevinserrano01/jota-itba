import React from "react";
import "../css/Carrito.css"

function Carrito( {producto}) {
    return (
        <div className="tarjeta-producto">
                <img src={producto.imagenURL.trim()} alt={producto.nombre}/>
                <p> Precio: <span id="precio"> ${producto.precio} </span></p>
        </div>
    )
}

/* 
<p id="carrito-vacio">Ups! El carrito está vacío, <a href="./productos.html">elige algunos productos</a></p>
*/

export default Carrito