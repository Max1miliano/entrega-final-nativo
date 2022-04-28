let bienvenido = document.getElementById('bienvenido');

let usuario = prompt('Ingrese su nombre de usuario: ');

let h1 = document.createElement('h1');

h1.innerHTML = usuario;

bienvenido.append('Hola ' + usuario);