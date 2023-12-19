export interface AuthState {
  user: User;
  isLoading: boolean;
  error: any;
  token: string;
  authenticated: boolean;
}

export interface User {
  email: string;
  name: string;
  registrDate: string;
  avatarURL: string;
  verify: boolean;
  profileSettings: string[];
}

export interface paramsAuthSignUpTypes {
  name: string;
  email: string;
  password: string;
}

export interface paramsAuthSignInTypes {
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

export interface ActionLogOutTypes {
  user: User;
  token: string;
}

