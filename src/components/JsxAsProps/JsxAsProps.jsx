import React from 'react';
import DisplayJsxAsProps from './DisplayJsxAsProps'; // Correct import

const JsxAsProps = () => {
  return (
    <div>
      <DisplayJsxAsProps 
        title="Card 1" 
        content={<p>This is the content of Card 1. It includes a <strong>bold</strong> word.</p>} 
      />
      <DisplayJsxAsProps 
        title="Card 2" 
        content={
          <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ul>
        } 
      />
    </div>
  );
};

export default JsxAsProps;
