import { token } from "./../../services/tokenAPI";
import { instance } from "../../services/instanceAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ActionRefreshTypes,
  ActionSignInTypes,
  User,
  paramsAuthSignInTypes,
  paramsAuthSignUpTypes,
} from "./authTypes";
import {
  CURRENT_REQUEST,
  LOGOUT_REQUEST,
  SIGNIN_REQUEST,
  SIGNUP_REQUEST,
} from "../../utils/constantes";

export const authSignUp = createAsyncThunk<
  User,
  paramsAuthSignUpTypes,
  { rejectValue: string }
>("auth/authSignUp", async (params, { rejectWithValue }) => {
  try {
    const { data } = await instance.post(SIGNUP_REQUEST, params);
    token.set(data.token);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const authSignIn = createAsyncThunk<
  ActionSignInTypes,
  paramsAuthSignInTypes,
  { rejectValue: string }
>("auth/authSignIn", async (params, { rejectWithValue }) => {
  try {
    const { data } = await instance.post(SIGNIN_REQUEST, params);

    token.set(data.token);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const authRefresh = createAsyncThunk<
  ActionRefreshTypes,
  undefined,
  { rejectValue: string }
>("auth/authRefresh", async (_, { getState, rejectWithValue }) => {
  try {
    const state: any = getState();
    const userToken = state.auth.token;
    token.set(userToken);
    const { data } = await instance.get(CURRENT_REQUEST);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const authLogOut = createAsyncThunk<
  any,
  undefined,
  { rejectValue: string }
>("auth/authLogOut", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.post(LOGOUT_REQUEST);
    token.clear();
    console.log(data);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
