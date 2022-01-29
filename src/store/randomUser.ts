import { createSlice, createSelector } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "randomUsers",
  initialState: {
    randomUser: [],
    loading: false,
    error: "",
    pageNumber: 0,
  },
  reducers: {
    randomUsersSuccess: (state, action) => {
      console.log("action:", action);
      state.loading = false;
      state.randomUser = action.payload.randomUser;
    },
    randomUsersRequested: (state) => {
      state.loading = true;
    },
    randomUsersfailed: (state, action) => {
      console.log("action:", action);
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const randomUserSelectors = {
  loading: createSelector(
    [(state) => state.randomUser],
    (user) => user.loading
  ),
  error: createSelector([(state) => state.randomUser], (user) => user.error),
  randomUser: createSelector(
    [(state) => state.randomUser],
    (user) => user.randomUser
  ),
};

export const actions = slice.actions;
export default slice.reducer;
