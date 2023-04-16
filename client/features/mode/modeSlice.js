import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode === "dark" ? (state.mode = "light") : (state.mode = "dark");
    },
  },
});

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;
