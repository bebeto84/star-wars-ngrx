import { movieReducer } from '@sdk/movie/movie.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffect } from '@sdk/movie';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { UiModuleModule } from '@ui/ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiModuleModule,

    // TODO: Move to sdk module?
    HttpClientModule,

    // TODO: Move to `forFeature` both
    StoreModule.forRoot({
      movie: movieReducer,
      router: routerReducer
    }),
    EffectsModule.forRoot([MovieEffect]),
    StoreRouterConnectingModule.forRoot({
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
