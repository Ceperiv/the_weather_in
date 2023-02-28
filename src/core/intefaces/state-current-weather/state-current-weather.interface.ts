import {ICurrentWeather} from "../current-weather";

export interface IStateCurrentWeather {
  isLoading: boolean,
  myWeather: ICurrentWeather | [],
  error: string | null
}
