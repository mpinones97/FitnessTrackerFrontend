const baseApiUrl = "https://fitnesstrac-kr.herokuapp.com/api/";
const API_ENDPOINTS = {
    register: '/users/register',
    login: '/users/login',
    user: '/users/me',
    userRoutines: '/users/:username/routines',
    activities: '/activities',
    activity: '/activities/:activitiesId',
    activityRoutines: '/activities/:activitiesId/routines',
    routines: '/routines',
    routine: '/routines/:routineId',
    routineActivities: '/routines/:routineId/activities',
    routine_activities: '/routine_activities/:routineActivityId',
}

const getURL = (endPoint) => { 
const path = API_ENDPOINTS [endPoint]
    if (!path){
    throw new Error(`invalidEndpoint`) 
    } 
    return baseApiUrl+path
} 

const getOptions = (method, body, token) => ( {
    method: method ? method.toUpperCase() : `GET`,
    headers: {
        'Content-Type':'application/json',
        ...(token && {Authorization: `Bearer ${token}`}),
    },
})

