import {Injectable} from '@angular/core';
import {IDailyForecast} from "../../intefaces";
import {HttpClient} from "@angular/common/http";
import {urls} from "../../configs";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DailyForecastService {

  constructor(private httpClient: HttpClient) {
  }

  getDailyForecast(city: string, days: number): Observable<IDailyForecast[]> {
    return this.httpClient.get<IDailyForecast[]>(urls.dailyForecastUrl(city, days))
  }
}
