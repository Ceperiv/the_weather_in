import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICurrentWeather} from "../../intefaces";
import {urls} from "../../configs";
import {Store} from "@ngrx/store";
import {AppStateInterface} from "../../../core/app-state";

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {
  city: string

  constructor(private httpClient: HttpClient,
              private store: Store<AppStateInterface>) {
  };

  getCurrentWeather(city: string): Observable<ICurrentWeather> {
    return this.httpClient.get<ICurrentWeather>(urls.currentWeatherUrl(city));
  };

  setCity(city: string): void {
    this.city = city
  }

  getCity(): string {
    return this.city
  }

}
