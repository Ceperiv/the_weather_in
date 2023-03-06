import {Injectable} from '@angular/core';
import {ICityLocalStorage} from "../../intefaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CityLocalStorageService {

  constructor() {
  }

  setLocalInfo(newCity: string): void {
    const cityJSON = localStorage.getItem('city') || ''
    if (cityJSON !== '') {
      let cityParse = JSON.parse(cityJSON || '') || {}
      if (cityParse.city.length > 5) {
        cityParse.city.splice(0, 1)
      }
      localStorage.setItem('city', JSON.stringify({city: cityParse.city.concat(newCity)}))
    } else {
      localStorage.setItem('city', JSON.stringify({city: [newCity]}))
    }
  };

  getLocalCity(): ICityLocalStorage {
    if (!localStorage.getItem("city")){
      return  {city:['Kyiv']}
    } else {
    return JSON.parse(localStorage.getItem('city') || '')
    }
  }
}
