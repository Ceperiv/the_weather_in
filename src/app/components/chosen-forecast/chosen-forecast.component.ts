import {Component, Input} from '@angular/core';
import {IDailyForecastList} from "../../intefaces";
import {urls} from "../../configs";

@Component({
  selector: 'app-chosen-forecast',
  templateUrl: './chosen-forecast.component.html',
  styleUrls: ['./chosen-forecast.component.scss']
})
export class ChosenForecastComponent {
  @Input()
  chosenForecast:IDailyForecastList[]

  math = Math

  getIconUrl(iconId: string): string {
    return urls.iconUrl(iconId);
  };

  mathRound(number: number): string {
    const t = Math.round(number)
    let temperature = ''
    if (t > 0) temperature = `+${t}`
    if (t < 0) temperature = `${t}`
    if (t === 0) temperature = `0`
    return temperature
  };

  getCardinalDirection(angle: number): string {
    const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
    // const directions = ['↑ ', '↗', '→', '↘', '↓', '↙', '←', '↖'];
    return directions[Math.round(angle / 45) % 8];
  };

  getWindSpeed(speed: number): number {
    return Math.round((speed * (10 / 36)) * 10) / 10
  };
}
