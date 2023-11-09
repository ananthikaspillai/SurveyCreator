
import React from 'react';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { logout } from './authActions';
import home from '../assets/home.png';
const HomePage = ({ user, logout }) => {

  return (
  <div className="w-full">
    <div className=" items-center">
    <div className="bg-blue-800 p-6  text-white ">
    <h1 className="text-5xl">SURVEY CREATOR FORM</h1>
    <p className="mt-[20px]">Welcome, {user.username}</p>
   <div className="flex flex-inline gap-2.5">
   <div className="" style={{ marginLeft: "1000px" }}>
   <button className=" text-white px-4 py-2  rounded">Home</button>
  </div>
<div>
  <button
  className=" bg-red-500 text-white px-4 py-2   rounded"
  onClick={logout}
>
 Logout
</button>
  </div>
  </div>
  </div>
 </div>
  <div className="flex mr-[16px] ml-[100px]">
  <div className=" ">
  <h2 className="text-xl mt-[60px] ">Create new survey :</h2>
  <Link to="/addsurvey">
  <button className="text-xl bg-green-500 px-7 py-2 rounded mt-[20px]  ml-[0px]">
              Add
  </button>
  </Link>
<h2 className="text-xl mt-[60px] ">List of Surveys :</h2>
<Link to="/surveys">
<button className="text-xl bg-green-500 px-4 py-2 rounded mt-[20px]">Surveys</button>
</Link>
</div>
<img src={home} className="w-[450px] h-37 ml-[190px] " alt="Home" />
</div>
</div>
  );
};
 
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
 
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);