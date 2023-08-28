/**
 *  Testing Scenario
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';

import '@testing-library/jest-dom';

describe('RegisterInput component', () => {
  it('should handle name typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <RegisterInput register={() => {}} />
      </BrowserRouter>
    );
    const nameInput = await screen.getByPlaceholderText('Name');

    // Action
    await waitFor(() => userEvent.type(nameInput, 'nametest'));

    // Assert
    expect(nameInput).toHaveValue('nametest');
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <RegisterInput register={() => {}} />
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
        <RegisterInput register={() => {}} />
      </BrowserRouter>
    );
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await waitFor(() => userEvent.type(passwordInput, 'passwordtest'));

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockRegister = jest.fn();
    render(
      <BrowserRouter>
        <RegisterInput register={mockRegister} />
      </BrowserRouter>
    );
    const nameInput = await screen.getByPlaceholderText('Name');
    await waitFor(() => userEvent.type(nameInput, 'nametest'));
    const emailInput = await screen.getByPlaceholderText('Email');
    await waitFor(() => userEvent.type(emailInput, 'emailtest'));
    const passwordInput = await screen.getByPlaceholderText('Password');
    await waitFor(() => userEvent.type(passwordInput, 'passwordtest'));
    const registerButton = await screen.getByRole('button', {
      name: 'Register',
    });

    // Action
    await waitFor(() => userEvent.click(registerButton));

    // Assert
    expect(mockRegister).toBeCalledWith({
      name: 'nametest',
      email: 'emailtest',
      password: 'passwordtest',
    });
  });
});
