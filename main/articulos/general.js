let btnAbrir = document.getElementById("abrirVentana");
let ventanaEmergente = document.getElementById("miVentanaEmergente");
let btnCerrar = document.getElementById("cerrarVentana")
let back = document.getElementById("info-article")

btnAbrir.addEventListener("click", function() {
  ventanaEmergente.style.display = "block";
  back.style.opacity = 0.1;
});

btnCerrar.addEventListener("click", function() {
    ventanaEmergente.style.display = "none"
    back.style.opacity = 1;
})

