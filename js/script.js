var bodyBackground = document.body;
/*DOM buttons*/
var btnEncriptar = document.getElementById("btnEncriptar");
var btnDesencriptar = document.getElementById("btnDesencriptar");
var btnCopiar = document.getElementById("btnCopiar");

/*DOM elementos*/

/*Logo, Mensajes informativos y de error*/
var logo = document.getElementById("logoError");
var mensajeError = document.getElementById("mensajeError");
var mensajePrincipal = document.getElementById("mensajePrincipal");

/*Mensaje copiado*/
var mensajeCopiado = document.getElementById("containerMensajeCopiado");

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

function encriptarTextoButton(){
    if(!ComprobarMensajeVacio()){
        var textoIngresado = document.getElementById("textareaMensaje").value;
        var textoEncriptado = encriptarTexto(textoIngresado);
        textoTraducido.style.display = "block";
        textoTraducido.innerHTML = textoEncriptado;
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
    }
}

function desencriptarTextoButton(){
    if(!ComprobarMensajeVacio()){
        var textoIngresado = document.getElementById("textareaMensaje").value;
        var textoEncriptado = desencriptarTexto(textoIngresado);
        textoTraducido.style.display = "block";
        textoTraducido.innerHTML = textoEncriptado;
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
    }
}

function copiarTexto(){
    var texto = document.getElementById("textoTraducido").innerHTML;
 
    navigator.clipboard.writeText(texto)
    .then(() => {
        console.log('Texto copiado en el portapapeles!');
        console.log(texto);
    })
    .catch(err => {
        console.error('Error durante el copiado: ', err);
    });

    mensajeCopiado.style.visibility = 'visible';
    /*bodyBackground.style.background = 'rgba(0, 0, 0, 0.2)';*/

    setTimeout(() => {mensajeCopiado.style.visibility = 'hidden';}, 1000 * 2);
    
}

btnEncriptar.addEventListener('click', encriptarTextoButton);
btnDesencriptar.addEventListener('click', desencriptarTextoButton);
btnCopiar.addEventListener('click', copiarTexto);

/*Agregar regex para mayusculas y acentos*/
/*Agregar cuadro flotante para indicar texto copiado al portapapeles (Opcional)*/