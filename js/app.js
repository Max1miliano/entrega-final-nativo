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

// FUNCIONES

// function calculadora(primerNumero, segundoNumero, operacion) {
//     switch (operacion) {
//         case "+":
//             return primerNumero + segundoNumero;
//             break;
//         case "-":
//             return primerNumero - segundoNumero;
//             break;
//         case "*":
//             return primerNumero * segundoNumero;
//             break;
//         case "/":
//             return primerNumero / segundoNumero;
//             break;
//         default:
//             return 0;
//             break;
//     }
// }
// let resultado = calculadora(10, 5, "+");

// console.log(resultado);



// OBJETOS
// const user = {
//     nombre: prompt('Ingresá tu nombre'),
//     email: prompt('Ingresá tu email')
// }

// console.log(user);
// alert("Hola " + user.nombre);

// function user(nombre, email) {
//     this.nombre = prompt('Ingresá tu nombre');
//     this.email = prompt('Ingresá tu apellido');
// }

// const user1 = new user(this.nombre, this.apellido, this.edad)

// console.log(user1);

// function Persona(literal) {
//     this.nombre = literal.nombre;
//     this.apellido = literal.apellido
// }

// const persona1 = new Persona({ nombre: "Homero", apellido: "Simpson" });
// console.log(persona1);

// class user {
//     constructor(nombre, email) {
//         this.nombre = prompt('Ingresar nombre');
//         this.email = prompt('Ingresar email');
//     }

//     hablar() {
//         console.log("Hola soy " + this.nombre + " y mi email es " + this.email)
//     }
// }
// const user1 = new user();

// user1.hablar()

// let cadena = "Hola Maxi";

// console.log(cadena.length);
// console.log(cadena.toLocaleLowerCase());
// console.log(cadena.toLocaleUpperCase());

// function Usuario(nombre, apellido) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.hablar = function () {
//         console.log('Hola ' + this.nombre + ' ' + this.apellido);
//     }
// }

// const usuario1 = new Usuario('Maxi', 'Pompas');

// usuario1.hablar()

// const persona1 = { nombre: 'Maxi', apellido: 'Pompas' }
// console.log('nombre' in persona1);
// console.log('apellido' in persona1);

// for (const propiedad in persona1) {
//     console.log(persona1[propiedad]);
// }

class Usuario { 
    constructor(nombre, clave) { 
        this.nombre = prompt('Ingrese su nombre de usuario');
        this.clave = prompt('Ingrese su clave');
        this.login = false;
    }
    iniciar() { 
        if (this.nombre != 0 && this.clave != 0) {
            this.login = true;
            alert('Estás logeado');
        } else {
            this.login = false;
            alert('Credenciales incorrectas');
        }
        console.log(this.login);
    }
}

const usuario1 = new Usuario();

usuario1.iniciar();
