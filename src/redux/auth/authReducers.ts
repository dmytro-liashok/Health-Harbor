import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {
  authLogOut,
  authRefresh,
  authSignIn,
  authSignUp,
} from "./authOperation";
import { AuthState } from "./authTypes";

export const handleAuthSignUp = (
  builder: ActionReducerMapBuilder<AuthState>
) => {
  builder.addCase(authSignUp.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.user = action.payload;
    state.authenticated = true;
  });
};

export const handleAuthSignIn = (
  builder: ActionReducerMapBuilder<AuthState>
) => {
  builder.addCase(authSignIn.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.authenticated = true;
  });
};

export const handleAuthCurrent = (
  builder: ActionReducerMapBuilder<AuthState>
) => {
  builder.addCase(authRefresh.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.authenticated = true;
  });
};

export const handleAuthLogOut = (
  builder: ActionReducerMapBuilder<AuthState>
) => {
  builder.addCase(authLogOut.fulfilled, (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.user = action.payload.user;
    state.token = "";
    state.authenticated = false;
  });
};
