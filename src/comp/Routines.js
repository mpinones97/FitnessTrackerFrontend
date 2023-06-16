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
    <h1>
    Routines 
    </h1>
    </>)
}

export default Routines