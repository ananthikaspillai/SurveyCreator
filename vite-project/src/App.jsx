
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import store from './components/store';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import AddQuestion from './components/AddQuestion';
import SurveyResults from './components/SurveyResults';
import Surveys from "./components/Surveys";
import Addsurvey from './components/AddSurvey';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/survey" element={<AddQuestion/>}/>
          <Route path="/results" element={<SurveyResults/>}/>
          <Route path="/surveys" element={<Surveys/>}/>
          <Route path="/addsurvey" element={<Addsurvey/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
