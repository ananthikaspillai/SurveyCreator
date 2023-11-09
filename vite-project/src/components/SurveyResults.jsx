
// import React from 'react';
// import { useState ,useEffect} from 'react';
// import axios from 'axios';

// function SurveyResults() {
//   const [responses, setResponses] = useState()
//   // const responses = useSelector((state) => state.surveys.responses);
//   useEffect(() => {
//     axios.get('http://localhost:8081/surveys/questions')
//     .then((response) => {
//       setResponses(response.data);
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.error('Error fetching data from the database:', error);
//     });
//   }, [])
//   return (
//     <div className="bg-white-900  p-8 text-white">
//       <h1 className="text-4xl font-bold text-center  text-blue-800 mb-5">Survey</h1>

//       <div className="bg-gray-800 p-4 rounded-md shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Survey Responses:</h2>
//         {}
//           <ul>
//               {responses && responses.map((response, index) => (
//        <li key={index} className="border border-blue-500 p-2 rounded-md mb-2 hover:bg-gray-700">
//             <p className="font-bold">Question: {response.text}</p>
//             <div>
//             <input type="radio" id={`option1-${index}`} name={`response-${index}`} value={response.option1} />
//            <label htmlFor={`option1-${index}`}>Option 1: {response.option[0].option1}</label>
//           </div>
//          <div>
//          <input type="radio" id={`option2-${index}`} name={`response-${index}`} value={response.option2} />
//          <label htmlFor={`option2-${index}`}>Option 2: {response.option[0].option2}</label>
//          </div>
//          <div>
//          <input type="radio" id={`option3-${index}`} name={`response-${index}`} value={response.option3} />
//          <label htmlFor={`option3-${index}`}>Option 3: {response.option[0].option3}</label>
//          </div>
//        </li>
//          ))}
//         </ul>
         

//       </div>
//       <button
//       // onClick={handleSubmit} 
//       className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4">
//         Submit
//       </button>
//     </div>
//   );
// }
// export default SurveyResults;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function SurveyResults() {
//   const [responses, setResponses] = useState([]);
//   const [selectedResponses, setSelectedResponses] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8081/surveys/questions')
//       .then((response) => {
//         console.log("res", response);
//         setResponses(response.data);
//         // Initialize selectedResponses with the same length as responses
//         setSelectedResponses(new Array(response.data.length).fill(null));
//       })
//       .catch((error) => {
//         console.error('Error fetching data from the database:', error);
//       });
//   }, []);

//   const handleResponseChange = (index, selectedOption) => {
//     const updatedSelectedResponses = [...selectedResponses];
//     updatedSelectedResponses[index] = selectedOption;
//     setSelectedResponses(updatedSelectedResponses);
//   };

//   const handleSubmit = () => {
//     // Ensure that all questions have a selected response before submitting.
//     if (selectedResponses.some(response => response === null)) {
//       console.log('Please select a response for all questions.');
//     } else {
//       // Send selectedResponses to the server using axios.post or your preferred method.
//       // This is just an example, you should replace it with your actual API endpoint.
//       console.log('Selected Responses:', selectedResponses);
//     }
//   };

//   return (
//     <div className="bg-white-900 p-8 text-white">
//       <h1 className="text-4xl font-bold text-center text-blue-800 mb-5">Survey</h1>

