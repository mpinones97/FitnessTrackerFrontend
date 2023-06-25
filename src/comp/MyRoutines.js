// import React from 'react';
// const MyRoutines = ()=>{
//     return(
//         <>
        
//         </>)

// }

// export default MyRoutines

import React, { useState } from "react";

const MyRoutines = () => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Perform the necessary actions to create a new routine
    console.log("New routine submitted:", name, goal);

    // Reset the form fields
    setName("");
    setGoal("");
  };

  return (
    <div>
      <h1>My Routines</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="goal">Goal:</label>
        <input
          type="text"
          id="goal"
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
          required
        />

        <button type="submit">Create Routine</button>
      </form>
    </div>
  );
};

export default MyRoutines;
