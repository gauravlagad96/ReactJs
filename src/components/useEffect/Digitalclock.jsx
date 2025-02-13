import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DigitalClock = () => {
  // Initialize state for the date
  const [date, setDate] = useState(""); // Correctly initialize state

  useEffect(() => {
    // Set interval to update the time every second
    const interval = setInterval(() => {
      const d = new Date();
      setDate(d.toLocaleTimeString()); // Set time instead of date for a digital clock
    }, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array, runs once when component mounts

  // Styled-component for the digital clock
  const Clock = styled.h1`
    background-color: red;
    color: white;
    padding: 20px;
    font-size: 2rem;
  `;

  return (
    <center>
      <Clock>Digital Clock: {date}</Clock>
    </center>
  );
};

export default DigitalClock;
