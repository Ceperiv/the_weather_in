import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {getDailyForecast} from "../../../core/store-daily-forecast/actions";
import {IDailyForecast, IDailyForecastList} from "../../intefaces";
import {errorSelector, getDailyForecastSelector, isLoadingSelector} from "../../../core/store-daily-forecast/selectors";
import {AppStateInterface} from "../../../core/app-state";
import {DailyForecastService} from "../../services";
import {urls} from "../../configs";

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss']
})
export class DailyForecastComponent implements OnInit {
  isLoading$: Observable<boolean>;
  forecast$: Observable<IDailyForecast | null>;
  error$: Observable<string | null>;

  forecastDaily: Array<IDailyForecastList[]>


  constructor(private store: Store<AppStateInterface>,
              private service: DailyForecastService) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.forecast$ = this.store.pipe(select(getDailyForecastSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  };

  ngOnInit(): void {
    this.store.dispatch(getDailyForecast());
    this.store.pipe(select(getDailyForecastSelector))
      .subscribe(value => this.forecastDaily = this.service.getDailyForecastArr(value))

  };


  getIconUrl(iconId: string): string {
    return urls.iconUrl(iconId)
  }


  getDate(utc: number, timeZone: number): any {
    const day = (new Date((utc + timeZone) * 1000)).toString().split(' ')[0]
    console.log(day)

    if(day === 'Tue'){

    return 'cw.city'
    } else{

    return  day
    }
  }

  xxx() {
    console.log(this.forecastDaily)
  }

}
