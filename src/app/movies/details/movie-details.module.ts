import { MovieDetailsContainer } from './movie-details.container';
import { MovieDetailsRoutingModule } from './movies-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { UiModuleModule } from '@ui/ui.module';

@NgModule({
  declarations: [
    MovieDetailsContainer
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    UiModuleModule,
    MatButtonModule
  ]
})
export class MovieDetailsModule { }
