import { createSlice } from "@reduxjs/toolkit";

const initial = "#FFFFFF";

const color = createSlice({
  name: "color",
  initialState: initial,
  reducers: {
    setColor: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setColor } = color.actions;

export default color.reducer;