//       <div className="bg-gray-800 p-4 rounded-md shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Survey Responses:</h2>
//         <ul>
//           {responses.length > 0 &&
//             responses.map((response, index) => (
//               response.option.map(opt => {

              
//               console.log("rr", response)
//              return (<li key={index} className="border border-blue-500 p-2 rounded-md mb-2 hover:bg-gray-700">
//                 <p className="font-bold">Question: {response.text}</p>
//                 <div>
//                   <input
//                     type="radio"
//                     id={`option1-${index}`}
//                     name={`opt-${index}`}
//                     value={opt.option1}
//                     onChange={() => handleResponseChange(index, opt.option1)}
//                   />
//                   <label htmlFor={`option1-${index}`}>Option 1: {opt.option1}</label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     id={`option2-${index}`}
//                     name={`opt-${index}`}
//                     value={opt.option2}
//                     onChange={() => handleResponseChange(index, opt.option2)}
//                   />
//                   <label htmlFor={`option2-${index}`}>option 2:{opt.option2}</label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     id={`option3-${index}`}
//                     name={`opt-${index}`}
//                     value={opt.option3}
//                     onChange={() => handleResponseChange(index, opt.option3)}
//                   />
//                   <label htmlFor={`option3-${index}`}>Option 3: {opt.option3}</label>
//                 </div>
//               </li>)}
//               ))
//             )}
//         </ul>
//       </div>

//       <button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4">
//         Save
//       </button>
//     </div>
//   );
// }

// export default SurveyResults;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function SurveyResults() {
//   const [responses, setResponses] = useState([]);
//   const [selectedResponses, setSelectedResponses] = useState([]);
//   const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

//   useEffect(() => {
//     axios.get('http://localhost:8081/surveys/questions')
//       .then((response) => {
//         console.log("res", response);
//         setResponses(response.data);
//         // Initialize selectedResponses with the same length as responses
//         setSelectedResponses(new Array(response.data.length).fill(null));
//       })
//       .catch((error) => {
//         console.error('Error fetching data from the database:', error);
//       });
//   }, []);

//   const handleResponseChange = (index, selectedOption) => {
//     const updatedSelectedResponses = [...selectedResponses];
//     updatedSelectedResponses[index] = selectedOption;
//     setSelectedResponses(updatedSelectedResponses);
//   };

//   const handleSubmit = () => {
//     // Ensure that all questions have a selected response before submitting.
//     if (selectedResponses.some(response => response === null)) {
//       console.log('Please select a response for all questions.');
//     } else {
//       // Send selectedResponses to the server using axios.post or your preferred method.
//       // This is just an example, you should replace it with your actual API endpoint.
//       console.log('Selected Responses:', selectedResponses);

//       // Show the success message for 2 seconds
//       setIsSuccessMessageVisible(true);
//       setTimeout(() => {
//         setIsSuccessMessageVisible(false);
//       }, 2000);
//     }
//   };

//   return (
//     <div className="bg-white-900 p-8 text-white">
//       <h1 className="text-4xl font-bold text-center text-blue-800 mb-5">Survey</h1>

//       <div className="bg-gray-800 p-4 rounded-md shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Survey Responses:</h2>
//         <ul>
//           {responses.length > 0 &&
//             responses.map((response, index) => (
//               response.option.map(opt => (
//                 <li key={index} className="border border-blue-500 p-2 rounded-md mb-2 hover:bg-gray-700">
//                   <p className="font-bold">Question: {response.text}</p>
//                   <div>
//                     <input
//                       type="radio"
//                       id={`option1-${index}`}
//                       name={`opt-${index}`}
//                       value={opt.option1}
//                       onChange={() => handleResponseChange(index, opt.option1)}
//                     />
//                     <label htmlFor={`option1-${index}`}>Option 1: {opt.option1}</label>
//                   </div>
//                   <div>
//                     <input
//                       type="radio"
//                       id={`option2-${index}`}
//                       name={`opt-${index}`}
//                       value={opt.option2}
//                       onChange={() => handleResponseChange(index, opt.option2)}
//                     />
//                     <label htmlFor={`option2-${index}`}>Option 2:{opt.option2}</label>
//                   </div>
//                   <div>
//                     <input
//                       type="radio"
//                       id={`option3-${index}`}
//                       name={`opt-${index}`}
//                       value={opt.option3}
//                       onChange={() => handleResponseChange(index, opt.option3)}
//                     />
//                     <label htmlFor={`option3-${index}`}>Option 3: {opt.option3}</label>
//                   </div>
//                 </li>
//               ))
//             ))}
//         </ul>
//       </div>

