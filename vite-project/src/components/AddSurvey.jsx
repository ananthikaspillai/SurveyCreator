
// import React from 'react';
// import addsurvey from "../assets/addsurvey.png";
// import { useDispatch } from 'react-redux';
// import { addSurveyQuestion, submitSurveyResponse } from '../assets/surveyAction';

// function AddSurvey() {
//   const dispatch = useDispatch();
//   const [question, setQuestion] = useState('');

//   const handleQuestionChange = (e) => {
//     setQuestion(e.target.value);
//   };

//   const handleSubmit = () => {
//     dispatch(addSurveyQuestion(question));
//     setQuestion('');
//   };
//   return (
//     <div>
//         <div className="bg-blue-500 p-6 rounded-lg text-white " style={{width:"100%"}}>
//           <h1 className="text-5xl">ADD SURVEY CREATOR</h1>
//           </div>
//       <img src={addsurvey} className="mx-auto mb-4 w-[300px]" alt="Add Survey"  /> 
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
//         <div className="max-w-md mx-auto p-4">
//         <textarea
//           className="w-full h-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
//           placeholder="Enter your question here"
//         />
//         </div>
//       </div>

//       <div className="text-center mt-4">
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </div>
//       <div className="text-center mt-4">
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Add Question
//         </button>
//       </div>

//     </div>
//   );
// }

// export default AddSurvey;

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// // import { submitSurveyResponse } from '../assets/surveyAction';
// import { addSurveyQuestion, submitSurveyResponse } from '../assets/surveyAction';

// import { Link } from 'react-router-dom';

// function AddSurvey() {
//   const dispatch = useDispatch();
//   const [response, setResponse] = useState('');

//   const handleResponseChange = (e) => {
//     setResponse(e.target.value);
//   };

//   const handleSubmitResponse = () => {
//     dispatch(submitSurveyResponse(response));
//     setResponse('');
//   };

//   return (
//     <div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-2">Response</label>
//         <div className="max-w-md mx-auto p-4">
//           <textarea
//             className="w-full h-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
//             placeholder="Enter your response here"
//             value={response}
//             onChange={handleResponseChange}
//           />
//         </div>
//       </div>

//       <div className="text-center mt-4">
//         <Link to="/results">
//         <button
//           onClick={handleSubmitResponse}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Submit Response
//         </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default AddSurvey;


// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addSurveyQuestion, submitSurveyResponse } from '../assets/surveyAction';
// import { Link } from 'react-router-dom';

// function AddSurvey() {
//   const dispatch = useDispatch();
//   const [response, setResponse] = useState('');

//   const handleResponseChange = (e) => {
//     setResponse(e.target.value);
//   };

//   const handleSubmitResponse = () => {
//     dispatch(submitSurveyResponse(response));
//     setResponse('');
//   };

//   return (
//     <div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-2">Response</label>
//         <div className="max-w-md mx-auto p-4">
//           <textarea
//             className="w-full h-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
//             placeholder="Enter your response here"
//             value={response}
//             onChange={handleResponseChange}
//           />
//         </div>
//       </div>

//       <div className="text-center mt-4">
//         <Link to="/results">
//           <button
//             onClick={handleSubmitResponse}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover-bg-blue-600"
//           >
//             Submit Response
//           </button>
//         </Link>
//       </div>

//       {/* Display the entered response */}
//       <div className="mt-4">
//         <h2>Your Response:</h2>
//         <p>{response}</p>
//       </div>
//     </div>
//   );
// }
// export default AddSurvey;

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addSurveyQuestion, submitSurveyResponse } from '../assets/surveyAction';
// import { useNavigate } from 'react-router-dom';
//  import addsurvey from "../assets/addsurvey.png";

// function AddSurvey() {
//   const dispatch = useDispatch();
//   const [response, setResponse] = useState('');
//   const navigate = useNavigate(); // Correct the placement of useNavigate

//   const handleResponseChange = (e) => {
//     setResponse(e.target.value);
//   };

//   const handleSubmitResponse = () => {
//     console.log('Submitting response:', response);
//     dispatch(submitSurveyResponse(response));
//     navigate('/results'); // Use navigate to programmatically go to the /results route
//     setResponse('');
//   };

//   return (
//     <div>
//       <div>
//         {/* <label className="block text-sm font-medium text-gray-700 mb-2">Response</label> */}
//         <div className="bg-blue-500 p-6 rounded-lg text-white " style={{width:"100%"}}>           <h1 className="text-5xl">ADD SURVEY CREATOR</h1>           </div>
//         <img src={addsurvey} className="mx-auto mb-4 w-[300px]" alt="Add Survey"  /> 
//         <div className="max-w-md mx-auto p-4">
//           <textarea
//             className="w-full h-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
//             placeholder="Enter your question here"
//             value={response}
//             onChange={handleResponseChange}
//           />
//         </div>
//       </div>

//       <div className="text-center mt-4">
//         <button
//           onClick={handleSubmitResponse}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover-bg-blue-600"
//         >
//           Submit Response
//         </button>
//       </div>

//     </div>
//   );
// }

// export default AddSurvey;




// function AddSurvey() {
//   const dispatch = useDispatch();
//   const [response, setResponse] = useState('');

//   const handleResponseChange = (e) => {
//     const newResponse = e.target.value;
//     setResponse(newResponse);

