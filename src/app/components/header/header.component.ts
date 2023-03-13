import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {CurrentWeatherService, LangLocalStorageService} from "../../services";
import {ICityLocalStorage, ILanguageList} from "../../intefaces";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppStateInterface} from "../../../core/app-state";
import {cityStorageSelector} from "../../../core/store-current-weather/selectors";
import {getCurrentWeather} from "../../../core/store-current-weather/actions";
import {getDailyForecast} from "../../../core/store-daily-forecast/actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  preSelected$: Observable<ICityLocalStorage | ''>;
  currentLang: string

  languageList: Array<ILanguageList> = [
    {code: 'en', label: 'English'},
    {code: 'ua', label: 'Українська'},
  ];

  constructor(private translateService: TranslateService,
              private store: Store<AppStateInterface>,
              private currentWeatherService: CurrentWeatherService,
              private storageService: LangLocalStorageService) {
    this.preSelected$ = this.store.pipe(select(cityStorageSelector))
  }

  ngOnInit(): void {
    this.storageService.startLanguage();
    this.currentLang = this.storageService.getLanguageCode();
  };

  changeLang(lang: string) {
    this.storageService.setLanguage(lang)
    this.currentLang = lang
  };

  setCity(e: string): void {
    this.currentWeatherService.setCity(e)
    this.store.dispatch(getCurrentWeather());
    this.store.dispatch(getDailyForecast());
  }
}
