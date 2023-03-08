import {createAction, props} from "@ngrx/store";

import {ICityLocalStorage, ICurrentWeather} from "../../app/intefaces";

export const getCurrentWeather = createAction('[CurrentWeather] Get current weather');

export const getCurrentWeatherSuccess = createAction('[CurrentWeather] Get current weather success',
  props<{
    currentWeather: ICurrentWeather,
    city_storage: ICityLocalStorage,
  }>());

export const getCurrentWeatherFailure = createAction('[CurrentWeather] Get current weather failure',
  props<{ error: { cod: number, message: string } }>());


