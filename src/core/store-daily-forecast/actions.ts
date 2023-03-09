import {createAction, props} from "@ngrx/store";

import {IDailyForecast, IError} from "../../app/intefaces";

export const getDailyForecast = createAction('[DailyForecast] Get daily forecast');

export const getDailyForecastSuccess = createAction('[DailyForecast] Get daily forecast success',
  props<{ dailyForecast: IDailyForecast }>());

export const getDailyForecastFailure = createAction('[DailyForecast] Get daily forecast failure',
  props<{ error: IError }>());


