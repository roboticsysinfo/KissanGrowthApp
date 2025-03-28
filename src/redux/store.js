import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice";
import languageReducer from "../redux/slices/languageSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    language: languageReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Optional, agar error aa raha ho toh add karein
    }),
});

export { store };
