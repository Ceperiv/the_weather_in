import {environment} from '../../environments/environment.dev'

const {api_key} = environment

export const urls = {
  currentWeather: (city = 'Kyiv') =>
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${api_key}`,
  dailyForecast: (city = 'Kyiv', days:number) =>
  `https://api.openweathermap.org/data/2.5/forecast?id=524901&q=${city}&units=metric&cnt=${days}&appid=${api_key}`
}
