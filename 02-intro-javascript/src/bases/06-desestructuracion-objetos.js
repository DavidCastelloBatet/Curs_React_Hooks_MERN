// Desestructuracion de objetos o Asignacion Desestructurante de objetos

const persona1 = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}

const persona2 = {
    nombre: 'Tony Stark',
    edad: 45,
    clave: 'Ironman',
    rango: 'Capitan',
    posicion: {
        lat: 35.03333,
        long: 40.33333,
    }
}

// podemos extraer las propiedades que nos interesen del objeto de la siguiente manera:

//const {nombre, edad, clave} = persona;

//console.log(nombre, edad, clave);


const retPersona1 = (usuario) => {
    const {nombre, edad, clave} = usuario;

    console.log(`Resumen : ${nombre} ${edad} ${clave}`);
}

retPersona1(persona1);

// podemos desestructurar las propiedades en el parametro de la funcion
// podemos asignar parametros por defecto. En el caso, si el objeto no tiene propiedad "rango", se le asigna la que le ponemos por defecto.
// podemos hacer desestructuracion anidada

const retPersona2 = ({nombre, edad, clave, rango = 'Soldado', posicion:{lat, long}}) => {
    console.log(`------------------------`);
    console.log(`FICHA COMPLETA DEL HEROE`);
    console.log(`------------------------`);
    console.log(`Nombre del vengador : ${nombre}`);
    console.log(`Edad actual : ${edad}`);
    console.log(`Nombre en clave : ${clave}`);

    (rango === 'Soldado' || rango === null) ? 
    console.log(`Rango actual : Soldado  (pendiente de confirmar)`): 
    console.log(`Rango actualizado : ${rango}`);

    console.log(`Ultima posición confirmada:  Latitud : ${lat}  -  Longitud : ${long}`)
}
retPersona2(persona2);







