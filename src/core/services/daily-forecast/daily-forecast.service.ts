import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IDailyForecast} from "../../intefaces";
import {urls} from "../../configs";

@Injectable({
  providedIn: 'root'
})
export class DailyForecastService {

  constructor(private httpClient: HttpClient) {
  };

  getDailyForecast(city: string, days: number): Observable<IDailyForecast> {
    return this.httpClient.get<IDailyForecast>(urls.dailyForecastUrl(city, days));
  };
}
