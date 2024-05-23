// AuthForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isLogin ? '/auth/login' : '/auth/register';
        try {
            const response = await axios.post(endpoint, { username, password });
            if (isLogin) {
                setToken(response.data.token);
                localStorage.setItem('token', response.data.token); // Save token to localStorage
            } else {
                alert('Registration successful, please log in.');
                setIsLogin(true);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Authentication failed.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            <button type="button" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Switch to Register' : 'Switch to Login'}
            </button>
        </form>
    );
};

export default AuthForm;
