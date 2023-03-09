import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {getDailyForecast} from "../../../core/store-daily-forecast/actions";
import {IDailyForecast, IDailyForecastList, IError} from "../../intefaces";
import {errorSelector, getDailyForecastSelector, isLoadingSelector} from "../../../core/store-daily-forecast/selectors";
import {AppStateInterface} from "../../../core/app-state";
import {ChosenForecastService, DailyForecastService} from "../../services";
import {urls} from "../../configs";

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss']
})
export class DailyForecastComponent implements OnInit {
  isLoading$: Observable<boolean>;
  forecast$: Observable<IDailyForecast | null>;
  error$: Observable<IError | null>;

  forecastDaily: Array<IDailyForecastList[]>;
  dt_txt: string;
  classActive: boolean = false;
  chosenForecast: IDailyForecastList[];

  constructor(private store: Store<AppStateInterface>,
              private service: DailyForecastService,
              private forecastService:ChosenForecastService) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.forecast$ = this.store.pipe(select(getDailyForecastSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  };

  ngOnInit(): void {
    this.store.dispatch(getDailyForecast());
    if (this.forecast$ !== null) {
      this.store.pipe(select(getDailyForecastSelector))
        .subscribe(value => {
          this.forecastDaily = this.service.getDailyForecastArr(value);
        })
    }
  };

  getIconUrl(iconId: string): string {
    return urls.iconUrl(iconId);
  };

  getDay(utc: number): any {
    const day = (new Date((utc * 1000))).toString().split(' ')[0]
    return `day.${day}`;
  };

  getMinTemp(arr: IDailyForecastList[]): { minTemp: string, maxTemp: string } {
    let maxTemp = arr[0].main.temp;
    let minTemp = arr[0].main.temp;
    let temp: number
    arr.map(value => {
      temp = value.main.temp;
      if (maxTemp < temp) {
        maxTemp = temp;
      }
      if (minTemp > temp) {
        minTemp = temp;
      }
    });
    return {minTemp: this.mathRound(minTemp), maxTemp: this.mathRound(maxTemp)};
  };

  mathRound(number: number): string {
    const t = Math.round(number);
    let temperature = '';
    if (t > 0) temperature = `+${t}`;
    if (t < 0) temperature = `${t}`;
    if (t === 0) temperature = `0`;
    return temperature;
  };

  active(dt_txt: string, chosenForecast: IDailyForecastList[]) {
    this.dt_txt = dt_txt;
    this.chosenForecast = chosenForecast;
    this.classActive = true;
    this.forecastService.isScroll().then(value => {
      if (value) {
        const chosenWeatherEl = document.querySelector('app-chosen-forecast')
        chosenWeatherEl!.scrollIntoView({
          block: "center",
          inline: "nearest",
          behavior: "smooth",
        });
      }
    });
  };
}
