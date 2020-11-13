const API_KEY = 'GcMNlstqnvOdBp0PrhH4FvxrvdhTVVZj';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

peticion
    .then( resp => resp.json())
    .then( ({data}) => {
        const {url} = data.images.original;
        //codigo para imagen en el navegador
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
        //fin de.
    })
    .catch( console.warn );