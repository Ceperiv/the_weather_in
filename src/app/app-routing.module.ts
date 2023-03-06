import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainLayoutComponent} from "./layouts";

const routes: Routes = [
  {
    path: '', children: [
      {path: '', redirectTo: 'the-weather-in', pathMatch: 'full'},
      {path: 'the-weather-in', component: MainLayoutComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
