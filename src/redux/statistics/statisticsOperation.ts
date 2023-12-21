import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/instanceAPI";
import { STATISTICS_REQUEST } from "../../utils/constantes";
import { ActionGetStatistics } from "./statisticsTypes";

export const getAllStatistics = createAsyncThunk<
  ActionGetStatistics,
  undefined,
  { rejectValue: string }
>("statistics/getAllStatistics", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get(STATISTICS_REQUEST);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
