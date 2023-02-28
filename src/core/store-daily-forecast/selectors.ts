import {createSelector} from "@ngrx/store";

import {AppStateInterface} from "../intefaces";

const selectFeature = (state: AppStateInterface) => state.daily_forecast_reducer;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading);

export const getDailyForecastSelector = createSelector(
  selectFeature,
  (state) => state.myForecast);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error);
