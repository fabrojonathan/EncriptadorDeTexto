/*DOM buttons*/
var btnEncriptar = document.getElementById("btnEncriptar");
var btnDesencriptar = document.getElementById("btnDesencriptar");
var btnCopiar = document.getElementById("btnCopiar");

/*DOM elements*/

/*Textos*/
var textoIngresado = document.getElementById("textareaMensaje");
var textoTraducido = document.getElementById("textoTraducido");

/*Logo, Mensajes informativos y de error*/
var logo = document.getElementById("logoError");
var mensajeError = document.getElementById("mensajeError");
var mensajePrincipal = document.getElementById("mensajePrincipal");

function ComprobarMensajeVacio(){
    var textoIngresado = document.getElementById("textareaMensaje").value;
    return (textoIngresado == '');
}

btnEncriptar.addEventListener('click', Prueba);