import {createSelector} from "@ngrx/store";

import {AppStateInterface} from "../intefaces";

export const selectFeature = (state: AppStateInterface) => state.current_weather;


export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading);

export const getCurrentWeatherSelector = createSelector(
  selectFeature,
  (state) => {
    console.log(state)
   return  state.myWeather
  });

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error);
