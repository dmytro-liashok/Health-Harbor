import storage from "redux-persist/lib/storage";
import { AuthState } from "./authTypes";
import { createSlice } from "@reduxjs/toolkit";

import {
  handleAuthCurrent,
  handleAuthLogOut,
  handleAuthSignIn,
  handleAuthSignUp,
} from "./authReducers";
import persistReducer from "redux-persist/es/persistReducer";

const initialState: AuthState = {
  user: {
    email: "",
    name: "",
    registrDate: "",
    avatarURL: "",
    verify: false,
    profileSettings: [],
  },
  token: "",
  authenticated: false,
  isLoading: false,
  error: null,
};

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    handleAuthSignUp(builder);
    handleAuthSignIn(builder);
    handleAuthCurrent(builder);
    handleAuthLogOut(builder);
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
