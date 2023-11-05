
import React from 'react';
import addsurvey from "../assets/addsurvey.png";

function AddSurvey() {
  return (
    <div className="max-w-md mx-auto p-4">
        <div className="bg-blue-500 p-6 rounded-lg text-white ">
          <h1 className="text-5xl">ADD SURVEY CREATOR</h1>
          </div>
      <img src={addsurvey} className="mx-auto mb-4 w-[300px]" alt="Add Survey"  /> 
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
        <textarea
          className="w-full h-32 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter your question here"
        />
      </div>

      <div className="text-center mt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddSurvey;

