

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from "./authActions"
// import { useNavigate } from 'react-router-dom';
// import survey from "../assets/survey.png"

// const LoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const dispatch = useDispatch();
//      const navigate = useNavigate()

//     const handleLogin = () => {
//         const user = { username, password };
//         dispatch(login(user));
//         navigate('/home')
//     };
// return (
//     <div className="bg-gray-300 w-[900px] h-[530px] ml-[200px]">
//        <div className="   ">
//        <img src={survey} className="w-[280px] ml-[300px] mt-[40px]"/>
//        </div>
//        <div>
//       <h1 className="text-black-900 font-bold text-4xl ml-[350px] text-4xl">Hey Guys!</h1>
//       </div>
//       <div className="ml-[300px] ">
//       <h2 className="text-blue-900 text-4xl">Choose your favourite React Tool</h2>
//       </div>
//       <div className="mt-[0px]">
//       <input
//       // style={{backgroundColor:"blue",marginLeft:"400px",color:"white"}}
//       className="bg-red-700 rounded-lg w-[100px] h-[30px] font-bold ml-[400px] mt-[100px]"
//         type="text" 
//         placeholder="Username" 
//         value={username} 
//         onChange={(e) => setUsername(e.target.value)} 
//       />
//       <input
//       // style={{backgroundColor:"black",marginLeft:"100px",marginTop:"100px",color:"white"}}
//       className="bg-red-700 rounded-lg w-[100px] h-[30px] font-bold ml-[200px] "
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       </div>
//       <button  className="ml-[400px]"
//       onClick={handleLogin}>Login</button>
//     </div>
//   );
// };
// export default LoginPage


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authActions';
import { useNavigate } from 'react-router-dom';
import survey from '../assets/survey.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = { username, password };
    dispatch(login(user));
    navigate('/home');
  };

  return (
    <div className="bg-gray-300 min-h-screen flex justify-center items-center">
      <div className="w-96 p-4 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <img src={survey} className="w-48 mx-auto mt-4" alt="Survey Logo" />
          <h1 className="text-black font-bold text-4xl mt-2">Hey Guys!</h1>
          <p className="text-blue-900 text-3xl mt-2">Choose your favorite React Tool</p>
        </div>

        <div className="mt-6">
          <input
            className="w-full mt-6 h-10 px-3 rounded-lg bg-red-700 text-blue  p-2"
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* <div className="mt-4">
          <input
            className="w-full h-10 px-3 rounded-lg bg-red-700 text-white"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div> */}

        <button
          className="w-full mt-6 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
