import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {CurrentWeatherService} from "../../services";
import {ICityLocalStorage} from "../../intefaces";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppStateInterface} from "../../../core/app-state";
import {cityStorageSelector} from "../../../core/store-current-weather/selectors";
import {getCurrentWeather} from "../../../core/store-current-weather/actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  preSelected$: Observable<ICityLocalStorage | ''>;

  languageList = [
    {code: 'en', label: 'English'},
    {code: 'ua', label: 'Українська'}
  ];

  constructor(private translateService: TranslateService,
              private store: Store<AppStateInterface>,
              private currentWeatherService: CurrentWeatherService) {
    this.preSelected$ = this.store.pipe(select(cityStorageSelector))
  }

  ngOnInit(): void {

  };

  changeLang(lang: string) {
    this.translateService.use(lang)
  };

  setCity(e: string): void {
    this.currentWeatherService.setCity(e)
    this.store.dispatch(getCurrentWeather());
  }
}
