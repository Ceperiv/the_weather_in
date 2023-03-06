import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ErrorStateMatcher} from '@angular/material/core';

import {ICurrentWeather} from "../../intefaces";
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

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit, ErrorStateMatcher {
  isLoading$: Observable<boolean>;
  weather$: Observable<ICurrentWeather | null>;
  error$: Observable<string | null>;

  matcher = new ErrorStateMatcher()

  constructor(private store: Store<AppStateInterface>,
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
    if (t > 0) temperature = `+ ${t}`
    if (t < 0) temperature = `${t}`
    if (t === 0) temperature = `0`
    return temperature
  }

  getCardinalDirection(angle:number):string {
    // const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
    const directions = ['↑ ', '↗', '→', '↘', '↓', '↙', '←', '↖'];
    return directions[Math.round(angle / 45) % 8];
  }

  checkCity(e: any) {
    if (!this.chooseCity.invalid) {
      this.currentWeatherService.setCity(this.chooseCity.value)
      this.store.dispatch(getCurrentWeather());
      this.storageService.setLocalInfo(this.chooseCity.value)
    }
    e.preventDefault()
  };
}
