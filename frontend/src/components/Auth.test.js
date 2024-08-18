import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthForm from './AuthForm'; 
import axiosInstance from '../axiosInstance'; 

jest.mock('../axiosInstance', () => ({
  post: jest.fn((url, data) => {
    if (url === '/auth/register') {
      return Promise.resolve({ data: 'success' });
    } else if (url === '/auth/login') {
      return Promise.resolve({ data: { token: 'fake-token', refreshToken: 'fake-refresh-token', userId: 'fake-user-id' } });
    }
    return Promise.reject(new Error('Unknown URL'));
  }),
}));

const setToken = jest.fn();
const TEMP_USERNAME = 'testuser';
const TEMP_PASSWORD = 'password';

beforeEach(() => {
  Storage.prototype.setItem = jest.fn((key, value) => {
    Object.defineProperty(window.localStorage, key, { value: value, writable: true });
  });
  Storage.prototype.getItem = jest.fn((key) => {
    return window.localStorage[key];
  });
});

test('should register a new user', async () => {
  render(
    <Router>
      <AuthForm setToken={setToken} />
    </Router>
  );

  fireEvent.click(screen.getByRole('button', { name: /Switch to Register/i }));

  fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: TEMP_USERNAME } });
  fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: TEMP_PASSWORD } });

  fireEvent.click(screen.getByRole('button', { name: /Register/i }));

  await waitFor(() => {
    console.log('Waiting for success message...');
    screen.debug(); 
    expect(screen.getByText(/Registration successful, please log in\./i)).toBeInTheDocument();
  });
});

test('should login a user', async () => {
  render(
    <Router>
      <AuthForm setToken={setToken} />
    </Router>
  );

  fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: TEMP_USERNAME } });
  fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: TEMP_PASSWORD } });

  fireEvent.click(screen.getByRole('button', { name: /Login/i }));

  await waitFor(() => {
    console.log('Waiting for login to complete...');
    screen.debug(); 
    expect(setToken).toHaveBeenCalledWith('fake-token');
    expect(localStorage.setItem).toHaveBeenCalledWith('token', 'fake-token');
    expect(localStorage.setItem).toHaveBeenCalledWith('refreshToken', 'fake-refresh-token');
    expect(localStorage.setItem).toHaveBeenCalledWith('userId', 'fake-user-id');
  });
});
