import React from 'react';
import TaskManager from './components/TaskManager';
import './App.css'; // Adjust the path based on the file's location relative to the component.
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <h1>My Task Manager</h1>
      <TaskManager />
    </div>
  );
}

export default App;
