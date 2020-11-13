import {getHeroeById} from './bases/08-imp-exp-find-filter';

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            const p1 = getHeroeById(id);
            //console.log(p1);
            p1 ? resolve(p1) : reject(' No seeee veeeeeee')
        }, 2000);
    })

}

getHeroeByIdAsync(10)
.then(heroe => console.log(heroe))
.catch((err) => console.warn(err));

//Tambien funcionaria ya que le pasamos las referencias de las funciones de console
getHeroeByIdAsync(2)
.then( console.log )
.catch( console.warn );