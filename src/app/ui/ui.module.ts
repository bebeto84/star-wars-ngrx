import { NavbarComponent } from './navbar/navbar.component';
import { ImageGetterDirective } from './image-getter.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const DIRECTIVES = [
  NavbarComponent,
  ImageGetterDirective
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
    MatIconModule
  ]
})
export class UiModuleModule { }
