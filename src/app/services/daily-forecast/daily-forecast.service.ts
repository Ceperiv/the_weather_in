import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IDailyForecast, IDailyForecastList} from "../../intefaces";
import {urls} from "../../configs";

@Injectable({
  providedIn: 'root'
})
export class DailyForecastService {

  timeArr: Array<number> = []
  forecastArr: Array<IDailyForecastList> = []
  my1stDayIndices: Array<number> = []
  lengthArrOf1stDay: number
  forecastDaily: Array<IDailyForecastList[]> = []

  constructor(private httpClient: HttpClient) {
  };

  getDailyForecast(city: string, days: number): Observable<IDailyForecast> {
    return this.httpClient.get<IDailyForecast>(urls.dailyForecastUrl(city, days));
  };
  getDailyForecastArr(initialForecast:IDailyForecast | null):Array<IDailyForecastList[]> {
    if (initialForecast) {
      const newDate = new Date()
      const currentTime = newDate.getHours()
      //current time :number

      initialForecast.list.map(
        (value, index) => {
          this.timeArr.push(+value.dt_txt.split(' ')[1].split(':')[0]);
          this.forecastArr.push(value)
          //time arr - array of just numbers of hour daily forecast :number
        }
      )
      switch (true) {
        case (currentTime === 23 || currentTime < 2):
          this.my1stDayIndices = [0, 1, 2, 3, 4, 5, 6, 7];
          this.lengthArrOf1stDay = 8;
          break
        case (currentTime >= 2 && currentTime < 5):
          this.my1stDayIndices = [0, 1, 2, 3, 4, 5, 6];
          this.lengthArrOf1stDay = 7;
          break
        case (currentTime >= 5 && currentTime < 8):
          this.my1stDayIndices = [0, 1, 2, 3, 4, 5];
          this.lengthArrOf1stDay = 6;
          break
        case (currentTime >= 8 && currentTime < 11):
          this.my1stDayIndices = [0, 1, 2, 3, 4];
          this.lengthArrOf1stDay = 5;
          break
        case (currentTime >= 11 && currentTime < 14):
          this.my1stDayIndices = [0, 1, 2, 3];
          this.lengthArrOf1stDay = 4;
          break
        case (currentTime >= 14 && currentTime < 17):
          this.my1stDayIndices = [0, 1, 2];
          this.lengthArrOf1stDay = 3;
          break
        case (currentTime >= 17 && currentTime < 20):
          this.my1stDayIndices = [0, 1];
          this.lengthArrOf1stDay = 2;
          break
        case (currentTime >= 20 && currentTime < 23):
          this.my1stDayIndices = [0];
          this.lengthArrOf1stDay = 1;
          break
      }
      const bufferArr: any = []
      this.my1stDayIndices.forEach(j => Object.assign(bufferArr.push(this.forecastArr[j])));
      this.forecastDaily.push(bufferArr)

      for (let i = 0; i < 5; i++) {
        let nextDayIndices = [
          this.lengthArrOf1stDay + i * 8,
          (this.lengthArrOf1stDay + 1) + i * 8,
          (this.lengthArrOf1stDay + 2) + i * 8,
          (this.lengthArrOf1stDay + 3) + i * 8,
          (this.lengthArrOf1stDay + 4) + i * 8,
          (this.lengthArrOf1stDay + 5) + i * 8,
          (this.lengthArrOf1stDay + 6) + i * 8,
          (this.lengthArrOf1stDay + 7) + i * 8,
        ]
        const bufferArr: any = []
        nextDayIndices.forEach(j => Object.assign(bufferArr.push(this.forecastArr[j])));
        this.forecastDaily.push(bufferArr)
      }
    }
    return this.forecastDaily
  };
}
