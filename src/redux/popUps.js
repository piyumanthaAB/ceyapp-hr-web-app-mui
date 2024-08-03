import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  popups: [],
  popup: null,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addPopup: (state, action) => {
      if (Array.isArray(state.popups)) {
        state.popups.push(action.payload);
      } else {
        state.popups = [action.payload];
      }
    },
    setPop: (state, action) => {
      state.popup = action.payload;
    },
    setPopups: (state, action) => {
      state.popups = action.payload;
    },
    updatePopup: (state, action) => {
      const updatedPopup = action.payload;
      const index = state.popups.findIndex((popup) => popup._id === updatedPopup._id);
      if (index !== -1) {
        state.popups[index] = updatedPopup;
      }
    },
  },
});

export const { setPopups, setPop, addPopup, updatePopup, setLoading } =
  popupSlice.actions;

export const getPopups = async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.get('http://localhost:5000/api/v1/popup', {
      withCredentials: true,
    });
    console.log(res);
    if (res.status === 200 || res.status === 201) {
      const popups = [];
      res.data.data.map((popup) => popups.push(popup));
      dispatch(setPopups(popups));
      dispatch(setLoading(false));
    }
    
    
  } catch (error) {
    dispatch(setLoading(false));
    enqueueSnackbar(`${error.response.data.message}`, {
      variant: 'error',
    });
  }
};

export const addNewPopup = (values) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.post('http://localhost:5000/api/v1/popup', values, {
      withCredentials: true,
    });
    if (res.status === 200 || res.status === 201) {
      dispatch(setLoading(false));
      enqueueSnackbar(`${res.data.message}`, {
        variant: 'success',
      });
      dispatch(getPopups);
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

export const getPopupById = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.get(`http://localhost:5000/api/v1/popup/${id}`, {
      withCredentials: true,
    });
    if (res.status === 200 || res.status === 201) {
      dispatch(setLoading(false));
      dispatch(setPop(res.data.data));
    }
  } catch (error) {
    dispatch(setLoading(false));
    enqueueSnackbar(`${error.message}`, {
      variant: 'error',
    });
  }
};

export const updatePopupById = (id, values) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.patch(`http://localhost:5000/api/v1/popup/${id}`, values, {
      withCredentials: true,
    });
    if (res.status === 200 || res.status === 201) {
      dispatch(setLoading(false));
      enqueueSnackbar(`${res.data.message}`, {
        variant: 'success',
      });
      dispatch(getPopups);
    }
  } catch (error) {
    dispatch(setLoading(false));
    enqueueSnackbar(`${error.message}`, {
      variant: 'error',
    });
  }
};

export default popupSlice.reducer;
