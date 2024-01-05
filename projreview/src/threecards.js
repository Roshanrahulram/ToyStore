import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const LoginContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const LoginBox = styled(Box)({
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
});

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Form submitted');
  };

  return (
    <LoginContainer>
      <LoginBox>
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">Login</h1>

          <TextField
            fullWidth
            id="email"
            label="Username/Email"
            variant="outlined"
            margin="normal"
            required
          />

          <TextField
            fullWidth
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            required
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            <Link to='./home' style={{ color: 'white', textDecoration: 'none' }}>
              Login
            </Link>
          </Button>

          <p className="mt-3 text-center">
            Not a member?{' '}
            <span>
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
            </span>
          </p>
        </form>
      </LoginBox>
    </LoginContainer>
  );
}

export default Login;
