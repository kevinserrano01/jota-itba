import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar'
import './App.css'

function App() {
  const [paginaActual, setPagina] = useState("inicio");

  const visualizarPagina = () => {
    switch (paginaActual) {
      case "inicio":
        return <h1> Inicio </h1>
      case "productos":
        return <h1> productos </h1>
      case "carrito":
        return <h1> carrito </h1>
      case "contacto":
        return <h1> contacto </h1>
      default:
        return <h1> Inicio </h1>
    }
  };
  return (
    <>
      <Navbar setPagina={setPagina} />
      <main className="main">{visualizarPagina()}</main>
    </>
  );
}


export default App
