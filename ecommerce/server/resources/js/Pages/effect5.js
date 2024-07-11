import React, { useState , useEffect } from 'react';

const TestComponent = (props) =>{
 
  const [num,setNum] = useState(1);
  
  useEffect(()=>{
    console.log("Hello useEffect");
  });
  
  return(
    <div className="container">
      <h1>{num}</h1>
      <button onClick={()=>setNum(num +1)} className="btn btn-primary">Change Name</button>
    </div>
  )
}

export default TestComponent;