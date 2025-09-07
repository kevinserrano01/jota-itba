document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombreUsuario").value.trim();
    const email = document.getElementById("emailUsuario").value.trim();
    const mensaje = document.getElementById("mensajeUsuario").value.trim();

    if (nombre === "") {
      alert("Por favor, ingrese su nombre");
      return;
    }

    if (!validarEmail(email)) {
      alert("Por favor, ingrese su email válido");
      return;
    }

    if (mensaje === "") {
      alert("Por favor, escriba un mensaje");
      return;
    }

    mostrarMensajeExito("¡Gracias! Su mensaje fue enviado con éxito.");
    form.reset();
  });
});

function validarEmail(email) {
  const arrobas = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return arrobas.test(email.toLowerCase());
}

function mostrarMensajeExito(texto) {
  let mensajeExito = document.getElementById("mensajeExito");
  const form = document.querySelector("form");

  if (!mensajeExito) {
    mensajeExito = document.createElement("p");
    mensajeExito.id = "mensajeExito";
    form.insertAdjacentElement("afterend", mensajeExito);
  }

  mensajeExito.textContent = texto;
}