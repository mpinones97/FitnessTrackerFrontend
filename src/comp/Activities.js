import React, { useEffect, useState } from "react";
import { fetchFromApi } from "../API";



const Activities = () => {

    const [activities, setActivities] = useState([])
    
    const fetchActivites = async () =>{

        const data = await fetchFromApi({
            endPoint: 'activities'
        })
        console.log(data)
        if (data){
            setActivities(data)
        }
        console.log(data)
        
    }
    useEffect(() => {
        fetchActivites();
      }, []);
  return (
    <>
    <h1>
    Activities
      </h1>
      <div>
      {activities.length ? (
        activities.map(({ id, name, description }, idx) => (
          <div key={id ?? idx}>
            <h2>{name}</h2>
            <h3>{description}</h3>
            <h4>Id:{id}</h4>
            <br></br>
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


