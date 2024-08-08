import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  employees: [],
  employee: null,
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addEmployee: (state, action) => {
      if (Array.isArray(state.employees)) {
        state.employees.push(action.payload);
      } else {
        state.employees = [action.payload];
      }
    },
    setEmployee: (state, action) => {
      state.employee = action.payload;
    },
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    updateEmployee: (state, action) => {
      const updatedEmployee = action.payload;
      const index = state.employees.findIndex((employee) => employee._id === updatedEmployee._id);
      if (index !== -1) {
        state.employees[index] = updatedEmployee;
      }
    },
  },
});

export const { setEmployees, setEmployee, addEmployee, updateEmployee, setLoading } =
  employeeSlice.actions;

export const getEmployees = async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.get('http://localhost:5000/api/v1/employee', {
      withCredentials: true,
    });
    console.log(res);
    if (res.status === 200 || res.status === 201) {
      const employees = [];
      res.data.data.map((employee) => employees.push(employee));
      console.log(employees);
      dispatch(setEmployees(employees));
      dispatch(setLoading(false));
    }
  } catch (error) {
    dispatch(setLoading(false));
    enqueueSnackbar(`${error.response.data.message}`, {
      variant: 'error',
    });
  }
};

export const addNewEmployee = (values) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.post('http://localhost:5000/api/v1/employee', values, {
      withCredentials: true,
    });
    if (res.status === 200 || res.status === 201) {
      dispatch(setLoading(false));
      enqueueSnackbar(`${res.data.message}`, {
        variant: 'success',
      });
      dispatch(getEmployees);
    }
  } catch (error) {
    dispatch(setLoading(false));
    enqueueSnackbar(`${error.message}`, {
      variant: 'error',
    });
  }
};

export const removeEmployee = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.patch(
      `http://localhost:5000/api/v1/employee/remove/${id}`,
      {},
      { withCredentials: true }
    );
    if (res.status === 200 || res.status === 201) {
      dispatch(setLoading(false));
      enqueueSnackbar(`${res.data.message}`, {
        variant: 'success',
      });
      dispatch(getEmployees);
    }
  } catch (error) {
    dispatch(setLoading(false));
    enqueueSnackbar(`${error.message}`, {
      variant: 'error',
    });
  }
};

export const getEmployeeById = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.get(`http://localhost:5000/api/v1/employee/${id}`, {
      withCredentials: true,
    });
    if (res.status === 200 || res.status === 201) {
      dispatch(setLoading(false));
      dispatch(setEmployee(res.data.data));
    }
  } catch (error) {
    dispatch(setLoading(false));
    enqueueSnackbar(`${error.message}`, {
      variant: 'error',
    });
  }
};

export const updateEmployeeById = (id, values) => async (dispatch) => {
  try {
    console.log(id);
    console.log(values);
    dispatch(setLoading(true));
    const res = await axios.patch(`http://localhost:5000/api/v1/employee/${id}`, values, {
      withCredentials: true,
    });
    if (res.status === 200 || res.status === 201) {
      dispatch(setLoading(false));
      enqueueSnackbar(`${res.data.message}`, {
        variant: 'success',
      });
      dispatch(getEmployees);
    }
  } catch (error) {
    dispatch(setLoading(false));
    enqueueSnackbar(`${error.message}`, {
      variant: 'error',
    });
  }
};

export default employeeSlice.reducer;
