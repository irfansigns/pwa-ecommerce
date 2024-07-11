import React, { useState } from 'react';

const TestComponent = (props) =>{
  const [name,setName] = useState('Irfan');
  console.log(name);

  var val = 'Sheikh';

  const changeName = () =>{
    
    
    val = 'Faisalabad'
    console.log(val);

  }

  return(
    <div className="container">
      <h1>{val}</h1>
      <button onClick={changeName} className="btn btn-primary">Change Name</button>
    </div>
  )
}

export default TestComponent;