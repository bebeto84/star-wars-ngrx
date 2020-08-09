import { LoadingModule } from '@ng-mg/loading-if';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailsRoutingModule } from './character-details-routing.module';
import { CharacterDetailsComponent } from './character-details.component';
import { UiModuleModule } from '@ui/ui.module';


@NgModule({
  declarations: [CharacterDetailsComponent],
  imports: [
    CommonModule,
    CharacterDetailsRoutingModule,
    LoadingModule,
    UiModuleModule
  ]
})
export class CharacterDetailsModule { }
