import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICurrentWeather} from "../../intefaces";
import {urls} from "../../configs";

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  constructor(private httpClient: HttpClient) {
  };

  getCurrentWeather(city: string): Observable<ICurrentWeather> {
    return this.httpClient.get<ICurrentWeather>(urls.currentWeatherUrl(city));
  };
}
