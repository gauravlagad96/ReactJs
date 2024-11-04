import React from 'react'
const ConditionalRendering = () => {
  const age=18;
  const uername ="gaurav";
  return (
    <div>
        <button>{age>=18?"Adult":"Minor"}</button>
        <button>{age>=18 && "You can vote now"}</button><br />
        <button>{uername||"gaurav"}</button>
    </div>
  )
}

export default ConditionalRendering