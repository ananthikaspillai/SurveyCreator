import React from 'react';
import tools from "../assets/tools.png"
function Surveys() {
  return (
    <div className="bg-white-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl">Select your Favourite  React Tool</h1>
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Title</h1>
      <h2 className="text-xl text-blue-600">Description</h2>
      <img src={tools}/>
    </div>
  );
}

export default Surveys;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import survey from "../assets/survey.png"

// function Surveys() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
    
//     axios.get('http://localhost:8081/surveys/create')
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div className="bg-white-100 min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Title</h1>
//       <h2 className="text-xl text-blue-600">Description</h2>
//       {data && (
//         <img src={survey}/>
//       )}
//     </div>
//   );
// }

// export default Surveys;
