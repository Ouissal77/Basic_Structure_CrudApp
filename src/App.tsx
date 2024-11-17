import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import React from "react";
import "./App.css";
import Home from "./Home";
import StudentView from "./component/student/StudentView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/EditStudent";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StudentView />}></Route>

          <Route path={"edit-student/:id"} element={< AddStudent isEdit={false}/>}></Route>
          <Route path={"add-student/"} element={<AddStudent isEdit={false} />}></Route>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
