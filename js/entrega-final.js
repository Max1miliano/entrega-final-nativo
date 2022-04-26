var transacciones = [
    {
        nombre: "Maxi",
        cantidad: 25000,
        tipo: "egreso",
        fecha: "10/04/22"
    },
    {
        nombre: "Jorge",
        cantidad: 2000,
        tipo: "egreso",
        fecha: "6/04/22"
    },
    {
        nombre: "Jesus",
        cantidad: 27000,
        tipo: "ingreso",
        fecha: "10/04/22"
    },
    {
        nombre: "Martin",
        cantidad: 5000,
        tipo: "ingreso",
        fecha: "10/03/22"
    },
    {
        nombre: "Roberto",
        cantidad: 30000,
        tipo: "ingreso",
        fecha: "9/03/22"
    }
]

let busqueda = prompt('Buscar ingreso o egreso?');

if (busqueda == 'ingreso') {
    var resultado = transacciones.filter(elemento => { 
        return elemento.tipo == 'ingreso'
    })
    console.log(resultado);
} else if (busqueda == 'egreso') { 
    var resultado2 = transacciones.filter(elemento => {
        return elemento.tipo == 'egreso'
    })
    console.log(resultado2);
}



