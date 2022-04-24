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

<<<<<<< HEAD
// console.log(masculinos)


// Funciones de orden superior
// function mayorQue(n) {
//     return (m) => m > n
// }

// let mayorQueDiez = mayorQue(10)

// console.log(mayorQueDiez(12));
// console.log(mayorQueDiez(9));


// Retornar funciones
// function asignarOperacion(op) {
//     if (op == "sumar") {
//         return (a, b) => a + b
//     } else if (op == "restar") {
//         return (a,b) => a - b
//     }
// }

// let suma = asignarOperacion("sumar");
// let resta = asignarOperacion("restar");

// console.log(suma(4, 10));
// console.log( resta(10, 5) );

// Recibir funciones por parametros
// function porCadaUno(arr, fn) {
//     for (const el of arr) {
//         fn(el)
//     }
// }
// const numeros = [1, 2, 3, 4]

// porCadaUno(numeros, console.log);

// Método for each
// Ejecuta un bloque
// const numeros = [1, 2, 3, 4]

// numeros.forEach(element => {
//     console.log(element);;
// });



// Método find()
// Busca según la condicion en el parametro
// let cursos = [
//     {
//         nombre: "javascript", precio: 15000
//     },
//     {
//         nombre: "ReactJs", precio: 20000
//     }
// ]

// let resultado1 = cursos.find((el) => el.nombre === "ReactJs")
// let resultado2 = cursos.find((el) => el.nombre === "javascript")

// console.log(resultado1);
// console.log(resultado2);

// const cursos = [
//     { nombre: 'Javascript', precio: 15000 },
//     { nombre: 'ReactJS', precio: 22000 },
//     { nombre: 'AngularJS', precio: 22000 },
//     { nombre: 'Desarrollo Web', precio: 16000 },
// ]

// Metodo filter filter()
// const resultado = cursos.filter((el) => el.nombre.includes('JS'))
// const resultado2 = cursos.filter((el) => el.precio > 14000)

// console.log(resultado)
// console.log(resultado2);

// //Método some
// console.log(cursos.some((el) => el.nombre == "Desarrollo Web"))
// // true
// console.log(cursos.some((el) => el.nombre == "VueJS"))
// // false


// // Metodo map
// const nombres = cursos.map((el) => el.nombre)
// console.log(nombres)

//Crear un nuevo array con algún cambio.
// const actualizado = cursos.map((el) => {
//     return {
//         nombre: el.nombre,
//         precio: el.precio * 1.25
//     }
// })

// console.log(actualizado)

//
// const numeros = [1, 2, 3, 4, , 6]
// const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 5)

// console.log(total)
//

// Metodo de reduce
// const miCompra = [
//     { nombre: 'Desarrollo Web', precio: 20000 },
//     { nombre: 'Javascript', precio: 18750 },
//     { nombre: 'ReactJS', precio: 27500 }
// ]

// const total = miCompra.reduce((acc, el) => acc + el.precio, 0)
// console.log(total) // 66250

// Metodo sort()
// const items = [
//     { name: 'Pikachu', price: 21 },
//     { name: 'Charmander', price: 37 },
//     { name: 'Pidgey', price: 45 },
//     { name: 'Squirtle', price: 60 }
// ]
// items.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     // a es igual a b
//     return 0;
// })

// const productos = [{ id: 1, producto: "Arroz", precio: 125 },
// { id: 2, producto: "Fideo", precio: 70 },
// { id: 3, producto: "Pan", precio: 50 },
// { id: 4, producto: "Flan", precio: 100 }]

// const buscado = productos.find(producto => producto.id === 3)
// console.log(buscado) //{id: 3, producto: "Pan", precio: 50}

// const existe = productos.some(producto => producto.nombre === “Harina”)
// console.log(existe) // false

// const baratos = productos.filter(producto => producto.precio < 100)
// console.log(baratos)
// // [{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

// const listaNombres = productos.map(producto => producto.nombre)
// console.log(listaNombres);
// //[“Arroz”, “Fideo”, “Pan”, “Flan”]
=======
// console.log(masculinos)
>>>>>>> desafios
