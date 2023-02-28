import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainLayoutComponent} from "./layouts";

const routes: Routes = [
  {
    path: '', children: [
      {path: '', redirectTo: 'current-weather', pathMatch: 'full'},
      {path: 'current-weather', component: MainLayoutComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
