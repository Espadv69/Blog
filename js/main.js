// FOR COMENTARIO
const textarea = document.getElementById('myTextarea');
textarea.addEventListener('input', autoResize, false);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

// FOR COMENTARIO USUARIO
const botonComentario = document.querySelector('#boton');
botonComentario.addEventListener('click', miComentario, false);

function miComentario() {

    // Obtener los valores de los inputs
    const nombre = document.querySelector('.nombre');
    const nombreValue = nombre.value;

    const comentario = document.querySelector('#myTextarea');
    const comentarioValue = comentario.value;

    if(isNaN(nombreValue) && isNaN(comentarioValue)) {

        // Crear elementos
        const crearElementoH4 = document.createElement('h4');
        crearElementoH4.textContent = `${nombreValue} dice:`;
        
        const crearElementoP = document.createElement('p');
        crearElementoP.textContent = `${comentarioValue}`;
        
        const crearElementoHr = document.createElement('hr');

        // Agregar los elementos al contenedor
        const contenedor = document.querySelector('.contenedorComentarios');
        contenedor.appendChild(crearElementoH4);
        contenedor.appendChild(crearElementoP); 
        contenedor.appendChild(crearElementoHr);
        
        // Vaciar los inputs
        nombre.value = '';
        comentario.value = '';
    }
}
