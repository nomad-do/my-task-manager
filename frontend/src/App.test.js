import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

test('renders login button', () => {
  render(
    <MemoryRouter>
      <AppRoutes token={null} handleLogout={() => {}} />
    </MemoryRouter>
  );
  const loginButton = screen.getByRole('button', { name: /login/i });
  expect(loginButton).toBeInTheDocument();
});
