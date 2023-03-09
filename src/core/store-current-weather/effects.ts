import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";

import {getCurrentWeather, getCurrentWeatherFailure, getCurrentWeatherSuccess} from "./actions";
import {CityLocalStorageService, CurrentWeatherService} from "../../app/services";
import {Store} from "@ngrx/store";
import {AppStateInterface} from "../app-state";

@Injectable()
export class CurrentWeatherEffects {
  constructor(private actions$: Actions,
              private currentWeatherService: CurrentWeatherService,
              private storageService:CityLocalStorageService) {
  }

  getCurrentWeather$ = createEffect(() =>
    this.actions$.pipe(ofType(getCurrentWeather), mergeMap(() => {
      const city = this.currentWeatherService.getCity()
      const cityStorage = this.storageService.getLocalCity()
      const lastViewedCity = cityStorage.city[cityStorage.city.length - 1]

      return this.currentWeatherService.getCurrentWeather(city || lastViewedCity || 'Kyiv')

        .pipe(map((weather) =>
            getCurrentWeatherSuccess({currentWeather: weather, city_storage:cityStorage})
          ),
          catchError(error => {
            this.storageService.removeLast()
            return of(getCurrentWeatherFailure({error: error.error}))
          })
        );
    }))
  );
}
