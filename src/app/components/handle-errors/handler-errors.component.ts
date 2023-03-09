import {Component, ErrorHandler, Injectable, NgModule} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-handle-errors',
  templateUrl: './handler-errors.component.html',
  styleUrls: ['./handler-errors.component.scss']
})

@Injectable()
export class HandlerErrorsComponent implements ErrorHandler{
  err:Observable<any>

  constructor() {
    console.log('im here')
  }

  handleError(error: any): void {
    console.log(error)
    this.err = error
  }

}
