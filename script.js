window.addEventListener("DOMContentLoaded", () => {

  const fechaInicio = new Date("2025-10-14");

  function actualizarContador(){
    const ahora = new Date();
    const diff = ahora - fechaInicio;

    const dias = Math.floor(diff / (1000*60*60*24));
    const horas = Math.floor((diff / (1000*60*60)) % 24);
    const minutos = Math.floor((diff / (1000*60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById("contador").innerText =
      "Mi amor por ti comenzó hace: " +
      dias + " días " + horas + " horas " +
      minutos + " minutos " + segundos + " segundos";
  }

  setInterval(actualizarContador, 1000);
  actualizarContador();

  const copa = document.getElementById("copa");

  function crearCorazon(){
    const heart = document.createElement("div");
    heart.className = "corazon";
    heart.innerHTML = "❤";

    const t = Math.random() * Math.PI * 2;
    const x = 110 * Math.pow(Math.sin(t), 3);
    const y = -(70 * Math.cos(t) - 30 * Math.cos(2*t) - 10 * Math.cos(3*t) - 5 * Math.cos(4*t));

    heart.style.left = (x + 110) + "px";
    heart.style.top = (y + 90) + "px";

    copa.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }

  setInterval(crearCorazon, 150);

});
