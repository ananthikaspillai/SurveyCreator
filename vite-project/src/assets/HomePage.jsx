
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
          <p>Welcome, {user.username}</p>
          <button
        className="bg-red-500 text-white px-4 py-2 ml-[1010px]  rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
      <div className="">
      <button
        className="bg-red-500 text-white px-4 py-2 ml-[920px]  rounded"
      >
        Home
      </button>
      </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <h2 className="text-3xl">List of Surveys</h2>
          <ul className="list-disc pl-6">
            <li>
              <h2 className="text-xl">Survey 1</h2>
              <Link to="/survey">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Add Question
                </button>
              </Link>
            </li>
            <li>
              <h2 className="text-xl">Survey 2</h2>
              <Link to="/survey">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Add Question
                </button>
              </Link>
            </li>
            <li>
              <h2 className="text-xl">Survey 3</h2>
              <Link to="/survey">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Add Question
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <img src={home} className="w-42 h-37 " alt="Home" />
      </div>

      
    </div>
  );
}

export default HomePage;





