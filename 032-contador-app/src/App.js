import React, {useState} from 'react';
import PropTypes from 'prop-types';


const App = ({value}) => {

  //Hooks
  const [counter, setCounter] = useState(value);

  //Handles
  const handleAdd = () => {
    setCounter( counter + 1);
    console.log(`Valor del counter pre-click: ${counter}, valor del value inicial del useState: ${value}`);
  }
  const handleResset = () => {    
    setCounter( value );
    console.log(`Valor del counter pre-click: ${counter}, valor del value inicial del useState: ${value}`);

  }
  const handleSubstract = () => {
    setCounter( counter - 1);
    console.log(`Valor del counter pre-click: ${counter}, valor del value inicial del useState: ${value}`);
  }

  return (
    <div className='mainContainer'>
      <div className='textos'>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
      </div>
      <div className='buttons'>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleResset}>Reset</button>
        <button onClick={handleSubstract}>-1</button>
        {console.log(`Valor del counter post-click: ${counter}, valor del value inicial del useState: ${value}`)}
      </div>
    </div>
  )
}

App.propTypes = {
  value: PropTypes.number.isRequired,
}

export default App;
