// import React, {useEffect, useState} from "react";
// import { UserForm, Home, Activities, MyRoutines, Routines} from './comp';
// import { Route, Link } from 'react-router-dom';

// const App = () => {

//     const [token,setToken] = useState(null)
//     const [userData, setUserData] = useState(null);
//     const [ user, setUser ] = useState(null); 
    
//     useEffect(() =>{
//         console.log("token: ", token)
//     },[token])

//     return (
//         <>
//             <nav className="nav">
//                 <Link to='/'> Home </Link>||
//                 <Link to='/routines'>Routines</Link>||
//                 <Link to='/activities'>Activities</Link>||
//                 <Link to='/users/register'>Sign Up / Sign In</Link>
//             </nav>

//             <Route exact path='/'>
//                 <Home/>
//             </Route>

//             <Route exact path='/users/:actionType'>
//                 <UserForm  setToken={setToken}/>
//             </Route>

//             <Route exact path='/activities'>
//                 <Activities/>
//             </Route>

//             <Route exact path='/routines'>
//                 <Routines/>
//             </Route>

//             <Route exact path='/myRoutines'>
//                 <MyRoutines/>
//             </Route>
//         </>
//     )

// };

// export default App;

import React, { useEffect, useState } from "react";
import { Route, Link, useHistory } from 'react-router-dom';
import { UserForm, Home, Activities, MyRoutines, Routines } from './comp';

const App = () => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    console.log("token: ", token);
  }, [token]);

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    history.push("/users/login");
  };

  const renderLogoutButton = () => {
    if (token) {
      return <button onClick={handleLogout}>Logout</button>;
    }
    return null;
  };

  return (
    <>
      <nav className="nav">
        <Link to='/'>Home</Link> ||
        <Link to='/routines'>Routines</Link> ||
        <Link to='/activities'>Activities</Link> ||
        <Link to='/myRoutines'>My Routines</Link> ||
        <Link to='/users/register'>Sign Up / Sign In</Link>
        {renderLogoutButton()}
      </nav>

      <Route exact path='/' component={Home} />

      <Route exact path='/users/:actionType'>
        <UserForm setToken={setToken} setUser={setUser} />
      </Route>

      <Route exact path='/activities' component={Activities} />

      <Route exact path='/routines'>
        <Routines user={user} token={token} />
      </Route>

      <Route exact path='/myRoutines' component={MyRoutines} />
    </>
  );
};

export default App;

