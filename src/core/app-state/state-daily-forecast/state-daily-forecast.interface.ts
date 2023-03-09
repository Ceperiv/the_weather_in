import {IDailyForecast, IError} from "../../../app/intefaces";

export interface IStateDailyForecast {
  isLoading: boolean,
  myForecast: IDailyForecast | null,
  error: IError | null
}
