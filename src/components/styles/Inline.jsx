import React from 'react';
import styled from 'styled-components';

const Inline = () => {

    //recommended way for performance not render every time.
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        zIndex: 3,
        paddingLeft: "19px",
        marginLeft: "50%"
    }

    const LoginButton = styled.button`
    background-color:black;
    color: blue;
    // margin-x:auto;
`;

    return (
        <div>
            <h1 style={{ backgroundColor: "black", color: "white", textAlign: 'center' }}>
                Inline styles using the style tag
            </h1>

            {/*  */}
            <button style={buttonStyle}>Click Here</button>
            <br />
            <br /><br />
            {/* Using styled componets */}
            <LoginButton> Login  </LoginButton>
        </div>
    );
};

export default Inline;



