import {ErrorHandler, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {currentWeatherReducers} from './store-current-weather/reducers';
import {dailyForecastReducers} from "./store-daily-forecast/reducers";
import {CurrentWeatherService, DailyForecastService} from "../app/services";
import {CurrentWeatherEffects} from "./store-current-weather/effects";
import {DailyForecastEffects} from "./store-daily-forecast/effects";
import {TranslateModule} from "@ngx-translate/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {
  ChosenForecastComponent,
  CurrentWeatherComponent,
  DailyForecastComponent,
  HeaderComponent,
  Error404Component,
} from "../app/components";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({

  imports: [
    CommonModule,
    StoreModule.forFeature('current_weather_reducer', currentWeatherReducers),
    StoreModule.forFeature('daily_forecast_reducer', dailyForecastReducers),
    EffectsModule.forFeature([DailyForecastEffects, CurrentWeatherEffects, ChosenForecastComponent]),
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,


  ],
  providers: [
    CurrentWeatherService,
    DailyForecastService],
  declarations: [
    CurrentWeatherComponent,
    DailyForecastComponent,
    ChosenForecastComponent,
    HeaderComponent,
    Error404Component
  ],
  exports: [CurrentWeatherComponent, DailyForecastComponent, HeaderComponent, Error404Component],
})
export class CoreModule {
}
