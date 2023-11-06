export const addSurveyQuestion = (question) => {
    return {
      type: 'ADD_SURVEY_QUESTION',
      question,
    };
  };
  
  export const submitSurveyResponse = (response) => {
    return {
      type: 'SUBMIT_SURVEY_RESPONSE',
      response,
    };
  };
  

// surveyAction.js
// export const addSurvey = (survey) => {
//     return {
//       type: 'ADD_SURVEY',
//       payload: survey,
//     };
//   };
  
