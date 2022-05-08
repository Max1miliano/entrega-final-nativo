let nombre = prompt('Ingrese su nombre: ');

let span = document.getElementById('userName');

span.innerHTML = nombre;

// localStorage.clear();

let inputUsuario = document.getElementById('userForm').length;
let inputEmail = document.getElementById('emailForm').length;

let borderInput = document.getElementById('userForm');
let borderEmail = document.getElementById('emailForm');

let ingresar = document.getElementById('buttonForm');

ingresar.addEventListener('click', guardarDatos);

function guardarDatos() {

    console.log('El click funciona');
    let valueUser = document.getElementById('userForm').value;
    let valueEmail = document.getElementById('emailForm').value;

    localStorage.setItem('nombreUser', valueUser);
    localStorage.setItem('emailUser', valueEmail);

    alert('Inicio de sesión exitoso');

    let cerrarLogin = document.getElementById('loginContainer');
    cerrarLogin.style.display = 'none';
    let habilitarScroll = document.getElementById('container');
    habilitarScroll.style.overflow = 'auto';
}

let agregarNombre = document.getElementById('nameContact');
let agregarEmail = document.getElementById('emailContact');

agregarNombre.addEventListener('click', agregarValue);

function agregarValue() {
    agregarNombre.value = localStorage.getItem('nombreUser');
    agregarEmail.value = localStorage.getItem('emailUser');
}

let enviarTexto = document.getElementById('enviarComentarios');

enviarTexto.addEventListener('click', guardarComentarios);

function guardarComentarios() {
    let comentarios = document.getElementById('comentarios').value;
    localStorage.setItem('comentarios', comentarios);

    alert('Gracias por contactarnos, te responderemos a la brevedad.');
}