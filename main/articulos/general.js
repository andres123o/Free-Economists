let btnAbrir = document.getElementById("abrirVentana");
let ventanaEmergente = document.getElementById("miVentanaEmergente");
let btnCerrar = document.getElementById("cerrarVentana")
let back = document.getElementById("info-article")
let invst = document.getElementById("investigacion")

invst.addEventListener("click", function(){
  window.open("/POTENCIAL DE LA UCHUVA EN LOS MERCADOS INTERNACIONALES. (1)/POTENCIAL DE LA UCHUVA EN LOS MERCADOS INTERNACIONALES. (1).pdf")
})

btnAbrir.addEventListener("click", function() {
  // ventanaEmergente.style.display = "block";
  back.style.opacity = 0.1;
  ventanaEmergente.style.transform = "scale(1)";
});

btnCerrar.addEventListener("click", function() {
    // ventanaEmergente.style.display = "none"
    back.style.opacity = 1;
    ventanaEmergente.style.transform = "scale(0)"
})

