import {Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LangLocalStorageService {

  constructor(private translateService: TranslateService) {
  };

  startLanguage(): void {
    if (localStorage.getItem("lang")) {
      const langObj: { lang: string } = JSON.parse(localStorage.getItem('lang') || '');
      this.translateService.use(langObj.lang);
    }
  };


  setLanguage(lang: string): void {
    localStorage.setItem('lang', JSON.stringify({lang}));
    this.translateService.use(lang);
  };
  getLanguageCode():string{
    const langJSON = localStorage.getItem("lang");
    return JSON.parse(langJSON || '').lang
  }
}
