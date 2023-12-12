import { RootState } from "./../store";
import { token } from "./../../services/tokenAPI";
import { instance } from "../../services/instanceAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ActionRefreshTypes,
  ActionSignInTypes,
  User,
  paramsSignInTypes,
  paramsTypes,
} from "../../types/authTypes";

export const authSignUp = createAsyncThunk<
  User,
  paramsTypes,
  { rejectValue: string }
>("auth/authSignUp", async (params, { rejectWithValue }) => {
  try {
    const { data } = await instance.post("/users/register", params);
    token.set(data.token);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const authSignIn = createAsyncThunk<
  ActionSignInTypes,
  paramsSignInTypes,
  { rejectValue: string }
>("auth/authSignIn", async (params, { rejectWithValue }) => {
  try {
    const { data } = await instance.post("/users/login", params);
    console.log(data.token);

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
    const { data } = await instance.get("/users/current");
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
