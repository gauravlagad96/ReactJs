import React from 'react'
import ParentComp from './components/SendDataChildParent/ParentComp'
import ControlledComponent from './components/conrolledUnconrolled/ControlledComponent'

const App1 = () => {
    return (
        <>
            {/* send data from child to parent //!lift up state   */}
            {/* <ParentComp /> */}

            <ControlledComponent />

        </>
    )
}

export default App1