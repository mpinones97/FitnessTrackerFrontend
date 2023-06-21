import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import { fetchFromApi } from "../API";

const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api/users/register"

const UserForm = ({setToken}) => {
  const { actionType } = useParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {

    const requestBody= {
        user: {
        username,
        password
    }
}
    const options ={
        method: "POST",
           headers: {
             'Content-Type': 'application/json'
           },
           body: JSON.stringify(requestBody)
    }


        const result = await fetch(BASE_URL, options)
        const response = await result.json()
        console.log(response)
        setToken(response.data.token)
      };
  

  return (
    <>
      <h1>
        <div className="headers">
          {" "}
          {actionType == "register" ? "Register" : "Log in"}{" "}
        </div>
      </h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor='username' >User Name</label>
        <input 
          type='text'
          name='username'
          value={username}
          onChange={event => setUsername(event.target.value)}
          minLength='3'
          maxLength='20'
          required
        />
        <label htmlFor='password'>Password</label>
        <input 
          type='password'
          name='password'
          value={password}
          onChange={event => setPassword(event.target.value)}
          minLength='8'
          maxLength='20'
          required
        />
        <button type='submit'>SUBMIT</button>

        <br></br>

        {actionType === 'register' 
        ?  ( <Link to="/users/login" >Have an Account? Sign In</Link> ) 
        : (<Link to="/users/register" >Need an Account? Register Here!</Link> )
        }
      </form>
    </>
  );
};

export default UserForm;
