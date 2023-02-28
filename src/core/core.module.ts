import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {currentWeatherReducers} from './store-current-weather/reducers';
import {dailyForecastReducers} from "./store-daily-forecast/reducers";
import {CurrentWeatherService, DailyForecastService} from "./services";
import {CurrentWeatherEffects} from "./store-current-weather/effects";
import {DailyForecastEffects} from "./store-daily-forecast/effects";
import {CurrentWeatherComponent, DailyForecastComponent} from "./components";

const reducers = {
  w: currentWeatherReducers,
  f: dailyForecastReducers,
}

@NgModule({

  imports: [
    CommonModule,
    StoreModule.forFeature('current_weather_reducer', currentWeatherReducers),
    StoreModule.forFeature('daily_forecast_reducer', dailyForecastReducers),
    EffectsModule.forFeature([DailyForecastEffects, CurrentWeatherEffects]),
  ],
  providers: [CurrentWeatherService, DailyForecastService],
  declarations: [CurrentWeatherComponent, DailyForecastComponent],
  exports: [CurrentWeatherComponent, DailyForecastComponent],
})
export class CoreModule {
}
