import { MovieDetailsContainer } from './movie-details.container';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { UiModuleModule } from '@ui/ui.module';
import { LoadingModule } from '@ng-mg/loading-if';;

@NgModule({
  declarations: [
    MovieDetailsContainer
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    UiModuleModule,
    MatButtonModule,
    LoadingModule
  ]
})
export class MovieDetailsModule { }
