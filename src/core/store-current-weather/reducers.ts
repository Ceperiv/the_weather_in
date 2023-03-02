import {createReducer, on} from "@ngrx/store";

import {IStateCurrentWeather} from "../app-state";
import {getCurrentWeather, getCurrentWeatherFailure, getCurrentWeatherSuccess} from "./actions";

export const initialState: IStateCurrentWeather = {
  isLoading: false,
  myWeather: null,
  error: null,
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

  })),
  on(getCurrentWeatherFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
)
