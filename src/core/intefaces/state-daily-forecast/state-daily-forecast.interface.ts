import {IDailyForecast} from "../daily-forecast";

export interface IStateDailyForecast {
  isLoading: boolean,
  myForecast: IDailyForecast | null,
  error: string | null
}
