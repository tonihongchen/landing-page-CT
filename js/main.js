
fetch('header.html')
.then(respuesta => respuesta.text())

.then(datos => {
    document.getElementById('header').innerHTML = datos;
});