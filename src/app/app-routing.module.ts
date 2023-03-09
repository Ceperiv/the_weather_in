import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainLayoutComponent} from "./layouts";
import {HandlerErrorsComponent} from "./components";
import {Error404Component} from "./components";
import {Error404LayoutComponent} from "./layouts/error404-layout/error404-layout.component";

const routes: Routes = [
  {
    path: '', children: [
      {path: '', redirectTo: 'the-weather-in', pathMatch: 'full'},
      {path: 'the-weather-in', component: MainLayoutComponent},
    ],


  },
  {path: 'error', component: HandlerErrorsComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'error404', title: '404', data: {error: 404}},
  {path: 'error404', data: {error: 404}, component: Error404LayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
