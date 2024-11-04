import React from 'react'
import { useState } from 'react'

const StateEx = () => {

    const [count, setCount] = useState(0);

    const incrCount = () => {
        setCount(()=>count+1);
    }

    return (

        <>
            <div>
                <center>
                    <h1>{count}</h1>
                    <button onClick={incrCount} >Incremnt count + </button>
                </center>

            </div>
        </>

    )
}

export default StateEx