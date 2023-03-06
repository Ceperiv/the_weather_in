import {createReducer, on} from "@ngrx/store";

import {IStateCurrentWeather} from "../app-state";
import {getCurrentWeather, getCurrentWeatherFailure, getCurrentWeatherSuccess} from "./actions";

export const initialState: IStateCurrentWeather = {
  isLoading: false,
  myWeather: null,
  error: null,
  city_storage: ''
};

export const currentWeatherReducers = createReducer(
  initialState,
  on(getCurrentWeather, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getCurrentWeatherSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    error: null,
    myWeather: action.currentWeather,
    city_storage: action.city_storage

  })),
  on(getCurrentWeatherFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
)
