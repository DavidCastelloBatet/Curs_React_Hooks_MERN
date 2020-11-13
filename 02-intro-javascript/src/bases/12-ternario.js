// Condicional ternario

// If Else tradicional
const activo = true;

let mensaje = '';

if (activo) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
}

console.log(mensaje);

// Ternario, por defecto true.

const mensaje2 = (activo) ? 'Activo Ternario' : 'Inactivo Ternario';
console.log(mensaje2);

// Ternario 2 => si es true realiza codigo, si es false no hace nada.

const mensaje3 = (activo) && 'Activo Ternario 2';
console.log(mensaje3);