
import React, { useState, useEffect } from 'react';


export default function App() {

  const [hora, setHora] = useState(4);
  const [minuto, setMinuto] = useState(30);
  const [segundos, setSegundos] = useState(1);

  function callAlert(){

  }

  useEffect(() =>{

    const interval = setInterval(() => {
      
     setSegundos(segundos+1);
      if(segundos == 59){
        setSegundos(0);
        setMinuto(minuto+1);
        if(minuto == 59){
          setMinuto(0);
          setHora(hora+1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);

  });


  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{hora}:{minuto}:{segundos}</h1>
    </div>
  );
}

