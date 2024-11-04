import React from 'react'

const InterviewQuestions = () => {

    const students = [];
    return (
        <>
            {/* 1 */}
            <h1>{students.length && "NO students found"}</h1>
            <h1>{students.length === 0 && "NO students found"}</h1>
            <h2>{!students.length && "NO students found"}</h2>
            <h3>{!Boolean(students.length) && "No students found"}</h3>

            <h1>Number of students: {students.length}</h1>

        </>)
}

export default InterviewQuestions