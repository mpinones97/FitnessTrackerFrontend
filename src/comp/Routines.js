import React, { useCallback, useEffect, useState } from 'react';
import { fetchFromApi } from '../API';
const Routines = ()=>{
    const [routines, setRoutines] = useState ([])
    const fetchRoutines = async  () => {
    const  data = await fetchFromApi({
        endPoint: 'routines'
    }) 
    console.log(data);
    if (data) {
        setRoutines(data)
    }
    }
    useEffect( () =>
    {
        fetchRoutines()
    },[]
    )

    return(
    <> 
    <h1>Routines</h1>
    
    <div>
        <div>
          {routines.length ? (
            routines.map(({ id, creatorId, creatorName, goal, isPublic, name }, idx) => (
              <div key={id ?? idx}>
                <h2>{name}</h2>
                <h3>{goal}</h3>
                <h4>Id:{id}</h4>
                <h4>Public: {isPublic}</h4>
                   <h4>Creator Id: {creatorId}</h4>
                   <h4>Creator Name: {creatorName}</h4>
                   <br></br>
              </div>
            ))
          ) : (
            <p>No Routines found.</p>
          )}
        </div>
      </div>
        
    
    
    </>)
}

export default Routines