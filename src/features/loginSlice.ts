// notificationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
  }
});

// export const { setMessage } = notificationSlice.actions
export default loginSlice.reducer;