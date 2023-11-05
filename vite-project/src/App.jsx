

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
import store from './assets/store';

import LoginPage from './assets/LoginPage';
import HomePage from './assets/HomePage';
import AddSurvey from './assets/AddSurvey';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/survey" element={<AddSurvey/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
