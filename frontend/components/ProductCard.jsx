import React from "react";
import "../css/ProductCard.css"

function ProductCard ({producto, onClick}) {
    return (
        <div className="producto-catalogo" onClick={onClick} >
            <div className="producto-catalogo-imagen">
            <img src={producto.imagenURL.trim()} alt={producto.nombre}/>
        </div>
        <div className="producto-catalogo-info">
            <h1>{producto.nombre}</h1>
            <p className="producto-catalogo-precio">${producto.precio}</p>
        </div>
        </div>
    )
}

export default ProductCard