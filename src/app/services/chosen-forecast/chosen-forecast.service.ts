import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChosenForecastService {

  constructor() { }

  isScroll(): Promise<boolean> {
    const promise: any = new Promise((resolve) => {
      const interval = setInterval(() => {
        const chosenWeatherEl = document.querySelector('app-chosen-forecast')
        if (chosenWeatherEl !== null) {
          resolve(true)
          clearInterval(interval)
        }
      }, 300)
    })
    return promise
  }
}
