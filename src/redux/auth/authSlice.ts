import { AuthState, AuthSuccessPayload } from "./../../types/authTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authSignIn, authSignUp } from "./authOperation";

import {
  handleFulfilledAuthSignIn,
  handleFulfilledAuthSignUp,
  handlePending,
  handleRejected,
} from "./authReducers";

const initialState: AuthState = {
  user: {
    email: "",
    name: "",
    registrDate: "",
    avatarURL: "",
    verify: false,
  },
  isLoading: false,
  error: null,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authSignUp.pending, handlePending)
      .addCase(authSignUp.rejected, handleRejected)
      .addCase(authSignUp.fulfilled, handleFulfilledAuthSignUp)
      .addCase(authSignIn.pending, handlePending)
      .addCase(authSignIn.rejected, handleRejected)
      .addCase(authSignIn.fulfilled, handleFulfilledAuthSignIn);
  },
});

export const authReducer = authSlice.reducer;
