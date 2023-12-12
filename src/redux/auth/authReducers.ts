import {
  AuthState,
  AuthSuccessPayload,
  AuthSuccessSignInPayload,
} from "../../types/authTypes";

export const handlePending = (state: AuthState) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (
  state: AuthState,
  action: { payload?: string }
) => {
  console.log(action);

  state.isLoading = false;
  state.error = action.payload;
};

export const handleFulfilledAuthSignUp = (
  state: AuthState,
  action: AuthSuccessPayload
) => {
  state.isLoading = false;
  state.error = null;
  state.user = action.payload;
  state.user.verify = true;
};

export const handleFulfilledAuthSignIn = (
  state: AuthState,
  action: AuthSuccessSignInPayload
) => {
  state.isLoading = false;
  state.error = null;
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.user.verify = true;
};
