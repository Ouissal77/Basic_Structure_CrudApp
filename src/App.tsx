import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

import React from 'react';
import './App.css';
import Home from './Home';
import StudentView from './component/student/StudentView';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <Home></Home>
      <StudentView></StudentView>
    </div>
  );
}

export default App;
