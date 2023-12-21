import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { StatisticsState } from "./statisticsTypes";
import { getAllStatistics } from "./statisticsOperation";

export const handleStatistics = (
  builder: ActionReducerMapBuilder<StatisticsState>
) => {
  builder
    .addCase(getAllStatistics.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getAllStatistics.rejected, (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(getAllStatistics.fulfilled, (state, { payload }: any) => {
      state.isLoading = false;
      state.error = null;
      state.statistics = payload;
    });
};
