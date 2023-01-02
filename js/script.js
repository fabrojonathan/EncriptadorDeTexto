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

function encriptarTexto(texto){
    var nuevoTexto = "";

    nuevoTexto = texto

    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')

    return nuevoTexto;
}

function desencriptarTexto(texto){
    var nuevoTexto = "";

    nuevoTexto = texto

    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')

    return nuevoTexto;
}