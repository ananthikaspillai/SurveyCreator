

// import React from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router,Routes, Route, Redirect } from 'react-router-dom';
// import store from "./assets/store";
// import LoginPage from "../src/assets/LoginPage"
// import homePage from './assets/homePage';

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
    
//       <Routes>
//             <Route exact path="/login" component={<LoginPage/>} />
//             <Route exact path="/home" component={<homePage />} />
//             <Redirect from="/" to="/login" />
//             </Routes>
     
//     </Router>
//     </Provider>
//     // <LoginPage />
//   );
// }

// export default App;




import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import store from './components/store';


import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import AddSurvey from './components/AddSurvey';
import SurveyResults from './components/SurveyResults';
import Surveys from "./components/Surveys";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/survey" element={<AddSurvey/>}/>
          <Route path="/results" element={<SurveyResults/>}/>
          <Route path="/surveys" element={<Surveys/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
