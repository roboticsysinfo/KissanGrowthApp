import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../redux/slices/authSlice"

const store = configureStore({
  reducer: {
    farmer: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
