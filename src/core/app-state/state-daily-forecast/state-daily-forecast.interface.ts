import {IDailyForecast} from "../../../app/intefaces";

export interface IStateDailyForecast {
  isLoading: boolean,
  myForecast: IDailyForecast | null,
  error: string | null
}
