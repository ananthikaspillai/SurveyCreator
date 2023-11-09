
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SurveyResults(props) {
  const {id} = props
  const [responses, setResponses] = useState([]);
  const [selectedResponses, setSelectedResponses] = useState([]);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8081/surveys/${id}/questions`)
      .then((response) => {
        console.log("res", response);
        setResponses(response.data);
        setSelectedResponses(new Array(response.data.length).fill(null));
      })
      .catch((error) => {
        console.error('Error fetching data from the database:', error);
      });
  }, []);

  const handleResponseChange = (index, selectedOption) => {
    const updatedSelectedResponses = [...selectedResponses];
    updatedSelectedResponses[index] = selectedOption;
    setSelectedResponses(updatedSelectedResponses);
  };

  const handleSubmit = () => {
    if (selectedResponses.some(response => response === null)) {
      console.log('Please select a response for all questions.');
    } else {
      console.log('Selected Responses:', selectedResponses);
      setIsSuccessMessageVisible(true);
      setTimeout(() => {
        setIsSuccessMessageVisible(false);
      }, 2000);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <h1 className="text-2xl mb-3 font-bold text-gray-700">Survey</h1>
          <form>
          {responses.length > 0 &&
            responses.map((response, index) => (
              response.option.map(opt => (
                <div key={index} className="mt-4 p-4 border rounded">
                  <h2 className="text-xl font-semibold">Question: {response.text}</h2>
                  <div className="mt-2">
                    <input
                      type="radio"
                      id={`option1-${index}`}
                      name={`opt-${index}`}
                      value={opt.option1}
                      onChange={() => handleResponseChange(index, opt.option1)}
                      className="mr-2"
                    />
                    <label htmlFor={`option1-${index}`}>Option 1: {opt.option1}</label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="radio"
                      id={`option2-${index}`}
                      name={`opt-${index}`}
                      value={opt.option2}
                      onChange={() => handleResponseChange(index, opt.option2)}
                      className="mr-2"
                    />
                    <label htmlFor={`option2-${index}`}>Option 2: {opt.option2}</label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="radio"
                      id={`option3-${index}`}
                      name={`opt-${index}`}
                      value={opt.option3}
                      onChange={() => handleResponseChange(index, opt.option3)}
                      className="mr-2"
                    />
                    <label htmlFor={`option3-${index}`}>Option 3: {opt.option3}</label>
                  </div>
                </div>
              ))
            ))}
          <div className="flex items-center justify-between">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
          </form>
        </div>

        {isSuccessMessageVisible && (
          <div className="bg-green-500 text-white p-2 rounded mt-4 text-center">
            Data added successfully!
          </div>
        )}
      </div>
    </div>
  );
}
export default SurveyResults;











