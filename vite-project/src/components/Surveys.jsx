// import React from 'react';
// import tools from "../assets/tools.png"
// function Surveys() {
//     const [data, setData] = useState(null);

//   useEffect(() => {
    
//     axios.get('http://localhost:8081/surveys')
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);
//   return (
//     <div className="bg-white-100   flex flex-col items-center justify-center">
//       <h1 className="text-5xl mb-[50px] mt-[30px] bg-blue-500 p-6 px-32 py-7 rounded-lg ">Select your Favourite  React Tool</h1>
//       <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Title</h1>
//       <h2 className="text-xl text-blue-600">Description</h2>
//       <img classNamesrc={tools}/>
//     </div>
//   );
// }

// export default Surveys;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import tools from "../assets/tools.png";

// function Surveys() {
//   const [data, setData] = useState(null);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:8081/surveys')
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   // const handleTitleChange = (event) => {
//   //   setTitle(event.target.value);
//   // };

//   // const handleDescriptionChange = (event) => {
//   //   setDescription(event.target.value);
//   // };

//   const handleSubmit = () => {
//     // You can perform actions with the title and description here, such as sending them to a server.
//     // For this example, we'll just alert the values.
//     alert(`Title: ${title}, Description: ${description}`);
//   };

//   return (
//     <div className="bg-white-100 flex flex-col ">
//       <h1 className="text-5xl mb-50 mt-30 bg-blue-500 p-6 px-32 py-7 rounded-lg">Select your Favorite React Tool</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title" className="text-4xl font-extrabold text-green-800 mb-4 ">Title:</label>

//         </div>
//         <div>
//           <label htmlFor="description" className="text-4xl font-extrabold text-blue-800 mb-4">Description:</label>
//           {/* <textarea
//             id="description"
//             value={description}
//             onChange={handleDescriptionChange}
//             className="text-xl text-blue-600"
//           /> */}
//         </div>
//         {/* <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg mt-4">
//           Submit
//         </button> */}
//       </form>
//       {data && data.map((survey) => (
//         <div key={survey.id}>
//           <h1 className="text-3xl font-extrabold text-blue-800 mb-8 ml-[260px]">{survey.title}</h1>
//           <h2 className="text-xl text-blue-600">{survey.description}</h2>
//           <img className="w-[180px] ml-[20px]" src={tools} alt="Tools" />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Surveys;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import tools from "../assets/tools.png";
import { Link } from 'react-router-dom';

function Surveys() {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8081/surveys')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // const handleTitleChange = (event) => {
  //   setTitle(event.target.value);
  // };

  // const handleDescriptionChange = (event) => {
  //   setDescription(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSurvey = {
      title: title,
      description: description,
    };
    axios.post('http://localhost:8081/surveys1/create', newSurvey)
      .then((response) => {
        console.log('Survey created successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error creating survey:', error);
      });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="bg-white-100 flex flex-col">
      <h1 className="text-5xl mb-50 mt-30 bg-blue-800  text-white p-6 px-32 py-7  ">Select your Favorite React Tool</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-[70px]">
          <label htmlFor="title" className="text-4xl font-bold text-green-800  mt-[40px] mb-4">Title:</label>
          {/* <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="text-xl text-blue-600"
          /> */}
        </div>
        <div>
          <label htmlFor="description" className="text-4xl font-bold text-blue-800 mb-4 mt-[20px]">Description:</label>
          {/* <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="text-xl text-blue-600"
          /> */}
        </div>
        {/* <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg mt-4">
          Submit
        </button> */}
          <Link to="/survey">
                <button className="bg-blue-500 text-white px-4 py-2 rounded ml-[300px] mb-[100px] ">
                  Add Question
                </button>
              </Link>
      </form>
      {data && data.map((survey) => (
        <div key={survey.id}>
          <h1 className="text-3xl font-extrabold text-blue-800 mb-8 ml-[260px]">{survey.title}</h1>
          <h2 className="text-xl text-blue-600">{survey.description}</h2>
          <img className="w-[180px] ml-[20px]" src={tools} alt="Tools" />
        </div>
      ))}
    </div>
  );
}

export default Surveys;

