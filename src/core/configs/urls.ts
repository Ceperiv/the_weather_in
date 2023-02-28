import {environment} from '../../environments/environment.dev'

const {api_key} = environment

export const urls = {
  weather: (city = 'Kyiv') =>
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${api_key}`
}
