import {Component, ErrorHandler, Injectable, NgModule} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-handle-errors',
  template: '<h4>{{err|json}}</h4>',
})

@Injectable()
export class HandlerErrorsComponent implements ErrorHandler{
  err:Observable<any>;

  handleError(error: any): void {
    console.log(error)
    this.err = error
  };

}
