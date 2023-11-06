

import React from 'react';
import { useSelector } from 'react-redux';
function SurveyResults() {
  const responses = useSelector((state) => state.surveys.responses);
  return (
    <div className="bg-white-900  p-8 text-white">
      <h1 className="text-4xl font-bold text-center  text-blue-800 mb-5">Survey</h1>

      <div className="bg-gray-800 p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Survey Responses:</h2>
        {responses.length > 0 ? (
          <ul>
              {responses.map((response, index) => (
       <li key={index} className="border border-blue-500 p-2 rounded-md mb-2 hover:bg-gray-700">
            <p className="font-bold">Question: {response.question}</p>
            <div>
            <input type="radio" id={`option1-${index}`} name={`response-${index}`} value={response.option1} />
           <label htmlFor={`option1-${index}`}>Option 1: {response.option1}</label>
          </div>
         <div>
         <input type="radio" id={`option2-${index}`} name={`response-${index}`} value={response.option2} />
         <label htmlFor={`option2-${index}`}>Option 2: {response.option2}</label>
         </div>
         <div>
         <input type="radio" id={`option3-${index}`} name={`response-${index}`} value={response.option3} />
         <label htmlFor={`option3-${index}`}>Option 3: {response.option3}</label>
         </div>
       </li>
         ))}
        </ul>
        ) : (
          <p className="text-gray-400">No responses available.</p>
        )}
      </div>
      <button
      // onClick={handleSubmit} 
      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4">
        Submit
      </button>
    </div>
  );
}
export default SurveyResults;



