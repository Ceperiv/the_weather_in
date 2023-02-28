import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";

import {CurrentWeatherService} from "../../services";
import {AppStateInterface, ICurrentWeather} from "../../intefaces";
import {Observable} from "rxjs";
import {getCurrentWeather} from "../../store-current-weather/actions";
import {errorSelector, getCurrentWeatherSelector, isLoadingSelector} from "../../store-current-weather/selectors";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  isLoading$: Observable<boolean>;
  weather$: Observable<ICurrentWeather | []>;
  error$: Observable<string | null>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.weather$ = this.store.pipe(select(getCurrentWeatherSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  };

  ngOnInit(): void {
    this.store.dispatch(getCurrentWeather());
  };

}
