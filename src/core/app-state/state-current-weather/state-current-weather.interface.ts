import {ICityLocalStorage, ICurrentWeather} from "../../../app/intefaces";

export interface IStateCurrentWeather {
  isLoading: boolean,
  myWeather: ICurrentWeather | null,
  error: string | null
  city_storage:ICityLocalStorage | ''
}
