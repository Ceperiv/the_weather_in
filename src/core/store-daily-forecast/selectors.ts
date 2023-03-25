import {createSelector} from "@ngrx/store";

import {AppStateInterface} from "../app-state";

const selectFeature = (state: AppStateInterface) => state.daily_forecast_reducer;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading);

export const getDailyForecastSelector = createSelector(
  selectFeature,
  (state) => state.myForecast);

export const getDailyForecastListSelector = createSelector(
  selectFeature,
  (state) => state.myForecastList);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error);
