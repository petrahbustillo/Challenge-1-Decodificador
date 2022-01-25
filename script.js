var botonEncriptar = document.querySelector("#boton-encriptar");

var botonDesencriptar = document.querySelector("#boton-desencriptar");

var botonCopiar = document.querySelector("#boton-copiar");

botonEncriptar.addEventListener("click",function(event){
        event.preventDefault()});

botonDesencriptar.addEventListener("click",function(event){
        event.preventDefault()});

botonCopiar.addEventListener("click",function(event){
        event.preventDefault()});

/*Constante 'const' evita reasignar las variables */   
const inputTexto = document.querySelector("#frase");
const inputFrase = document.querySelector("#frase2");          

function encriptar (){
    
    var frase = inputTexto.value;
    inputTexto.focus();
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

function desencriptar (){
   
    var fraseEncriptada = inputTexto.value;
    inputTexto.focus();
    var frase = fraseEncriptada
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    inputFrase.value = frase;
    inputTexto.value = "";
    inputTexto.focus();
}

/* crear la funcion copiar texto con el ClipboardEvent()*/

function copiar () {
    
    var fraseEncriptada = document.getElementById("frase2");
   
    navigator.clipboard.writeText(fraseEncriptada.value);
  
 alert("Frase copiada: " + fraseEncriptada.value);

}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;
   

/*Metodo de Validacion de letras mayusculas y acentos */     

 function validar(frase) {
        var letra = "abcdefghijklmnñopqrstuvwxyz ";
        var frase = document.querySelector("input");

        /*crear el for():
        
        for(var (); frase.lenght) {}
        */ 

        if (frase.value) {
            /*si esta en letras minusculas, y hay que recorrer cada letra: mejorar codigo*/
            letra.toLowerCase = true;
           return (fraseEncriptada); 
        }
        
        else {
            alert("letra en minusculas");
        }
    } 
   var frase =  document.querySelector("frase");
   frase.onclick = validar;




  