import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ErrorStateMatcher} from '@angular/material/core';

import {ICurrentWeather} from "../../intefaces";
import {getCurrentWeather} from "../../../core/store-current-weather/actions";
import {
  errorSelector,
  getCurrentWeatherSelector,
  isLoadingSelector
} from "../../../core/store-current-weather/selectors";
import {AppStateInterface} from "../../../core/app-state";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  isLoading$: Observable<boolean>;
  weather$: Observable<ICurrentWeather | null>;
  error$: Observable<string | null>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.weather$ = this.store.pipe(select(getCurrentWeatherSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  };

  ngOnInit(): void {
    this.store.dispatch(getCurrentWeather());
  };

  chooseCity =  new FormControl('',
    [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]);

  matcher = new ErrorStateMatcher()

  checkCity(e: any) {
    if(!this.chooseCity.invalid)
    console.log(this.chooseCity.value);
  }
}
