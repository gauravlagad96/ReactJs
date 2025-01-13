import React, { useContext } from 'react';
import { UserContext } from '../../App'
const A = () => {
    var name = useContext(UserContext);
    return (

        <>
            <h1>Name is A is : {name}</h1>
        </>
    )
}

export default A