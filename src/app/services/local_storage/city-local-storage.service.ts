import {Injectable} from '@angular/core';

import {ICityLocalStorage} from "../../intefaces";

@Injectable({
  providedIn: 'root'
})
export class CityLocalStorageService {

  constructor() {
  };

  setLocalInfo(newCity: string): void {
    const cityJSON = localStorage.getItem('city') || '';
    if (cityJSON !== '') {
      let cityParse = JSON.parse(cityJSON || '') || {};
      if (cityParse.city.length > 5) {
        cityParse.city.splice(0, 1);
      }
      localStorage.setItem('city', JSON.stringify({city: cityParse.city.concat(newCity)}));
    } else {
      localStorage.setItem('city', JSON.stringify({city: [newCity]}));
    }
  };

  getLocalCity(): ICityLocalStorage {
    if (!localStorage.getItem("city")) {
      return {city: ['Kyiv']}
    } else {
      return JSON.parse(localStorage.getItem('city') || '')
    }
  };

  removeLast(): void {
    if (localStorage.getItem("city")) {
      const cityJSON = localStorage.getItem('city') || '';
      let cityParse = JSON.parse(cityJSON || '') || {};
      console.log(cityParse)
      cityParse.city.splice(cityParse.city.length - 1, 1);
      console.log(cityParse)
      localStorage.setItem('city', JSON.stringify({city: cityParse.city}));
    }
  }
}
