import React, { useState } from "react";
import "../css/Contacto.css"

function Contacto() {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [mensajeU, setMensajeU] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'nombre') setNombre(value);
        if (name === 'email') setEmail(value);
        if (name === 'mensaje') setMensajeU(value);
    };
    const submit = (e) => {
        e.preventDefault();

        if (!nombre.trim()) {
            alert('Por favor, ingresa tu nombre.');
            return;
        }
        if (!email.trim()) {
            alert('Por favor, ingresa tu email.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Por favor, ingresa un email válido.');
            return;
        }
        if (!mensajeU.trim()) {
            alert('Por favor, ingresa un mensaje.');
            return;

        }
        alert('Mensaje enviado correctamente');
    }
    const datosFormulario = { nombre, email, mensaje: mensajeU };
    console.log('Datos enviados:', datosFormulario);

    
    return (
        <div>
            <h2>Contáctenos</h2>
            <p> Si tiene alguna pregunta o necesita más información, no dude en ponerse en contacto con nosotros a través del siguiente formulario:
            </p>
            <form id="formContacto" noValidate onSubmit={submit}>
        <div>
          <label htmlFor="nombreUsuario">Nombre:</label>
          <input
            type="text"
            id="nombreUsuario"
            name="nombre"
            value={nombre}
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="mensajeUsuario">Mensaje:</label>
          <textarea
            id="mensajeUsuario"
            name="mensaje"
            rows="5"
            value={mensajeU}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Enviar Mensaje</button>
      </form>
            <section className="infoContacto">
                <h3>Información de Contacto</h3>
                <table>
                    <tr>
                        <td>Email general</td>
                        <td><a href="mailto:info@hermanosjota.com.ar"></a>info@hermanosjota.com.ar</td>
                    </tr>
                    <tr>
                        <td>Ventas</td>
                        <td> <a href="mailto:ventas@hermanosjota.com.ar"></a>ventas@hermanosjota.com.ar</td>
                    </tr>
                    <tr>
                        <td>Instagram</td>
                        <td><a href="https://instagram.com/hermanosjota_b"></a>@hermanosjota_ba</td>
                    </tr>
                    <tr>
                        <td>Whatssap</td>
                        <td><a href="https://wa.me/541145678900"></a>+54 11 4567-8900</td>
                    </tr>
                </table>
            </section>
            <section className="showroomUbi">
                <h3>Showroom y Taller</h3>
                <p><strong>Hermanos Jota - Casa taller</strong></p>
                <p>Av. San Juan 2847</p>
                <p>C1234AAB - Barrio San Cristóbal</p>
                <p>Ciudad Autónoma de Buenos Aires, Argentina</p>

                <p><strong>Horarios:</strong></p>
                <ul>
                    <li>Lunes a Viernes: 10:00 - 19:00</li>
                    <li>Sábados: 10:00 - 14:00</li>
                    <li>Domingos: Cerrado</li>
                </ul>
            </section>
        </div>
    )
}

export default Contacto