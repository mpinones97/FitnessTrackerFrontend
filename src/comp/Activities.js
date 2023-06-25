// import React, { useEffect, useState } from "react";
// import { fetchFromAPI } from "../API";



// const Activities = () => {

//     const [activities, setActivities] = useState([])
    
//     const fetchActivites = async () =>{

//         const data = await fetchFromAPI({
//             endPoint: 'activities'
//         })
//         console.log(data)
//         if (data){
//             setActivities(data)
//         }
//         console.log(data)
        
//     }
//     useEffect(() => {
//         fetchActivites();
//       }, []);
//   return (
//     <>
//     <h1>
//     Activities
//       </h1>
//       <div>
//       {activities.length ? (
//         activities.map(({ id, name, description }, idx) => (
//           <div key={id ?? idx}>
//             <h2>{name}</h2>
//             <h3>{description}</h3>
//             <h4>Id:{id}</h4>
//             <br></br>
//           </div>
//         ))
//       ) : (
//         <p>No activities found.</p>
//       )}
//     </div>
//     </>
//   );
// };

// export default Activities;



import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../API";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [newActivityName, setNewActivityName] = useState("");
  const [newActivityDescription, setNewActivityDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchActivities = async () => {
    try {
      const data = await fetchFromAPI({
        endPoint: "activities",
      });
      if (data) {
        setActivities(data);
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const handleCreateActivity = async (event) => {
    event.preventDefault();

    try {
      const requestBody = {
        name: newActivityName,
        description: newActivityDescription,
      };

      const response = await fetchFromAPI({
        endPoint: "activities",
        method: "POST",
        body: requestBody,
      });

      if (response.ok) {
        const newActivity = await response.json();
        setActivities((prevActivities) => [...prevActivities, newActivity]);
        setNewActivityName("");
        setNewActivityDescription("");
        setErrorMessage("");
      } else if (response.status === 409) {
        setErrorMessage("Activity already exists.");
      } else {
        setErrorMessage("Error creating activity.");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  return (
    <>
      <h2>Create New Activity</h2>
      <form onSubmit={handleCreateActivity}>
        <label htmlFor="newActivityName">Name:</label>
        <input
          type="text"
          id="newActivityName"
          value={newActivityName}
          onChange={(e) => setNewActivityName(e.target.value)}
          required
        />
        <label htmlFor="newActivityDescription">Description:</label>
        <input
          type="text"
          id="newActivityDescription"
          value={newActivityDescription}
          onChange={(e) => setNewActivityDescription(e.target.value)}
          required
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Create</button>
      </form>

      <h1>Activities</h1>
      <div>
        {activities.length ? (
          activities.map(({ id, name, description }, idx) => (
            <div key={id ?? idx}>
              <h2>{name}</h2>
              <h3>{description}</h3>
              <h4>Id: {id}</h4>
              <br />
            </div>
          ))
        ) : (
          <p>No activities found.</p>
        )}
      </div>
    </>
  );
};

export default Activities;


