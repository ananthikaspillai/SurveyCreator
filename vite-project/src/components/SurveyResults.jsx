// import React from 'react';
// import { useSelector } from 'react-redux';

// function SurveyResults() {
//   const questions = useSelector((state) => state.surveys.questions);
//   const responses = useSelector((state) => state.surveys.responses);
//   console.log(questions)
//   console.log(responses)
//   return (
//     <div>
//       <h1>Survey Results</h1>
      
//       {/* <div>
//         <h2>Survey Questions:</h2>
//         <ul>
//           {questions.map((question, index) => (
//             <li key={index}>{question}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h2>Survey Responses:</h2>
//         <ul>
//           {responses.map((response, index) => (
//             <li key={index}>{response}</li>
//           ))}
//         </ul>
//       </div> */}
//     </div>
//   );
// }

// export default SurveyResults;


// import React from 'react';
// import { useSelector } from 'react-redux';

// function SurveyResults() {
//   const questions = useSelector((state) => state.surveys.questions);
//   const responses = useSelector((state) => state.surveys.responses);

//   return (
//     <div>
//       <h1>Survey Results</h1>

//       <div>
//         <h2>Survey Questions:</h2>
//         <ul>
//           {questions.map((question, index) => (
//             <li key={index}>{question}</li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <h2>Survey Responses:</h2>
//         <ul>
//           {responses && responses.length > 0 ? (
//             responses.map((response, index) => (
//               <li key={index}>
//                 {typeof response === 'string' ? response : response.comment}
//               </li>
//             ))
//           ) : (
//             <p>No responses available.</p>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default SurveyResults;



// import React, { useState, useEffect } from "react";

 
// const SurveyResults = () => {
//   const [speakers, setSpeakers] = useState([]);
//   const [newSpeaker, setNewSpeaker] = useState({ name: "", topic: "" });
 
//   const addSpeaker = () => {
//     if (newSpeaker.name && newSpeaker.topic) {
//       const updatedSpeakers = [...speakers, { ...newSpeaker, id: Date.now() }];
//       setSpeakers(updatedSpeakers);
//       setNewSpeaker({ name: "", topic: "" });
//     }
//   };
 
//   return (
//     <div>
//       <Header />
 
//       <div className="mt-8">
//         <img src={Icon} className="mx-auto" />
//       </div>
 
//       <h1 className="text-2xl ml-5 mt-8">SPEAKERS</h1>
 
//       <div className="flex justify-center">
//         <input
//           type="text"
//           placeholder="Speaker Name"
//           value={newSpeaker.name}
//           onChange={(e) => setNewSpeaker({ ...newSpeaker, name: e.target.value })}
//           className="flex mr-8 p-5 rounded-lg"
//         />
//         {/* <input
//           type="text"
//           placeholder="Topic"
//           value={newSpeaker.topic}
//           onChange={(e) => setNewSpeaker({ ...newSpeaker, topic: e.target.value })}
//           className="flex mr-8 p-5 rounded-2xl"
//         /> */}
//         <button className="border border-black rounded-lg p-5" onClick={addSpeaker}>
//           Add Speaker
//         </button>
//       </div>
 
//       <div className="border border-gray-300 p-4 m-4 rounded-lg shadow-md bg-white w-72 mx-auto my-20">
//         <h2 className="text-xl font-semibold">Speakers</h2>
//         <div className="flex flex-wrap">
//           {speakers.map((speaker) => (
//             <div key={speaker.id} className="m-2 p-2 border border-gray-400">
//               <p className="text-gray-600">
//                 <strong>Name: {speaker.name}</strong>
//               </p>
//               <p className="text-gray-600">Topic: {speaker.topic}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
 
// export default SurveyResults;



// import React from 'react';
// import { useSelector } from 'react-redux';

// function SurveyResults() {
//   const responses = useSelector((state) => state.surveys.responses);

//   return (
//     <div>
//       <h1>Survey Results</h1>

//       <div>
//         <h2>Survey Responses:</h2>
//         <ul>
//           {responses.length > 0 ? (
//             responses.map((response, index) => (
//               <li key={index}>
//                 {response}
//               </li>
//             ))
//           ) : (
//             <p>No responses available.</p>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default SurveyResults;

// import React from 'react';
// import { useSelector } from 'react-redux';

