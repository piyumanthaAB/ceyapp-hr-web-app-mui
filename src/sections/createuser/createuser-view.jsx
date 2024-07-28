import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { AdapterDateFns, LocalizationProvider } from '@mui/x-date-pickers';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function CreateUserView() {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [employeeType, setEmployeeType] = useState('');
  const [department, setDepartment] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [gender, setGender] = useState('');
  const [accessLevel, setAccessLevel] = useState('');
  const [joinedDate, setJoinedDate] = useState(null);

  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Handle the user creation logic here
    console.log('Employee created');
  };

  const handleCancelClick = (event) => {
    navigate('/employees');
  };

  const renderForm = (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: 150,
              height: 150,
              borderRadius: 1,
              bgcolor: alpha(theme.palette.background.default, 0.72),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              cursor: 'pointer',
              mb: 2,
            }}
            onClick={() => document.getElementById('imageUpload').click()}
          >
            {profileImage ? (
              <Avatar src={profileImage} sx={{ width: '100%', height: '100%' }} />
            ) : (
              <Iconify icon="eva:camera-fill" width={24} height={24} />
            )}
          </Box>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
        </Grid>
        <Grid item md={6} />
        <Grid item xs={12} md={6}>
          <TextField fullWidth name="firstName" label="First Name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth name="lastName" label="Last Name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            select
            name="gender"
            label="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth name="email" label="Email" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth name="mobileNumber" label="Mobile Number" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth name="employeeId" label="Employee ID" />
        </Grid>
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Joined Date"
              value={joinedDate}
              onChange={(newValue) => setJoinedDate(newValue)}
              sx={{ width: '100%' }}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            select
            name="employeeType"
            label="Employee Type"
            value={employeeType}
            onChange={(e) => setEmployeeType(e.target.value)}
          >
            <MenuItem value="fullTime">Full-Time</MenuItem>
            <MenuItem value="partTime">Part-Time</MenuItem>
            <MenuItem value="contract">Contract</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            select
            name="department"
            label="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <MenuItem value="hr">HR</MenuItem>
            <MenuItem value="engineering">Engineering</MenuItem>
            <MenuItem value="marketing">Marketing</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            select
            name="accessLevel"
            label="Access Level"
            value={accessLevel}
            onChange={(e) => setAccessLevel(e.target.value)}
          >
            <MenuItem value={1}>Normal User</MenuItem>
            <MenuItem value={2}>Admin User</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField fullWidth name="address" label="Address" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField fullWidth name="city" label="City" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField fullWidth name="state" label="State" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField fullWidth name="zipCode" label="ZIP Code" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    <Iconify icon={showConfirmPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Box sx={{ my: 3 }} /> {/* Add some space before the button */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Button
          fullWidth
          variant="contained"
          color="inherit"
          onClick={handleCancelClick}
          sx={{ mr: 1 }}
        >
          Cancel
        </Button>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color="inherit"
          onClick={handleSubmit}
          sx={{ ml: 1 }}
        >
          Create Employee
        </LoadingButton>
      </Box>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 800, // Adjusted for a wider form
          }}
        >
          <Typography variant="h4" gutterBottom>
            Create Employee Account
          </Typography>
          <br />
          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
