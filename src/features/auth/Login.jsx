import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { supabaseClient } from './client.js';
import { updateAuth } from './authSlice.js';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const auth = useSelector((state) => state.auth?.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = (event) => setEmail(event.target.value);

  const passwordHandler = (event) => setPassword(event.target.value);

  const submissionHandler = async (event) => {
    event.preventDefault();
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      console.error('error: ', error);
      throw Error('There was a problem.');
    }
    navigate('/');
    return dispatch(updateAuth(auth, data));
  };

  return (
    <div>
      <p>Sign in</p>
      <form action='?/login' method='POST' className='auth-form'>
        <label htmlFor=''> Email </label>
        <input onChange={emailHandler} type='text' name='email'/>
        <label htmlFor=''> Password </label>
        <input onChange={passwordHandler} type='password' name='password'/>
        <button onClick={(e) => submissionHandler(e)} type='submit' className='btn btn-primary'>Login</button>
      </form>
    </div>
  );
}
