let nombre = prompt('Ingrese su nombre: ');

let span = document.getElementById('userName');

//operador ternario
span.innerHTML = nombre.length > 1 ? nombre : "a Developer's Team";




let inputUsuario = document.getElementById('userForm').length;
let inputEmail = document.getElementById('emailForm').length;

let borderInput = document.getElementById('userForm');
let borderEmail = document.getElementById('emailForm');

let ingresar = document.getElementById('buttonForm');

ingresar.addEventListener('click', guardarDatos);

function guardarDatos() {

    let valueUser = document.getElementById('userForm').value;
    let valueEmail = document.getElementById('emailForm').value;

    localStorage.setItem('nombreUser', valueUser);
    localStorage.setItem('emailUser', valueEmail);

    // Operador AND 
    valueUser != '' && alert('Inicio de sesión exitoso');

    //Operador OR
    alert(valueUser || 'Agrega tu email.');

    let cerrarLogin = document.getElementById('loginContainer');

    //ACCESO CONDICIONAL A UN OBJETO
    cerrarLogin.style.display = valueUser?.length > 1 ? 'none' :  'grid';

    // console.log(cerrarLogin?.style?.display);

    let habilitarScroll = document.getElementById('container');
    habilitarScroll.style.overflow = valueUser?.length > 1 ? 'auto' :  'hidden';
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