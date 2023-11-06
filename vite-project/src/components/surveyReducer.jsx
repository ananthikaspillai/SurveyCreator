const initialState = {
    questions: [],
    responses: [],
  };
  
  const surveyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_SURVEY_QUESTION':
        return {
          ...state,
          questions: [...state.questions, action.question],
        };
      case 'SUBMIT_SURVEY_RESPONSE':
        return {
          ...state,
          responses: [...state.responses, action.response],
        };
      default:
        return state;
    }
  };
  
  export default surveyReducer;


// const surveyReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_SURVEY_QUESTION':
      
//         return {
//           ...state,
//           questions: [...state.questions, action.question],
//         };
//       case 'SUBMIT_SURVEY_RESPONSE':
        
//         return {
//           ...state,
//           responses: [...state.responses, action.response],
//         };
//       default:
//         return state;
//     }
//   };
  
  // surveyReducer.js
// const initialState = {
//     responses: [],
//   };
  
//   const surveyReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_SURVEY':
//         return {
//           ...state,
//           responses: [...state.responses, action.payload],
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default surveyReducer;
  