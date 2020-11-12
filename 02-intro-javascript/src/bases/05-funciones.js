// funciones en JS
// forma obsoleta, correcta pero mejor no usar
function saludar(nombre) {
    return`Hola, ${nombre}`;
}
console.log(saludar('David'));

// funcion con constante

const saludar1 = function(nombre){
    return `Hola 1, ${nombre}`;
}
console.log(saludar1('David2'));

// arrow function, con retorno de mas de una linea

const saludar2 = (nombre) => {
    return (
        `Hola arrow, ${nombre}`,
        `Segunda linea`
    );
}
console.log(saludar2('David'))

// arrow function, con retorno de una linea

const saludar3 = (nombre) => `Hola arrow 2, ${nombre}`;
console.log(saludar3('David'));

// ********** TAREA **********
function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('David');
console.log(usuarioActivo);

// 1.- Transformar a funcion de flecha
// 2.- Tiene que retornar objeto implicito
// 3.- Pruebas

const getUserActive = (nombre) => (
    {
        uid: 'ABC123',
        username: nombre,
    }
);

const userActive = getUserActive('David Ejercicio');
console.log(userActive);