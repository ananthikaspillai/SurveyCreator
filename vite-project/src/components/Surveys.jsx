
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SurveyResults from './SurveyResults';

function Surveys() {
  const [data, setData] = useState([]);
  const [id, setId] = useState();

  const handleId =(e) => {
    setId(e.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/surveys');
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if(id){
    return(
    <SurveyResults id={id} />
      )
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Surveys</h1>
      <ul>
        {data.map((survey, index) => (
          <li
            key={index}
            className="bg-white border rounded p-4 mb-4 shadow-md"
          >
            <div className='flex justify-between px-6'>
              <div>
              <h2 className="text-xl font-semibold">Title: {survey.title}</h2>
              <p className="text-gray-700">Description: {survey.description}</p>
              {survey.id}
              </div>
              <button onClick={handleId} value={survey.id}>Show Questions</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Surveys;
