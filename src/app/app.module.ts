import { HttpCacheRequestInterceptor } from './sdk/interceptors/http-cache-request.interceptor';
import { movieReducer } from '@sdk/movie/movie.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffect } from '@sdk/movie';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { UiModuleModule } from '@ui/ui.module';
import { CharacterEffect, characterReducer } from '@sdk/character';

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
      router: routerReducer,
      character: characterReducer
    }),
    EffectsModule.forRoot([
      MovieEffect,
      CharacterEffect
    ]),
    StoreRouterConnectingModule.forRoot({
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpCacheRequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
