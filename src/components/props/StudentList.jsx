import React from 'react';
import StudentCard from './StudentCard';
import studentData from '../../api/StudentData.json';

const StudentList = () => {
  return (
    <>
     <ul>
        {studentData.map((curElem)=>{

            return (<StudentCard key={curElem.id} curElem={curElem}/>);
        })}
     </ul>
    </>
  );
};

export default StudentList;
