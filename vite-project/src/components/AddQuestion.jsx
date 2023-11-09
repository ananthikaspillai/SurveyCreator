
import React, { useState } from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';
import addsurvey from '../assets/addsurvey.png';
import axios from 'axios';

function AddQuestion({ id }) { 
  const [response, setResponse] = useState({
    text: '',
    option: {
      option1: '',  
      option2: '',
      option3: ''
    }
  });
  const navigate = useNavigate();

  const handleResponseChange = (e, field) => {
    if (field === 'option1' || field === 'option2' || field === 'option3') {
      setResponse({
        ...response,
        option: {
          ...response.option,
          [field]: e.target.value,
        },
      });
    } else {
      setResponse({
        ...response,
        [field]: e.target.value,
      });
    }
  };
  
  const location = useLocation();
 
  const searchParams = new URLSearchParams(location.search);
  const surveyid = searchParams.get("surveyid");

  const handleSubmitResponse = () => {
    console.log('Submitting response:', response);

    axios
      .post(`http://localhost:8081/surveys/${surveyid}/questions`, response) 
      .then((response) => {
        console.log('Data saved to the database:', response.data);
        navigate('/results');
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <div className="bg-blue-900 min-h-screen flex items-center justify-center">
       <img className="w-[330px] mr-[90px]" src={addsurvey}/>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
     
        <div className="mb-4">

          <h1 className="text-2xl mb-3 font-bold text-gray-700">ADD SURVEY CREATOR</h1>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your question here"
            value={response.text}
            onChange={(e) => handleResponseChange(e, 'text')}
          />
        </div>
        <div className="mb-6">
          <p className="block text-gray-700 text-sm font-bold mb-2">Options:</p>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="option A"
            value={response.option1}
            onChange={(e) => handleResponseChange(e, 'option1')}
          />
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            placeholder="Option B"
            value={response.option2}
            onChange={(e) => handleResponseChange(e, 'option2')}
          />
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            placeholder="Option C"
            value={response.option3}
            onChange={(e) => handleResponseChange(e, 'option3')}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleSubmitResponse}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Response
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;