// function SurveyResults() {
//   const responses = useSelector((state) => state.surveys.responses);

//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <h1 className="text-2xl font-bold text-center mb-4">Survey Results</h1>

//       <div className="bg-white p-4 rounded-md shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Survey Responses:</h2>
//         {responses.length > 0 ? (
//           <ul>
//             {responses.map((response, index) => (
//               <li
//                 key={index}
//                 className="border p-2 rounded-md mb-2 hover:bg-gray-200"
//               >
//                 {response}
//               </li>
//             ))
//           }
//           </ul>
//         ) : (
//           <p className="text-gray-600">No responses available.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SurveyResults;


// import React from 'react';
// import { useSelector } from 'react-redux';

// function SurveyResults({ selectedOption }) { // Receive selectedOption as a prop
//   const responses = useSelector((state) => state.surveys.responses);

//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <h1 className="text-2xl font-bold text-center mb-4">Survey Results</h1>

//       <div className="bg-white p-4 rounded-md shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Survey Responses:</h2>
//         <p>Selected Option: {selectedOption}</p> {/* Display the selected option */}
//         {responses.length > 0 ? (
//           <ul>
//             {responses.map((response, index) => (
//               <li
//                 key={index}
//                 className="border p-2 rounded-md mb-2 hover:bg-gray-200"
//               >
//                 {response.question}
//               </li>
//             ))
//           }
//           </ul>
//         ) : (
//           <p className="text-gray-600">No responses available.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SurveyResults;


// import React from 'react';
// import { useSelector } from 'react-redux';

// function SurveyResults({ question, optionA, optionB, optionC }) {
//   const responses = useSelector((state) => state.surveys.responses);

//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <h1 className="text-2xl font-bold text-center mb-4">Survey Results</h1>

//       <div className="bg-white p-4 rounded-md shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Survey Question:</h2>
//         <p>{question}</p>

//         <h2 className="text-lg font-semibold mb-4">Options:</h2>
//         <p>Option A: {optionA}</p>
//         <p>Option B: {optionB}</p>
//         <p>Option C: {optionC}</p>

//         <h2 className="text-lg font-semibold mb-4">Survey Responses:</h2>
//         {responses.length > 0 ? (
//           <ul>
//             {responses.map((response, index) => (
//               <li
//                 key={index}
//                 className="border p-2 rounded-md mb-2 hover:bg-gray-200"
//               >
//                 {response}
//               </li>
//             ))
//           }
//           </ul>
//         ) : (
//           <p className="text-gray-600">No responses available.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SurveyResults;


// import React from 'react';
// import { useSelector } from 'react-redux';

// function SurveyResults() {
//   const responses = useSelector((state) => state.surveys.responses);

//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <h1 className="text-2xl font-bold text-center mb-4">Survey Results</h1>

//       <div className="bg-white p-4 rounded-md shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Survey Responses:</h2>
//         {responses.length > 0 ? (
//           <ul>
//             {responses.map((response, index) => (
//               <li key={index} className="border p-2 rounded-md mb-2 hover:bg-gray-200">
//                 <p>Question: {response.question}</p>
//                 <p>Option 1: {response.option1}</p>
//                 <p>Option 2: {response.option2}</p>
//                 <p>Option 3: {response.option3}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-600">No responses available.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SurveyResults;

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
            {/* {responses.map((response, index) => (
              <li key={index} className="border border-blue-500 p-2 rounded-md mb-2 hover:bg-gray-700">
                <p className="font-bold">Question: {response.question}</p>
                <div className="h-[50px] w-[1130px] bg-blue-500 rounded-full mb-3">
                  <div className="h-full text2xs text-center text-black bg-blue-300 rounded-full">Option 1: {response.option1}</div>
                </div>
                <div className="  h-[50px] w-[1130px] bg-blue-500 rounded-full mb-3 mt-[10px]">
                  <div className="h-full text-xs text-center text-black bg-blue-300 rounded-full">Option 2: {response.option2}</div>
                </div>
                <div className="h-[50px] w-[1130px]  bg-blue-500 rounded-full mb-2">
                  <div className="h-full text-xs text-center text-black bg-blue-300 rounded-full">Option 3: {response.option3}</div>
                </div>
              </li> */}
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
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4">
        Submit
      </button>
    </div>
  );
}

export default SurveyResults;



