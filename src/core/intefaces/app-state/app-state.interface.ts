import {IStateCurrentWeather} from "../state-current-weather";
import {IWeather} from "../weather";

export interface AppStateInterface {
  current_weather:IStateCurrentWeather,
  xxx:IWeather
}
