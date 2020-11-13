import React from 'react';
import PropTypes from 'prop-types';
//import React, {Fragment} from 'react';
import Charla, {preguntaStyle} from './Charla';


const PrimeraApp = ({poble, pais, telefon}) => {

    const saludo = {
        nombre: 'David',
        edad: 48,
    }
    const {nombre, edad} = saludo;

    return (
        <>
            <Charla 
                nombre={nombre}
                edad={edad}
                poble={poble}
            />
            <p style={preguntaStyle}>A quin poble vius ?</p>
            <p>Visc a {poble}, {pais}. El meu telf es el {telefon} </p>
        </>
    )
    
}
//Establir Proptypes
PrimeraApp.propTypes = {
    poble: PropTypes.string.isRequired,
    pais: PropTypes.string.isRequired,
    telefon: PropTypes.number.isRequired,
}


export default PrimeraApp;