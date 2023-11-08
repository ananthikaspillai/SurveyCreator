
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Surveys() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/surveys');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Surveys</h1>
      <ul>
        {data.map((survey, index) => (
          <li
            key={index}
            className="bg-white border rounded p-4 mb-4 shadow-md"
          >
            <h2 className="text-xl font-semibold">Title: {survey.title}</h2>
            <p className="text-gray-700">Description: {survey.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Surveys;
