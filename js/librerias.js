let nombre = prompt("Ingrese su nombre: ");

let span = document.getElementById("userName");

//operador ternario
// span.innerHTML = nombre.length > 1 ? nombre : "a Developer's Team";

// let inputUsuario = document.getElementById("userForm").length;
// let inputEmail = document.getElementById("emailForm").length;

let borderInput = document.getElementById("userForm");
let borderEmail = document.getElementById("emailForm");

let ingresar = document.getElementById("buttonForm");

// ingresar.addEventListener('click', guardarDatos);


function guardarDatos() {
  // let valueUser = document.getElementById("userForm").value;
  // let valueEmail = document.getElementById("emailForm").value;

  // localStorage.setItem("nombreUser", valueUser);
  // localStorage.setItem("emailUser", valueEmail);

  // let closeAlert = 'Esto es un texto';

  // // Alert para logueo exitoso
  // valueUser && valueEmail != '' && setTimeout(()=> {alert(closeAlert)}, 2000);

  // Alert para logueo exitoso
  // valueUser && valueEmail != "" && alert("Te logueaste correctamente");

  
  // valueUser && valueEmail != "" && setTimeout(()=> {
  //   // ingresar.style.backgroundColor = 'green';
  //   console.log('esto funciona');
  // }, 3000);

  //Alert para completar los 2 campos
  // valueEmail ||
  //   swal({
  //     title: "Datos Incorrectos",
  //     text: "Tenes que completar todos los campos",
  //     icon: "error",
  //     button: "Cerrar",
  //   });

  // let cerrarLogin = document.getElementById("loginContainer");

  // //ACCESO CONDICIONAL A UN OBJETO
  // cerrarLogin.style.display =
  //   valueUser?.length > 1 ? (valueEmail?.length > 1 ? "none" : "grid") : "grid";

  // // console.log(cerrarLogin?.style?.display);

  // let habilitarScroll = document.getElementById("container");
  // habilitarScroll.style.overflow =
  //   valueUser?.length > 1
  //     ? valueEmail?.length > 1
  //       ? "auto"
  //       : "hidden"
  //     : "hidden";

  // setTimeout(() => {
  //     let cerrarLogin = document.getElementById("loginContainer");

  // //ACCESO CONDICIONAL A UN OBJETO
  // cerrarLogin.style.display =
  //   valueUser?.length > 1 ? (valueEmail?.length > 1 ? "none" : "grid") : "grid";

  // // console.log(cerrarLogin?.style?.display);

  // let habilitarScroll = document.getElementById("container");
  // habilitarScroll.style.overflow =
  //   valueUser?.length > 1
  //     ? valueEmail?.length > 1
  //       ? "auto"
  //       : "hidden"
  //     : "hidden";
  //   }, 2000);

  let cerrarLogin = document.getElementById("loginContainer");

  //ACCESO CONDICIONAL A UN OBJETO
  cerrarLogin.style.display = 'none'

  // console.log(cerrarLogin?.style?.display);

  // let habilitarScroll = document.getElementById("container");
  // habilitarScroll.style.overflow = 'none';
}

let agregarNombre = document.getElementById("nameContact");
let agregarEmail = document.getElementById("emailContact");

agregarNombre.addEventListener("click", agregarValue);

function agregarValue() {
  agregarNombre.value = localStorage.getItem("nombreUser");
  agregarEmail.value = localStorage.getItem("emailUser");
}

let enviarTexto = document.getElementById("enviarComentarios");

enviarTexto.addEventListener("click", guardarComentarios);

function guardarComentarios() {
  let comentarios = document.getElementById("comentarios").value;
  localStorage.setItem("comentarios", comentarios);

  // alert('Gracias por contactarnos, te responderemos a la brevedad.');
  Toastify({
    text: "Tu mensaje fue enviado correctamente",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
}

// Me traigo data de un JSON (JSON.DATA)

const perfilUno = document.getElementById('nombrePerfil1')
const perfilDos = document.getElementById('nombrePerfil2')

const edadUno = document.getElementById('edadPerfil1')
const edadDos = document.getElementById('edadPerfil2')

const estudiosUno = document.getElementById('estudiosPerfil1')
const estudiosDos = document.getElementById('estudiosPerfil2')


fetch('/data.json')
  .then((response) => response.json())
  .then((json) => {

      perfilUno.innerText = `${json[0].nombre}`
      perfilDos.innerText = `${json[1].nombre}`

      edadUno.innerText = `${json[0].edad}`
      edadDos.innerText = `${json[1].edad}`

      estudiosUno.innerText = `${json[0].estudios}`
      estudiosDos.innerText = `${json[1].estudios}`

  });