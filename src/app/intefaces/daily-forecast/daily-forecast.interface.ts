import {IDailyForecastList} from "./daily-forecast-list.interface";

export interface IDailyForecast {
  cod: string,
  message: number,
  cnt: number,
  list: [IDailyForecastList],
  city: {
    id: number,
    name: string,
    coord: { lat: number, lon: number },
    country: string,
    population: number,
    timezone: number,
    sunrise: number,
    sunset: number,
  }
}
