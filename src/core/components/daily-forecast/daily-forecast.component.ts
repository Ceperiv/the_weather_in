import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {getDailyForecast} from "../../store-daily-forecast/actions";
import {Observable} from "rxjs";
import {AppStateInterface, IDailyForecast} from "../../intefaces";
import {errorSelector, getDailyForecastSelector, isLoadingSelector} from "../../store-daily-forecast/selectors";

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss']
})
export class DailyForecastComponent implements OnInit {
  isLoading$: Observable<boolean>;
  forecast$: Observable<IDailyForecast[] | []>;
  error$: Observable<string | null>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.forecast$ = this.store.pipe(select(getDailyForecastSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  };

  ngOnInit(): void {
    this.store.dispatch(getDailyForecast());
  };

}
