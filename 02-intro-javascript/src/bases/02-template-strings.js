// Template Strings

// Concatenar strings, puedo poner variables, resultados de operaciones, o llamadas a funciones dentro de estrings. La sintaxis es `contenido ${lo que inserto} y contenido`

// Concatenar a la antigua

const nombre = 'David';
const apellido = 'Castelló'

const nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// Template strings

const nombreComp2 = `${nombre} ${apellido}. Tengo ${24*2} años. ${getSaludo(nombre)}`;

console.log(nombreComp2);

function getSaludo(nom) {
    return `Hola Mundo, de parte de ${nom}!!`;
}