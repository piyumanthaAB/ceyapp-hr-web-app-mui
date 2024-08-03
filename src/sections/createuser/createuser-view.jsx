import { useState, useEffect } from 'react';
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
// import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
// import InputAdornment from '@mui/material/InputAdornment';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { AdapterDateFns, LocalizationProvider } from '@mui/x-date-pickers';
import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line import/no-extraneous-dependencies
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { bgGradient } from 'src/theme/css';
import { getUserRoles } from 'src/redux/userroles';
import { addNewEmployee } from 'src/redux/employees';
import { getDepartments } from 'src/redux/department';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function CreateUserView() {
  const theme = useTheme();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDepartments);
    dispatch(getUserRoles);
  }, [dispatch]);

  const { departments } = useSelector(
    (state) => state.departmentReducer
  );
  const { userroles } = useSelector(
    (state) => state.userroleReducer
  );

  // const {loading} = useSelector(
  //   (state) => state.employeeReducer
  // )

  // const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [employeeType, setEmployeeType] = useState('');
  const [department, setDepartment] = useState('');
  const [image, setProfileImage] = useState(null);
  const [uploadedFile, setFile] = useState(null);
  const [gender, setGender] = useState('');
  const [role, setUserRole] = useState('');
  const [joinedDate, setJoinedDate] = useState(null);
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState(null);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState(null);

  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('firstName',firstName);
    formData.append('lastName',lastName);
    formData.append('employeeType', employeeType);
    formData.append('email', email);
    formData.append('gender',gender);
    formData.append('employeeRole', role);
    formData.append('contactNo', contactNo);
    formData.append('joinedDate', joinedDate);
    formData.append('department', department);
    formData.append('image', uploadedFile);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('zipCode', zipCode);

    dispatch(addNewEmployee(formData));
    // if(!loading){
    //   navigate('/dashboard/employees');
    // }
  };

  const handleCancelClick = (event) => {
    navigate('/dashboard/employees');
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
            {image ? (
              <Avatar src={image} sx={{ width: '100%', height: '100%' }} />
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
          <TextField
            fullWidth
            name="firstName"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="lastName"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
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
          <TextField
            fullWidth
            name="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="mobileNumber"
            label="Mobile Number"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
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
            <MenuItem value="Full-Time">Full-Time</MenuItem>
            <MenuItem value="Part-Time">Part-Time</MenuItem>
            <MenuItem value="Contract">Contract</MenuItem>
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
            {
              departments.map((data)=>(
                <MenuItem value={data._id}>{data.departmentName}</MenuItem>
              ))
            }
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            select
            name="userRole"
            label="User Role"
            value={role}
            onChange={(e) => setUserRole(e.target.value)}
          >
            {
              userroles.map((data)=>(
                <MenuItem value={data.id}>{data.role}</MenuItem>
              ))
            }
          </TextField>
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            name="address"
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            name="city"
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            name="state"
            label="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            name="zipCode"
            label="ZIP Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </Grid>
        {/* <Grid item xs={12} md={6}>
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
        </Grid> */}
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
