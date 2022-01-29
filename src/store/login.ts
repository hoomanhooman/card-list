import { createSlice, createSelector } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    error: "",
    data: {},
    isAuthorized: false,
  },
  reducers: {
    loginRequested: (state) => {
      state.loading = true;
      state.error = "";
    },
    loginFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    loginSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = "";
      state.isAuthorized = true;
    },
    logout: (state) => {
      state.isAuthorized = false;
    },
  },
});

export const LoginSelectors = {
  loading: createSelector([(state) => state.login], (login) => login.loading),
  error: createSelector([(state) => state.login], (login) => login.error),
  login: createSelector([(state) => state.login], (login) => login.data),
  isAuthorized: createSelector(
    [(state) => state.login],
    (login) => login.isAuthorized
  ),
};

export const actions = slice.actions;
export default slice.reducer;
