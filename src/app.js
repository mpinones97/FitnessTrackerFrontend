import React, {useState} from "react";
import { UserForm, Home, Activities, MyRoutines, Routines} from './comp';
import { Route, Link } from 'react-router-dom';

const App = () => {

    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    
    return (
        <>
            <nav>
                <Link exact to='/' className='links'> Home </Link>||
                <Link exact to='/routines'>Routines</Link>||
                <Link exact to='/activities'>Activities</Link>||
                <Link exact to='/users/:formResLogin'>Sign In / Sign Up</Link>
            </nav>

            <Route exact path='/'>
                <Home/>
            </Route>

            <Route exact path='/users/:formResLogin'>
                <UserForm  />
            </Route>

            <Route exact path='/activities'>
                <Activities/>
            </Route>

            <Route exact path='/routines'>
                <Routines/>
            </Route>

            <Route exact path='/myRoutines'>
                <MyRoutines/>
            </Route>
        </>
    )

};

export default App;