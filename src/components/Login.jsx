import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import { useTheme } from '@mui/material/styles'; 
import { tokens } from '../theme'; // Adjust path to your theme
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from './AuthContext'; // Adjust based on your AuthContext location

const Login = () => {
  const theme = useTheme(); 
  const colors = tokens(theme.palette.mode); 

  const { login } = useAuth(); // Get the login function from context
  const navigate = useNavigate(); // Initialize the navigator

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsButtonDisabled(username.trim() === '' || password.trim() === '');
  }, [username, password]);

  const handleLogin = () => {
    if (username === 'abc@email.com' && password === 'password') {
      setError(false);
      setHelperText('Login Successfully');
      login(); // Call login function from the Auth context
      navigate('/index'); // Redirect to the index page after successful login
    } else {
      setError(true);
      setHelperText('Incorrect username or password');
      setUsername('');
      setPassword('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isButtonDisabled) {
      handleLogin();
    }
  };

  return (
    <form
      noValidate
      autoComplete="off"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '500px',
        margin: "auto",
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Card m="10px" sx={{ padding: '10px' }}>
        <CardHeader
          title="Login"
          sx={{
            backgroundColor: colors.primary[400],
            color: "#6870fa",
            textAlign: "center",
            padding: "20px",
          }}
        />
        <CardContent>
          <TextField
            error={error}
            fullWidth
            id="username"
            type="email"
            label="Username"
            placeholder="Username"
            margin="normal"
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
            helperText={error ? helperText : ''}
            sx={{
              marginBottom: 2,
              '& .MuiInputBase-root': {
                color: colors.grey[100],
              },
            }}
          />
          <TextField
            error={error}
            fullWidth
            id="password"
            type="password"
            label="Password"
            placeholder="Password"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            helperText={error ? helperText : ''}
            sx={{
              '& .MuiInputBase-root': {
                color: colors.grey[100],
              },
            }}
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={handleLogin}
            disabled={isButtonDisabled}
            sx={{
              marginTop: 2,
              flexGrow: 1,
              backgroundColor: colors.greenAccent[500],
              color: colors.grey[100],
            }}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default Login;
