import {createAction, props} from "@ngrx/store";

import {IDailyForecast, IDailyForecastList, IError} from "../../app/intefaces";

export const getDailyForecast = createAction('[DailyForecast] Get daily forecast');

export const getDailyForecastSuccess = createAction('[DailyForecast] Get daily forecast success',
  props<{ dailyForecast: IDailyForecast, dailyForecastList:Array<IDailyForecastList[]> }>());

export const getDailyForecastFailure = createAction('[DailyForecast] Get daily forecast failure',
  props<{ error: IError }>());


