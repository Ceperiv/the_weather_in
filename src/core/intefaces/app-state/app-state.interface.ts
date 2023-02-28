import {IStateCurrentWeather} from "../state-current-weather";
import {IStateDailyForecast} from "../state-daily-forecast";


export interface AppStateInterface {
    current_weather_reducer: IStateCurrentWeather,
    daily_forecast_reducer: IStateDailyForecast
}
