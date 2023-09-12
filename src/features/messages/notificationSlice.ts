// notificationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: {
    error: false,
    text: '',
    sender: '',
    senderPic: '',
    userId: 1
  },
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setMessage: (state: any, action) => {
      const messagesCopy = {
        ...initialState.message,
        ...action.payload
      }
      return {
        ...state,
        message: messagesCopy
      }
    },
  },
});

export const { setMessage } = notificationSlice.actions;
export default notificationSlice.reducer;