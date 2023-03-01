import {createAction, props} from "@ngrx/store";

import {ICurrentWeather} from "../../app/intefaces";

export const getCurrentWeather = createAction('[CurrentWeather] Get current weather');

export const getCurrentWeatherSuccess = createAction('[CurrentWeather] Get current weather success',
  props<{ currentWeather: ICurrentWeather }>());

export const getCurrentWeatherFailure = createAction('[CurrentWeather] Get current weather failure',
  props<{ error: string }>());


