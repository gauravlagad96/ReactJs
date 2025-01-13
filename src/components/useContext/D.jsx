import React, { useContext } from 'react';
import { UserContext } from '../../App'
const D = () => {
    var name = useContext(UserContext);
    return (

        <>
            <h1>Name is D is : {name}</h1>
        </>
    )
}

export default D