//     // Optionally dispatch the response as it's updated
//     // dispatch(submitSurveyResponse(newResponse));
//   };

//   const handleSubmitResponse = () => {
//     dispatch(submitSurveyResponse(response));
//     setResponse('');
//   };

//   return (
//     <div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-2">Response</label>
//         <div className="max-w-md mx-auto p-4">
//           <textarea
//             className="w-full h-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
//             placeholder="Enter your response here"
//             value={response}
//             onChange={handleResponseChange}
//           />
//         </div>
//       </div>

//       <div className="text-center mt-4">
//         {/* <Link to="/results"> */}
//           <button
//             onClick={handleSubmitResponse}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover-bg-blue-600"
//           >
//             Submit Response
//           </button>
//         {/* </Link> */}
//       </div>

//       {/* Display the entered response immediately */}
//       <div className="mt-4">
//         <h2>Your Response:</h2>
//         <p>{response}</p>
//       </div>
//     </div>
//   );
// }

// export default AddSurvey;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitSurveyResponse } from './surveyAction';
import { useNavigate } from 'react-router-dom';
import addsurvey from '../assets/addsurvey.png';

function AddSurvey() {
  const dispatch = useDispatch();
  const [response, setResponse] = useState({
    question:'',
    option1:'',
    option2:'',
    option3:''
  });
  const navigate = useNavigate();

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  const handleSubmitResponse = () => {
    console.log('Submitting response:', response);
    dispatch(submitSurveyResponse(response));
    navigate('/results');
    setResponse('');
  };

  return (
    <div>
      <div className="bg-blue-500 p-6 rounded-lg text-white mt-[30px] ml-[30px] mr-[30px]" >
        <h1 className="text-5xl ml-[260px]">ADD SURVEY CREATOR</h1>
      </div>
      <div style={{display:"inline-flex"}}>
      <img src={addsurvey} className=" mb-4 w-[300px] ml-[100px] mt-[30px]" alt="Add Survey" />
      <div className="max-w-md mx-auto p-4" style={{marginTop:"50px",marginLeft:"200px"}}>
        <textarea
          className="w-full h-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 "
          placeholder="Enter your question here"
          value={response.question}
          onChange={handleResponseChange}
        />
        <div className="mt-4">
          <p>Options:</p>
          <div className="flex gap-4">
            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              A
            </button> */}
             <textarea
          className="w-[220px] h-[100px] border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="option A"
          value={response.option1}
          onChange={handleResponseChange}
        />
         <textarea
          className="w-full h-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Option B"
          value={response.option2}
          onChange={handleResponseChange} 
        />
         <textarea
          className="w-full h-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Option C"
          value={response.option3}
          onChange={handleResponseChange}
        />
          
          </div>
        </div>
      </div>
      </div>
      <div className="text-center mt-4">
        <button
          onClick={handleSubmitResponse}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Response
        </button>
        
      </div>
    </div>
  );
}

export default AddSurvey;



// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { submitSurveyResponse } from '../assets/surveyAction';
// import { useNavigate } from 'react-router-dom';
// import addsurvey from '../assets/addsurvey.png';

// function AddSurvey() {
//   const dispatch = useDispatch();
//   const [response, setResponse] = useState('');
//   const [optionA, setOptionA] = useState('');
//   const [optionB, setOptionB] = useState('');
//   const [optionC, setOptionC] = useState('');
//   const navigate = useNavigate();

//   const handleResponseChange = (e) => {
//     setResponse(e.target.value);
//   };

//   const handleOptionAChange = (e) => {
//     setOptionA(e.target.value);
//   };

//   const handleOptionBChange = (e) => {
//     setOptionB(e.target.value);
//   };

//   const handleOptionCChange = (e) => {
//     setOptionC(e.target.value);
//   };

//   const handleSubmitResponse = () => {
//     console.log('Submitting response:', response);
//     console.log('Option A:', optionA);
//     console.log('Option B:', optionB);
//     console.log('Option C:', optionC);
//     dispatch(submitSurveyResponse({ response, optionA, optionB, optionC }));
//     navigate('/results');
//     setResponse('');
//     setOptionA('');
//     setOptionB('');
//     setOptionC('');
//   };

//   return (
//     <div>
//       <div className="bg-blue-500 p-6 rounded-lg text-white" style={{ width: '100%' }}>
//         <h1 className="text-5xl">ADD SURVEY CREATOR</h1>
//       </div>
//       <img src={addsurvey} className="mx-auto mb-4 w-[300px]" alt="Add Survey" />
//       <div className="max-w-md mx-auto p-4">
//         <textarea
//           className="w-full h-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
//           placeholder="Enter your question here"
//           value={response}
//           onChange={handleResponseChange}
//         />
//         <div className="mt-4">
//           <p>Options:</p>
//           <div className="flex flex-col gap-4">
//             <textarea
//               className="w-full h-16 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
//               placeholder="Option A"
//               value={optionA}
//               onChange={handleOptionAChange}
//             />
//             <textarea
//               className="w-full h-16 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
//               placeholder="Option B"
//               value={optionB}
//               onChange={handleOptionBChange}
//             />
//             <textarea
//               className="w-full h-16 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
//               placeholder="Option C"
//               value={optionC}
//               onChange={handleOptionCChange}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="text-center mt-4">
//         <button
//           onClick={handleSubmitResponse}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Submit Response
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AddSurvey;


