import { MovieListComponent } from './movie-list/movie-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageGetterDirective } from './image-getter.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

const DIRECTIVES = [
  NavbarComponent,
  ImageGetterDirective,
  MovieListComponent
];

@NgModule({
  declarations: [
    ...DIRECTIVES
  ],
  exports: [
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    // TODO: Move to HeaderModule or create LayoutModule
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ]
})
export class UiModuleModule { }
