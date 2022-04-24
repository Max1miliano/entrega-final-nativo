// let edad = prompt('Ingresar un tu edad:');

// for (let i = 0; i <= 2; i++) {
//     while (edad < 18) {
//         alert('No podes ingresar al sitio');
//         edad = prompt('Ingresá tu edad otra vez:');
//     }
//     while (edad > 18) {
//         alert('Podes ingresar al sitio');
//         edad = prompt('Ingresá tu edad otra vez:');
//     }
// }

// Simulador interactivo
// calcular pagos en cuotas sobre un monto determinado con tres casos.

for (let i = 0; i <= 2; i++) {
    let monto = prompt('Ingresá cantidad a solicitar');
    let cuotas = prompt('Ingresá cantidad de cuotas');

    if (monto > 0 && cuotas > 0) {
        function calcularPrestamo() {
            resultado = monto / cuotas;
            console.log(resultado);
        }
    }

    calcularPrestamo();

    alert('Vas a abonar ' + parseInt(resultado) + ' durante ' + cuotas + ' meses');

    let acuerdo = prompt('Estás de acuerdo?');
    switch (acuerdo) {
        case "si":
            prompt('Por úlitmo, un telefono para comunicarnos:');
            alert('Gracias por elegirnos');
            break;
        case "no":
            alert('Igual no te ibamos a prestar');
            break
        default:
            alert('Debes confirmar el préstamo');
            break;
    }

}
