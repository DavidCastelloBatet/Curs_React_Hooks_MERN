//import { heroes } from './data/heroes';

//const { default: heroes } = require("./data/heroes");
import heroes, {owners} from '../data/heroes';

// El metodo find recibe una funcion como argumento (callback), el find barrera los elementos heroe de heroes hasta que encuentre un que cumpla la condicion del find y retornara el PRIMERO que encuentre

const getHeroeById = (id) => {
    return heroes.find(heroe => {
        return id === heroe.id
    })
}

// Simplificado

const getHeroeByIdSimp = (id) => heroes.find((heroe) => id === heroe.id);

console.log(getHeroeById(2));
console.log(getHeroeByIdSimp(3));

// el metodo filter recibe una funcion como argumento (callback), el filter barrera los elementos heroe de heroes y retornara TODOS los  que encuentre  que cumplan la condicion del filter

console.log(`Owners importados : ${owners}`);

const getHeroByOwner = (owner) => {
    return heroes.filter((heroe) => {
        return heroe.owner === owner;
    })
}
//Simplificado
const getHeroByOwnerSimp = (owner) => heroes.filter((heroe) => owner === heroe.owner)

console.table(getHeroByOwner('DC'));
console.table(getHeroByOwnerSimp('Marvel'));


