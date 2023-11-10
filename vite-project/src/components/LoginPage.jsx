
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authActions';
import { useNavigate } from 'react-router-dom';
import survey from '../assets/survey.png';

  const LoginPage = () => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
const handleLogin = () => {
  if (!email || email.length === 0) {
    alert('Please enter your email.');
    return;
  } else if (email.indexOf('@') === -1 || email.indexOf('@') === 0 || email.indexOf('@') === email.length - 1) {
    alert('Please enter a valid email.');
    return;
  } else {
    const user = { email };
    dispatch(login(user));
    navigate('/home');
  }
};
  return (
    <div className="bg-gradient-to-br from-indigo-500 to-teal-500 min-h-screen flex justify-center items-center">
      <div className="w-96 p-4 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <img src={survey} className="w-48 mx-auto mt-4" alt="Survey Logo" />
          <h1 className="text-black-500 font-bold font-roboto animate-pulse text-4xl mt-2">"Hey Guys!"</h1>
          <p className="text-blue-900 text-3xl mt-2 ">Choose your favourite Technologies</p>
        </div>
        <div className="mt-6">
          <input
            className="w-full mt-6 h-10 px-3 rounded-lg text-center bg-white-700 text-blue p-2 border border-black"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} required
          />
        </div>
        <button
          className="w-full mt-6 bg-blue-500 transition-transform transform hover:scale-105 text-white p-2 rounded-lg hover-bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
        
      </div>
    </div>
  );
};

export default LoginPage;

