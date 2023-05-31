"use strict";

const home = document.querySelector("#home")
const card_info = document.querySelectorAll(".card-info")
console.log(home)
// Agregar un efecto al pasar el cursor sobre la imagen del perfil
home.addEventListener("mouseover", addEffect);

// Eliminar el efecto al quitar el cursor de la imagen del perfil
home.addEventListener("mouseout", removeEffect);

function addEffect() {
  home.style.filter = "grayscale(100%)";
  home.style.transition = "filter 0.5s ease";
}

function removeEffect() {
  home.style.filter = "none";
  home.style.transition = "filter 0.5s ease";
}

