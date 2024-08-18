import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserProfile from './UserProfile';
import axiosInstance from '../axiosInstance';

jest.mock('../axiosInstance', () => ({
  get: jest.fn(),
  put: jest.fn(),
  delete: jest.fn()
}));

beforeEach(() => {
  jest.clearAllMocks();
});

test('should update user profile', async () => {
  const mockGet = axiosInstance.get.mockResolvedValue({
    data: { username: 'testUser' }
  });
  const mockPut = axiosInstance.put.mockResolvedValue({
    data: { username: 'updatedUser' }
  });

  render(
    <Router>
      <UserProfile />
    </Router>
  );

  await waitFor(() => {
    expect(mockGet).toHaveBeenCalled();
  });

  fireEvent.click(screen.getByText(/Edit Profile/i));
  fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'updatedUser' } });
  fireEvent.click(screen.getByText(/Save/i));

  await waitFor(() => {
    expect(screen.getByText((content, element) =>
      element.tagName.toLowerCase() === 'p' && content.includes('updatedUser')
    )).toBeInTheDocument();
  });

  expect(mockPut).toHaveBeenCalledWith(`/auth/profile/${undefined}`, { username: 'updatedUser' });
});

test('should delete user profile', async () => {
  const mockGet = axiosInstance.get.mockResolvedValue({
    data: { username: 'testUser' }
  });
  const mockDelete = axiosInstance.delete.mockResolvedValue({});

  render(
    <Router>
      <UserProfile />
    </Router>
  );

  await waitFor(() => {
    expect(mockGet).toHaveBeenCalled();
  });

  await waitFor(() => {
    expect(screen.getByText((content, element) =>
      element.tagName.toLowerCase() === 'button' && content.match(/Delete Profile/i)
    )).toBeInTheDocument();
  });

  fireEvent.click(screen.getByText(/Delete Profile/i));

  await waitFor(() => {
    expect(mockDelete).toHaveBeenCalledWith(`/auth/profile/${undefined}`);
  });

});



