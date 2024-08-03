import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { AdapterDateFns, LocalizationProvider } from '@mui/x-date-pickers';
import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function CreatePopupView() {
  const theme = useTheme();

  const [windowSize, setWindowSize] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [department, setDepartment] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [repeat, setRepeat] = useState(false);

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
    console.log('Popup created');
  };

  const handleCancelClick = (event) => {
    navigate('/popups');
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  console.log(selectedTime);
  
  const renderForm = (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField fullWidth name="title" label="Title" />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField fullWidth name="message" label="Message" multiline rows={4} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              width: '100%',
              height: 300,
              borderRadius: 1,
              bgcolor: alpha(theme.palette.background.default, 0.72),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              cursor: 'pointer',
              border: '2px dashed grey',
              mb: 2,
              flexDirection: 'column',
            }}
            onClick={() => document.getElementById('imageUpload').click()}
          >
            {profileImage ? (
              <Avatar src={profileImage} sx={{ width: '100%', height: '100%' }} />
            ) : (
              <>
                <Typography variant="body1" gutterBottom>
                  Drop image or video here, or{' '}
                  <span style={{ color: 'blue', textDecoration: 'underline' }}>browse</span>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Supports: PNG, JPG, JPEG, WEBP, PDF
                </Typography>
                <Iconify icon="eva:camera-fill" width={24} height={24} />
              </>
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
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <InputLabel>Departments</InputLabel>
            <Select
              multiple
              value={department}
              onChange={handleDepartmentChange}
              input={<OutlinedInput label="Departments" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 48 * 4.5 + 8,
                    width: 250,
                  },
                },
              }}
            >
              <MenuItem value="HR">HR</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Support">Support</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* <Grid item md={6} /> */}
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              sx={{ width: '100%' }}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
              sx={{ width: '100%' }}
              renderInput={(params) => <TextField fullWidth {...params} />}
              disabled={repeat}
            />
          </LocalizationProvider>
          <FormControlLabel
            control={
              <Checkbox
                checked={repeat}
                onChange={(e) => setRepeat(e.target.checked)}
                name="repeat"
              />
            }
            label="Repeat"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Select Time"
              value={selectedTime}
              onChange={(newValue) => setSelectedTime(newValue)}
              renderInput={(params) => <TextField fullWidth {...params} />}
              sx={{ width: '100%' }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            select
            name="windowSize"
            label="Window Size"
            value={windowSize}
            onChange={(e) => setWindowSize(e.target.value)}
          >
            <MenuItem value="full">Large</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      <Box sx={{ my: 3 }} />
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
          Create Popup
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
            Create a New Popup
          </Typography>
          <br />
          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
