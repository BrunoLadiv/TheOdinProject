import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    isDarkMode: true,
  },
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    setDarkMode(state, action) {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleDarkMode, setDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
