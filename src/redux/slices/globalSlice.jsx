import { createSlice } from "@reduxjs/toolkit";

const GlobalState = {
  isLogged: false,
  error: null,
  loadingState: "none",
  success: null,
  theme: "light",
  notificationTime: 5000,
};

const global = createSlice({
  name: "global",
  initialState: GlobalState,
  reducers: {
    requestFetching: (state) => {
      state.loadingState = "requesting";
    },
    requestFetched: (state, { payload }) => {
      state.loadingState = "success";
      state.success = payload;
    },
    requestFetchingError: (state, { payload }) => {
      state.loadingState = "failed";
      state.error = payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = null;
    },
    setTheme: (state, { payload }) => {
      state.theme = payload;
    },
    setNotificationTime: (state, { payload }) => {
      state.notificationTime = payload;
    },
  },
});

export const {
  requestFetching,
  requestFetched,
  requestFetchingError,
  clearError,
  clearSuccess,
  setTheme,
  setNotificationTime,
} = global.actions;

export default global.reducer;
