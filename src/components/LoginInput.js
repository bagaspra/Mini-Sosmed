import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, TextField, FormControl, Box } from '@mui/material';
import useInput from '../hooks/useInput';

export default function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 ">
      <h5 className="text-xl font-medium text-gray-900 text-center">Login</h5>
      <FormControl>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={onEmailChange}
            placeholder="Email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="Password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => login({ email, password })}
            aria-label="Login"
          >
            Sign In
          </Button>
        </Box>
        <div className="text-sm font-medium text-gray-500">
          Belum punya akun?{' '}
          <Link className="link text-blue-700 hover:underline" to="/register">
            Daftar
          </Link>
        </div>
      </FormControl>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
