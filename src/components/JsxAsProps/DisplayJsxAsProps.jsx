import React from 'react';

// Component that accepts JSX as a prop
const DisplayJsxAsProps = ({ title, content }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h1>Display JSX using props</h1>
      <h2>{title}</h2>
      <div>{content}</div>
    </div>
  );
};

export default DisplayJsxAsProps;
