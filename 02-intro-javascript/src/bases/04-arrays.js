// Arreglos en JS
// Forma antigua de crear un arreglo, que actualmente no se recomienda usar, excepto para darle un tamaño inicial fijo, aunque modificable:  const arreglo = new Array();

// Creamos arreglo

const arreglo = [1,2,3,4]; // creamos array vacio
// arreglo.push('enero'); // con el método push añadimos un valor modificando el array inicial. Se recomienda que cuando queramos insertar algo se utilice el operador spread.
console.log('Arreglo : ' + arreglo);

// Funciona en pares de indice / valor. siendo el incice inicial 0
// seria ['enero] correspondiente a indice 0: valor 'enero' 

let arreglo2 = [...arreglo, 5];
console.log('Arreglo2 : ' + arreglo2);

// uso del metodo map , haciendo un barrido del array y muestra cada valor por consola
arreglo2.map(arreglo => console.log(arreglo));
// uso de map, hace un barrido del array y nos retorna una nuevo array con los valores del primer array, en este caso, multiplicado cada valor por 2
let arreglo4 = arreglo2.map(
    arreglo => {
        return (
            arreglo * 2
        )
    }
);
console.log(arreglo4);


