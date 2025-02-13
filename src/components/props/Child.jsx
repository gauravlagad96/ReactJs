import React from 'react'

const Child = ({ name, id }) => {
    return (
        <>
            <h1>I am child component</h1>
            <h1>Name is : {name} and Id is: {id}</h1>
        </>
    )
}

export default Child