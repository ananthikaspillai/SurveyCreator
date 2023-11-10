
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SurveyResults from './SurveyResults';

function Surveys() {
  const [data, setData] = useState([]);
  const [id, setId] = useState();

  const handleId = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/surveys');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (id) {
    return <SurveyResults id={id} />;
  }
  return (
    <div className="p-8 bg-blue-800 w-[900px] ml-[200px] mt-[70px]">
      <h1 className="text-3xl font-bold mb-8 text-center  text-white">Surveys</h1>
      <ul>
        {data.map((survey, index) => (
          <li
            key={index}
            className="bg-white border  rounded p-4 mb-4 shadow-md transition-transform transform hover:scale-105"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold mb-2">Title: {survey.title}</h2>
                <p className="text-gray-700 mb-4">Description: {survey.description}</p>
                <p className="text-gray-600">ID: {survey.id}</p>
              </div>
              <button
                onClick={handleId}
                value={survey.id}
                className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
              >
                Show Questions
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Surveys;

