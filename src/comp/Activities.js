import React, { useState } from "react";

const Activities = () => {

    const [activities, setActivities] = useState([])

    const fetchActivites = async () =>{
        try{
            const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/activities')
            const result = await response.json()
            console.log(result)
        } catch(error){
            console.error(error)
        }
    }

  return (
    <>
    <h1>
      Activities
      </h1>
    </>
  );
};

export default Activities;
