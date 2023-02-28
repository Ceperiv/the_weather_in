import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './layouts';
import {CoreModule} from "../core/core.module";
import {environment} from "../environments/environment.dev";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
  ],
  imports: [
    CoreModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
