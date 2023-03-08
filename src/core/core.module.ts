import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {currentWeatherReducers} from './store-current-weather/reducers';
import {dailyForecastReducers} from "./store-daily-forecast/reducers";
import {CurrentWeatherService, DailyForecastService} from "../app/services";
import {CurrentWeatherEffects} from "./store-current-weather/effects";
import {DailyForecastEffects} from "./store-daily-forecast/effects";
import {ChosenForecastComponent, CurrentWeatherComponent, DailyForecastComponent} from "../app/components";
import {TranslateModule} from "@ngx-translate/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";

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
    ],
  providers: [CurrentWeatherService, DailyForecastService],
  declarations: [CurrentWeatherComponent, DailyForecastComponent, ChosenForecastComponent],
  exports: [CurrentWeatherComponent, DailyForecastComponent],
})
export class CoreModule {
}
