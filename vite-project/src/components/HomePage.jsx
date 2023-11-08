
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './authActions';
import home from '../assets/home.png';

function HomePage() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="w-full ">
      <div className=" items-center">
        <div className="bg-blue-800 p-6  text-white ">
          <h1 className="text-5xl">SURVEY CREATOR FORM</h1>
          <p className="mt-[20px]">Welcome, {user.username}</p>
          <div className="flex flex-inline gap-2.5">
   
      <div className="" style={{marginLeft:"1000px"}}>
      <button className=" text-white px-4 py-2  rounded">
        Home
      </button>
      </div>
      <div>
      <button
        className=" bg-red-500 text-white px-4 py-2   rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
      </div>
      </div>
        </div>
      </div>

      <div className="flex mr-[16px] ml-[100px]">
        <div className=" mt-[80px]">
           
        <Link to="/addsurvey">
              <button className="text-xl bg-green-500 px-4 py-2 rounded  ml-[0px]">Add Survey</button>
              </Link>
          <h2 className="text-xl mt-[60px] ">List of Surveys</h2>
              <Link to="/surveys">
              <button className="text-xl bg-green-500 px-4 py-2 rounded mt-[20px]">Surveys</button>
              </Link>
        </div>
        <img src={home} className="w-[450px] h-37 ml-[190px] " alt="Home" />
      </div>

      
    </div>
  );
}

export default HomePage;
