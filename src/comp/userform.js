import React from 'react';
import { Link, useParams, useHistory, } from 'react-router-dom';
import { useState } from 'react';

const UserForm = () => {
    const { formResLogin } = useParams()

    return (
        <>
            <h1>
              <div className='headers'> {formResLogin == 'register' ? 'register' : 'login'} </div>
            </h1>
            <form>
                <div>
                    <label htmlFor='username'> Username: </label>

                    <input
    
                    />
                </div>

                <div>
                    <label htmlFor='password'> Password: </label>

                    <input
                     
                    />
                </div>

                <button type='submit'> {formResLogin == 'register' ? 'register' : 'login'} </button>

                <br></br>

                {formResLogin == 'register' ?
                    <Link to='/users/login' className='links'>Login</Link> :
                    <Link to='/users/register' className='links'>Register</Link>
                }
            </form>
        </>
    );
}

export default UserForm;