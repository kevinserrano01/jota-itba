import { useState } from "react";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");

  const validarEmail = (email) => {
    const arrobas = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return arrobas.test(email.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "") {
      alert("Por favor, ingrese su nombr");
      return;
    }

    if (!validarEmail(email)) {
      alert("Por favor, ingrese un email válido");
      return;
    }

    if (mensaje.trim() === "") {
      alert("Por favor, escriba un mensaje");
      return;
    }

    setMensajeExito("Gracias! Su mensaje fue enviado con éxito!");
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <>
      <form id="formContacto" noValidate onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombreUsuario">Nombre:</label>
          <input
            type="text"
            id="nombreUsuario"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="emailUsuario">Email:</label>
          <input
            type="email"
            id="emailUsuario"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="mensajeUsuario">Mensaje:</label>
          <textarea
            id="mensajeUsuario"
            name="mensaje"
            rows="5"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </div>

        <button type="submit">Enviar Mensaje</button>
      </form>

      {mensajeExito && <p id="mensajeExito">{mensajeExito}</p>}
    </>
  );
}
