import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  userroles: [],
  userrole: null,
};

const userroleSlice = createSlice({
  name: 'userrole',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addUserRole: (state, action) => {
      if (Array.isArray(state.userroles)) {
        state.userroles.push(action.payload);
      } else {
        state.userroles = [action.payload];
      }
    },
    setUserRole: (state, action) => {
      state.userrole = action.payload;
    },
    setUserRoles: (state, action) => {
      state.userroles = action.payload;
    },
    updateUserRole: (state, action) => {
      const updatedUserRole = action.payload;
      const index = state.userroles.findIndex(
        (userrole) => userrole._id === updatedUserRole._id
      );
      if (index !== -1) {
        state.userroles[index] = updatedUserRole;
      }
    },
  },
});

export const { setUserRoles, setUserRole, addUserRole, updateUserRole, setLoading } =
  userroleSlice.actions;

export const getUserRoles = async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.get('http://localhost:5000/api/v1/role', {
      withCredentials: true,
    });
    console.log(res);
    if (res.status === 200 || res.status === 201) {
      const userroles = [];
      res.data.data.map((userrole) => userroles.push(userrole));
      dispatch(setUserRoles(userroles));
      dispatch(setLoading(false));
    }
  } catch (error) {
    dispatch(setLoading(false));
    enqueueSnackbar(`${error.response.data.message}`, {
      variant: 'error',
    });
  }
};

export const addNewUserRole = (values) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.post('http://localhost:5000/api/v1/role', values, {
      withCredentials: true,
    });
    console.log(res);
    if (res.status === 200 || res.status === 201) {
      dispatch(setLoading(false));
      enqueueSnackbar(`${res.data.message}`, {
        variant: 'success',
      });
      dispatch(getUserRoles);
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

export const getUserRoleById = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.get(`http://localhost:5000/api/v1/role/${id}`, {
      withCredentials: true,
    });
    if (res.status === 200 || res.status === 201) {
      dispatch(setLoading(false));
      dispatch(setUserRole(res.data.data));
    }
  } catch (error) {
    dispatch(setLoading(false));
    enqueueSnackbar(`${error.message}`, {
      variant: 'error',
    });
  }
};

export const updateUserRoleById = (id, values) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.patch(`http://localhost:5000/api/v1/role/${id}`, values, {
      withCredentials: true,
    });
    if (res.status === 200 || res.status === 201) {
      dispatch(setLoading(false));
      enqueueSnackbar(`${res.data.message}`, {
        variant: 'success',
      });
      dispatch(getUserRoles);
    }
  } catch (error) {
    dispatch(setLoading(false));
    enqueueSnackbar(`${error.message}`, {
      variant: 'error',
    });
  }
};

export default userroleSlice.reducer;
