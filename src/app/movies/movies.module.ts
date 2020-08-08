import { UiModuleModule } from './../ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesContainer } from './movies.container';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffect, movieReducer } from '@sdk/movie';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    MoviesContainer
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatCardModule,
    UiModuleModule
  /*   StoreModule.forFeature('movieFeature', { movie: movieReducer}),
    EffectsModule.forFeature([MovieEffect]) */
  ]
})
export class MoviesModule { }
