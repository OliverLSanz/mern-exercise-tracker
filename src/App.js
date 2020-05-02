import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import the components that we have created
import Navbar from "./components/navbar.component.js";
import ExercisesList from "./components/exercises-list.component.js";
import EditExercise from "./components/edit-exercise.component.js";
import CreateExercise from "./components/create-exercise.component.js";
import CreateUser from "./components/create-user.component.js";


// What App returns is loaded by index.js into index.html and finally displayed!
// Each Route element loads the specified component when it is in the specified
// URL
function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
        <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
