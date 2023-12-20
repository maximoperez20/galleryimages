import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { notification: null },
  reducers: {
    showNotification(state, action) {
      if (
        !action.payload.status ||
        !action.payload.title ||
        !action.payload.message
      ) {
        state.notification = null;
      } else {
        state.notification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message,
        };
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
