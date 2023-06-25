import React from "react";

const Home = () => {
  return (
    <>
      <h1> Welcome to Fitness Tracker </h1>
      <a href="">
        <img
          src="https://cdn.dribbble.com/users/1233499/screenshots/4571542/photoshop1.gif"
          alt="Fitness Tracker"
          width="750"
          height="500"
        />
      </a>
      <p>**Development is still in progress, and it will be completed soon.</p>
          </>
  );
};

export default Home;


// import React from 'react';
// import { Link, useHistory } from 'react-router-dom';

// function Home({ token, setToken, setUserData }) {
//     const history = useHistory();
//     async function onLogout() {
//         setToken = (null);
//         setUserData = (null);
//         history.push('/');
//     };

//     return (
//         <>
//             <div className='headers'> welcome </div>

//             {token ?
//                 (<>
//                     <a href="/" onClick={onLogout}> Log Out </a>
//                 </>) : <Link to='/profile/login' className='links'> Login / Register </Link>

//             }
//         </>
//     );
// };

// export default Home;