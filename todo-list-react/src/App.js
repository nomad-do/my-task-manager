// App.js
import React, { useState } from 'react';
import AuthForm from './components/AuthForm';
import TaskManager from './components/TaskManager';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <div className="container">
            <h1>My Task Manager</h1>
            {token ? <TaskManager /> : <AuthForm setToken={setToken} />}
        </div>
    );
}

export default App;
