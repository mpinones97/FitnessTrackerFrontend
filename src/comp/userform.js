import React from 'react';
import { Link, useParams, useHistory, } from 'react-router-dom';
import { useState } from 'react';

const UserForm = () => {
    const { formResLogin } = useParams();

    async function submit(ev) {
        ev.preventDefault();
        const body = {
            user: {
                username,
                password
            }
        };
        const data = await fetchFromApi({path: formResLogin , method: 'post', body: body });
        const token = data.token;
        if (token) {
            const response = await fetchFromApi({path: 'users/me', token: token});
            const user = response;
            if (user) {
                setUsername('');
                setPassword('');
                setToken(token);
                setUserData(user);
            }
        };
        history.push('/profile')
    };

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