import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  departments: [],
  department: null,
};

const departmentSlice = createSlice({
  name: 'department',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addDepartment: (state, action) => {
      if (Array.isArray(state.departments)) {
        state.departments.push(action.payload);
      } else {
        state.departments = [action.payload];
      }
    },
    setDepartment: (state, action) => {
      state.department = action.payload;
    },
    setDepartments: (state, action) => {
      state.departments = action.payload;
    },
    updateDepartment: (state, action) => {
      const updatedDepartment = action.payload;
      const index = state.departments.findIndex(
        (department) => department._id === updatedDepartment._id
      );
      if (index !== -1) {
        state.departments[index] = updatedDepartment;
      }
    },
  },
});

export const { setDepartments, setDepartment, addDepartment, updateDepartment, setLoading } =
  departmentSlice.actions;

export const getDepartments = async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.get('http://localhost:5000/api/v1/department', {
      withCredentials: true,
    });
    console.log(res);
    if (res.status === 200 || res.status === 201) {
      const departments = [];
      res.data.data.map((inventory) => departments.push(inventory));
      dispatch(setDepartments(departments));
      dispatch(setLoading(false));
    }
  } catch (error) {
    dispatch(setLoading(false));
    enqueueSnackbar(`${error.response.data.message}`, {
      variant: 'error',
    });
  }
};

export const addNewDepartment = (values) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.post('http://localhost:5000/api/v1/department', values, {
      withCredentials: true,
    });
    console.log(res);
    if (res.status === 200 || res.status === 201) {
      dispatch(setLoading(false));
      enqueueSnackbar(`${res.data.message}`, {
        variant: 'success',
      });
      dispatch(getDepartments);
    }
  } catch (error) {
    dispatch(setLoading(false));
    enqueueSnackbar(`${error.message}`, {
      variant: 'error',
    });
  }
};

// export const removeDepartment = (id) => async (dispatch) => {
//   try {
//     dispatch(setLoading(true));
//     const res = await axios.patch(
//       `http://localhost:5000/api/v1/products/remove/${id}`,
//       {},
//       { withCredentials: true }
//     );
//     if (res.status === 200 || res.status === 201) {
//       dispatch(setLoading(false));
//       enqueueSnackbar(`${res.data.message}`, {
//         variant: 'success',
//       });
//       dispatch(getInventories);
//     }
//   } catch (error) {
//     dispatch(setLoading(false));
//     enqueueSnackbar(`${error.message}`, {
//       variant: 'error',
//     });
//   }
// };

export const getDepartmentById = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.get(`http://localhost:5000/api/v1/department/${id}`, {
      withCredentials: true,
    });
    if (res.status === 200 || res.status === 201) {
      dispatch(setLoading(false));
      dispatch(setDepartment(res.data.data));
    }
  } catch (error) {
    dispatch(setLoading(false));
    enqueueSnackbar(`${error.message}`, {
      variant: 'error',
    });
  }
};

export const updateDepartmentById = (id, values) => async (dispatch) => {
  try {
    console.log(id);
    console.log(values);
    dispatch(setLoading(true));
    const res = await axios.patch(`http://localhost:5000/api/v1/department/${id}`, values, {
      withCredentials: true,
    });
    if (res.status === 200 || res.status === 201) {
      dispatch(setLoading(false));
      enqueueSnackbar(`${res.data.message}`, {
        variant: 'success',
      });
      dispatch(getDepartments);
    }
  } catch (error) {
    dispatch(setLoading(false));
    enqueueSnackbar(`${error.message}`, {
      variant: 'error',
    });
  }
};

export default departmentSlice.reducer;
