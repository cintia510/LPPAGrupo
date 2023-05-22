const nav = document.querySelector("#nav_nico");
const abrir = document.querySelector("#abrir_nico");
const cerrar = document.querySelector("#cerrar_nico");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})