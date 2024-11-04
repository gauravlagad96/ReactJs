import React from 'react';

const DestruStudentCard = (props) => {
    // const{curElem}=props;
     const{id,name,course}=props.curElem;
  return (
    <>
      <div>
        <h1>id: {id}</h1>
        <h2>name: {name}</h2>
        <h3>course: {course}</h3>
        <br />
      </div>
    </>
  );
};

export default DestruStudentCard;
