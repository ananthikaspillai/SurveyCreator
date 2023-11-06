
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
    <div className="p-8 space-y-4">
      <div className="flex items-center">
        <div className="bg-blue-500 p-4 rounded-lg text-white flex-grow">
          <h1 className="text-5xl">SURVEY CREATOR FORM</h1>
          <p className="mt-[20px]">Welcome, {user.username}</p>
          <div className="flex flex-inline gap-2.5">
   
      <div className="" style={{marginLeft:"1000px"}}>
      <button className="bg-red-500 text-white px-4 py-2  rounded">
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
        <div className="w-1/2 mt-[40px]">
          <h2 className="text-3xl ">List of Surveys</h2>
          <ul className="list-disc pl-6 mt-[20px] ml-[30px]">
            <li>
              <Link to="/surveys">
              <button className="text-xl bg-green-500 px-4 py-2 rounded">Survey 1</button>
              </Link>
              <Link to="/survey">
                <button className="bg-blue-500 text-white px-4 py-2 rounded ml-[20px]">
                  Add Question
                </button>
              </Link>
            </li>
            <li>
            <Link to="/surveys">
              <button className="text-xl  bg-green-500 px-4 py-2 rounded mt-[30px]">Survey 2</button></Link>
              <Link to="/survey">
                <button className="bg-blue-500 text-white px-4 py-2 rounded ml-[20px]">
                  Add Question
                </button>
              </Link>
            </li>
            <li>
            <Link to="/surveys">
              <button className="text-xl bg-green-500 px-4 py-2 rounded mt-[30px]">Survey 3</button> </Link>
              <Link to="/survey">
                <button className="bg-blue-500 text-white px-4 py-2 rounded ml-[20px]">
                  Add Question
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <img src={home} className="w-[450px] h-37 ml-[0px] " alt="Home" />
      </div>

      
    </div>
  );
}

export default HomePage;
