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
        {
              activities.map((activity, index) =>(
                  <div className='tiles' key = {activities.id ?? index}>
                    <div>{activity.name}</div>
                    <div>{activity.description}</div>
                </div>
              )) 
        }
    </>
  );
};

export default Activities;


