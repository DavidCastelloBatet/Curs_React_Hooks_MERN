import React from 'react';
import PropTypes from 'prop-types';

export const preguntaStyle = {
     color: 'red',
}

const Charla = ({nombre, edad, poble, treball}) => {
//nombre, edad arriva des de PrimeraApp
//poble arriva desde Index > PrimeraApp

    return (
        <>
            <h1>Questionari</h1>
            <p style={preguntaStyle}>Hola, {nombre}, quants anys tens ?</p>
            <p>Hola des de {poble} ! Tinc {edad} anys.</p>
            <p style={preguntaStyle}>A que et dediques ?</p>
            <p>Soc {treball}</p>

        </>
    )

}

//Establir Proptypes
Charla.propTypes = {
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired
}

//Establir default props
Charla.defaultProps = {
    treball: 'programador',
}



export default Charla;