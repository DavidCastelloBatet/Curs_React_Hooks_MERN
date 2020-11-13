import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';

import './index.css';

// Práctica pasar props de component pare a component fill, default props, desestructurar props , import - export, i treball amb Proptypes.

ReactDOM.render(
    <PrimeraApp 
        poble='Vilafranca'
        pais='Catalunya'
        telefon={938929999} />,
         
    document.querySelector('#root')
)