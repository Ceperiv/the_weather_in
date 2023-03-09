import {Component, ErrorHandler, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {delay, Observable} from "rxjs";
import {ErrorStateMatcher} from '@angular/material/core';

import {ICurrentWeather, IError} from "../../intefaces";
import {getCurrentWeather} from "../../../core/store-current-weather/actions";
import {
  errorSelector,
  getCurrentWeatherSelector,
  isLoadingSelector,
} from "../../../core/store-current-weather/selectors";
import {AppStateInterface} from "../../../core/app-state";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {urls} from "../../configs";
import {CityLocalStorageService, CurrentWeatherService} from "../../services";
import {getDailyForecast} from "../../../core/store-daily-forecast/actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit, ErrorStateMatcher {
  isLoading$: Observable<boolean>;
  weather$: Observable<ICurrentWeather | null>;
  error$: Observable<IError | null>;

  math = Math;
  matcher = new ErrorStateMatcher();

  constructor(private store: Store<AppStateInterface>,
              private router: Router,
              private currentWeatherService: CurrentWeatherService,
              private storageService: CityLocalStorageService) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.weather$ = this.store.pipe(select(getCurrentWeatherSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  };

  ngOnInit(): void {
    this.store.dispatch(getCurrentWeather());
  };

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  chooseCity: FormControl = new FormControl('',
    [
      Validators.minLength(2),
      Validators.maxLength(20),
    ]);

  getIconUrl(iconId: string): string {
    return urls.iconUrl(iconId)
  }

  mathRound(number: number): string {
    const t = Math.round(number)
    let temperature = ''
    if (t > 0) temperature = `+${t}`
    if (t < 0) temperature = `${t}`
    if (t === 0) temperature = `0`
    return temperature
  }

  getWindSpeed(speed: number): number {
    return Math.round((speed * (10 / 36)) * 10) / 10
  }

  getCardinalDirection(angle: number): string {
    // const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
    const directions = ['↑ ', '↗', '→', '↘', '↓', '↙', '←', '↖'];
    return directions[Math.round(angle / 45) % 8];
  }

  getDate(utc: number, timeZone: number): string {
    const locateString = (new Date((utc + timeZone) * 1000)).toLocaleString()
    return locateString.split(' ')[1];
  }

  checkCity(e: any) {
    if (!this.chooseCity.invalid) {
      const city = this.chooseCity.value
      this.currentWeatherService.setCity(this.chooseCity.value)
      this.store.dispatch(getCurrentWeather());
      this.store.dispatch(getDailyForecast());
      this.storageService.setLocalInfo(city)
    }
    e.preventDefault()
  };

  errr(): void {
    // console.log(new ErrorHandler().handleError({status: 404, message: 'err'}))

    new ErrorHandler().handleError({status: 404, message: 'err'})

  }

  nav(): void {
    this.router.navigate(['error'])
  }
}
