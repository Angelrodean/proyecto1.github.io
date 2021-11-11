"use strict";

var forma = document.getElementById("forma"),
numero = document.getElementById("numero"),
text = document.getElementById("textarea");

forma.addEventListener("reset", limpiar, false);

function procesa() {
  for(let i=0; i<= 10; i++){
    text.textContent += forma.numero.value+" a la "+i+" = "+forma.numero.value**i +"\n";
  }
}

function limpiar() {
  forma["numero"].value = "";
  forma["textarea"].textContent="";
}
