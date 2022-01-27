var botonEncriptar = document.querySelector("#boton-encriptar");

var botonDesencriptar = document.querySelector("#boton-desencriptar");

var botonCopiar = document.querySelector("#boton-copiar");

/*Constante 'const' evita reasignar las variables */
const inputTexto = document.querySelector("#frase");
const inputFrase = document.querySelector("#frase2");

function validar(frase) {
    
    var buscar = /^[a-z ]+$/g;
    frase = document.querySelector("#frase").value;

    if (frase.match(buscar)) {
        /*recorre cada letra de la frase ingresada y valida que sea minúscula*/
        
    } else {
        alert("Sólo letras en minúsculas, sin números ni caracteres especiales");
        inputTexto.value = "";
    }
}

function encriptar() {
    validar();
    var frase = inputTexto.value;
    var fraseEncriptada = frase

        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    inputFrase.value = fraseEncriptada;
    inputTexto.value = "";
    inputTexto.focus();
}

function desencriptar() {
    validar();
    var frase = inputTexto.value;
    var fraseDesencriptada = frase
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    inputFrase.value = fraseDesencriptada;
    inputTexto.value = "";
    inputTexto.focus();
}

/* crear la funcion copiar texto con el ClipboardEvent()*/

function copiar() {

    var fraseEncriptada = document.getElementById("frase2");

    navigator.clipboard.writeText(fraseEncriptada.value);

    alert("Frase copiada: " + fraseEncriptada.value);

}

var frase = document.querySelector("frase");

botonEncriptar.addEventListener("click", function(event) {
    event.preventDefault();
    encriptar();
});

botonDesencriptar.addEventListener("click", function(event) {
    event.preventDefault();
    desencriptar();
});

botonCopiar.addEventListener("click", function(event) {
    event.preventDefault();
    copiar();
});