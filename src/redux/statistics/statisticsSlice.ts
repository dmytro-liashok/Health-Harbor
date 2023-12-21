import { createSlice } from "@reduxjs/toolkit";
import {  StatisticsState } from "./statisticsTypes";
import { handleStatistics } from "./statisticsReducers";

const initialState: StatisticsState = {
  statistics: {
    exercisesVideos: 0,
    usersCount: 0,
    exercisesDone: 0,
    allBurnedColories: 0,
    generalTimeSpend: 0,
  },
  isLoading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    handleStatistics(builder);
  },
});

export const statisticsReducer = statisticsSlice.reducer;
