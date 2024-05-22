// FOR TEXTAREA
const textarea = document.getElementById('myTextarea');
textarea.addEventListener('input', autoResize, false);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

// FOR COMENTARIO USUARIO
document.addEventListener('DOMContentLoaded', function() {
    // Cargar comentarios guardados desde el localStorage
    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    const contenedor = document.querySelector('.contenedorComentarios');
    savedComments.forEach(comment => {
        createCommentElement(contenedor, comment.name, comment.text);
    });
});

const botonComentario = document.querySelector('#boton');
botonComentario.addEventListener('click', miComentario, false);

function miComentario() {
    // Obtener los valores de los inputs
    const nombre = document.querySelector('.nombre');
    const nombreValue = nombre.value.trim();
    const comentario = document.querySelector('#myTextarea');
    const comentarioValue = comentario.value.trim();

    if (nombreValue && comentarioValue && isNaN(nombreValue) && isNaN(comentarioValue)) {
        // Agregar los comentarios al DOM y al localStorage
        const contenedor = document.querySelector('.contenedorComentarios');
        createCommentElement(contenedor, nombreValue, comentarioValue);
        
        // Guardar el comentario en el localStorage
        const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
        savedComments.push({ name: nombreValue, text: comentarioValue });
        localStorage.setItem('comments', JSON.stringify(savedComments));
        
        // Vaciar los inputs
        nombre.value = '';
        comentario.value = '';
    }
}

function createCommentElement(contenedor, name, text) {
    // Crear elementos
    const crearElementoH4 = document.createElement('h4');
    crearElementoH4.textContent = `${name} dice:`;
    
    const crearElementoP = document.createElement('p');
    crearElementoP.textContent = text;
    
    const crearElementoHr = document.createElement('hr');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar';
    deleteButton.addEventListener('click', function() {
        deleteComment(contenedor, crearElementoH4, crearElementoP, crearElementoHr, deleteButton, name, text);
    });

    // Agregar los elementos al contenedor
    contenedor.appendChild(crearElementoH4);
    contenedor.appendChild(crearElementoP);
    contenedor.appendChild(deleteButton);
    contenedor.appendChild(crearElementoHr);
}

function deleteComment(contenedor, h4, p, hr, button, name, text) {
    // Eliminar los elementos del DOM
    contenedor.removeChild(h4);
    contenedor.removeChild(p);
    contenedor.removeChild(button);
    contenedor.removeChild(hr);

    // Eliminar el comentario del localStorage
    let savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    savedComments = savedComments.filter(comment => comment.name !== name || comment.text !== text);
    localStorage.setItem('comments', JSON.stringify(savedComments));
}

