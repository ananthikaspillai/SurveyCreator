
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function AddSurvey() {
    const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const [surveys, setSurveys] = useState([]);
      const [editIndex, setEditIndex] = useState(null);
    
      const navigate = useNavigate()
    
      const handleTitleChange = (event) => {
        setTitle(event.target.value);
      };
    
      const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
      };
    
      const handleSave = () => {
        if (title && description) {
          if (editIndex !== null) {
            const updatedSurveys = [...surveys];
            updatedSurveys[editIndex] = { title, description };
            setSurveys(updatedSurveys);
            setEditIndex(null);
          } else {
            setSurveys([...surveys, { title, description }]);
          }
    
          axios.post('http://localhost:8081/surveys/create', { title, description })
            .then((response) => {
              console.log('Data saved to the database:', response.data);
              fetchDataFromDatabase();
            })
            .catch((error) => {
              console.error('Error saving data to the database:', error);
            });
    
          setTitle('');
          setDescription('');
        }
      };
    
      const fetchDataFromDatabase = () => {
        axios.get('http://localhost:8081/surveys')
          .then((response) => {
            setSurveys(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data from the database:', error);
          });
      };
    
      useEffect(() => {
        fetchDataFromDatabase();
      }, []);
    
      const handleEdit = (index) => {
        const surveyToEdit = surveys[index];
        setTitle(surveyToEdit.title);
        setDescription(surveyToEdit.description);
        setEditIndex(index);
      };
    
      const handleDelete = (key) => {
        axios.delete(`http://localhost:8081/surveys/${key}`)
          .then(() => {
            fetchDataFromDatabase();
          })
          .catch((error) => {
            console.error('Error deleting data from the database:', error);
          });
      };
    
      const handleAddQuestion = (id) => {
        navigate(`/survey?surveyid=${id}`)
      }
    

  return (
    <div className="bg-blue-900 min-h-screen flex items-center justify-center ">
      <div className="bg-white shadow-md rounded px-6 pt-7 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <h1 className="text-2xl mb-3 font-bold text-gray-700">Add Survey</h1>
          <input
            value={title}
            onChange={handleTitleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Title"
          />
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            placeholder="Description"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </div>
        <div>
          {surveys.map((survey, index) => (
            <div key={survey.id} className="mt-4 p-4 border rounded">
              <h2 className="text-xl font-semibold">Title:</h2>
              <p>{survey.title}</p>
              <h2 className="text-xl font-semibold">Description:</h2>
              <p>{survey.description}</p>
              <button onClick={() => handleEdit(index)} className="bg-green-500 text-white p-2 rounded mr-2">
                Edit
              </button>
              <button className="bg-green-500 text-white p-2 rounded mr-2" 
                onClick={() => handleAddQuestion(survey.id)}
              >
                Add question
              </button>
              <button onClick={() => handleDelete(survey.id)} className="bg-red-500 text-white p-2 rounded">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddSurvey;
