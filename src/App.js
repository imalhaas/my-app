
import './Header.css';
import Header from './Header';
import React, { useState, useEffect } from 'react';


function App() {

  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("Lucas")
  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5, 6])

  useEffect(())


  return (
    <div>
     {
      numeros.map(function(val){
        return(
          <p>{val}</p>
        )
      })
    }
    
    
      <button onClick={() => setNome("Magalhaes")}>

        Click me

      </button>

    </div>

  );
}

export default App;
