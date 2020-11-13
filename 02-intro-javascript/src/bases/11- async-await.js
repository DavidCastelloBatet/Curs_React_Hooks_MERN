const getImage = async() => {

    try {
        const API_KEY = 'GcMNlstqnvOdBp0PrhH4FvxrvdhTVVZj';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
        const {data} = await resp.json();
    
        const {url} = data.images.original;
        //codigo para imagen en el navegador
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append( img );
        //fin de.
        
    } catch (error) {
        console.warn(error);
    }


}

getImage();