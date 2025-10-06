import React from "react";
import "../css/ProductDetail.css"

function ProductDetail({producto, agregarAlCarrito}) {
    return (
    <div className="producto">
            <div className="producto-imagen">
            <img src={producto.imagenURL.trim()} alt={producto.nombre}/>
        </div>
        <div className="producto-info">
            <h1>{producto.nombre}</h1>
            <p className="precio">${producto.precio}</p>
            <p className="descripcion">{producto.descripcion}</p>
            
            <div className="especificaciones">
                <h3>Especificaciones</h3>
                <div className="spec-grid">
                    <div className="spec-item">
                        <span className="spec-label">Medidas:</span>
                        <span className="spec-value">{producto.medidas}</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Materiales:</span>
                        <span className="spec-value">{producto.materiales}</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Acabado:</span>
                        <span className="spec-value">{producto.acabado}</span>
                    </div>
                    {producto.peso ? 
                    <div className="spec-item">
                        <span className="spec-label">Peso:</span>
                        <span className="spec-value">{producto.peso}</span>
                    </div> : ''}
                    {producto.capacidad ? 
                    <div className="spec-item">
                        <span className="spec-label">Capacidad:</span>
                        <span className="spec-value">{producto.capacidad}</span>
                    </div> : ''}
                    {producto.modulares ? 
                    <div className="spec-item">
                        <span className="spec-label">Modulares:</span>
                        <span className="spec-value">{producto.modulares}</span>
                    </div>: ''}
                    {producto.tapizado ? 
                    <div className="spec-item">
                        <span className="spec-label">Tapizado:</span>
                        <span className="spec-value">{producto.tapizado}</span>
                    </div> : ''}
                    {producto.confort ? 
                    <div className="spec-item">
                        <span className="spec-label">Confort:</span>
                        <span className="spec-value">{producto.confort}</span>
                    </div>: ''}
                    {producto.almacenamiento ?
                    <div className="spec-item">
                        <span className="spec-label">Almacenamiento:</span>
                        <span className="spec-value">{producto.almacenamiento}</span>
                    </div> : ''}
                    {producto.cables ? 
                    <div className="spec-item">
                        <span className="spec-label">Cables:</span>
                        <span className="spec-value">{producto.cables}</span>
                    </div> : ''}
                    {producto.extension ? 
                    <div className="spec-item">
                        <span className="spec-label">Extensión:</span>
                        <span className="spec-value">{producto.extension}</span>
                    </div> : ''}
                    {producto.carga_maxima ? 
                    <div className="spec-item">
                        <span className="spec-label">Carga máxima:</span>
                        <span className="spec-value">{producto.carga_maxima}</span>
                    </div> : ''}
                    {producto.caracteristicas ? 
                    <div className="spec-item">
                        <span className="spec-label">Características:</span>
                        <span className="spec-value">{producto.caracteristicas}</span>
                    </div> : ''}
                    {producto.regulacion ? 
                    <div className="spec-item">
                        <span className="spec-label">Regulación:</span>
                        <span className="spec-value">{producto.regulacion}</span>
                    </div> : ''}
                    {producto.certificacion ? 
                    <div className="spec-item">
                        <span className="spec-label">Certificación:</span>
                        <span className="spec-value">{producto.certificacion}</span>
                    </div> : ''}
                    {producto.apilables ? 
                    <div className="spec-item">
                        <span className="spec-label">Apilables:</span>
                        <span className="spec-value">{producto.apilables}</span>
                    </div> : ''}
                    {producto.incluye ? 
                    <div className="spec-item">
                        <span className="spec-label">Incluye:</span>
                        <span className="spec-value">{producto.incluye}</span>
                    </div> : ''}
                    {producto.rotacion ? 
                    <div className="spec-item">
                        <span className="spec-label">Rotación:</span>
                        <span className="spec-value">{producto.rotacion}</span>
                    </div> : ''}
                    {producto.garantia ? 
                    <div className="spec-item">
                        <span className="spec-label">Garantía:</span>
                        <span className="spec-value">{producto.garantia}</span>
                    </div> : ''}
                    {producto.estructura ? 
                    <div className="spec-item">
                        <span className="spec-label">Estructura:</span>
                        <span className="spec-value">{producto.estructura}</span>
                    </div> : ''}
                    {producto.relleno ? 
                    <div className="spec-item">
                        <span className="spec-label">Relleno:</span>
                        <span className="spec-value">{producto.relleno}</span>
                    </div> : ''}
                    {producto.sostenibilidad ? 
                    <div className="spec-item">
                        <span className="spec-label">Sostenibilidad:</span>
                        <span className="spec-value">{producto.sostenibilidad}</span>
                    </div> : ''}
                </div>
            </div>
            
            <div className="acciones">
                <button className="btn-agregar" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
            </div>
        </div>
        </div>
    )
}

export default ProductDetail