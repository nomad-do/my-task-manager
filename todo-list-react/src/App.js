import React, { useState } from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleAddTodo = (event) => {
        event.preventDefault();
        if (!input.trim()) return;
        const newTodos = [...todos, { id: Date.now(), text: input, completed: false }];
        setTodos(newTodos);
        setInput('');
    };

    const toggleTodo = (id) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <h1>Todo List</h1>
            <form onSubmit={handleAddTodo}>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''} onClick={() => toggleTodo(todo.id)}>
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
