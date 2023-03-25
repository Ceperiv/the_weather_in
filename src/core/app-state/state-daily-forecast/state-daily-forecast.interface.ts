import {IDailyForecast, IDailyForecastList, IError} from "../../../app/intefaces";

export interface IStateDailyForecast {
  isLoading: boolean,
  myForecast: IDailyForecast | null,
  myForecastList: Array<IDailyForecastList[]> | null,
  error: IError | null,
}
