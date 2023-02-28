import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {
  getDailyForecast,
  getDailyForecastFailure,
  getDailyForecastSuccess
} from "./actions";
import {catchError, map, mergeMap, of} from "rxjs";
import {DailyForecastService} from "../services";

@Injectable()
export class DailyForecastEffects {
  constructor(private actions$: Actions, private dailyForecastService: DailyForecastService) {
  };

  getDailyForecast$ = createEffect(() =>
    this.actions$.pipe(ofType(getDailyForecast), mergeMap(() => {
      return this.dailyForecastService.getDailyForecast('Lviv', 5)
        .pipe(map((forecast) => getDailyForecastSuccess({dailyForecast: forecast})),
          catchError(error => {
            return of(getDailyForecastFailure({error: 'ERROR ' + error.message}))
          })
        );
    }))
  );
}
