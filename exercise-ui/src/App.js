import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { useState } from 'react';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();


  return (
    <div className="App">

      <header>
        <h1>Exercise Tracker</h1>
        <p id='subtitle'>A simple but effective tool to log your exercises.</p>
      </header>
      <Router>
        <main>
          <div className="App-header">
            <Route path="/" exact>
              <HomePage setExerciseToEdit={setExerciseToEdit} />
            </Route>
            <Route path="/create-exercise">
              <CreateExercisePage />
            </Route>
            <Route path="/edit-exercise">
              <EditExercisePage exerciseToEdit={exerciseToEdit} />
            </Route>
          </div>
        </main>
        <footer> © 2022 Charles Xu </footer>
      </Router>
    </div>
  );
}

export default App;