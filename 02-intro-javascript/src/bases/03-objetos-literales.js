// Objetos literales
// los objetos tienen propiedades, que trabajan en pares de llave/valor
// se pueden anidar objetos, dentro de objetos
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        calle: 'espirall, 50',
        poblacion: 'Vilafranca',
    }
}

// la coma en la última propiedad del objeto no es necesaria ni obligatoria, pero se considera una buena práctica.

console.log(persona);

// accedemos a la propiedad de un objeto mediante notacion de punto.

console.log(persona.apellido);
console.log(persona.direccion.calle);
// si ponemos unas llaves alrededor de la variable, estamos creando un nuevo objeto.
// seria como hacer :   {persona : persona}

console.log({persona});

// para crear un clon del objeto, un objeto nuevo.
// si lo hicieramos const persona2 = persona, creariamos tambien un nuevo objeto, pero cualquier modificacion afectaria al objeto inicial ya que de esta forma comparten el mismo espacio en la memoria.
// si lo creamos asi, ocupamos un espacio diferente en memoria y los cambios no afectan al objeto inicial.

const persona2 = {...persona};
console.log(persona2);