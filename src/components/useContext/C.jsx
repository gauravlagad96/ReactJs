import React from 'react'

import { UserContext } from '../../App'
const C = (props) => {
    return (
        <>

            <UserContext.Consumer>

                {

                    (name) => (
                        <h1>Name in C is: {name}</h1>

                )
                }

            </UserContext.Consumer>
            <h1>componet c</h1>

        </>
    )
}

export default C