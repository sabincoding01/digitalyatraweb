import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/global/statuses";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: null,
    email: null,
    token: null,
    status: null,
  },

  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },

    setUser(state, action) {
      state.user = action.payload;
    },

    setToken(state, action) {
      state.token = action.payload;
    },

    setEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const { setUser, setToken, setStatus, setEmail } = authSlice.actions;
export default authSlice.reducer;

function register(date) {
  return async function registerThunk(dispatch) {
    dispatch(setUser(data));
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        date,
      );

      if (response === 200) {
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

function login(data) {
  return async function login(dispatch) {
    dispatch(setUser(data));
    dispatch(setStatus(STATUSES.Loading));
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        data,
      );

      if (response === 200) {
        dispatch(setSuccess(STATUSES.LOADING));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
