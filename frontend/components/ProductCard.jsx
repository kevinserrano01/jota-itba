import React from "react";
import "../css/ProductCard.css"

function ProductCard ({producto}) {
    return (
        <div className="producto">
            <div class="producto-imagen">
            <img src={producto.imagenURL.trim()} alt={producto.nombre}/>
        </div>
        <div class="producto-info">
            <h1>{producto.nombre}</h1>
            <p class="precio">${producto.precio}</p>
        </div>
        <div>
                <button class="btn-agregar" onclick="agregarAlCarrito(producto)">Agregar al carrito</button>
        </div>
        </div>
    )
}

/* <div>
            <div class="producto-imagen">
            <img src={producto.imagenURL.trim()} alt={producto.nombre}/>
        </div>
        <div class="producto-info">
            <h1>{producto.nombre}</h1>
            <p class="precio">${producto.precio}</p>
            <p class="descripcion">{producto.descripcion}</p>
            
            <div class="especificaciones">
                <h3>Especificaciones</h3>
                <div class="spec-grid">
                    <div class="spec-item">
                        <span class="spec-label">Medidas:</span>
                        <span class="spec-value">{producto.medidas}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Materiales:</span>
                        <span class="spec-value">{producto.materiales}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Acabado:</span>
                        <span class="spec-value">{producto.acabado}</span>
                    </div>
                    {producto.peso ? 
                    <div class="spec-item">
                        <span class="spec-label">Peso:</span>
                        <span class="spec-value">{producto.peso}</span>
                    </div> : ''}
                    {producto.capacidad ? 
                    <div class="spec-item">
                        <span class="spec-label">Capacidad:</span>
                        <span class="spec-value">{producto.capacidad}</span>
                    </div> : ''}
                    {producto.modulares ? 
                    <div class="spec-item">
                        <span class="spec-label">Modulares:</span>
                        <span class="spec-value">{producto.modulares}</span>
                    </div>: ''}
                    {producto.tapizado ? 
                    <div class="spec-item">
                        <span class="spec-label">Tapizado:</span>
                        <span class="spec-value">{producto.tapizado}</span>
                    </div> : ''}
                    {producto.confort ? 
                    <div class="spec-item">
                        <span class="spec-label">Confort:</span>
                        <span class="spec-value">{producto.confort}</span>
                    </div>: ''}
                    {producto.almacenamiento ?
                    <div class="spec-item">
                        <span class="spec-label">Almacenamiento:</span>
                        <span class="spec-value">{producto.almacenamiento}</span>
                    </div> : ''}
                    {producto.cables ? 
                    <div class="spec-item">
                        <span class="spec-label">Cables:</span>
                        <span class="spec-value">{producto.cables}</span>
                    </div> : ''}
                    {producto.extension ? 
                    <div class="spec-item">
                        <span class="spec-label">Extensión:</span>
                        <span class="spec-value">{producto.extension}</span>
                    </div> : ''}
                    {producto.carga_maxima ? 
                    <div class="spec-item">
                        <span class="spec-label">Carga máxima:</span>
                        <span class="spec-value">{producto.carga_maxima}</span>
                    </div> : ''}
                    {producto.caracteristicas ? 
                    <div class="spec-item">
                        <span class="spec-label">Características:</span>
                        <span class="spec-value">{producto.caracteristicas}</span>
                    </div> : ''}
                    {producto.regulacion ? 
                    <div class="spec-item">
                        <span class="spec-label">Regulación:</span>
                        <span class="spec-value">{producto.regulacion}</span>
                    </div> : ''}
                    {producto.certificacion ? 
                    <div class="spec-item">
                        <span class="spec-label">Certificación:</span>
                        <span class="spec-value">{producto.certificacion}</span>
                    </div> : ''}
                    {producto.apilables ? 
                    <div class="spec-item">
                        <span class="spec-label">Apilables:</span>
                        <span class="spec-value">{producto.apilables}</span>
                    </div> : ''}
                    {producto.incluye ? 
                    <div class="spec-item">
                        <span class="spec-label">Incluye:</span>
                        <span class="spec-value">{producto.incluye}</span>
                    </div> : ''}
                    {producto.rotacion ? 
                    <div class="spec-item">
                        <span class="spec-label">Rotación:</span>
                        <span class="spec-value">{producto.rotacion}</span>
                    </div> : ''}
                    {producto.garantia ? 
                    <div class="spec-item">
                        <span class="spec-label">Garantía:</span>
                        <span class="spec-value">{producto.garantia}</span>
                    </div> : ''}
                    {producto.estructura ? 
                    <div class="spec-item">
                        <span class="spec-label">Estructura:</span>
                        <span class="spec-value">{producto.estructura}</span>
                    </div> : ''}
                    {producto.relleno ? 
                    <div class="spec-item">
                        <span class="spec-label">Relleno:</span>
                        <span class="spec-value">{producto.relleno}</span>
                    </div> : ''}
                    {producto.sostenibilidad ? 
                    <div class="spec-item">
                        <span class="spec-label">Sostenibilidad:</span>
                        <span class="spec-value">{producto.sostenibilidad}</span>
                    </div> : ''}
                </div>
            </div>
            
            <div class="acciones">
                <button class="btn-agregar" onclick="agregarAlCarrito(producto)">Agregar al carrito</button>
            </div>
        </div>
        </div>
        */
export default ProductCard