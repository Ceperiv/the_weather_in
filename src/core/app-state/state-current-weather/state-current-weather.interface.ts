import {ICityLocalStorage, ICurrentWeather, IError} from "../../../app/intefaces";

export interface IStateCurrentWeather {
  isLoading: boolean,
  myWeather: ICurrentWeather | null,
  error: IError | null
  city_storage: ICityLocalStorage | ''
}
