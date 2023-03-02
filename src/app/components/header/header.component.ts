import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  languageList =  [
    {code: 'en', label: 'English'},
    {code: 'ua', label: 'Українська'}
  ];
  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {

  }
  changeLang(lang:string) {
    this.translateService.use(lang)
  }
}
