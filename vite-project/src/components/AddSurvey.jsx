
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

  const handleResponseChange = (e, field) => {
    setResponse({
      ...response,
      [field]: e.target.value,
    });
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
          onChange={(e) => handleResponseChange(e, 'question')}
        />
        <div className="mt-4">
          <p>Options:</p>
          <div className="flex gap-4">
             <textarea
          className="w-[220px] h-[100px] border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="option A"
          value={response.option1}
          // onChange={handleResponseChange}
          onChange={(e) => handleResponseChange(e, 'option1')}
        />
         <textarea
          className="w-full h-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Option B"
          value={response.option2}
          // onChange={handleResponseChange} 
          onChange={(e) => handleResponseChange(e, 'option2')} 
        />
         <textarea
          className="w-full h-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Option C"
          value={response.option3}
          // onChange={handleResponseChange}
          onChange={(e) => handleResponseChange(e, 'option3')}
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


