/** Crea las tarjetas de productos teniendo en cuenta el array de productos.js */
const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList = "tarjeta-producto"
    nuevoProducto.innerHTML = `
    <img src="${producto.imagenURL.trim()}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <div class="botones-producto">
      <button class="btn-detalles" onclick="verDetalles(${producto.id})">Ver detalles</button>
      <button class="btn-carrito">Agregar al carrito</button>
    </div>`
    contenedorTarjetas.appendChild(nuevoProducto);
    nuevoProducto.querySelector(".btn-carrito").addEventListener("click",() => agregarAlCarrito(producto))
  });
}

function verDetalles(productoId) {
  window.location.href = `producto.html?id=${productoId}`;
}

crearTarjetasProductosInicio(productos);