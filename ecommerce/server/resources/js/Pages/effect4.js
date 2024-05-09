import React, { useState } from 'react';

const TestComponent = (props) =>{
 
  const [obj,setObj] = useState({name:'irfan' , class:'MCS' ,Rollno:4});
  

  

  const changeName = () =>{
    // setObj('Chenab college'); by this all three values would turn to null
    setObj({...obj,class:"BS Computer"})

  }

 

  return(
    <div className="container">
      <h1>Name:{obj.name} Class:{obj.class} Rollno:{obj.Rollno}</h1>
      <button onClick={changeName} className="btn btn-primary">Change Name</button>
    </div>
  )
}

export default TestComponent;