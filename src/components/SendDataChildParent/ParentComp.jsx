import React from 'react'
import Form from './Form'

const ParentComp = () => {

    const handleGetData = (data) => {
        console.log("Coming from form ", data)

    }
    return (
        <>
            <Form onSubmit={handleGetData} />

        </>
    )
}

export default ParentComp