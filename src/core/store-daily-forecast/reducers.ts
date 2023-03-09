import {createReducer, on} from "@ngrx/store";

import {IStateDailyForecast} from "../app-state";
import {getDailyForecast, getDailyForecastFailure, getDailyForecastSuccess} from "./actions";

export const initialState: IStateDailyForecast = {
  isLoading: false,
  myForecast: null,
  error: null,
};

export const dailyForecastReducers = createReducer(
  initialState,
  on(getDailyForecast, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getDailyForecastSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    myForecast: action.dailyForecast,
    error: null
  })),
  on(getDailyForecastFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
)
