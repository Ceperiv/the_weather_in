import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainLayoutComponent} from "./layouts";
import {HandlerErrorsComponent} from "./components/handle-errors/handler-errors.component";

const routes: Routes = [
  {
    path: '', children: [
      {path: '', redirectTo: 'the-weather-in', pathMatch: 'full'},
      {path: 'the-weather-in', component: MainLayoutComponent},
    ],


  },
  {path: 'error', component: HandlerErrorsComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
