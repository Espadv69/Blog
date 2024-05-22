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
    
}
