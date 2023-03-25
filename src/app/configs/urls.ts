import {environment} from '../../environments/environment.dev'

const {api_key} = environment;

export const urls = {
  currentWeatherUrl: (city: string) =>
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${api_key}`,
  dailyForecastUrl: (city = 'Kyiv') =>
    `https://api.openweathermap.org/data/2.5/forecast?id=524901&q=${city}&units=metric&&appid=${api_key}`,
  iconUrl: (iconId: string) => `http://openweathermap.org/img/w/${iconId}.png`,
};
