// let nombre = "Maxi";
// let apellido = "Pompas";

// console.log(nombre);
// console.log(apellido);

// function Saludar() {
//     console.log("Hola");
// }
// Saludar();

// let ingresarNombre = "esto es una alerta";

// alert(ingresarNombre);

// let entrada = prompt('Ingresar un tu edad');

// if (entrada > 18) {
//     alert('Podes ingresar al sitio');
// } else {
//     alert('No podes ingresar al sitio');
// }

// let a = prompt('Ingresar el valor de A:');
// let b = prompt('Ingresar el valor de B:');

// let resultado = a + b;

// if (a > b) {
//     alert(resultado);
// } else {
//     alert('A debe ser mayor que B para continuar');
// }

// for (let conteo = 1; conteo <= 10; conteo++) {
//     alert(conteo);
// }

// Ejecutar bloque de codigo en cierto caso
// for (let i = 0; i < 10; i++) {
//     if ((i === 2) || (i === 6)) {
//         alert('Esto es una marca de conteo' + i);
//     }

// }

// Multiplicar
// let ingresarNumero = parseInt(prompt("Ingresar Número"));

// for (let i = 0; i <= 10; i++) {
//     let resultado = ingresarNumero * i;
//     alert(ingresarNumero +" X "+ i +" = "+ resultado);
// }

// Maquina de turnos
// for (let i = 0; i <= 20; i++) {
//     let ingresarNombre = prompt("Ingresá tu nombre:");
//     alert(" Turno N° " + i + " Nombre " + ingresarNombre);
// }


// let entrada = prompt("Ingresar un dato: ");
// while (entrada != "ESC") {
//     alert("El usuario ingresó "+entrada);
//     entrada = prompt("Ingresar otro dato: ");
// }


// let numero = 0;
// do {
//     numero = prompt("Ingresá un número");
//     alert(numero);
// } while (parseInt(numero)) {
// }

// let entrada = prompt("Ingresá tu nombre");
// while (entrada != "ESC") {
//     switch (entrada) {
//         case "ana":
//             alert("HOLA ANA")
//             break;
//         case "juan":
//             alert("HOLA JUAN");
//             break
//         default:
//             alert("QUIEN CHOTA SOS?")
//             break;
//     }
//     entrada = prompt("Ingresá un nombre");
// }

// Recorrrer todos los elementos de un array
// const numeros = [1, 2, 3, 4, 5]

// for (let index = 0; index < 5; index++) {
//     alert(numeros[index]);
// }

// Me imprime el total de elementos dentro del array
// console.log(numeros.length);


// const numeros = [1, 2, 3, 4, 5]
// for (let index = 0; index < numeros.length; index++) {
//     console.log(numeros[index]);
// }

// numeros.push('otro elemento al final');
// numeros.unshift('otro elemento al inicio');
// console.log(numeros);

// numeros.shift()
// numeros.pop()

// numeros.splice(0,2)

// Generar un string con todos los elementos del array separados por lo que le espefique en las comillas
// console.log(numeros.join('*'));

// const letras = ['A', 'B', 'C', 'D', 'E', 'F']

// const agrupar = numeros.concat(letras)

// console.log(agrupar);

// const nombres = ['Maxi', 'Jesa', 'Igna', 'Pogon', 'Cuello']

// const masculinos = nombres.slice(0, 2);

// console.log(masculinos)