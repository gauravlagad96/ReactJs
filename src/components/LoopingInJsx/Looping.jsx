import React from 'react'
import studentData from "../../api/StudentData.json"

const Looping = () => {
    return (
        <>
            <div>
                <p>id:{studentData[0].id}</p>
                <p>Name:{studentData[0].name}</p>
                <p>course:{studentData[0].course}</p>
            </div>
            <div>
                <p>id:{studentData[5].id}</p>
                <p>Name:{studentData[5].name}</p>
                <p>course:{studentData[5].course}</p>
            </div>

            {/* using map method */}
            <div>
                {
                    studentData.map((studentData) => {
                        return(
                        <div key={studentData.id}>
                            <p>id:{studentData.id}</p>
                            <p>Name:{studentData.name}</p>
                            <p>course:{studentData.course}</p>
                            <br />
                        </div>
                        )
                    })

                }
            </div>

        </>
    )
}

export default Looping