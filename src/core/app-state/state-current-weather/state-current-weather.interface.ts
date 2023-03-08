import {ICityLocalStorage, ICurrentWeather} from "../../../app/intefaces";

export interface IStateCurrentWeather {
  isLoading: boolean,
  myWeather: ICurrentWeather | null,
  error: { cod: number, message: string } | null
  city_storage: ICityLocalStorage | ''
}
