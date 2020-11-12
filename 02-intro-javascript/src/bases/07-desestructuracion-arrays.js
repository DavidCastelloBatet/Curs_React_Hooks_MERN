// Desestructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

//desestructuramos posicion 1
const [p1] = personajes;
console.log(p1);
//desestructuramos posicion 2
const [,p2] = personajes;
console.log(p2)
//desestructuramos posicion 3
const [,,p3] = personajes;
console.log(p3)

//desestructuracion del arreglo que retorna la funcion
const retornaArreglo = () => {
    return ['ABC', 123];
}

const arr = retornaArreglo();
console.log(`Array sin desestructurar : ${arr}`);

const [letras, numeros] = retornaArreglo();
console.log(`Retorna las letras : ${letras}`);
console.log(`Retorna los números : ${numeros}`);


// Debido a las nuevas specs de React Hooks -fecha actual 12/11(2020) esta parte ya no funciona
// TAREA

//const useStateNuevo = ( valor ) => {
//    return [valor, ()=>{console.log('Hola Mundo')}];
//}

//const arre = useStateNuevo('Goku');

//console.log(arre);