//       {isSuccessMessageVisible && (
//         <div className="bg-green-500 text-white p-2 rounded mt-4 text-center">
//           Data added successfully!
//         </div>
//       )}

//       <button onClick={handleSubmit} className="bg-purple-600 hover-bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4">
//         Submit
//       </button>
//     </div>
//   );
// }

// export default SurveyResults;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SurveyResults() {
  
  const [responses, setResponses] = useState([]);
  const [selectedResponses, setSelectedResponses] = useState([]);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8081/surveys/questions')
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


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function SurveyResults() {
    
//   const [responses, setResponses] = useState([]);
//   const [selectedResponses, setSelectedResponses] = useState([]);
//   const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

//   useEffect(() => {
//     axios.get('http://localhost:8081/surveys/questions')
//       .then((response) => {
//         console.log("res", response);
//         setResponses(response.data);
//         setSelectedResponses(new Array(response.data.length).fill(null));
//       })
//       .catch((error) => {
//         console.error('Error fetching data from the database:', error);
//       });
//   }, []);

//   const handleResponseChange = (index, selectedOption) => {
//     const updatedSelectedResponses = [...selectedResponses];
//     updatedSelectedResponses[index] = selectedOption;
//     setSelectedResponses(updatedSelectedResponses);
//   };

//   const handleSubmit = () => {
//     if (selectedResponses.some(response => response === null)) {
//       console.log('Please select a response for all questions.');
//     } else {
//       console.log('Selected Responses:', selectedResponses);
//       setIsSuccessMessageVisible(true);
//       setTimeout(() => {
//         setIsSuccessMessageVisible(false);
//       }, 2000);
//       // Reset selectedResponses
//       setSelectedResponses(new Array(responses.length).fill(null));
//     }
//   };
//   return (
//         <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//           <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
//             <div className="mb-4">
//               <h1 className="text-2xl mb-3 font-bold text-gray-700">Survey</h1>
//               {responses.length > 0 &&
//                 responses.map((response, index) => (
//                   response.option.map(opt => (
//                     <div key={index} className="mt-4 p-4 border rounded">
//                       <h2 className="text-xl font-semibold">Question: {response.text}</h2>
//                       <div className="mt-2">
//                         <input
//                           type="radio"
//                           id={`option1-${index}`}
//                           name={`opt-${index}`}
//                           value={opt.option1}
//                           onChange={() => handleResponseChange(index, opt.option1)}
//                           className="mr-2"
//                         />
//                         <label htmlFor={`option1-${index}`}>Option 1: {opt.option1}</label>
//                       </div>
//                       <div className="mt-2">
//                         <input
//                           type="radio"
//                           id={`option2-${index}`}
//                           name={`opt-${index}`}
//                           value={opt.option2}
//                           onChange={() => handleResponseChange(index, opt.option2)}
//                           className="mr-2"
//                         />
//                         <label htmlFor={`option2-${index}`}>Option 2: {opt.option2}</label>
//                       </div>
//                       <div className="mt-2">
//                         <input
//                           type="radio"
//                           id={`option3-${index}`}
//                           name={`opt-${index}`}
//                           value={opt.option3}
//                           onChange={() => handleResponseChange(index, opt.option3)}
//                           className="mr-2"
//                         />
//                         <label htmlFor={`option3-${index}`}>Option 3: {opt.option3}</label>
//                       </div>
//                     </div>
//                   ))
//                 ))}
//             </div>
//             <div className="flex items-center justify-between">
//               <button
//                 onClick={handleSubmit}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               >
//                 Submit
//               </button>
//             </div>
//             {isSuccessMessageVisible && (
//               <div className="bg-green-500 text-white p-2 rounded mt-4 text-center">
//                 Data added successfully!
//               </div>
//             )}
//           </div>
//         </div>
//       );
//     }
// export default SurveyResults;









