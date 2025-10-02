export default function Header() {
  return (
    <header>
      <nav>
        <a href="index.html">
          <img
            src="https://raw.githubusercontent.com/fromero34/img-frontend/093bd10a251a63e0cf51e0f38237d102f37d5c04/logo.svg"
            alt="Logo"
            id="logo"
          />
        </a>
        <div>
          <a href="index.html">Inicio</a>
          <a href="productos.html">Productos</a>
          <a href="contacto.html">Contacto</a>
          <a href="./carrito.html" id="cart">
            <img
              src="https://raw.githubusercontent.com/Roger-Valverde/img-frontend/refs/heads/main/carrito.svg"
              alt="Carrito"
            />
            <span id="cuenta-carrito">0</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
