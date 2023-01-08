var bodyBackground = document.body;
/*DOM buttons*/
var btnEncriptar = document.getElementById("btnEncriptar");
var btnDesencriptar = document.getElementById("btnDesencriptar");
var btnCopiar = document.getElementById("btnCopiar");
var btnOkMensajeCopiado = document.getElementById("btnOkMensajeCopiado");

/*DOM elementos*/

/*Logo, Mensajes informativos y de error*/
var logo = document.getElementById("logoError");
var mensajeError = document.getElementById("mensajeError");
var mensajePrincipal = document.getElementById("mensajePrincipal");

/*Mensaje de elemento copiado*/
var mensajeCopiado = document.getElementById("containerMensajeCopiado");

function comprobarExpresiones(texto){
    const expression = /[A-Z]|á|é|í|ó|ú|\W|_/g;
    const regex = new RegExp(expression);
    return regex.test(texto);
}

function ComprobarMensajeVacio(){
    var textoIngresado = document.getElementById("textareaMensaje").value;
    return (textoIngresado == '');
}

function cambiarEstiloDivInformacionRojo(){
    let textInformacion = document.getElementById("textInformacion");
    let signoExclamacion = document.getElementById("signoExclamacion");
    let signoExclamacionRojo = document.getElementById("signoExclamacionRojo");

    signoExclamacion.style.display = "none";
    signoExclamacionRojo.style.display = "inline-block";
    textInformacion.style.color = "#BF0808";
    textInformacion.style.fontWeight = "bold";

    alert("No se admiten letras mayusculas, acentos y/o caracteres especiales! Reintente");
    document.getElementById('textoTraducido').onfocus();
}

function cambiarEstiloDivInformacionBase(){
    let textInformacion = document.getElementById("textInformacion");
    let signoExclamacion = document.getElementById("signoExclamacion");
    let signoExclamacionRojo = document.getElementById("signoExclamacionRojo");

    signoExclamacion.style.display = "inline-block";
    signoExclamacionRojo.style.display = "none";
    textInformacion.style.color = "#495057";
    textInformacion.style.fontWeight = "normal";
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

function encriptarTextoButton(){
    if(!ComprobarMensajeVacio()){
        var textoIngresado = document.getElementById("textareaMensaje").value;
       
        if(comprobarExpresiones(textoIngresado)){
            cambiarEstiloDivInformacionRojo();
            return;
        }
        else{
            cambiarEstiloDivInformacionBase();
        }


        var textoEncriptado = encriptarTexto(textoIngresado);
        textoTraducido.style.display = "block";
        textoTraducido.innerHTML = textoEncriptado;
        textoTraducido.focus();
        mensajeError.style.display = "none";
        mensajePrincipal.style.display = "none";
        logo.style.display = "none";
        btnCopiar.style.display = "block";
    }
    else{
        alert("Debe ingresar un texto para encriptar/desencriptar!.");
        mensajeError.style.display = "block";
        mensajePrincipal.style.display = "block";
        textoTraducido.style.display = "none";
        btnCopiar.style.display = "none";
        cambiarEstiloDivInformacionBase();
    }
}

function desencriptarTextoButton(){
    if(!ComprobarMensajeVacio()){
        var textoIngresado = document.getElementById("textareaMensaje").value;
        if(comprobarExpresiones(textoIngresado)){
            cambiarEstiloDivInformacionRojo();
            return;
        }
        else{
            cambiarEstiloDivInformacionBase();
        }
        var textoEncriptado = desencriptarTexto(textoIngresado);
        textoTraducido.style.display = "block";
        textoTraducido.innerHTML = textoEncriptado;
        textoTraducido.focus();
        mensajeError.style.display = "none";
        mensajePrincipal.style.display = "none";
        logo.style.display = "none";
        btnCopiar.style.display = "block";
    }
    else{
        alert("Debe ingresar un texto para encriptar/desencriptar!.");
        mensajeError.style.display = "block";
        mensajePrincipal.style.display = "block";
        textoTraducido.style.display = "none";
        btnCopiar.style.display = "none";
        cambiarEstiloDivInformacionBase();
    }
}

function copiarTexto(){
    var texto = document.getElementById("textoTraducido").innerHTML;
    var areaIngresoTexto = document.getElementById("textareaMensaje");
    
    navigator.clipboard.writeText(texto)
    mensajeCopiado.style.visibility = 'visible';
    areaIngresoTexto.value = texto;
    setTimeout(() => { mensajeCopiado.style.visibility = 'hidden';
                       areaIngresoTexto.focus();
                      }, 1000 * 2);
}

btnEncriptar.addEventListener('click', encriptarTextoButton);
btnDesencriptar.addEventListener('click', desencriptarTextoButton);
btnCopiar.addEventListener('click', copiarTexto);
btnOkMensajeCopiado.addEventListener('click', () => { 
                                                    mensajeCopiado.style.visibility = 'hidden' 
                                                    document.getElementById("textareaMensaje").focus();});