
import React, { useState, useEffect } from 'react';
import Api from './Api';

export default function App() {

const [nomes, setNomes] = useState([]);

async function initApi(){
    let getNomes = await Api.getPersons();
    setNomes(getNomes);

}

  useEffect(() =>{
     initApi();

  });


  return (
    <div>
      
    </div>
  );
}

