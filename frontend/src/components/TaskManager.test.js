import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import TaskManager from './TaskManager';
import axiosInstance from '../axiosInstance'; 
import { mockTasks } from './mockTasks';

jest.mock('../axiosInstance');

axiosInstance.get.mockResolvedValue({ data: mockTasks });
axiosInstance.post.mockResolvedValue({ data: { _id: '4', title: 'Task 4', urgency: 2, importance: 3, effort: 2, total_score: 7 } });
axiosInstance.delete.mockResolvedValue({});

beforeEach(() => {
  jest.clearAllMocks();
});

test('should create a new task and sort tasks by total score', async () => {
  render(<TaskManager initialTasks={mockTasks} />);

  await waitFor(() => {
    expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Task 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Task 3/i)).toBeInTheDocument();
  });

  fireEvent.change(screen.getByPlaceholderText('New Task Title'), { target: { value: 'Task 4' } });
  fireEvent.change(screen.getByPlaceholderText('Urgency'), { target: { value: '2' } });
  fireEvent.change(screen.getByPlaceholderText('Importance'), { target: { value: '3' } });
  fireEvent.change(screen.getByPlaceholderText('Effort'), { target: { value: '2' } });
  fireEvent.click(screen.getByText(/Add New Task/i));

  await waitFor(() => {
    expect(screen.getByText(/Task 4/i)).toBeInTheDocument();
  });
});

