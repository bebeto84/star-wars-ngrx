import { LoadingModule } from '@ng-mg/loading-if';
import { UiModuleModule } from './../ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesContainer } from './movies.container';


@NgModule({
  declarations: [
    MoviesContainer
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    UiModuleModule,
    LoadingModule
  ]
})
export class MoviesModule { }
