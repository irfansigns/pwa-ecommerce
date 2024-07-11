import React, { useState } from 'react';

const TestComponent = (props) =>{
  
  const [name,setName] = useState('Irfan');
  console.log(name);//whenever component is rerendered these consoles will be called again.

 

  const changeName = () =>{
   

    setName('Sheikh');

  }

 

  return(
    <div className="container">
      <h1>{name}</h1>
      <button onClick={changeName} className="btn btn-primary">Change Name</button>
    </div>
  )
}

export default TestComponent;