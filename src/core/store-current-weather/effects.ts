import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";

import {
  getCurrentWeather,
  getCurrentWeatherFailure,
  getCurrentWeatherSuccess
} from "./actions";
import {CurrentWeatherService} from "../services";

@Injectable()
export class CurrentWeatherEffects {
  constructor(private actions$: Actions, private currentWeatherService: CurrentWeatherService) {
  }

  getCurrentWeather$ = createEffect(() =>
    this.actions$.pipe(ofType(getCurrentWeather), mergeMap(() => {
      return this.currentWeatherService.getCurrentWeather('Lviv')
        .pipe(map((weather) => getCurrentWeatherSuccess({currentWeather: weather})),
          catchError(error => {
            return of(getCurrentWeatherFailure({error: 'ERROR ' + error.message}))
          })
        );
    }))
  );
}
