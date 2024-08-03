/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  user: null,
  error: null,
  token: null,
  isAuthenticated: false,
};

const authSlices = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    // initializeAuth: (state) => {
    //   const token = Cookies.get('authToken');
    //   if (token) {
    //     state.token = token;
    //     state.isAuthenticated = true;
    //   }
    // },
  },
});

export const { setUser, setLoading, setToken, setIsAuthenticated, initializeAuth, token } =
  authSlices.actions;

export const login = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await axios.post('http://localhost:5000/api/v1/auth/login', data, {
      withCredentials: true, // Ensure cookies are sent and received
    });
    console.log(res);
    if (res.status === 200 || res.status === 201) {
      dispatch(setToken(res.data.data));
      dispatch(setLoading(false));
      dispatch(setIsAuthenticated(true));
      getUserProfile(dispatch);
      enqueueSnackbar(`${res.data.message}`, {
        variant: 'success',
      });
    } else {
      dispatch(setLoading(false));
      dispatch(setIsAuthenticated(false));
      enqueueSnackbar(`${res.data.message}`, {
        variant: 'error',
      });
    }
  } catch (error) {
    console.log(error);
    dispatch(setLoading(false));
    dispatch(setIsAuthenticated(false));
    enqueueSnackbar(`${error.response.data.message}`, {
      variant: 'error',
    });
  }
};

export const getUserProfile = async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await axios.get('http://localhost:5000/api/v1/auth/profile', {
      withCredentials: true,
    });
    console.log(res);
    if (res.status === 200 || res.status === 201) {
      dispatch(setUser(res.data.user));
      dispatch(setLoading(false));
      sessionStorage.setItem("jwt",token);
    }
  } catch (error) {
    dispatch(setLoading(false));
    enqueueSnackbar(`${error.response.data.message}`, {
      variant: 'error',
    });
  }
};

export const logoutUser = async (dispatch) => {
  try {
      const res = await axios.post('http://localhost:5000/api/v1/auth/logout', {},{
      withCredentials: true,
    });
    console.log(res);
    if (res.status === 200 || res.status === 201) {
      dispatch(setUser(null));
      dispatch(setLoading(false));
      dispatch(setIsAuthenticated(false));
      dispatch(setToken(null));
      sessionStorage.removeItem("jwt");
    }
  } catch (error) {
    dispatch(setLoading(false));
    enqueueSnackbar(`${error.response.data.message}`, {
      variant: 'error',
    });
  }
};

export default authSlices.reducer;
