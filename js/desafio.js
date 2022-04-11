let edad = prompt('Ingresar un tu edad:');

for (let i = 0; i <= 2; i++) {
    while (edad < 18) {
        alert('No podes ingresar al sitio');
        edad = prompt('Ingresá tu edad otra vez:');
    }
    while (edad > 18) {
        alert('Podes ingresar al sitio');
        edad = prompt('Ingresá tu edad otra vez:');
    }
}
