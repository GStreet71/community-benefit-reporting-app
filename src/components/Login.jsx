import React, { useState, useContext, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import { useTheme } from '@mui/material/styles'; 
import { ColorModeContext, tokens } from '../theme';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Login = () => {
  const theme = useTheme(); 
  const colors = tokens(theme.palette.mode);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toggleColorMode } = useContext(ColorModeContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsButtonDisabled(username.trim() === '' || password.trim() === '');
  }, [username, password]);

  const handleLogin = () => {
    const credentials = {
      user: {
        username: 'admin',
        password: 'password',
        fname: 'Austin',
        lname: 'Strassle',
        title: 'Community Benefits Manager',
        role: 'admin',
        photo: '/assets/admin.png',
        dept: 11
      },
    };

    if (username === credentials.user.username && password === credentials.user.password) {
      setError(false);
      setHelperText('Login Successfully');
      console.log('Login Successfully');
      login(credentials.user);
      navigate('/dashboard');
    } else {
      setError(true);
      setHelperText('Incorrect username or password');
      console.log('Incorrect username or password');
      setUsername('');
      setPassword('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: `${colors.primary[400]}`
    }}>
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
          title="Community Impact"
          sx={{
            backgroundColor: colors.primary[400],
            textAlign: "center",
            padding: "20px"
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
            onKeyDown={handleKeyPress}
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
            onKeyDown={handleKeyPress}
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
        onClick={handleLogin}
        sx={{
        marginTop: 2,
        flexGrow: 1,
        backgroundColor: colors.blueAccent[500],
        color: colors.primary[400],
          '&:hover': {
            backgroundColor: colors.blueAccent[600],
          },
        }}
      >
        Login
      </Button>
          </CardActions>
        </Card>
      </form>

      {/* Mode Toggle Icon */}
      <IconButton 
        onClick={toggleColorMode} 
        style={{ position: 'absolute', top: 20, right: 100 }}
      >
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </IconButton>
    </div>
    
  );
};

export default Login;
