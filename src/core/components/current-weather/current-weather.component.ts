import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";

import {CurrentWeatherService} from "../../services";
import {AppStateInterface, ICurrentWeather} from "../../intefaces";
import {Observable} from "rxjs";
import {getCurrentWeather} from "../../store/actions";
import {errorSelector, getCurrentWeatherSelector, isLoadingSelector} from "../../store/selectors";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  isLoading$: Observable<boolean>
  weather$: Observable<ICurrentWeather | null>
  error$:Observable<string | null | undefined>

  dataSubscribe:any;

  constructor(private currentWeatherService: CurrentWeatherService,
              private store: Store<AppStateInterface>) {

  }

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.weather$ = this.store.pipe(select(getCurrentWeatherSelector))
    this.error$ = this.store.pipe(select(errorSelector))

    this.dataSubscribe = this.weather$.subscribe(value => console.log(value))

    this.store.dispatch(getCurrentWeather())

    console.log(this.weather$)
  }
}
