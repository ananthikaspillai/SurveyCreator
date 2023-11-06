

// import { createStore, combineReducers } from 'redux';
// import authReducer from './authReducer';

// const rootReducer = combineReducers({
//   auth: authReducer,
// });

// const store = createStore(rootReducer);

// export default store;



import { createStore, combineReducers } from 'redux';
import surveyReducer from './surveyReducer'
import authReducer from './authReducer'; 

const rootReducer = combineReducers({
  surveys: surveyReducer,
  auth: authReducer, 
});

const store = createStore(rootReducer);

export default store;


