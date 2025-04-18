// import React from 'react';
import DestruStudentCard from './DestruStudentCard';
import studentData from '../../api/StudentData.json';

const DestruStudentList = () => {
  return (
    <>
    <center>Destructured props Examples !</center>
      <ul>
        {studentData.map((curElem) => (
          <li key={curElem.id} style={{background:"red",color:"greenyellow"}}>
            <DestruStudentCard curElem={curElem} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default DestruStudentList;
