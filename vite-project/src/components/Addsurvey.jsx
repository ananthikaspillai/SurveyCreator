
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddSurvey() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [surveys, setSurveys] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

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
    // const surveyToDelete = surveys[index];
    axios.delete(`http://localhost:8081/surveys/${key}`)
      .then(() => {
        // const updatedSurveys = surveys.filter((_, i) => i !== index);
        // setSurveys(updatedSurveys);
        fetchDataFromDatabase();
      })
      .catch((error) => {
        console.error('Error deleting data from the database:', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Add Survey</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Title:</h2>
        <textarea
          value={title}
          onChange={handleTitleChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Description:</h2>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          className="w-full border rounded p-2"
        />
      </div>
      <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded">
        Save
      </button>
      <div>
        {surveys.map((survey, index) => (
          <div key={survey.id} className="mt-4 p-4 border rounded">
            <h2 className="text-xl font-semibold">Title:</h2>
            <p>{survey.title}</p>
            {survey.id}
            <h2 className="text-xl font-semibold">Description:</h2>
            <p>{survey.description}</p>
            <button onClick={() => handleEdit(index)} className="bg-green-500 text-white p-2 rounded mr-2">
              Edit
            </button>
            <Link to="/survey">
              <button className="bg-green-500 text-white p-2 rounded mr-2">Add question</button>
              </Link>
            <button onClick={() => handleDelete(survey.id)} className="bg-red-500 text-white p-2 rounded">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddSurvey;
