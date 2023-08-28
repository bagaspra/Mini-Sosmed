/**
 *  Testing Scenario
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

import '@testing-library/jest-dom';

describe('LoginInput component', () => {
  it('should handle email typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <LoginInput login={() => {}} />
      </BrowserRouter>
    );
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await waitFor(() => userEvent.type(emailInput, 'emailtest'));

    // Assert
    expect(emailInput).toHaveValue('emailtest');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <LoginInput login={() => {}} />
      </BrowserRouter>
    );
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await waitFor(() => userEvent.type(passwordInput, 'passwordtest'));

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn();
    render(
      <BrowserRouter>
        <LoginInput login={mockLogin} />
      </BrowserRouter>
    );
    const emailInput = await screen.getByPlaceholderText('Email');
    await waitFor(() => userEvent.type(emailInput, 'emailtest'));
    const passwordInput = await screen.getByPlaceholderText('Password');
    await waitFor(() => userEvent.type(passwordInput, 'passwordtest'));
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    // Action
    await waitFor(() => userEvent.click(loginButton));

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'emailtest',
      password: 'passwordtest',
    });
  });
});
