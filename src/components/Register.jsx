import React, { useState, useContext, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import { useTheme } from '@mui/material/styles'; 
import { ColorModeContext, tokens } from '../theme';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Register = () => {
  const theme = useTheme(); 
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const { toggleColorMode } = useContext(ColorModeContext);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    preferred_name: '',
    title: '',
    dept: '',
    email: '',
    password: '',
    role: '',
    profile_image: null
  });

  const { first_name, last_name, preferred_name, title, dept, email, password, role, profile_image } = formData;

  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    // Fetch roles from the database
    const fetchRoles = async () => {
      try {
        const roleResponse = await fetch('/api/roles');
        if (!roleResponse.ok) {
          throw new Error(`HTTP error! status: ${roleResponse.status}`);
        }
        const roleData = await roleResponse.json();
        console.log('Fetched roles:', roleData); // Debugging line
        setRoles(roleData);
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };

    fetchRoles();
  }, []);

  const onChange = e => {
    if (e.target.name === 'profile_image') {
      setFormData({ ...formData, profile_image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleRegister = async () => {
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const resData = await response.json();
      console.log('User registered:', resData);
      setError(false);
      setHelperText('Registration Successful');
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
      setError(true);
      setHelperText('Error registering user');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleRegister();
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
      }}
    >
      <form
        noValidate
        autoComplete="off"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '600px',
          margin: "auto",
          justifyContent: 'center',
          alignItems: 'center'
        }}
        encType="multipart/form-data"
      >
        <Card style={{ padding: '20px', width: '100%' }}>
          <CardHeader
            title="Register"
            style={{
              backgroundColor: colors.primary[400],
              textAlign: "center",
              padding: "10px"
            }}
          />
          <CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <TextField
                error={error}
                id="first_name"
                name="first_name"
                label="First Name"
                placeholder="First Name"
                margin="normal"
                onChange={onChange}
                onKeyDown={handleKeyPress}
                helperText={error ? helperText : ''}
                sx={{
                  marginBottom: 2,
                  '& .MuiInputBase-root': {
                    color: colors.grey[100],
                  },
                }}
                style={{ width: '48%' }}
              />
              <TextField
                error={error}
                id="last_name"
                name="last_name"
                label="Last Name"
                placeholder="Last Name"
                margin="normal"
                onChange={onChange}
                onKeyDown={handleKeyPress}
                helperText={error ? helperText : ''}
                sx={{
                  marginBottom: 2,
                  '& .MuiInputBase-root': {
                    color: colors.grey[100],
                  },
                }}
                style={{ width: '48%' }}
              />
            </div>
            <TextField
              fullWidth
              id="preferred_name"
              name="preferred_name"
              label="Preferred Name"
              placeholder="Preferred Name"
              margin="normal"
              onChange={onChange}
              onKeyDown={handleKeyPress}
              sx={{
                marginBottom: 2,
                '& .MuiInputBase-root': {
                  color: colors.grey[100],
                },
              }}
              style={{ width: '48%' }}
            />
            <TextField
              error={error}
              fullWidth
              id="email"
              name="email"
              type="email"
              label="Email"
              placeholder="Email"
              margin="normal"
              onChange={onChange}
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
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              onChange={onChange}
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
              fullWidth
              id="title"
              name="title"
              label="Title"
              placeholder="Title"
              margin="normal"
              onChange={onChange}
              onKeyDown={handleKeyPress}
              sx={{
                marginBottom: 2,
                '& .MuiInputBase-root': {
                  color: colors.grey[100],
                },
              }}
            />
            <Select
              id="dept"
              name="dept"
              value={dept}
              onChange={onChange}
              displayEmpty
              margin="normal"
              sx={{
                marginBottom: 2,
                '& .MuiInputBase-root': {
                  color: colors.grey[100],
                },
              }}
              style={{ width: '60%' }}
            >
              <MenuItem value="" disabled>
                Select Department
              </MenuItem>
              {departments.map((department) => (
                <MenuItem key={department.id} value={department.name}>
                  {department.name}
                </MenuItem>
              ))}
            </Select>
            <Select
              id="role"
              name="role"
              value={role}
              onChange={onChange}
              displayEmpty
              margin="normal"
              sx={{
                marginBottom: 2,
                '& .MuiInputBase-root': {
                  color: colors.grey[100],
                },
              }}
              style={{ width: '60%' }}
            >
              <MenuItem value="" disabled>
                Select Role
              </MenuItem>
              {roles.map((role) => (
                <MenuItem key={role.id} value={role.name}>
                  {role.name}
                </MenuItem>
              ))}
            </Select>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
              <label htmlFor="profile_image" style={{ marginRight: '8px' }}>Select a Profile Image</label>
              <input
                type="file"
                id="profile_image"
                name="profile_image"
                accept="image/*"
                onChange={onChange}
              />
            </div>
          </CardContent>
          <CardActions style={{ justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleRegister}
              sx={{
                marginTop: 2,
                backgroundColor: colors.blueAccent[500],
                color: colors.primary[400],
                '&:hover': {
                  backgroundColor: colors.blueAccent[600],
                },
              }}
              style={{ width: '50%' }} // Set the button width to 50%
            >
              Register
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

export default Register;