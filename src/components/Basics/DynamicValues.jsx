import React from 'react'

const DynamicValues = () => {

    const name= "gaurav lagad";
    
    function myFun(){
        return"This is simple function ";
    }
  return (
    <div>
        <p>{1+2+3}</p>
        <h1>{name}</h1>
    <p>{myFun()}</p>
    </div>
  )
}

export default DynamicValues