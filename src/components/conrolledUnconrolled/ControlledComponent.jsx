import { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState(""); // State controls the input

  return (
    <div>
      <input 
        type="text" 
        value={name}  // Controlled by state
        onChange={(e) => setName(e.target.value)} // Update state on change
      />
      <p>You typed: {name}</p>
    </div>
  );
}

export default ControlledComponent;
