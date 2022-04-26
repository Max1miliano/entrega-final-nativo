// let nombre = 'Homero'
// let apellido = 'Simpson'
// let edad = '35'

// const norte = 'San Isidro'
// const sur = 'Adrogue'
// const oeste = 'Villa Ballester'
// const este = 'Vicente Lopez'

// const conductor = {
//     nombre: 'Homero',
//     apellido: 'Simpson',
//     edad: 35,
//     cuidad: 'Springfield',
//     genero: 'masculino'
// }

// const carnet = 'Nombre: ' + conductor.nombre + ' Edad: ' + conductor.edad + ' Cuidad: ' + conductor.cuidad + ' Género: ' + conductor.genero;

// console.log(carnet);


// const familiar1 = prompt('Ingrese cinco familiares');
// const familiar2 = prompt('Ingrese cinco familiares');
// const familiar3 = prompt('Ingrese cinco familiares');
// const familiar4 = prompt('Ingrese cinco familiares');
// const familiar5 = prompt('Ingrese cinco familiares');

// alert('Tus familiares son ' + familiar1 + ',' + familiar2 + ',' + familiar3 + ',' + familiar4 + ',' + ' y ' + familiar5);

// let precio = parseFloat(prompt('INGRESAR PRECIO'));
// let descuento20 = precio - (precio * 0.2);
// let descuento30 = precio - (precio * 0.3);
// console.log(descuento20);
// console.log(descuento30);

// const nombre = prompt('Ingresá tu nombre: ');

// if (nombre == 'maxi') {
//     alert('Fui Yo');
// } else {
//     alert('Yo no fui');
// }

// const tecla = prompt('Ingrese y');

// if (tecla === "y") {
//     alert('Correcto');
// } else {
//     alert('Incorrecto');
// }

// const numero = prompt('Ingresa un número del 1 al 4 para seleccionar tu personaje');

// if (numero == 1) {
//     alert('Elejiste a Homero');
// } else if (numero == 2) {
//     alert('Elejiste a Marge');
// } else if (numero == 3) {
//     alert('Elejiste a Bart');
// } else if (numero == 4) {
//     alert('Elejiste a Lisa');
// }

// const numero = parseFloat(prompt('Ingresa tu presupuesto'));

// if ((numero >= 0) && (numero <= 1000)) {
//     alert('Presupuesto bajo');
// } else if ((numero >= 1001) && (numero <= 3000)) {
//     alert('Presupuesto medio');
// } else if (numero >= 3001) {
//     alert('Presupuesto alto');
// }

// const producto1 = prompt('Ingresar producto de almacen 1/4: ');
// const producto2 = prompt('Ingresar producto de almacen 2/4: ');
// const producto3 = prompt('Ingresar producto de almacen 3/4: ');
// const producto4 = prompt('Ingresar producto de almacen 4/4: ');

// let almacen = producto1 + producto2 + producto3 + producto4;
// // let almacen = [producto1,producto2,producto3,producto4];
// if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")) {
//     let heladera = "1) " + producto1 + " " + "2) " + producto2 + " " + "3) " + producto3 + " " + "4) " + producto4;
//     console.log(heladera);
// } else {
//     console.log('ERROR - TENES QUE LLENAR TODOS LOS PRODUCTOS');
// }

// const numero = prompt('Ingrese un numero');

// for (let index = 0; index < numero; index++) {
//     if (numero > 3) {
//         break
//     }
//     alert(numero + ' lados');
// }

// let alumnos = '';
// for (let index = 0; index < 10; index++) {
//     alumnos += prompt("INGRESAR NOMBRE DE ALUMNO") + "\n";
// }
// alert(alumnos);

// let nombres = prompt('Ingresar nombres');
// let ingresados = ''
// while (nombres != 'voldemort') {
//     ingresados += nombres + "\n";
//     nombres = prompt('Ingrese personaje de Harry Potter: ');
// }
// alert(ingresados);

// let ingresar = prompt('Seleccionar del 1 al 4');
// while (ingresar != "ESC") {
//     switch (ingresar) {
//         case '1':
//             alert('tomate');
//             break;
//         case '2':
//             alert('papa');
//             break
//         case '3':
//             alert('carne');
//             break
//         case '4':
//             alert('pollo');
//             break
//         default:
//             alert('Error');
//             break;
//     }
//     ingresar = prompt('Seleccionar del 1 al 4');
// }

