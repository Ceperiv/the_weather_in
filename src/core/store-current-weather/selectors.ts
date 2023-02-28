import {createSelector} from "@ngrx/store";

import {AppStateInterface} from "../intefaces";

const selectFeature = (state: AppStateInterface) => state.current_weather_reducer;


export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading);

export const getCurrentWeatherSelector = createSelector(
  selectFeature,
  (state) => state.myWeather);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error);
