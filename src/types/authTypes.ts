import { token } from "./../services/tokenAPI";
export interface AuthState {
  user: User;
  isLoading: boolean;
  error: any;
  token: string;
}

export interface User {
  email: string;
  name: string;
  registrDate: string;
  avatarURL: string;
  verify: boolean;
}

export interface AuthSuccessPayload {
  payload: User;
}

export interface paramsTypes {
  name: string;
  email: string;
  password: string;
}

export interface paramsSignInTypes {
  email: string;
  password: string;
}

export interface ActionSignInTypes {
  user: User;
  token: string;
}

export interface ActionRefreshTypes {
  user: User;
  token: string;
}

export interface AuthSuccessSignInPayload {
  payload: {
    user: User;
    token: string;
  };
}
