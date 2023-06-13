import React, {useState} from "react";
import { UserForm, Home} from './comp';
import { Route, Link } from 'react-router-dom';

const App = () => {

    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    
    return (
        <>
            <nav>
                <Link to='/' className='links'> Home </Link>
            </nav>

            <Route exact path='/'>
                <Home />
            </Route>

            <Route path='/profile/:formResLogin'>
                <UserForm setToken={setToken} setUserData={setUserData} />
            </Route>
        </>
    )

};

export default App;