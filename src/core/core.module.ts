import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {reducers} from './store/reducers';
import {CurrentWeatherService} from "./services";
import {CurrentWeatherComponent} from "./components";
import {CurrentWeatherEffects} from "./store/effects";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('current_weather', reducers),
    StoreModule.forFeature('xxx', reducers),
    EffectsModule.forFeature([CurrentWeatherEffects]),
  ],
  providers: [CurrentWeatherService],
  declarations: [CurrentWeatherComponent],
  exports: [CurrentWeatherComponent],
})
export class CoreModule {}
