import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";

import {
  getDailyForecast,
  getDailyForecastFailure,
  getDailyForecastSuccess
} from "./actions";
import {CityLocalStorageService, CurrentWeatherService, DailyForecastService} from "../../app/services";

@Injectable()
export class DailyForecastEffects {
  constructor(private actions$: Actions,
              private dailyForecastService: DailyForecastService,
              private currentWeatherService: CurrentWeatherService,
              private storageService: CityLocalStorageService,
  ) {
  };

  getDailyForecast$ = createEffect(() =>
    this.actions$.pipe(ofType(getDailyForecast), mergeMap(() => {
      const city = this.currentWeatherService.getCity()
      const cityStorage = this.storageService.getLocalCity()
      const lastViewedCity = cityStorage.city[cityStorage.city.length - 1]

      return this.dailyForecastService.getDailyForecast(city || lastViewedCity || 'Kyiv')
        .pipe(map((forecast) => getDailyForecastSuccess(
            {
              dailyForecast: forecast,
              dailyForecastList: this.dailyForecastService.getDailyForecastArr(forecast)
            })),
          catchError(error => {
            return of(getDailyForecastFailure({error: error.error}))
          })
        );
    }))
  );
}
