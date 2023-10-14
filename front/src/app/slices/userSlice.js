import { createSlice } from "@reduxjs/toolkit";

const initial = JSON.parse(localStorage.getItem("user") || null);

const user = createSlice({
  name: "user",
  initialState: initial,
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state = action.payload ?? null;
      return state;
    },
    removeUser: (state) => {
      localStorage.removeItem("user");
      state = null;
      return state;
    },
  },
});

export const { setUser, removeUser } = user.actions;

export default user.reducer;
