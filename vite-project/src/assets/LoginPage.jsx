

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from "./authActions"
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
     const navigate = useNavigate()

    const handleLogin = () => {
        const user = { username, password };
        dispatch(login(user));
        navigate('/home')
    };
return (
    <div>
      <h1 className="text-red-900 ml-[600px] text-4xl">LOGIN PAGE</h1>
      <input
      style={{backgroundColor:"black",marginLeft:"400px",color:"white"}}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
      style={{backgroundColor:"black",marginLeft:"100px",marginTop:"100px",color:"white"}}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button 
      onClick={handleLogin}>Login</button>
    </div>
  );
};
export default LoginPage