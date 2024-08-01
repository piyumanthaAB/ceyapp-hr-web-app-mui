import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';
import { addNewDepartment } from 'src/redux/department';

// ----------------------------------------------------------------------

export default function CreateDepartmentView() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [departmentName, setDepartmentName] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(addNewDepartment({departmentName}));
  };

  const handleCancelClick = (event) => {
    navigate('/dashboard/departments');
  };

  const renderForm = (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name="department"
            label="Department"
            type="text"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
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
          Create Department
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
            Create Department
          </Typography>
          <br />
          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
