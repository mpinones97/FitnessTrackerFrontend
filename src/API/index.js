// const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";
// const API_ENDPOINTS = {
//     register: '/users/register',
//     login: '/users/login',
//     user: '/users/me',
//     userRoutines: '/users/:username/routines',
//     activities: '/activities',
//     activity: '/activities/:activitiesId',
//     activityRoutines: '/activities/:activitiesId/routines',
//     routines: '/routines',
//     routine: '/routines/:routineId',
//     routineActivities: '/routines/:routineId/activities',
//     routine_activities: '/routine_activities/:routineActivityId',
// }

// const getURL = (endPoint) => { 
// const path = API_ENDPOINTS[endPoint]
//     if (!path){
//     throw new Error(`invalidEndpoint`) 
//     } 
//     return(
//         BASE_URL + path
//         );
// } 

// const getOptions = (method, body, token) => ( {
//     method: method ? method.toUpperCase() : 'GET',
//     headers: {
//         'Content-Type':'application/json',
//         ...(token && {'Authorization': `Bearer ${token}`}),
//     },
//     ...(body && {body: JSON.stringify(body)})
// })

// export const fetchFromApi = async ({ endPoint, method, body, token }) => {
//     try {
//       const result = await fetch(
//         getURL(endPoint),
//         getOptions(method, body, token)
//       );
//       const response = await result.json();
//       if (response.error) {
//         alert(response.error.message);
//         throw response.error;
//       }
//       return response;
//     } catch (error) {
//       console.error(error);
//     }
//   }

const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const API_ENDPOINTS = {
  register: '/users/register',
  login: '/users/login',
  user: '/users/me',
  userRoutines: '/users/:username/routines',
  activities: '/activities',
  activity: '/activities/:activityId',
  activityRoutines: '/activities/:activityId/routines',
  routines: '/routines',
  routine: '/routines/:routineId',
  routineActivities: '/routines/:routineId/activities',
  routine_activities: '/routine_activities/:routineActivityId',
};

const getURL = (endPoint) => {
  const path = API_ENDPOINTS[endPoint];
  if (!path) {
    throw new Error('Invalid endpoint');
  }
  return BASE_URL + path;
};

const getOptions = (method, body, token) => ({
  method: method ? method.toUpperCase() : 'GET',
  headers: {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  },
  ...(body && { body: JSON.stringify(body) }),
});

export const fetchFromAPI = async ({ endPoint, method, body, token }) => {
  try {
    const result = await fetch(getURL(endPoint), getOptions(method, body, token));
    const response = await result.json();
    if (response.error) {
      throw new Error(response.error.message);
    }
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

