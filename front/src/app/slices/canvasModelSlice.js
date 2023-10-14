import { createSlice } from "@reduxjs/toolkit";

const initial = {
  targetPosition: [0.4, 0, -1.6],
  targetRotation: [0, -0.5, 0],
  dark: true,
  editable: false,
};

const canvasOptions = createSlice({
  name: "canvasOptions",
  initialState: initial,
  reducers: {
    setTargetPosition: (state, action) => {
      state.targetPosition = action.payload;
      return state;
    },
    setTargetRotation: (state, action) => {
      state.targetRotation = action.payload;
      return state;
    },
    setDark: (state, action) => {
      state.dark = action.payload;
      return state;
    },
    setEditable: (state, action) => {
      state.editable = action.payload;
      return state;
    },
  },
});

export const { setTargetPosition, setTargetRotation, setDark, setEditable } =
  canvasOptions.actions;

export default canvasOptions.reducer;
