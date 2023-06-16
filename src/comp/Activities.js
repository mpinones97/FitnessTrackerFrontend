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
        
    }
    useEffect(() => {
        fetchActivites();
      }, []);
  return (
    <>
    <h1>
    Hello
      </h1>
      <p>{}</p>
    </>
  );
};

export default Activities;


