import {createSelector} from "@ngrx/store";

import {AppStateInterface} from "../app-state";

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

export const cityStorageSelector = createSelector(
  selectFeature,
  (state) => state.city_storage);


