import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

const UserForm = () => {
    const { formResLogin } = useParams();


    return (
        <>
            <div className='headers'> {formResLogin == 'register' ? 'register' : 'login'} </div>

            <form onSubmit={submit}>
                <div>
                    <label htmlFor='username'> Username: </label>

                    <input
                        name='username'
                        type='text'
                        value={username}
                        onChange={ev => setUsername(ev.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor='password'> Password: </label>

                    <input
                        name='password'
                        type='password'
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                    />
                </div>

                <button type='submit'> {formResLogin == 'register' ? 'register' : 'login'} </button>

                <br></br>

                {formResLogin == 'register' ?
                    <Link to='/profile/login' className='links'>Login</Link> :
                    <Link to='/profile/register' className='links'>Register</Link>
                }
            </form>
        </>
    );
}

export default UserForm;