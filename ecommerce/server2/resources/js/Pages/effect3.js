import React, { useState } from 'react';

const TestComponent = (props) =>{
 
  const [name,setName] = useState('Irfan');
  console.log(name);

  

  const changeName = () =>{
    let val = name;

   (val==='Irfan')?
   setName('Sheikh'):setName('Irfan')

  }

 

  return(
    <div className="container">
      <h1>{name}</h1>
      <button onClick={changeName} className="btn btn-primary">Change Name</button>
    </div>
  )
}

export default TestComponent;